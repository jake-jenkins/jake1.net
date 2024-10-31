import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteName = "Jake1.net"

export const metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto p-4 flex-1">
        {children}
        </main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
