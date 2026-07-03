export default function ComingSoonCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-red-600/30 bg-[#121212]">
      <div className="h-28 bg-gradient-to-br from-[#2a0000] via-[#1b0b0b] to-[#090909] opacity-50"></div>

      <div className="border-t border-red-600/20 bg-[#0d0d0d] px-2 py-2">
        <p className="text-center text-xs font-semibold text-gray-400">
          Coming Soon
        </p>
      </div>

      <span className="absolute right-2 top-2 rounded-full bg-red-600 px-2 py-1 text-[10px] font-bold text-white">
        SOON
      </span>
    </div>
  );
}
