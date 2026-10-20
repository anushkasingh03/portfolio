// impact = short, measurable results shown as chips under the title (only numbers that exist in the résumé).
export type Role = { org: string; title: string; place: string; dates: string; points: string[]; impact?: string[] };

export const experience: Role[] = [
  { org: "Cornell Tech, Break Through Tech", title: "AI Studio Coach", place: "New York, NY", dates: "Jan 2026 – May 2026",
    impact: ["4+ student teams coached"],
    points: ["Coached 4+ interdisciplinary student teams through end-to-end ML projects: problem framing, model selection, evaluation, and deployment on real industry datasets.",
             "Guided teams in Python, PyTorch, and applied ML, with an emphasis on reproducibility, experimentation rigor, and ethical AI practices."] },
  { org: "Johns Hopkins University", title: "Graduate Teaching Assistant, Artificial Intelligence", place: "Baltimore, MD", dates: "Aug 2025 – May 2026",
    impact: ["60+ graduate students supported"],
    points: ["Supported 60+ graduate students on reasoning-based agents, probabilistic AI, and ML workflow debugging through weekly office hours, structured feedback, and course materials on Bayesian inference and search algorithms."] },
  { org: "Johns Hopkins University", title: "Graduate Teaching Assistant, Operating Systems", place: "Baltimore, MD", dates: "Jan 2025 – May 2025",
    points: ["Guided students through concurrency, synchronization, scheduling, and kernel-level debugging in Pintos, building the systems-level understanding that high-performance serving infrastructure relies on."] },
  { org: "Johns Hopkins University", title: "Machine Learning Research Assistant", place: "Baltimore, MD", dates: "Sep 2024 – Jan 2025",
    points: ["Developed evaluation benchmarks for LLM-based table reasoning and complex database operations, enabling systematic analysis of model accuracy, reasoning failures, and performance across structured-data tasks."] },
  { org: "University of Essex", title: "Artificial Intelligence Research Assistant", place: "Colchester, UK", dates: "Sep 2023 – Aug 2024",
    impact: ["97.15% test accuracy", "25% better early detection"],
    points: ["Built a multi-modal sentiment analysis model (PyTorch, TensorFlow, OpenAI) that reached 97.15% accuracy on held-out data for classifying user responses in a CBT-inspired digital intervention.",
             "Co-authored a peer-reviewed publication in Human Behavior and Emerging Technologies (Wiley, 2026) on a digital mental-health intervention, and managed data pipelines and model versioning for a 3-person research team."] },
  // Salesforce and Ulavi: wording taken from the résumé and the Notion page. Confirm before publishing.
  { org: "Salesforce", title: "Software Engineer Intern", place: "Remote", dates: "May 2023 – Dec 2023",
    impact: ["30% less manual CRM processing", "90% Apex test coverage"],
    points: ["Developed ML-integrated lead-routing workflows using Salesforce Lightning Web Components and Apex, reducing manual CRM processing by 30%.",
             "Achieved 90% test coverage for Apex classes and supported automated deployments using Salesforce DX and Git-based CI/CD."] },
  { org: "Ulavi Technologies", title: "Frontend Engineering Intern", place: "Singapore", dates: "Jan 2023 – May 2023",
    impact: ["15% more site traffic"],
    points: ["Built a responsive tourism portal in HTML, CSS, and JavaScript, which boosted site traffic by 15%.",
             "Collaborated with designers to translate UI concepts into responsive, user-friendly web interfaces."] },
];
