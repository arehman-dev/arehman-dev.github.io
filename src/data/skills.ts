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

export interface TechStackItem {
  name: string;
  icon: string;
  isCore?: boolean;
}

export const techStackData: TechStackItem[] = [
  // Core / Daily Drivers
  { name: "Python", icon: "fa-brands fa-python", isCore: true },
  { name: "Bash / Shell", icon: "fa-solid fa-terminal", isCore: true },
  { name: "C++", icon: "fa-solid fa-code", isCore: true },
  { name: "Systemd & Linux CLI", icon: "fa-brands fa-linux", isCore: true },
  { name: "Ubuntu Linux", icon: "fa-brands fa-ubuntu", isCore: true },
  { name: "Debian Linux", icon: "fa-brands fa-debian", isCore: true },
  { name: "Docker", icon: "fa-brands fa-docker", isCore: true },
  { name: "Git & GitHub", icon: "fa-brands fa-git-alt", isCore: true },

  // Worked With — Operating Systems, Virtualization & Containers
  { name: "Red Hat Linux (RHEL)", icon: "fa-brands fa-redhat" },
  { name: "Podman", icon: "fa-solid fa-boxes-stacked" },
  { name: "QEMU / KVM", icon: "fa-solid fa-server" },
  { name: "GNOME Boxes", icon: "fa-solid fa-box-open" },
  { name: "LVM & Filesystems", icon: "fa-solid fa-hard-drive" },
  { name: "ntfs-3g", icon: "fa-solid fa-floppy-disk" },
  { name: "Cron & Scheduling", icon: "fa-solid fa-clock-rotate-left" },
  { name: "tmux", icon: "fa-solid fa-table-columns" },
  { name: "ttyd & Xterm.js", icon: "fa-solid fa-window-maximize" },

  // Worked With — Networking, Security & Testing
  { name: "TCP/IP & DNS", icon: "fa-solid fa-ethernet" },
  { name: "ip netns / veth", icon: "fa-solid fa-network-wired" },
  { name: "SSH & Firewalld / UFW", icon: "fa-solid fa-fire-flame-curved" },
  { name: "Outline VPN", icon: "fa-solid fa-shield-halved" },
  { name: "OpenVPN", icon: "fa-solid fa-lock" },
  { name: "WireGuard", icon: "fa-solid fa-user-shield" },
  { name: "Unit Testing & QA", icon: "fa-solid fa-vial-circle-check" },
  { name: "GDB & Valgrind", icon: "fa-solid fa-bug-slash" },

  // Worked With — AI, LLMs, Python, Data & Automation
  { name: "Llama & Local LLMs", icon: "fa-solid fa-microchip" },
  { name: "AI Model Testing & Eval", icon: "fa-solid fa-sliders" },
  { name: "AI Workflows & Agents", icon: "fa-solid fa-robot" },
  { name: "Gemini Vision API", icon: "fa-solid fa-wand-magic-sparkles" },
  { name: "TensorFlow", icon: "fa-solid fa-brain" },
  { name: "Pandas", icon: "fa-solid fa-table" },
  { name: "NumPy", icon: "fa-solid fa-cubes-stacked" },
  { name: "Matplotlib", icon: "fa-solid fa-chart-line" },
  { name: "OpenCV", icon: "fa-solid fa-eye" },
  { name: "BeautifulSoup4", icon: "fa-solid fa-spider" },
  { name: "Requests & REST APIs", icon: "fa-solid fa-globe" },
  { name: "RegEx", icon: "fa-solid fa-asterisk" },

  // Worked With — Web, Mobile & Databases
  { name: "Astro", icon: "fa-solid fa-rocket" },
  { name: "Jekyll", icon: "fa-solid fa-flask" },
  { name: "HTML5", icon: "fa-brands fa-html5" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "TypeScript", icon: "fa-solid fa-file-code" },
  { name: "Markdown", icon: "fa-brands fa-markdown" },
  { name: "Kotlin", icon: "fa-brands fa-android" },
  { name: "Jetpack Compose", icon: "fa-solid fa-mobile-screen-button" },
  { name: "SQLite / Room", icon: "fa-solid fa-database" },
  { name: "Gradle", icon: "fa-solid fa-gears" },

  // Worked With — DevOps, CI/CD & IaC
  { name: "GitHub Actions", icon: "fa-solid fa-circle-play" },
  { name: "GitHub Pages", icon: "fa-brands fa-github" },
  { name: "Ansible", icon: "fa-solid fa-scroll" },
  { name: "Terraform", icon: "fa-solid fa-cubes" },
  { name: "Kubernetes", icon: "fa-solid fa-dharmachakra" },
  { name: "Jenkins", icon: "fa-brands fa-jenkins" },
  { name: "Tekton Pipelines", icon: "fa-solid fa-diagram-project" }
];


