export type SignalStatus = "active" | "emerging" | "resolved" | "breaking";

export interface Signal {
  id: string;
  date: string;
  status: SignalStatus;
  signal: string;
  origin: string;
  evidence: string;
  read: string;
  tension: string;
  question: string;
  relatedTo?: string[];
}

export interface Convergence {
  id: string;
  date: string;
  status: SignalStatus;
  signals: string[];
  title: string;
  convergence: string;
  theFlip: string;
  theCrack: string;
  theEmptyRoom: string;
  theSurveillance: string;
  theWitness: string;
  theReframe: string;
  witnessedTrust: string;
  question: string;
  question2: string;
}

export const signals: Signal[] = [
  {
    id: "credential-compression",
    date: "April 2026",
    status: "active",
    signal: "Credential gatekeeping as a gendered threat response to AI disruption",
    origin: "A researcher studying workplace belonging and neurodiversity — Threads, April 2026",
    evidence: "A man approached a female speaker after a conference to question her credentials. The people deploying AI are disrupting long-standing expertise hierarchies. The voices now standing out may be the ones historically excluded — because the people who built these systems trained them on centuries of male-dominated publishing, compressing dominant voices and amplifying those who were not.",
    read: "The credentialing system is built on assumptions about who counts as an expert. The way AI is being deployed is restructuring that system. The people most threatened are defending an assumption they've never had to examine — because it always worked in their favour.",
    tension: "Naming this is professionally dangerous. Saying that people with disabilities, ADHD, LGBTQ+, and transgender identities may have more impact in an AI-compressed world will antagonize people with institutional power. Not because the observation is wrong. Because it's right — and they have something to lose.",
    question: "If reading this made something tighten in you — where did you feel it? Heart, gut, chest? Was it fear, or anger, or something that felt like both? What assumption of yours just got touched?",
    relatedTo: ["physical-presence", "embodiment-gap", "inclusion-inversion", "presence-infrastructure"],
  },
  {
    id: "physical-presence",
    date: "April 2026",
    status: "active",
    signal: "Physical presence as the last uncompressible legitimacy marker",
    origin: "Threads conversation, April 2026",
    evidence: "Conference attendance is flooding feeds in a way not seen since before COVID. People want to feel like they matter, like they belong — and walking physically into a room does something for some people that a screen never quite does. Employer-funded conference attendance has become a flex. A presentation strategist confirms it from the market: as AI content rises, interest in in-person events is quickly rising too.",
    read: "Physical presence is the last thing AI can't replicate or simulate. The room is where belonging gets triggered — and where institutional backing gets displayed. Concert tickets have skyrocketed. Residencies are more popular than tours. The market figured this out before the methodology did.",
    tension: "Building a framework around physical presence as the premium experience assumes that presence is equally accessible. It isn't. The price of the room is rising — in conferences, in concerts, in cities, in countries stable enough to host. The people being priced out first are the ones for whom the room was never fully safe to begin with.",
    question: "When you think about the rooms you've been in that felt worth being in — who wasn't there? Was their absence noticed? By whom?",
    relatedTo: ["credential-compression", "inclusion-inversion", "environment-gap", "presence-infrastructure"],
  },
  {
    id: "futures-methodology",
    date: "April 2026",
    status: "active",
    signal: "Futures methodology treats signals as cognitive objects — stripping the emotional intelligence required to sit with disruption",
    origin: "A prominent futurist — LinkedIn, April 2026",
    evidence: "A prominent futurist shares a framework: it only takes 5 minutes to future. Pick a signal. Write 3 positives and 3 negatives. Consider impact. Clean, teachable, repeatable — and completely missing what happens in the body when you sit with a signal that threatens something you've built your identity around.",
    read: "The futures industry has built a cognitive bypass around disruption. Five minutes assumes an open mind is freely available — that the person doing the exercise isn't personally threatened by the signal they're examining. For the people who most need futures thinking, a rational pros-and-cons exercise is a bypass, not a practice.",
    tension: "Futurists who teach this way aren't wrong — the framework works for people who aren't threatened by the signal. But that's a very specific audience. The people most resistant to futures thinking aren't failing to think. They're feeling — and nobody is giving them a methodology for that.",
    question: "Think of a change you've been resisting. Did you resist it with your mind — or with something else? Where did the resistance live?",
    relatedTo: ["embodiment-gap", "credential-compression", "presence-infrastructure"],
  },
  {
    id: "embodiment-gap",
    date: "April 2026",
    status: "active",
    signal: "The embodiment gap — presence can't be performed, only inhabited",
    origin: "Two theatre-trained practitioners — LinkedIn + Threads, independent, same week, April 2026",
    evidence: "Two theatre-trained practitioners. Same methodology. Same week. Neither knew the other was doing it. One: presence work that stays cognitive fails when the person hasn't done the psychophysical work of understanding what they're actually radiating. The other: most people don't need another tip about what to do with their hands. They need to stop abandoning themselves the second they feel watched. Stop performing confidence. Start embodying authority. A celebrated actor's 20 failed takes — he went behind the set and moved his body. He nailed it after lunch.",
    read: "The leadership development industry teaches people to perform confidence rather than locate it. Theatre has known the alternative for a century. Two practitioners are independently migrating this knowledge into professional contexts right now — because the gap between performed and inhabited has become impossible to ignore. AI can generate the polished version. It cannot generate the moment when a person is fully inside themselves.",
    tension: "Telling people to embody their authority assumes the body is a safe place to inhabit. For many people — particularly those whose physical presence has historically been read as threat rather than authority — this advice lands very differently. The instruction to radiate more fully can be a liberation or a demand, depending entirely on whose body you're in.",
    question: "Is there a version of yourself you perform when you feel watched? When did you learn to do that — and what were you protecting?",
    relatedTo: ["futures-methodology", "physical-presence", "inclusion-inversion", "presence-infrastructure"],
  },
  {
    id: "environment-gap",
    date: "April 2026",
    status: "active",
    signal: "Physical environment either feeds or starves the psychological conditions for presence",
    origin: "A behavioural scientist — book publication, April 2026",
    evidence: "New book argues our physical world either feeds or starves the three core psychological needs that determine whether we thrive. The spaces where we live, work, and play are not neutral containers — they are active participants in whether presence is possible. You can do all the psychophysical work — and a bad room will still hollow you out.",
    read: "Presence isn't just internal. The environment is either creating the conditions for it or making it structurally impossible. This applies at every scale: the desk, the office, the building, the city, the country. Which environments feed presence — and which ones starve it — is not a random distribution.",
    tension: "The environments that feed presence were designed for the people who already had power. The open plan office. The conference hotel. The city with the residency. The country stable enough to host. Optimizing your environment for presence assumes you have meaningful choice over your environment.",
    question: "Where do you do your best thinking? Who designed that space — and who was it designed for? Who doesn't have access to it?",
    relatedTo: ["physical-presence", "inclusion-inversion", "embodiment-gap", "presence-infrastructure"],
  },
  {
    id: "inclusion-inversion",
    date: "April 2026",
    status: "active",
    signal: "Presence is power is an old argument — the inclusion inversion",
    origin: "The convergence itself, April 2026",
    evidence: "Concert tickets have skyrocketed. Residencies are more popular than tours. Which residencies are possible depends on which countries are stable enough to host. Who defines stable enough? The people already in the room. A major Canadian telecommunications company offers buyouts to nearly half its workforce — April 27, 2026. A major Canadian financial institution ranked first for AI maturity in its sector, with a billion-dollar enterprise value target, one fifth from improved efficiency.",
    read: "The response to AI compression is building a new hierarchy around what can't be compressed — physical presence, embodied authority, the right environment. But presence as power is not a new idea. It is the old hierarchy reasserting itself through a new legitimizing frame. The people most excited by the flip are the same people being laid off first. They cannot afford the concert ticket. They cannot travel to the residency. They are being priced out of the presence economy at the exact moment presence becomes the premium.",
    tension: "The AI disruption narrative promised a leveling. What's actually happening is a reconstruction — of credential systems, presence hierarchies, environmental access, and geographic stability — using the same definitions, set by the same people, that structured the previous hierarchy. Nobody is auditing the assumptions inside the solution.",
    question: "If following this felt like clarity rather than cost — if it felt like discovery rather than threat — you already know where you are in the hierarchy.",
    relatedTo: ["credential-compression", "physical-presence", "embodiment-gap", "environment-gap", "presence-infrastructure"],
  },
  {
    id: "presence-infrastructure",
    date: "April 2026",
    status: "active",
    signal: "The infrastructure of presence — who builds it, who can afford it, who it was designed for",
    origin: "A presentation strategist — LinkedIn, April 2026",
    evidence: "A prominent presentation strategist built the structural framework for one of the most celebrated tech executives in history. The person most associated with pure, inhabited, reality-distortion-field presence was working from a designed architecture someone else built. That same firm now teaches storytelling techniques to leaders at major technology and enterprise companies — framing in-person events as a major opportunity as AI content rises. Teachable. Scalable. Optimizable. And not cheap.",
    read: "The people we recognize as most powerfully present rarely built that infrastructure alone. Every major keynote speaker has a director, a coach, a speechwriter. The residency has a production team. The infrastructure of presence is an industry — well-funded, well-connected, and almost entirely oriented toward people already in the room. People deploying AI will compress the surface layer of it. What survives requires safety, time, resources, and a body the world reads as worth listening to.",
    tension: "The myth was pure presence. The reality was a framework underneath. When we hold up inhabited authority as the new premium — the thing AI can't compress — we rarely mention that the most celebrated examples of it were infrastructured by firms most people can't afford. The framework democratizes the technique. It does not democratize the access.",
    question: "Who built the infrastructure underneath the presence you most admire? Do you know their name? Are they in the room when the applause happens?",
    relatedTo: ["embodiment-gap", "physical-presence", "inclusion-inversion", "futures-methodology", "credential-compression"],
  },
  {
    id: "verbal-ai-wfh-accountability",
    date: "April 2026",
    status: "active",
    signal: "Verbal AI tools (transcription, dictation, meeting summarization) work better in quiet home environments — potentially driving higher WFH rates",
    origin: "Nick Bloom, Stanford Professor, LinkedIn post — April 29, 2026. Via Palladio AI CEO David Purdy.",
    evidence: "Bloom cites a Bay Area AI company that values WFH specifically because AI verbal engagement requires low background noise. Transcription, dictation, calls, and discussions can be summarized and queried in AI — hard in open offices, easy on video or while commuting.",
    read: "The productivity frame is the decoy. The real assumption underneath: that AI capture is neutral and universal. It isn't. Who controls what gets recorded, summarized, and surfaced — and who quietly opts out — is a power question, not a productivity question.",
    tension: "Organizations mandating RTO may be actively working against their own AI investment. The assumption that presence equals productivity collides with the assumption that AI tools are environment-agnostic.",
    question: "The ultimate perk is who gets to avoid the recording and the accountability.",
    relatedTo: ["witnessed-trust", "assumption-ground-audit"],
  },
  {
    id: "surveillance-trust",
    date: "April 2026",
    status: "active",
    signal: "Surveillance is the confession that proximity never built trust — it just controlled who received it",
    origin: "The convergence itself, April 2026",
    evidence: "AI is increasingly deployed to monitor work. Keystrokes tracked. Calls recorded. Sentiment flagged. Productivity scored. Remote work — the accommodation that made work possible for many people outside the room — became the condition under which monitoring became acceptable. When an institution trains an AI system on the behavioral patterns of the people it already trusted — and then uses that system to evaluate everyone else against that standard — the person disappears into the pattern. The pattern was built on what the room decided was normal. Productive. Trustworthy. The AI isn't watching you. It's comparing you to a model built before you arrived. So the question isn't whether this is intentional. The question is: when the people most likely to work outside the room are also the people for whom the room was never safe — and remote work is the condition under which monitoring becomes acceptable — who is being measured most closely? And against whose standard? And when half the room disappears — when the workforce shrinks and the people being monitored are gone — what's left isn't trust. It's process. Automated process running on patterns of people who no longer work there. The institution built monitoring where trust should have been. When the monitoring has no one left to watch, what happens to trust?",
    read: "Proximity bias decided who got trusted. Surveillance filled the gap where trust should have been. People set up AI to run the surveillance. It trains on the output. The return to office mandate sits on top of this: if presence built trust, why does the room need monitoring software? The circular argument collapses. The room never trusted the people in it. It just trusted them more than the people outside.",
    tension: "The institution built monitoring where trust should have been. That's not a technical problem. It's a decision about what counts as evidence of good work — and who gets to decide. RTO isn't about collaboration. It's about returning to a legibility system the institution already knew how to read.",
    question: "What are you actually measuring when you monitor work? And whose definition of good work is the benchmark built on?",
    relatedTo: ["inclusion-inversion", "credential-compression", "physical-presence", "presence-infrastructure"],
  },
];

export const convergences: Convergence[] = [
  {
    id: "the-uncompressible",
    date: "April 2026",
    status: "breaking",
    signals: ["credential-compression", "physical-presence", "futures-methodology", "embodiment-gap", "environment-gap", "inclusion-inversion", "presence-infrastructure", "surveillance-trust"],
    title: "What AI can't do is tell you what's not worth doing",
    convergence: "Eight signals. All pointing at the same pressure point from different angles. People are using AI to compress everything that can be performed, generated, or optimized. The market responded by pricing physical presence at a premium. Leadership development responded by teaching embodied authority. Futures methodology responded with five-minute frameworks. Presence infrastructure firms responded by repackaging their techniques as competitive advantage. And underneath all of it, the same people who were excluded from the old credential system are being excluded from the new presence economy — while the framework being built to explain it hasn't noticed yet.",
    theFlip: "Presence is power. That is not a new idea. It is the oldest argument in the room — whose body reads as authoritative, whose voice carries weight, whose physical arrival signals legitimacy. Deploying AI didn't dismantle that argument. It gave it a new justification. And the infrastructure that makes presence legible — the coaches, the directors, the speechwriters, the curriculum writers — was built by and for the people already in the room.",
    theCrack: "Who built the framework underneath the most celebrated tech executive in history? A firm whose clients are the largest companies in the world. Who is being laid off while the presence economy is being priced upward? The people for whom the flip felt exciting. A major telecommunications company empties rooms. A major financial institution wins AI rankings. Concert tickets are unaffordable. Retreats that once filled are being cancelled — not because the value disappeared, but because travel to destinations that once felt accessible no longer does. Countries that were standard retreat locations are being reconsidered. The infrastructure has always had a price. The room was always the assumption.",
    theEmptyRoom: "What if there's no room? The people who were never in the room built their own — online communities, distributed networks, digital presence as the only presence available. AI was supposed to be their amplifier. Then they were let go. Overhiring? Restructuring? Using AI as the excuse to reduce headcount? All plausible. None provable. The market priced them out of the physical alternatives at the same time. The room was never the answer. It was the next assumption.",
    theSurveillance: "The room built presence as the proxy for trust. Remote work — the accommodation that made work possible for many people who were never fully safe in the room — became the condition under which monitoring became acceptable. Which means the people who needed the room least became the most surveilled. People created the surveillance. They used AI to scale the assumption underneath it. The AI isn't watching you. It's comparing you to a model built on the people the room already trusted. When those people are gone — laid off, bought out, restructured away — what's left isn't trust. It's process running on patterns of people who no longer work there.",
    theWitness: "I am not observing from outside this system. I started my career at a major Canadian telecommunications company. I spent 17 years at one of Canada's largest financial institutions — inside when the AI investment decisions were being made, before they had rankings or billion-dollar targets. My team won a global hackathon. I didn't build the solution — I was the communications expert. The VP sponsor called me the MVP. I'd been naming that problem for ten years, complaining about the duplicate transactions that needed to be cancelled — a real risk — but assigned to the wrong people to fix. When the solution arrived, I championed it. It worked because the problem was real and someone had been saying so. What AI can't do is tell you what's not worth doing. That took ten years of human friction. That's the work that happens before the tool. That's the window. That's the methodology.",
    theReframe: "Being outside the room wasn't the disadvantage we were told it was. The room creates consensus. Consensus creates blind spots. The people shaped by the infrastructure learn which parts of themselves to suppress to make the room comfortable. The person who was never let in still has the raw signal. The unprocessed read. The decade of friction with a problem the room kept assigning because fixing it was too expensive. That is the methodological advantage. Not despite being outside — because of it. People built the biggest room ever. Trained it on the consensus. The people whose voices got compressed inside it can see the edges that the room cannot. Proximity to power was never the credential. Distance from the consensus is.",
    witnessedTrust: "At the bottom of every layer is the same question.\n\nWhat are you calling trust?\n\nAnd what is it actually built on?\n\nWitnessed Trust is trust that accrues through observable behavior over time. Not monitored behavior. Witnessed. There is a difference. Monitoring assumes guilt. Witnessing assumes presence.\n\nThe institution surveils because it never learned to witness. The institution uses AI to scale what it never resolved.\n\nThat is the assumption in the room. That is the audit.\n\nYou don't build Witnessed Trust by announcing it. You build it by doing the observable thing, in public, with your name on it, before anyone asks you to.\n\nThis signal tracker is the observable thing. A rabbit hole in plain sight.",
    question: "If this felt like discovery rather than cost — if the flip felt exciting rather than threatening — you already know where you are in the hierarchy. Sit with that. That's where the work starts.",
    question2: "How did that land — in your body, before you had words for it?\n\nRelief. Threat. Or something more complicated?\n\nThat reaction is the methodology running your life and work. Not the one you would describe in a bio. The one that is actually in charge.\n\nYou do not have to answer out loud. But you already know.",
  },
];
