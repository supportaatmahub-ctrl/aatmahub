"use client";

import Link from "next/link";

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-[#070707] px-5 py-8 text-white">
      <div className="mx-auto max-w-md">

        <h1 className="text-3xl font-black">
          MY <span className="text-red-500">ORDERS</span>
        </h1>

        <div className="mt-6 rounded-2xl border border-red-600/20 bg-[#111111] p-8 text-center">
          <p className="text-lg font-semibold">No Orders Yet</p>
          <p className="mt-2 text-sm text-gray-400">
            Your top-up orders will appear here.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold text-white"
          >
            Browse Games
          </Link>
        </div>

      </div>
    </main>
  );
}
