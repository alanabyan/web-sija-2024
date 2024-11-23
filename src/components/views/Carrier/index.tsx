import CardKarir from '@/components/layouts/CardKarir';
import {Poppins} from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function CarrierPage() {
    return (
      <div
        className={`max-h-screen h-screen ${poppins.className} bg-[#8D9FFB]`}
      >
        <div className="">
          <h1 className="text-6xl font-bold">Jenjang Karir</h1>
          <p className="text-2xl font-medium">
            Peluang kerja yang dapat kamu raih setelah lulus dari SIJA
          </p>
        </div>
        <div className="">
          <CardKarir />
        </div>
      </div>
    );
}