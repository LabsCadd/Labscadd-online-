/**
 * LABS CADD — Centralized SEO Configuration
 * Single source of truth for all SEO metadata across the site.
 * Update SITE_URL when the production domain is confirmed.
 */

export const SITE_URL = "https://labscadd.vercel.app";

export const SEO_CONFIG = {
  siteName: "LABS CADD",
  siteUrl: SITE_URL,
  siteTagline: "Learn. Practice. Build Your Future.",
  defaultTitle: "LABS CADD | CAD & BIM Training Institute in Tamil Nadu",
  defaultDescription:
    "LABS CADD provides CAD, BIM, Revit, AutoCAD, 3D visualization and design software training for students, engineers, architects and professionals across Tamil Nadu.",
  logoUrl: `${SITE_URL}/images/logo.jpeg`,
  email: "contactlabscadd@gmail.com",
  phone: "+91-8072819348",
  whatsapp: "918072819348",
  location: "Trichy, Tamil Nadu, India",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61555244833196",
    youtube: "https://youtube.com/@labscadd2393?si=gMM-w6msdXrZgla4",
    instagram: "https://www.instagram.com/labscadd",
    linkedin: "https://www.linkedin.com/in/labs-cadd-556723305",
  },
  ogImage: `${SITE_URL}/images/hero.png`,
};

/** All courses offered — used for sitemap, structured data, and nav. */
export const COURSES = [
  {
    slug: "bim-professional-program",
    title: "BIM Professional Program",
    shortTitle: "BIM Professional",
    metaTitle: "BIM Professional Program | Revit, Navisworks & AutoCAD Training | LABS CADD",
    metaDescription:
      "Comprehensive BIM Professional Program covering Revit Architecture, Navisworks, and AutoCAD. Industry-aligned BIM training for civil engineers and architects in Tamil Nadu.",
    software: ["Revit", "Navisworks", "AutoCAD"],
    level: "Advanced",
    duration: "6 Months",
    targetAudience: "Civil engineering graduates, architects, and working professionals seeking BIM expertise.",
  },
  {
    slug: "revit-architecture",
    title: "Revit Architecture",
    shortTitle: "Revit Architecture",
    metaTitle: "Revit Architecture Course & BIM Training | LABS CADD",
    metaDescription:
      "Learn Revit Architecture from scratch. Industry-focused BIM training covering parametric modelling, construction documentation, and architectural workflows. Enrol at LABS CADD.",
    software: ["Revit"],
    level: "Beginner to Intermediate",
    duration: "2 Months",
    targetAudience: "Architecture students, architects, and civil engineers.",
  },
  {
    slug: "revit-mep",
    title: "Revit MEP",
    shortTitle: "Revit MEP",
    metaTitle: "Revit MEP Course | HVAC, Electrical & Plumbing BIM Training | LABS CADD",
    metaDescription:
      "Master Revit MEP for HVAC, electrical, and plumbing system design. Hands-on BIM training for MEP engineers and graduates in Tamil Nadu at LABS CADD.",
    software: ["Revit MEP"],
    level: "Intermediate",
    duration: "2 Months",
    targetAudience: "MEP engineers, electrical engineers, HVAC professionals, and mechanical graduates.",
  },
  {
    slug: "interior-design-visualization",
    title: "Interior Design & Visualization",
    shortTitle: "Interior Design",
    metaTitle: "Interior Design & 3D Visualization Course | 3ds Max, V-Ray | LABS CADD",
    metaDescription:
      "Professional interior design and 3D visualization training using 3ds Max, Corona Renderer, and V-Ray. Build a portfolio-worthy career in architectural visualization.",
    software: ["3ds Max", "Corona Renderer", "V-Ray"],
    level: "Advanced",
    duration: "4 Months",
    targetAudience: "Interior designers, architecture students, and design professionals.",
  },
  {
    slug: "3ds-max",
    title: "3ds Max + Corona Renderer",
    shortTitle: "3ds Max",
    metaTitle: "3ds Max Course & Architectural Visualization Training | LABS CADD",
    metaDescription:
      "Learn 3ds Max and Corona Renderer for photorealistic architectural visualization and 3D rendering. Professional training at LABS CADD Tamil Nadu.",
    software: ["3ds Max", "Corona Renderer"],
    level: "Intermediate",
    duration: "2 Months",
    targetAudience: "Architects, interior designers, and 3D artists.",
  },
  {
    slug: "sketchup-lumion",
    title: "SketchUp + Lumion + Photoshop",
    shortTitle: "SketchUp & Lumion",
    metaTitle: "SketchUp & Lumion Course | 3D Design & Visualization Training | LABS CADD",
    metaDescription:
      "SketchUp, Lumion, and Photoshop training for rapid 3D modelling and stunning architectural renders. Perfect for architects and design students.",
    software: ["SketchUp", "Lumion", "Photoshop"],
    level: "Intermediate",
    duration: "2 Months",
    targetAudience: "Architecture students, interior designers, and design professionals.",
  },
  {
    slug: "solidworks-fusion-360",
    title: "SolidWorks & Fusion 360",
    shortTitle: "SolidWorks",
    metaTitle: "SolidWorks & Fusion 360 Course | Mechanical CAD Training | LABS CADD",
    metaDescription:
      "SolidWorks and Fusion 360 training for product design, mechanical engineering, and manufacturing. Hands-on CAD training in Tamil Nadu.",
    software: ["SolidWorks", "Fusion 360"],
    level: "Intermediate",
    duration: "2 Months",
    targetAudience: "Mechanical engineers, product designers, and engineering students.",
  },
  {
    slug: "blender",
    title: "Blender + After Effects + Premiere Pro",
    shortTitle: "Blender",
    metaTitle: "Blender Course | 3D Animation & Motion Graphics Training | LABS CADD",
    metaDescription:
      "Master Blender, After Effects, and Premiere Pro for 3D animation, motion graphics, and architectural walkthroughs. Creative media training at LABS CADD.",
    software: ["Blender", "After Effects", "Premiere Pro"],
    level: "Intermediate",
    duration: "3 Months",
    targetAudience: "Creative professionals, animators, architects, and media students.",
  },
  {
    slug: "autocad",
    title: "AutoCAD 2D & 3D Drafting",
    shortTitle: "AutoCAD",
    metaTitle: "AutoCAD Course & Training in Tamil Nadu | 2D & 3D CAD | LABS CADD",
    metaDescription:
      "Professional AutoCAD 2D drafting and 3D modelling course at LABS CADD. Comprehensive CAD training for civil engineers, mechanical engineers, and architects in Tamil Nadu.",
    software: ["AutoCAD"],
    level: "Beginner to Intermediate",
    duration: "2 Months",
    targetAudience: "Civil, Mechanical, and Electrical engineering students, architects, interior designers, and drafting professionals.",
  },
  {
    slug: "tekla-structures",
    title: "Tekla Structures",
    shortTitle: "Tekla Structures",
    metaTitle: "Tekla Structures Course | Structural BIM Training | LABS CADD",
    metaDescription:
      "Tekla Structures training for structural steel and concrete detailing, BIM coordination, and shop drawings. Expert-led course at LABS CADD.",
    software: ["Tekla Structures"],
    level: "Advanced",
    duration: "2 Months",
    targetAudience: "Structural engineers, civil engineers, and fabrication professionals.",
  },
];

/** Tamil Nadu locations covered by LABS CADD training (online + physical). */
export const LOCATIONS = [
  { slug: "trichy", name: "Trichy", label: "Tiruchirappalli", isPrimary: true },
  { slug: "chennai", name: "Chennai" },
  { slug: "coimbatore", name: "Coimbatore" },
  { slug: "madurai", name: "Madurai" },
  { slug: "salem", name: "Salem" },
  { slug: "erode", name: "Erode" },
  { slug: "tiruppur", name: "Tiruppur" },
  { slug: "karur", name: "Karur" },
  { slug: "tirunelveli", name: "Tirunelveli" },
  { slug: "vellore", name: "Vellore" },
  { slug: "hosur", name: "Hosur" },
  { slug: "thanjavur", name: "Thanjavur" },
  { slug: "dindigul", name: "Dindigul" },
  { slug: "namakkal", name: "Namakkal" },
  { slug: "krishnagiri", name: "Krishnagiri" },
  { slug: "cuddalore", name: "Cuddalore" },
  { slug: "kanchipuram", name: "Kanchipuram" },
  { slug: "thoothukudi", name: "Thoothukudi" },
  { slug: "nagercoil", name: "Nagercoil" },
  { slug: "pudukkottai", name: "Pudukkottai" },
];
