import { notFound } from "next/navigation";
import { LOCATIONS, COURSES, SITE_URL } from "@/lib/seo-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnrollModal from "@/components/ui/EnrollModal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LocationPageContent from "@/components/sections/LocationPageContent";

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (!location) return {};
  const cityName = location.label || location.name;
  return {
    title: `Virtual CAD & BIM Training in ${cityName}`,
    description: `LABS CADD provides 100% live interactive virtual CAD and BIM training for students and professionals in ${cityName}, Tamil Nadu. Learn Revit Architecture, Revit MEP, AutoCAD, 3ds Max, and BIM workflows.`,
    alternates: { canonical: `${SITE_URL}/locations/${slug}` },
    openGraph: {
      title: `Virtual CAD & BIM Training in ${cityName} | LABS CADD`,
      description: `100% live virtual CAD and BIM courses available for students and professionals in ${cityName}, Tamil Nadu.`,
      url: `${SITE_URL}/locations/${slug}`,
      images: [{ url: `${SITE_URL}/images/hero.png`, width: 1200, height: 630, alt: `Virtual CAD & BIM training in ${cityName} by LABS CADD` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Virtual CAD & BIM Training in ${cityName} | LABS CADD`,
      description: `Live interactive virtual CAD and BIM courses for learners in ${cityName}, Tamil Nadu.`,
    },
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (!location) notFound();

  const cityName = location.label || location.name;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Courses", item: `${SITE_URL}/courses` },
      { "@type": "ListItem", position: 3, name: `${cityName} Virtual Training`, item: `${SITE_URL}/locations/${slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Are the courses available in virtual mode for students in ${cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. All LABS CADD courses are delivered 100% in live interactive virtual mode for students in ${cityName} and throughout Tamil Nadu. You participate via live video sessions with real-time screen sharing and hands-on guidance.`,
        },
      },
      {
        "@type": "Question",
        name: `How do live online interactive sessions work?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Sessions are held live with professional instructors. You share your screen, work through real CAD drawings and 3D BIM models, ask questions in real time, and receive personalized feedback.`,
        },
      },
      {
        "@type": "Question",
        name: `Which virtual CAD or BIM course should I start with?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `If you need a drafting foundation, AutoCAD 2D & 3D is the recommended starting point. For architects and civil engineers aiming for BIM careers, Revit Architecture or the BIM Professional Program is the ideal choice.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-navy-dark text-white font-poppins">
        <Navbar />
        <LocationPageContent location={location} cityName={cityName} courses={COURSES} />
        <Footer />
        <EnrollModal />
        <WhatsAppButton />
      </main>
    </>
  );
}
