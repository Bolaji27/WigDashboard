import { UserPen } from "lucide-react";
import Link from "next/link";

export default function TopNav() {
  return (
    <div className="">
      <div className="flex items-center border rounded-full px-8 h-20">
        <Link  href="/" className="text-3xl shrink-0">Intern</Link>

        <ul className="flex flex-1 items-center justify-evenly text-[24px]">
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/orders">Orders</Link></li>
          <li><Link href="/">About</Link></li>
        </ul>

        <div className="flex items-center gap-3.5 shrink-0">
          <UserPen />
          <p className="text-[24px]">username</p>
        </div>
      </div>
    </div>
  );
}
