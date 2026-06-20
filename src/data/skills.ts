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
    title: "Programming & Automation",
    skills: [
      { name: "Python", level: "Advanced", icon: "🐍" },
      { name: "C++", level: "Intermediate", icon: "⚡" },
      { name: "Bash Scripting", level: "Advanced", icon: ">_" },
      { name: "Automation Workflows", level: "Advanced", icon: "⚙️" },
      { name: "Markdown & Docs", level: "Intermediate", icon: "📝" }
    ]
  },
  {
    title: "System Administration & Testing",
    skills: [
      { name: "Linux System Administration", level: "Advanced", icon: "🐧" },
      { name: "Software Testing", level: "Intermediate", icon: "🧪" },
      { name: "Security & Hardening", level: "Intermediate", icon: "🔐" },
      { name: "Docker Containers", level: "Intermediate", icon: "📦" },
      { name: "Network Configuration (TCP/IP, DNS)", level: "Intermediate", icon: "🌐" }
    ]
  },
  {
    title: "Currently Learning & Specializing",
    skills: [
      { name: "Google IT Automation with Python", level: "Exam Prep", icon: "📜" },
      { name: "Scientific Computing with Python", level: "Learning", icon: "📊" },
      { name: "Ansible & Ansible Playbooks", level: "Learning", icon: "🔄" },
      { name: "Vim Mastery", level: "Learning", icon: "⌨️" }
    ]
  }
];
