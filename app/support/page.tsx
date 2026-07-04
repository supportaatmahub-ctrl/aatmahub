"use client";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#070707] px-5 py-8 text-white">
      <div className="mx-auto max-w-md">

        <h1 className="text-3xl font-black">
          SUPPORT
        </h1>

        <div className="mt-6 rounded-2xl border border-red-600/20 bg-[#111111] p-5">

          <p className="text-sm text-gray-400">Support Email</p>
          <p className="mt-1 text-white">
            support@aatmahub.com
          </p>

          <div className="my-5 border-t border-red-600/20"></div>

          <p className="text-sm text-gray-400">Business Hours</p>
          <p className="mt-1 text-white">
            Monday - Sunday
            <br />
            9:00 AM - 10:00 PM (IST)
          </p>

          <button className="mt-6 h-12 w-full rounded-xl bg-red-600 font-bold text-white">
            CONTACT SUPPORT
          </button>

        </div>

      </div>
    </main>
  );
}
