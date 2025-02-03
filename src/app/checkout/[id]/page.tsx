import { Metadata } from "next";
import { CheckoutContainer } from "@/presentation/components/checkout/checkout-container";
import { CartProvider } from "@/presentation/contexts/cart-context";

export default function CheckoutPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Finalizar Compra</h1>
        <p className="text-muted-foreground mt-2">
          Complete suas informações para finalizar sua compra
        </p>
      </div>

      <CartProvider>
        <CheckoutContainer />
      </CartProvider>
    </div>
  );
}
