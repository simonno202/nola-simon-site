export type WorkFormat = "Writing" | "Audio" | "Video" | "Books";

export interface WorkItem {
  title: string;
  format: WorkFormat;
  description: string;
  url: string;
  source?: string;
  date?: string;
}

export const WORK_ITEMS: WorkItem[] = [
  // ── Writing ──
  {
    title: "Signal Over Noise Newsletter",
    format: "Writing",
    description:
      "Weekly essays on trust, leadership, and the future of work. The free newsletter that started it all.",
    url: "https://nolasimonhrcoe.substack.com/",
    source: "Substack",
  },
  {
    title: "LinkedIn Newsletter",
    format: "Writing",
    description:
      "Short-form thinking on leadership, culture, and what's changing — written for the feed but designed to linger.",
    url: "https://www.linkedin.com/in/nolasimon/",
    source: "LinkedIn",
  },

  // ── Audio ──
  {
    title: "Hope + Possibilities Podcast",
    format: "Audio",
    description:
      "A Love Letter to the Future of Work. Solo episodes on trust, signal reading, and Everyday Futurism.",
    url: "https://open.spotify.com/show/60q8ajURZVn2nS9f4meeq7",
    source: "Spotify",
  },
  {
    title: "Hope + Possibilities on Apple Podcasts",
    format: "Audio",
    description:
      "All 100+ episodes available on Apple Podcasts. Subscribe, listen, and leave a review.",
    url: "https://podcasts.apple.com/us/podcast/id1602822494?mt=2&ls=1",
    source: "Apple Podcasts",
  },
  {
    title: "Guest Podcast Appearances",
    format: "Audio",
    description:
      "Conversations on leadership, AI, trust, and Everyday Futurism as a guest on shows across the space.",
    url: "https://open.spotify.com/playlist/0S7RnKycClt7NNNKngxhSY",
    source: "Spotify Playlist",
  },

  // ── Video ──
  {
    title: "Futurism in Daily Life",
    format: "Video",
    description:
      "How futurism isn't abstract prediction — it's something you practice in everyday decisions.",
    url: "https://youtube.com/shorts/p01S6AZbdyg",
    source: "Mama, What's Next",
  },
  {
    title: "AI & Work: The Human Touch",
    format: "Video",
    description:
      "What happens to the human element as AI transforms how we work? A leadership conversation.",
    url: "https://youtube.com/shorts/MQnWaZ3R9OY",
    source: "Mama, What's Next",
  },
  {
    title: "CTV Toronto — Return-to-Office",
    format: "Video",
    description:
      "Broadcast interview on return-to-office pressure and what leaders miss about the shift.",
    url: "/media#speaking",
    source: "CTV Toronto",
  },
  {
    title: "Elevate Festival — Make Work Love You Back",
    format: "Video",
    description:
      "A talk on self-trust, intentional change, and building a working life that actually works.",
    url: "https://elevate.ca/speakers/nola-simon/",
    source: "Elevate Festival",
  },

  // ── Books ──
  {
    title: "Book — Coming Soon",
    format: "Books",
    description:
      "The Everyday Futurism book is in progress. Sign up for the newsletter to be the first to know.",
    url: "https://nolasimonhrcoe.substack.com/",
    source: "In Progress",
  },
];
