import GameCard from "@/components/ui/GameCard";
import { games } from "@/data/games";

export default function ProductPage() {
  return (
    <main className="p-6 min-h-screen bg-black text-white">
      <h1 className="text-xl font-bold mb-4">Mobile Games</h1>

      <div className="grid grid-cols-3 gap-3">
        {games.map((game) => (
          <GameCard key={game} title={game} />
        ))}
      </div>
    </main>
  );
}
