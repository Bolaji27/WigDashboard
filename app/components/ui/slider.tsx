"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { src: string; alt: string };

export default function Slider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  const goPrev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const goNext = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden border rounded-3xl">
      {/* SLIDES TRACK */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative w-full h-full shrink-0 ">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-3 hover:bg-white"
      >
        <ChevronLeft />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-3 hover:bg-white"
      >
        <ChevronRight />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-black"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
