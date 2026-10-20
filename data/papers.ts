export type Paper = { title: string; venue: string; year: string; summary: string; href: string; doi?: string };

export const papers: Paper[] = [
  {
    title: "A Pilot Study of a Gamified CBT-Based Digital Approach for Body Image Distress and Appearance-Related Concerns",
    venue: "Human Behavior and Emerging Technologies (Wiley)",
    year: "2026",
    summary: "A pilot serious game that pairs CBT techniques with AI analysis of what players write, so the feedback adapts to how they feel. The model reached 97.15% accuracy on held-out data and beat a BERT-based baseline. Early results are preliminary, not a claim of clinical efficacy.",
    href: "https://doi.org/10.1155/hbe2/8902875",
    doi: "10.1155/hbe2/8902875",
  },
  {
    title: "Impact of Colour Image and Skeleton Plotting on Sign Language Recognition Using CNN",
    venue: "IEEE Confluence",
    year: "2024",
    summary: "A CNN for American Sign Language letters, trained on two versions of the same images: greyscale, and colour with the hand skeleton plotted on top. The colour and skeleton version reached 99.56% accuracy.",
    href: "https://ieeexplore.ieee.org/document/10463239",
    doi: "10.1109/CONFLUENCE60223.2024.10463239",
  },
];
