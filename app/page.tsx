import SectionDivider from "@/components/section-divider";
import Intro from "./Intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="">
      <Intro/>
      <div className="flex flex-col items-center px-4">
        <SectionDivider/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>      
      </div>
      
    </main>
  )
}
