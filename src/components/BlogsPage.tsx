import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "Building Microservices with Spring Boot",
      excerpt: "Learn how to architect and build scalable microservices using Spring Boot, including service discovery, API gateway patterns, and inter-service communication.",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      category: "Spring Boot",
      tags: ["Java", "Microservices", "Spring Boot", "Architecture"]
    },
    {
      id: 2,
      title: "MERN Stack Authentication with JWT",
      excerpt: "A comprehensive guide to implementing secure authentication in MERN applications using JSON Web Tokens, refresh tokens, and HTTP-only cookies.",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      category: "MERN Stack",
      tags: ["MongoDB", "Express", "React", "Node.js", "JWT"]
    },
    {
      id: 3,
      title: "Optimizing React Performance",
      excerpt: "Deep dive into React performance optimization techniques including memoization, code splitting, lazy loading, and virtual scrolling.",
      date: "Nov 28, 2024",
      readTime: "6 min read",
      category: "React",
      tags: ["React", "Performance", "Optimization"]
    },
    {
      id: 4,
      title: "Docker & Kubernetes for Java Developers",
      excerpt: "Complete guide to containerizing Spring Boot applications and orchestrating them with Kubernetes for production deployments.",
      date: "Nov 20, 2024",
      readTime: "12 min read",
      category: "DevOps",
      tags: ["Docker", "Kubernetes", "Spring Boot", "DevOps"]
    },
    {
      id: 5,
      title: "Database Design Best Practices",
      excerpt: "Essential principles for designing efficient database schemas, normalization, indexing strategies, and query optimization techniques.",
      date: "Nov 15, 2024",
      readTime: "7 min read",
      category: "Database",
      tags: ["SQL", "Database Design", "PostgreSQL", "MongoDB"]
    },
    {
      id: 6,
      title: "RESTful API Design Principles",
      excerpt: "Master the art of designing clean, maintainable RESTful APIs with proper resource naming, HTTP methods, status codes, and versioning.",
      date: "Nov 8, 2024",
      readTime: "9 min read",
      category: "API Design",
      tags: ["REST", "API", "Best Practices"]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-md backdrop-blur-sm mb-4">
            <BookOpen className="w-4 h-4 text-[#5382a1]" />
            <span className="text-sm text-slate-400 font-mono">@Component("BlogService")</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              Tech Blog
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Sharing insights, tutorials, and learnings from my journey in full-stack development
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12 bg-slate-950/50 border border-slate-800 rounded-lg overflow-hidden backdrop-blur-sm hover:border-[#f89820]/50 transition-all duration-300">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#f89820]/10 border border-[#f89820]/20 rounded-md text-sm text-[#f89820] font-mono">
                Featured
              </span>
              <span className="text-sm text-slate-500">{blogs[0].category}</span>
            </div>
            
            <h2 className="text-3xl text-slate-100 mb-4">{blogs[0].title}</h2>
            <p className="text-slate-400 mb-6 text-lg">
              {blogs[0].excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogs[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogs[0].readTime}</span>
                </div>
              </div>

              <button className="group flex items-center gap-2 px-4 py-2 bg-[#f89820]/10 hover:bg-[#f89820]/20 border border-[#f89820]/20 rounded-lg transition-all duration-300">
                <span className="text-sm text-[#f89820]">Read More</span>
                <ArrowRight className="w-4 h-4 text-[#f89820] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800">
              {blogs[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-slate-900/50 border border-slate-800 rounded text-xs text-slate-400 font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="space-y-6">
          {blogs.slice(1).map((blog) => (
            <div
              key={blog.id}
              className="group bg-slate-950/50 border border-slate-800 rounded-lg p-6 backdrop-blur-sm hover:border-[#5382a1]/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-[#5382a1] font-mono">{blog.category}</span>
                    <span className="text-slate-700">•</span>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-3 h-3" />
                      <span>{blog.date}</span>
                    </div>
                    <span className="text-slate-700">•</span>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl text-slate-100 mb-3 group-hover:text-[#f89820] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-slate-400 mb-4">
                    {blog.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-900/50 border border-slate-800 rounded text-xs text-slate-400 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="group/btn flex items-center gap-2 px-4 py-2 bg-slate-900/50 hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-300 self-start">
                  <span className="text-sm text-slate-400">Read</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-slate-600">
            // Stay tuned for more technical content...
          </p>
        </div>
      </div>
    </div>
  );
}
