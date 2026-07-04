"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  slug: string;
};

export default function GameCard({ title, image, slug }: Props) {
  return (
    <Link href={`/product/${slug}`}>
      <button className="w-full overflow-hidden rounded-2xl border border-red-700/30 bg-[#101010] transition active:scale-95">

        <div className="relative h-32 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex h-16 items-center justify-center border-t border-red-700/20 bg-[#0b0b0b] px-2">
          <p className="line-clamp-2 text-center text-sm font-semibold uppercase leading-5 text-white">
            {title}
          </p>
        </div>

      </button>
    </Link>
  );
}
