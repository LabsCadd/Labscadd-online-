import Link from "next/link";
import { LOCATIONS, SITE_URL } from "@/lib/seo-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnrollModal from "@/components/ui/EnrollModal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Virtual CAD & BIM Training Across Tamil Nadu",
  description:
    "LABS CADD provides 100% live interactive virtual CAD and BIM training for students and professionals across Tamil Nadu — including Trichy, Chennai, Coimbatore, Madurai, Salem, and more cities.",
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: {
    title: "Virtual Training Locations | LABS CADD Tamil Nadu",
    description: "100% live interactive virtual CAD and BIM training available across Tamil Nadu.",
    url: `${SITE_URL}/locations`,
    images: [{ url: `${SITE_URL}/images/hero.png`, width: 1200, height: 630, alt: "LABS CADD virtual training in Tamil Nadu" }],
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-navy-dark text-white font-poppins">
      <Navbar />

      <section className="pt-36 pb-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-green transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Locations</span>
          </nav>
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-4">
            Virtual Training Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-green-light">
              Tamil Nadu
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-12 leading-relaxed">
            LABS CADD provides 100% live interactive virtual training in CAD, BIM, and 3D visualization. Students and working professionals from all cities across Tamil Nadu can join our live online batches from anywhere.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-green/30 hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-green shrink-0" />
                  <h2 className="font-montserrat font-bold text-white group-hover:text-green transition-colors">
                    {loc.label || loc.name}
                  </h2>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Live virtual CAD &amp; BIM training batches available for {loc.label || loc.name} learners.
                </p>
                <div className="flex items-center gap-1 text-green text-xs font-semibold uppercase tracking-wider">
                  View Virtual Batches <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <EnrollModal />
      <WhatsAppButton />
    </main>
  );
}
