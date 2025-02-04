import { CheckoutContainer } from "@/presentation/components/checkout/checkout-container";
import { CartProvider } from "@/presentation/contexts/cart-context";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finalizar Compra | E-commerce",
  description: "Complete sua compra com segurança",
};

export default function CheckoutPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Finalizar Compra</h1>
        <p className="text-muted-foreground mt-2">
          Complete suas informações para finalizar sua compra
        </p>
      </div>

      <CartProvider>
        <CheckoutContainer />
      </CartProvider>
    </>
  );
}
