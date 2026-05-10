import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { GoodpodsBadge } from "@/components/ui/GoodpodsBadge";
import { LinkedInTopVoice } from "@/components/ui/LinkedInTopVoice";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { DiscoveryCTA } from "@/components/ui/DiscoveryCTA";
import { Testimonials } from "@/components/ui/Testimonials";

export const metadata: Metadata = {
  title: "About",
  description:
    "I live my life like a Choose Your Own Adventure novel. Strategic futurist, speaker, podcast host.",
  alternates: {
    canonical: "https://nolasimon.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-16 animate-hero-in">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          {/* Text */}
          <div>
            <Eyebrow>ABOUT</Eyebrow>

            <h1
              className="font-sans font-normal text-navy mt-4"
              style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
            >
              I live my life like a Choose Your Own Adventure novel.
            </h1>

            <p className="mt-6 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
              There&rsquo;s a version you&rsquo;re living&nbsp;&mdash; but at
              any point, there are alternate paths. The practice is learning to
              see them before you need them.
            </p>

            <p className="mt-6 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
              Here&rsquo;s the short version: I spent 25 years across five
              complex organizations. It ended&nbsp;&mdash; not on my timeline.
              An opportunity in the disguise of an ultimatum. 17 months I
              didn&rsquo;t choose but decided to use. My daughters were 16 and
              13. I built a business around the future of work.
            </p>

            <p className="mt-4 text-[15px] font-medium text-navy max-w-2xl">
              I am the case study.
            </p>

            <p className="mt-6 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
              Historians study what already happened. Futurists project
              what&rsquo;s next. I&rsquo;m in the middle&nbsp;&mdash; watching
              what&rsquo;s shifting right now, before it has a name.
            </p>

            <p className="mt-6">
              <Link
                href="/why"
                className="font-mono text-[12px] tracking-[0.05em] text-pink hover:text-pink-hover transition-colors"
              >
                Why you. Why now. Why at all. &rarr;
              </Link>
            </p>

          </div>

          {/* Photo */}
          <div className="relative w-64 sm:w-72 mx-auto lg:mx-0 rounded-[var(--radius-card)] overflow-hidden" style={{ aspectRatio: "3/4", maxHeight: "420px" }}>
            <Image
              src="/images/nola-about.jpg"
              alt="Nola Simon smiling among purple wildflowers in a denim jacket"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 450px"
              priority
            />
          </div>
        </div>
      </SectionWrapper>

      {/* ── Divider ── */}
      <SectionWrapper className="bg-cream py-0">
        <hr className="border-border-medium" />
      </SectionWrapper>

      {/* ── At a Glance ── */}
      <SectionWrapper className="bg-cream py-10 lg:py-14">
        <div className="max-w-[var(--max-width-reading)]">
          <Eyebrow>AT A GLANCE</Eyebrow>
          <ul className="mt-6 space-y-2 text-[15px] leading-relaxed text-text-secondary list-disc pl-5">
            <li>LinkedIn Top Voice 2024 &amp; 2025</li>
            <li>25 years in cross-border Canada-US financial services (telecommunications, mutual funds, insurance, banking)</li>
            <li>Featured in CBC, Maclean&rsquo;s, and The Canadian Press</li>
            <li>Panelist at Elevate TechFest</li>
            <li>Host of the Hope + Possibilities podcast &mdash; 100+ episodes, Goodpods Top 10 Leadership</li>
          </ul>
        </div>
      </SectionWrapper>

      {/* ── Divider ── */}
      <SectionWrapper className="bg-cream py-0">
        <hr className="border-border-medium" />
      </SectionWrapper>

      {/* ── The Story ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24">
        <div className="max-w-[var(--max-width-reading)]">
          <p className="mb-8 text-[15px] font-medium text-navy">Here&rsquo;s the longer version.</p>
          <div className="space-y-6 text-[15px] leading-relaxed text-text-secondary">
            <p>
              For more than 25 years, I watched organizations talk about change
              while doing everything possible to avoid it. I sat in rooms where
              the answer to shifting conditions was to double down on what
              already wasn&rsquo;t working. I watched leaders confuse the
              comfort of precedent for the safety of good strategy.
            </p>

            <p>
              And I stayed. Not because I didn&rsquo;t see it. Because seeing
              it and leaving are different skills, and I hadn&rsquo;t built the
              second one yet.
            </p>

            <p>
              The end came anyway. And in the space that opened, I had a
              question I&rsquo;d been carrying for years and finally had time
              to answer: what does it look like to actually practice futurism,
              every day, in real decisions&nbsp;&mdash; not just talk about it
              on stage?
            </p>

            <p>
              That question became{" "}
              <a
                href="https://nolasimon.com/blog/everyday-futurism-a-practice-not-a-prediction"
                className="font-medium text-pink hover:underline"
              >
                Everyday Futurism
              </a>
              . Not prediction. Not trend reports. Not someone else&rsquo;s map
              to follow.
            </p>

            <p>
              It starts with self-trust. The ability to watch your own thinking,
              name the stories keeping you stuck, read signals across industries
              you don&rsquo;t work in, and make small, intentional moves. Not
              dramatic. Not disruptive. Just honest.
            </p>

            <p>
              I&rsquo;ve explored this question across 100+ podcast episodes,
              national media features in CBC, Maclean&rsquo;s, The Globe and
              Mail, and The Canadian Press, a panel at Elevate TechFest, and
              advisory work with organizations that are ready to stop clinging
              and start adapting.
            </p>

            <p>
              The common thread through all of it? Trust. The kind you have to
              build with yourself before you can build it with anyone else.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Maclean's Feature ── */}
      <SectionWrapper className="bg-cream py-10 lg:py-16">
        <div className="max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-[325px_1fr] lg:items-center">
            <div className="rounded-xl overflow-hidden" style={{ maxWidth: "325px" }}>
              <iframe
                src="https://www.tiktok.com/embed/v2/7431207502575947013"
                width="325"
                height="575"
                allow="encrypted-media"
                allowFullScreen
                title="Maclean's — Why I Made a Midlife Career Switch"
                style={{ border: "none" }}
              />
            </div>
            <div>
              <Eyebrow>AS SEEN IN MACLEAN&rsquo;S</Eyebrow>
              <h2 className="text-2xl font-semibold text-navy mt-4">
                Why I Made a Midlife Career Switch
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
                The origin story of Everyday Futurism, as told in Canada&rsquo;s national magazine.
                The pandemic clarified something I&rsquo;d been circling for years — and this is where it started.
              </p>
              <a
                href="https://macleans.ca/society/why-i-made-a-midlife-career-switch/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-pink hover:underline"
              >
                Read the full article in Maclean&rsquo;s &rarr;
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── What I Believe ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24">
        <div className="max-w-4xl">
          <Eyebrow>WHAT I BELIEVE</Eyebrow>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold text-navy">
                Trust is the starting point
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                Not the reward. You can&rsquo;t convey alignment to someone
                else if you don&rsquo;t have it with yourself first. The
                performance of alignment is detectable. The real thing
                isn&rsquo;t strategic&nbsp;&mdash; it&rsquo;s what happens
                when your interests are actually clear to you.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-navy">
                The status quo is a choice
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                The belief that the way things are is the way they have to
                be&nbsp;&mdash; that&rsquo;s the thing keeping people stuck.
                Current arrangements aren&rsquo;t inevitable. They&rsquo;re
                choices that can be unmade.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-navy">
                Small moves beat big plans
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                You don&rsquo;t need a transformation roadmap. You need one
                honest conversation, one brave decision, one small step taken
                before you feel ready. Momentum builds from action, not
                certainty.
              </p>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Credentials ── */}
      <SectionWrapper className="bg-cream py-10 lg:py-20">
        <div className="max-w-3xl">
          <Eyebrow>THE WORK</Eyebrow>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            <p>
              I research the way a detective works a case &mdash; following the signal wherever it leads. Academic papers, public company filings, journalism, pop culture, TikTok. What makes that possible isn&rsquo;t just range. It&rsquo;s fluency. I know how each source works, what it can tell you, what it can&rsquo;t, and what it has at stake in the telling. I can weigh a peer-reviewed finding against a cultural signal against an earnings call and know which one is moving faster than the others, and which one is performing certainty it doesn&rsquo;t have.
            </p>

            <p>
              Based in Canada, with years of cross-border Canada-US work and listeners across 52 countries, I&rsquo;ve learned that what&rsquo;s already normalized in one market is often still being debated in the next. The gap between them is exactly where the most useful signals live. The constraint of staying inside approved disciplines, approved sources, or a single jurisdiction is exactly what lets a pattern go unnamed for years. I don&rsquo;t have that constraint. That&rsquo;s not a gap in the methodology. That&rsquo;s the methodology.
            </p>

            <p>
              The methodology has an origin I don&rsquo;t talk about enough. I studied mathematics and history at Glendon College, York University&nbsp;&mdash; in French&nbsp;&mdash; at a time when those two disciplines rarely shared a hallway. Mathematics teaches you that a proof is only as strong as its weakest assumption. History teaches you that the sources everyone trusts are the ones most worth interrogating. Studied together, they produce a particular kind of thinking: not skepticism for its own sake, but the habit of asking what&rsquo;s holding the structure up before you add weight to it.
            </p>

            <p>
              Then I spent 25 years talking to people. Customer service, account management, training, peer mentorship&nbsp;&mdash; work that required me to quickly understand someone&rsquo;s perspective, their personal narrative, their relationship to power, their values, how they process information, what they believe, and how they decide. Work that required influencing without hierarchical authority, and managing up inside organizations that didn&rsquo;t always want to hear what I was seeing. I&rsquo;ve had thousands of those conversations across five industries. Each one was a data point in how assumptions form, how they hold, and where they crack.
            </p>

            <p>
              People deep in the AI bubble often talk about paper as if it marks the boundary between the future and the left-behind. I&rsquo;m married to a man who doesn&rsquo;t write notes on paper. He writes them on wood. He noticed AI last week. Five years after my first podcast episode about it. His work runs on physical judgment, trade knowledge, and client relationships that no model can replicate&nbsp;&mdash; and he&rsquo;s not behind. He&rsquo;s just building in a different material.
            </p>

            <p>
              He also has a front-row seat to the theory that displaced white-collar workers will simply transition into trades. He&rsquo;s watched it happen. What he&rsquo;ll tell you is that skilled doesn&rsquo;t transfer the way people assume. The trades have their own culture, their own hierarchy, their own relationship to being wrong in front of someone who can see it immediately in the work. Showing up with credentials and expecting accommodation is its own kind of assumption. He knows what that costs&nbsp;&mdash; the person making it, and the people around them.
            </p>

            <p>
              I understand both ends of this conversation.
            </p>

            <p>
              The degree gave me the method. The people gave me the material. Living in both worlds gave me the range. <Link href="/aga" className="font-medium text-pink hover:underline">The Assumption-Ground Audit</Link> is what happened when all three finally met. It turns out it wasn&rsquo;t a detour. It just took a while to find the work it was built for.
            </p>

            <p>
              <Link href="/blog/discernment-as-leadership" className="font-medium text-pink hover:underline">The essay behind it — Discernment as Leadership — is here &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-start gap-8">
            <LinkedInTopVoice variant="compact" />
            <GoodpodsBadge variant="compact" />
          </div>
        </div>
      </SectionWrapper>

      {/* ── Testimonials ── */}
      <SectionWrapper className="bg-surface py-10 lg:py-20">
        <Testimonials className="max-w-3xl" />
      </SectionWrapper>

      {/* ── Discovery CTA ── */}
      <DiscoveryCTA
        variant="dark"
        headline="If you've been reading and thinking differently, that's the work already starting."
      />
    </main>
  );
}
