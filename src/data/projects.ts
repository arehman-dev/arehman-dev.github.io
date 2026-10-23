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
    title: "🪐 The Blue Orbit — Offline Utility Engine",
    description: "A minimalist, 100% offline-first native Android application unifying a Reminder Engine, multi-currency PKR Budget Ledger, and Physical Asset Maintenance Log with zero telemetry.",
    slug: "the-blue-orbit",
    tags: ["Kotlin", "Jetpack Compose", "Room SQLite", "Android", "Offline-First"],
    status: "Completed",
    link: "#",
    longDescription: "The Blue Orbit is a native Android personal utility engine architected in 100% Kotlin with Jetpack Compose (Material 3 OLED True Black theme) and Room SQLite persistence. It unifies time-critical reminders, rapid transactional cashflow tracking, and vehicle/hardware maintenance logs into a single zero-telemetry application that operates with zero internet permissions.",
    problem: "Modern mobile productivity, finance, and maintenance tracking apps suffer from feature bloat, mandatory cloud subscriptions, invasive telemetry trackers, and unreliable background notifications under Android Doze mode.",
    solution: "Built a unified, strictly offline Android app using unidirectional data flow (Kotlin Coroutines & StateFlow), Room database transactions, native exact AlarmManager scheduling, and local Storage Access Framework (SAF) CSV/JSON exports.",
    features: [
      "Time-critical Reminder Engine using exact AlarmManager triggers with Done/Snooze notification actions and reboot resilience",
      "Budget & Expense Ledger with real-time aggregations, period filtering, and multi-currency support (PKR default)",
      "Physical Asset & Maintenance Log with a 1-tap atomic transaction bridge to mirror service costs directly into the Budget Ledger",
      "Zero network permissions (0% telemetry) and 1-tap RFC-compliant CSV and JSON local data export"
    ]
  },
  {
    title: "📖 Arabic & Urdu Vision OCR Pipeline",
    description: "Multithreaded Python OCR pipeline using Gemini Vision APIs and Poppler (pdftoppm) to transcribe 779+ pages of Arabic grammar textbooks written in Urdu Nastaliq with 100% diacritic retention.",
    slug: "arabic-urdu-vision-ocr-pipeline",
    tags: ["Python", "Gemini Vision API", "Poppler", "Multithreading", "Automation"],
    status: "Completed",
    link: "#",
    longDescription: "An automated, high-fidelity transcription CLI pipeline built in Python to digitize classical bilingual Arabic-Urdu grammar textbooks ('Aasan Arabi Grammar' — 346 pages, and 'Lisan ul Quran' — 433 pages). The system renders high-resolution page images via pdftoppm and orchestrates concurrent worker threads to transcribe complex Urdu Nastaliq ligatures, full Arabic vocalization marks (Tashkeel), and structured morphology tables into clean UTF-8 Markdown.",
    problem: "Traditional PDF text extractors (pdftotext) fail due to corrupted legacy Nastaliq font CMaps that scramble character mappings and strip Arabic diacritics, while standard OCR engines like Tesseract break on central page watermarks and multi-column conjugation grids.",
    solution: "Engineered a zero-SDK, multithreaded Python CLI tool utilizing Poppler page rendering, concurrent ThreadPoolExecutor workers, automatic model fallback, and idempotent per-page state recovery to produce a 100% diacritic-accurate digital corpus.",
    features: [
      "100% preservation of Arabic diacritics (Zabar, Zer, Pesh, Sukun, Tanween, Shaddah) and verbatim Urdu Nastaliq orthography",
      "Automatic conversion of complex grammatical paradigm grids (Gardan) and vocabulary lists into Markdown tables",
      "Concurrent worker pool (-w flag) with automatic rate-limit backoff and model fallback",
      "Idempotent page-level resume system that skips already-transcribed pages and auto-combines the master corpus"
    ]
  },
  {
    title: "🌐 Virtual Network Testing Sandbox",
    description: "Isolated multi-node virtual network environment on Ubuntu Linux using kernel network namespaces (ip netns), virtual ethernet (veth) pairs, and QEMU/KVM for safe router script testing.",
    slug: "virtual-network-testing-sandbox",
    tags: ["Linux", "ip netns", "QEMU/KVM", "GNOME Boxes", "Networking"],
    status: "Completed",
    link: "#",
    longDescription: "A sandboxed network engineering testbed constructed on Ubuntu Linux using kernel-level network namespaces (ip netns), virtual ethernet (veth) patch pairs, and QEMU/KVM hypervisor instances. Designed to simulate multi-node routing topologies and validate custom network automation and firewall scripts without risking host connectivity.",
    problem: "Executing experimental routing tables, firewall chains, or interface automation scripts directly on a primary workstation risks breaking host network interfaces and locking out active sessions.",
    solution: "Engineered isolated kernel network namespaces wired together via virtual ethernet pairs and bridged with QEMU/GNOME Boxes virtual machines, providing a deterministic, disposable multi-node routing lab.",
    features: [
      "Isolated Linux kernel network stacks (ip netns) with independent routing tables, loopback devices, and firewall chains",
      "Point-to-point virtual ethernet (veth) interconnects simulating multi-subnet router and client topologies",
      "Controlled IPv4 forwarding and NAT rules for isolated egress testing",
      "Zero host connectivity risk with instant single-command lab teardown and reset"
    ]
  },
  {
    title: "🛠️ My Scripts Collection",
    description: "A well-organized repository of automation scripts and utilities across multiple programming languages. Features structured naming conventions and organized directories for development workflow optimization.",
    slug: "my-scripts-collection",
    tags: ["Bash", "Python", "JavaScript", "C++", "Automation"],
    status: "Completed",
    link: "#",
    sourceLink: "https://github.com/arehman-dev/my-scripts",
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
  },
  {
    title: "💻 Unified Web Architecture — Engineering & Editorial Hub",
    description: "A unified, zero-framework-bloat Astro v6 static architecture hosting both the Technical E-Portfolio (/) and the Personal Digital Window (/me/) under a shared Pitch Black OLED & Frosted Glass design system.",
    slug: "portfolio-website",
    tags: ["Astro v6", "TypeScript", "CSS3 Glassmorphism", "Static SSG", "GitHub Pages"],
    status: "Completed",
    link: "https://arehman-dev.github.io",
    sourceLink: "https://github.com/arehman-dev/portfolio",
    longDescription: "Evolved across three major iterations—from a single-page vanilla HTML/CSS/JS showcase (v1), to a multi-page Astro technical portfolio paired with a separate Jekyll blog (v2), into a unified Astro v6 static platform (v3.0). The root workspace (/) serves as a high-signal engineering portfolio featuring an interactive Neofetch terminal, 50+ item Toolbelt, project architecture deep-dives, certifications, and technical articles. Simultaneously, /me/ provides a contemplative editorial space inspired by Paul Stamatiou and Dario Amodei for essays ('Perspective'), bilingual RTL Urdu Nastaliq poetry ('Ashaar'), commonplace collections, and photography ('Tasweer-Kahani').",
    problem: "Maintaining two separate static site generators (Jekyll in Ruby and Astro in Node.js) across split repositories created deployment friction, duplicated assets, and disconnected theme states between the technical portfolio and personal writings.",
    solution: "Consolidated both spaces into a single, strictly typed Astro v6 static build (50 static routes) with distinct layout shells (BaseLayout for / and PersonalLayout for /me/) that share a unified Pitch Black OLED (#000000) & Frosted White Acrylic Glass palette, synchronized localStorage theme state, and multi-mode Reading Comfort themes—while preserving v1 and v2 in zero-bloat Git tags and archive branches.",
    features: [
      "Unified Single-Repo Architecture (v3.0): 50 pre-rendered static routes across Technical Portfolio (/) and Personal Space (/me/) with instant bridge navigation",
      "Pitch Black OLED & Frosted Glass System: Synchronized Light and #000000 OLED Dark themes with anti-FOUC inline initialization and dual Emerald/Sapphire ambient glows",
      "Eye-Comfort Reader Mode Engine: Persistent 4-mode reading switcher (Default, Warm Sepia, Sepia Dark, and Soft E-Ink Contrast) across both technical and personal articles",
      "Bilingual Editorial & Visual Storytelling (/me/): Open-canvas essays, RTL Noto Nastaliq Urdu poetry typography, keyboard navigation (h/p/t/a), and a filterable fullscreen lightbox gallery ('Tasweer-Kahani')",
      "Zero-Bloat Version Archiving: Complete historical preservation of v1 (Vanilla JS) and v2 (pre-merger Astro) via annotated Git tags and archive branches with 0 KB working-tree overhead"
    ]
  },
  {
    title: "📖 Quran Study App & Comparative Tafsir Station",
    description: "A modern, desktop-first, offline-capable study station designed for comparative reading of the Holy Quran, linguistic morphology, and classical Urdu Tafasir.",
    slug: "quran-study-tafsir-reader",
    tags: ["TypeScript", "React 19", "Vite", "SQLite", "Tailwind CSS", "Offline-First"],
    status: "Completed",
    link: "#",
    longDescription: "A high-performance desktop-first Quranic study application built with React 19, TypeScript, and Vite, backed by an embedded local SQLite database running via Node.js built-in node:sqlite for zero-dependency, sub-millisecond query execution. It features a stacked comparative commentary layout that allows researchers and students of knowledge to view the original Arabic verse alongside authentic Urdu translations (Mufti Taqi Usmani) and vertically aligned classical commentaries (Tafheem-ul-Quran, Maarif-ul-Quran, Tafsir Ibn Kathir, and Tayseer-ul-Quran) with synchronized ayah stepping and zero page reloads.",
    problem: "Existing online Quran study portals are heavily reliant on active cloud APIs, suffer from sluggish UI transitions when toggling multiple classical commentaries, and rarely offer synchronized comparative side-by-side analysis across both Indo-Pak and Uthmani scripts.",
    solution: "Engineered a local-first study environment with an embedded SQLite engine holding all 114 Surahs, complete word-by-word grammatical corpora, root concordances, and pre-indexed Urdu Tafasir texts, allowing instantaneous offline cross-referencing and Tajweed color-coding.",
    features: [
      "Stacked multi-Tafsir comparative reader supporting simultaneous analysis of 4 classical Urdu commentaries",
      "Dual-script Mushaf engine toggling between 15-line Indo-Pak standard and 604-page Madani Uthmani layout",
      "Interactive Tajweed rules engine with color-coded phonetic guides (Madd, Ghunnah, Ikhfa, Qalqalah)",
      "Word-by-word interlinear grammatical corpus with root concordance mapping all 1,570 Quranic roots",
      "Zero-latency local SQLite query pipeline utilizing built-in node:sqlite with zero external C++ dependencies"
    ]
  },
  {
    title: "🌸 Blossom — Local-First Recovery & Habit Discipline Engine",
    description: "A private, 100% offline-first native Android application built in Kotlin & Jetpack Compose for habit discipline, relapse profiling, and recovery tracking with zero network permissions.",
    slug: "blossom-recovery-engine",
    tags: ["Kotlin", "Jetpack Compose", "Room SQLite", "Android", "Hilt", "Offline-First"],
    status: "Completed",
    link: "#",
    longDescription: "Blossom is a private, local-first Android application architected in 100% Kotlin with Jetpack Compose (Material Design 3) and Room Database persistence, dedicated to personal recovery, self-discipline habit tracking, and spiritual betterment. Built on the core principle of radical data ownership, the app operates with zero internet permissions, guaranteeing that all sensitive psychological conditions, triggers, journal reflections, and streak telemetry remain strictly encrypted on the physical device.",
    problem: "Most digital wellness and habit tracking applications require mandatory cloud accounts, harvest private psychological and emotional logs to third-party ad networks, and lack nuanced relapse trigger profiling.",
    solution: "Developed an entirely offline, MVVM-driven Android application utilizing Hilt dependency injection, Room SQLite transactions, background WorkManager automated JSON backups, and multi-factor condition logging with interactive risk heatmaps.",
    features: [
      "Real-time clean time counter and milestone countdown engine with trophy achievement unlocks",
      "Nuanced condition logger tracking mood ratings (1-5) and urge intensity (0-10) with contextual trigger tagging",
      "Time-of-day analytics and risk heatmaps identifying peak vulnerability windows across daily schedules",
      "Personal playbook with customizable urge-surfing distraction decks, commitment oaths, and preloaded guides",
      "Automated 24-hour JSON data backups via Android WorkManager with clipboard-based instant disaster recovery"
    ]
  },
  {
    title: "🛡️ Sovereign Proxy & Encrypted Tunnel Infrastructure (Shadowsocks-Rust & Outline)",
    description: "High-throughput sovereign encrypted proxy nodes deployed on Linux with Shadowsocks-Rust, AEAD ciphers, kernel sysctl socket tuning, and automated systemd daemons.",
    slug: "shadowsocks-rust-proxy",
    tags: ["Rust", "Linux", "Networking", "Systemd", "Cryptography", "Docker"],
    status: "Completed",
    link: "#",
    longDescription: "A sovereign, censorship-resilient proxy infrastructure built using Shadowsocks-Rust—the asynchronous, memory-safe Rust implementation of the Shadowsocks protocol. Deployed across cloud Linux servers, this project provides low-latency, tamper-resistant internet connectivity by wrapping TCP/UDP traffic in modern Authenticated Encryption with Associated Data (AEAD) ciphers. The server stack is hardened through systemd service isolation, automated crash restarts, and kernel-level socket optimizations.",
    problem: "Standard VPN protocols (OpenVPN, WireGuard) produce recognizable packet signatures vulnerable to active probing and Deep Packet Inspection (DPI) throttling on restrictive networks, leading to severe packet drops and degraded latency.",
    solution: "Provisioned and tuned high-performance Shadowsocks-Rust server instances utilizing ChaCha20-IETF-Poly1305 and AES-256-GCM ciphers, enabled BBR congestion control, increased socket buffer limits, and configured Outline management APIs for secure key rotation.",
    features: [
      "Asynchronous non-blocking network I/O powered by Tokio and Mio, achieving sub-millisecond cryptographic overhead",
      "Hardened Linux systemd unit configurations with Sandboxed userspace execution, ProtectSystem=strict, and auto-restart policies",
      "Kernel TCP socket tuning including TCP BBR congestion control, TCP Fast Open (TFO), and optimized window sizes",
      "Multi-client access key provisioning, bandwidth quota tracking, and automated port allocation via REST APIs",
      "Full interoperability across cross-platform Outline Clients on Android, Linux, macOS, and Windows"
    ]
  },
];

