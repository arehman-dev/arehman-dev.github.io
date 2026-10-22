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
  domain: 'kernel' | 'network' | 'ai' | 'devops' | 'interface';
}

export const techStackData: TechStackItem[] = [
  // Core / Daily Drivers
  { name: "Python", icon: "fa-brands fa-python", isCore: true, domain: "ai" },
  { name: "Bash / Shell", icon: "fa-solid fa-terminal", isCore: true, domain: "kernel" },
  { name: "C++", icon: "fa-solid fa-code", isCore: true, domain: "kernel" },
  { name: "Systemd & Linux CLI", icon: "fa-brands fa-linux", isCore: true, domain: "kernel" },
  { name: "Ubuntu Linux", icon: "fa-brands fa-ubuntu", isCore: true, domain: "kernel" },
  { name: "Debian Linux", icon: "fa-brands fa-debian", isCore: true, domain: "kernel" },
  { name: "Docker", icon: "fa-brands fa-docker", isCore: true, domain: "devops" },
  { name: "Git & GitHub", icon: "fa-brands fa-git-alt", isCore: true, domain: "devops" },

  // Operating Systems, Virtualization & Kernel
  { name: "Red Hat Linux (RHEL)", icon: "fa-brands fa-redhat", domain: "kernel" },
  { name: "Podman", icon: "fa-solid fa-boxes-stacked", domain: "devops" },
  { name: "QEMU / KVM", icon: "fa-solid fa-server", domain: "devops" },
  { name: "GNOME Boxes", icon: "fa-solid fa-box-open", domain: "devops" },
  { name: "LVM & Filesystems", icon: "fa-solid fa-hard-drive", domain: "kernel" },
  { name: "ntfs-3g", icon: "fa-solid fa-floppy-disk", domain: "kernel" },
  { name: "Cron & Scheduling", icon: "fa-solid fa-clock-rotate-left", domain: "kernel" },
  { name: "tmux", icon: "fa-solid fa-table-columns", domain: "kernel" },
  { name: "ttyd & Xterm.js", icon: "fa-solid fa-window-maximize", domain: "kernel" },
  { name: "GDB & Valgrind", icon: "fa-solid fa-bug-slash", domain: "kernel" },

  // Networking, Security & Testing
  { name: "TCP/IP & DNS", icon: "fa-solid fa-ethernet", domain: "network" },
  { name: "ip netns / veth", icon: "fa-solid fa-network-wired", domain: "network" },
  { name: "SSH & Firewalld / UFW", icon: "fa-solid fa-fire-flame-curved", domain: "network" },
  { name: "Outline VPN", icon: "fa-solid fa-shield-halved", domain: "network" },
  { name: "OpenVPN", icon: "fa-solid fa-lock", domain: "network" },
  { name: "WireGuard", icon: "fa-solid fa-user-shield", domain: "network" },
  { name: "Unit Testing & QA", icon: "fa-solid fa-vial-circle-check", domain: "devops" },

  // AI, LLMs, Python, Data & Automation
  { name: "Llama & Local LLMs", icon: "fa-solid fa-microchip", domain: "ai" },
  { name: "AI Model Testing & Eval", icon: "fa-solid fa-sliders", domain: "ai" },
  { name: "AI Workflows & Agents", icon: "fa-solid fa-robot", domain: "ai" },
  { name: "Gemini Vision API", icon: "fa-solid fa-wand-magic-sparkles", domain: "ai" },
  { name: "TensorFlow", icon: "fa-solid fa-brain", domain: "ai" },
  { name: "Pandas", icon: "fa-solid fa-table", domain: "ai" },
  { name: "NumPy", icon: "fa-solid fa-cubes-stacked", domain: "ai" },
  { name: "Matplotlib", icon: "fa-solid fa-chart-line", domain: "ai" },
  { name: "OpenCV", icon: "fa-solid fa-eye", domain: "ai" },
  { name: "BeautifulSoup4", icon: "fa-solid fa-spider", domain: "ai" },
  { name: "Requests & REST APIs", icon: "fa-solid fa-globe", domain: "ai" },
  { name: "RegEx", icon: "fa-solid fa-asterisk", domain: "ai" },

  // Web, Mobile & Interface Engineering
  { name: "Astro", icon: "fa-solid fa-rocket", domain: "interface" },
  { name: "Jekyll", icon: "fa-solid fa-flask", domain: "interface" },
  { name: "HTML5", icon: "fa-brands fa-html5", domain: "interface" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", domain: "interface" },
  { name: "JavaScript", icon: "fa-brands fa-js", domain: "interface" },
  { name: "TypeScript", icon: "fa-solid fa-file-code", domain: "interface" },
  { name: "Markdown", icon: "fa-brands fa-markdown", domain: "interface" },
  { name: "Kotlin", icon: "fa-brands fa-android", domain: "interface" },
  { name: "Jetpack Compose", icon: "fa-solid fa-mobile-screen-button", domain: "interface" },
  { name: "SQLite / Room", icon: "fa-solid fa-database", domain: "interface" },
  { name: "Gradle", icon: "fa-solid fa-gears", domain: "devops" },

  // DevOps, CI/CD & IaC
  { name: "GitHub Actions", icon: "fa-solid fa-circle-play", domain: "devops" },
  { name: "GitHub Pages", icon: "fa-brands fa-github", domain: "devops" },
  { name: "Ansible", icon: "fa-solid fa-scroll", domain: "devops" },
  { name: "Terraform", icon: "fa-solid fa-cubes", domain: "devops" },
  { name: "Kubernetes", icon: "fa-solid fa-dharmachakra", domain: "devops" },
  { name: "Jenkins", icon: "fa-brands fa-jenkins", domain: "devops" },
  { name: "Tekton Pipelines", icon: "fa-solid fa-diagram-project", domain: "devops" }
];


