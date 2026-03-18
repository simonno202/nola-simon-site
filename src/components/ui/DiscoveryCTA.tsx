import Button from "./Button";
import { CTA_LINK } from "@/data/navigation";

interface DiscoveryCTAProps {
  variant?: "dark" | "light";
  /** @deprecated Use variant instead */
  dark?: boolean;
  headline?: string;
  body?: string;
}

const defaultHeadline = "Ready to do the work?";
const defaultBody =
  "Book a paid intro consultation. Come with a real challenge. Leave with real clarity. The fee applies in full toward any engagement that follows.";

export function DiscoveryCTA({
  variant,
  dark,
  headline = defaultHeadline,
  body = defaultBody,
}: DiscoveryCTAProps) {
  const isDark = variant ? variant === "dark" : (dark ?? true);

  const wrapperStyles = isDark
    ? "bg-navy rounded-[--radius-card] px-[28px] py-12 text-center"
    : "bg-surface border-[1.5px] border-border-medium rounded-[--radius-card] px-[28px] py-12 text-center";

  const headlineColor = isDark ? "text-cream" : "text-navy";
  const bodyColor = isDark ? "text-text-lighter" : "text-text-secondary";
  const subtextColor = isDark ? "text-text-lighter" : "text-text-muted";

  return (
    <div className={wrapperStyles}>
      <h3
        className={`font-sans text-[24px] font-semibold leading-snug ${headlineColor}`}
      >
        {headline}
      </h3>
      <p
        className={`mx-auto mt-3 max-w-[520px] font-sans text-[15px] leading-relaxed ${bodyColor}`}
      >
        {body}
      </p>
      <div className="mt-6">
        <Button variant="primary" href={CTA_LINK}>
          Book an Intro Consultation
        </Button>
      </div>
      <p className={`mt-4 font-sans text-[13px] ${subtextColor}`}>
        If you&apos;ve been thinking differently, that&apos;s the work already
        starting.
      </p>
    </div>
  );
}

export default DiscoveryCTA;
