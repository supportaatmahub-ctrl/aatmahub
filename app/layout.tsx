import "./globals.css";

export const metadata = {
  title: "Aatma Hub",
  description: "Gaming Topup Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 min-h-screen overflow-x-hidden bg-[#060816]">
        {children}
      </body>
    </html>
  );
}
