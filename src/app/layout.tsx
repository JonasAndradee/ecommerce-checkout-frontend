import { QueryProvider } from "@/presentation/providers/query-provider";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <header className="bg-gray-900 text-white py-4 px-6 shadow-md flex items-center">
            <Link href="/" className="flex flex-col items-start">
              <Image
                alt="Malga"
                src={"/logo-malga-white.svg"}
                width={120}
                height={37}
              />
              <p className="text-xs font-bold">E-commerce</p>
            </Link>
          </header>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1 container mx-auto p-4">{children}</main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
