type Props = {
  title: string;
  price: number;
  selected: boolean;
  onClick: () => void;
};

export default function PackageCard({
  title,
  price,
  selected,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl p-4 text-left transition active:scale-95 ${
        selected
          ? "border-2 border-red-500 bg-[#1a1a1a]"
          : "border border-red-600/20 bg-[#111111]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold text-white">
          {title}
        </span>

        <span className="font-bold text-red-500">
          ₹{price}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
        <span>💎</span>
        <span>Instant Top-up</span>
      </div>
    </button>
  );
}
