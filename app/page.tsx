export default function Home() {
  return (
    <main className="p-6 min-h-screen bg-black text-white space-y-4">
      <h1 className="text-2xl font-bold">Aatma Hub</h1>

      <a href="/product" className="block underline">Go to Product</a>
      <a href="/checkout" className="block underline">Go to Checkout</a>
      <a href="/success" className="block underline">Go to Success</a>
    </main>
  );
}
