import Link from "next/link";
import { COURSES, SITE_URL } from "@/lib/seo-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnrollModal from "@/components/ui/EnrollModal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

export const metadata = {
  title: "CAD & BIM Courses in Tamil Nadu",
  description:
    "Explore all CAD and BIM training courses at LABS CADD — Revit Architecture, Revit MEP, AutoCAD, 3ds Max, SketchUp, Lumion, Blender, SolidWorks, and Fusion 360. Enrol today.",
  alternates: { canonical: `${SITE_URL}/courses` },
  openGraph: {
    title: "CAD & BIM Courses | LABS CADD Tamil Nadu",
    description:
      "Explore all CAD and BIM training courses at LABS CADD — Revit Architecture, Revit MEP, AutoCAD, 3ds Max, SketchUp, Lumion, and more.",
    url: `${SITE_URL}/courses`,
    images: [{ url: `${SITE_URL}/images/hero.png`, width: 1200, height: 630, alt: "LABS CADD Courses" }],
  },
};

const coursesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CAD & BIM Training Courses at LABS CADD",
  url: `${SITE_URL}/courses`,
  itemListElement: COURSES.map((course, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}/courses/${course.slug}`,
    name: course.title,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Courses", item: `${SITE_URL}/courses` },
  ],
};

export default function CoursesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen bg-navy-dark text-white font-poppins">
        <Navbar />

        {/* Hero */}
        <section className="pt-36 pb-16 bg-navy-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-green transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-medium">Courses</span>
            </nav>
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-4">
              CAD &amp; BIM{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-green-light">
                Training Courses
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              Industry-aligned CAD and BIM training programs for civil engineering students, architecture graduates, mechanical engineers, and working professionals across Tamil Nadu. All courses are taught by industry practitioners with real-world project experience.
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 bg-navy">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COURSES.map((course) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="glass-card p-8 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-green/30 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-green/30 transition-colors">
                      <BookOpen className="w-7 h-7 text-green" />
                    </div>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-gray-300">
                      {course.level}
                    </span>
                  </div>
                  <h2 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-green transition-colors">
                    {course.title}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <Clock className="w-4 h-4 text-green" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {course.metaDescription}
                  </p>
                  <div className="mb-6">
                    <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">Software Covered</div>
                    <div className="flex flex-wrap gap-2">
                      {course.software.map((sw) => (
                        <span key={sw} className="bg-navy-dark text-gray-300 text-xs px-2.5 py-1 rounded border border-white/5">
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green font-medium text-sm mt-auto">
                    View Course <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
    </>
  );
}
