import Image from "next/image";
import TopNav from "../components/layout/topnav";
import { Fullscreen } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <div className="mx-5 ">
      <TopNav />
      <div className="w-54 border-b flex items-center justify-center mt-10 h-22.5">
        <p className="w-24.75 font-jomolhari text-center text-[36px]">Wigs</p>
      </div>
      <div className="flex flex-row gap-5 mt-10 h-[579px] ">
        <div className="flex-1 flex flex-col gap-7 ">
          <p className="font-josefin text-[28px] leading-13 h-91.25">
            We offer affordable natural human hair for your every day purpose
            filled with different kind of colors style, and shipped globally
          </p>
          <button className="font-jomolhari text-center text-3xl">
            <Link href="/services/wigs">View more</Link>
            
          </button>
        </div>
        s
        <div className="flex-1">
          <Image
            src="/images/wigss.png"
            alt="wigs business"
            width={688}
            height={579}
          />
        </div>
      </div>
      <div className="flex flex-row gap-5 h-144.75 mt-20">
        <div className="flex-1">
          <Image
            src="/images/maintenance.png"
            alt="Maintenance image"
            width={688}
            height={579}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-14 flex-1 text-4xl font-josefin">
          <p>Hair wash</p>
          <p>&</p>
          <p>Maintenance</p>
        </div>
      </div>
      <div className="mt-5 mb-2">
        <div className="mt-20 flex items-center justify-center">
          <div className="h-[76px] w-[454px] border-b mb-5 ">
            <p className=" text-center font-jomolhari text-4xl ">
              Installations
            </p>
          </div>
        </div>
        <div className="relative mt-5">
          <Image
            src="/images/install.png"
            alt="installations"
            width={1400}
            height={648}
            className="w-full h-auto"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
            <h3 className="text-3xl font-semibold text-white">
              Reserve your booking with us
            </h3>
            <p className="mt-2 text-white/80">Find out more</p>
          </div>
        </div>
      </div>
    </div>
  );
}


