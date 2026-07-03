"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: Props) {
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-[#0b0b0b] border-r border-red-600/30 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-red-600/20 p-4">
          <h2 className="text-xl font-bold text-red-500">Aatma HUB</h2>

          <button
            onClick={onClose}
            className="text-2xl text-white"
          >
            ✕
          </button>
        </div>

        <nav className="p-4 space-y-3">
          <button className="w-full rounded-xl bg-[#151515] p-3 text-left">🏠 Home</button>
          <button className="w-full rounded-xl bg-[#151515] p-3 text-left">🎮 Mobile Games</button>
          <button className="w-full rounded-xl bg-[#151515] p-3 text-left">📦 Orders</button>
          <button className="w-full rounded-xl bg-[#151515] p-3 text-left">👤 Account</button>
          <button className="w-full rounded-xl bg-[#151515] p-3 text-left">⚙ Settings</button>
        </nav>
      </aside>
    </>
  );
}
