import { Github, Linkedin, Mail, Terminal, Coffee, ChevronRight, GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building scalable systems...';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto w-full min-h-screen flex items-center px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Terminal-style Header */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-md backdrop-blur-sm">
              <Terminal className="w-4 h-4 text-[#f89820]" />
              <span className="text-sm text-slate-400 font-mono">~/portfolio</span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-emerald-400 font-mono">main</span>
            </div>

            {/* Name with Java-style comment */}
            <div className="space-y-2">
              <div className="font-mono text-sm text-slate-500">
                <span className="text-slate-600">/**</span>
              </div>
              <div className="font-mono text-sm text-slate-500 pl-1">
                <span className="text-slate-600">* @author</span> <span className="text-[#f89820]">Yash Namdeo</span>
              </div>
              <div className="font-mono text-sm text-slate-500 pl-1">
                <span className="text-slate-600">* @role</span> Full Stack Developer
              </div>
              <div className="font-mono text-sm text-slate-500">
                <span className="text-slate-600">*/</span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl">
                <span className="text-slate-300">Yash</span>{' '}
                <span className="bg-gradient-to-r from-[#f89820] via-[#e37d24] to-[#5382a1] bg-clip-text text-transparent">
                  Namdeo
                </span>
              </h1>

              <div className="space-y-4">
                {/* Code-style role definition */}
                <div className="font-mono text-lg">
                  <span className="text-[#5382a1]">public class</span>{' '}
                  <span className="text-[#f89820]">Developer</span>{' '}
                  <span className="text-slate-500">{'{'}</span>
                </div>
                <div className="font-mono text-base pl-8 space-y-2">
                  <div>
                    <span className="text-slate-500">@Specialization</span>
                  </div>
                  <div>
                    <span className="text-[#5382a1]">private</span>{' '}
                    <span className="text-slate-300">String[] stack = {'{'}</span>
                  </div>
                  <div className="pl-8 text-emerald-400">
                    "Next.js", "MongoDB", "Express", "React", "Node.js",
                  </div>
                  <div className="pl-8 text-[#f89820]">
                    "Spring Boot", "Java", "Microservices"
                  </div>
                  <div>
                    <span className="text-slate-300">{'}'}</span>
                    <span className="text-slate-500">;</span>
                  </div>
                </div>
                <div className="font-mono text-lg">
                  <span className="text-slate-500">{'}'}</span>
                </div>
              </div>

              {/* Terminal Output */}
              <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs text-slate-600 font-mono ml-2">terminal</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">$</span>
                    <span className="text-slate-400">./run portfolio.sh</span>
                  </div>
                  <div className="text-[#f89820] flex items-center gap-2">
                    <Coffee className="w-4 h-4" />
                    <span>{typedText}<span className="animate-pulse">|</span></span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button 
                  onClick={() => onNavigate('projects')}
                  className="group px-6 py-3 bg-gradient-to-r from-[#f89820] to-[#e37d24] hover:from-[#e37d24] hover:to-[#f89820] rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#f89820]/20 flex items-center gap-2"
                >
                  <span>View Projects</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="https://drive.google.com/file/d/1k2Vsf86c8Ym9BPj42J5Y0_OgjDOMQJNJ/view?usp=sharing">
                  <button className="px-6 py-3 bg-slate-900/50 hover:bg-slate-800/50 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-300 backdrop-blur-sm">
                    Download Resume
                  </button>
                </a>
                
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/dev-yash05" 
                  className="group p-2.5 bg-slate-900/30 hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/yash-namdeo/" 
                  className="group p-2.5 bg-slate-900/30 hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-[#0077b5]" />
                </a>
                <a 
                  href="mailto:yashnamdeo754@gmail.com" 
                  className="group p-2.5 bg-slate-900/30 hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-[#f89820]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Code Editor Visual */}
          <div className="hidden lg:block">
            <div className="bg-slate-950/50 border border-slate-800 rounded-lg overflow-hidden backdrop-blur-sm shadow-2xl">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-sm text-slate-400 font-mono">DeveloperController.java</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm space-y-1 overflow-x-auto">
                <div className="text-slate-600">1  <span className="text-[#5382a1]">@RestController</span></div>
                <div className="text-slate-600">2  <span className="text-[#5382a1]">@RequestMapping</span><span className="text-slate-400">(</span><span className="text-emerald-400">"/api/v1"</span><span className="text-slate-400">)</span></div>
                <div className="text-slate-600">3  <span className="text-[#5382a1]">public class</span> <span className="text-[#f89820]">DeveloperController</span> <span className="text-slate-400">{'{'}</span></div>
                <div className="text-slate-600">4  </div>
                <div className="text-slate-600">5      <span className="text-[#5382a1]">@Autowired</span></div>
                <div className="text-slate-600">6      <span className="text-[#5382a1]">private</span> <span className="text-[#f89820]">SkillsService</span> <span className="text-slate-300">skillsService</span><span className="text-slate-400">;</span></div>
                <div className="text-slate-600">7  </div>
                <div className="text-slate-600">8      <span className="text-[#5382a1]">@GetMapping</span><span className="text-slate-400">(</span><span className="text-emerald-400">"/expertise"</span><span className="text-slate-400">)</span></div>
                <div className="text-slate-600">9      <span className="text-[#5382a1]">public</span> <span className="text-[#f89820]">ResponseEntity</span><span className="text-slate-400">{'<'}</span><span className="text-[#f89820]">List</span><span className="text-slate-400">{'<'}</span><span className="text-[#f89820]">String</span><span className="text-slate-400">{'>>'}</span> getExpertise<span className="text-slate-400">() {'{'}</span></div>
                <div className="text-slate-600">10         <span className="text-[#5382a1]">return</span> <span className="text-slate-300">ResponseEntity</span><span className="text-slate-400">.</span><span className="text-yellow-400">ok</span><span className="text-slate-400">(</span></div>
                <div className="text-slate-600">11             <span className="text-slate-300">List</span><span className="text-slate-400">.</span><span className="text-yellow-400">of</span><span className="text-slate-400">(</span></div>
                <div className="text-slate-600 bg-slate-900/50">12                 <span className="text-emerald-400">"Full Stack Development"</span><span className="text-slate-400">,</span></div>
                <div className="text-slate-600">13                 <span className="text-emerald-400">"RESTful APIs"</span><span className="text-slate-400">,</span></div>
                <div className="text-slate-600">14                 <span className="text-emerald-400">"Microservices Architecture"</span><span className="text-slate-400">,</span></div>
                <div className="text-slate-600">15                 <span className="text-emerald-400">"Cloud Deployment"</span></div>
                <div className="text-slate-600">16             <span className="text-slate-400">)</span></div>
                <div className="text-slate-600">17         <span className="text-slate-400">);</span></div>
                <div className="text-slate-600">18     <span className="text-slate-400">{'}'}</span></div>
                <div className="text-slate-600">19 <span className="text-slate-400">{'}'}</span></div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl text-[#f89820] mb-1">15+</div>
                <div className="text-xs text-slate-400">Projects</div>
              </div>
              <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl text-emerald-400 mb-1">8+</div>
                <div className="text-xs text-slate-400">Tech Stack</div>
              </div>
              <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl text-[#5382a1] mb-1">3+</div>
                <div className="text-xs text-slate-400">Years Exp</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Additional Sections */}
      <div className="max-w-7xl mx-auto w-full space-y-20 pb-20 px-6 pt-10">

        {/* Education Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-[#f89820]" />
            <h2 className="text-2xl">
              <span className="text-slate-500 font-mono text-lg">// </span>
              Education
            </h2>
          </div>

          <div className="space-y-4">
            {/* B.Tech */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-6 backdrop-blur-sm hover:border-[#f89820]/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl text-slate-100 mb-1">Bachelor of Technology - Computer Science</h3>
                    <div className="font-mono text-sm text-[#f89820]">B.Tech (CS)</div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Expected 2027</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-emerald-400 font-mono">Currently Pursuing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 12th */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-6 backdrop-blur-sm hover:border-[#5382a1]/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl text-slate-100 mb-1">Higher Secondary Education</h3>
                    <div className="font-mono text-sm text-[#5382a1]">Class 12th - PCM (Physics, Chemistry, Mathematics)</div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>St. Mary's Convent School</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Sagar, Madhya Pradesh</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-md">
                    <span className="text-sm text-slate-400 font-mono">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        {/* <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-[#5382a1]" />
            <h2 className="text-2xl">
              <span className="text-slate-500 font-mono text-lg">// </span>
              Experience
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-6 backdrop-blur-sm hover:border-[#f89820]/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-xl text-slate-100 mb-1">Full Stack Java Developer</h3>
                    <div className="font-mono text-sm text-[#f89820]">Internship</div>
                  </div>
                  
                  <div className="text-lg text-slate-300">Lanos IT Solutions</div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>6 Months</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-emerald-400 font-mono">Currently Working</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="font-mono text-sm text-slate-500 mb-2">// Key Responsibilities & Achievements</div>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-[#f89820] mt-1 flex-shrink-0" />
                    <span>Developing full-stack applications using MERN stack and Spring Boot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-[#f89820] mt-1 flex-shrink-0" />
                    <span>Building RESTful APIs and microservices architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-[#f89820] mt-1 flex-shrink-0" />
                    <span>Collaborating with cross-functional teams in agile environment</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800">
                <div className="font-mono text-sm text-slate-500 mb-3">// Tech Stack Used</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#f89820]/10 border border-[#f89820]/20 rounded-md text-sm text-[#f89820] font-mono">Java</span>
                  <span className="px-3 py-1 bg-[#5382a1]/10 border border-[#5382a1]/20 rounded-md text-sm text-[#5382a1] font-mono">Spring Boot</span>
                  <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-sm text-emerald-400 font-mono">MongoDB</span>
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-sm text-blue-400 font-mono">React</span>
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-md text-sm text-green-400 font-mono">Node.js</span>
                  <span className="px-3 py-1 bg-slate-700/30 border border-blue-500/20 rounded-md text-sm text-slate-300 font-mono">Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </section> */}

      </div>
    </>
  );
}
