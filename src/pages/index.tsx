import Image from "next/image";
import { Anybody } from "next/font/google";
import HomeView from "@/components/views/Home";
import AboutView from "@/components/views/About";
import SkillsView from "@/components/views/Skills";

const inter = Anybody({ 
  subsets: ["latin"],
  weight: ["400", "700"] 
});

export default function Home() {
  return (
    <div>
      <HomeView />
      <AboutView />
      <SkillsView />
    </div>
  );
}
