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
        <div id="app" className="flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1">
        {children}
        </main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
