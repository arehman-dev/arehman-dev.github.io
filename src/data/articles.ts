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
    title: "Isolating Linux Network Topologies with ip netns, veth Pairs, and QEMU",
    excerpt: "How to construct a 100% sandboxed multi-node virtual network environment on Ubuntu Linux using kernel network namespaces and virtual ethernet pairs to test routing scripts safely.",
    date: "October 12, 2026",
    publishDate: "2026-10-12",
    readTime: "10 min read",
    coverImage: "/assets/images/articles/linux-netns.jpg",
    category: "Networking",
    slug: "isolating-linux-network-topologies-ip-netns",
    content: `
      <p>Testing custom routing tables, firewall rules, or DHCP/DNS automation scripts directly on a primary workstation interface is a recipe for locked-out sessions and broken host connectivity. While full virtual machines in <strong>QEMU/KVM</strong> or <strong>GNOME Boxes</strong> provide hardware-level isolation, Linux kernel <strong>network namespaces (<code>ip netns</code>)</strong> combined with <strong>virtual ethernet (<code>veth</code>)</strong> pairs allow you to spin up entire multi-node network topologies in milliseconds with near-zero memory overhead.</p>

      <h3>1. Understanding Kernel Network Namespaces</h3>
      <p>A network namespace is an isolated logical copy of the Linux networking stack—complete with its own network interfaces, loopback device, routing tables, and <code>iptables</code>/<code>nftables</code> chains. Processes launched inside a namespace can only see and interact with the interfaces assigned to that namespace.</p>
      <pre><code># Create two isolated network namespaces representing separate nodes
sudo ip netns add router-ns
sudo ip netns add client-ns

# Verify active namespaces
ip netns list</code></pre>

      <h3>2. Wiring Nodes Together with Virtual Ethernet (veth) Pairs</h3>
      <p>Think of a <code>veth</code> pair as a virtual patch cable: packets entering one end immediately exit the other. By placing one end in <code>router-ns</code> and the other in <code>client-ns</code>, we establish a physical-like point-to-point link between the two isolated stacks.</p>
      <pre><code># Create the virtual ethernet cable
sudo ip link add veth-router type veth peer name veth-client

# Plug each end into its respective namespace
sudo ip link set veth-router netns router-ns
sudo ip link set veth-client netns client-ns</code></pre>

      <h3>3. Assigning Subnets and Bringing Interfaces Up</h3>
      <p>By default, newly created namespace interfaces—including <code>lo</code> (loopback)—are down. We configure IP addresses and bring the links up using <code>ip netns exec</code>:</p>
      <pre><code># Configure router-ns interface (10.200.1.1/24)
sudo ip netns exec router-ns ip link set lo up
sudo ip netns exec router-ns ip addr add 10.200.1.1/24 dev veth-router
sudo ip netns exec router-ns ip link set veth-router up

# Configure client-ns interface (10.200.1.2/24) and default gateway
sudo ip netns exec client-ns ip link set lo up
sudo ip netns exec client-ns ip addr add 10.200.1.2/24 dev veth-client
sudo ip netns exec client-ns ip link set veth-client up
sudo ip netns exec client-ns ip route add default via 10.200.1.1</code></pre>

      <h3>4. Enabling IP Forwarding and NAT for Controlled Egress</h3>
      <p>If your sandbox scripts need controlled internet access through the router namespace without exposing the host routing table, enable kernel IPv4 forwarding strictly inside <code>router-ns</code>:</p>
      <pre><code>sudo ip netns exec router-ns sysctl -w net.ipv4.ip_forward=1
sudo ip netns exec client-ns ping -c 3 10.200.1.1</code></pre>

      <h3>5. Combining QEMU/GNOME Boxes with Namespace Bridges</h3>
      <p>For full-stack router firmware tests, I attach a QEMU guest VM to a Linux bridge connected to the namespace veth trunk. This hybrid setup provides a 100% deterministic testing harness—if a script misconfigures a route or flushes a chain, tearing down the entire lab takes a single command (<code>sudo ip netns delete client-ns</code>) while the host workstation stays completely untouched.</p>
    `
  },
  {
    title: "Building a Multimodal OCR Pipeline in Python for Arabic & Urdu Nastaliq Texts",
    excerpt: "Why traditional PDF text extractors and Tesseract fail on Nastaliq ligatures and Arabic vocalization (Tashkeel), and how to engineer a multithreaded Vision LLM pipeline in Python.",
    date: "September 28, 2026",
    publishDate: "2026-09-28",
    readTime: "11 min read",
    coverImage: "/assets/images/articles/urdu-arabic-ocr.jpg",
    category: "Python",
    slug: "multimodal-ocr-pipeline-python-arabic-urdu",
    content: `
      <p>Digitizing classical bilingual textbooks—specifically Arabic grammar works written in Urdu such as <em>Aasan Arabi Grammar</em> (346 pages) and <em>Lisan ul Quran</em> (433 pages)—presents a notorious engineering bottleneck. Standard tools like <code>pdftotext</code> and traditional optical character recognition engines like Tesseract routinely fail on these documents.</p>

      <h3>1. Why Traditional Extraction Fails</h3>
      <ul>
        <li><strong>Corrupted Font CMaps:</strong> Legacy Urdu typesetting software frequently embeds non-standard character maps for Nastaliq fonts (such as <em>Jameel Noori Nastaliq</em> or <em>Alvi</em>). Direct PDF text extraction scrambles code points (turning <code>د</code> into <code>ز</code>) and strips essential Arabic diacritics (<em>Zabar, Zer, Pesh, Sukun, Shaddah</em>).</li>
        <li><strong>Complex Ligatures &amp; Watermarks:</strong> In scanned PDFs with heavy central watermarks and multi-column conjugation tables (<em>Gardan</em>), traditional OCR loses reading order and merges Arabic morphology tables into unreadable lines.</li>
      </ul>

      <h3>2. Architecture of the Vision OCR Pipeline</h3>
      <p>To solve this without installing multi-gigabyte local PyTorch dependencies, I architected a lightweight, zero-SDK Python CLI pipeline using <code>poppler-utils</code> (<code>pdftoppm</code>), standard <code>requests</code>, and concurrent worker pools backed by multimodal Vision models:</p>
      <pre><code>#!/usr/bin/env python3
import base64
import subprocess
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

def render_pdf_page(pdf_path: Path, page_num: int, out_dir: Path) -> Path:
    prefix = out_dir / f"page_{page_num:03d}"
    cmd = [
        "pdftoppm", "-png", "-r", "300",
        "-f", str(page_num), "-l", str(page_num),
        str(pdf_path), str(prefix)
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    return next(out_dir.glob(f"page_{page_num:03d}*.png"))</code></pre>

      <h3>3. Enforcing Diacritic Fidelity &amp; Markdown Table Layout</h3>
      <p>The system prompt instructs the vision endpoint to preserve 100% of Arabic vocalization marks (<em>Tashkeel</em>), transcribe Urdu Nastaliq verbatim without modernizing spelling, ignore decorative page borders/watermarks, and convert grammatical paradigm grids directly into GitHub-Flavored Markdown tables.</p>

      <h3>4. Idempotent Resume &amp; Fault Tolerance</h3>
      <p>When processing 700+ pages over network APIs, rate limits (HTTP 429) and transient timeouts are inevitable. The pipeline writes each completed page immediately to <code>output/&lt;book&gt;/pages/page_NNN.txt</code>:</p>
      <pre><code>def process_book(pages: list[int], max_workers: int = 3):
    pending = [p for p in pages if not (PAGES_DIR / f"{p:03d}.txt").exists()]
    with ThreadPoolExecutor(max_workers=max_workers) as pool:
        futures = {pool.submit(transcribe_page_with_retry, p): p for p in pending}
        for future in as_completed(futures):
            page_no = futures[future]
            text = future.result()
            (PAGES_DIR / f"{page_no:03d}.txt").write_text(text, encoding="utf-8")</code></pre>
      <p>If interrupted at page 240, re-running the command automatically skips pages 001–240, finishes the remaining pages, and concatenates all individual page transcripts into a single clean UTF-8 master corpus.</p>
    `
  },
  {
    title: "Forensic Malware Eradication on External NTFS Drives Using Linux CLI",
    excerpt: "A step-by-step field guide to disinfecting external NTFS storage infected with folder-replicating Windows worms using ntfs-3g and POSIX command-line tools.",
    date: "August 24, 2026",
    publishDate: "2026-08-24",
    readTime: "8 min read",
    coverImage: "/assets/images/articles/ntfs-malware-cleanup.jpg",
    category: "Security",
    slug: "forensic-malware-eradication-ntfs-linux-cli",
    content: `
      <p>External hard drives shared across Windows machines frequently fall victim to folder-replicating worms. These worms hide every legitimate top-level directory by setting Windows <code>System</code> and <code>Hidden</code> DOS attributes, then place malicious <code>.exe</code> or <code>.scr</code> binaries with identical folder names and icons in their place to trick users into executing the payload.</p>
      <p>Attempting to clean such a drive on Windows risks triggering the worm itself or having commercial antivirus suites quarantine and delete the hidden directory pointers. Linux provides an immune, surgical environment to disinfect the filesystem without data loss.</p>

      <h3>1. Controlled Mounting with ntfs-3g</h3>
      <p>Because Windows binaries (PE executables) cannot natively execute on a Linux kernel without Wine, plugging the infected drive into an Ubuntu workstation immediately neutralizes auto-run vectors. We mount the partition explicitly with <code>noexec</code>:</p>
      <pre><code>sudo mkdir -p /mnt/recovery
sudo mount -t ntfs-3g -o rw,noexec,nosuid,nodev /dev/sdb1 /mnt/recovery</code></pre>

      <h3>2. Auditing the Infection Footprint</h3>
      <p>From the Linux terminal, hidden Windows directories are immediately visible alongside their spoofed executable twins. We first inspect for suspicious executables, <code>Autorun.inf</code> files, and anomalous directory structures:</p>
      <pre><code># Locate all Windows executables and screensaver payloads in top-level directories
find /mnt/recovery -maxdepth 2 -type f \( -iname "*.exe" -o -iname "*.scr" -o -iname "*.vbs" -o -iname "autorun.inf" \) -ls</code></pre>

      <h3>3. Purging Replicated Payloads</h3>
      <p>When a worm duplicates its exact byte-size binary across dozens of subdirectories, we can fingerprint the malicious payload by exact size or SHA-256 hash before purging:</p>
      <pre><code># Compute SHA-256 of the spoofed executable
sha256sum "/mnt/recovery/Documents.exe"

# Remove all matching worm executables and autorun triggers across the drive
find /mnt/recovery -maxdepth 2 -type f -iname "*.exe" -size 512k -delete
find /mnt/recovery -iname "autorun.inf" -delete</code></pre>

      <h3>4. Stripping Stubborn DOS System &amp; Hidden Attributes</h3>
      <p>Even after deleting the malware, plugging the drive back into Windows will still show an "empty" drive if the DOS <code>+s +h</code> (System + Hidden) flags remain set on the real folders. Under Linux, we strip those extended NTFS attributes directly using <code>fatattr</code> or <code>setfattr</code>:</p>
      <pre><code># Clear DOS system/hidden bitmasks on all legitimate directories
find /mnt/recovery -maxdepth 1 -type d -exec setfattr -h -v 0x00000000 -n system.ntfs_attrib_be {} +
sync
sudo umount /mnt/recovery</code></pre>
      <p>This methodical CLI workflow recovers 100% of user files intact without relying on third-party antivirus software.</p>
    `
  },
  {
    title: "Persistent Web-Accessible Terminals with ttyd, systemd, and Custom Xterm.js Palettes",
    excerpt: "Engineering a low-fatigue browser terminal daemon on Ubuntu Linux using ttyd, systemd user services, Solarized-inspired light themes, and btop telemetry.",
    date: "August 09, 2026",
    publishDate: "2026-08-09",
    readTime: "7 min read",
    coverImage: "/assets/images/articles/ttyd-systemd-terminal.jpg",
    category: "Linux",
    slug: "persistent-web-terminals-ttyd-systemd-xterm",
    content: `
      <p>During long coding and system administration sessions, terminal ergonomics and session persistence matter enormously. By combining <strong><code>ttyd</code></strong> (a lightweight C daemon built on libuv and Xterm.js) with <strong><code>systemd</code></strong> and <strong><code>tmux</code></strong>, you can expose a blazing-fast, customized terminal interface locally or over an encrypted VPN tunnel.</p>

      <h3>1. Why Low-Fatigue Light Palettes Work for Daytime Engineering</h3>
      <p>While pure black OLED themes excel in dim rooms, high-ambient daytime workspaces often benefit from warm, paper-like contrast to prevent halation (astigmatic blur). Inspired by the <em>Ptyxis</em> Solarized/Cream palette, pairing a soft warm-ivory background (<code>#fafbf5</code>) with deep slate-blue typography (<code>#2a4b5e</code>) eliminates glare while keeping syntax tokens crisp.</p>

      <h3>2. Passing Custom Xterm.js Theme Options to ttyd</h3>
      <p><code>ttyd</code> accepts client-side Xterm.js configuration flags via <code>-t</code>, allowing you to bake typography, cursor style, and full ANSI color tables directly into the daemon startup:</p>
      <pre><code>ttyd -p 7681 -i 127.0.0.1 \
  -t fontSize=15 \
  -t fontFamily="'JetBrains Mono', monospace" \
  -t 'theme={"background":"#fafbf5","foreground":"#2a4b5e","cursor":"#01ac6a","selectionBackground":"#d8e2dc"}' \
  tmux new-session -A -s workstation</code></pre>

      <h3>3. Creating a Hardened systemd User Service</h3>
      <p>To ensure the web terminal starts automatically on login and restarts cleanly if terminated, define a user-level unit at <code>~/.config/systemd/user/ttyd-workstation.service</code>:</p>
      <pre><code>[Unit]
Description=Persistent Ergonomic Web Terminal (ttyd + tmux)
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/ttyd -p 7681 -i 127.0.0.1 -t fontSize=15 -t 'theme={"background":"#fafbf5","foreground":"#2a4b5e","cursor":"#01ac6a"}' /usr/bin/tmux new-session -A -s main
Restart=on-failure
RestartSec=3

[Install]
WantedBy=default.target</code></pre>
      <pre><code>systemctl --user daemon-reload
systemctl --user enable --now ttyd-workstation.service</code></pre>

      <h3>4. Integrating Real-Time Telemetry with btop</h3>
      <p>Binding a dedicated <code>tmux</code> window or GNOME top-bar extension to launch <code>btop</code> gives instant visibility into per-core CPU frequency, memory pressure, and disk I/O across <code>/mnt/personal</code>, <code>/mnt/office</code>, and <code>/mnt/backup</code> partitions.</p>
    `
  },
  {
    title: "Architecting Offline-First Android Apps with Kotlin, Jetpack Compose, and Room",
    excerpt: "Design principles from building 100% local-first Android utilities with zero telemetry, Room SQLite transactions, exact AlarmManager scheduling, and WorkManager JSON backups.",
    date: "July 19, 2026",
    publishDate: "2026-07-19",
    readTime: "9 min read",
    coverImage: "/assets/images/articles/kotlin-offline-android.jpg",
    category: "Android",
    slug: "architecting-offline-first-android-kotlin-compose-room",
    content: `
      <p>Most modern mobile utility apps—habit trackers, expense ledgers, and reminder engines—require mandatory cloud accounts, bundle invasive analytics SDKs, and drain battery with background network polling. While building my local-first Android projects (<strong>The Blue Orbit</strong> and <strong>Blossom</strong>), I set a strict architectural constraint: <strong>0% network permissions, 100% local data ownership, and sub-frame UI responsiveness</strong>.</p>

      <h3>1. Enforcing Zero-Network Sovereignty in AndroidManifest.xml</h3>
      <p>True privacy is verifiable at the OS permission layer. By omitting <code>android.permission.INTERNET</code> entirely from <code>AndroidManifest.xml</code>, the Android sandbox guarantees that no byte of personal financial or journal data can ever leave the device over a socket.</p>

      <h3>2. Unidirectional Data Flow with Kotlin Coroutines &amp; Room</h3>
      <p>Using <strong>Room (SQLite)</strong> as the single source of truth, Data Access Objects (DAOs) expose reactive <code>Flow&lt;List&lt;T&gt;&gt;</code> streams directly to the ViewModel layer, which transforms them into immutable UI state via <code>stateIn</code>:</p>
      <pre><code>@Dao
interface TransactionDao {
    @Query("SELECT * FROM transactions ORDER BY timestamp DESC")
    fun observeAll(): Flow&lt;List&lt;TransactionEntity&gt;&gt;

    @Transaction
    suspend fun insertWithAssetMirror(tx: TransactionEntity, log: AssetLogEntity)
}</code></pre>
      <p>Wrapping cross-feature writes—such as logging a vehicle maintenance entry and automatically mirroring its cost into the expense ledger—inside a single <code>@Transaction</code> guarantees atomic consistency.</p>

      <h3>3. Surviving Doze Mode &amp; Reboots for Time-Critical Reminders</h3>
      <p>Standard background jobs get deferred by Android's Doze mode. For exact deadline reminders, combining <code>AlarmManager.setExactAndAllowWhileIdle()</code> with a <code>BOOT_COMPLETED</code> broadcast receiver ensures alarms fire to the second and automatically re-register whenever the phone restarts.</p>

      <h3>4. Portable JSON &amp; CSV Backups via WorkManager</h3>
      <p>Local-first should never mean data lock-in. Using <code>kotlinx.serialization</code> and Android's <code>WorkManager</code>, the database exports a human-readable JSON snapshot every 24 hours to local storage—ready to be synced via <strong>MEGAsync</strong> or analyzed on a Linux workstation using Python and <code>pandas</code>.</p>
    `
  },
  {
    title: "Self-Hosting Sovereign VPN Infrastructure on Linux with Docker and Outline",
    excerpt: "Replacing commercial VPN dependencies by deploying containerized Outline (Shadowsocks) and OpenVPN servers on Linux with minimal attack surface.",
    date: "July 02, 2026",
    publishDate: "2026-07-02",
    readTime: "8 min read",
    coverImage: "/assets/images/articles/outline-vpn-docker.jpg",
    category: "Infrastructure",
    slug: "self-hosting-vpn-infrastructure-linux-docker-outline",
    content: `
      <p>Commercial VPN providers ask you to trade one untrusted intermediary (your ISP) for another (the VPN vendor's logging policy). Self-hosting your own encrypted tunnel on a Linux host using <strong>Docker</strong> and <strong>Outline VPN (Shadowsocks)</strong> or <strong>OpenVPN</strong> puts cryptographic key management and routing control entirely in your hands.</p>

      <h3>1. Why Outline / Shadowsocks Excels in Restricted Networks</h3>
      <p>While traditional OpenVPN and WireGuard handshakes have distinct packet signatures that deep packet inspection (DPI) firewalls can easily fingerprint and throttle, Outline uses AEAD-encrypted <strong>Shadowsocks</strong> streams (<code>chacha20-ietf-poly1305</code>) that resemble randomized traffic and operate seamlessly over both TCP and UDP.</p>

      <h3>2. Containerized Deployment with Docker Engine</h3>
      <p>Running the Shadowbox server inside an isolated Docker container keeps the host Linux filesystem clean and simplifies certificate and port lifecycle management:</p>
      <pre><code># Verify Docker Engine daemon status
sudo systemctl enable --now docker

# Inspect active Outline shadowbox container and watchtower updater
sudo docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"</code></pre>

      <h3>3. Ephemeral Access Keys &amp; Principle of Least Privilege</h3>
      <p>The Outline management API runs over a local TLS-pinned endpoint, allowing you to issue separate <code>ss://</code> access keys per device (laptop, phone, remote workstation) and set per-key data transfer caps or revoke individual keys instantaneously without disrupting other connected clients.</p>

      <h3>4. Hardening the Underlying Linux Host</h3>
      <p>A VPN server is only as secure as the Linux host underneath it. Always pair containerized tunnel deployments with key-only SSH authentication, unattended security upgrades, and strict firewall policies that drop all ingress traffic except the designated management and tunnel ports.</p>
    `
  },
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
      <p>Securing a Linux server or workstation is one of the primary duties of any systems engineer. While standard installations of distributions like Debian or Ubuntu come with sensible defaults, they require deliberate hardening before being exposed to untrusted networks or production workloads.</p>
      
      <h3>1. SSH Daemon Configuration Hardening</h3>
      <p>The OpenSSH daemon is the primary entry point for remote server administration. By default, many images allow root logins and password authentication, making them immediate targets for automated brute-force scanners. Edit <code>/etc/ssh/sshd_config</code> to enforce cryptographic key authentication:</p>
      <pre><code>PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
X11Forwarding no
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 2</code></pre>
      <p>Always validate the configuration syntax before reloading the daemon so you never lock yourself out of an active session:</p>
      <pre><code>sudo sshd -t && sudo systemctl reload sshd</code></pre>

      <h3>2. Host Firewall Management</h3>
      <p>Enforce a default-deny ingress posture where only explicitly required services are reachable. Whether using <code>ufw</code> on Ubuntu or <code>firewalld</code>, verify active zones and strip unnecessary management ports:</p>
      <pre><code>firewall-cmd --get-active-zones
firewall-cmd --zone=public --add-service=ssh --permanent
firewall-cmd --zone=public --remove-service=cockpit --permanent
firewall-cmd --reload</code></pre>

      <h3>3. Storage Partition Isolation (/mnt Layout)</h3>
      <p>Separating personal workspaces, office data, and backup archives into dedicated partitions (<code>/mnt/personal</code>, <code>/mnt/office</code>, <code>/mnt/backup</code>) with strict mount options in <code>/etc/fstab</code> (such as <code>nosuid</code>, <code>nodev</code>, and <code>noexec</code> on non-code data partitions) prevents privilege escalation and contains filesystem corruption.</p>

      <h3>4. User Auditing and Sudo Restraints</h3>
      <p>Regularly audit members of the <code>sudo</code> group and review authentication logs via <code>journalctl -u ssh</code> or <code>/var/log/auth.log</code>. Avoid running routine scripts as root; instead, scope permissions using dedicated service users and systemd unit sandboxing directives like <code>ProtectSystem=strict</code> and <code>PrivateTmp=true</code>.</p>
    `
  },
  {
    title: "Mastering Bash Scripting for Automated Backups & File Hygiene",
    excerpt: "A deep dive into writing bulletproof Bash automation scripts with robust error handling, exit codes, and standardized kebab-case/snake_case file naming.",
    date: "May 28, 2026",
    publishDate: "2026-05-28",
    readTime: "6 min read",
    coverImage: "/assets/images/articles/bash-scripting.jpg",
    category: "Automation",
    slug: "mastering-bash-scripting-backups",
    content: `
      <p>Automation is the cornerstone of reliable system administration. Writing a quick shell one-liner is easy, but engineering production-grade Bash utilities that safely manipulate thousands of files or run unattended backups requires strict defensive patterns.</p>
      
      <h3>1. Always Enforce Strict Mode Flags</h3>
      <p>Start every script with strict execution flags so silent failures never cascade into corrupted backups or unintended deletions:</p>
      <pre><code>#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'</code></pre>
      <ul>
        <li><code>-e</code>: Exit immediately if any command exits with a non-zero status.</li>
        <li><code>-u</code>: Treat unset variables and parameters as an immediate error.</li>
        <li><code>-o pipefail</code>: Return the exit code of the rightmost failed command in a pipeline rather than masking errors.</li>
      </ul>

      <h3>2. Automating Filesystem Naming Conventions (kebab-case &amp; snake_case)</h3>
      <p>Spaces, uppercase characters, and special symbols in filenames frequently break CLI pipelines. Using Bash parameter expansion and regular expressions, we can automatically normalize messy directory trees into clean <code>kebab-case</code> or <code>snake_case</code> standards:</p>
      <pre><code>normalize_filename() {
  local raw_name="$1"
  # Lowercase, replace spaces/underscores with hyphens, strip non-alphanumeric chars
  echo "$raw_name" \\
    | tr '[:upper:]' '[:lower:]' \\
    | sed -E 's/[ _]+/-/g; s/[^a-z0-9.-]//g; s/-+/-/g'
}</code></pre>

      <h3>3. Atomic, Timestamped Backup Archives</h3>
      <p>When backing up critical partitions to <code>/mnt/backup</code>, verify destination mount availability first, write to a timestamped archive, and verify checksums:</p>
      <pre><code>BACKUP_ROOT="/mnt/backup/snapshots"
TIMESTAMP="$(date +%Y-%m-%d_%H%M%S)"
ARCHIVE="\${BACKUP_ROOT}/workstation-etc-\${TIMESTAMP}.tar.gz"

mountpoint -q /mnt/backup || { echo "Error: /mnt/backup is not mounted" >&2; exit 1; }
tar -czf "$ARCHIVE" /etc/fstab /etc/ssh/sshd_config
sha256sum "$ARCHIVE" > "\${ARCHIVE}.sha256"</code></pre>
    `
  },
  {
    title: "Getting Started with Containers: Docker vs Podman on Linux",
    excerpt: "Analyzing the architectural differences, security properties (rootless containers), and systemd integration of Docker and Podman.",
    date: "April 10, 2026",
    publishDate: "2026-04-10",
    readTime: "5 min read",
    coverImage: "/assets/images/articles/docker-podman.jpg",
    category: "Containers",
    slug: "docker-vs-podman-linux",
    content: `
      <p>Containerization has fundamentally changed how we deploy self-hosted services and isolate dependencies. On Ubuntu and Debian workstations, both <strong>Docker Engine</strong> and <strong>Podman</strong> are first-class citizens—understanding their architectural trade-offs helps you pick the right runtime for each workload.</p>
      
      <h3>1. Central Daemon vs. Fork-Exec Architecture</h3>
      <p>Docker relies on a persistent background daemon (<code>dockerd</code>) communicating with <code>containerd</code>. While this makes orchestrating complex multi-container networks and background restart policies effortless, a crash in the daemon affects all running containers. Podman uses a daemonless fork-exec model, launching each container as a direct child process of the calling user.</p>

      <h3>2. Rootless Security Boundaries</h3>
      <p>Historically, <code>dockerd</code> ran exclusively as <code>root</code>, meaning access to the <code>docker</code> socket was equivalent to root privileges on the host. Podman pioneered rootless containers by mapping the container's root user to an unprivileged host UID range via <code>/etc/subuid</code> and <code>/etc/subgid</code>. Modern Docker Engine now supports rootless mode as well, giving sysadmins strong isolation options in both ecosystems.</p>

      <h3>3. CLI Compatibility and Systemd Integration</h3>
      <p>Because Podman implements the exact same CLI flags as Docker (even allowing <code>alias docker=podman</code>), transitioning between the two is frictionless:</p>
      <pre><code># Inspect container resource consumption in real time
docker stats --no-stream

# View container logs with timestamps
docker logs --tail 50 -t outline-shadowbox</code></pre>
      <p>For self-hosted appliances like Outline VPN that rely on Docker socket introspection and Watchtower auto-updates, Docker Engine remains the most compatible choice; for single-user rootless CLI sandboxes, Podman shines.</p>
    `
  },
  {
    title: "Data Cleaning & Tabular Transformation Pipelines with Python and Pandas",
    excerpt: "How to replace error-prone manual spreadsheet editing with reproducible Python and Pandas pipelines that deduplicate, normalize, and segment multi-day logs.",
    date: "March 18, 2026",
    publishDate: "2026-03-18",
    readTime: "7 min read",
    coverImage: "/assets/images/articles/fastapi-python.jpg",
    category: "Python",
    slug: "fastapi-python-rest-apis",
    content: `
      <p>In operational environments, attendance logs, inventory exports, and telemetry records frequently arrive as fragmented, inconsistently formatted CSV files spread across multiple days. Cleaning and merging these files manually in spreadsheet software is slow, unrepeatable, and prone to human copy-paste errors. Python's <strong><code>pandas</code></strong> and <strong><code>NumPy</code></strong> ecosystem turns hours of manual spreadsheet cleanup into a deterministic, 2-second script.</p>
      
      <h3>1. Aggregating Fragmented Multi-Day Datasets</h3>
      <p>Using <code>pathlib</code> and <code>pandas.concat()</code>, we can ingest an entire directory of daily CSV exports into a single unified DataFrame while tagging each row with its source date:</p>
      <pre><code>from pathlib import Path
import pandas as pd

raw_files = sorted(Path("data/daily_logs").glob("*.csv"))
frames = [pd.read_csv(f).assign(source_file=f.name) for f in raw_files]
master_df = pd.concat(frames, ignore_index=True)</code></pre>

      <h3>2. Normalizing Strings and Eliminating Duplicates</h3>
      <p>Real-world records often contain trailing whitespace, inconsistent casing, or duplicate entries across days. Vectorized string operations clean the entire column in one pass:</p>
      <pre><code># Standardize IDs and names
master_df["user_id"] = master_df["user_id"].astype(str).str.strip().str.upper()
master_df["full_name"] = master_df["full_name"].str.strip().str.title()

# Deduplicate records keeping the latest timestamp
master_df = (
    master_df.sort_values("timestamp")
    .drop_duplicates(subset=["user_id"], keep="last")
    .reset_index(drop=True)
)</code></pre>

      <h3>3. Automated Segmentation and Master Exports</h3>
      <p>Once sanitized, segmenting the dataset (for example, splitting master attendance records into separate gender-segmented or department-specific reports) requires just a grouped filter:</p>
      <pre><code>for category, group_df in master_df.groupby("segment"):
    out_path = Path(f"output/cleaned_{category.lower()}_master.csv")
    group_df.to_csv(out_path, index=False, encoding="utf-8")</code></pre>
      <p>By codifying data hygiene rules in Python, every future batch of raw logs can be validated and transformed with zero manual intervention.</p>
    `
  },
  {
    title: "Infrastructure as Code (IaC): Declarative vs. Imperative Provisioning with Ansible & Terraform",
    excerpt: "Comparing declarative state management in Terraform and Kubernetes manifests against procedural configuration plays in Ansible.",
    date: "February 22, 2026",
    publishDate: "2026-02-22",
    readTime: "9 min read",
    coverImage: "/assets/images/articles/ansible-iac.jpg",
    category: "DevOps",
    slug: "ansible-iac-deployments",
    content: `
      <p>Configuring servers manually via interactive SSH sessions leads to "configuration drift"—over time, no two machines have the exact same packages, sysctl parameters, or service files. <strong>Infrastructure as Code (IaC)</strong> solves this by treating server topology and configuration as version-controlled source files.</p>
      
      <h3>1. Declarative vs. Imperative Models</h3>
      <p>When evaluating modern DevOps toolchains—such as <strong>Terraform</strong>, <strong>Kubernetes</strong>, and <strong>Ansible</strong>—the most fundamental architectural distinction is how they model state:</p>
      <ul>
        <li><strong>Declarative (Terraform, Kubernetes Manifests):</strong> You declare the desired <em>end state</em> (e.g., "3 container replicas running image v1.2 with port 8080 exposed"). The engine diffs the current state against your manifest and computes the necessary transitions automatically.</li>
        <li><strong>Procedural / Hybrid Idempotent (Ansible):</strong> You define an ordered sequence of tasks (playbooks) executed top-to-bottom. While each individual Ansible module (like <code>apt</code> or <code>systemd</code>) is idempotent, execution order is explicitly controlled by the engineer.</li>
      </ul>

      <h3>2. Agentless Configuration with Ansible</h3>
      <p>For Linux workstation and single-node server standardization, Ansible's agentless design is a major advantage—it requires zero background daemons on the target host, relying strictly on SSH and Python:</p>
      <pre><code>- name: Standardize Ubuntu Workstation Environment
  hosts: workstations
  become: true
  tasks:
    - name: Ensure core CLI monitoring and terminal packages are installed
      ansible.builtin.apt:
        name:
          - btop
          - tmux
          - git
          - ntfs-3g
        state: present
        update_cache: true

    - name: Ensure Docker Engine service is enabled and active
      ansible.builtin.systemd:
        name: docker
        enabled: true
        state: started</code></pre>

      <h3>3. Choosing the Right Tool for the Layer</h3>
      <p>In practice, these tools complement rather than replace each other: use <strong>Terraform</strong> to provision the underlying compute and network primitives, <strong>Ansible</strong> to harden the Linux OS and configure systemd daemons, and <strong>Docker / Kubernetes</strong> to orchestrate the containerized workloads on top.</p>
    `
  }
];

