import Hero from "@/components/Hero";
import ImpactGallery from "@/components/ImpactGallery";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Hero />
      <Timeline />
      <ImpactGallery />
      <Skills />
      <Education />
      <Chatbot />

      <footer className="w-full py-8 text-center text-muted-foreground text-sm border-t border-border mt-12 bg-card/50">
        <p>© {new Date().getFullYear()} Ajay Singh Rana. Built with Next.js & Vibe Coding.</p>
      </footer>
    </main>
  );
}
