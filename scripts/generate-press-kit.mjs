import { jsPDF } from "jspdf";
import { writeFileSync } from "fs";

const doc = new jsPDF({ unit: "mm", format: "letter" });
const W = 215.9;
const H = 279.4;
const M = 18; // tighter margins
const CW = W - 2 * M;

// Colors
const navy = [26, 26, 46];
const pink = [236, 65, 151];
const gold = [138, 106, 62];
const gray = [80, 80, 90];
const lightGray = [140, 140, 150];

let y = M;

function heading(text, size = 12) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(size);
  doc.setTextColor(...navy);
  doc.text(text, M, y);
  y += size * 0.45 + 1.5;
}

function body(text, opts = {}) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(opts.size || 9);
  doc.setTextColor(...(opts.color || gray));
  const lines = doc.splitTextToSize(text, opts.width || CW);
  doc.text(lines, opts.x || M, y);
  y += lines.length * (opts.size || 9) * 0.40 + (opts.gap || 2);
}

function bullet(text, indent = 5) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...gray);
  const lines = doc.splitTextToSize(text, CW - indent);
  doc.text("\u2022", M, y);
  doc.text(lines, M + indent, y);
  y += lines.length * 3.8 + 1;
}

function thinDivider() {
  y += 2;
  doc.setDrawColor(...pink);
  doc.setLineWidth(0.2);
  doc.line(M, y, W - M, y);
  y += 4;
}

// ═══════════════════════════════════════════
// PAGE 1
// ═══════════════════════════════════════════

// Pink accent bar
doc.setFillColor(...pink);
doc.rect(0, 0, W, 6, "F");

y = 16;

// Name
doc.setFont("helvetica", "bold");
doc.setFontSize(28);
doc.setTextColor(...navy);
doc.text("NOLA SIMON", M, y);
y += 8;

// Tagline
doc.setFont("helvetica", "normal");
doc.setFontSize(11);
doc.setTextColor(...gold);
doc.text("Strategic Futurist  |  Speaker  |  Podcast Host", M, y);
y += 6;

// Crown
doc.setFont("helvetica", "italic");
doc.setFontSize(10);
doc.setTextColor(...navy);
doc.text("\"The future isn't predicted. It's practiced.\"", M, y);
y += 7;

thinDivider();

// ─── Bio ───
heading("About", 11);
body(
  "Nola Simon is a strategic futurist, keynote speaker, and podcast host who spent 20+ years across five large, complex organizations before leaving to build something different. Her methodology, Everyday Futurism, helps leaders and organizations trust themselves to read signals, challenge narratives, and make intentional moves before the status quo collapses underneath them."
);
y += 1;
body(
  "She doesn't predict the future. She helps people practice it. Her career pivots, sabbatical, corporate exit, and choices as a working parent aren't anecdotes. They're data. She is the case study."
);

thinDivider();

// ─── Everyday Futurism ───
heading("Everyday Futurism", 11);
body(
  "A methodology grounded in five phases: Metacognition, Narrative Recognition, Signal Scanning, Small Experiments, and Narrative Building. The core principle: trust and identity come first. You stop waiting for permission. You start noticing what's already changing. You make moves before the map is complete."
);

thinDivider();

// ─── Speaking Topics — compact two-column layout ───
heading("Signature Speaking Topics", 11);
bullet("Everyday Futurism: How to practice the future before it arrives");
bullet("The Self-Trust Deficit: Why smart leaders stay stuck");
bullet("Signal Reading for Leaders: What you're already noticing (and ignoring)");
bullet("The Future of Work Is Already Here: Culture, trust, and what comes next");

y += 1;
doc.setFont("helvetica", "bold");
doc.setFontSize(9);
doc.setTextColor(...pink);
doc.text("Formats:", M, y);
doc.setFont("helvetica", "normal");
doc.setTextColor(...gray);
doc.text("Keynote (30-60 min)  |  Fireside chat / panel  |  Virtual keynote", M + 18, y);
y += 5;

thinDivider();

// ─── Credentials ───
heading("Credentials", 11);
bullet("20+ years across five large organizations in strategy, communications, and leadership");
bullet("LinkedIn Top Voice 2024 & 2025");
bullet("Panelist at Elevate TechFest; speaker at Future of Work conferences and enterprise events across North America");
bullet("Host of the Hope + Possibilities podcast (100+ episodes)");
bullet("Writer on Substack covering self-trust, leadership, and the future of work");

thinDivider();

// ─── Select Media ───
heading("Select Media", 11);

const media = [
  ["Maclean's", "Why I Made a Midlife Career Switch"],
  ["CBC Spark", "The Future of Remote Work"],
  ["CTV News", "Difficult conversations ahead for employers looking to bring staff back to office"],
  ["CBC News", "Finally heading back to the office? It's getting more expensive to do that"],
  ["The Canadian Press", "Back-to-office plans fall flat amid arbitrary rules, lack of communication"],
  ["CityNews", "Canadian employers missing the mark with hybrid work policies"],
  ["Reworked", "How to Equitably Handle Employee Recognition in a Hybrid Workplace"],
];

for (const [outlet, title] of media) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(...navy);
  const outletW = doc.getTextWidth(outlet + "  ");
  doc.text(outlet, M, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...lightGray);
  const titleLines = doc.splitTextToSize(title, CW - outletW - 2);
  doc.text(titleLines, M + outletW, y);
  y += titleLines.length * 3.6 + 1.2;
}

// Bottom accent bar page 1
doc.setFillColor(...pink);
doc.rect(0, H - 6, W, 6, "F");

// ═══════════════════════════════════════════
// PAGE 2
// ═══════════════════════════════════════════
doc.addPage();

doc.setFillColor(...pink);
doc.rect(0, 0, W, 6, "F");
y = 16;

// ─── Speaking Highlight ───
heading("Speaking Highlight", 11);
doc.setFont("helvetica", "bold");
doc.setFontSize(9);
doc.setTextColor(...navy);
doc.text("Elevate Festival", M, y);
doc.setFont("helvetica", "normal");
doc.setTextColor(...gray);
doc.text(' \u2014 "Make Work Love You Back"', M + doc.getTextWidth("Elevate Festival"), y);
y += 4;
body("A talk on self-trust, intentional change, and building a working life that actually works \u2014 delivered at Canada's leading innovation festival.");

thinDivider();

// ─── Advisory ───
heading("Advisory & Consulting", 11);
body(
  "High-touch strategic partnerships for leadership teams navigating transformation. Signal scanning, landscape analysis, facilitated strategy sessions, and ongoing advisory partnership. Selective 1:1 consulting for senior leaders by invitation."
);
y += 1;
body(
  "Every engagement starts the same way: a conversation about what you're seeing and where you want to go."
);

thinDivider();

// ─── Headshots ───
heading("Headshots", 11);
body("High-resolution headshots available for download:");
y += 1;

const headshots = [
  ["Portrait (wildflowers)", "nolasimon.com/images/nola-about.jpg"],
  ["Speaking (black & white)", "nolasimon.com/images/nola-speaking.jpg"],
  ["Media (autumn, kimono)", "nolasimon.com/images/nola-media.jpg"],
  ["Editorial (pink backdrop)", "nolasimon.com/images/nola-pink.jpg"],
];

for (const [label, url] of headshots) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...navy);
  doc.text(label + ":", M + 5, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...pink);
  doc.text(url, M + 55, y);
  // Make it a clickable link
  doc.link(M + 55, y - 3, CW - 55, 4, { url: "https://" + url });
  y += 5;
}

thinDivider();

// ─── Contact ───
heading("Contact & Links", 11);

const links = [
  ["Email", "nola@nolasimon.com", "mailto:nola@nolasimon.com"],
  ["Website", "nolasimon.com", "https://nolasimon.com"],
  ["LinkedIn", "linkedin.com/in/nolasimon/", "https://linkedin.com/in/nolasimon/"],
  ["Newsletter", "nolasimonhrcoe.substack.com", "https://nolasimonhrcoe.substack.com"],
  ["Podcast", "nolasimon.com/podcast", "https://nolasimon.com/podcast"],
  ["Elevate Speaker Page", "elevate.ca/speakers/nola-simon/", "https://elevate.ca/speakers/nola-simon/"],
];

for (const [label, display, href] of links) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...navy);
  doc.text(label + ":", M, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...pink);
  doc.text(display, M + 42, y);
  doc.link(M + 42, y - 3, CW - 42, 4, { url: href });
  y += 5;
}

y += 4;

// Footer quote
doc.setFont("helvetica", "italic");
doc.setFontSize(9);
doc.setTextColor(...gold);
doc.text("The future isn't predicted. It's practiced.", M, y);

// Bottom accent bar
doc.setFillColor(...pink);
doc.rect(0, H - 6, W, 6, "F");

// ─── Output ───
const output = doc.output("arraybuffer");
writeFileSync("public/nola-simon-press-kit.pdf", Buffer.from(output));
console.log("Press kit PDF generated: public/nola-simon-press-kit.pdf");
