"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { House, BadgeCheck, Package, User } from "lucide-react";

export default function BottomNav() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
    });
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-red-600/20 bg-[#121212]/95 backdrop-blur">
      <div className="mx-auto flex max-w-md justify-around py-3">

        <Link href="/" className="flex flex-col items-center text-red-500">
          <House size={22} />
          <span className="text-xs">Home</span>
        </Link>

        <Link href="/check-id" className="flex flex-col items-center text-gray-300">
          <BadgeCheck size={22} />
          <span className="text-xs">Check ID</span>
        </Link>

        <Link href="/orders" className="flex flex-col items-center text-gray-300">
          <Package size={22} />
          <span className="text-xs">Orders</span>
        </Link>

        <Link
          href={loggedIn ? "/account" : "/login"}
          className="flex flex-col items-center text-gray-300"
        >
          <User size={22} />
          <span className="text-xs">Account</span>
        </Link>

      </div>
    </nav>
  );
}
