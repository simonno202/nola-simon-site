import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageSection = {
  heading: string;
  body: React.ReactNode;
};

type LivingLabPageData = {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  displayTitle: string;
  sections: PageSection[];
};

const PAGES: Record<string, LivingLabPageData> = {
  "when-feedback-feels-like-threat": {
    title: "When Feedback Feels Like a Threat | Living Lab | Nola Simon",
    description:
      "What Sarah Noll Wilson and I mapped before anyone filed a lawsuit: the assumption underneath workplace retaliation, and how AI encoded it at scale.",
    keywords: [
      "workplace retaliation",
      "assumption-ground audit",
      "AI hiring bias",
      "Sarah Noll Wilson",
      "feedback threat response",
      "Mobley v Workday",
      "Nola Simon",
    ],
    canonical:
      "https://nolasimon.com/living-lab/when-feedback-feels-like-threat",
    displayTitle: "When Feedback Feels Like a Threat",
    sections: [
      {
        heading: "The episode",
        body: (
          <p>
            I invited Sarah Noll Wilson onto the podcast because she talks about
            the stuff most leadership conversations avoid. She&rsquo;s an
            executive coach, a keynote speaker, and the author of{" "}
            <em>Don&rsquo;t Feed the Elephants</em> &mdash; a book about what
            organizations collectively agree not to see. She came on to talk
            about retaliation in the workplace. What we ended up mapping,
            without calling it that at the time, was the assumption underneath
            retaliation: that challenge equals attack.
          </p>
        ),
      },
      {
        heading: "What I heard",
        body: (
          <>
            <p>
              Sarah opened with something that stopped me: most retaliation
              isn&rsquo;t calculated. It&rsquo;s automatic. Someone&rsquo;s ego
              gets pushed. They feel a loss of control. And the response &mdash;
              the withdrawal, the exclusion, the policy suddenly enforced with
              unusual precision &mdash; isn&rsquo;t a plan. It&rsquo;s
              protection.
            </p>
            <p>
              That reframe matters. We spend a lot of time asking whether
              retaliation is legal, whether it can be proven, whether it was
              intentional. Those are the wrong questions if you&rsquo;re trying
              to understand how it forms. The better question is: what assumption
              is operating underneath the reaction?
            </p>
            <p>
              In most of the stories Sarah shared &mdash; and I added a few of
              my own &mdash; the assumption was the same:{" "}
              <em>
                this person challenged me, therefore they are a threat.
              </em>{" "}
              The feedback, the disagreement, the complaint, the question that
              didn&rsquo;t go away &mdash; all of it collapsed into the same
              category. Threat. And threats get managed.
            </p>
            <p>
              What&rsquo;s interesting is that the person doing the retaliating
              rarely experiences it as retaliation. They experience it as
              restoring order. As having a legitimate concern about performance.
              As doing what needed to be done. The assumption is so embedded they
              can&rsquo;t see it operating. That&rsquo;s what unexamined
              assumptions do.
            </p>
          </>
        ),
      },
      {
        heading: "Where the AGA shows up",
        body: (
          <>
            <p>
              I hadn&rsquo;t built the Assumption-Ground Audit yet when I
              recorded this episode. But listening back now, I can hear the
              methodology in everything we discussed.
            </p>
            <p>
              An AGA asks:{" "}
              <em>
                what do you have to believe for this decision to make sense?
              </em>{" "}
              Applied to retaliation, the answer surfaces fast. You have to
              believe that being challenged and being threatened are the same
              thing. You have to believe that the person who raised the concern
              is the problem, not the condition that made them raise it. You have
              to believe that restoring your own comfort is a legitimate
              organizational outcome.
            </p>
            <p>
              None of those beliefs are examined before the action. They&rsquo;re
              assumed. And because they&rsquo;re assumed, they compound. The
              policy gets applied unevenly. The promotion doesn&rsquo;t come
              through. The meeting invite stops arriving. Each of these feels
              like a separate decision. It isn&rsquo;t. It&rsquo;s one
              assumption playing out across multiple surfaces.
            </p>
            <p>
              Sarah put it cleanly: the organizations where retaliation is most
              common are the ones where leaders have never been asked to
              investigate their own reactions. Not punished for them &mdash;
              investigated. The question isn&rsquo;t <em>did you retaliate?</em>{" "}
              It&rsquo;s{" "}
              <em>
                what were you protecting, and did you know you were protecting
                it?
              </em>
            </p>
            <p>
              That&rsquo;s an AGA question. And most organizations never ask it.
            </p>
          </>
        ),
      },
      {
        heading: "What I've carried forward",
        body: (
          <>
            <p>Two things from this conversation lodged in me.</p>
            <p>
              The first is Sarah&rsquo;s point about the fawn response &mdash;
              the way people on the receiving end of retaliation start to doubt
              themselves.{" "}
              <em>
                Did that really happen? Am I reading too much into it? Could I
                have handled it differently?
              </em>{" "}
              The assumption that challenge equals threat runs in both
              directions. The person being retaliated against starts to assume
              the retaliation is evidence of their own failure. That&rsquo;s not
              a coincidence. It&rsquo;s how unexamined power works.
            </p>
            <p>
              The second is something I said in the conversation that I&rsquo;ve
              since used in my own work: the best retaliation is done through
              policy. Not dramatic. Not obvious. Just a rule, applied
              selectively, by someone who knows exactly what they&rsquo;re
              doing. Policy as a weapon is almost impossible to prove and very
              easy to deny. The assumption underneath it &mdash;{" "}
              <em>
                I have the authority to determine who gets the benefit of the
                doubt
              </em>{" "}
              &mdash; never has to be stated aloud.
            </p>
            <p>
              Sarah and I had this conversation before any of the litigation
              that&rsquo;s now making this visible.{" "}
              <em>Mobley v. Workday</em> &mdash; filed{" "}
              <strong>February 2023</strong>, certified as a collective action{" "}
              <strong>May 2025</strong>, opt-in window closed{" "}
              <strong>March 2026</strong> &mdash; is the AI-amplified version of
              exactly what we were describing. Derek Mobley applied to more than
              100 jobs through Workday&rsquo;s platform and was rejected every
              time. One rejection arrived at <strong>1:50 a.m.</strong> &mdash;
              fifty-five minutes after he submitted the application at{" "}
              <strong>12:55 a.m.</strong> No human shortlister was awake. The
              algorithm was the only decision-maker in the room. The applicant
              sees a rejection email. The hiring manager sees a ranked shortlist.
              Nobody sees the model.
            </p>
            <p>
              Workday disclosed that <strong>1.1 billion applications</strong>{" "}
              were rejected using its tools during the relevant period. That
              isn&rsquo;t retaliation against one person. That&rsquo;s one
              assumption, encoded once, applied everywhere. The assumption that
              the algorithm is neutral &mdash; that because no individual decided
              to exclude, no one is responsible for the exclusion &mdash; is the
              same assumption that makes policy-as-weapon so effective. AI
              didn&rsquo;t create that logic. It removed the last friction that
              might have made it visible.
            </p>
            <p>
              That&rsquo;s the kind of assumption the AGA is designed to catch
              before it hardens into a system.
            </p>
          </>
        ),
      },
      {
        heading: "If you want to go deeper",
        body: (
          <>
            <p>
              If this conversation is landing for you &mdash; if you&rsquo;re
              recognizing an assumption that&rsquo;s been running in your
              organization without anyone naming it &mdash; that&rsquo;s the
              work. The{" "}
              <Link href="/aga">Assumption-Ground Audit</Link> is where that
              work starts.
            </p>
          </>
        ),
      },
    ],
  },

  "when-the-experts-turn-the-lens-on-you": {
    title:
      "When the Experts Turn the Lens on You | Living Lab | Nola Simon",
    description:
      "Erica and Leslie Ehm came on the podcast to talk about M². What happened instead was a live demonstration of their methodology — on me.",
    keywords: [
      "Erica Ehm",
      "Leslie Ehm",
      "Swagger",
      "assumption-ground audit",
      "receiving feedback",
      "communication training",
      "Nola Simon",
    ],
    canonical:
      "https://nolasimon.com/living-lab/when-the-experts-turn-the-lens-on-you",
    displayTitle: "When the Experts Turn the Lens on You",
    sections: [
      {
        heading: "The episode",
        body: (
          <>
            <p>
              I&rsquo;d been watching Erica Ehm for years before I understood
              what I was watching.
            </p>
            <p>
              I knew the MuchMusic version &mdash; everyone my age did. But what
              I was actually watching, by the time I found her on LinkedIn, was
              someone who had built a digital agency in 2006, engaged hundreds of
              Canadian mothers as freelancers and contributors across the country
              before that model had a name, and was quietly one of the most
              sophisticated community builders in the country. The VJ was the
              public face. The strategist was the thing worth paying attention
              to.
            </p>
            <p>
              I met her sister Leslie the same way I meet most people &mdash; by
              watching who Erica talked to. Leslie trains global corporations in
              communication and creativity. Disney. Google. Fifteen years. She
              wrote a book called <em>Swagger</em> about what happens when you
              stop assimilating and start showing up as the thing you actually
              are.
            </p>
            <p>
              I had wanted to get them both on the podcast for a while. I said
              so publicly. Then I just asked. They said yes &mdash; and Leslie
              mentioned it was their first joint interview ever. I didn&rsquo;t
              take that lightly. I said so:{" "}
              <em>
                &ldquo;Thanks for trusting me with your first joint
                interview.&rdquo;
              </em>
            </p>
            <p>
              That trust is load-bearing for everything that follows.
            </p>
          </>
        ),
      },
      {
        heading: "What I heard",
        body: (
          <>
            <p>About twenty minutes in, Erica stopped the conversation and turned it around.</p>
            <p>
              We&rsquo;d been talking about listening &mdash; how she and Leslie
              both developed different versions of the same underlying skill, how
              their mother shaped both of them, how their approaches to reading
              people diverged while the purpose stayed constant. I&rsquo;d been
              responding the way I always respond when I&rsquo;m genuinely in a
              conversation: tracking not just what someone says but what they
              mean by what they say, and building on it.
            </p>
            <p>Erica noticed.</p>
            <p>
              <em>
                &ldquo;As we&rsquo;re talking,&rdquo;
              </em>{" "}
              she said,{" "}
              <em>
                &ldquo;you keep responding with very insightful comments that
                imply you&rsquo;re not just hearing us, but you understand a few
                levels down &mdash; not just what we&rsquo;re saying, but what
                we mean by what we say.&rdquo;
              </em>
            </p>
            <p>
              Leslie backed her up. Confirmed it was real. Said I was a people
              lover, a profound one, and that was the engine underneath the
              listening.
            </p>
            <p>
              Erica kept going. She talked about how I use social media &mdash;
              not as a broadcast, but as the beginning of a conversation. That I
              introduce people. That I show up. That this is what social media
              was actually designed for and almost nobody uses it that way.
            </p>
            <p>
              I did something I don&rsquo;t always do. I stopped and took the
              compliment. Out loud. On record.{" "}
              <em>
                &ldquo;I just want to highlight that and actually take that
                moment to shine.&rdquo;
              </em>
            </p>
          </>
        ),
      },
      {
        heading: "Where the AGA shows up",
        body: (
          <>
            <p>
              The assumption I want to examine isn&rsquo;t theirs. It&rsquo;s
              mine &mdash; and it&rsquo;s the one most people in that chair
              would have bypassed entirely.
            </p>
            <p>
              Most people, when two expert communication trainers pause
              mid-interview to give them specific, substantive feedback about how
              they show up, deflect. They say something like{" "}
              <em>&ldquo;oh, I don&rsquo;t know about that&rdquo;</em> or{" "}
              <em>&ldquo;you&rsquo;re too kind&rdquo;</em> or they laugh it off
              and redirect the conversation back to the guest. The deflection
              feels like humility. It isn&rsquo;t. It&rsquo;s the assumption
              that accepting the feedback would be somehow inappropriate &mdash;
              that the host&rsquo;s job is to disappear into the service of the
              guest, and taking up space in the observation would violate
              something.
            </p>
            <p>
              I didn&rsquo;t do that. And I&rsquo;ve thought about why.
            </p>
            <p>
              Part of it is that I knew what I was walking into. I had studied
              these two women for years. Leslie can read what&rsquo;s happening
              under the surface in five minutes &mdash; she says so herself, and
              the people she&rsquo;s worked with confirm it. Erica watches how
              people engage, not just what they say. Inviting them onto the
              podcast meant inviting that level of attention. I knew the lens
              would turn at some point. The assumption I carried in was:{" "}
              <em>I can handle what they see.</em>
            </p>
            <p>
              That&rsquo;s not arrogance. It&rsquo;s a different kind of
              preparation. Not <em>I&rsquo;ll impress them</em> but{" "}
              <em>I&rsquo;ll be available to whatever they notice.</em>
            </p>
            <p>
              The AGA question this surfaces: what do you have to believe about
              yourself to stay open in the room? Not to perform openness &mdash;
              to actually be available to feedback from people who are very good
              at giving it?
            </p>
            <p>
              Most communication training skips this question. It teaches the
              technique for receiving feedback without examining the assumption
              underneath the technique. If you believe, at some level, that what
              you&rsquo;ll hear will diminish you &mdash; the technique
              won&rsquo;t hold. You&rsquo;ll deflect anyway, just more
              gracefully.
            </p>
            <p>
              Leslie&rsquo;s framing from <em>Swagger</em> applies here: no
              company handbook says <em>assimilate into the Borg</em> but people
              make that choice themselves. The same thing happens with feedback.
              Nobody tells you to deflect from a genuine observation. You just
              do it, from an assumption you&rsquo;ve never examined.
            </p>
          </>
        ),
      },
      {
        heading: "What I've carried forward",
        body: (
          <>
            <p>Two things, and a postscript.</p>
            <p>
              Years after we recorded this conversation, Erica was preparing for
              her interview for <em>Blue Rodeo: Lost Together</em> &mdash; a
              2024 CBC documentary. She posted on Instagram asking her community
              for fan perspectives to bring into the room. I commented. She used
              my quote in the film. I found out months later when someone
              messaged me out of nowhere:{" "}
              <em>
                &ldquo;I was watching Lost Together and Erica was reading quotes
                about Blue Rodeo and one was from Nola Simon &mdash; wait, I
                know a Nola Simon.&rdquo;
              </em>{" "}
              My words, in a national documentary, right after Sarah McLachlan.
              I had no idea it was coming.
            </p>
            <p>
              That&rsquo;s Erica&rsquo;s philosophy made visible. She takes what
              people give her genuinely and she uses it &mdash; not to promote
              them, not as a transaction, but because it&rsquo;s good and it
              belongs in the room. The relationship produced that. The consistent
              presence over years produced that. The podcast didn&rsquo;t cause
              it. The podcast was just one moment in a longer pattern that was
              already operating.
            </p>
            <p>
              The first thing I&rsquo;ve carried forward from the conversation
              itself is Erica&rsquo;s distinction about social media, which I
              think is actually a distinction about all communication: it&rsquo;s
              not a push, it&rsquo;s the beginning of a conversation. Every
              post, every introduction, every connection is an invitation. The
              assumption that you&rsquo;re broadcasting &mdash; that the
              transmission is complete when you hit send &mdash; misses the
              whole point of what you&rsquo;re building. I knew this, but having
              it named out loud, in the context of being told I was doing it
              well, made it more precise. More usable.
            </p>
            <p>
              The second is the moment itself. Taking the compliment. Not as a
              performance of self-confidence but as an act of intellectual
              honesty. If I&rsquo;m going to ask people to examine the
              assumptions they&rsquo;re carrying into rooms, I have to be
              willing to do it in mine. That means staying open when the feedback
              is good as well as when it&rsquo;s hard. Deflecting a genuine
              observation because it centers me too much isn&rsquo;t humility
              &mdash; it&rsquo;s another form of self-protection.
            </p>
            <p>That&rsquo;s an assumption worth auditing.</p>
          </>
        ),
      },
      {
        heading: "If you want to go deeper",
        body: (
          <p>
            If you lead people and you&rsquo;ve been trained in how to receive
            feedback but haven&rsquo;t examined what you believe about what
            you&rsquo;ll hear &mdash; that gap is worth looking at. The{" "}
            <Link href="/aga">Assumption-Ground Audit</Link> starts there.
          </p>
        ),
      },
    ],
  },

  "ai-already-decided-who-you-are": {
    title: "AI Already Decided Who You Are | Living Lab | Nola Simon",
    description:
      "Cher Jones and I talked about personal branding and AI discoverability. I looked myself up on ChatGPT before we started. I didn’t exist.",
    keywords: [
      "Cher Jones",
      "personal branding",
      "AI discoverability",
      "assumption-ground audit",
      "ChatGPT identity",
      "external citation",
      "Nola Simon",
    ],
    canonical:
      "https://nolasimon.com/living-lab/ai-already-decided-who-you-are",
    displayTitle: "AI Already Decided Who You Are",
    sections: [
      {
        heading: "The episode",
        body: (
          <>
            <p>
              I met Cher Jones on LinkedIn, then in her live rooms, then through
              her community &mdash; which is how a lot of meaningful professional
              relationships form now, in layers, over time, through watching how
              someone shows up when they&rsquo;re not pitching anything. Cher
              trains organizations and individuals in personal branding. Not the
              polish version. The version that asks: what do people actually know
              about you, and is it accurate?
            </p>
            <p>
              I booked her on the podcast because I&rsquo;d been learning from
              her for years and wanted the conversation on record. What we ended
              up discussing &mdash; and what I keep returning to &mdash; was a
              small experiment I ran right before we started recording.
            </p>
            <p>I looked her up on ChatGPT.</p>
          </>
        ),
      },
      {
        heading: "What I heard",
        body: (
          <>
            <p>
              The result was almost perfect. ChatGPT described Cher accurately:
              Canadian, personal branding expert, corporate training background,
              keynote speaker, known for digital communication. She was
              surprised. Not that it was accurate &mdash; she understood why it
              might be &mdash; but that the model had built a coherent picture of
              her from sources she hadn&rsquo;t consciously managed for that
              purpose.
            </p>
            <p>Then I looked myself up. Nothing. I didn&rsquo;t exist.</p>
            <p>
              At the time, I&rsquo;d been active on LinkedIn since 2016, visible
              on social media through a period of significant professional
              activity. But I didn&rsquo;t have a website. I hadn&rsquo;t done
              media. I wasn&rsquo;t cited in the kinds of sources AI models
              weight as credible. From the model&rsquo;s perspective, I
              wasn&rsquo;t a reliable entity. I was noise.
            </p>
            <p>
              Cher&rsquo;s response to this was the most useful thing she said
              in the conversation: the question isn&rsquo;t just{" "}
              <em>what are you putting out there</em> &mdash; it&rsquo;s{" "}
              <em>
                what is being verified by sources you don&rsquo;t control?
              </em>{" "}
              LinkedIn posts don&rsquo;t do it. Follower counts don&rsquo;t do
              it. What does it is external citation: stages, articles, mentions,
              bylines, media coverage. The things that signal to a model that
              other credible sources have already decided you&rsquo;re worth
              knowing about.
            </p>
            <p>
              The assumption underneath most personal branding work:{" "}
              <em>if I put it out there, it counts.</em> It counts for some
              things. For the systems increasingly making first impressions about
              you before you&rsquo;re in the room, it often doesn&rsquo;t.
            </p>
          </>
        ),
      },
      {
        heading: "Where the AGA shows up",
        body: (
          <>
            <p>
              This conversation was one of the early signals that became the
              Assumption-Ground Audit &mdash; specifically the piece of the
              methodology concerned with what you think you&rsquo;re
              communicating versus what&rsquo;s actually being received.
            </p>
            <p>
              The assumption Cher named, and that I felt acutely when I
              disappeared from my own search results, is this:{" "}
              <em>my professional identity is self-authored.</em> That I am who
              I say I am, in the way I say it, to the audiences I choose. That
              the story I&rsquo;m telling is the one being received.
            </p>
            <p>
              It&rsquo;s an assumption most professionals have never examined,
              because for most of history it was close enough to true. You were
              in control of your own introduction. You handed someone a business
              card. You shook their hand. The first impression was yours to make.
            </p>
            <p>
              That&rsquo;s not the current condition. The first impression is
              increasingly made before you arrive, by a system that has already
              formed a view of you based on sources you may never have thought to
              cultivate. And if that view is incomplete, inaccurate, or simply
              absent, the gap between who you are and who the room already thinks
              you are is yours to close &mdash; in real time, under pressure,
              when you can least afford to be doing it.
            </p>
            <p>
              Cher&rsquo;s framing for this: your brand supports what
              you&rsquo;re asking for. If the external record of you doesn&rsquo;t
              match the claim you&rsquo;re making, the gap creates friction. The
              assumption-ground question here is:{" "}
              <em>
                do you know what the external record of you actually says?
              </em>{" "}
              Most people don&rsquo;t check.
            </p>
          </>
        ),
      },
      {
        heading: "What I've carried forward",
        body: (
          <>
            <p>
              I built a website. I did media. I&rsquo;ve been deliberate about
              external citation in a way I wasn&rsquo;t before this conversation.
            </p>
            <p>
              There&rsquo;s a concrete example of how this plays out. When Erica
              Ehm was preparing for her interview for{" "}
              <em>Blue Rodeo: Lost Together</em> &mdash; a 2024 CBC documentary
              &mdash; she posted on Instagram asking her community for fan
              perspectives to bring into the room. I commented. She used my
              quote in the film. I didn&rsquo;t know. Months later, someone
              messaged me out of nowhere:{" "}
              <em>
                &ldquo;I was watching Lost Together and Erica was reading quotes
                about Blue Rodeo and one was from Nola Simon and I thought
                &mdash; wait a minute, I know a Nola Simon.&rdquo;
              </em>
            </p>
            <p>
              My words, in a national documentary, alongside Sarah McLachlan.
              Because I showed up consistently in Erica&rsquo;s comments for
              years. Not strategically &mdash; genuinely. But the record it
              created was real, and it was being used without my knowledge or
              management.
            </p>
            <p>
              That&rsquo;s what Cher was describing. Not the content you
              publish. The trail you leave by being present. Not what you&rsquo;ve
              prepared to say. What the pre-read says. What the search returns.
              What the AI generates when someone who doesn&rsquo;t know you yet
              asks about your expertise area.
            </p>
            <p>
              For most leaders, that question produces a pause. Then a longer
              pause. Because they&rsquo;ve been focused entirely on what they
              communicate, not on what&rsquo;s been decided about them before
              they open their mouths.
            </p>
            <p>
              Cher was talking about personal branding. What she was describing,
              in AGA terms, is the assumption that identity is a broadcast. You
              send the signal and it arrives as sent. The disruption &mdash; the
              thing that makes this conversation still relevant and more urgent
              now than when we recorded it &mdash; is that identity is
              increasingly a synthesis. Something built from sources, weighted by
              systems, and delivered to your audience before you get there.
            </p>
            <p>
              The assumption that you&rsquo;re in control of that is worth
              auditing.
            </p>
          </>
        ),
      },
      {
        heading: "If you want to go deeper",
        body: (
          <p>
            If you&rsquo;re a leader who hasn&rsquo;t thought about what AI says
            about you when your name comes up &mdash; or an organization that
            hasn&rsquo;t asked what assumptions your external record is creating
            &mdash; that&rsquo;s an assumption worth looking at before it
            hardens. The{" "}
            <Link href="/aga">Assumption-Ground Audit</Link> is where that work
            begins.
          </p>
        ),
      },
    ],
  },
};

const SLUGS = Object.keys(PAGES);

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!PAGES[slug]) return {};

  const page = PAGES[slug];
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: page.canonical },
    openGraph: {
      type: "article",
      url: page.canonical,
      title: page.displayTitle,
      description: page.description,
    },
    twitter: {
      card: "summary_large_image",
      title: page.displayTitle,
      description: page.description,
    },
  };
}

export default async function LivingLabPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!PAGES[slug]) notFound();

  const page = PAGES[slug];

  return (
    <main>
      <SectionWrapper className="bg-cream py-12 lg:py-20 animate-hero-in">
        <div style={{ maxWidth: "var(--max-width-reading)" }}>
          {/* Back link */}
          <Link
            href="/living-lab"
            className="flex w-fit items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted hover:text-pink transition-colors mb-8"
          >
            <span aria-hidden="true">←</span> The Living Lab
          </Link>

          {/* Eyebrow */}
          <Eyebrow>Living Lab &middot; Hope + Possibilities Podcast</Eyebrow>

          {/* Title */}
          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(24px, 4.5vw, 36px)" }}
          >
            {page.displayTitle}
          </h1>

          {/* Divider */}
          <hr className="mt-8 mb-10 border-border-medium" />

          {/* Content sections */}
          <div className="prose-content">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body}
              </section>
            ))}
          </div>

          {/* Footer tagline */}
          <div className="mt-12 pt-8 border-t border-border-medium">
            <p className="font-mono text-[11px] text-text-muted leading-relaxed">
              The Living Lab is a retroactive read of the Hope + Possibilities
              podcast through the lens of the Assumption-Ground Audit. These
              conversations happened before the methodology had a name. The
              assumptions were always there.
            </p>
          </div>

          {/* Bottom nav */}
          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/living-lab"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted hover:text-pink transition-colors"
            >
              <span aria-hidden="true">←</span> The Living Lab
            </Link>
            <Link
              href="/aga"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-pink hover:text-pink/80 transition-colors"
            >
              The Assumption-Ground Audit <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
