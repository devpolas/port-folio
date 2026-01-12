import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Download, Command } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "#home", key: "01" },
  // { name: "About", href: "#about", key: "02" },
  { name: "Skills", href: "#skills", key: "02" },
  { name: "Projects", href: "#projects", key: "03" },
  { name: "Contact", href: "#contact", key: "04" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className='flex justify-between items-center mx-auto px-4 container'>
        {/* Logo */}
        <motion.a
          href='#home'
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className='group flex items-center gap-3 hoverable'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className='relative'>
            <div className='flex justify-center items-center bg-gradient-primary rounded-lg w-10 h-10 glow-neon'>
              <Terminal className='w-5 h-5 text-primary-foreground' />
            </div>
            <motion.div
              className='absolute inset-0 bg-gradient-primary opacity-50 blur-md rounded-lg'
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className='flex flex-col'>
            <span className='font-display font-bold text-gradient text-lg'>
              POLAS
            </span>
            <span className='-mt-1 font-mono text-[10px] text-muted-foreground'>
              &lt;developer /&gt;
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-1'>
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`relative px-4 py-2 text-sm font-mono transition-colors hoverable ${
                activeSection === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className='mr-1 text-primary/50 text-xs'>{link.key}.</span>
              {link.name}
              {activeSection === link.href.replace("#", "") && (
                <motion.span
                  layoutId='activeNav'
                  className='right-0 bottom-0 left-0 absolute bg-gradient-primary rounded-full h-0.5'
                  style={{ boxShadow: "0 0 10px hsl(85 100% 50%)" }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div className='hidden md:flex items-center gap-4'>
          <div className='hidden lg:flex items-center gap-2 font-mono text-muted-foreground text-xs'>
            <Command className='w-3 h-3' />
            <span>+ K</span>
          </div>
          <a
            href='https://github.com/onlineservice24/resume/releases/download/untagged-69b05ef2a94b529cc02d/Polas.Software.Developer.Resume.pdf'
            download
          >
            <Button className='gap-2 bg-gradient-primary font-display font-bold text-primary-foreground glow-neon hoverable'>
              <Download className='w-4 h-4' />
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden p-2 text-foreground hoverable'
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden border-border border-t glass'
          >
            <div className='flex flex-col gap-2 mx-auto px-4 py-6 container'>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-3 p-3 rounded-lg font-mono transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <span className='text-primary text-sm'>{link.key}</span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
              <a
                href='https://github.com/onlineservice24/resume/releases/download/untagged-69b05ef2a94b529cc02d/Polas.Software.Developer.Resume.pdf'
                download
              >
                <Button className='gap-2 bg-gradient-primary mt-4 font-display font-bold text-primary-foreground glow-neon'>
                  <Download className='w-4 h-4' />
                  Resume
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
