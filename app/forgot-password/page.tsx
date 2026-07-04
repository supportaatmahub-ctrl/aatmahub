"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-[#070707] px-5 py-8">
      <div className="mx-auto max-w-[430px]">

        <h1 className="mt-6 text-center text-4xl font-black text-white">
          AATMA <span className="text-red-500">HUB</span>
        </h1>

        <p className="mt-2 text-center text-sm text-gray-400">
          Reset your password
        </p>

        <div className="mt-10 rounded-3xl border border-red-700/20 bg-[#111111] p-6">

          <label className="mb-2 block text-sm text-gray-300">
            Email Address
          </label>

          <div className="flex items-center rounded-xl border border-red-700/20 bg-[#181818] px-4">
            <Mail size={18} className="text-red-500" />
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 w-full bg-transparent px-3 text-white outline-none"
            />
          </div>

          <button className="mt-6 h-12 w-full rounded-xl bg-red-600 font-bold text-white hover:bg-red-700 transition">
            SEND RESET LINK
          </button>

          <p className="mt-6 text-center text-sm text-gray-400">
            <Link href="/login" className="text-red-500 font-semibold">
              Back to Login
            </Link>
          </p>

        </div>

      </div>
    </main>
  );
}
