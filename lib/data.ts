import geritchImg from "@/public/geritch.png";
import ecommerceImg from "@/public/ecommerce.png"
import teslaImg from "@/public/tesla.png"

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
    title: "Tesla-Clone",
    description:
      "Developed an interactive web app inspired by the official Tesla website, featuring dynamic and responsive design elements.",
    tags: ["React", "Tailwind CSS"],
    imageUrl: teslaImg,
    url: "https://tesla-clone-by-deanchap.netlify.app/",
  },
  {
    title: "Geritch Restaurant",
    description:
      "Designed and developed a vibrant restaurant website featuring an inviting landing page that captures the essence of the dining experience.",
    tags: ["React.js", "CSS", "JavaScript"],
    imageUrl: geritchImg,
    url: "https://restaurant-v2.netlify.app/",
  },
  {
    title: "Ecommerce-Dashboard",
    description:
      "Developed a responsive ecommerce website with seamless integration to the backend dashboard.",
    tags: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "MySQL", "Prisma"],
    imageUrl: ecommerceImg,
    url: () => console.log("Ecommerce clicked"),
  },
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