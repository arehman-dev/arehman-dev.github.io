export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  slug: string;
  status: 'Active' | 'In Progress' | 'Completed' | 'Upcoming';
  link?: string;
  description: string;
  overview: string;
  skillsAcquired: string[];
  credentialId?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Google IT Automation with Python Professional Certificate",
    issuer: "Google",
    date: "In Progress (Target: 2026)",
    slug: "google-it-automation",
    status: "In Progress",
    description: "Multi-course program validating skills in Python programming, version control, automated server config, and cloud orchestration.",
    overview: "This professional certificate program by Google focuses on utilizing Python to automate common systems administration workflows. It covers software testing, version control using Git and GitHub, configuration management, and troubleshooting complex environment errors.",
    skillsAcquired: [
      "Python scripts formatting and systems integration",
      "Git branch creation, merging, and remote hosting",
      "Automating operational systems with Python libraries",
      "Troubleshooting and debugging runtime environment flaws",
      "Automated testing scripts and code assertions"
    ]
  },
  {
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "In Progress (Target: 2026)",
    slug: "scientific-computing-python",
    status: "In Progress",
    description: "Validates ability to design data-driven applications, write clean Python algorithms, and process datasets.",
    overview: "This credentials validates deep programming logic capability inside the Python runtime, designing mathematical structures, parsing complex file formats, and utilizing data tools to solve numeric problems.",
    skillsAcquired: [
      "Advanced mathematical algorithms styling in Python",
      "Regular expressions (Regex) string processing",
      "File parsing and multi-format data storage operations",
      "Algorithmic execution speed optimization",
      "Data structures design (trees, heaps, custom classes)"
    ]
  },
  {
    title: "Linux Professional Institute Certification (LPIC-1)",
    issuer: "Linux Professional Institute",
    date: "Completed (2025)",
    slug: "lpic-1",
    status: "Completed",
    description: "Validates the ability to perform maintenance tasks on the command line, install and configure a computer running Linux and configure basic networking.",
    overview: "LPIC-1 is the first certification in the multi-level Linux professional certification program of the Linux Professional Institute. The LPIC-1 validates a candidate's ability to perform maintenance tasks on the command line, install and configure a computer running Linux and configure basic networking.",
    skillsAcquired: [
      "System Architecture & Package Management",
      "GNU and Unix Commands proficiency",
      "Linux Filesystems and Filesystem Hierarchy Standard",
      "Shell Scripting basics and automation management",
      "User Interfaces, Desktops, and essential system services"
    ],
    credentialId: "LPI-1049-2025-01"
  },
  {
    title: "Python Institute Certified Associate in Python Programming",
    issuer: "Python Institute",
    date: "Completed (2024)",
    slug: "python-associate",
    status: "Completed",
    description: "Covers general computer programming concepts, Python syntax, execution flow, data aggregates, and object-oriented programming.",
    overview: "This certification validates fundamental Python developer skills. It indicates that the holder is fully familiar with Python language basics, general computer programming concepts, data collections, control structures, object-oriented concepts, and basic script design methodologies.",
    skillsAcquired: [
      "Python data types, operators, and basic logic controls",
      "Complex data collections: Tuples, Lists, Dictionaries",
      "Function design, scoping, and module imports",
      "Object-Oriented Programming (OOP) architectures in Python",
      "Exceptions handling, file input/output workflows"
    ],
    credentialId: "PY-2024-8832"
  }
];
