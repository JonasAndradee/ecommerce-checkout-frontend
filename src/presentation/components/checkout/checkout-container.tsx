"use client";

import { useEffect, useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  checkoutFormSchema,
  CheckoutFormData,
} from "@/presentation/schemas/checkout-form-schema";
import { CustomerForm } from "@/presentation/components/forms/checkout/customer-form";
import { PaymentForm } from "@/presentation/components/forms/checkout/payment-form";
import { CartSummary } from "@/presentation/components/checkout/cart-summary";
import { FormFeedback } from "@/presentation/components/feedback/form-feedback";
import { AutosaveIndicator } from "@/presentation/components/feedback/autosave-indicator";
import { RestoreFormDialog } from "@/presentation/components/forms/checkout/restore-form-dialog";
import { Button } from "@/presentation/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/presentation/components/ui/card";
import { useCart } from "@/presentation/contexts/cart-context";
import { useCreateTransaction } from "@/presentation/hooks/use-transaction";
import { useFormAutosave } from "@/presentation/hooks/use-form-autosave";
import { handleFormError } from "@/presentation/lib/utils/error/form-error-handler";
import { ScrollArea } from "@/presentation/components/ui/scroll-area";
import { TransactionRequest } from "@/domain/entities/transaction";
import { utilsFormat } from "@/presentation/lib/utils/format";

const FORM_KEY = "checkout_form";

function CheckoutContainerContent() {
  const router = useRouter();
  const { items, total } = useCart();
  const { mutate: createTransaction, isPending } = useCreateTransaction();
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [showRestore, setShowRestore] = useState(false);
  const [savedTimestamp, setSavedTimestamp] = useState<string>("");

  const form = useFormContext<CheckoutFormData>();

  const { clearSavedData, valuesSaved } = useFormAutosave(FORM_KEY);

  const handleRestore = () => {
    if (valuesSaved) {
      form.reset(valuesSaved.data);
    }
    setShowRestore(false);
  };

  const handleDiscard = () => {
    clearSavedData();
    setShowRestore(false);
  };

  const onSubmit = async (data: CheckoutFormData) => {
    setFormError(null);
    setFormSuccess(null);

    const transaction: TransactionRequest = {
      amount: total,
      customer: data.customer,
      items,
      paymentMethod: data.paymentMethod,
    };

    createTransaction(transaction, {
      onSuccess: (response) => {
        setFormSuccess("Pagamento realizado com sucesso!");
        clearSavedData();
        setTimeout(() => {
          router.push(`/transactions/${response.id}`);
        }, 2000);
      },
      onError: (error) => {
        const { message, field } = handleFormError(error);
        if (field) {
          form.setError(field as any, {
            type: "manual",
            message,
          });
        }
        setFormError(
          message || "Falha ao processar pagamento. Tente novamente."
        );
      },
    });
  };

  useEffect(() => {
    if (valuesSaved) {
      setShowRestore(true);
      setSavedTimestamp(valuesSaved.timestamp);
    }
  }, [valuesSaved]);

  return (
    <>
      <RestoreFormDialog
        open={showRestore}
        onRestore={handleRestore}
        onDiscard={handleDiscard}
        savedAt={savedTimestamp}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <CartSummary />
        </div>

        <div className="space-y-8">
          {formError && (
            <FormFeedback
              type="error"
              title="Erro no Pagamento"
              message={formError}
            />
          )}

          {formSuccess && (
            <FormFeedback
              type="success"
              title="Pagamento Concluído"
              message={formSuccess}
            />
          )}

          <div>
            <div className="flex justify-between items-center">
              <AutosaveIndicator />
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <ScrollArea className="h-[calc(70vh-12rem)] overflow-visible">
                <Card>
                  <CardHeader>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Dados do Cliente
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <CustomerForm />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Dados do Pagamento
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <PaymentForm />
                  </CardContent>
                </Card>
              </ScrollArea>
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isPending}
              >
                {isPending ? (
                  <div className="flex items-center space-x-2">
                    <span className="animate-spin">⚬</span>
                    <span>Processando pagamento...</span>
                  </div>
                ) : (
                  `Pagar ${utilsFormat.currency(total)}`
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export function CheckoutContainer() {
  const form = useForm<CheckoutFormData>({
    mode: "onChange",
    resolver: yupResolver(checkoutFormSchema),
    defaultValues: {
      paymentMethod: {
        type: "card",
        card: {
          installments: 1,
        },
      },
    },
  });

  return (
    <FormProvider {...form}>
      <CheckoutContainerContent />
    </FormProvider>
  );
}
