import Card from "@/components/layouts/Card";
import { Anybody } from "next/font/google";

const inter = Anybody({ 
    subsets: ["latin"],
    weight: ["100",'200','300','400','500','600','800',"700"] 
  });

const SkillsView = () => {
    return (
        <div className={`${inter.className} bg-[#051529] w-full h-full flex flex-col justify-center`}>
            <h1 className="text-white text-[64px] pt-48 mx-auto">Core Skills</h1>
            <div className="flex">
                <Card />
            </div>
        </div>
    )
}

export default SkillsView;