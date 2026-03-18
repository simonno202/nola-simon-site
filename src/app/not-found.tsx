import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AdventureNav } from "@/components/ui/AdventureNav";

export default function NotFound() {
  return (
    <main>
      <SectionWrapper className="bg-cream py-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-pink">
            404
          </p>

          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(28px, 5vw, 44px)" }}
          >
            You found the one page I didn&rsquo;t future-proof.
          </h1>

          <p className="mt-6 text-[15px] leading-relaxed text-text-secondary max-w-md mx-auto">
            You&rsquo;ve reached a page that doesn&rsquo;t exist &mdash; but like any good{" "}
            <em>Choose Your Own Adventure</em>, the next move is yours.
          </p>
        </div>

        <AdventureNav />
      </SectionWrapper>
    </main>
  );
}
