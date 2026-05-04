export interface Question {
  text: string;
  subtext?: string;
  options: string[];
  correct: number;
  commentary?: string;
  noticing?: string;
}

export interface ResultBand {
  range: [number, number];
  key: string;
  band: string;
  diagnosis: string;
  body: string;
  blindspot: string;
  notice: string;
}

export interface Act {
  label: string;
  title: string;
  start: number;
  end: number;
}

export const questions: Question[] = [
  {
    text: "A PhD in the field vs. 20 years of lived practitioner experience.",
    subtext: "Someone is advising your organization on a genuinely hard decision. Which do you weight more?",
    options: [
      "The PhD — rigorous training in how to think about evidence is foundational",
      "The practitioner — real decisions at real scale with real consequences are the actual laboratory",
      "Depends entirely on what kind of decision it is and whether the PhD ever left the building",
      "I've met enough of both to have lost sleep over this question",
    ],
    correct: 2,
    commentary: "The credential exists to stand in for judgment you can't verify directly. The practitioner's record is the judgment — if you can actually see it.",
    noticing: "volume",
  },
  {
    text: "A regular byline in a respected publication vs. being interviewed as an expert by a journalist from the same publication.",
    subtext: "Which is a stronger signal of original thinking?",
    options: [
      "The byline — they constructed an argument, defended it through editorial review, and put their name on the conclusion",
      "The interview — someone else judged them worth quoting, which is its own filter",
      "Both are media placements and most readers can't tell them apart",
      "Depends on whether the journalist was asking hard questions or writing something they'd already decided",
    ],
    correct: 0,
    commentary: "The interview feels more prestigious — someone else chose them. But the byline requires constructing an actual argument. And it's easier to buy.",
    noticing: "volume + source",
  },
  {
    text: "A byline in a publication with hundreds of contributors vs. a byline in a publication with a small editorially selected roster.",
    subtext: "Which signals more?",
    options: [
      "Hundreds of contributors — scale suggests real reach and influence",
      "Small editorially selected roster — someone independent decided this person belonged there",
      "Depends on whether the contributor slot was earned, applied for, or purchased",
      "I didn't know bylines could be purchased until recently and now I can't unknow it",
    ],
    correct: 1,
    commentary: "Contributor networks changed this question. Some prestigious-sounding bylines are now purchased slots with no editorial filter.",
    noticing: "volume + source",
  },
  {
    text: "A Forbes contributor byline vs. a staff-written feature about someone in the same publication.",
    subtext: "Which is a stronger trust signal?",
    options: [
      "The contributor byline — they wrote it themselves, which requires constructing an actual argument",
      "The staff feature — a journalist with no stake in the outcome decided they were worth covering",
      "Most readers assume contributor means journalist. It often means neither.",
      "The contributor network model has made this question genuinely difficult to answer at a glance",
    ],
    correct: 1,
    commentary: "Most readers can't distinguish 'Forbes contributor' from 'Forbes journalist.' The publication is aware of this.",
    noticing: "volume + source + incentive",
  },
  {
    text: "A glowing national media profile that the subject pitched vs. an investigation the subject tried to stop.",
    subtext: "Which tells you more?",
    options: [
      "The pitched profile — they were confident enough in their record to invite scrutiny",
      "The investigation they tried to stop — a journalist who had to fight for the story is operating as an actual filter",
      "Both are media coverage and most audiences treat them as equivalent",
      "Click-dependent media is an attention filter not an accuracy filter and those produce very different stories",
    ],
    correct: 1,
    commentary: "A story the subject tried to stop passed through an actual filter. Almost nothing else in media can say that.",
    noticing: "source + incentive",
  },
  {
    text: "A major media outlet that runs on advertising and clicks vs. one that runs on subscriptions and reader trust.",
    subtext: "Which produces more reliable coverage as a trust signal?",
    options: [
      "Advertising-driven — scale of reach implies editorial legitimacy",
      "Subscription-driven — the incentive is accuracy over time rather than attention in the moment",
      "Both can be sensationalist and both can be rigorous — the model doesn't guarantee either",
      "The headline is almost always more alarming than the piece. The piece is almost always more alarming than the evidence. This is not an accident.",
    ],
    correct: 1,
    commentary: "The incentive structure shapes the story before a reporter writes a word.",
    noticing: "incentive structures",
  },
  {
    text: "A podcast with 100+ episodes vs. a podcast with 40 episodes, a documented guest vetting process, and a publicly stated ethical framework for who gets the microphone.",
    subtext: "Which signals more about the host's judgment?",
    options: [
      "100+ episodes — consistency and sustained commitment are genuinely underrated",
      "40 curated episodes with stated ethics — intentional selection and accountability reveal more about how someone actually thinks",
      "Volume without curation is mostly evidence of a good microphone and a recurring calendar invite",
      "I'd listen to three episodes of each before I decided anything",
    ],
    correct: 1,
    commentary: "Volume proves consistency. It doesn't prove judgment.",
    noticing: "selection criteria",
  },
  {
    text: "Frequent guest spots on podcasts that accept open pitches vs. guest spots on podcasts with a known selective vetting process.",
    subtext: "Which signals more?",
    options: [
      "Open pitch appearances — volume of invitations suggests broad market recognition",
      "Selective show appearances — someone who turns most people down said yes to this one",
      "Most podcast listeners don't know which shows have a vetting process and which take everyone",
      "Guest spots on shows that accept random pitches are essentially purchased placements with extra steps",
    ],
    correct: 1,
    commentary: "From the outside, an open-pitch appearance and a curated invitation look identical.",
    noticing: "selection + vetting",
  },
  {
    text: "Someone who built their reputation independently with no institutional backing vs. someone who built it inside large organizations and then left to work independently.",
    subtext: "Which is the stronger trust signal?",
    options: [
      "The independent-only — they never had a logo doing the work for them, which is its own proof",
      "The institutional-only career — large organizations are hard to stay in without delivering something real",
      "The one who did both in sequence — they knew exactly what they were giving up and left anyway, then had to be right about it publicly with consequences",
      "Depends on whether their independent client list was built from scratch or was just former colleagues following them out the door",
    ],
    correct: 2,
    commentary: "The person who left and had to be right publicly, with real consequences — that's a different kind of claim.",
    noticing: "independence",
  },
  {
    text: "A ride-share driver with a 4.9 rating vs. a consultant with a wall of five-star testimonials.",
    subtext: "How much weight do you give either rating?",
    options: [
      "A lot — sustained high ratings across hundreds of interactions are hard to fake",
      "Something — but I know drivers rate passengers and passengers rate drivers and everyone knows what a three-star rating costs",
      "The rating stopped meaning excellent and started meaning I didn't have a problem worth escalating",
      "Both systems select for mutual inflation. The signal didn't just weaken. It inverted.",
    ],
    correct: 2,
    commentary: "4.9 means you didn't file a complaint. The signal has inverted so completely it's now measuring absence of friction, not presence of excellence.",
    noticing: "independence + inflation",
  },
  {
    text: "A written testimonial on someone's website vs. an unsolicited audio or video clip of a client describing a specific outcome in their own words.",
    subtext: "Which do you trust more?",
    options: [
      "The written testimonial — attributed, dated, approved, on record",
      "The audio or video — harder to manufacture, harder to coach, harder to fake the affect",
      "Both are curated — nobody posts the ones where it went sideways",
      "I'd want to know if I could contact the person directly and ask my own questions",
    ],
    correct: 1,
    commentary: "Both are curated. No one posts the ones where it went sideways. The question is which is harder to manufacture.",
    noticing: "curation + independence",
  },
  {
    text: "A published case study with a named client and measurable outcomes vs. no published case studies at all.",
    subtext: "Which makes you more confident in the practitioner?",
    options: [
      "The named case study — specific outcomes from identifiable clients are hard to fabricate",
      "The absence of case studies — the most sensitive high-stakes work often can't survive a client's legal and communications review",
      "Depends entirely on who approved the case study and what they had to gain from approving it",
      "Only the case studies that make the organization look good get published. That's not a coincidence. That's a filter.",
    ],
    correct: 1,
    commentary: "High-stakes work rarely survives a client's legal and comms review. Absence of case studies isn't absence of work.",
    noticing: "curation + approval",
  },
  {
    text: "A case study approved and published with the client's full cooperation vs. an independent assessment written by an observer with no relationship to the subject.",
    subtext: "Which is more reliable evidence?",
    options: [
      "The cooperative case study — inside knowledge produces more accurate detail",
      "The independent assessment — no approval sought, no filter applied, no narrative shaped by the subject",
      "The case study has better information; the independent assessment has better integrity — and those are different things",
      "Every cooperative case study has passed through the subject's communications team. Every single one.",
    ],
    correct: 1,
    commentary: "Better information. Better integrity. Not the same thing.",
    noticing: "cooperative vs. independent",
  },
  {
    text: "A blurb from a well-known peer praising someone's book vs. that same peer citing the book unprompted in their own subsequent work.",
    subtext: "Which is a stronger signal?",
    options: [
      "The blurb — they attached their name to a public endorsement",
      "The unprompted citation — they encountered the thinking independently and found it worth carrying forward",
      "Blurbs are a favour economy; citations are an intellectual judgment — they are measuring completely different things",
      "Both could be coordinated. One of them is much harder to coordinate.",
    ],
    correct: 1,
    commentary: "One required a favour. The other required encountering the idea independently and finding it worth carrying forward.",
    noticing: "coordination cost",
  },
  {
    text: "A client roster featuring logos from three globally recognized organizations vs. a referral from a past client who can't tell you what the work was but sent you anyway.",
    subtext: "Which is more trustworthy?",
    options: [
      "The logos — getting hired at that scale means clearing a serious procurement process",
      "The referral without explanation — trust transferred without the ability to produce evidence is one of the strongest signals that exists",
      "The logos tell you they got hired; the referral tells you something happened that the client wants to happen again",
      "Referral without explanation is either the highest trust signal or a very unusual favour. Worth knowing which.",
    ],
    correct: 1,
    commentary: "Trust transferred without the ability to produce evidence is almost impossible to manufacture. That's exactly what makes it rare.",
    noticing: "permission requirements",
  },
  {
    text: "Someone who has been saying the same thing confidently for a decade vs. someone who said publicly \"I was wrong about this\" and changed their position based on new evidence.",
    subtext: "Who do you trust more with a genuinely hard problem?",
    options: [
      "The consistent one — a decade of conviction suggests genuine belief rather than trend-chasing",
      "The one who changed — intellectual honesty under pressure is rarer and structurally more important",
      "Consistency can be integrity or it can be brand protection — telling them apart is most of the skill",
      "A decade of the same message is either visionary or a very committed bit. Both exist in the wild.",
    ],
    correct: 1,
    commentary: "Changing your position publicly costs something. That cost is what makes it a signal.",
    noticing: "consequences",
  },
  {
    text: "A glowing blurb from a famous peer vs. an LLM summary of someone's body of work vs. reading three of their actual pieces yourself.",
    subtext: "Which is the most reliable trust signal?",
    options: [
      "The famous blurb — name recognition implies peer judgment and travels further",
      "The LLM summary — efficient synthesis across a large body of work",
      "Reading the work yourself — the only method that lets you catch a reasoning error before it costs you something",
      "All three together — efficiency is fine until the decision actually matters",
    ],
    correct: 2,
    commentary: "You're one question from seeing the pattern whole.",
    noticing: "the cooperative filter",
  },
  {
    text: "Every cooperatively produced signal on this list — the purchased bylines, the click-bait coverage, the mutual ratings, the approved case studies, the coordinated blurbs, the open-pitch podcast appearances, the logo rosters, the testimonials — vs. a single moment observed by someone with no relationship to the subject, no approval to seek, and no incentive to be generous.",
    subtext: "Which tells you more?",
    options: [
      "The full cooperative signal stack — a pattern of recognition across time and context is hard to fake at scale",
      "The single independent observation — the only signal in this entire quiz that required no one's permission to be true",
      "You've now seen the pattern: almost every signal on this list was produced with the subject's cooperation, their publicist's coordination, or the audience's appetite for a good story. Only one wasn't.",
      "The credential industrial complex is not a conspiracy. It's just a system of mutual interest operating at scale. Which is almost worse.",
    ],
    correct: 1,
    commentary: "That's the stack. Every signal on this list passed through someone's hands before it reached you. Only one didn't.",
    noticing: "the cooperative filter",
  },
];

export const results: ResultBand[] = [
  {
    range: [15, 18],
    key: "Witnessed Observer",
    band: "Witnessed Observer",
    diagnosis: "You don't confuse visibility with verification.",
    body: "You read signals in context, you're not fooled by volume or prestige, and you've arrived at the thing this quiz was building toward: almost every conventional trust signal is cooperatively produced. The subject shaped it, approved it, paid for it, traded it, or fit a narrative someone else needed to tell. The signals that can't be manufactured are the ones that didn't require anyone's cooperation to exist. This is rare. Most professional environments actively reward credential counting — which is probably why you noticed.",
    blindspot: "Reflexive skepticism is its own trap. Not every cooperative signal is fraudulent. Some case studies are accurate. Some bylines were earned. Some blurbs reflect genuine admiration. Some journalists are still operating as accuracy filters. The skill isn't dismissing everything — it's knowing which filter was operating and how much it distorted what came through.",
    notice: "Whether a signal required permission, coordination, or mutual interest to exist.",
  },
  {
    range: [9, 14],
    key: "Selective Skeptic",
    band: "Selective Skeptic",
    diagnosis: "You're asking the right questions — some of the time.",
    body: "Purchased bylines, click-dependent coverage, mutual rating inflation, cooperative case studies, and coordinated endorsements are still doing more of your evaluating than you'd like to admit. Your instincts are good. They just aren't fully load-bearing yet. The gap is usually in knowing which signals to slow down for and which to let pass.",
    blindspot: "You're more susceptible to peer endorsements and institutional logos than you realize. Worth asking: am I being discerning, or am I just skeptical of the signals I don't personally have access to? Those are different things — and one of them is just resentment with better posture.",
    notice: "The difference between a filter that was independent and one that was cooperative — even when they look identical from the outside.",
  },
  {
    range: [0, 8],
    key: "Signal Inheritor",
    band: "Signal Inheritor",
    diagnosis: "Volume, prestige, and platform are doing most of your evaluating for you.",
    body: "To be fair, most professional environments are designed to reward exactly this. The problem isn't that you trust people. It's that you're trusting the packaging. The credential industrial complex thanks you for your continued support.",
    blindspot: "The cooperative signal stack. Enough individually produced, approved, purchased, and mutually traded credentials accumulate into a powerful impression of authority. Each one looks real. Together they feel definitive. Neither is the same as trustworthy. The people who built this system know exactly what they're doing. Now you do too.",
    notice: "That not all media coverage is equal, not all case studies are evidence, and not all ratings are ratings.",
  },
];

export const acts: Act[] = [
  { label: "Part 1 of 3", title: "Media & Bylines", start: 0, end: 5 },
  { label: "Part 2 of 3", title: "Ratings, Podcasts & Reviews", start: 6, end: 11 },
  { label: "Part 3 of 3", title: "The Pattern", start: 12, end: 17 },
];

export const TOTAL = questions.length;
