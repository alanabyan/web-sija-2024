import Image from "next/image"
import { Anybody } from "next/font/google";

const inter = Anybody({ 
  subsets: ["latin"],
  weight: ["100",'200','300','400','500','600','800',"700"] 
});


const  Navbar = () => {
    return (
        <main className={`${inter.className} flex justify-center`}>
            <nav className="flex fixed bg-[#020F1F] bg-opacity-65 backdrop-filter-[20px] backdrop-blur-[1px] w-[95%] h-24 p-5 m-5 shadow-[0px_0px_50px_1px_#000000] rounded-2xl">
              <Image src={'/sija.svg'} alt="logo-sija" width={70} height={70} />  
              <ul className="flex justify-center items-center text-[20px] text-white">
                <li className="p-6">Home</li>
                <li className="p-6">About</li>
                <li className="p-6">Skills</li>
                <li className="p-6">Jenjang Karir</li>
                <li className="p-6">Lulusan</li>
                <li className="p-6">Kepala Program</li>
                <li className="p-6">Prestasi</li>
                <li className="p-6">Tentang Kami</li>
              </ul>
              <button className="bg-[#0B0F14] text-white w-52 rounded-[10px] shadow-[0px_10px_20px_4px_#000000]">Hubungi Kami</button>
            </nav>
        </main>
    )
}

export default Navbar;