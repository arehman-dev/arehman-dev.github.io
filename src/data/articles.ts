export interface Article {
  title: string;
  excerpt: string;
  date: string;
  publishDate: string; // Standard format for sorting: YYYY-MM-DD
  readTime: string;
  coverImage: string;
  category: string;
  link?: string; // Optional external link (e.g., dev.to)
  slug: string;
  content: string; // Full markdown/HTML content for local hosting
}

export const articles: Article[] = [
  {
    title: "Hardening Linux Systems: A Practical Guide for SysAdmins",
    excerpt: "Learn the essential practices for securing Debian and Ubuntu servers, from configuring firewalld and SSH to auditing user permissions.",
    date: "June 15, 2026",
    publishDate: "2026-06-15",
    readTime: "8 min read",
    coverImage: "/assets/images/articles/hardening-linux.jpg",
    category: "Security",
    slug: "hardening-linux-systems",
    content: `
      <p>Securing a Linux server is one of the primary duties of any systems engineer. While standard installations of distributions like Debian or Ubuntu come with sensible defaults, they are far from fully hardened for production environments.</p>
      
      <h3>1. SSH Configuration Hardening</h3>
      <p>The SSH daemon is the most common entry point for server access. By default, it allows root logins and password authentication. Edit <code>/etc/ssh/sshd_config</code> to enforce keys:</p>
      <pre><code>PermitRootLogin no
PasswordAuthentication no
X11Forwarding no
MaxAuthTries 3</code></pre>
      <p>Restart the service with <code>systemctl restart sshd</code> to apply changes.</p>

      <h3>2. Firewall Management (firewalld)</h3>
      <p>Ensure only necessary ports are exposed. In Debian/Ubuntu, verify with firewalld:</p>
      <pre><code>firewall-cmd --get-active-zones
firewall-cmd --zone=public --add-service=ssh --permanent
firewall-cmd --zone=public --remove-service=cockpit --permanent
firewall-cmd --reload</code></pre>

      <h3>3. User Auditing and Sudo Restraints</h3>
      <p>Regularly check members of the wheel/sudo group. Avoid running tasks as root unless absolutely required. Enforce user accountability by reviewing command history and auth logs in <code>/var/log/secure</code>.</p>
    `
  },
  {
    title: "Mastering Bash Scripting for Automated Backups",
    excerpt: "A deep dive into writing bulletproof Bash automation scripts with robust error handling, exit codes, and Discord/Slack notifications.",
    date: "May 28, 2026",
    publishDate: "2026-05-28",
    readTime: "6 min read",
    coverImage: "/assets/images/articles/bash-scripting.jpg",
    category: "Automation",
    slug: "mastering-bash-scripting-backups",
    content: `
      <p>Automation is the cornerstone of efficient system administration. Writing Bash scripts is the easiest way to orchestrate tasks, but writing <em>reliable</em> scripts requires structured error boundaries.</p>
      
      <h3>1. Use Exit-on-Error Flags</h3>
      <p>Start your script with sensible flags to ensure it halts immediately when a command fails:</p>
      <pre><code>#!/bin/bash
set -euo pipefail</code></pre>
      <ul>
        <li><code>-e</code>: Exit immediately if a command exits with a non-zero status.</li>
        <li><code>-u</code>: Treat unset variables as an error.</li>
        <li><code>-o pipefail</code>: The return value of a pipeline is the status of the last command to exit with a non-zero status.</li>
      </ul>

      <h3>2. Safe Backup Routines</h3>
      <p>Ensure backup directories exist and handle permission restrictions gracefully. Compress assets using tar with timestamp files for easy retrieval.</p>
    `
  },
  {
    title: "Getting Started with Containers: Docker vs Podman on Linux",
    excerpt: "Analyzing the architectural differences, security properties (rootless containers), and performance of Docker and Podman.",
    date: "April 10, 2026",
    publishDate: "2026-04-10",
    readTime: "5 min read",
    coverImage: "/assets/images/articles/docker-podman.jpg",
    category: "Containers",
    slug: "docker-vs-podman-linux",
    content: `
      <p>Containerization has revolutionized software delivery. While Docker is the pioneer, modern Linux distributions like Debian and Ubuntu support both Docker and Podman natively. Let's analyze their main differences.</p>
      
      <h3>1. Daemonless Architecture</h3>
      <p>Docker runs on a central daemon (the dockerd process), meaning if the daemon fails, all container nodes fail. Podman is daemonless, creating individual processes directly for each container instance.</p>

      <h3>2. Rootless Containers</h3>
      <p>Podman was designed from the ground up to allow running containers without root permissions, which minimizes the attack surface. Docker has introduced rootless mode, but Podman integrates it seamlessly with the host user mapping (subuid and subgid configurations).</p>
    `
  },
  {
    title: "Building Scalable REST APIs with FastAPI in Python",
    excerpt: "FastAPI is rapidly becoming the backend framework of choice for Python developers. Discover how to leverage type hinting, async paths, and automatic docs.",
    date: "March 18, 2026",
    publishDate: "2026-03-18",
    readTime: "7 min read",
    coverImage: "/assets/images/articles/fastapi-python.jpg",
    category: "Python",
    slug: "fastapi-python-rest-apis",
    content: `
      <p>Python offers multiple frameworks for building web endpoints. FastAPI is a modern, fast framework designed for building APIs with Python 3.8+ using standard type hints.</p>
      
      <h3>1. Async Execution Support</h3>
      <p>By defining paths with <code>async def</code>, FastAPI integrates with Python's asyncio module, enabling rapid parallel requests handling.</p>

      <h3>2. Automatic Swagger Documentation</h3>
      <p>FastAPI uses Pydantic schemas to validate requests. By declaring schemas, it generates interactive API documentation out of the box at <code>/docs</code>.</p>
    `
  },
  {
    title: "Infrastructure as Code (IaC): Automating Deployments with Ansible",
    excerpt: "Ditch manual terminal updates. Learn how to write Ansible playbooks to provision package stacks, configure config files, and standardise deployments.",
    date: "February 22, 2026",
    publishDate: "2026-02-22",
    readTime: "9 min read",
    coverImage: "/assets/images/articles/ansible-iac.jpg",
    category: "DevOps",
    slug: "ansible-iac-deployments",
    content: `
      <p>Ansible is an agentless automation engine that allows provisioning software, configuring settings, and managing application nodes via SSH connections.</p>
      
      <h3>1. Agentless Simplicity</h3>
      <p>Ansible doesn't require installing any background agent daemon on client servers. It only needs Python and an SSH connection to apply configuration plays.</p>

      <h3>2. Idempotency</h3>
      <p>Ansible modules ensure tasks are idempotent—running a playbook multiple times will check the server state and only perform edits if changes are needed, preventing unwanted resets.</p>
    `
  }
];
