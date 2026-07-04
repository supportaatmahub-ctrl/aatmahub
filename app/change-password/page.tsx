"use client";

export default function ChangePasswordPage() {
  return (
    <main className="min-h-screen bg-[#070707] px-5 py-8 text-white">
      <div className="mx-auto max-w-md">

        <h1 className="text-3xl font-black">
          CHANGE <span className="text-red-500">PASSWORD</span>
        </h1>

        <div className="mt-6 rounded-2xl border border-red-600/20 bg-[#111111] p-5">

          <input
            type="password"
            placeholder="Current Password"
            className="mb-4 h-12 w-full rounded-xl border border-red-600/20 bg-[#181818] px-4 outline-none"
          />

          <input
            type="password"
            placeholder="New Password"
            className="mb-4 h-12 w-full rounded-xl border border-red-600/20 bg-[#181818] px-4 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm New Password"
            className="h-12 w-full rounded-xl border border-red-600/20 bg-[#181818] px-4 outline-none"
          />

          <button
            className="mt-6 h-12 w-full rounded-xl bg-red-600 font-bold text-white"
          >
            UPDATE PASSWORD
          </button>

        </div>

      </div>
    </main>
  );
}
