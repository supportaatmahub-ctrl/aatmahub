"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Welcome back!");
      router.push("/");
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <main className="min-h-screen bg-[#070707] px-5 py-8">
      <Toaster position="top-center" />

      <div className="mx-auto max-w-[430px]">
        <h1 className="mt-6 text-center text-4xl font-black text-white">
          AATMA <span className="text-red-500">HUB</span>
        </h1>

        <p className="mt-2 text-center text-sm text-gray-400">
          Login to continue
        </p>

        <div className="mt-10 rounded-3xl border border-red-700/20 bg-[#111111] p-6">

          <div className="mb-5 flex items-center rounded-xl border border-red-700/20 bg-[#181818] px-4">
            <Mail size={18} className="text-red-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="h-12 w-full bg-transparent px-3 text-white outline-none"
            />
          </div>

          <div className="flex items-center rounded-xl border border-red-700/20 bg-[#181818] px-4">
            <Lock size={18} className="text-red-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="h-12 w-full bg-transparent px-3 text-white outline-none"
            />
          </div>

          <button
            onClick={handleLogin}
            className="mt-6 h-12 w-full rounded-xl bg-red-600 font-bold text-white"
          >
            LOGIN
          </button>

          <div className="mt-3 text-right">
            <Link href="/forgot-password" className="text-sm text-red-500">
              Forgot Password?
            </Link>
          </div>

          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link href="/register" className="text-red-500">
              Register
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}
