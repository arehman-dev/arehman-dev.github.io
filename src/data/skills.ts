export interface Skill {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Beginner' | 'Learning' | 'Exam Prep';
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Currently Learning & Specializing",
    skills: [
      { name: "Linux Masterclass (Imran Afzal)", level: "Learning", icon: "🐧" },
      { name: "Intro to C++ Specialization (MS)", level: "Learning", icon: "⚡" },
      { name: "Python for Everybody (Py4E)", level: "Learning", icon: "🐍" },
      { name: "Google Cybersecurity Track", level: "Learning", icon: "🛡️" },
      { name: "Scientific Computing (FCC)", level: "Learning", icon: "📊" },
      { name: "Machine Learning (FCC)", level: "Learning", icon: "🤖" }
    ]
  },
  {
    title: "Programming & Automation",
    skills: [
      { name: "Python Programming", level: "Advanced", icon: "🐍" },
      { name: "C++ Development", level: "Intermediate", icon: "⚡" },
      { name: "Bash Scripting", level: "Advanced", icon: ">_" },
      { name: "Automation Workflows", level: "Advanced", icon: "⚙️" },
      { name: "Algorithms & Data Structures", level: "Intermediate", icon: "🧩" },
      { name: "Version Control (Git/GitHub)", level: "Intermediate", icon: "🐙" }
    ]
  },
  {
    title: "System Administration & Testing",
    skills: [
      { name: "Linux System Administration", level: "Advanced", icon: "🐧" },
      { name: "Software Testing & QA", level: "Intermediate", icon: "🧪" },
      { name: "Security & System Hardening", level: "Intermediate", icon: "🔐" },
      { name: "Docker Containerization", level: "Intermediate", icon: "📦" },
      { name: "Network Configuration (TCP/IP)", level: "Intermediate", icon: "🌐" },
      { name: "Incident Response & Logging", level: "Intermediate", icon: "📋" }
    ]
  }
];
