export interface MediaItem {
  outlet: string;
  title: string;
  description: string;
  url: string;
  type: "article" | "video" | "audio";
  /** Publication date, ISO YYYY-MM-DD. Only set when verified against the source. */
  date?: string;
  dateHuman?: string;
  tiktokVideoId?: string;
}

export const MEDIA_FEATURES: MediaItem[] = [
  {
    outlet: "Maclean's",
    title: "Why I Made a Midlife Career Switch",
    description:
      "A personal and professional story about reinvention, remote work, and building a business around the future of work.",
    url: "https://macleans.ca/society/why-i-made-a-midlife-career-switch/",
    type: "article",
    date: "2024-09-14",
    dateHuman: "September 2024",
  },
  {
    outlet: "CBC Radio",
    title: "The Future of Remote Work",
    description:
      "A national CBC conversation on what it takes to make hybrid work actually work.",
    url: "https://share.descript.com/view/GYjJZSY35zt",
    type: "audio",
  },
  {
    outlet: "CTV News",
    title:
      "Difficult conversations ahead for employers looking to bring staff back to office",
    description:
      "Commentary on why return-to-office mandates create friction and what leaders miss about employee engagement.",
    url: "https://www.ctvnews.ca/toronto/article/difficult-conversations-ahead-for-employers-looking-to-bring-staff-back-to-office-expert/",
    type: "article",
    date: "2022-02-08",
    dateHuman: "February 2022",
  },
  {
    outlet: "CBC News",
    title:
      "Finally heading back to the office? It's getting more expensive to do that",
    description:
      "Perspective on the real cost of return-to-office policies for workers and employers.",
    url: "https://www.cbc.ca/news/business/canada-workers-commuting-costs-inflation-1.6427865",
    type: "article",
    date: "2022-04-25",
    dateHuman: "April 2022",
  },
  {
    outlet: "The Canadian Press",
    title:
      "Back-to-office plans fall flat amid arbitrary rules, lack of communication",
    description:
      "Featured in The Canadian Press on why arbitrary return-to-office policies miss the mark for workers and employers.",
    url: "https://www.ctvnews.ca/business/back-to-office-plans-fall-flat-amid-arbitrary-rules-lack-of-communication-1.6508089",
    type: "article",
    date: "2023-09-04",
    dateHuman: "September 2023",
  },
  {
    outlet: "CityNews",
    title: "Canadian employers missing the mark with hybrid work policies",
    description:
      "Insight on why many hybrid strategies fail people in practice.",
    url: "https://toronto.citynews.ca/2023/08/23/canadian-employers-missing-the-mark-with-hybrid-work-policies/",
    type: "article",
    date: "2023-08-23",
    dateHuman: "August 2023",
  },
  {
    outlet: "Reworked",
    title:
      "How to Equitably Handle Employee Recognition in a Hybrid Workplace",
    description:
      "On building recognition systems that work for distributed teams, not just the people in the room.",
    url: "https://www.reworked.co/talent-management/how-to-equitably-handle-employee-recognition-in-a-hybrid-workplace/",
    type: "article",
    date: "2023-05-10",
    dateHuman: "May 2023",
  },
];

export const SPEAKING_HIGHLIGHTS: MediaItem[] = [
  {
    outlet: "Elevate Festival",
    title: "Make Work Love You Back",
    description:
      "A talk on self-trust, intentional change, and building a working life that actually works — delivered at Canada's leading innovation festival.",
    url: "https://share.descript.com/view/bmxPyvXskTE",
    type: "video",
  },
  {
    outlet: "CTV Toronto",
    title: "Broadcast Interview on Return-to-Office",
    description:
      "A strong on-camera example of clear, grounded media presence. Return-to-office pressure and what leaders miss about the shift.",
    url: "https://www.ctvnews.ca/toronto/article/difficult-conversations-ahead-for-employers-looking-to-bring-staff-back-to-office-expert/",
    type: "video",
  },
  {
    outlet: "Happy Space Podcast",
    title: "Flexibility and Foresight into the Future of Work",
    description:
      "A wide-ranging conversation with Clare Kumar on flexibility, foresight, and more human ways of working.",
    url: "https://clarekumar.com/podcast/20-flexibility-and-foresight-into-the-future-of-work/",
    type: "audio",
  },
  {
    outlet: "Sarah Noll Wilson Podcast",
    title: "A Conversation on Hybrid Work Culture",
    description:
      "A thoughtful discussion on leadership, culture, and hybrid work design.",
    url: "https://nollwilsongroup.com/blog/episode-042-a-conversation-on-hybrid-work-culture-with-nola-simon/",
    type: "audio",
  },
  {
    outlet: "The Remote Show / We Work Remotely",
    title: "Nola Simon, CEO of Nola Simon Advisory",
    description:
      "A strong industry-fit conversation on remote work, leadership, and workplace design.",
    url: "https://weworkremotely.com/the-remote-show-podcast/nola-simon-ceo-of-nola-simon-advisory",
    type: "audio",
  },
];

export const MEDIA_LOGOS = [
  "CBC",
  "Maclean's",
  "CTV News",
  "The Canadian Press",
  "CityNews",
  "Reworked",
] as const;
