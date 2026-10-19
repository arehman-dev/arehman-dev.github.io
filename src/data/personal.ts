export interface PersonalPost {
  title: string;
  slug: string;
  date: string;
  displayDate: string;
  shortDate: string;
  year: string;
  category: 'perspective' | 'poetry' | 'collections';
  categoryLabel: string;
  tags: string[];
  lang: 'en' | 'ur';
  dir: 'ltr' | 'rtl';
  excerpt: string;
  readTime: string;
  featuredOnHome?: boolean;
  featuredInCategory?: boolean;
  content: string;
}

export interface GalleryImage {
  path: string;
  alt: string;
}

export interface GalleryTheme {
  key: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

export const personalPosts: PersonalPost[] = [
  {
    title: "Iḥsān in the Age of Speed: Why Craftsmanship Still Matters",
    slug: "ihsan-in-the-age-of-speed",
    date: "2026-04-12",
    displayDate: "April 12, 2026",
    shortDate: "Apr 12",
    year: "2026",
    category: "perspective",
    categoryLabel: "Zawiya e Nazar • Perspective",
    tags: ["ihsan", "craftsmanship", "ethics", "technology", "philosophy"],
    lang: "en",
    dir: "ltr",
    excerpt: "Reflecting on the classical principle of Iḥsān—striving for excellence even in the unseen details—amidst a culture obsessed with velocity and shortcuts.",
    readTime: "6 min read",
    featuredOnHome: true,
    featuredInCategory: true,
    content: `
      <p>We live in an era that worships velocity. In software engineering, writing, and daily life alike, the prevailing metric of success has shifted toward how rapidly we can ship, publish, and move on to the next artifact. Yet beneath this relentless acceleration lies a quiet erosion: when speed becomes the sole objective, care becomes an inefficiency.</p>

      <p>In the Islamic intellectual and spiritual tradition, there is a foundational concept that stands as a timeless counterweight to superficiality: <em>Iḥsān</em> (إحسان). Derived from the root <em>ḥ-s-n</em>—meaning beauty, perfection, and excellence—it is defined as acting with the acute consciousness that even when no human eye inspects your work, the Divine gazes upon it.</p>

      <h2>The Unseen Back of the Cabinet</h2>
      <p>True craftsmanship has always been measured by what happens in the unseen corners. A master carpenter finishes the back of a cabinet—the side pressed permanently against the wall—with the same precision as the front door. A disciplined systems engineer writes clean error handling, documents edge cases, and structures permissions cleanly even when a hasty patch would pass a cursory review.</p>
      <blockquote>"Verily, God loves that when any of you performs a piece of work, they perform it with <em>Itqān</em> (thoroughness and mastery)." — Classical Prophetic Tradition</blockquote>
      <p>When we internalize <em>Iḥsān</em>, excellence ceases to be a performance for an audience or a manager. It becomes an obligation of character. The code you write at 2:00 AM on a private server, the bash script automating a silent backup, or the way you structure a thought in a notebook—each becomes a mirror of your internal state.</p>

      <h2>Velocity Without Direction</h2>
      <p>Modern tooling—especially in the age of generative AI and instant scaffolding—has lowered the cost of producing output to near zero. While these tools are extraordinary multipliers when wielded with discernment, they also introduce a subtle temptation: mistaking volume for value.</p>
      <p>When we generate more than we comprehend, we accumulate a debt of understanding. We become operators of black boxes rather than architects of systems. Practicing <em>Iḥsān</em> in a technological age requires deliberate friction:</p>
      <ul>
        <li><strong>Reading before executing</strong> — Refusing to deploy configurations or abstractions we haven't genuinely understood at the foundational layer.</li>
        <li><strong>Restraint in complexity</strong> — Choosing a simple, auditable fifty-line script over a bloated dependency tree.</li>
        <li><strong>Calculated speech &amp; prose</strong> — Writing only when we have weighed our words, rather than adding noise to an already saturated digital commons.</li>
      </ul>

      <h2>Excellence as Spiritual Discipline</h2>
      <p>There is a profound tranquility that accompanies slow, deliberate mastery. When you debug a kernel networking namespace from first principles, or spend an hour refining a single stanza of verse until every syllable carries weight, you are training the soul in patience (<em>Ṣabr</em>).</p>
      <p>Impatience is the root of most technical and moral failures. We cut corners because discomfort makes us restless; we ship fragile systems because sitting with uncertainty requires humility. To treat one's daily craft as an arena for moral discipline transforms ordinary labor into <em>ʿubūdiyyah</em>—purposeful servitude.</p>

      <hr class="dinkus" />

      <p><em>Speed will always have its market, and trends will continue to churn. But the work that endures—and the work that refines the person who makes it—is always built slowly, with intention, and with the quiet dignity of Iḥsān.</em></p>
    `
  },
  {
    title: "The Art of Meaningful Work",
    slug: "the-art-of-meaningful-work",
    date: "2026-04-03",
    displayDate: "April 03, 2026",
    shortDate: "Apr 03",
    year: "2026",
    category: "perspective",
    categoryLabel: "Zawiya e Nazar • Perspective",
    tags: ["philosophy", "work", "ethics", "meaning", "craftsmanship"],
    lang: "en",
    dir: "ltr",
    excerpt: "Exploring what makes work meaningful and how to cultivate purpose, agency, and intellectual honesty in our daily endeavors.",
    readTime: "6 min read",
    featuredInCategory: true,
    content: `
      <p>In an era of infinite options and constant distraction, the question of what constitutes meaningful work has become increasingly profound. We find ourselves caught between societal expectations, financial pressures, and an inner longing for purpose. This essay explores the intersection of these forces and offers some reflection on what makes work truly meaningful.</p>

      <h2>On Purpose and Intention</h2>
      <p>Meaningful work begins with intention. It's not about grandiose ambitions or changing the world overnight—though those may be byproducts—but rather about understanding <em>why</em> we do what we do.</p>
      <p>When we work with clear intention, we transform routine tasks into expressions of our values. A programmer debugging code is not merely fixing errors; they are exercising diligence. A teacher preparing a lesson is not just delivering information; they are cultivating intellectual growth. The difference lies entirely in the conscious awareness of purpose.</p>
      <blockquote>"The only way to do great work is to love what you do." — Steve Jobs</blockquote>
      <p>Yet love is not always the answer. Sometimes meaningful work emerges from duty, from a sense of responsibility to others or to a craft. A surgeon feels the weight of their responsibility not from love alone, but from the gravity of the trust placed in them. This too is meaningful.</p>

      <h2>The Role of Craft</h2>
      <p>Craftsmanship represents one of our oldest paths to meaning. There is something uniquely satisfying about doing a thing <em>well</em>—not perfect, but well. The attention to detail, the investment in mastery, the pride in one's work—these are deeply human experiences.</p>
      <p>In our digital age, we risk losing this dimension of work. Everything moves so quickly, optimized for speed and scale. Yet the craftsperson reminds us that quality and contemplation have their own value. Whether you're writing code, designing interfaces, or writing prose, the commitment to craft brings a dimension of satisfaction that mere completion cannot.</p>

      <h2>Finding Meaning in Service</h2>
      <p>Perhaps the most underestimated source of meaning in work is service—the knowledge that your efforts contribute to something beyond yourself.</p>
      <p>A cleaner who takes pride in maintaining a beautiful space serves not just their employer, but everyone who benefits from that cleanliness. A content creator who writes thoughtfully serves their audience, even if they never meet them. A parent who raises children invests in the future.</p>
      <p>This is not about self-sacrifice or martyrdom. Rather, it's about recognizing the interconnectedness of our work. When we see how our efforts ripple outward, work transforms from mere obligation into participation in something larger.</p>

      <h2>The Balance of Agency and Constraint</h2>
      <p>Meaning often emerges in the space between total freedom and complete constraint. Absolute freedom can be paralyzing; we need some structure, some boundaries, some challenge to push against.</p>
      <p>Consider the difference between:</p>
      <ul>
        <li>A writer with a blank page and infinite possibilities (paralyzing)</li>
        <li>A writer with a clear brief, specific constraints, and an engaged audience (energizing)</li>
      </ul>
      <p>The constraints focus energy. They provide context and purpose. Yet we also need agency—the ability to make choices, to shape our work, to express our individuality within those constraints.</p>
      <p>The sweet spot lies where we have enough freedom to invest meaning, yet enough structure to provide direction.</p>

      <h2>Intellectual Honesty in Our Work</h2>
      <p>Earlier I wrote about intellectual honesty as a foundation for growth. It extends directly into our work. Meaningful work requires us to:</p>
      <ul>
        <li><strong>Be truthful</strong> about what we know and don't know</li>
        <li><strong>Acknowledge limitations</strong> in our approaches and ideas</li>
        <li><strong>Remain open</strong> to criticism and alternative perspectives</li>
        <li><strong>Avoid self-deception</strong> about our motivations and impact</li>
      </ul>
      <p>When we compromise on honesty—cutting corners, exaggerating results, hiding uncertainties—we diminish the meaning in our work. We're no longer fully invested; we're performing.</p>

      <h2>The Long View</h2>
      <p>Finally, meaningful work often only reveals itself through time. We may not understand the significance of our actions until years later. A teacher may not know which lesson changed a student's trajectory. A parent may not see the full consequences of their guidance until their child reaches adulthood.</p>
      <p>This requires faith—not religious faith necessarily, but faith that careful, honest work contributes something of value, even if we cannot immediately measure it.</p>

      <h2>Closing Reflection</h2>
      <p>The art of meaningful work is not found in grand gestures or perfect clarity. It emerges in:</p>
      <ol>
        <li><strong>Intention</strong> — Understanding why we do what we do</li>
        <li><strong>Craft</strong> — Attending to quality and mastery</li>
        <li><strong>Service</strong> — Recognizing our contribution to others</li>
        <li><strong>Balance</strong> — Navigating between freedom and constraint</li>
        <li><strong>Honesty</strong> — Remaining truthful with ourselves</li>
        <li><strong>Faith</strong> — Trusting in the long-term significance of our efforts</li>
      </ol>
      <p>In the end, the most meaningful work is the work we do consciously, with full awareness of both its limitations and its potential.</p>
      <hr class="dinkus" />
      <p><em>What dimensions of meaning do you find in your own work? I'd be curious to hear your reflections.</em></p>
    `
  },
  {
    title: "The Quiet Discipline of Systems Thinking",
    slug: "quiet-discipline-of-systems-thinking",
    date: "2026-03-29",
    displayDate: "March 29, 2026",
    shortDate: "Mar 29",
    year: "2026",
    category: "perspective",
    categoryLabel: "Zawiya e Nazar • Perspective",
    tags: ["systems", "linux", "philosophy", "discipline", "resilience"],
    lang: "en",
    dir: "ltr",
    excerpt: "How working with Linux internals, deterministic logs, and failure domains teaches restraint, patience, and clarity in human life.",
    readTime: "5 min read",
    featuredInCategory: false,
    content: `
      <p>Spend enough years administering Linux machines, tracing packet drops across virtual ethernet pairs, or reading kernel ring buffers after an unexpected crash, and your relationship with problems begins to change. You stop reacting to symptoms with panic, and you start looking for the underlying architecture.</p>

      <h2>Symptoms Are Rarely the Cause</h2>
      <p>When a service fails to bind to a port or a disk fills up at midnight, the novice impulse is to restart the daemon and hope the error disappears. The systems thinker knows that an unexplained failure is merely a delayed failure. Restarting without understanding the root cause doesn't solve the problem; it only erases the evidence.</p>
      <p>Human habits, intellectual blind spots, and societal fractures operate on the exact same principle. When we experience burnout, distraction, or moral fatigue, treating the surface symptom—through temporary motivation or superficial productivity hacks—never holds. Lasting change requires inspecting the environment, the inputs, and the invariants we have configured our lives around.</p>

      <h2>Small, Composable Primitives</h2>
      <p>The enduring genius of the Unix philosophy lies in its humility: build small tools that do one thing well, communicate through transparent text streams, and compose cleanly with one another. There is no monolithic ego in a well-designed pipeline.</p>
      <blockquote>"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra</blockquote>
      <p>When applied to personal life, this philosophy translates into **modular, non-negotiable habits**:</p>
      <ul>
        <li><strong>Deterministic routines</strong> — Anchoring the day around prayer, focused study, and physical training rather than waiting for fleeting inspiration.</li>
        <li><strong>Observability of the self (<em>Muḥāsabah</em>)</strong> — Keeping an honest audit log of how we spend our hours, our attention, and our speech.</li>
        <li><strong>Graceful degradation</strong> — Designing our schedules with enough margin that an unexpected disruption does not cascade into total collapse.</li>
      </ul>

      <h2>Resilience Through Isolation</h2>
      <p>In infrastructure, we isolate workloads using namespaces, cgroups, and firewalls so that a breach or memory leak in one container cannot compromise the host kernel. In the modern attention economy, the human mind needs similar isolation boundaries.</p>
      <p>Without deliberate firewalls around our attention—protecting deep reading, quiet reflection, and family presence from the constant interrupts of algorithmic feeds—our mental context-switching overhead approaches 100%. We feel exhausted not because we have done hard work, but because our kernel spent the entire day thrashing between interrupts.</p>

      <hr class="dinkus" />

      <p><em>To think in systems is to choose patience over impulse, root causes over quick patches, and quiet structural integrity over loud appearances.</em></p>
    `
  },
  {
    title: "FOSS Tools for Privacy & Digital Sovereignty",
    slug: "foss-tools-privacy",
    date: "2026-03-25",
    displayDate: "March 25, 2026",
    shortDate: "Mar 25",
    year: "2026",
    category: "collections",
    categoryLabel: "Tools & Resources",
    tags: ["foss", "privacy", "security", "tools", "linux", "sovereignty"],
    lang: "en",
    dir: "ltr",
    excerpt: "A comprehensive field guide to free and open-source software for reclaiming digital sovereignty, privacy, and local ownership of your data.",
    readTime: "5 min read",
    featuredInCategory: true,
    content: `
      <p>Privacy is not about having something to hide; it is about preserving the autonomy of the human mind. When every note we write, every search we conduct, and every conversation we hold is indexed, profiled, and monetized by opaque intermediaries, we subtly alter how we think and speak. Reclaiming digital sovereignty begins with choosing tools that respect the user as an owner rather than a product.</p>

      <p>Below is my curated, battle-tested collection of Free and Open-Source Software (FOSS) tools that form a resilient, privacy-first computing stack.</p>

      <h2>1. Identity, Credentials &amp; Cryptography</h2>
      <ul>
        <li><strong>KeePassXC</strong> — An offline-first, cross-platform password manager backed by encrypted <code>.kdbx</code> vaults. Unlike cloud password managers, your vault never leaves your filesystem unless you explicitly sync it via your own encrypted transport (such as Syncthing).</li>
        <li><strong>GnuPG (GPG)</strong> — The bedrock of cryptographic signing and asymmetric encryption. Essential for verifying software tarballs, signing Git commits, and encrypting sensitive archives at rest.</li>
        <li><strong>Aegis Authenticator (Android)</strong> — A clean, open-source, fully encrypted 2FA/TOTP vault with automatic local backups and zero telemetry.</li>
      </ul>

      <h2>2. Network Privacy &amp; Encrypted Communications</h2>
      <ul>
        <li><strong>Mullvad VPN &amp; WireGuard</strong> — Account-number-only authentication (no email required), audited open-source clients, and native WireGuard support for minimal protocol overhead.</li>
        <li><strong>Outline / Self-Hosted Shadowsocks</strong> — For engineers who prefer complete control over their egress nodes, deploying a self-hosted Outline or WireGuard endpoint on a hardened Debian VPS provides dedicated, verifiable routing.</li>
        <li><strong>Signal</strong> — The gold standard for end-to-end encrypted messaging and voice calls, powered by the open-source Signal Protocol.</li>
        <li><strong>Thunderbird + ProtonMail / Custom Domain</strong> — Pairing a local, open-source mail client with OpenPGP key integration ensures your correspondence remains searchable offline while encrypted in transit.</li>
      </ul>

      <h2>3. Operating Systems, Storage &amp; Local AI</h2>
      <ul>
        <li><strong>Debian &amp; Ubuntu Linux</strong> — Predictable, community-governed operating systems where every daemon, socket, and systemd unit is transparent and under your root authority.</li>
        <li><strong>LUKS (Linux Unified Key Setup)</strong> — Kernel-level full-disk encryption that protects your entire partition table against physical device theft.</li>
        <li><strong>Syncthing</strong> — Continuous, peer-to-peer, end-to-end encrypted file synchronization across your workstation, laptop, and phone without ever touching a third-party cloud server.</li>
        <li><strong>Llama.cpp &amp; Ollama</strong> — Running quantized open-weight language models locally on your own hardware so code analysis, drafting, and experimentation happen with zero external API logging.</li>
      </ul>

      <h2>4. Web Browsing &amp; Knowledge Management</h2>
      <ul>
        <li><strong>Firefox (Hardened with Arkenfox + uBlock Origin)</strong> — Maintaining browser engine diversity outside the Chromium monopoly, paired with strict tracking protection and container tabs.</li>
        <li><strong>Plain-Text Markdown &amp; Git</strong> — Storing notes, essays, and documentation in plain UTF-8 Markdown files tracked with Git guarantees that your knowledge base will remain readable fifty years from now, immune to proprietary SaaS lock-in.</li>
      </ul>

      <hr class="dinkus" />

      <p><em>Digital sovereignty is not achieved in a single afternoon; it is built incrementally, one deliberate replacement at a time. Start by owning your passwords, your files, and your operating system.</em></p>
    `
  },
  {
    title: "زاویہ نظر: تربیت اور تعمیرِ سیرت",
    slug: "zawiya-nazar-tarbiyat",
    date: "2026-03-20",
    displayDate: "March 20, 2026",
    shortDate: "Mar 20",
    year: "2026",
    category: "perspective",
    categoryLabel: "Zawiya e Nazar • Perspective",
    tags: ["اردو", "تربیت", "اخلاق", "سیرت", "نظم"],
    lang: "ur",
    dir: "rtl",
    excerpt: "تربیت محض معلومات کے ذخیرے کا نام نہیں بلکہ نفس کی تہذیب، اخلاقی استقامت اور کردار کی پختگی کا مسلسل سفر ہے۔",
    readTime: "4 min read",
    featuredInCategory: true,
    content: `
      <div class="urdu-text">
        <p>عصرِ حاضر کا سب سے بڑا المیہ یہ ہے کہ ہم نے ’’تعلیم‘‘ (Information) اور ’’تربیت‘‘ (Character Formation) کے درمیان حائل لطیف مگر بنیادی فرق کو فراموش کر دیا ہے۔ آج کے دور میں معلومات تک رسائی جتنی آسان ہو چکی ہے، کردار کی پختگی، حلم اور فکری توازن اتنا ہی نایاب ہوتا جا رہا ہے۔</p>

        <h2>علم اور ادب کا باہمی رشتہ</h2>
        <p>ہماری کلاسیکی روایت میں علم کو کبھی بھی ادب اور تزکیۂ نفس سے الگ کر کے نہیں دیکھا گیا۔ تربیت کا اصل مفہوم کسی انسان کی فطری صلاحیتوں کو شائستگی، نظم و ضبط اور اعلیٰ اخلاقی مقاصد کے تابع کرنا ہے۔ جب علم کے ساتھ تربیت اور عاجزی شامل نہ ہو تو وہ انسان میں بصیرت کے بجائے تکبر اور فکری انتشار پیدا کرتا ہے۔</p>
        <blockquote>’’ادب پہلا قرینہ ہے محبت کے قرینوں میں‘‘ — علم کی روح ادب اور عمل کی سچائی میں مضمر ہے۔</blockquote>

        <h2>نفس کا محاسبہ اور خاموش محنت</h2>
        <p>سچی تربیت کا آغاز انسان کی اپنی ذات سے ہوتا ہے۔ دوسروں کی اصلاح کی خواہش سے پہلے اپنے شب و روز، اپنی گفتگو کے الفاظ اور اپنی نیتوں کا محاسبہ کرنا ہی پختہ شعور کی علامت ہے۔</p>
        <p>کردار سازی کے چند بنیادی ستون یہ ہیں:</p>
        <ul>
          <li><strong>گفتگو میں احتیاط اور سچائی:</strong> بن دیکھے اور بن تولے بولنے کے بجائے خاموشی اور مدلل کلام کو ترجیح دینا۔</li>
          <li><strong>وقت اور فرائض کی پابندی:</strong> اپنے روزمرہ کے معمولات میں نظم و ضبط پیدا کرنا، خواہ حالات موافق ہوں یا مخالف۔</li>
          <li><strong>حیا اور احسان:</strong> خلوت اور جلوت کو یکساں رکھنا اور ہر کام کو اس درجۂ کمال تک پہنچانا کہ دل مطمئن ہو۔</li>
        </ul>

        <h2>معاشرے کی بنیاد</h2>
        <p>افراد کے کردار سے ہی معاشرے کی تقدیر بنتی ہے۔ جب ایک فرد اپنی ذات میں دیانت، صبر اور فکری پختگی پیدا کرتا ہے تو اس کا اثر خاموشی سے اس کے خاندان، اس کے کام اور پورے ماحول پر مرتب ہوتا ہے۔ مضبوط شجر ہمیشہ گہری اور مضبوط جڑوں کا مرہونِ منت ہوتا ہے، اور انسان کی جڑیں اس کی تربیت میں پیوست ہوتی ہیں۔</p>
      </div>
    `
  },
  {
    title: "On Intellectual Honesty",
    slug: "on-intellectual-honesty",
    date: "2026-03-15",
    displayDate: "March 15, 2026",
    shortDate: "Mar 15",
    year: "2026",
    category: "perspective",
    categoryLabel: "Zawiya e Nazar • Perspective",
    tags: ["technology", "ethics", "philosophy", "digital", "truth"],
    lang: "en",
    dir: "ltr",
    excerpt: "Exploring the foundation of genuine intellectual growth and the rare discipline of commitment to objective truth over ego.",
    readTime: "5 min read",
    featuredOnHome: true,
    featuredInCategory: true,
    content: `
      <p>Intellectual honesty is the foundation of all genuine growth. In a digital age shaped by algorithmic amplification, tribal signaling, and curated personas, the commitment to objective truth has become both more essential and significantly more difficult to practice.</p>

      <p>Most of us believe we are truth-seekers. Yet in practice, the human mind often functions less like a scientist and more like a defense attorney: we adopt a conclusion first—out of convenience, habit, or pride—and then recruit our intelligence to defend that position against all counter-evidence.</p>

      <h2>The Anatomy of Self-Deception</h2>
      <p>Richard Feynman famously summarized the first principle of scientific integrity: <em>"You must not fool yourself—and you are the easiest person to fool."</em> Self-deception rarely feels like lying. Instead, it disguises itself in subtle habits of thought:</p>
      <ul>
        <li><strong>Asymmetric skepticism</strong> — Subjecting ideas we dislike to rigorous scrutiny while accepting claims that flatter our worldview without verification.</li>
        <li><strong>Performative certainty</strong> — Speaking with absolute conviction on complex subjects where we have only read secondary summaries.</li>
        <li><strong>Moving the goalposts</strong> — Refusing to define in advance what evidence would compel us to revise our opinion.</li>
      </ul>

      <h2>The Courage to Say "I Do Not Know"</h2>
      <p>In classical scholarship, the phrase <em>"Lā adrī"</em> ("I do not know") was revered as half of knowledge. Far from being a confession of weakness, admitting the boundaries of one's competence is the clearest marker of an disciplined intellect.</p>
      <blockquote>"He who says 'I do not know' has been taught by his humility what he did not know; whereas he who pretends to know what he does not know will remain ignorant of what he could have learned."</blockquote>
      <p>In engineering and systems work, reality provides an unforgiving feedback loop: a compiler or a kernel does not care about our rhetoric. Either the hypothesis matches the actual state of the machine, or the system fails. Bringing that same humility into philosophy, ethics, and daily discourse means valuing truth above winning an argument.</p>

      <h2>Practicing Epistemic Restraint</h2>
      <p>Maintaining intellectual integrity in environments designed to erode it requires deliberate practices:</p>
      <ol>
        <li><strong>Steel-manning opposing views</strong> — Before critiquing an argument, articulate it in its strongest, most charitable form until its proponent would recognize it as fair.</li>
        <li><strong>Separating identity from ideas</strong> — Treat hypotheses as tools to be tested rather than extensions of your personal worth. When an idea is proven wrong, you have gained truth, not lost status.</li>
        <li><strong>Proportional confidence</strong> — Calibrate the strength of your speech to the strength of your evidence. Calculated speech begins with calculated thought.</li>
      </ol>

      <hr class="dinkus" />

      <p><em>Intellectual honesty is ultimately a moral virtue before it is a cognitive skill. It asks a simple, demanding question every day: Do I love the truth more than I love being right?</em></p>
    `
  },
  {
    title: "علامہ اقبال: فلسفۂ خودی اور مردِ مومن",
    slug: "alamah-iqbal-khudi",
    date: "2026-03-10",
    displayDate: "March 10, 2026",
    shortDate: "Mar 10",
    year: "2026",
    category: "poetry",
    categoryLabel: "Ashaar • شاعری",
    tags: ["iqbal", "urdu-poetry", "philosophy", "خودی"],
    lang: "ur",
    dir: "rtl",
    excerpt: "خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے — علامہ اقبال کے تصورِ خودی، خود آگاہی اور عزمِ صمیم کا ایک فکری و شعری مطالعہ۔",
    readTime: "4 min read",
    featuredOnHome: true,
    featuredInCategory: true,
    content: `
      <div class="urdu-text">
        <blockquote>
          خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے<br/>
          خدا بندے سے خود پوچھے، بتا تیری رضا کیا ہے
        </blockquote>

        <p>حکیم الامت علامہ محمد اقبالؒ کے کلام کا محور و مرکز ’’تصورِ خودی‘‘ ہے۔ اردو اور فارسی شاعری کی تاریخ میں اقبال نے لفظ ’’خودی‘‘ کو تکبر اور انانیت کے منفی معنوں سے نکال کر خود آگاہی، عزتِ نفس، اور روحانی قوت کے ایک عظیم الشان فلسفے میں ڈھال دیا۔</p>

        <h2>خودی کی حقیقت</h2>
        <p>اقبال کے نزدیک خودی انسان کے اپنے باطن کی پہچان اور اپنے خالق کے سامنے عبدیت (بندگی) کے مکمل شعور کا نام ہے۔ جب انسان اللہ کے سوا ہر خوف، ہر طمع اور ہر باطل سہارے سے بے نیاز ہو جاتا ہے تو اس کے اندر وہ روحانی استقامت پیدا ہوتی ہے جسے زمانے کے حوادث متزلزل نہیں کر سکتے۔</p>

        <blockquote>
          خودی کیا ہے؟ رازِ درونِ حیات<br/>
          خودی کیا ہے؟ بیداریِ کائنات<br/>
          ازل اس کے پیچھے، ابد سامنے<br/>
          نہ حد اس کے پیچھے، نہ حد سامنے
        </blockquote>

        <h2>تربیتِ خودی کے مراحل</h2>
        <p>علامہ اقبالؒ نے اپنی مثنوی ’’اسرارِ خودی‘‘ میں خودی کی تکمیل کے تین بنیادی مراحل بیان فرمائے ہیں:</p>
        <ul>
          <li><strong>اطاعتِ الٰہی:</strong> اپنی مرضی کو خالقِ کائنات کے قوانین اور احکامات کے تابع کر دینا۔</li>
          <li><strong>ضبطِ نفس:</strong> اپنی خواہشات، خوف اور آرام طلبی پر کامل قابو پانا۔</li>
          <li><strong>نیابتِ الٰہی:</strong> زمین پر عدل، خیر، علم اور احسان کا علمبردار بن کر ابھرنا۔</li>
        </ul>

        <blockquote>
          دیارِ عشق میں اپنا مقام پیدا کر<br/>
          نیا زمانہ، نئے صبح و شام پیدا کر<br/>
          میرا طریق امیری نہیں، فقیری ہے<br/>
          خودی نہ بیچ، غریبی میں نام پیدا کر
        </blockquote>

        <p>یہ اشعار آج کے نوجوان اور طالبِ علم کے لیے ایک دائمی مشعلِ راہ ہیں کہ حقیقی کامیابی ظاہری اسباب کی کثرت میں نہیں بلکہ کردار کی بلندی، محنت کی عظمت اور خودی کی حفاظت میں ہے۔</p>
      </div>
    `
  },
  {
    title: "سکوتِ شب اور مسافر",
    slug: "sukoot-e-shab-aur-musafir",
    date: "2026-02-24",
    displayDate: "February 24, 2026",
    shortDate: "Feb 24",
    year: "2026",
    category: "poetry",
    categoryLabel: "Ashaar • شاعری",
    tags: ["اردو-شاعری", "سکوت", "سفر", "تفکر"],
    lang: "ur",
    dir: "rtl",
    excerpt: "رات کی خاموشی، تنہائی کے تفکر اور منزل کی جستجو میں سرگرم مسافر کے جذبات کی عکاسی۔",
    readTime: "3 min read",
    featuredInCategory: true,
    content: `
      <div class="urdu-text">
        <blockquote>
          سکوتِ شب میں جب دنیا کی ہر آواز سوتی ہے<br/>
          مرے باطن کے سناٹے میں اک قندیل جلتی ہے<br/><br/>
          نہ شکوہ راستے کی دھول سے، نہ خوف منزل کا<br/>
          مسافر کو تو بس اپنے ارادے کی خبر ہوتی ہے
        </blockquote>

        <p>رات کی تنہائی اور خاموشی ہمیشہ سے اہلِ فکر و نظر کے لیے خود احتسابی اور تخلیقی یکسوئی کا وقت رہی ہے۔ جب دن کا شور تھم جاتا ہے تو انسان کو اپنے اصل وجود اور اپنے سفر کی سمت کو پرکھنے کا موقع ملتا ہے۔</p>

        <blockquote>
          ہجومِ شہر میں رہ کر بھی جو تنہا نکلتا ہے<br/>
          وہی طوفان کی موجوں میں اپنا رخ بدلتا ہے<br/><br/>
          لپٹ کر عافیت کے ساحلوں سے کچھ نہیں ملتا<br/>
          جو پتھر آگ سے گزرے، وہی کندن میں ڈھلتا ہے
        </blockquote>

        <p>عافیت اور آسائش کی طلب انسان کو جمود کا شکار کر دیتی ہے، جبکہ مشکلات کا سامنا اور مسلسل جدوجہد انسان کے جوہر کو نکھارتی ہے۔</p>
      </div>
    `
  },
  {
    title: "Timeless Anchors: Maxims on Knowledge, Adab & Restraint",
    slug: "timeless-anchors-knowledge-adab",
    date: "2026-02-14",
    displayDate: "February 14, 2026",
    shortDate: "Feb 14",
    year: "2026",
    category: "collections",
    categoryLabel: "Quotes & Commonplace",
    tags: ["ilm", "adab", "wisdom", "quotes", "restraint"],
    lang: "en",
    dir: "ltr",
    excerpt: "A curated commonplace collection of classical reflections on seeking knowledge ('Ilm), refinement of character (Adab), and the power of calculated speech.",
    readTime: "4 min read",
    featuredInCategory: true,
    content: `
      <p>A commonplace book is an old scholarly habit: a living archive of sentences, counsels, and observations worth returning to when the world grows loud. Below are enduring reflections on knowledge (<em>'Ilm</em>), manners of the soul (<em>Adab</em>), and the discipline of the tongue.</p>

      <h2>On Adab Before Knowledge</h2>
      <blockquote>"We are in greater need of a little <em>Adab</em> (refinement of character and manners) than we are of a great deal of knowledge." — <strong>ʿAbdullāh ibn al-Mubārak</strong></blockquote>
      <p>The classical scholars spent decades mastering self-restraint, humility, and respect before teaching a single chapter of law or science. Knowledge without <em>Adab</em> is like fire without a hearth: it illuminates nothing and burns its carrier.</p>

      <h2>On Calculated Speech &amp; Silence</h2>
      <blockquote>"So long as you remain silent, you possess your words; the moment you utter them, your words possess you." — <strong>Classical Arabic Maxim</strong></blockquote>
      <p>In an era that rewards instant commentary on every passing event, silence is a rare intellectual superpower. Weighing a sentence before speaking—asking whether it is true, necessary, and beneficial—spares the heart from regret.</p>

      <h2>On Steadfastness &amp; Gradual Mastery</h2>
      <blockquote>"Whoever seeks knowledge all at once loses it all at once; rather, knowledge is only attained through the passing of nights and days." — <strong>Imām al-Zuhrī</strong></blockquote>
      <p>Whether mastering low-level systems programming, classical literature, or physical strength, consistency over years effortlessly outperforms bursts of unsustainable intensity.</p>

      <h2>On Solitude &amp; Focus</h2>
      <blockquote>"Knowledge gives you a portion of itself only when you give it the entirety of yourself." — <strong>Abū Yūsuf</strong></blockquote>
      <p>Deep comprehension refuses to coexist with fragmented attention. Guarding hours of uninterrupted solitude is the price of any work worth remembering.</p>

      <hr class="dinkus" />

      <p><em>Collected and revisited over time as anchors for study, work, and life.</em></p>
    `
  }
];

export const homeGridImages: GalleryImage[] = [
  { path: "tasweer-kahani/home-page-grid/img-20200611-121355-293-01.jpeg", alt: "Midday Geometry — Quiet light across urban lines" },
  { path: "tasweer-kahani/home-page-grid/img-20201203-121229-218-01-01.jpeg", alt: "Winter Stillness — crisp December afternoon horizons" },
  { path: "tasweer-kahani/home-page-grid/img-20201216-171244-316-01-03.jpeg", alt: "Dusk in Indigo — fading twilight over silhouettes" },
  { path: "tasweer-kahani/home-page-grid/img-20201216-172211-623-01-02.jpeg", alt: "Afterglow — the quiet transition between Maghrib and night" },
  { path: "tasweer-kahani/home-page-grid/img-20201220-142717-864-01-01.jpeg", alt: "Canopy & Path — walking into winter greenery" },
  { path: "tasweer-kahani/home-page-grid/img-20210306-160401-942-01.jpeg", alt: "Early Spring — warm afternoon light through foliage" },
  { path: "tasweer-kahani/theme-blues-and-purple/img-20201216-170952-207-01.jpeg", alt: "Twilight Horizon — First shades of cobalt at dusk" },
  { path: "tasweer-kahani/theme-walk-into-nature/img-20201218-114604-397-01-01-01.jpeg", alt: "Morning Trail — Sunlight filtering through winter trees" },
  { path: "tasweer-kahani/more/img-20200628-060544-069-01.jpeg", alt: "First Light (6:05 AM) — The calm of early Fajr morning" },
  { path: "tasweer-kahani/theme-blues-and-purple/img-20210103-162331-885-01-02.jpeg", alt: "January Calm — Soft blue atmospheric haze" },
  { path: "tasweer-kahani/theme-walk-into-nature/img-20210328-182309-944-01-01.jpeg", alt: "Quiet Meadow — Last light over the horizon" },
  { path: "tasweer-kahani/more/img-20200809-181805-258-01.jpg", alt: "August Rain — Wet pavements and diffused golden light" }
];

export const galleryThemes: GalleryTheme[] = [
  {
    key: "blues-and-purple",
    title: "Blues & Purple",
    description: "Urban geometry, architectural reflections, and introspective twilight moods.",
    images: [
      { path: "tasweer-kahani/theme-blues-and-purple/img-20201216-170952-207-01.jpeg", alt: "Twilight Horizon — First shades of cobalt at dusk" },
      { path: "tasweer-kahani/theme-blues-and-purple/img-20201216-165631-552-01-01.jpeg", alt: "Evening Silhouette — Quiet skies before sunset" },
      { path: "tasweer-kahani/theme-blues-and-purple/img-20201216-171244-316-01-03.jpeg", alt: "Violet Gradient — Architectural lines against winter dusk" },
      { path: "tasweer-kahani/theme-blues-and-purple/img-20210103-162331-885-01-02.jpeg", alt: "January Calm — Soft blue atmospheric haze" },
      { path: "tasweer-kahani/theme-blues-and-purple/img-20201226-172605-824-01-04.jpeg", alt: "Deep Indigo — Reflections at the edge of night" },
      { path: "tasweer-kahani/theme-blues-and-purple/img-20210616-191114-370-01.jpeg", alt: "Summer Dusk — Warm violet clouds at 7 PM" },
      { path: "tasweer-kahani/theme-blues-and-purple/img-20210709-192821-864-02.jpeg", alt: "Monsoon Evening — Dramatic skies and electric blues" }
    ]
  },
  {
    key: "walk-into-nature",
    title: "Walk Into Nature",
    description: "Natural landscapes, greenery, and unhurried moments of contemplation.",
    images: [
      { path: "tasweer-kahani/theme-walk-into-nature/img-20201218-114604-397-01-01-01.jpeg", alt: "Morning Trail — Sunlight filtering through winter trees" },
      { path: "tasweer-kahani/theme-walk-into-nature/img-20201220-142717-864-01-01.jpeg", alt: "Forest Corridor — Stillness along the shaded path" },
      { path: "tasweer-kahani/theme-walk-into-nature/img-20201227-104747-002-01-01.jpeg", alt: "Crisp Air — Late December morning in the hills" },
      { path: "tasweer-kahani/theme-walk-into-nature/img-20210306-160401-942-01.jpeg", alt: "Golden Leaf — First warmth of March afternoon" },
      { path: "tasweer-kahani/theme-walk-into-nature/img-20210328-175306-794-01.jpeg", alt: "Valley Ridge — Long shadows across the green slope" },
      { path: "tasweer-kahani/theme-walk-into-nature/img-20210328-182309-944-01-01.jpeg", alt: "Quiet Meadow — Last light over the horizon" },
      { path: "tasweer-kahani/theme-walk-into-nature/img-20210401-171833-931-01.jpeg", alt: "Spring Breeze — Wildflowers and open sky" },
      { path: "tasweer-kahani/theme-walk-into-nature/img-20210328-181924-105-01.jpeg", alt: "Twilight Canopy — Branches framed against evening light" }
    ]
  },
  {
    key: "moments",
    title: "Moments",
    description: "Unframed observations: candid scenes, textures, and everyday beauty.",
    images: [
      { path: "tasweer-kahani/more/img-20200611-121355-293-01.jpeg", alt: "Noon Shadows — Contrast and stillness in summer" },
      { path: "tasweer-kahani/more/ed-img-20201216-165631-552.jpg", alt: "Solitude — A quiet pause before the evening rush" },
      { path: "tasweer-kahani/more/img-20200626-115345-367-01.jpg", alt: "Urban Texture — Patterns in everyday architecture" },
      { path: "tasweer-kahani/more/img-20200628-060544-069-01.jpeg", alt: "First Light (6:05 AM) — The calm of early Fajr morning" },
      { path: "tasweer-kahani/more/img-20200809-181805-258-01.jpg", alt: "August Rain — Wet pavements and diffused golden light" },
      { path: "tasweer-kahani/more/img-20200919-173643-832-01.jpg", alt: "Autumn Approach — Soft afternoon glow" },
      { path: "tasweer-kahani/more/img-20201203-113950-450-01.jpeg", alt: "Clear Skies — Crisp winter perspective" },
      { path: "tasweer-kahani/more/img-20201209-142249-937-01.jpeg", alt: "Afternoon Study — Light across quiet spaces" }
    ]
  }
];
