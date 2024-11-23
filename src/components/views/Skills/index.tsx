import Card from "@/components/layouts/Card";
import { Anybody } from "next/font/google";

const inter = Anybody({ 
    subsets: ["latin"],
    weight: ["100",'200','300','400','500','600','800',"700"] 
  });

const SkillsView = () => {
    return (
        <div className={`${inter.className} bg-[#051529] w-full h-full flex flex-col justify-center pb-40`}>
            <h1 className="text-white text-[64px] pt-48 flex justify-center items-center">Basic & Core Skills</h1>
            <div className="flex justify-center items-center">
                <Card />
            </div>
        </div>
    )
}

export default SkillsView;