import { SITE_URL, SEO_CONFIG } from "@/lib/seo-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Courses from "@/components/sections/Courses";
import Portfolio from "@/components/sections/Portfolio";
import Stats from "@/components/sections/Stats";
import FAQ from "@/components/sections/FAQ";
import EnrollModal from "@/components/ui/EnrollModal";
import LegalModal from "@/components/ui/LegalModal";
import DemoModal from "@/components/ui/DemoModal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata = {
  title: "LABS CADD | CAD & BIM Training Institute in Tamil Nadu",
  description:
    "LABS CADD provides CAD, BIM, Revit, AutoCAD, 3D visualization and design software training for students, engineers, architects and professionals across Tamil Nadu.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "LABS CADD | CAD & BIM Training Institute in Tamil Nadu",
    description:
      "LABS CADD provides CAD, BIM, Revit, AutoCAD, 3D visualization and design software training for students, engineers, architects and professionals across Tamil Nadu.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/images/hero.png`,
        width: 1200,
        height: 630,
        alt: "LABS CADD — CAD & BIM Training Institute in Tamil Nadu",
      },
    ],
  },
};

/** Homepage-specific FAQ structured data for AI/GEO search */
const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is BIM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIM (Building Information Modelling) is a digital process that creates intelligent, data-rich 3D models of buildings. Unlike traditional CAD drawings, BIM models carry information about geometry, materials, quantities, scheduling, and performance — enabling engineers, architects, and contractors to collaborate more efficiently throughout a project's lifecycle.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between CAD and BIM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CAD (Computer-Aided Design) is primarily used to produce 2D drawings and 3D models, while BIM (Building Information Modelling) creates intelligent models that contain data about materials, costs, schedules, and structural properties. BIM enables multi-disciplinary collaboration across architects, civil engineers, and MEP teams in a shared model environment.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I learn Revit in Tamil Nadu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LABS CADD offers 100% live interactive virtual training in Revit Architecture and Revit MEP across Tamil Nadu. Students and engineering professionals from Chennai, Coimbatore, Trichy, Madurai, Salem, and other cities attend our live virtual batches with real-time screen sharing and direct mentor guidance.",
      },
    },
    {
      "@type": "Question",
      name: "Which BIM software should a civil engineer learn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Civil engineers looking to build a BIM career should start with Autodesk Revit for structural or architectural modelling, learn Navisworks for BIM coordination and clash detection, and also develop skills in AutoCAD for 2D documentation. LABS CADD's BIM Professional Program covers all of these tools.",
      },
    },
    {
      "@type": "Question",
      name: "How can I become a BIM Engineer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To become a BIM Engineer, you need to learn industry-standard BIM software such as Revit, Navisworks, and AutoCAD, understand BIM workflows and standards (ISO 19650), and build a portfolio of real BIM projects. LABS CADD offers a comprehensive BIM Professional Program designed specifically for this career path.",
      },
    },
    {
      "@type": "Question",
      name: "What software should an architecture student learn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Architecture students benefit from learning Revit Architecture for BIM modelling and documentation, SketchUp for conceptual 3D design, Lumion or V-Ray for photorealistic renders, and AutoCAD for construction drawings. LABS CADD offers targeted training in all of these tools.",
      },
    },
    {
      "@type": "Question",
      name: "What is Revit MEP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Revit MEP is Autodesk's BIM software specifically designed for Mechanical, Electrical, and Plumbing (MEP) engineering. It allows MEP engineers to design, document, and coordinate HVAC systems, electrical layouts, and plumbing networks within an integrated BIM environment.",
      },
    },
    {
      "@type": "Question",
      name: "What is clash detection in BIM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clash detection is the process of identifying conflicts between different building systems — such as a duct running through a structural beam — within a BIM model before construction begins. Tools like Navisworks are used for automated clash detection, saving time and reducing costly on-site errors.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Homepage FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <main
        className="min-h-screen bg-navy-dark text-white font-poppins selection:bg-green/30 selection:text-white"
      >
        <Navbar />
        <Hero />
        <About />
        <Courses />
        <Portfolio />
        <Stats />
        <FAQ />
        <Footer />
        <EnrollModal />
        <LegalModal />
        <DemoModal />
        <WhatsAppButton />
      </main>
    </>
  );
}
