interface LinkedInTopVoiceProps {
  variant?: "full" | "compact" | "inline";
  className?: string;
}

const LINKEDIN_URL = "https://www.linkedin.com/in/nolasimon/";

export function LinkedInTopVoice({
  variant = "compact",
  className = "",
}: LinkedInTopVoiceProps) {
  // LinkedIn blue
  const linkedInBlue = "#0A66C2";

  const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={linkedInBlue}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  if (variant === "inline") {
    return (
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 ${className}`}
        aria-label="LinkedIn Top Voice 2024 & 2025"
      >
        <LinkedInIcon size={18} />
        <span className="text-sm font-mono text-text-muted">
          Top Voice 2024 &amp; 2025
        </span>
      </a>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 ${className}`}
        aria-label="LinkedIn Top Voice 2024 & 2025"
      >
        <LinkedInIcon size={24} />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-navy leading-tight">
            LinkedIn Top Voice
          </span>
          <span className="text-xs font-mono text-text-muted">
            2024 &amp; 2025
          </span>
        </div>
      </a>
    );
  }

  // variant === "full"
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-[${linkedInBlue}] ${className}`}
      aria-label="LinkedIn Top Voice 2024 & 2025"
    >
      <LinkedInIcon size={28} />
      <div>
        <p className="text-sm font-semibold text-navy">
          LinkedIn Top Voice
        </p>
        <p className="mt-0.5 text-xs font-mono text-text-muted">
          2024 &amp; 2025
        </p>
      </div>
    </a>
  );
}
