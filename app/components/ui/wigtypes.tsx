import { Search } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { wigs1 } from "./allWigs";
export default function Wigtypes() {
  return (
    <div className="mt-5 px-5 ">
      <div className="flex flex-wrap items-center gap-4">
        <ul className="flex flex-row gap-5 text-xl font-jomolhari">
          <li className="hover:border-b">All</li>
          <li className="hover:border-b">Short</li>
          <li className="hover:border-b">Long</li>
          <li className="hover:border-b">Curls</li>
        </ul>

        <div className="ml-auto w-full sm:w-[320px]">
          <div className="flex items-center gap-2 rounded-xl border px-4 py-2">
            <input
              className="w-full bg-transparent outline-none"
              placeholder="Search"
            />
            <Search size={20} />
          </div>
        </div>
      </div>
      <div className="mt-7 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  {wigs1.map((wig) => (
    <div
      key={wig.id}
      style={{ "--wig-color": wig.color } as React.CSSProperties}
      className="flex flex-col gap-5  p-4"
    >
      <Image
        src={wig.image}
        alt={wig.name}
        height={313}
        width={335}
        className="rounded-lg"
      />

      <div className="flex font-jomolhari">
        <p className="flex-1">{wig.name}</p>

        <div className="flex items-center gap-2">
          <p>colour</p>
          <span className="inline-block w-8 h-5 rounded-sm border bg-[var(--wig-color)]" />
        </div>
      </div>

      <p>£{wig.price}</p>

      <div className="flex items-center justify-center gap-2 border py-2">
        <ShoppingBasket size={16} />
        <p>Add to cart</p>
      </div>
    </div>
  ))}
</div>


    </div>
  );
}
