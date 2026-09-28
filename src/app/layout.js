import "./globals.css";
import { SEO_CONFIG, SITE_URL } from "@/lib/seo-config";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LABS CADD | CAD & BIM Training Institute in Tamil Nadu",
    template: "%s | LABS CADD",
  },
  description:
    "LABS CADD provides CAD, BIM, Revit, AutoCAD, 3D visualization and design software training for students, engineers, architects and professionals across Tamil Nadu.",
  keywords: [
    "CAD training Tamil Nadu",
    "BIM training Tamil Nadu",
    "Revit course Tamil Nadu",
    "AutoCAD course Tamil Nadu",
    "BIM institute Tamil Nadu",
    "Revit Architecture training",
    "Revit MEP training",
    "3ds Max course Tamil Nadu",
    "SketchUp Lumion training",
    "architectural visualization course",
    "civil engineering software training",
    "LABS CADD",
    "CAD course Trichy",
  ],
  authors: [{ name: "LABS CADD", url: SITE_URL }],
  creator: "LABS CADD",
  publisher: "LABS CADD",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SEO_CONFIG.siteName,
    title: "LABS CADD | CAD & BIM Training Institute in Tamil Nadu",
    description:
      "LABS CADD provides CAD, BIM, Revit, AutoCAD, 3D visualization and design software training for students, engineers, architects and professionals across Tamil Nadu.",
    images: [
      {
        url: `${SITE_URL}/images/hero.png`,
        width: 1200,
        height: 630,
        alt: "LABS CADD — CAD & BIM Training Institute in Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LABS CADD | CAD & BIM Training Institute in Tamil Nadu",
    description:
      "LABS CADD provides CAD, BIM, Revit, AutoCAD, 3D visualization and design software training across Tamil Nadu.",
    images: [`${SITE_URL}/images/hero.png`],
    creator: "@labscadd",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  verification: {
    // Add your Google Search Console verification token here once you have it:
    // google: "YOUR_GSC_VERIFICATION_TOKEN",
  },
};

/** Organization + EducationalOrganization + WebSite JSON-LD structured data */
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: "LABS CADD",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.jpeg`,
        width: 200,
        height: 200,
      },
      description:
        "LABS CADD is a CAD, BIM, and 3D design software training institute offering industry-focused courses in Revit Architecture, Revit MEP, AutoCAD, 3ds Max, SketchUp, Lumion, Blender, SolidWorks, and Fusion 360 across Tamil Nadu.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tiruchirappalli",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8072819348",
        contactType: "customer service",
        email: "contactlabscadd@gmail.com",
        availableLanguage: ["English", "Tamil"],
      },
      sameAs: [
        SEO_CONFIG.social.facebook,
        SEO_CONFIG.social.youtube,
        SEO_CONFIG.social.instagram,
        SEO_CONFIG.social.linkedin,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "LABS CADD",
      description:
        "CAD, BIM and 3D design software training for students, engineers, architects and professionals across Tamil Nadu.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/courses?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Organization + WebSite structured data (global) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col font-poppins"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
