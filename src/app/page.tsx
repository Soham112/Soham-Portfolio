import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card } from "@/components/Card";
import { ClientImage } from "@/components/ClientImage";
import { 
  MapPin, 
  Mail, 
  ExternalLink,
  BrainCircuit,
  Database,
  Sparkles,
  Phone
} from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "24"}
      height={props.size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "24"}
      height={props.size || "24"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-28 max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <div className="relative mb-8 group">
          <div className="absolute inset-0 rounded-full shadow-[0_0_0_4px_rgba(180,160,140,0.15)] group-hover:shadow-[0_0_0_6px_rgba(180,160,140,0.25)] transition-shadow duration-300"></div>
          <Image 
            src="/profile.png" 
            alt="Soham Patil Profile" 
            width={120} 
            height={120}
            className="rounded-full object-cover w-[120px] h-[120px]"
            priority
          />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl text-charcoal font-bold tracking-tight mb-4">
          SOHAM PATIL
        </h1>
        
        <p className="text-lg md:text-xl text-charcoal-light font-medium mb-4">
          Data Scientist | ML Engineer | Production ML · MLOps · Generative AI (LLMs, RAG)
        </p>
        
        <div className="flex items-center gap-2 text-sage mb-12">
          <MapPin size={18} />
          <span>Dallas, TX, USA · Hybrid / Remote Ready</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          {[{
            stat: "10M+", label: "Records Processed", desc: "ML Pipeline Scale"
          }, {
            stat: "4x", label: "Revenue Growth", desc: "Data Product Impact"
          }, {
            stat: "60K", label: "Verified Contacts", desc: "Lead Acquisition"
          }].map((s, i) => (
            <div key={i} className="bg-warm-sand/50 rounded-xl p-6 shadow-sm border border-warm-sand flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
              <span className="font-serif text-3xl font-bold text-charcoal mb-1">{s.stat}</span>
              <span className="text-sm font-bold text-charcoal">{s.label}</span>
              <span className="text-xs text-charcoal-light mt-1">{s.desc}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2">
            <a href="/Soham%20Patil%202026.pdf" target="_blank" rel="noreferrer" className="px-8 py-3 bg-charcoal text-white rounded-full font-medium hover:bg-sage transition-colors duration-300 shadow-warm flex items-center gap-2">
              View Resume <ExternalLink size={18} />
            </a>
            <a href="https://github.com/Soham112" target="_blank" rel="noreferrer" className="p-3 bg-white text-charcoal border border-warm-sand rounded-full hover:bg-sage hover:text-white hover:border-sage transition-colors duration-300 shadow-sm flex items-center justify-center">
              <GithubIcon size={20} />
            </a>
          </div>
          <a href="#experience" className="px-8 py-3 bg-white text-charcoal rounded-full font-medium border border-warm-sand hover:bg-warm-cream transition-colors duration-300 shadow-sm">
            Experience
          </a>
          <a href="#contact" className="px-8 py-3 bg-white text-charcoal rounded-full font-medium border border-warm-sand hover:bg-warm-cream transition-colors duration-300 shadow-sm">
            Contact
          </a>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-4xl mx-auto border-t border-warm-sand/50"></div>

      {/* CURRENTLY WORKING ON */}
      <SectionWrapper id="working-on">
        <Card className="w-full !bg-warm-cream border-l-4 border-sage !rounded-xl relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <h2 className="font-serif text-2xl text-charcoal font-bold">What I&apos;m Working On</h2>
            <div className="flex items-center gap-2 text-sage text-sm font-semibold bg-sage/10 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-sage"></span>
              Live
            </div>
          </div>
          
          <div className="text-charcoal-light text-lg space-y-4 mb-6 leading-relaxed">
            <p>
              Finishing my Master&apos;s in Information Technology &amp; Management at UT Dallas (May 2026).
            </p>
            <p>Currently building two projects:</p>
            <ul className="space-y-3 ms-2">
              <li className="flex gap-2">
                <span className="text-sage font-bold">→</span>
                <span>
                  <strong className="text-charcoal font-medium">Contendo</strong> — a personal AI content generation system using LangGraph, ChromaDB, and Claude Sonnet that turns a personal knowledge base into publishable content.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage font-bold">→</span>
                <span>
                  <strong className="text-charcoal font-medium">Text-to-SQL LLM Application</strong> — a natural language to SQL system using OpenAI, Databricks, and AWS that lets users query databases in plain English with built-in SQL validation, guardrails, error handling, and a self-correction loop.
                </span>
              </li>
            </ul>
            <p className="pt-2">
              Open to full-time Data Scientist, ML Engineer, and AI Engineer roles starting May 2026. Based in Dallas, TX — open to hybrid and remote.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 bg-sage text-white text-sm font-medium rounded-full shadow-sm">
              Available May 2026
            </span>
            <span className="px-4 py-1.5 bg-warm-sand text-charcoal text-sm font-medium rounded-full border border-warm-sand shadow-sm">
              Open to Hybrid &amp; Remote
            </span>
            <span className="px-4 py-1.5 bg-[#C4845A] text-white text-sm font-medium rounded-full shadow-sm">
              Actively Building
            </span>
          </div>
        </Card>
      </SectionWrapper>

      {/* DIVIDER */}
      <div className="max-w-4xl mx-auto border-t border-warm-sand/50"></div>

      {/* SUMMARY */}
      <SectionWrapper id="summary">
        <h2 className="font-serif text-3xl text-charcoal font-bold mb-8 text-center md:text-left">Summary</h2>
        <p className="text-lg leading-relaxed text-charcoal-light mb-12">
          Data Scientist with 3+ years of experience building and deploying production ML pipelines and GenAI systems. 
          Improved data attribute fill rates from 60% to 100% across 10M+ records, enabling 4x revenue growth. Delivered 
          propensity models and scoring pipelines at enterprise scale for 100+ clients. Currently specializing in production-grade 
          RAG pipelines, agentic AI systems, and LLM applications using Python, Databricks, Spark, and AWS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card delay={0.1}>
            <BrainCircuit className="text-sage w-8 h-8 mb-4 border border-sage/20 rounded-lg p-1 bg-sage/5" />
            <h3 className="font-bold text-lg mb-2">Machine Learning</h3>
            <p className="text-sm text-charcoal-light">Classification, propensity modeling, anomaly detection, feature engineering at scale.</p>
          </Card>
          <Card delay={0.2}>
            <Database className="text-sage w-8 h-8 mb-4 border border-sage/20 rounded-lg p-1 bg-sage/5" />
            <h3 className="font-bold text-lg mb-2">MLOps &amp; Data Eng</h3>
            <p className="text-sm text-charcoal-light">Databricks, MLflow, AWS, event-driven pipelines, production deployment.</p>
          </Card>
          <Card delay={0.3}>
            <Sparkles className="text-sage w-8 h-8 mb-4 border border-sage/20 rounded-lg p-1 bg-sage/5" />
            <h3 className="font-bold text-lg mb-2">Generative AI</h3>
            <p className="text-sm text-charcoal-light">RAG, LangGraph, LangChain, agentic AI systems, LLM applications.</p>
          </Card>
        </div>
      </SectionWrapper>

      {/* DIVIDER */}
      <div className="max-w-4xl mx-auto border-t border-warm-sand/50"></div>

      {/* EXPERIENCE */}
      <SectionWrapper id="experience">
        <h2 className="font-serif text-3xl text-charcoal font-bold mb-4">Experience</h2>
        <p className="text-charcoal-light mb-12 text-lg">
          Data Science and ML Engineering experience across Data Axle in both US and India, delivering production ML systems and GenAI solutions.
        </p>

        <div className="space-y-8">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 rounded-bl-full -z-10"></div>
            <div className="flex justify-between items-start flex-col sm:flex-row mb-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-charcoal">Data Science Intern (AI/ML)</h3>
                <p className="text-sage font-medium text-lg">Data Axle</p>
              </div>
              <div className="text-right sm:text-right mt-2 sm:mt-0">
                <p className="text-charcoal-light">Dallas, Texas</p>
                <p className="text-charcoal-light text-sm font-medium">May 2025 – Aug 2025</p>
              </div>
            </div>
            <ul className="space-y-3 list-disc list-inside text-charcoal-light leading-relaxed">
              <li>Architected a 4-stage production pipeline on Databricks + S3 — async web crawling via crawl4ai and Playwright, lxml-based article extraction, BERT-NER pre-filtering and LLaMA 3.3 70B contact extraction, and Bing API + Jaro-Winkler fuzzy verification — processing 120K+ articles to deliver 60K verified executive contacts at &lt;$0.01/contact.</li>
              <li>Engineered fault-tolerant daily runs using Spark parallel partitioning, Hydra config management, S3 checkpointing, and Databricks Workflow orchestration — achieving 60%+ verification precision on C-suite contacts, matching and exceeding rates previously achieved by the manual tele-research team.</li>
            </ul>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-warm-cream rounded-bl-full -z-10"></div>
            <div className="flex justify-between items-start flex-col sm:flex-row mb-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-charcoal">Data Scientist</h3>
                <p className="text-sage font-medium text-lg">Data Axle</p>
              </div>
              <div className="text-right sm:text-right mt-2 sm:mt-0">
                <p className="text-charcoal-light">Pune, India</p>
                <p className="text-charcoal-light text-sm font-medium">Jul 2022 – Jun 2024</p>
              </div>
            </div>
            <ul className="space-y-3 list-disc list-outside ml-4 text-charcoal-light leading-relaxed">
              <li>Built LightGBM and Random Forest classification models on Databricks — reducing 400+ raw attributes to 15-20 high-signal features using multi-stage feature selection, SMOTE for class imbalance, and Bayesian hyperparameter optimization.</li>
              <li>Validated models using SHAP feature importance analysis and deployed via AWS batch inference — improving data attribute fill rates from 60% to 100% and enabling 4x revenue growth.</li>
              <li>Developed a reusable Neural Network propensity modelling pipeline on Databricks for 100+ non-profit clients — automating feature selection, hyperparameter tuning, and inference to deliver ranked donor prospect lists across 156M consumer households per campaign cycle.</li>
              <li>Engineered an event-driven Databricks Jobs system to replace an 8-hour manual pipeline — S3 file-arrival triggers, Delta table timestamp tracking, dynamic date configuration via Python, dependency chaining, and email alerting on failure — eliminating manual intervention entirely.</li>
              <li>Deployed models via Databricks Asset Bundles, AWS (S3, Lambda, batch inference), and MLflow model registry with scheduled retraining, anomaly detection, and drift monitoring — maintaining 95%+ uptime.</li>
              <li>Mentored a team of 5 in ML and Databricks workflows, transitioning model development fully in-house and eliminating $30K+ in annual external vendor costs.</li>
            </ul>
          </Card>
        </div>
      </SectionWrapper>

      {/* DIVIDER */}
      <div className="max-w-4xl mx-auto border-t border-warm-sand/50"></div>

      {/* PROJECTS */}
      <SectionWrapper id="projects">
        <h2 className="font-serif text-3xl text-charcoal font-bold mb-4">Projects</h2>
        <p className="text-charcoal-light mb-12 text-lg">
          Production GenAI systems, multi-agent platforms, and agentic AI tools demonstrating expertise in LLMs, RAG, and MLOps.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[ 
            {
              title: "Contendo — AI Content Generation System",
              tags: ["Generative AI", "LangGraph", "RAG", "Next.js", "FastAPI"],
              desc: "Full-stack GenAI platform with a LangGraph multi-node pipeline — semantic retrieval via ChromaDB, Claude Sonnet drafting, humanizer node, and 5-dimension quality scorer — converting a personal knowledge base (articles, PDFs, YouTube, Obsidian) into publishable content with agentic ideation workflows.",
              link: "https://github.com/Soham112/Contendo"
            },
            {
              title: "Multi-Agent GTM Research Platform",
              tags: ["Multi-Agent", "RAG", "LLMs", "Vector Search"],
              desc: "Multi-agent LLM system with task orchestration and tool-based agents synthesizing insights from 5K+ news articles into 200+ GTM briefs — API-first RAG pipeline with vector search, enforced citations, and structured JSON output.",
              link: "https://github.com/Soham112/GPT-NEWSPAPER"
            },
            {
              title: "RAG-Based AI Career Assistant",
              award: "🏆 Hackathon Winner",
              tags: ["AWS Bedrock", "RAG", "Agentic AI"],
              desc: "Agentic career assistant on AWS Bedrock with RAG over resumes, job data, and course catalogs — won hackathon by Datacolor.ai & Altcloud.ai for end-to-end agent design, scalability, and real-world usability.",
              link: "https://github.com/Soham112/NexAI"
            }
          ].map((proj, i) => (
            <Card key={i} className="flex flex-col h-full" delay={i * 0.1}>
              <h3 className="font-bold text-xl mb-2 min-h-[3rem] line-clamp-2">{proj.title}</h3>
              {proj.award && <p className="text-sage text-sm font-bold mb-3">{proj.award}</p>}
              
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag, j) => (
                  <span key={j} className="text-xs font-semibold px-2 py-1 bg-warm-cream rounded-full text-charcoal/80">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-charcoal-light text-sm mb-6 flex-grow">{proj.desc}</p>
              
              <a 
                href={proj.link} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-charcoal font-semibold hover:text-sage transition-colors mt-auto w-max"
              >
                <GithubIcon size={18} />
                View on GitHub
              </a>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* DIVIDER */}
      <div className="max-w-4xl mx-auto border-t border-warm-sand/50"></div>

      {/* WHAT PEOPLE SAY */}
      <SectionWrapper id="testimonials">
        <h2 className="font-serif text-3xl text-charcoal font-bold mb-12">What People Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="!bg-warm-cream relative flex flex-col h-full border border-warm-sand/30">
            <div className="absolute top-2 left-4 text-warm-sand text-7xl font-serif opacity-40 select-none">&ldquo;</div>
            <div className="relative z-10 flex-grow">
              <p className="italic text-[17px] leading-relaxed text-charcoal-light mb-8 pt-4">
                &ldquo;Soham can comfortably adapt to different AI/ML solutions and is fully responsible for owning the end-to-end development. He developed many custom models to support our clients and owned delivery of foundational models regarding our data quality. As a mentor, he would onboard new team members and help them through their initial learning curve and continue to provide invaluable guidance thereafter. Soham would be a welcome addition to any team and would successfully contribute quickly to that organization&apos;s success.&rdquo;
              </p>
            </div>
            
            <div className="relative z-10 mt-auto border-t border-warm-sand/50 pt-4">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-bold text-charcoal font-serif text-lg">Michael Krueger</p>
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full inline-block" title="Verified on LinkedIn"></span>
              </div>
              <p className="text-sm text-charcoal-light/80 mb-2">Data Science Leader, Data Axle</p>
              <p className="text-xs text-charcoal-light italic mb-4">Michael managed Soham directly &middot; Feb 2026</p>
              <p className="text-xs text-sage font-bold uppercase tracking-widest">Via LinkedIn</p>
            </div>
          </Card>

          <Card className="!bg-warm-cream relative flex flex-col h-full border border-warm-sand/30">
            <div className="absolute top-2 left-4 text-warm-sand text-7xl font-serif opacity-40 select-none">&ldquo;</div>
            <div className="relative z-10 flex-grow">
              <p className="italic text-[17px] leading-relaxed text-charcoal-light mb-8 pt-4">
                &ldquo;Soham joined as a fresher and was reporting to me while working with Data Axle. With his sharp analytical skills and hunger to learn, he gathered complete knowledge of the process in 3 months. This enabled us to deliver our ML projects with high accuracy and also established great confidence within our stakeholders. Soham also took the initiative of grooming the freshers within the team and bringing them up to speed.&rdquo;
              </p>
            </div>
            
            <div className="relative z-10 mt-auto border-t border-warm-sand/50 pt-4">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-bold text-charcoal font-serif text-lg">Aditya Narayan</p>
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full inline-block" title="Verified on LinkedIn"></span>
              </div>
              <p className="text-sm text-charcoal-light/80 mb-2">Data Science Manager | ML Engineer &amp; Innovator, Data Axle</p>
              <p className="text-xs text-charcoal-light italic mb-4">Aditya managed Soham directly &middot; May 2019</p>
              <p className="text-xs text-sage font-bold uppercase tracking-widest">Via LinkedIn</p>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* DIVIDER */}
      <div className="max-w-4xl mx-auto border-t border-warm-sand/50"></div>

      {/* SKILLS */}
      <SectionWrapper id="skills">
        <h2 className="font-serif text-3xl text-charcoal font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Programming",
              skills: ["Python (Pandas, NumPy, PySpark)", "SQL", "R"]
            },
            {
              title: "ML & Deep Learning",
              skills: ["LightGBM", "XGBoost", "Neural Networks", "LSTMs", "Isolation Forest", "SMOTE", "SHAP", "Anomaly Detection", "A/B Testing"]
            },
            {
              title: "GenAI & NLP",
              skills: ["LLMs", "RAG", "LangChain", "LangGraph", "Prompt Engineering", "Agentic AI Systems", "AWS Bedrock", "LLaMA", "ChromaDB", "Vector Search", "Embeddings"]
            },
            {
              title: "MLOps, Cloud & Vis",
              skills: ["MLflow", "Databricks", "Apache Spark", "Airflow", "Docker", "AWS (S3, Lambda, Batch Inference)", "CI/CD", "Tableau", "Plotly"]
            }
          ].map((cat, i) => (
            <div key={i}>
              <h3 className="font-bold text-lg mb-4 text-charcoal border-b border-warm-sand/50 pb-2">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="px-3 py-1.5 bg-white border border-warm-sand rounded-lg text-sm font-medium text-charcoal-light shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* DIVIDER */}
      <div className="max-w-4xl mx-auto border-t border-warm-sand/50"></div>

      {/* ACHIEVEMENTS */}
      <SectionWrapper id="achievements">
        <h2 className="font-serif text-3xl text-charcoal font-bold mb-4">Achievements / Beyond Work</h2>
        <p className="text-charcoal-light mb-12 text-lg">
          Competing at the national and intercollegiate level in badminton — discipline, performance under pressure, and representing my university.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              medal: "🥇",
              title: "Gold Medal — TIBA Tournament, Austin TX",
              org: "Texas Intercollegiate Badminton Association · Feb 2025 (2024-2025)",
              uni: "The University of Texas at Dallas",
              desc: "Won Gold at the TIBA Tournament in Austin, Texas representing UTD — qualifying for the USA Nationals (Eastern Collegiate Badminton Championship). Competed against top collegiate players from across Texas.",
              image: "/tiba_austin.jpg",
              tag: "Intercollegiate",
              isPortrait: true
            },
            {
              medal: "🥉",
              title: "3rd Place — TIBA Tournament, Houston TX",
              org: "Texas Intercollegiate Badminton Association · Nov 2025 (2025-2026)",
              uni: "The University of Texas at Dallas",
              desc: "Secured 3rd place at the TIBA Tournament in Houston, Texas representing UTD — qualifying for the USA Nationals (Eastern Collegiate Badminton Championship). Competed against top collegiate badminton players from across Texas.",
              image: "/tiba_houston.jpg",
              tag: "Intercollegiate",
              isPortrait: true
            },
            {
              medal: "🥉",
              title: "National Bronze Medal",
              org: "Khelo India University Games · Sports Authority of India (SAI) · Mar 2022",
              uni: "Savitribai Phule Pune University",
              desc: "Achieved a Bronze Medal at the prestigious Khelo India University Games held in Bangalore, competing at the national level against university athletes from across India.",
              image: "/khelo_india.png",
              tag: "National Level",
              isPortrait: true
            },
            {
              medal: "🥈",
              title: "National Silver Medal",
              org: "All India Inter Zonal University Badminton Championships · AIU · Feb 2022",
              uni: "Savitribai Phule Pune University",
              desc: "Secured a Silver Medal at the All India Inter Zonal University Badminton Championships held in Chandigarh, representing Savitribai Phule Pune University.",
              image: "/aiu_silver.png",
              tag: "National Level",
              isPortrait: true
            }
          ].map((ach, i) => (
            <Card key={i} delay={i * 0.1} className="flex flex-col relative !p-0 min-h-[520px]">
              <div className="w-full h-[280px] relative">
                <span className="absolute top-4 left-4 z-10 bg-white shadow-sm p-1.5 rounded-full text-xl leading-none">
                  {ach.medal}
                </span>
                <ClientImage 
                  src={ach.image} 
                  alt={ach.title} 
                  className={`w-full h-full transition-transform duration-300 hover:scale-105 object-top ${ach.isPortrait ? "object-contain bg-warm-sand" : "object-cover"}`}
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[rgba(245,240,232,0.3)] to-transparent pointer-events-none z-10" />
              </div>
              
              <div className="p-5 flex flex-col flex-grow bg-white rounded-b-2xl">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-warm-sand/50 rounded-full text-charcoal/80 border border-warm-sand">
                    {ach.tag}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-charcoal mb-1">{ach.title}</h3>
                <p className="text-sage text-sm font-semibold mb-1">{ach.org}</p>
                <p className="text-charcoal-light text-sm font-medium mb-4">{ach.uni}</p>
                <p className="text-charcoal-light text-sm leading-relaxed mt-auto">{ach.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* DIVIDER */}
      <div className="max-w-4xl mx-auto border-t border-warm-sand/50"></div>

      {/* PUBLICATIONS */}
      <SectionWrapper id="publications">
        <h2 className="font-serif text-3xl text-charcoal font-bold mb-4">Publications</h2>
        <p className="text-charcoal-light mb-12 text-lg">Academic research and peer-reviewed contributions.</p>

        <Card bgWhite={false} className="border border-warm-sand/50 relative">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">A High-Accuracy Deep Learning Approach for Wheat Disease Detection</h3>
              <p className="text-sage font-medium mb-4">Published in: Springer · Artificial Intelligence and Applications</p>
              <p className="text-charcoal-light leading-relaxed">
                Researched and implemented advanced deep learning architectures for early plant disease detection, focusing on model accuracy and robustness in agricultural settings.
              </p>
            </div>
            <div className="min-w-max pt-2">
              <a 
                href="https://link.springer.com/chapter/10.1007/978-981-97-1320-2_23" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal rounded-full font-medium hover:bg-sage hover:text-white transition-colors border border-warm-sand/50 shadow-sm"
              >
                View Publication <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </Card>
      </SectionWrapper>

      {/* DIVIDER */}
      <div className="max-w-4xl mx-auto border-t border-warm-sand/50"></div>

      {/* CERTIFICATIONS */}
      <SectionWrapper id="certifications">
        <h2 className="font-serif text-3xl text-charcoal font-bold mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "AWS Certified Machine Learning – Associate",
            "Snowflake SnowPro Core Certification",
            "Databricks Generative AI Fundamentals",
            "Databricks Lakehouse Fundamentals"
          ].map((cert, i) => (
            <div key={i} className="bg-warm-sand/30 p-4 rounded-xl border border-warm-sand/50 flex items-center font-medium text-charcoal hover:-translate-y-0.5 transition-transform shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sage mr-3"></span>
              {cert}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* DIVIDER */}
      <div className="max-w-4xl mx-auto border-t border-warm-sand/50"></div>

      {/* EDUCATION */}
      <SectionWrapper id="education">
        <h2 className="font-serif text-3xl text-charcoal font-bold mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-serif text-xl font-bold mb-1 line-clamp-1">M.S. Information Technology &amp; Mgmt</h3>
            <p className="text-sage font-medium mb-3">GPA 3.9/4.0</p>
            <p className="text-charcoal-light font-medium mb-1">UT Dallas | Dallas, TX</p>
            <p className="text-sm text-charcoal-light/70 mb-4">Aug 2024 – May 2026</p>
            <p className="text-sm text-charcoal-light leading-relaxed">
              <span className="font-semibold text-charcoal">Coursework:</span> Advanced Statistics, Big Data, Applied ML, Database Management, AI in Business
            </p>
          </Card>
          
          <Card>
            <h3 className="font-serif text-xl font-bold mb-1">B.Tech Computer Engineering</h3>
            <p className="text-sage font-medium mb-3">GPA 3.78/4.0</p>
            <p className="text-charcoal-light font-medium mb-1">Savitribai Phule Pune University | Pune, India</p>
            <p className="text-sm text-charcoal-light/70 mb-4">Jun 2018 – Jun 2022</p>
            <p className="text-sm text-charcoal-light leading-relaxed">
              <span className="font-semibold text-charcoal">Coursework:</span> Data Mining, Data Analysis, AI, System Design
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* CONTACT FOOTER */}
      <footer id="contact" className="bg-warm-cream py-16 border-t border-warm-sand">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          <div className="mb-4 md:mb-0">
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">Let&apos;s Connect</h2>
            <p className="text-charcoal-light max-w-md">Open to new opportunities in Data Science, Machine Learning Engineering, and GenAI development.</p>
          </div>

          <div className="flex flex-col gap-3 font-medium text-charcoal-light">
            <a href="mailto:patilsohham@gmail.com" className="flex items-center justify-center md:justify-start gap-3 hover:text-sage transition-colors">
              <Mail size={18} /> patilsohham@gmail.com
            </a>
            <span className="flex items-center justify-center md:justify-start gap-3">
              <Phone size={18} /> +1 (945) 544-0767
            </span>
            <span className="flex items-center justify-center md:justify-start gap-3">
              <MapPin size={18} /> Dallas, TX
            </span>
            <div className="flex justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-warm-sand items-center">
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-charcoal hover:text-sage transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://github.com/Soham112" target="_blank" rel="noreferrer" className="text-charcoal hover:text-sage transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md">
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
