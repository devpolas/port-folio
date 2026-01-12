import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/motion";
import { Calendar, MapPin, Briefcase, GraduationCap, Code2, Rocket, Award } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience", icon: Calendar },
  { value: "50+", label: "Projects Completed", icon: Rocket },
  { value: "30+", label: "Happy Clients", icon: Award },
  { value: "100%", label: "Success Rate", icon: Code2 },
];

const timeline = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    company: "Freelance",
    description: "Leading full-stack development projects for international clients",
    icon: Briefcase,
    current: true,
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Tech Startup",
    description: "Built scalable web applications using React and Node.js",
    icon: Briefcase,
  },
  {
    year: "2021",
    title: "Frontend Developer",
    company: "Digital Agency",
    description: "Developed responsive UIs and improved performance by 40%",
    icon: Briefcase,
  },
  {
    year: "2020",
    title: "Computer Science Degree",
    company: "University",
    description: "Bachelor's degree with focus on software engineering",
    icon: GraduationCap,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hex-pattern opacity-30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-primary" />
            Who Am I
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            About{" "}
            <span className="text-gradient">The Developer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body">
            A passionate code architect transforming complex problems into
            elegant digital solutions.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <AnimatedSection delay={0.1}>
              <div className="card-cyber p-8 relative">
                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-accent/50 rounded-br-lg" />
                
                <div className="flex items-start gap-6 mb-6 relative">
                  {/* Avatar */}
                  <motion.div 
                    className="relative shrink-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-24 h-24 rounded-lg bg-gradient-primary p-[2px] glow-neon">
                      <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                        <span className="text-4xl font-display font-bold text-gradient">P</span>
                      </div>
                    </div>
                    <motion.div 
                      className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-xs">✓</span>
                    </motion.div>
                  </motion.div>
                  
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-1">Pola</h3>
                    <p className="text-primary font-mono text-sm mb-3">Full Stack Developer</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-accent" />
                        Remote Worldwide
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-highlight" />
                        3+ Years
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                  <p>
                    I'm a <span className="text-foreground font-semibold">full-stack developer</span> who 
                    bridges the gap between design and technology. With expertise spanning from 
                    <span className="text-primary"> pixel-perfect frontends</span> to 
                    <span className="text-accent"> robust backend systems</span>, I bring ideas to life 
                    through clean, efficient code.
                  </p>
                  <p>
                    My tech arsenal includes <span className="text-highlight">React</span>, 
                    <span className="text-highlight"> Next.js</span>, 
                    <span className="text-highlight"> TypeScript</span>, 
                    <span className="text-highlight"> Node.js</span>, 
                    <span className="text-highlight"> PostgreSQL</span>, and 
                    <span className="text-highlight"> MongoDB</span>. I'm committed to writing 
                    maintainable, scalable code that stands the test of time.
                  </p>
                </div>

                {/* Terminal-style footer */}
                <div className="mt-6 pt-6 border-t border-border">
                  <code className="text-xs text-muted-foreground font-mono">
                    <span className="text-primary">const</span> motto = 
                    <span className="text-accent"> "Code with purpose, build with passion"</span>;
                  </code>
                </div>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="card-cyber p-6 text-center group hoverable"
                  >
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:animate-pulse" />
                    <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Timeline */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                Experience & Education
              </h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * index }}
                    className="relative pl-14 pb-8 last:pb-0 group"
                  >
                    {/* Timeline Node */}
                    <motion.div 
                      className={`absolute left-0 top-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                        item.current 
                          ? "bg-gradient-primary glow-neon" 
                          : "bg-card border border-border"
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <item.icon className={`w-4 h-4 ${
                        item.current ? "text-primary-foreground" : "text-primary"
                      }`} />
                    </motion.div>

                    {/* Content Card */}
                    <div className="card-cyber p-6 group-hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary">
                          {item.year}
                        </span>
                        {item.current && (
                          <span className="text-xs font-mono px-2 py-1 rounded bg-accent/10 text-accent">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="font-display font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-primary font-mono mb-2">
                        @ {item.company}
                      </p>
                      <p className="text-sm text-muted-foreground font-body">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};