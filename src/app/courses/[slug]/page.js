import { notFound } from "next/navigation";
import Link from "next/link";
import { COURSES, SITE_URL } from "@/lib/seo-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnrollModal from "@/components/ui/EnrollModal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CoursePageContent from "@/components/sections/CoursePageContent";

/** Generate static params for all courses at build time */
export async function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

/** Per-course dynamic metadata */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: course.metaTitle,
    description: course.metaDescription,
    alternates: { canonical: `${SITE_URL}/courses/${slug}` },
    openGraph: {
      title: course.metaTitle,
      description: course.metaDescription,
      url: `${SITE_URL}/courses/${slug}`,
      images: [{ url: `${SITE_URL}/images/hero.png`, width: 1200, height: 630, alt: `${course.title} at LABS CADD` }],
    },
    twitter: {
      card: "summary_large_image",
      title: course.metaTitle,
      description: course.metaDescription,
    },
  };
}

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) notFound();

  const courseIndex = COURSES.findIndex((c) => c.slug === slug);
  const relatedCourses = COURSES.filter((_, i) => i !== courseIndex).slice(0, 3);

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.metaDescription,
    url: `${SITE_URL}/courses/${slug}`,
    provider: {
      "@type": "EducationalOrganization",
      name: "LABS CADD",
      url: SITE_URL,
    },
    educationalLevel: course.level,
    about: course.software.map((sw) => ({ "@type": "Thing", name: sw })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Courses", item: `${SITE_URL}/courses` },
      { "@type": "ListItem", position: 3, name: course.title, item: `${SITE_URL}/courses/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen bg-navy-dark text-white font-poppins">
        <Navbar />
        <CoursePageContent course={course} relatedCourses={relatedCourses} />
        <Footer />
        <EnrollModal />
        <WhatsAppButton />
      </main>
    </>
  );
}
