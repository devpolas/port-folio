import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { MatrixRain } from "@/components/MatrixRain";

const Index = () => {
  return (
    <div className='bg-background min-h-screen overflow-x-hidden text-foreground'>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Matrix Rain Background */}
      <MatrixRain opacity={0.03} />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className='z-10 relative'>
        <Hero />
        {/* <About /> */}
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
