"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="-mt-4">
      <div className="relative h-60 w-full overflow-hidden rounded-3xl border border-red-600/20">
        <Image
          src="/images/image for website/moba legends banner.jpg"
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
