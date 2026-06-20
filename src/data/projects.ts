export interface Project {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  status: 'Live' | 'In Progress' | 'Completed' | 'Upcoming' | 'Concept';
  link: string;
  sourceLink?: string;
  longDescription: string;
  problem?: string;
  solution?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    title: "🏠 Linux Home Server",
    description: "Personal home server infrastructure running on Debian/Linux for media streaming, file sharing, and network services. Focus on security, automation, and efficient resource management.",
    slug: "linux-home-server",
    tags: ["Debian", "Linux", "Docker", "Networking", "Security"],
    status: "In Progress",
    link: "#",
    longDescription: "A self-hosted home server infrastructure built on top of Debian/Linux designed for reliability, privacy, and hands-on system administration experience. This project hosts local media, file storage, DNS sinkholes, and other home services inside isolated environments, secured through modern network practices and automated through scripting.",
    problem: "Commercial cloud services can be expensive, have privacy concerns, and do not offer full control or learning opportunities for deep system administration and networking infrastructure.",
    solution: "Provisioned a dedicated hardware server running Debian Linux, using Docker containerization, a secure local VPN (WireGuard), reverse proxies with automatic SSL certifications, and automated backup scripts.",
    features: [
      "Dockerized services (media stack, AdGuard Home DNS sinkhole, Nextcloud file sharing)",
      "Automated system health monitoring and cron-based backup routines",
      "Secure remote access via WireGuard VPN",
      "Internal reverse proxy managing domain traffic with SSL certs"
    ]
  },
  {
    title: "🌤️ Weather Extension",
    description: "Browser extension providing real-time weather updates and forecasts. Clean interface with location-based weather data and customizable notification settings.",
    slug: "weather-extension",
    tags: ["JavaScript", "Web APIs", "Browser Extension"],
    status: "Upcoming",
    link: "#",
    longDescription: "A modern, lightweight browser extension designed to supply clean, instantaneous weather updates. Users can customize notifications, check forecasts, and receive alerts for extreme weather conditions without needing to open separate web tabs.",
    problem: "Most weather websites are heavy, slow, and filled with ads, which slows down the user's workflow when they just want a quick forecast update.",
    solution: "Built a compact, highly optimized browser extension utilizing public weather APIs, cached local settings, and minimal permissions.",
    features: [
      "Real-time location-based weather fetching",
      "Hourly and 5-day forecasts in a clean popup interface",
      "Customizable toolbar icon badges showing current temperature",
      "Low system resource footprint and zero ads"
    ]
  },
  {
    title: "Portfolio Website",
    description: "A responsive, accessible portfolio built with semantic HTML, modern CSS, and vanilla JavaScript. Features dark/light theme switching and smooth animations.",
    slug: "portfolio-website",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive", "A11y"],
    status: "Completed",
    link: "https://arehman-dev.github.io",
    sourceLink: "https://github.com/arehman-dev/arehman-dev.github.io",
    longDescription: "This personal portfolio project showcases technical projects, professional certificates, skills, and admin journey. It is redesigned using the Astro framework for rapid loading speeds, SEO optimization, and structured component architecture.",
    problem: "Single-page landing pages can become cluttered as text bio, detailed projects, and contact sections expand, reducing readability and load speeds.",
    solution: "Evolved the landing page into a structured, multi-page Astro site with static page generation, responsive sidebar navigation, a clean color system, and high-performance assets.",
    features: [
      "Static Site Generation (SSG) for sub-second page rendering",
      "OLED-friendly dark theme and minimal light theme with smooth toggling",
      "A11y compliant text contrast and keyboard-navigable sidebar",
      "Dynamic routing for custom project detail pages"
    ]
  },
  {
    title: "🛠️ My Scripts Collection",
    description: "A well-organized repository of automation scripts and utilities across multiple programming languages. Features structured naming conventions and organized directories for development workflow optimization.",
    slug: "my-scripts-collection",
    tags: ["Bash", "Python", "JavaScript", "C++", "Automation"],
    status: "Completed",
    link: "https://github.com/arehman-dev/my-scripts",
    longDescription: "A collection of scripts designed to automate system administration tasks, local machine setups, and helper tools. The repository covers automated server backups, docker compose management, file renaming utilities, and basic C++/Python algorithms.",
    problem: "Performing repetitive administrative actions like backups, user updates, and workspace configuration manually is error-prone and wastes significant time.",
    solution: "Wrote a structured library of Bash and Python scripts, complete with error handling, logging, and environment variable configuration to automate daily procedures.",
    features: [
      "Automated MySQL/PostgreSQL and directory backup scripts to local or remote storage",
      "Server initial provisioning scripts for Debian and Ubuntu",
      "Development environment installers and custom aliases",
      "Well-documented usage instructions for each utility"
    ]
  },
  {
    title: "🔔 GNOME Extension (Prayer Notifier)",
    description: "A GNOME shell extension that provides prayer time notifications for Muslim users with customizable settings and accurate prayer times.",
    slug: "gnome-extension-prayer-notifier",
    tags: ["GNOME", "JavaScript", "CSS", "Linux"],
    status: "Concept",
    link: "#",
    longDescription: "A concept GNOME shell extension designed specifically for Muslim system administrators and developers using Linux desktops. It integrates with GNOME's panel, calculating local prayer times and sending native desktop alerts when it is time to pray.",
    problem: "Most prayer alert applications require running heavy background processes or mobile devices, which can be distracting during intensive desktop work sessions.",
    solution: "Created a native desktop extension using JavaScript and GNOME APIs that runs efficiently inside the desktop shell process without needing web access.",
    features: [
      "Offline prayer calculation using standard astronomical formulas",
      "Native desktop dropdown panel with countdowns to the next prayer",
      "Custom audio triggers and system notifications",
      "High compliance with desktop theme colors and assets"
    ]
  }
];
