import geritchImg from "@/public/geritch.png";
import ecommerceImg from "@/public/ecommerce.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce-Dashboard",
    description:
      "Developed a responsive ecommerce website with seamless integration to the backend dashboard.",
    tags: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "MySQL", "Prisma"],
    imageUrl: ecommerceImg,
    url: () => console.log("Ecommerce clicked"),
  },
  {
    title: "Geritch Restaurant",
    description:
      "Designed and developed a vibrant restaurant website featuring an inviting landing page that captures the essence of the dining experience.",
    tags: ["React.js", "CSS", "JavaScript"],
    imageUrl: geritchImg,
    url: () => console.log("geritch clicked"),
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "SQL",
  "Python",
  "Framer Motion",
  "Tableau",
  "Figma",
  "Excel",
] as const;