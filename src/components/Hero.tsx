import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Terminal,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Zap,
  Code2,
  Database,
  Cpu,
} from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/devpolas", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lipcb",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://twitter.com/XTWPCB", label: "Twitter" },
  { icon: Mail, href: "mailto:dpi.polas@gmail.com", label: "Email" },
];

const codeLines = [
  { text: "const developer = {", delay: 0 },
  { text: '  name: "Pola",', delay: 0.5 },
  { text: '  role: "Full Stack Architect",', delay: 1 },
  { text: "  skills: [", delay: 1.5 },
  { text: '    "React", "Next.js", "TypeScript",', delay: 2 },
  { text: '    "Node.js", "PostgreSQL", "MongoDB"', delay: 2.5 },
  { text: "  ],", delay: 3 },
  { text: "  passion: true,", delay: 3.5 },
  { text: "  available: true", delay: 4 },
  { text: "};", delay: 4.5 },
];

const floatingIcons = [
  { icon: Code2, x: "10%", y: "20%", delay: 0 },
  { icon: Database, x: "85%", y: "30%", delay: 0.5 },
  { icon: Cpu, x: "15%", y: "70%", delay: 1 },
  { icon: Terminal, x: "80%", y: "75%", delay: 1.5 },
];

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Typing effect for the headline
  const fullText = "Building Digital Futures";
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id='home'
      ref={containerRef}
      className='relative flex justify-center items-center min-h-screen overflow-hidden'
    >
      {/* Background Layers */}
      <div className='absolute inset-0 bg-gradient-dark' />
      <div className='absolute inset-0 grid-pattern' />
      <div className='absolute inset-0 opacity-50 hex-pattern' />

      {/* Glow orbs */}
      <div className='top-1/4 left-1/4 absolute bg-primary/10 blur-[120px] rounded-full w-[500px] h-[500px] animate-float' />
      <div className='right-1/4 bottom-1/4 absolute bg-accent/10 blur-[100px] rounded-full w-[400px] h-[400px] animate-float-reverse' />
      <div className='top-1/2 left-1/2 absolute bg-highlight/5 blur-[150px] rounded-full w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2' />

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: item.delay + 1, duration: 0.5 }}
          className='hidden lg:block absolute'
          style={{ left: item.x, top: item.y }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className='p-4 border border-border/50 rounded-xl glass'
          >
            <item.icon className='w-8 h-8 text-primary/50' />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className='z-10 relative mx-auto px-4 container'
      >
        <div className='mx-auto max-w-6xl'>
          <div className='items-center gap-12 grid lg:grid-cols-2'>
            {/* Left Column - Text */}
            <div className='space-y-8'>
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm glass'>
                  <span className='relative flex w-2 h-2'>
                    <span className='inline-flex absolute bg-primary opacity-75 rounded-full w-full h-full animate-ping' />
                    <span className='inline-flex relative bg-primary rounded-full w-2 h-2' />
                  </span>
                  <span className='text-muted-foreground'>System Status:</span>
                  <span className='text-primary'>Available for hire</span>
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className='mb-4 font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]'>
                  <span className='block mb-4 font-mono font-normal text-muted-foreground text-lg md:text-xl'>
                    {"// Hello World, I'm"}
                  </span>
                  <span
                    className='inline-block text-gradient glitch'
                    data-text='POLA'
                  >
                    POLAS
                  </span>
                </h1>

                <div className='flex items-center gap-2 font-display text-2xl md:text-3xl lg:text-4xl'>
                  <Zap className='w-6 md:w-8 h-6 md:h-8 text-primary animate-pulse' />
                  <span className='text-foreground'>
                    {typedText}
                    <span
                      className={`inline-block w-[3px] h-[1em] ml-1 bg-primary ${
                        showCursor ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='max-w-xl font-body text-muted-foreground text-lg md:text-xl'
              >
                Full Stack Developer crafting{" "}
                <span className='font-semibold text-primary'>
                  high-performance
                </span>
                ,{" "}
                <span className='font-semibold text-accent'>pixel-perfect</span>{" "}
                web experiences with modern technologies.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='flex sm:flex-row flex-col items-start gap-4'
              >
                <Button
                  size='lg'
                  className='group relative bg-gradient-primary px-8 py-6 overflow-hidden font-display font-bold text-primary-foreground text-lg glow-neon hoverable'
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className='z-10 relative flex items-center gap-2'>
                    View My Work
                    <ChevronRight className='w-5 h-5 transition-transform group-hover:translate-x-1' />
                  </span>
                </Button>

                <Button
                  size='lg'
                  variant='outline'
                  className='group hover:bg-primary/10 px-8 py-6 border-primary/50 hover:border-primary font-display text-lg hoverable'
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className='flex items-center gap-2'>
                    <Terminal className='w-5 h-5' />
                    Get In Touch
                  </span>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='flex items-center gap-3 pt-4'
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className='p-3 border-glow rounded-lg glass hoverable'
                    aria-label={social.label}
                  >
                    <social.icon className='w-5 h-5 text-muted-foreground hover:text-primary transition-colors' />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='hidden lg:block'
            >
              <div className='relative terminal'>
                {/* Scan line effect */}
                <div className='absolute inset-0 rounded-lg overflow-hidden pointer-events-none'>
                  <div className='absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 animate-scan' />
                </div>

                {/* Terminal Header */}
                <div className='terminal-header'>
                  <div className='bg-destructive terminal-dot' />
                  <div className='bg-yellow-500 terminal-dot' />
                  <div className='bg-primary terminal-dot' />
                  <span className='ml-4 font-mono text-muted-foreground text-xs'>
                    pola@dev ~ /portfolio
                  </span>
                </div>

                {/* Terminal Body */}
                <div className='space-y-1 terminal-body'>
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: line.delay + 1, duration: 0.3 }}
                      className='text-sm'
                    >
                      <span className='text-muted-foreground'>{line.text}</span>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 6 }}
                    className='flex items-center gap-2 pt-4'
                  >
                    <span className='text-primary'>❯</span>
                    <span className='text-foreground'>developer.run()</span>
                    <span className='bg-primary w-2 h-4 animate-pulse' />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 7 }}
                    className='pt-2 text-primary'
                  >
                    → Ready to build something amazing! 🚀
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className='bottom-8 left-1/2 absolute -translate-x-1/2'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='flex flex-col items-center gap-2 cursor-pointer hoverable'
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className='font-mono text-muted-foreground text-xs uppercase tracking-widest'>
            Scroll to explore
          </span>
          <div className='flex justify-center items-start p-2 border-2 border-primary/50 rounded-full w-6 h-10'>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className='bg-primary rounded-full w-1 h-2'
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
