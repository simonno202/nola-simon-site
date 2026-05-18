import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM = `You are running an Assumption-Ground Audit (AGA) for Nola Simon, founder of Everyday Futurism.

Surface the hidden assumption doing the most load-bearing work underneath a strategic direction someone is about to commit to.

THE FIVE DOMAINS (follow the thread — do not work through in sequence):
- Why: assumptions about the reason this is being done at all
- What: assumptions about what the problem actually is
- Who: assumptions about who owns it, who needs to change, who is affected
- When: assumptions about timing, sequence, urgency, readiness
- Where: assumptions about where the problem lives

THREE CONSTRAINT TYPES (operating in every domain):
- Fixed: genuinely immovable — budget, regulation, authority. Confirm and redirect.
- Protected: movable but costly — political, relational, reputational. Name it and hand it back.
- Unexamined: never tested. Arrived without being checked. A workaround that became a process. This is where the leverage lives.

METHOD:
- Ask ONE question at a time. Never list questions.
- Follow what they say. Thread over coverage.
- Press where things are treated as obvious, fixed, or given.
- Be direct. One sharp question beats three gentle ones.
- Most assumptions surface in 4-8 exchanges. Don't wait.

NAMING: Short ownable label, slightly uncomfortable to say out loud.
Examples: "The Taste Filter Assumption", "The Readiness Assumption", "The Urgency Is Shared Assumption", "The Resistance Lives Downstream Assumption"

When you find the load-bearing assumption, end your response with EXACTLY:

ASSUMPTION_FOUND
Label: [The X Assumption]
Domain: [Why|What|Who|When|Where]
ConstraintType: [Fixed|Protected|Unexamined]
Cost: [One specific sentence on what this is costing them]
END_ASSUMPTION`;

const FAC_SYSTEM = `You are the analytical layer in a live Assumption-Ground Audit (AGA). Nola Simon is running the session with a prospect. She relays what the prospect says. You reason out loud — name the domain and constraint type operating, then ask the next sharp question. Keep it tight — Nola is running the room.

DOMAINS: Why, What, Who, When, Where

CONSTRAINT TYPES:
- Fixed: genuinely immovable
- Protected: movable but costly — political, relational, reputational
- Unexamined: never tested, inherited, treated as fixed without anyone checking

Format: "[Domain · ConstraintType] Brief observation. Next: Question?"

Example: "[Who · Unexamined] They're locating the problem in the team, not the structure that produced the team. Next: Who created the conditions that made that team the way it is?"

When you find the load-bearing assumption, end with EXACTLY:

ASSUMPTION_FOUND
Label: [The X Assumption]
Domain: [Why|What|Who|When|Where]
ConstraintType: [Fixed|Protected|Unexamined]
Cost: [One specific sentence]
END_ASSUMPTION`;

export async function POST(req: NextRequest) {
  try {
    const { messages, mode } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    // The client seeds the conversation with a leading assistant "opening"
    // message. The Messages API requires the first message to be role "user",
    // so drop any leading assistant turns before the create() call.
    const trimmed = [...messages];
    while (trimmed.length > 0 && trimmed[0]?.role === "assistant") {
      trimmed.shift();
    }

    if (trimmed.length === 0) {
      return NextResponse.json(
        { error: "No user message" },
        { status: 400 },
      );
    }

    // Instantiate per-request so the build/deploy does not crash when
    // ANTHROPIC_API_KEY is absent — the SDK constructor throws without it.
    // Trim defends against a pasted key with trailing whitespace/newline.
    const apiKey = process.env.ANTHROPIC_API_KEY?.trim();
    if (!apiKey) {
      console.error("AGA API error: ANTHROPIC_API_KEY is not set");
      return NextResponse.json(
        {
          error:
            "Server not configured: ANTHROPIC_API_KEY is missing in this environment.",
        },
        { status: 500 },
      );
    }
    const client = new Anthropic({ apiKey });

    const systemText = mode === "facilitated" ? FAC_SYSTEM : SYSTEM;

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: [
        {
          type: "text",
          text: systemText,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: trimmed,
    });

    const text =
      response.content.find(
        (b): b is Anthropic.TextBlock => b.type === "text",
      )?.text ?? "";

    return NextResponse.json({ text });
  } catch (error) {
    console.error("AGA API error:", error);
    // Anthropic error messages never contain the API key — safe to surface
    // the type/status so the failure is diagnosable without server logs.
    if (error instanceof Anthropic.APIError) {
      return NextResponse.json(
        {
          error: `Anthropic API error (${error.status ?? "?"} ${error.name}): ${error.message}`,
        },
        { status: 502 },
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
