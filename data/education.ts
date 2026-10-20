export type School = { mark: string; school: string; degree: string; dates: string; coursework: string[] };

export const education: School[] = [
  {
    mark: "JH", school: "Johns Hopkins University", degree: "Master of Science in Computer Science", dates: "Aug 2024 – May 2026",
    coursework: ["Deep Learning", "Reinforcement Learning", "CUDA Programming", "AI Systems Design", "Self-Supervised NLP", "Cloud Computing", "Algorithms"],
  },
  {
    mark: "AM", school: "Amity University", degree: "B.Tech (Hons.) Computer Science, AI/ML specialization", dates: "Aug 2020 – May 2024",
    coursework: ["Deep Learning", "Neural Networks", "Operating Systems", "Cloud Computing", "Data Structures & Algorithms"],
  },
  {
    mark: "AD", school: "Adelphi University", degree: "Study Abroad Program, Computer Science", dates: "Apr 2023 – Jun 2023",
    coursework: ["Artificial Intelligence", "Fundamentals of Machine Learning", "Deep Learning and Neural Networks"],
  },
  {
    mark: "UL", school: "University of London", degree: "Study Abroad Program, Computer Science", dates: "Jan 2023 – Mar 2023",
    coursework: ["Software Engineering", "Advanced Java Programming"],
  },
];
