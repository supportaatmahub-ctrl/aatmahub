"use client";

import { House, BadgeCheck, Package, User } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-red-700/40 bg-red-900/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[430px] items-center justify-around">

        <button className="flex flex-col items-center text-white">
          <House size={22} />
          <span className="mt-1 text-[11px] font-semibold">Home</span>
        </button>

        <button className="flex flex-col items-center text-white/80">
          <BadgeCheck size={22} />
          <span className="mt-1 text-[11px] font-semibold">Check ID</span>
        </button>

        <button className="flex flex-col items-center text-white/80">
          <Package size={22} />
          <span className="mt-1 text-[11px] font-semibold">Orders</span>
        </button>

        <button className="flex flex-col items-center text-white/80">
          <User size={22} />
          <span className="mt-1 text-[11px] font-semibold">Account</span>
        </button>

      </div>
    </nav>
  );
}
