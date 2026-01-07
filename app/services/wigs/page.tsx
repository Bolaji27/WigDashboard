import Image from "next/image";
import TopNav from "@/app/components/layout/topnav";
import { ShoppingBasket } from "lucide-react";
import { MoveRight } from "lucide-react";
import Wigtypes from "@/app/components/ui/wigtypes";
export default function Wigs() {
  return (
    <div>
      <TopNav />
      <div className="flex flex-row gap-15 h-[616px] border-b ">
        <div className="w-[688px] mt-7 flex flex-col gap-5 flex-1">
          <h3 className="text-center font-jomolhari text-[32px] ">
            New Arrivals
          </h3>
          <div className="flex flex-row gap-5 mt-2">
            <Image
              src="/images/wigssale/sale1.png"
              alt="newarrival"
              height={313}
              width={335}
            />
            <Image
              src="/images/rotate.png"
              alt="newarrival"
             
              height={313}
              width={335}
              
            />
          </div>
          <div className=" flex flex-col gap-2">
            <div className="flex flex-row ">
              <p className="flex-1">Bob Fringe</p>
              <span className="border w-8 h-5 bg-[#6B4A2D]"></span>
            </div>
            <div className="flex flex-col gap-2">
              <p>£250.00</p>
              <div className="flex flex-row items-center justify-center gap-4 border ">
                <ShoppingBasket size={16} />
                <p>Add to cart</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center ">
          <div className="w-[448px] flex flex-col h-[392px gap-[66px] ">
            <div className="flex flex-row justify-center items-center ">
              <p className="flex-1 font-jomolhari text-[30px] ">
                subscribe to our
              </p>
              <p className="flex-1 font-kalnia text-[32px]">Newsletter</p>
            </div>
            <div className="flex flex-col gap-7">
              <p className="font-josefin text-[30px] ">
                Thank you for choosing us, we appreciate you.Our aim is to
                always to make you happy !!
              </p>
              <div className="flex flex-row justify-center items-center">
                <p className="font-josefin text-[30px] flex-1 ">
                  Register to Newsletter
                </p>
                <MoveRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Wigtypes/>
    </div>
  );
}
