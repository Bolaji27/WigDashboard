import { Search } from "lucide-react";
import TopNav from "../components/layout/topnav";
import Image from "next/image";
import Slider from "../components/ui/slider";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Productpage() {
  return (
    <div className="px-5 ">
      <TopNav />
      
      <div className="flex-1 flex flex-row gap-9.5 items-center border rounded-3xl pl-4 mt-12 h-[60px]">
        <Search size={20} />
        <input
          type="text"
          placeholder="search for products"
          className="flex-1 min-w-0 outline-none text-center "
        />
      </div>
     
      <h3 className="w-[448px] text-center text-[28px] font-jomolhari mt-8">
        New Drop
      </h3>
      <Link href="/services/wigs"> 
      <div className="flex flex-row gap-5 mt-8 items-center border-b h-137.5"> 
       
        <Image
          src="/images/brownhair.png"
          alt="wigs"
          width={688}
          height={453}
        />
        <p className=" font-jomolhari text-3xl text-center flex-1">
          Brown colour short fringe wig
        </p>

      </div> </Link>
      <div className="mt-10 border-b h-62.5 mb-20">
        <h3 className="text-center font-jomolhari text-3xl">Our Treat</h3>
        <div className="mt-10 flex flex-col gap-5  ">
          <div className="flex flex-row gap-5 ">
            <p className="flex-1">Wash + Comb + Installation</p>
            <p className="flex-1 text-center">£350</p>
          </div>
          <div className="flex flex-row gap-5 ">
            <p className="flex-1">Styling + Installation</p>
            <p className="flex-1 text-center">£500</p>
          </div>
          <div className="flex flex-row gap-5 ">
            <p className="flex-1">Refix + Coloring</p>
            <p className="flex-1 text-center">£500</p>
          </div>
        </div>
      </div>
      <h3 className="font-jomolhari text-3xl mb-10 p-12">Wigs</h3>
      <Slider
        slides={[
          { src: "/images/1st.png", alt: "firstwig" },
          { src: "/images/2.png", alt: "secondwig" },
          { src: "/images/3.png", alt: "thirdwig" },
        ]}
      />
      <div className=" flex mt-10 items-center justify-center gap-2 mb-5">
        <p className="font-jomolhari text-3xl ">View More</p>
        <ArrowRight size={40} color="#fff" />
      </div>
    </div>
  );
}
