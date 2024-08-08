import Image from "next/image";
import { Anybody } from "next/font/google";
import React from "react";

const inter = Anybody({ 
  subsets: ["latin"],
  weight: ["100",'200','300','400','500','600','800',"700"] 
});

const HomeView = () => {
  return(
      <div className={`${inter.className} bg-black w-full h-full`}>
        <div className="w-full">
          <h1 className="text-white text-[96px] absolute w-[70vw] pt-60 pl-[103px] pr-16">Sistem Informasi Jaringan Dan Aplikasi</h1>
          <Image src={'/gedung.svg'} alt="gedung sija" width={20000} height={100} className="w-full object-cover" />
        </div>
      </div>
  );
};

export default HomeView;