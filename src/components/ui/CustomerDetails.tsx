type Props = {
  email: string;
  setEmail: (v: string) => void;
  promo: string;
  setPromo: (v: string) => void;
};

export default function CustomerDetails({
  email,
  setEmail,
  promo,
  setPromo,
}: Props) {
  return (
    <div className="mt-6 rounded-2xl border border-red-600/20 bg-[#111111] p-4">
      <h2 className="mb-4 text-lg font-bold">
        Customer Details
      </h2>

      <input
        type="email"
        placeholder="Email (Optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-3 h-12 w-full rounded-xl border border-red-600/20 bg-[#181818] px-4 outline-none"
      />

      <input
        type="text"
        placeholder="Promo Code (Optional)"
        value={promo}
        onChange={(e) => setPromo(e.target.value.toUpperCase())}
        className="h-12 w-full rounded-xl border border-red-600/20 bg-[#181818] px-4 outline-none"
      />
    </div>
  );
}
