export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
      <div className="font-bold text-xl">Aatma HUB</div>

      <div className="flex gap-4">
        <button>🛒</button>
        <button>🔔</button>
        <button>☰</button>
      </div>
    </header>
  );
}
