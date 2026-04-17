import Eyebrow from "./Eyebrow";
import { GoodpodsBadge } from "./GoodpodsBadge";
import { LinkedInTopVoice } from "./LinkedInTopVoice";

const outlets = [
  "CBC",
  "Maclean\u2019s",
  "CTV News",
  "The Canadian Press",
  "CityNews",
  "Reworked",
];

export function ProofBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-6 ${className}`.trim()}>
      <Eyebrow>Featured In</Eyebrow>
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
        {outlets.map((name, i) => (
          <span key={name} className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
              {name}
            </span>
            {i < outlets.length - 1 && (
              <span className="text-text-muted" aria-hidden="true">
                &middot;
              </span>
            )}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <LinkedInTopVoice variant="inline" />
        <GoodpodsBadge variant="inline" />
      </div>
    </div>
  );
}

export default ProofBar;
