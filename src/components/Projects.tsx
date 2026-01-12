import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { AnimatedSection } from "./ui/motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Folder,
  Star,
  GitFork,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState, useRef, MouseEvent } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured?: boolean;
  stats?: { stars: number; forks: number };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Scholarship Platform",
    description:
      "A full-featured scholarship solution with React.js, Stripe payments, user authentication, and admin dashboard.",
    image:
      "https://i.ibb.co.com/qH4T9fg/Screenshot-From-2026-01-06-15-53-01.png",
    tags: ["React.js", "Javascript", "Stripe", "MongoDB"],
    liveUrl: "https://scholar-streams.netlify.app/",
    githubUrl: "https://github.com/devpolas/scholar-stream-client.git",
    category: "Full Stack",
    featured: true,
    stats: { stars: 128, forks: 34 },
  },
  {
    id: 3,
    title: "Scholarship Platform API",
    description:
      "RESTful API backend is built using Express.js with a clean middleware and routing architecture.Stripe payments, user authentication and authorization",
    image:
      "https://i.ibb.co.com/3mYycsgM/Screenshot-From-2026-01-06-16-38-42.png",
    tags: ["Express", "Stripe", "MongoDB", "JWT"],
    liveUrl: "https://scholar-stream-server-jade.vercel.app/",
    githubUrl: "https://github.com/devpolas/scholar-stream-server.git",
    category: "Backend",
    stats: { stars: 156, forks: 42 },
  },
  {
    id: 2,
    title: "Social Media Platform",
    description:
      "Real-time collaborative send request, receive request, delete request, unfriend, real world authentication and update personal info and password also",
    image:
      "https://i.ibb.co.com/qFj67ynK/Screenshot-From-2026-01-06-15-30-22.png",
    tags: ["React", "React router", "Typescript", "R Redux and R Query"],
    liveUrl: "https://study-mate-client-v2.netlify.app/",
    githubUrl: "https://github.com/devpolas/study-mate-client-v2.git",
    category: "Full Stack",
    featured: true,
    stats: { stars: 89, forks: 21 },
  },
  {
    id: 3,
    title: "Social Media API",
    description:
      "RESTful API backend for a social media platform with authentication, send, receive, delete requests and unfriend, and update profile.",
    image:
      "https://i.ibb.co.com/fzXCgPHt/Screenshot-From-2026-01-06-15-45-42.png",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://study-mate-api.onrender.com",
    githubUrl: "https://github.com/devpolas/study-mate-api-v2.git",
    category: "Backend",
    stats: { stars: 156, forks: 42 },
  },
  {
    id: 5,
    title: "Pet Care Service",
    description:
      "Modern Pet Care Service with smooth animations, responsive design, and contact form integration.",
    image:
      "https://i.ibb.co.com/Bkw9xLc/Screenshot-From-2026-01-06-16-27-11.png",
    tags: ["React", "Animate.css", "Tailwind CSS", "DaisyUI"],
    liveUrl: "https://warmpaws1.netlify.app",
    githubUrl: "https://github.com/devpolas/pet-service.git",
    category: "Frontend",
    stats: { stars: 234, forks: 67 },
  },
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

// 3D Card Component with mouse tracking
const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className='group perspective-1000 hoverable'
    >
      <div className='relative flex flex-col h-full overflow-hidden card-cyber'>
        {isHovered && (
          <motion.div
            className='z-20 absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent pointer-events-none'
            initial={{ y: "-100%" }}
            animate={{ y: "200%" }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}

        <div className='relative aspect-video overflow-hidden'>
          <motion.img
            src={project.image}
            alt={project.title}
            className='w-full h-full object-cover'
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          />

          <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80' />

          <motion.div
            className='absolute inset-0 flex justify-center items-center gap-4 bg-card/90 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <motion.a
              href={project.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-primary p-4 rounded-lg text-primary-foreground glow-neon'
            >
              <ExternalLink className='w-5 h-5' />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='bg-secondary p-4 border border-border rounded-lg text-foreground'
            >
              <Github className='w-5 h-5' />
            </motion.a>
          </motion.div>

          {project.featured && (
            <div className='top-4 left-4 z-10 absolute'>
              <span className='bg-gradient-accent px-3 py-1 rounded font-mono font-bold text-xs text-accent-foreground'>
                ★ Featured
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className='top-4 right-4 z-10 absolute'>
            <span className='bg-card/80 backdrop-blur-sm px-3 py-1 border border-border rounded font-mono text-xs'>
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className='z-10 relative flex flex-col flex-grow p-6'>
          <div className='flex justify-between items-start gap-2 mb-3'>
            <div className='flex items-center gap-2'>
              <Folder className='w-4 h-4 text-primary' />
              <h3 className='font-display font-bold group-hover:text-primary text-lg transition-colors'>
                {project.title}
              </h3>
            </div>
            <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0' />
          </div>

          <p className='flex-grow mb-4 font-body text-muted-foreground text-sm line-clamp-2'>
            {project.description}
          </p>

          {/* Tags */}
          <div className='flex flex-wrap gap-2 mb-4'>
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className='bg-secondary/50 px-2 py-1 border border-border/50 rounded font-mono text-muted-foreground text-xs'
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className='px-2 py-1 font-mono text-muted-foreground text-xs'>
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Stats */}
          {project.stats && (
            <div className='flex items-center gap-4 pt-4 border-border border-t'>
              <span className='flex items-center gap-1 text-muted-foreground text-xs'>
                <Star className='w-3 h-3 text-yellow-500' />
                {project.stats.stars}
              </span>
              <span className='flex items-center gap-1 text-muted-foreground text-xs'>
                <GitFork className='w-3 h-3 text-primary' />
                {project.stats.forks}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id='projects' className='relative py-24 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-dark' />
      <div className='absolute inset-0 grid-pattern' />
      <div className='top-1/4 right-0 absolute bg-primary/5 blur-[150px] rounded-full w-[500px] h-[500px]' />
      <div className='bottom-1/4 left-0 absolute bg-accent/5 blur-[120px] rounded-full w-[400px] h-[400px]' />

      <div className='z-10 relative mx-auto px-4 container'>
        {/* Section Header */}
        <AnimatedSection className='mb-16 text-center'>
          <span className='inline-flex items-center gap-2 mb-4 font-mono text-primary text-sm uppercase tracking-widest'>
            <span className='bg-primary w-8 h-px' />
            My Work
            <span className='bg-primary w-8 h-px' />
          </span>
          <h2 className='mb-6 font-display font-bold text-3xl md:text-4xl lg:text-5xl'>
            Featured <span className='text-gradient'>Projects</span>
          </h2>
          <p className='mx-auto max-w-2xl font-body text-muted-foreground text-lg'>
            A collection of projects showcasing my expertise in modern web
            development, from concept to deployment.
          </p>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection
          delay={0.1}
          className='flex flex-wrap justify-center gap-2 mb-12'
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-lg font-mono text-sm transition-all hoverable ${
                activeCategory === category
                  ? "bg-gradient-primary text-primary-foreground glow-neon"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div layout className='gap-6 grid md:grid-cols-2 lg:grid-cols-3'>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View More */}
        <AnimatedSection delay={0.4} className='mt-12 text-center'>
          <Button
            variant='outline'
            size='lg'
            className='group gap-2 hover:bg-primary/10 border-primary/50 hover:border-primary font-display hoverable'
          >
            <Github className='w-5 h-5' />
            View All on GitHub
            <ArrowUpRight className='w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1' />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};
