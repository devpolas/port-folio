import { motion } from "framer-motion";
import { Terminal, Heart, ArrowUp, Zap } from "lucide-react";

const codeSnippet = `
// Thanks for visiting!
developer.sayGoodbye();
→ "Let's build something amazing!"
`;

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-border relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Logo & Tagline */}
            <div className="space-y-4">
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="flex items-center gap-3 group hoverable"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center glow-neon">
                    <Terminal className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <span className="text-xl font-display font-bold text-gradient">POLA</span>
                  <p className="text-xs font-mono text-muted-foreground">&lt;Full Stack Developer /&gt;</p>
                </div>
              </motion.a>
              
              <p className="text-sm text-muted-foreground font-body max-w-xs">
                Crafting digital experiences with code, creativity, and a passion for innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono link-cyber hoverable"
                    whileHover={{ x: 4 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Code Snippet */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary">
                Status
              </h4>
              <div className="card-cyber p-4">
                <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap">
                  {codeSnippet}
                </pre>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-destructive fill-destructive" />
              </motion.div>
              <span>&</span>
              <Zap className="w-4 h-4 text-primary" />
              <span>by Pola © {new Date().getFullYear()}</span>
            </div>

            {/* Version */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-muted-foreground px-3 py-1 rounded bg-secondary">
                v1.0.0
              </span>
              
              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg glass glow-neon hoverable"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-primary" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};