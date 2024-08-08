import Image from "next/image";
import { Anybody } from "next/font/google";

const inter = Anybody({ 
  subsets: ["latin"],
  weight: ["400", "700"] 
});

export default function Home() {
  return (
    <div className={`${inter.className} bg-black w-full h-screen`}>
      <div className="w-full">
        <h1 className="text-white z-10 text-[96px] absolute w-[1111px] pt-60 pl-[103px] pr-16">Sistem Informasi Jaringan Dan Aplikasi</h1>
        <Image src={'/gedung.svg'} alt="gedung sija" width={20000} height={100} className="w-full object-cover" />
      </div>
    </div>
  );
}
