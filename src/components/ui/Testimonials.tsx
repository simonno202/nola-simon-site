import { Eyebrow } from "./Eyebrow";

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  organization?: string;
  episodeUrl?: string;
}

const testimonials: Testimonial[] = [
  // Row 1 — buyer-adjacent, outcome language, organizational credibility
  {
    quote:
      "I can't help but get excited when I see the work Nola is doing today. I see the value, and the need in the workplace today, for more champions like Nola. Whenever we needed someone who would go the extra mile, take time to develop long-lasting relationships and deliver outstanding service, we chose Nola.",
    name: "Joanna Lohrenz",
    title: "Senior Executive, Transformation",
    organization: "Financial Services",
  },
  {
    quote:
      "Nola was absolutely pivotal in the communications space. She has an engaged network and understands how to leverage various mediums to rally an audience. In addition to being able to deftly connect with hundreds of community members, Nola is genuinely passionate about helping them. Her innate talent for change management was enormously helpful.",
    name: "Ryan Marek",
    title: "Manager, Strategy",
    organization: "Manulife Bank",
  },
  // Row 2 — methodology validation, specific knowledge
  {
    quote:
      "What I appreciate about you, Nola, is you sense things before they happen. A true Futurist Thinker.",
    name: "Kerri Twigg",
    title: "Leadership Development Specialist & LinkedIn Top Voice",
    organization: "Manitoba Hydro · Podcast Guest",
    episodeUrl: "https://www.podpage.com/hope-possibilities-a-love-letter-to-the-future-of-work/embracing-your-story-to-pivot-your-career",
  },
  {
    quote:
      "I was very impressed by her knowledge of hybrid/remote work. She knows remote work from a time way before the pandemic, when the lack of suitable tools made it even more challenging. Nola also highlights how new technology such as AI can be leveraged to improve team performance. I would highly recommend her expertise.",
    name: "Pamela Kellert",
    title: "Infrastructure & Mobility Executive",
    organization: "Podcast Guest",
    episodeUrl: "https://www.podpage.com/hope-possibilities-a-love-letter-to-the-future-of-work/leadership-in-a-hybrid-world-pamela-kellert",
  },
  // Row 3 — operational outcome, forward-thinking POV
  {
    quote:
      "Nola's support and innovation was crucial to the success of the conference. She excelled in her time management and planning skills, but also brought innovative solutions. Nola not only partnered with me to build a successful online conference, but she left behind a communications standard and best practices to elevate our chapter going forward.",
    name: "Jessica Nurse",
    title: "Senior Technical Project Manager",
  },
  {
    quote:
      "Nola Simon inspires me. She's a compelling storyteller and content creator, and I admire her authenticity, creativity and positive influence. On the premise that hybrid and remote work is the way of the future, she helps describe the mindsets and skills that will be required tomorrow, and I appreciate her forward-thinking POV so much.",
    name: "Daphne Gordon",
    title: "Writer and Writing Coach",
  },
  // Row 4 — personal validation tier
  {
    quote:
      "Nola, you are really one of the smartest I know. Like well-rounded intellect with deep emotional intelligence. You are not the average user. You think beyond the surface.",
    name: "Dr. Kem-Laurin Lubin",
    title: "Sr. UX Strategist & AI Researcher, Ph.D.-C",
    organization: "University of Waterloo",
  },
  {
    quote:
      "She is strategic, collaborative, creative and an amazing storyteller. She always shares her insights on ways to improve projects. Her passion has now become her purpose and it's a thrill to see Nola start her own business. Anyone would be lucky to work with Nola.",
    name: "Kendra Foerster",
    title: "Award-Winning Personal Branding Photographer",
    organization: "Portraits by Kendra · Podcast Guest",
    episodeUrl: "https://www.podpage.com/hope-possibilities-a-love-letter-to-the-future-of-work/the-story-of-corporate",
  },
  // Closer — personal praise
  {
    quote: "You're one of the smartest people I know.",
    name: "Rose Genele",
    title: "CEO & AI Transformationalist",
    organization: "The Opening Door · Host, WAWGTDWATF (What Are We Going To Do With All This Future?)",
    episodeUrl: "https://podcasts.apple.com/us/podcast/wawgtdwatf-the-future-of-work-organizational-design/id1769136694?i=1000671547629",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="rounded-xl border border-border-light bg-cream p-6 sm:p-8">
      <p className="text-[15px] leading-relaxed text-text-secondary italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-4 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full bg-pink/10 flex items-center justify-center text-pink font-semibold text-sm"
          aria-hidden="true"
        >
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-navy">
            {testimonial.name}
          </p>
          <p className="text-xs font-mono text-text-muted">
            {testimonial.title}
            {testimonial.organization && `, ${testimonial.organization}`}
          </p>
          {testimonial.episodeUrl && (
            <a
              href={testimonial.episodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1 text-[12px] font-mono text-pink hover:underline"
            >
              Listen to episode
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 8L8 2M8 2H3M8 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
        </div>
      </footer>
    </blockquote>
  );
}

export function Testimonials({ className = "" }: { className?: string }) {
  // Don't render if no testimonials yet
  if (testimonials.length === 0) {
    return (
      <div className={className}>
        <Eyebrow>WHAT PEOPLE SAY</Eyebrow>
        <div className="mt-8 rounded-xl border border-border-medium bg-cream p-8 text-center">
          <p className="text-[15px] leading-relaxed text-text-muted">
            Testimonials coming soon. In the meantime, let&rsquo;s talk.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Eyebrow>WHAT PEOPLE SAY</Eyebrow>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>
    </div>
  );
}
