import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedSection } from "./ui/motion";
import { Layers, Server, Globe, Sparkles } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillNode {
  id: string;
  name: string;
  x: number;
  y: number;
  size: number;
  color: string;
  category: string;
}

const allSkills: Skill[] = [
  // Frontend
  { name: "React.js", level: 95, category: "frontend" },
  { name: "Next.js", level: 92, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Redux", level: 85, category: "frontend" },
  { name: "SASS/SCSS", level: 88, category: "frontend" },
  { name: "Framer Motion", level: 85, category: "frontend" },
  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express.js", level: 88, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "MongoDB", level: 82, category: "backend" },
  { name: "GraphQL", level: 80, category: "backend" },
  { name: "REST APIs", level: 92, category: "backend" },
  { name: "Firebase", level: 78, category: "backend" },
  // Tools
  { name: "Git", level: 92, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Vercel", level: 90, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
];

const categories = [
  { id: "all", name: "All Skills", icon: Sparkles, color: "primary" },
  { id: "frontend", name: "Frontend", icon: Layers, color: "highlight" },
  { id: "backend", name: "Backend", icon: Server, color: "accent" },
  { id: "tools", name: "Tools", icon: Globe, color: "primary" },
];

// Generate constellation positions
const generateNodes = (skills: Skill[]): SkillNode[] => {
  return skills.map((skill, i) => {
    const angle = (i / skills.length) * Math.PI * 2;
    const radius = 30 + (skill.level / 100) * 20;
    const x = 50 + Math.cos(angle) * radius + (Math.random() - 0.5) * 15;
    const y = 50 + Math.sin(angle) * radius + (Math.random() - 0.5) * 15;

    const colorMap: Record<string, string> = {
      frontend: "hsl(180, 100%, 50%)",
      backend: "hsl(320, 100%, 60%)",
      tools: "hsl(85, 100%, 50%)",
    };

    return {
      id: skill.name,
      name: skill.name,
      x: Math.max(10, Math.min(90, x)),
      y: Math.max(15, Math.min(85, y)),
      size: 4 + (skill.level / 100) * 8,
      color: colorMap[skill.category],
      category: skill.category,
    };
  });
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  const nodes = generateNodes(filteredSkills);

  // Generate connections between nearby nodes
  const connections: Array<{ from: SkillNode; to: SkillNode }> = [];
  nodes.forEach((node, i) => {
    nodes.slice(i + 1).forEach((otherNode) => {
      const distance = Math.sqrt(
        Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
      );
      if (distance < 25) {
        connections.push({ from: node, to: otherNode });
      }
    });
  });

  return (
    <section
      id='skills'
      ref={containerRef}
      className='relative py-24 overflow-hidden'
    >
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-dark' />
      <div className='top-1/3 left-0 absolute bg-accent/5 blur-[120px] rounded-full w-[400px] h-[400px]' />
      <div className='right-0 bottom-1/4 absolute bg-primary/5 blur-[150px] rounded-full w-[500px] h-[500px]' />

      <div className='z-10 relative mx-auto px-4 container'>
        {/* Section Header */}
        <AnimatedSection className='mb-16 text-center'>
          <span className='inline-flex items-center gap-2 mb-4 font-mono text-primary text-sm uppercase tracking-widest'>
            <span className='bg-primary w-8 h-px' />
            Technical Arsenal
            <span className='bg-primary w-8 h-px' />
          </span>
          <h2 className='mb-6 font-display font-bold text-3xl md:text-4xl lg:text-5xl'>
            My <span className='text-gradient'>Skill Constellation</span>
          </h2>
          <p className='mx-auto max-w-2xl font-body text-muted-foreground text-lg'>
            An interactive map of technologies I've mastered, from pixel-perfect
            frontends to robust backend systems.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection
          delay={0.1}
          className='flex flex-wrap justify-center gap-2 mb-12'
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all hoverable ${
                activeCategory === cat.id
                  ? "bg-gradient-primary text-primary-foreground glow-neon"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              <cat.icon className='w-4 h-4' />
              {cat.name}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Skill Constellation */}
        <AnimatedSection delay={0.2}>
          <div className='relative mx-auto p-8 min-h-[400px] max-h-[600px] aspect-[16/9] card-cyber'>
            {/* SVG Constellation */}
            <svg
              className='absolute inset-0 w-full h-full'
              viewBox='0 0 100 100'
              preserveAspectRatio='xMidYMid meet'
            >
              {/* Connection lines */}
              {isInView &&
                connections.map((conn, i) => (
                  <motion.line
                    key={i}
                    x1={conn.from.x}
                    y1={conn.from.y}
                    x2={conn.to.x}
                    y2={conn.to.y}
                    stroke='hsl(85, 100%, 50%)'
                    strokeWidth='0.1'
                    strokeOpacity={0.3}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                  />
                ))}

              {/* Skill nodes */}
              {isInView &&
                nodes.map((node, i) => (
                  <motion.g
                    key={node.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + i * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className='cursor-pointer'
                    onMouseEnter={() => setHoveredSkill(node.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Glow effect */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size * 1.5}
                      fill={node.color}
                      opacity={hoveredSkill === node.id ? 0.3 : 0.1}
                      animate={{
                        r:
                          hoveredSkill === node.id
                            ? node.size * 2
                            : node.size * 1.5,
                      }}
                    />

                    {/* Main node */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size / 2}
                      fill={node.color}
                      animate={{
                        r:
                          hoveredSkill === node.id
                            ? node.size * 0.7
                            : node.size / 2,
                      }}
                      style={{
                        filter:
                          hoveredSkill === node.id
                            ? `drop-shadow(0 0 10px ${node.color})`
                            : "none",
                      }}
                    />
                  </motion.g>
                ))}
            </svg>
            {/* Skill Labels */}
            {isInView &&
              nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity:
                      hoveredSkill === node.id || hoveredSkill === null
                        ? 1
                        : 0.3,
                    y: 0,
                    scale: hoveredSkill === node.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.03 }}
                  className='absolute font-mono text-xs transition-all pointer-events-none'
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, calc(-100% - 10px))",
                    color:
                      hoveredSkill === node.id
                        ? node.color
                        : "hsl(var(--muted-foreground))",
                    textShadow:
                      hoveredSkill === node.id
                        ? `0 0 10px ${node.color}`
                        : "none",
                  }}
                >
                  {node.name}
                </motion.div>
              ))}
            {/* Center decoration */}
            <div className='top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className='border border-primary/20 border-dashed rounded-full w-32 md:w-48 h-32 md:h-48'
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className='absolute inset-4 border border-accent/20 border-dashed rounded-full'
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Skill bars for mobile/accessibility */}
        <AnimatedSection
          delay={0.4}
          className='gap-6 grid md:grid-cols-2 lg:grid-cols-3 mt-16'
        >
          {categories.slice(1).map((cat, catIndex) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className='p-6 card-cyber'
            >
              <h3 className='flex items-center gap-2 mb-6 font-display font-bold text-lg'>
                <cat.icon className='w-5 h-5 text-primary' />
                {cat.name}
              </h3>

              <div className='space-y-4'>
                {allSkills
                  .filter((s) => s.category === cat.id)
                  .slice(0, 5)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <div className='flex justify-between items-center mb-2'>
                        <span className='font-mono text-sm'>{skill.name}</span>
                        <span className='font-mono text-primary text-xs'>
                          {skill.level}%
                        </span>
                      </div>
                      <div className='bg-secondary rounded-full h-1 overflow-hidden'>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 * index }}
                          className='bg-gradient-primary rounded-full h-full'
                          style={{
                            boxShadow: "0 0 10px hsl(85 100% 50% / 0.5)",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
