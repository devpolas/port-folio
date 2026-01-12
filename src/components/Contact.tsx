import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Terminal,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dpi.polas@gmail.com",
    href: "mailto:dpi.polas@gmail.com",
    color: "primary",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide",
    href: "#",
    color: "accent",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1732333951",
    href: "tel:+880 1732333951",
    color: "highlight",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/devpolas", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lipcb",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/XTWPCB", label: "Twitter" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message transmitted! 📡",
      description: "Thank you for reaching out. I'll respond within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id='contact' className='relative py-24 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-dark' />
      <div className='absolute inset-0 opacity-30 hex-pattern' />
      <div className='top-1/4 left-1/4 absolute bg-primary/5 blur-[120px] rounded-full w-[400px] h-[400px]' />
      <div className='right-1/4 bottom-1/4 absolute bg-accent/5 blur-[150px] rounded-full w-[500px] h-[500px]' />

      <div className='z-10 relative mx-auto px-4 container'>
        {/* Section Header */}
        <AnimatedSection className='mb-16 text-center'>
          <span className='inline-flex items-center gap-2 mb-4 font-mono text-primary text-sm uppercase tracking-widest'>
            <span className='bg-primary w-8 h-px' />
            Get In Touch
            <span className='bg-primary w-8 h-px' />
          </span>
          <h2 className='mb-6 font-display font-bold text-3xl md:text-4xl lg:text-5xl'>
            Let's <span className='text-gradient'>Connect</span>
          </h2>
          <p className='mx-auto max-w-2xl font-body text-muted-foreground text-lg'>
            Have a project in mind? Let's build something extraordinary
            together.
          </p>
        </AnimatedSection>

        <div className='items-start gap-12 grid lg:grid-cols-2 mx-auto max-w-6xl'>
          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <div className='space-y-8'>
              {/* Terminal Header */}
              <div className='p-6 card-cyber'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='flex justify-center items-center bg-gradient-primary rounded-lg w-10 h-10 glow-neon'>
                    <Terminal className='w-5 h-5 text-primary-foreground' />
                  </div>
                  <div>
                    <h3 className='font-display font-bold text-xl'>
                      Open to Opportunities
                    </h3>
                    <p className='font-mono text-muted-foreground text-sm'>
                      Status: Online 🟢
                    </p>
                  </div>
                </div>
                <p className='font-body text-muted-foreground'>
                  Whether you need a full website, web app, API, or just want to
                  discuss ideas—I'm always excited to connect with fellow
                  developers and potential clients.
                </p>
              </div>

              {/* Contact Cards */}
              <div className='space-y-4'>
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className='group flex items-center gap-4 p-4 rounded-lg card-cyber hoverable'
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                        item.color === "primary"
                          ? "bg-gradient-primary glow-neon"
                          : item.color === "accent"
                          ? "bg-gradient-accent glow-accent"
                          : "bg-gradient-cyber"
                      }`}
                    >
                      <item.icon className='w-5 h-5 text-primary-foreground' />
                    </div>
                    <div className='flex-grow'>
                      <p className='font-mono text-muted-foreground text-xs uppercase tracking-wider'>
                        {item.label}
                      </p>
                      <p className='font-display font-semibold group-hover:text-primary transition-colors'>
                        {item.value}
                      </p>
                    </div>
                    <ArrowRight className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1' />
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className='p-6 card-cyber'>
                <p className='mb-4 font-mono text-muted-foreground text-sm uppercase tracking-wider'>
                  Connect with me
                </p>
                <div className='flex gap-3'>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className='p-4 border-glow rounded-lg glass hoverable'
                    >
                      <social.icon className='w-5 h-5 text-muted-foreground hover:text-primary transition-colors' />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className='relative p-8 card-cyber'>
              {/* Form Header */}
              <div className='flex items-center gap-2 mb-6 pb-4 border-border border-b'>
                <div className='bg-destructive rounded-full w-3 h-3' />
                <div className='bg-yellow-500 rounded-full w-3 h-3' />
                <div className='bg-primary rounded-full w-3 h-3' />
                <span className='ml-4 font-mono text-muted-foreground text-xs'>
                  contact_form.tsx
                </span>
              </div>

              <div className='space-y-6'>
                <div className='gap-6 grid sm:grid-cols-2'>
                  <div className='space-y-2'>
                    <label className='flex items-center gap-2 font-mono text-muted-foreground text-xs uppercase tracking-wider'>
                      <span className='text-primary'>01.</span> Your Name
                    </label>
                    <div className='relative'>
                      <Input
                        placeholder='John Doe'
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`bg-secondary/50 border-border font-body transition-all ${
                          focusedField === "name"
                            ? "border-primary glow-neon"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label className='flex items-center gap-2 font-mono text-muted-foreground text-xs uppercase tracking-wider'>
                      <span className='text-primary'>02.</span> Your Email
                    </label>
                    <Input
                      type='email'
                      placeholder='john@example.com'
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`bg-secondary/50 border-border font-body transition-all ${
                        focusedField === "email"
                          ? "border-primary glow-neon"
                          : ""
                      }`}
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='flex items-center gap-2 font-mono text-muted-foreground text-xs uppercase tracking-wider'>
                    <span className='text-primary'>03.</span> Subject
                  </label>
                  <Input
                    placeholder='Project Inquiry'
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`bg-secondary/50 border-border font-body transition-all ${
                      focusedField === "subject"
                        ? "border-primary glow-neon"
                        : ""
                    }`}
                  />
                </div>

                <div className='space-y-2'>
                  <label className='flex items-center gap-2 font-mono text-muted-foreground text-xs uppercase tracking-wider'>
                    <span className='text-primary'>04.</span> Message
                  </label>
                  <Textarea
                    placeholder='Tell me about your project...'
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`bg-secondary/50 border-border font-body resize-none transition-all ${
                      focusedField === "message"
                        ? "border-primary glow-neon"
                        : ""
                    }`}
                  />
                </div>

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='group bg-gradient-primary py-6 w-full font-display font-bold text-primary-foreground text-lg glow-neon hoverable'
                >
                  {isSubmitting ? (
                    <span className='flex items-center gap-3'>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className='border-2 border-primary-foreground border-t-transparent rounded-full w-5 h-5'
                      />
                      Transmitting...
                    </span>
                  ) : (
                    <span className='flex items-center gap-3'>
                      <Zap className='w-5 h-5' />
                      Send Message
                      <Send className='w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1' />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
