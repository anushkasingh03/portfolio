export const profile = {
  name: "Anushka Singh",
  role: "ML Systems & AI Engineer",
  subtitle: "LLM Inference · Model Optimization · Applied AI",
  email: "anushkasingh2724@gmail.com",
  location: "United States",
  // Empty strings are hidden automatically. The Resume buttons open /public/resume.pdf.
  links: {
    linkedin: "https://www.linkedin.com/in/anushkasingh03/",
    github: "https://github.com/anushkasingh03",
    resume: "/resume.pdf",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  description:
    "ML systems and applied AI engineer working on LLM inference, KV-cache quantization, CUDA profiling, and efficient AI systems. M.S. Computer Science, Johns Hopkins University.",
  status: "Open to ML Systems, Inference & Applied AI Roles",
  // Text inside *asterisks* is set in italic.
  statement: "Chasing the *sweet spot* between creativity and computation.",
  supporting: "Building efficient ML systems, optimizing LLM inference, and turning research into working software.",
};

export const nav = [
  { id: "about", n: "01", label: "About" },
  { id: "projects", n: "02", label: "Projects" },
  { id: "skills", n: "03", label: "Skills" },
  { id: "experience", n: "04", label: "Experience" },
  { id: "papers", n: "05", label: "Papers" },
  { id: "education", n: "06", label: "Education" },
];

export const summary = {
  line: "I like building systems that think, learn, and sometimes surprise me.",
  paragraphs: [
    "Hey, I'm Anushka! 👋 I recently graduated with an M.S. in Computer Science from Johns Hopkins University, where I became fascinated by what happens behind the scenes when AI models run.",
    "Lately, I've been exploring LLM inference optimization, KV-cache compression, CUDA, and performance profiling. I love figuring out why systems slow down and experimenting with ways to make them faster.",
    "I'm also interested in applied AI, deep learning, and building intelligent systems that solve real problems.",
    "Outside of code, you'll find me sketching UI ideas, mentoring students, or searching for the perfect cup of chai. ☕",
  ],
};

// Four groups. tone: green | yellow | key | absent (the Wordle tile colors)
export const skills = [
  { title: "Programming", tone: "yellow", items: ["Python", "C/C++", "CUDA"] },
  {
    title: "ML Systems & Inference",
    tone: "green",
    items: ["vLLM", "SGLang", "PagedAttention", "Continuous batching", "Speculative decoding", "KV cache compression", "CUDA memory profiling", "PyTorch Profiler"],
  },
  {
    title: "Machine Learning & AI",
    tone: "key",
    items: ["PyTorch", "Hugging Face Transformers", "LLMs", "Agentic AI", "RAG", "LangGraph", "NLP", "TensorFlow", "Scikit-Learn"],
  },
  { title: "Tools & Platforms", tone: "absent", items: ["AWS", "Docker", "Git", "Linux", "Weights & Biases", "REST APIs"] },
];
