"use client";

import { ShoppingCart, Bell, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B] border-b border-red-600/20">
      <div className="mx-auto flex h-20 max-w-[430px] items-center justify-between px-4">
        <h1 className="text-3xl font-black tracking-wide text-white">
          AATMA <span className="text-red-500">HUB</span>
        </h1>

        <div className="flex items-center gap-3">
          <button className="rounded-xl bg-[#171717] p-3 text-white">
            <ShoppingCart size={22} />
          </button>

          <button className="rounded-xl bg-[#171717] p-3 text-white">
            <Bell size={22} />
          </button>

          <button className="rounded-xl bg-red-600 p-3 text-white">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
