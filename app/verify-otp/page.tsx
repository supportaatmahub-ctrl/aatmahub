"use client";

import Link from "next/link";

export default function VerifyOtpPage() {
  return (
    <main className="min-h-screen bg-[#070707] px-5 py-8">
      <div className="mx-auto max-w-[430px]">

        <h1 className="mt-6 text-center text-4xl font-black text-white">
          AATMA <span className="text-red-500">HUB</span>
        </h1>

        <p className="mt-2 text-center text-sm text-gray-400">
          Enter the 6-digit verification code
        </p>

        <div className="mt-10 rounded-3xl border border-red-700/20 bg-[#111111] p-6">

          <div className="flex justify-between gap-2">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                maxLength={1}
                type="text"
                className="h-14 w-14 rounded-xl border border-red-700/20 bg-[#181818] text-center text-xl font-bold text-white outline-none focus:border-red-500"
              />
            ))}
          </div>

          <button className="mt-6 h-12 w-full rounded-xl bg-red-600 font-bold text-white transition hover:bg-red-700">
            VERIFY OTP
          </button>

          <button className="mt-3 w-full text-sm text-red-500">
            Resend OTP
          </button>

          <p className="mt-6 text-center text-sm text-gray-400">
            <Link href="/login" className="font-semibold text-red-500">
              Back to Login
            </Link>
          </p>

        </div>

      </div>
    </main>
  );
}
