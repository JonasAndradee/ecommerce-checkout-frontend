import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Finalizar Compra | E-commerce",
  description: "Complete sua compra com segurança",
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
