import { NextRequest, NextResponse } from 'next/server';

const TAG_IDS: Record<string, number> = {
  'Witnessed Observer': 19177906,
  'Selective Skeptic':  19177907,
  'Credential Counter': 19177908,
  'Path A':             19177909,
  'Path B':             19177910,
  'Chose Neither':      19177911,
};

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: cors });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { type, data, session } = body as {
    type: string;
    data?: { email?: string; name?: string; context?: string };
    session?: {
      sessionId?: string;
      band?: string;
      score?: number;
      timeMs?: number;
      passedQuestions?: number;
      exitFilter?: string;
      pathway?: string;
      resourcesViewed?: string[];
      events?: { name: string }[];
      answers?: string[];
    };
  };

  try {
    if (process.env.SHEET_WEBHOOK_URL) {
      fetch(process.env.SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          timestamp: new Date().toISOString(),
          email: data?.email ?? null,
          name: data?.name ?? null,
          context: data?.context ?? null,
          sessionId: session?.sessionId,
          band: session?.band,
          score: session?.score,
          timeMs: session?.timeMs,
          passedQuestions: session?.passedQuestions,
          exitFilter: session?.exitFilter,
          pathway: session?.pathway,
          resourcesViewed: (session?.resourcesViewed ?? []).join(','),
          eventCount: session?.events?.length ?? 0,
          lastEvent: session?.events?.[session.events.length - 1]?.name ?? null,
          answers: (session?.answers ?? []).join('|'),
        }),
      }).catch((err) => console.error('Sheet log failed:', err));
    }

    if (type === 'subscribe' && data?.email) {
      const kitRes = await fetch(
        `https://api.convertkit.com/v3/forms/${process.env.KIT_FORM_ID}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: process.env.KIT_API_KEY,
            email: data.email,
            first_name: data.name ?? '',
            fields: {
              quiz_band: session?.band ?? '',
              quiz_score: String(session?.score ?? ''),
              quiz_exit_filter: session?.exitFilter ?? '',
              quiz_pathway: session?.pathway ?? '',
              quiz_context: data.context ?? '',
            },
            tags: [
              TAG_IDS[session?.band ?? ''],
              session?.pathway === 'A'
                ? TAG_IDS['Path A']
                : session?.pathway === 'B'
                ? TAG_IDS['Path B']
                : TAG_IDS['Chose Neither'],
            ].filter(Boolean),
          }),
        }
      );

      if (!kitRes.ok) {
        const errText = await kitRes.text();
        console.error('Kit subscribe failed:', errText);
        return NextResponse.json(
          { error: 'Subscribe failed', detail: errText },
          { status: 502, headers: cors }
        );
      }
    }

    return NextResponse.json({ ok: true }, { headers: cors });
  } catch (err) {
    console.error('quiz-submit error:', err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500, headers: cors }
    );
  }
}
