import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function CardKarir() {
  return (
    <div className="grid grid-cols-3 gap-24">
        {dataCard.map((item, index) => (
            <div key={index} className=""></div>
        ))}
    </div>
  );
}

const dataCard = [
  {
    image: "/avatr.svg",
    title: "Software as a service",
    icon: "icon.svg"
  },
  {
    image: "/avatr.svg",
    title: "Software as a service",
    icon: "icon.svg"
  },
  {
    image: "/avatr.svg",
    title: "Software as a service",
    icon: "icon.svg"
  },
  {
    image: "/avatr.svg",
    title: "Software as a service",
    icon: "icon.svg"
  },
  {
    image: "/avatr.svg",
    title: "Software as a service",
    icon: "icon.svg"
  },
  {
    image: "/avatr.svg",
    title: "Software as a service",
    icon: "icon.svg"
  },
];
