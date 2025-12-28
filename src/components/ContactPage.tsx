import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yashnamdeo754@gmail.com",
      link: "mailto:yashnamdeo754@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sagar, Madhya Pradesh, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "dev-yash05",
      link: "https://github.com/dev-yash05",
      color: "hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "yash-namdeo",
      link: "https://www.linkedin.com/in/yash-namdeo/",
      color: "hover:text-[#0077b5]"
    },
    {
      icon: Twitter,
      label: "Twitter",
      username: "@yashnamdeo",
      link: "https://x.com/Yashnam78670710",
      color: "hover:text-[#1da1f2]"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-md backdrop-blur-sm mb-4">
            <Mail className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-slate-400 font-mono">@RequestMapping("/contact")</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-8 backdrop-blur-sm">
              <div className="mb-6">
                <div className="font-mono text-sm text-slate-500 mb-2">// Send me a message</div>
                <h2 className="text-2xl text-slate-200">Contact Form</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-400 mb-2 font-mono">
                    String name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#f89820]/50 transition-colors font-mono text-sm"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-slate-400 mb-2 font-mono">
                    String email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#f89820]/50 transition-colors font-mono text-sm"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-slate-400 mb-2 font-mono">
                    String subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#f89820]/50 transition-colors font-mono text-sm"
                    placeholder="Project Collaboration"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-slate-400 mb-2 font-mono">
                    String message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#f89820]/50 transition-colors resize-none font-mono text-sm"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-6 py-3 bg-gradient-to-r from-[#f89820] to-[#e37d24] hover:from-[#e37d24] hover:to-[#f89820] rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#f89820]/20 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-8 backdrop-blur-sm">
              <div className="mb-6">
                <div className="font-mono text-sm text-slate-500 mb-2">// Contact information</div>
                <h2 className="text-2xl text-slate-200">Reach Me At</h2>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.link}
                      className="group flex items-start gap-4 p-4 bg-slate-900/30 hover:bg-slate-900/50 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-300"
                    >
                      <div className="p-2 bg-[#5382a1]/10 border border-[#5382a1]/20 rounded-lg">
                        <Icon className="w-5 h-5 text-[#5382a1]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-500 mb-1">{item.label}</div>
                        <div className="text-slate-200 group-hover:text-[#f89820] transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-8 backdrop-blur-sm">
              <div className="mb-6">
                <div className="font-mono text-sm text-slate-500 mb-2">// Social media</div>
                <h2 className="text-2xl text-slate-200">Connect With Me</h2>
              </div>

              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.link}
                      className={`group flex items-center justify-between p-4 bg-slate-900/30 hover:bg-slate-900/50 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-300`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 text-slate-400 transition-colors ${social.color}`} />
                        <div>
                          <div className="text-slate-200">{social.label}</div>
                          <div className="text-sm text-slate-500 font-mono">{social.username}</div>
                        </div>
                      </div>
                      <div className="text-slate-600 group-hover:text-slate-400 transition-colors">→</div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="text-emerald-400 mb-1">Available for Opportunities</div>
                  <div className="text-sm text-slate-400">
                    Open to internships, freelance projects, and collaborations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Comment */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm text-slate-600">
            // Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
}
