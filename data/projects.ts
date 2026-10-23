// Only facts from the résumé, the papers and the project report belong here.
// Optional fields (highlights, challenges, links) render only when filled in.
export type Project = {
  id: string; tab: string; blurb: string; title: string;
  flagship?: boolean; award?: string; context?: string; stack: string[];
  problem: string; approach: string; outcome: string;
  metrics: { value: string; label: string }[];
  highlights?: string[];
  challenges?: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "kv-cache",
    tab: "KV-cache quantization",
    blurb: "~2× less cache memory, same perplexity",
    title: "Don't drop it, compress it: selective KV quantization",
    award: "Best Project Award",
    stack: ["PyTorch", "GPT-Fast", "Hugging Face", "PyTorch Profiler", "LLaMA-3.1 8B", "A100 80GB"],
    problem: "In our runs the KV cache took over 90% of GPU memory and grew with every token. Evicting old tokens saves space but hurts quality badly.",
    approach: "I kept the attention-sink and most recent tokens in fp16 and stored older tokens as int8 instead of dropping them. Built on GPT-Fast with LLaMA-3.1 8B.",
    outcome: "About 2× less cache memory at the same perplexity as the full cache, with a modest ROUGE-L drop. Plain eviction saved more memory (~4×) but perplexity jumped from 5.56 to 132.08.",
    metrics: [
      { value: "~2×", label: "KV cache memory savings" },
      { value: "5.56", label: "perplexity, same as full cache" },
      { value: "0.17", label: "ROUGE-L, down from 0.21" },
    ],
    highlights: [
      "Sink and recent tokens stay in fp16. Older tokens move to int8 and are dequantized on the fly.",
      "Profiled peak GPU memory, tokens per second and kernel timelines.",
      "Tested on WikiText-2 and CNN/DailyMail with perplexity and ROUGE-L.",
    ],
    challenges: [
      "Dequantizing on the fly cost speed: 6.75 to 4.47 tokens/s.",
      "Eviction alone saved ~4× but perplexity jumped to 132.08.",
    ],
    links: [{ label: "Code", href: "https://github.com/anushkasingh03/kv-quantization" }],
  },
  {
    id: "fraud-gnn",
    tab: "Fraud detection",
    blurb: "Graph model, sub-second inference",
    title: "Graph neural networks for real-time fraud detection",
    stack: ["Python", "GNNs", "GANs", "AWS Lambda"],
    problem: "Fraud checks have to run live without flooding analysts with false alarms.",
    approach: "I built a generative adversarial graph network for transaction fraud and served it on AWS Lambda.",
    outcome: "40% fewer false positives, and answers in under a second.",
    metrics: [{ value: "−40%", label: "false positives" }, { value: "<1s", label: "inference" }],
    highlights: [
      "A generative adversarial graph network over financial transactions.",
      "Served through AWS Lambda for real-time flagging.",
      "Judged on false positives and inference latency.",
    ],
    challenges: [
      "Keeping false positives low while flagging in real time.",
      "Getting sub-second inference out of a graph model.",
    ],
    links: [{ label: "Code", href: "https://github.com/anushkasingh03/gnn-fraud-detection" }],
  },
  {
    id: "body-image",
    tab: "Body image game",
    blurb: "CBT-inspired game with sentiment AI",
    title: "A gamified CBT app for body image distress",
    context: "University of Essex",
    stack: ["PyTorch", "TensorFlow", "OpenAI", "BERT baseline"],
    problem: "Body image distress is hard to catch early, and most self-help tools feel generic.",
    approach: "I built the sentiment model behind a CBT-based serious game. It reads what players write and adapts the feedback to how they're feeling.",
    outcome: "It beat a BERT-based baseline on held-out data. Early pilot results showed better engagement and reflection (not a clinical claim). Published in Human Behavior and Emerging Technologies.",
    metrics: [{ value: "97.15%", label: "test accuracy" }, { value: "25%", label: "better early detection" }],
    highlights: [
      "Sentiment analysis on player input drives adaptive, personal feedback.",
      "Gameplay built around CBT techniques.",
      "Managed data pipelines and model versioning for a 3-person research team.",
    ],
    challenges: [
      "Giving personal feedback from a real-time read of emotion.",
      "Reporting a pilot honestly: results are preliminary and user-reported.",
    ],
    links: [{ label: "Read the paper", href: "https://doi.org/10.1155/hbe2/8902875" }],
  },
  {
    id: "sign-language",
    tab: "Sign language CNN",
    blurb: "99.56% with colour + skeleton images",
    title: "Colour images vs. skeleton plots for sign language recognition",
    context: "IEEE Confluence 2024",
    stack: ["Python", "CNN", "Keras", "Computer vision"],
    problem: "Hand-sign classifiers often learn from greyscale images. Does adding colour and a drawn hand skeleton help a CNN read signs better?",
    approach: "I trained the same CNN on two versions of an ASL alphabet dataset: greyscale images, and colour images with the hand skeleton plotted on top.",
    outcome: "The colour and skeleton images reached 99.56% accuracy, against about 85% test accuracy for greyscale at 25 epochs, and the train-test gap nearly disappeared.",
    metrics: [
      { value: "99.56%", label: "colour + skeleton" },
      { value: "~85%", label: "greyscale, 25 epochs" },
      { value: "26", label: "ASL letters" },
    ],
    highlights: [
      "One CNN, two input types, everything else held the same.",
      "A custom ASL alphabet dataset: hand isolated, background removed, 264×264.",
      "Compared at 10, 15 and 25 epochs.",
    ],
    challenges: [
      "Keeping the comparison fair: only the preprocessing changed.",
      "Isolating the hand so the model learns the sign, not the scene.",
    ],
    links: [{ label: "Read the paper", href: "https://ieeexplore.ieee.org/document/10463239" }],
  },
];
