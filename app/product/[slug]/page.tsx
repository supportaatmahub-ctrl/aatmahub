"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { products } from "@/data/products";
import { mlbbPackages } from "@/data/packages/mlbb";
import PackageCard from "@/src/components/ui/PackageCard";
import CustomerDetails from "@/src/components/ui/CustomerDetails";
import ConfirmOrderModal from "@/src/components/ui/ConfirmOrderModal";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  const [gameId, setGameId] = useState("");
  const [serverId, setServerId] = useState("");
  const [email, setEmail] = useState("");
  const [promo, setPromo] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [payment, setPayment] = useState("Paytm");
  const [open, setOpen] = useState(false);

  if (!product) return notFound();

  const selectedPackage = mlbbPackages.find((p) => p.id === selected);

  return (
    <>
      <main className="min-h-screen bg-[#070707] px-4 py-8 text-white">

        {/* Existing Banner, Game ID, Server ID and Package UI */}

        <CustomerDetails
          email={email}
          setEmail={setEmail}
          promo={promo}
          setPromo={setPromo}
        />

        {/* Existing Payment + Order Summary */}

        <button
          onClick={() => setOpen(true)}
          disabled={!gameId || !serverId || selected === null}
          className={`mt-6 h-12 w-full rounded-xl font-bold ${
            !gameId || !serverId || selected === null
              ? "bg-gray-700 text-gray-400"
              : "bg-red-600 text-white"
          }`}
        >
          BUY NOW
        </button>
      </main>

      <ConfirmOrderModal
        open={open}
        gameId={gameId}
        serverId={serverId}
        packageName={selectedPackage?.name ?? ""}
        price={selectedPackage?.price ?? 0}
        payment={payment}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          setOpen(false);
          alert("Next: Save order to Firebase");
        }}
      />
    </>
  );
}
