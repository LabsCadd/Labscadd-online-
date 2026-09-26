import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Courses from "@/components/sections/Courses";
import Portfolio from "@/components/sections/Portfolio";
import Stats from "@/components/sections/Stats";
import EnrollModal from "@/components/ui/EnrollModal";
import LegalModal from "@/components/ui/LegalModal";
import DemoModal from "@/components/ui/DemoModal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-dark text-white font-poppins selection:bg-green/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Portfolio />
      <Stats />
      <Footer />
      <EnrollModal />
      <LegalModal />
      <DemoModal />
      <WhatsAppButton />
    </main>
  );
}
