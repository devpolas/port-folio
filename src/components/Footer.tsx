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
    <footer className='relative py-16 border-border border-t overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 grid-pattern opacity-50' />
      <div className='bottom-0 left-1/2 absolute bg-primary/5 blur-[100px] rounded-full w-[600px] h-[200px] -translate-x-1/2' />

      <div className='z-10 relative mx-auto px-4 container'>
        <div className='mx-auto max-w-6xl'>
          {/* Main Footer Content */}
          <div className='gap-8 grid md:grid-cols-3 mb-12'>
            {/* Logo & Tagline */}
            <div className='space-y-4'>
              <motion.a
                href='#home'
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className='group flex items-center gap-3 hoverable'
                whileHover={{ scale: 1.02 }}
              >
                <div className='relative'>
                  <div className='flex justify-center items-center bg-gradient-primary rounded-lg w-12 h-12 glow-neon'>
                    <Terminal className='w-6 h-6 text-primary-foreground' />
                  </div>
                </div>
                <div>
                  <span className='font-display font-bold text-gradient text-xl'>
                    POLAS
                  </span>
                  <p className='font-mono text-muted-foreground text-xs'>
                    &lt;Full Stack Developer /&gt;
                  </p>
                </div>
              </motion.a>

              <p className='max-w-xs font-body text-muted-foreground text-sm'>
                Crafting digital experiences with code, creativity, and a
                passion for innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div className='space-y-4'>
              <h4 className='font-display font-bold text-primary text-sm uppercase tracking-wider'>
                Quick Links
              </h4>
              <div className='gap-2 grid grid-cols-2'>
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (link) => (
                    <motion.a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(link.toLowerCase())
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className='font-mono text-muted-foreground hover:text-primary text-sm transition-colors link-cyber hoverable'
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  ),
                )}
              </div>
            </div>

            {/* Code Snippet */}
            <div className='space-y-4'>
              <h4 className='font-display font-bold text-primary text-sm uppercase tracking-wider'>
                Status
              </h4>
              <div className='p-4 card-cyber'>
                <pre className='font-mono text-muted-foreground text-xs whitespace-pre-wrap'>
                  {codeSnippet}
                </pre>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='flex md:flex-row flex-col justify-between items-center gap-4 pt-8 border-border border-t'>
            {/* Copyright */}
            <div className='flex items-center gap-2 font-mono text-muted-foreground text-sm'>
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className='fill-destructive w-4 h-4 text-destructive' />
              </motion.div>
              <span>&</span>
              <Zap className='w-4 h-4 text-primary' />
              <span>by Polas © {new Date().getFullYear()}</span>
            </div>

            {/* Version */}
            <div className='flex items-center gap-4'>
              <span className='bg-secondary px-3 py-1 rounded font-mono text-muted-foreground text-xs'>
                v1.0.0
              </span>

              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='p-3 rounded-lg glass glow-neon hoverable'
                aria-label='Scroll to top'
              >
                <ArrowUp className='w-5 h-5 text-primary' />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
