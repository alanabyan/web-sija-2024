import { Anybody } from "next/font/google";

const inter = Anybody({ 
    subsets: ["latin"],
    weight: ["100",'200','300','400','500','600','800',"700"] 
  });

const AboutView = () => {
    return (
        <div className={`${inter.className} w-full h-screen bg-[#051529] flex flex-col justify-center`}>
            <h1 className="text-white text-[84px] pt-24 flex justify-center">About Us</h1>
            <video controls autoPlay className="w-1/2 mx-auto rounded-[25px] mt-24"><source src="/sija.mp4" type="video/mp4" /></video>
        </div>
    );
};

export default AboutView;