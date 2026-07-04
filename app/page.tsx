import Navbar from "@/components/layout/Navbar";
import HeroBanner from "@/components/layout/HeroBanner";
import BottomNav from "@/components/layout/BottomNav";
import Footer from "@/components/layout/Footer";
import GameCard from "@/components/ui/GameCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto w-full max-w-[430px] px-3 pt-28 pb-24 space-y-5">
        <HeroBanner />

        <section>
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-extrabold text-white">
            <span className="h-8 w-1 rounded-full bg-red-500"></span>
            Mobile Games
          </h2>

          <div className="grid grid-cols-3 gap-3">
            {products.map((product) => (
              <GameCard
                key={product.slug}
                title={product.title}
                image={product.image}
                slug={product.slug}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-extrabold text-white">
            <span className="h-8 w-1 rounded-full bg-red-500"></span>
            Coming Soon
          </h2>
        </section>

        <Footer />
      </main>

      <BottomNav />
    </>
  );
}
