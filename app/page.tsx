
import TopNav from "./components/layout/topnav";
import { ChevronDown } from 'lucide-react';
import Link from "next/link";
import Recentactivity from "./components/ui/recentactivity/page";

export default function Home() {
 
  return (
    <div className="mt-6">
  <TopNav />

  <div className="mt-12 mx-5">
    <h3 className="text-xl">
      Welcome back, <span className="font-semibold">username</span>
    </h3>

    <div className="w-full flex items-center justify-evenly mt-14 gap-4 sm:gap-6 md:gap-10">
      <Link href="/services" className="border rounded-xl flex-1 min-h-32 flex items-center justify-center hover:border-blue-400 cursor-pointer">
        Services
      </Link>
      <Link href="/orders" className="border rounded-xl flex-1 min-h-32 flex items-center justify-center hover:border-blue-400 cursor-pointer">
        Orders
      </Link>
      <Link href="/revenue" className="border rounded-xl flex-1 min-h-32 flex items-center justify-center hover:border-blue-400 cursor-pointer">
        Revenue
      </Link>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center mt-20">
    <ChevronDown size={76} />
    <p className="text-xl">View recent activity</p>
  </div>

  <Recentactivity/>

</div>

  );
}
