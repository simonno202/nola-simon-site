import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title:
    "Why You. Why Now. Why At All. — Nola Simon | Assumption-Ground Audit",
  description:
    "The questions every serious buyer is actually asking — about the Assumption-Ground Audit, structural independence, and what it costs to leave assumptions unexamined.",
  keywords: [
    "assumption-ground audit",
    "strategic foresight",
    "why hire a futurist",
    "organizational assumptions",
    "AI strategy assumptions",
    "change management",
    "Nola Simon",
  ],
  alternates: {
    canonical: "https://nolasimon.com/why",
  },
};

export default function WhyPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24 animate-hero-in">
        <div className="max-w-3xl">
          <Eyebrow>THE QUESTIONS THAT MATTER</Eyebrow>

          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
          >
            Why You. Why Now. Why At All.
          </h1>

          <p className="mt-6 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            The questions every serious buyer is actually asking.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Why You ── */}
      <SectionWrapper className="bg-cream pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <Eyebrow>WHY YOU</Eyebrow>

          <h2 className="mt-6 text-[22px] font-semibold text-navy leading-snug">
            How do I know you can see what I can&rsquo;t see?
          </h2>

          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-text-secondary">
            <p>The answer isn&rsquo;t credentials. It&rsquo;s structural.</p>

            <p>
              Every advisor in the room &mdash; the strategy consultant, the
              change manager, the implementation partner &mdash; has a stake in
              the direction your organization chooses. Their value increases if
              the answer is yes. They get paid more when the project moves
              forward.
            </p>

            <p>
              I am the only person in the room whose value increases if the
              answer is no. I have no stake in your direction. I don&rsquo;t
              build the roadmap. I don&rsquo;t implement the strategy. I
              don&rsquo;t sell the next phase of work. What I do is examine what
              you&rsquo;re taking for granted before you commit &mdash; and my
              independence from the outcome is what makes that examination
              credible.
            </p>

            <p>
              That&rsquo;s not a personality trait. That&rsquo;s a structural
              position nobody else in the conversation holds.
            </p>
          </div>

          {/* ── Industry expertise ── */}
          <h2 className="mt-12 text-[22px] font-semibold text-navy leading-snug">
            But you don&rsquo;t have expertise in my industry.
          </h2>

          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-text-secondary">
            <p>That&rsquo;s the point.</p>

            <p>
              I spent 25 years inside complex organizations &mdash; financial
              services, wealth management, telecommunications, mutual funds
              &mdash; managing relationships at the billion-dollar level, across
              clients that ranged from luxury hotel groups to manufacturers to
              hospitals, simultaneously, under real stakes. I worked inside two
              of the largest insurance companies in Canada without a single
              insurance certification. My background was wealth management. I
              became fluent in insurance the way I&rsquo;ve become fluent in
              every industry I&rsquo;ve worked in: by reading the people shaping
              it, not the textbooks describing it.
            </p>

            <p>
              They were the experts. That was never my role. My role was to see
              what expertise makes invisible.
            </p>

            <p>
              Six weeks after moving into a new division, I was a national
              finalist in their innovation challenge. I knew the parent
              organization. I didn&rsquo;t know this corner of it yet. That gap
              was the advantage. The idea I submitted was later incorporated into
              the global company-wide employee rewards and recognition platform.
            </p>

            <p>
              At a previous organization I was selected as the face of the city
              for an international hackathon designed to create business
              transformation. The EVP called me the MVP of the event.
            </p>

            <p>
              The Star of Excellence &mdash; awarded to less than one percent of
              thirty-eight thousand employees &mdash; went to the person who
              wasn&rsquo;t captured by how things were supposed to work.
            </p>

            <p>
              Your people are the experts in your industry. That&rsquo;s not
              what you&rsquo;re hiring me for. You&rsquo;re hiring me to see
              what their expertise is making invisible.
            </p>
          </div>

          {/* ── Different from other perspectives ── */}
          <h2 className="mt-12 text-[22px] font-semibold text-navy leading-snug">
            What makes this different from any other outside perspective?
          </h2>

          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-text-secondary">
            <p>
              Most outside perspectives arrive with a framework. A model. A set
              of tools developed somewhere else and applied here.
            </p>

            <p>
              The Assumption-Ground Audit doesn&rsquo;t come from a framework I
              licensed. It comes from a specific intellectual formation &mdash;
              mathematics, historiography, forensic reasoning &mdash; turned
              forward toward what&rsquo;s forming rather than what already
              happened. The method asks: what are people taking for granted,
              right now, before they know what it costs them?
            </p>

            <p>
              I developed that capacity over decades, across organizations,
              under real stakes. It has been field-tested in rooms where the
              decisions were consequential and the assumptions were expensive.
              What you&rsquo;re hiring isn&rsquo;t a perspective. It&rsquo;s a
              repeatable capacity that has been producing the same result
              &mdash; in different organizations, different industries, different
              contexts &mdash; before it ever had a methodology name.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Why Now ── */}
      <SectionWrapper className="bg-cream pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <Eyebrow>WHY NOW</Eyebrow>

          <h2 className="mt-6 text-[22px] font-semibold text-navy leading-snug">
            Why hasn&rsquo;t someone done this already?
          </h2>

          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-text-secondary">
            <p>They have. Privately. Expensively. After the fact.</p>

            <p>
              Every organization that has ever reversed a major direction,
              written off a failed transformation, or watched a significant
              assumption collapse &mdash; they did a version of this work. They
              just did it after the convergences arrived instead of before. The
              retrospective. The post-mortem. The honest conversation that
              finally happened eighteen months too late.
            </p>

            <p>
              The Assumption-Ground Audit is the same work, done at the moment
              when it&rsquo;s still cheap. Before the direction hardens. Before
              the vendor contract is signed. Before the scenarios are built on
              ground nobody has examined. The difference isn&rsquo;t the work.
              It&rsquo;s the timing.
            </p>
          </div>

          {/* ── Timing ── */}
          <h2 className="mt-12 text-[22px] font-semibold text-navy leading-snug">
            Why is timing so critical right now specifically?
          </h2>

          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-text-secondary">
            <p>
              The organizations most at risk right now are not the ones moving
              too slowly. They&rsquo;re the ones moving quickly on assumptions
              they haven&rsquo;t examined &mdash; about AI, about workforce
              flexibility, about what their people will tolerate and what they
              won&rsquo;t, about what their industry will look like in three
              years and what it will demand of them.
            </p>

            <p>
              Convergences are accelerating. Trends that used to arrive
              sequentially are arriving simultaneously. The crossing points
              &mdash; where multiple shifts meet and make assumptions expensive
              &mdash; are forming faster than most organizations can track. The
              window to examine assumptions before they become direction is
              narrower than it has ever been.
            </p>

            <p>
              After the direction is chosen, you&rsquo;re not auditing
              assumptions. You&rsquo;re managing consequences.
            </p>
          </div>

          {/* ── Mid-transformation ── */}
          <h2 className="mt-12 text-[22px] font-semibold text-navy leading-snug">
            We&rsquo;re already in the middle of a transformation. Is it too
            late?
          </h2>

          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-text-secondary">
            <p>It depends on what has already hardened.</p>

            <p>
              The AGA is designed for the moment before the direction is chosen.
              But most transformations have multiple decision points &mdash;
              moments where the next commitment hasn&rsquo;t yet been made,
              where the next assumption hasn&rsquo;t yet been encoded into
              process. If you&rsquo;re in motion, the question is whether there
              are still decisions ahead of you that haven&rsquo;t been made yet.
              If there are, the window exists.
            </p>

            <p>
              The clearest sign that the window is closing: when the
              conversation stops being about what to do and starts being about
              how to execute what&rsquo;s already been decided. That&rsquo;s the
              moment the assumptions have become direction. The AGA belongs
              before that moment &mdash; not after.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Why At All ── */}
      <SectionWrapper className="bg-cream pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <Eyebrow>WHY AT ALL</Eyebrow>

          <h2 className="mt-6 text-[22px] font-semibold text-navy leading-snug">
            What happens if we don&rsquo;t do this?
          </h2>

          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-text-secondary">
            <p>You already know.</p>

            <p>
              The strategy that felt right until it didn&rsquo;t. The direction
              that made sense until the ground shifted underneath it. The
              decision nobody remembers making that turned into the condition
              everyone is now optimizing around. The assumption that went
              unexamined long enough to become expensive.
            </p>

            <p>
              You don&rsquo;t need the AGA to tell you what&rsquo;s possible.
              You need it to tell you what you&rsquo;re already building
              &mdash; before it becomes the only thing you can build.
            </p>
          </div>

          {/* ── Credentials ── */}
          <h2 className="mt-12 text-[22px] font-semibold text-navy leading-snug">
            Our leadership team is highly credentialed. Why would they need
            this?
          </h2>

          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-text-secondary">
            <p>
              Credentials matter. I hold a slew of them &mdash; financial
              planning, securities, mutual funds, industry certifications
              accumulated over 25 years inside complex organizations. They
              represent years of discipline and they opened doors that
              wouldn&rsquo;t have opened otherwise. I&rsquo;m not arguing
              against them.
            </p>

            <p>
              But I learned something that credentials don&rsquo;t teach. They
              are a map of ground that has already been surveyed. They encode the
              assumptions of the world that existed when they were designed. And
              in conditions of constant change, the most important question
              isn&rsquo;t what your team knows. It&rsquo;s whether they can see
              beyond it. Whether they can hold their expertise lightly enough to
              ask what it might be making invisible.
            </p>

            <p>
              I know what it takes to earn the credential. I also know what the
              credential stops you from seeing. Both things are true. The AGA
              doesn&rsquo;t replace your team&rsquo;s expertise. It asks what
              their expertise might be making invisible &mdash; and creates the
              conditions for them to see it before it becomes expensive.
            </p>
          </div>

          {/* ── Success ── */}
          <h2 className="mt-12 text-[22px] font-semibold text-navy leading-snug">
            What does success actually look like?
          </h2>

          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-text-secondary">
            <p>
              Not a report. Not a deck. Not a set of recommendations to
              implement.
            </p>

            <p>
              Clarity. About what questions to ask before you commit. What
              you&rsquo;re risking by not asking them. Where the ground is still
              moving and where it has already hardened. And the capacity &mdash;
              built into your leadership team over the course of the engagement
              &mdash; to keep asking those questions after I&rsquo;m gone.
            </p>

            <p>
              The goal is not dependence. It&rsquo;s the opposite. The
              organizations that get the most from this work are the ones that
              end the engagement able to ask the futurist&rsquo;s question
              themselves &mdash; in every room, before every convergence, before
              every direction hardens.
            </p>

            <p>
              That&rsquo;s what the practice builds. Not certainty. The capacity
              to operate well without it.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── CTA ── */}
      <SectionWrapper className="bg-cream pb-24 lg:pb-32">
        <div className="max-w-3xl">
          <p className="text-[15px] leading-relaxed text-text-secondary italic">
            If you recognized your organization in these questions, that
            recognition is data.
          </p>

          <div className="mt-8">
            <a
              href="https://tidycal.com/nola/intro-consultation-nola-simon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-[13px] tracking-[0.05em] text-white bg-navy px-6 py-3 rounded hover:bg-navy/90 transition-colors"
            >
              Book an Intro Consultation &rarr;
            </a>
          </div>

          <p className="mt-4 text-[13px] leading-relaxed text-text-muted max-w-xl">
            The intro consultation is a paid conversation ($500&nbsp;CAD). You
            will leave with clarity whether or not we work together. If you
            proceed to an AGA, the fee is credited in full.
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
