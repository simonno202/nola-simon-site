import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "The Trust Signal Quiz — Can You Actually Read a Trust Signal? | Nola Simon",
  description:
    "18 questions, about six minutes. A mirror for what you actually trust — and what you've been trained to call trustworthy without checking. From Nola Simon's Everyday Futurism.",
  alternates: {
    canonical: "https://nolasimon.com/trust-signal-quiz",
  },
  openGraph: {
    type: "website",
    url: "https://nolasimon.com/trust-signal-quiz",
    title: "The Trust Signal Quiz — Can You Actually Read a Trust Signal?",
    description:
      "Most trust signals are cooperatively produced. Almost nobody notices. 18 questions, ~6 minutes, 3 outcomes — find out where your filters actually sit.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Trust Signal Quiz",
    description:
      "18 questions to find out where your trust filters actually sit. For leaders, hiring managers, investors, and journalists.",
  },
};

export default function TrustSignalQuizPage() {
  return <QuizClient />;
}
