import { ExternalLink, Github, Code2 } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
    id: 1,
    title: "Lanos Beta Platform — Integrated EdTech & IT Solutions",
    description:
      "Developed a high-performance, multi-tenant web application using Next.js 16 and React. Implemented high-fidelity UI components and fluid animations using Tailwind CSS and GSAP. Optimized site SEO and performance through Server-Side Rendering (SSR), achieving superior Core Web Vitals.",
    tech: [
      "Next.js 16",
      "React",
      "Tailwind CSS",
      "GSAP",
      "SSR",
    ],
    github: "#",
    live: "https://lanos-beta.vercel.app/",
    status: "completed",
  },
    {
    id: 2,
    title: "Samriddhi Travels Indore — Travel Booking Portal",
    description:
      "Digitized local agency operations, managing 30+ itineraries via a responsive Next.js frontend. Boosted page speeds by 40% and lead capture by 25% through optimized SEO and custom forms.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "SEO",
    ],
    github: "#",
    live: "https://samriddhitravelsindore.vercel.app/",
    status: "completed",
  },
  {
    id: 3,
    title: "Forever – Full-Stack E-Commerce Platform",
    description:
      "A production-grade e-commerce application built using the MERN stack, featuring user authentication, product catalog, cart & checkout flow, order management, and admin controls.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/dev-yash05/E-Commerce-Forever-frontend",
    live: "https://e-commerce-forever-frontend-coral.vercel.app/",
    status: "completed",
  },
  {
    id: 4,
    title: "Quick-AI – AI SaaS Platform",
    description:
      "An AI-powered SaaS application using Google Gemini API that provides custom AI tools including article generation, blog title creation, resume review, image generation, and background removal.",
    tech: [
      "React.js",
      "Node.js",
      "Gemini API",
      "MongoDB",
      "Clerk",
      "Cloudinary",
      "Tailwind CSS",
    ],
    github: "https://github.com/dev-yash05/QuickAI",
    live: "https://quick-ai-zeta-hazel.vercel.app/",
    status: "completed",
  },
  {
    id: 5,
    title: "SuperMarketWala – Scalable E-Commerce Backend",
    description:
      "A backend-heavy Spring Boot application designed with modular monolith architecture, handling product catalog, inventory management, cart-to-order flow, payments, and admin operations.",
    tech: [
      "Spring Boot",
      "PostgreSQL",
      "JPA",
      "Flyway",
      "Elasticsearch",
      "Razorpay",
    ],
    github: "#",
    live: "#",
    status: "upcoming",
  },
];


  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-md backdrop-blur-sm mb-4">
            <Code2 className="w-4 h-4 text-[#f89820]" />
            <span className="text-sm text-slate-400 font-mono">public class Projects {'{ }'}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            A collection of my recent work showcasing full-stack development with MERN and Spring Boot
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-950/50 border border-slate-800 rounded-lg p-6 backdrop-blur-sm hover:border-[#f89820]/50 transition-all duration-300 flex flex-col"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-[#f89820]/10 border border-[#f89820]/20 rounded-lg">
                  <Code2 className="w-5 h-5 text-[#f89820]" />
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="p-2 bg-slate-900/50 hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-slate-900/50 hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-300"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#f89820]" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <h3 className="text-xl text-slate-100 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3 mt-4 pt-4 border-t border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-900/50 border border-slate-800 rounded text-xs text-slate-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Status */}
                {project.status === 'completed' && (
                  <div className="inline-flex px-3 py-1 bg-emerald-950/40 border border-emerald-500/80 rounded text-xs text-emerald-300 font-mono font-semibold">
                    ✓ Completed
                  </div>
                )}
                {project.status === 'in-progress' && (
                  <div className="inline-flex px-3 py-1 bg-amber-950/40 border border-[#f89820]/80 rounded text-xs text-[#f89820] font-mono font-semibold animate-pulse">
                    ◉ In Progress
                  </div>
                )}
                {project.status === 'upcoming' && (
                  <div className="inline-flex px-3 py-1 bg-slate-800/40 border border-slate-500/80 rounded text-xs text-slate-300 font-mono font-semibold">
                    ◊ Upcoming
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Code Comment */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-slate-600">
            // More projects coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
