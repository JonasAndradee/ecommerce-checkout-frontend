// import { RootLayout } from '@/presentation/components/layout/root-layout'

import Image from "next/image";

export const metadata = {
  title: "Checkout | Malga",
  description: "O checkout tão rápido que você pisca e já foi",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mt-8">
        <Image alt="Malga" src={"/logo-malga.svg"} width={120} height={37} />
        E-commerce
      </header>
      {children}
    </div>
  );
}
