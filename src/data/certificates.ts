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
  duration?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  technologies?: string[];
}

export const certificates: Certificate[] = [
  {
    title: "Google IT Automation with Python Specialization",
    issuer: "Coursera (Google)",
    date: "In Progress (Target: 2026)",
    slug: "google-it-automation",
    status: "In Progress",
    description: "A professional-grade track verifying practical Python application for automated systems administration, Git version control workflow, mock unit testing, and scalable IT infrastructure provisioning.",
    overview: "Designed by Google, this program teaches how to write automated scripts to solve real-world system management challenges. It covers directory manipulations, regular expressions for data mining logs, automated testing using standard unittest and mock suites, source control tracking with Git, remote GitHub collaboration models, crash diagnostics, profiling execution times, and automated configuration management using Puppet. The specialization concludes with a comprehensive capstone project that builds a real-world Python reporting utility interacting with local system resources.",
    skillsAcquired: [
      "Git version control, branching, and remote hosting",
      "Configuration management automation using scripts",
      "Testing frameworks assertions and mock setups",
      "Log parsers development and monitoring processes"
    ],
    duration: "4-6 Months",
    difficulty: "Intermediate",
    technologies: ["Python", "Git", "Puppet", "Unit Testing"]
  },
  {
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "In Progress (Target: 2026)",
    slug: "scientific-computing-python",
    status: "In Progress",
    description: "A project-driven curriculum verifying proficiency in numerical algorithms, execution profiling, regular expressions, complex data structures, and mathematical modeling in pure Python.",
    overview: "This freeCodeCamp track verifies advanced programmatic logic for mathematical and computational tasks. The specialization requires completing multiple backend projects including arithmetic calculators, custom time calculators, budget tracking applications, polygon area estimators, and a probability calculator simulation. It places strict emphasis on computational efficiency, recursion limits, object hierarchies, regular expression pattern matching, and building algorithm logic without external libraries to ensure deep foundational capabilities.",
    skillsAcquired: [
      "Mathematical algorithms designs and code styling",
      "Regular expressions (Regex) data mining patterns",
      "Execution time profiling and speed optimization",
      "Aggregated structures (trees, custom list heaps)"
    ],
    duration: "1-3 Months",
    difficulty: "Intermediate",
    technologies: ["Python", "Algorithms", "RegEx"]
  },
  {
    title: "Machine Learning with Python",
    issuer: "freeCodeCamp",
    date: "In Progress (Target: 2026)",
    slug: "machine-learning-python",
    status: "In Progress",
    description: "An in-depth introduction to supervised/unsupervised machine learning algorithms, deep neural network layouts, regression analysis, classification trees, and model training using TensorFlow.",
    overview: "This certification validates backend machine learning skills using industry-standard libraries. It teaches data cleanup, pandas dataframe operations, numpy vector operations, linear/logistic regression modeling, support vector machines (SVM), K-Nearest Neighbors, decision trees, and custom deep learning architectures built with TensorFlow and Keras. Projects include building predictions for health costs, SMS text classifiers, book recommendation systems, and cat/dog image classifiers, establishing a robust foundation in training pipelines.",
    skillsAcquired: [
      "TensorFlow model declarations and calculations",
      "Linear regression analysis and plotting configurations",
      "Supervised vs unsupervised models selection criteria",
      "Data preprocessing, cleanup, and features selection"
    ],
    duration: "1-3 Months",
    difficulty: "Advanced",
    technologies: ["Python", "TensorFlow", "Pandas", "NumPy"]
  },
  {
    title: "Python for Everybody (Py4E) Specialization",
    issuer: "Coursera (University of Michigan)",
    date: "In Progress (Target: 2026)",
    slug: "python-for-everybody-py4e",
    status: "In Progress",
    description: "A multi-course specialization covering core computational logic, structured collection data structures, network API utilization, XML/JSON parsing, web scraping, and relational database systems using SQLite.",
    overview: "Led by Dr. Charles Severance, this specialization offers a complete journey into pythonic software design. It begins with procedural coding structures and functions, progresses through handling dictionary/list structures, and details network communication using sockets and urllib. It teaches students how to parse web data via beautifulsoup4, scrape XML/JSON formats, interface with REST Web APIs, and design database structures from scratch. The curriculum includes designing multi-table schemas, writing SQL joins, and optimizing database indices for large-scale data retrieval.",
    skillsAcquired: [
      "Python data aggregates, variables, and logic controls",
      "Web scraping and API parsed JSON responses",
      "Relational databases integration via SQLite",
      "Object-oriented programming constructs in Python"
    ],
    duration: "4-6 Months",
    difficulty: "Beginner",
    technologies: ["Python", "SQLite", "SQL", "JSON/XML"]
  },
  {
    title: "Introduction to C++ Specialization",
    issuer: "Coursera (Microsoft)",
    date: "In Progress (Target: 2026)",
    slug: "microsoft-cpp-specialization",
    status: "In Progress",
    description: "A rigorous specialization focused on modern C++ structures, memory allocation mechanics, object-oriented concepts, template programming, standard template library (STL) vectors, and compile-time optimization.",
    overview: "Created by Microsoft developers to teach performant systems programming. The curriculum is divided into multiple course components covering basic syntax control flow, pointer arithmetic, manual heap vs stack memory allocation, custom class structure definitions, abstract classes and polymorphism, inheritance designs, standard algorithms, file output streams, exception handling, and optimization methodologies. Practical assignments require building custom memory management schemes and debugging memory leaks using toolchains like GDB and Valgrind.",
    skillsAcquired: [
      "C++ programming syntax and loops control",
      "Object-Oriented Programming (OOP) architectures",
      "Memory management, references, and pointers",
      "Systems optimization and template structures"
    ],
    duration: "1-3 Months",
    difficulty: "Intermediate",
    technologies: ["C++", "OOP", "GDB", "Memory Management"]
  },
  {
    title: "Linux Masterclass",
    issuer: "Udemy (Imran Afzal)",
    date: "In Progress (Target: 2026)",
    slug: "linux-masterclass-afzal",
    status: "In Progress",
    description: "A rigorous, hands-on program covering directory hierarchies, file operations, permissions administration, network setup, logging configuration, storage profiling, and automating operations with advanced bash scripts.",
    overview: "This masterclass delivers a practical, deep-dive curriculum on Enterprise Linux Administration. It is designed to take system engineers from foundational commands to architecting and maintaining production-grade server environments. The training focuses heavily on CentOS/RedHat and Debian systems, covering storage partitioning (LVM), access control lists (ACLs), user security policies, process scheduling (cron/at), systemd service unit customization, kernel log management, and advanced network diagnostic operations using tools like netstat, ss, and tcpdump.",
    skillsAcquired: [
      "Linux terminal command operations",
      "User, group, and permissions management",
      "Shell scripting for task automation",
      "Network debugging and core diagnostic tools"
    ],
    duration: "40+ Hours",
    difficulty: "Advanced",
    technologies: ["Linux", "Bash", "systemd", "TCP/IP"]
  },
  {
    title: "Google Cybersecurity Professional Specialization",
    issuer: "Coursera (Google)",
    date: "In Progress (Target: 2026)",
    slug: "google-cybersecurity-specialization",
    status: "In Progress",
    description: "A comprehensive defense track covering security operations center (SOC) fundamentals, Linux access controls, SQL authentication audits, Python socket scripts, and SIEM security dashboard logging.",
    overview: "This specialization covers the essential practices required to protect digital assets. The curriculum includes analyzing security risks, understanding modern network protocols (TCP/IP, DNS, SSL/TLS), configuring firewall rules, auditing server authentication logs using SQL query filters, scripting automated security scanning utilities in Python, and performing incident detection using Security Information and Event Management (SIEM) tools like Chronicle and Splunk. It prepares professionals to identify threat vectors, mitigate risks, and conduct post-incident forensics.",
    skillsAcquired: [
      "Linux environment security configurations",
      "Python scripts for networks packet scraping",
      "SQL data queries for systems authentication audits",
      "SIEM logs dashboard scanning (Splunk, Chronicle)"
    ],
    duration: "4-6 Months",
    difficulty: "Intermediate",
    technologies: ["SIEM", "Splunk", "Linux Security", "SQL Auditing"]
  }
];
