import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { GoodpodsBadge } from "@/components/ui/GoodpodsBadge";
import { LinkedInTopVoice } from "@/components/ui/LinkedInTopVoice";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { DiscoveryCTA } from "@/components/ui/DiscoveryCTA";
import { VideoEmbed } from "@/components/ui/VideoEmbed";

export const metadata: Metadata = {
  title: "About — Nola Simon | Everyday Futurism",
  description:
    "20+ years inside the system. Then I left and built a different one. Strategic futurist, speaker, podcast host.",
};

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <SectionWrapper className="bg-cream py-24 animate-hero-in">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          {/* Text */}
          <div>
            <Eyebrow>ABOUT</Eyebrow>

            <h1
              className="font-sans font-normal text-navy mt-4"
              style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
            >
              I spent 20&nbsp;years inside the system. Then I left and built a
              different one.
            </h1>

            <p className="mt-6 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
              Futurist, researcher, and podcast host. I am the case study.
            </p>
          </div>

          {/* Photo */}
          <div className="relative aspect-[4/5] w-72 sm:w-80 mx-auto lg:mx-0 rounded-[var(--radius-card)] overflow-hidden">
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

      {/* ── The Story ── */}
      <SectionWrapper className="bg-cream py-24">
        <div className="max-w-[var(--max-width-reading)]">
          <div className="space-y-6 text-[15px] leading-relaxed text-text-secondary">
            <p>
              Here&rsquo;s the short version: I spent over 20&nbsp;years across
              five large, complex organizations in account management, sales,
              and training. Alongside the day job, I was leading employee
              resource groups, coordinating employee engagement with HR and
              senior leaders, and winning awards for teamwork and strategic
              thinking. I was good at it. I was also slowly suffocating.
            </p>

            <p>
              Not because the work was bad. Because the thinking was stuck. Every
              room I sat in was optimising for a world that was already
              disappearing. And the more I tried to raise that point, the more I
              was told to stay in my lane.
            </p>

            <p>
              So I left. Not with a business plan. Not with a safety net. With a
              question: What if the future isn&rsquo;t something you wait for
              experts to explain&nbsp;&mdash; but something you practice, every
              day, by trusting what you already see?
            </p>

            <p>
              That question became the foundation of Everyday Futurism. It&rsquo;s
              not a methodology or a framework you license. It&rsquo;s a shift in
              how you relate to uncertainty. You stop waiting for permission. You
              start noticing what&rsquo;s already changing. And you learn to make
              moves before the map is complete.
            </p>

            <p>
              Today I work with leaders and organizations who sense that the old
              playbook isn&rsquo;t working but haven&rsquo;t been given a
              credible alternative. I help them read signals, name the stories
              keeping them stuck, and take the small, intentional steps that
              compound into real change.
            </p>

            <p>
              My own life, career pivots, sabbatical, 20-year corporate exit,
              choosing flexibility when my daughter was two&nbsp;&mdash; these
              aren&rsquo;t anecdotes. They&rsquo;re data. I don&rsquo;t cite
              myself as an exception. I offer myself as evidence for a
              structural pattern.
            </p>

            <p>
              The work is grounded in trust&nbsp;&mdash; the kind you have to
              build with yourself before you can build it with anyone else.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── What I Believe ── */}
      <SectionWrapper className="bg-cream py-24">
        <div className="max-w-4xl">
          <Eyebrow>WHAT I BELIEVE</Eyebrow>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold text-navy">
                Trust is the starting point
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                Not the reward. Without self-trust, no framework, course, or
                expert advice goes anywhere. There are no right answers, only
                the answers and the path you create for yourself.
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

      {/* ── Featured Clip ── */}
      <SectionWrapper className="bg-surface py-20">
        <div className="max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
            <VideoEmbed
              youtubeId="p01S6AZbdyg"
              title="AI's Impact on Trust and Workforce"
              subtitle="Mama, What's Next"
              className="mx-auto"
            />
            <div>
              <Eyebrow>GUEST APPEARANCE</Eyebrow>
              <h2 className="text-2xl font-semibold text-navy mt-4">
                AI&rsquo;s Impact on Trust and Workforce
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
                How is AI reshaping trust dynamics inside organizations? From
                the{" "}
                <a
                  href="https://open.spotify.com/episode/2FJaympnKTWzX78g5YVvQN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-pink hover:underline"
                >
                  Mama What&rsquo;s Next
                </a>{" "}
                podcast&nbsp;&mdash; what leaders need to understand about the
                workforce shift that&rsquo;s already underway and why trust is
                the variable most companies aren&rsquo;t measuring.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Credentials ── */}
      <SectionWrapper className="bg-cream py-20">
        <div className="max-w-3xl">
          <Eyebrow>THE WORK</Eyebrow>

          <ul className="mt-6 space-y-2 text-[15px] leading-relaxed text-text-secondary list-disc pl-5">
            <li>20+ years across five large, complex organizations in account management, sales, and training</li>
            <li>Led employee resource groups, coordinated employee engagement alongside HR, senior leaders, and communications teams</li>
            <li>Award-winning work in teamwork and strategic thinking</li>
            <li>LinkedIn Top Voice 2024 &amp; 2025</li>
            <li>
              Keynote speaker at Elevate, Future of Work, and enterprise events
              across North America
            </li>
            <li>Host of the Hope + Possibilities podcast (109+ episodes) — Goodpods Top 100 Leadership Indie Podcast</li>
            <li>Writer on Substack covering self-trust, leadership, and the future of work</li>
            <li>Trusted advisor to leaders and transformation teams</li>
            <li>
              Featured in CBC, CTV, Maclean&rsquo;s, The Canadian Press, and
              other major media outlets
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-start gap-8">
            <LinkedInTopVoice variant="compact" />
            <GoodpodsBadge variant="compact" />
          </div>
        </div>
      </SectionWrapper>

      {/* ── Discovery CTA ── */}
      <DiscoveryCTA
        variant="dark"
        headline="If you've been reading and thinking differently, that's the work already starting."
      />
    </main>
  );
}
