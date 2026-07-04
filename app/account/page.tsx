"use client";

import { useEffect } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Package, Lock, Headphones, ChevronRight } from "lucide-react";

export default function AccountPage() {
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) router.replace("/login");
  }, [user, router]);

  async function handleLogout() {
    await signOut(auth);
    router.replace("/login");
  }

  if (!user) return null;

  return (
    <main className="min-h-screen bg-[#070707] px-5 py-8 text-white">
      <div className="mx-auto max-w-md">

        <h1 className="text-3xl font-black">
          MY <span className="text-red-500">ACCOUNT</span>
        </h1>

        <div className="mt-6 rounded-2xl border border-red-600/20 bg-[#111111] p-5">
          <p className="text-sm text-gray-400">Email</p>
          <p className="mt-2 break-all text-base font-semibold">
            {user.email}
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-red-600/20 bg-[#111111]">

          <Link href="/orders" className="flex items-center justify-between border-b border-red-600/10 p-4">
            <div className="flex items-center gap-3">
              <Package className="text-red-500" size={20}/>
              <span>My Orders</span>
            </div>
            <ChevronRight size={20}/>
          </Link>

          <Link href="/change-password" className="flex items-center justify-between border-b border-red-600/10 p-4">
            <div className="flex items-center gap-3">
              <Lock className="text-red-500" size={20}/>
              <span>Change Password</span>
            </div>
            <ChevronRight size={20}/>
          </Link>

          <Link href="/support" className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Headphones className="text-red-500" size={20}/>
              <span>Support</span>
            </div>
            <ChevronRight size={20}/>
          </Link>

        </div>

        <button
          onClick={handleLogout}
          className="mt-6 h-12 w-full rounded-xl bg-red-600 font-bold transition active:scale-95"
        >
          LOGOUT
        </button>

        <div className="mt-10 border-t border-red-600/20 pt-6 text-center">
          <h2 className="text-lg font-bold text-red-500">AATMA HUB</h2>
          <p className="mt-2 text-sm text-gray-400">
            Your Trusted Gaming Top-Up Store
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Version 1.0.0
          </p>
          <p className="mt-1 text-xs text-gray-600">
            © 2026 AATMA HUB. All Rights Reserved.
          </p>
        </div>

      </div>
    </main>
  );
}
