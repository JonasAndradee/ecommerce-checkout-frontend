import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/presentation/components/ui/form";

import { MaskedInput } from "@/presentation/components/ui/masked-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/presentation/components/ui/select";
import { TooltipInfo } from "@/presentation/components/ui/tooltip-info";

const cardNumberPattern = [
  { mask: "0000 0000 0000 0000" },
  {
    mask: "0000 000000 00000",
    regex: "^3[47]\\d{0,13}",
  },
];

export function PaymentForm() {
  const form = useFormContext();

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="paymentMethod.card.number"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center">
              <FormLabel>Número do Cartão</FormLabel>
              <TooltipInfo content="Digite os 16 números do cartão" />
            </div>
            <FormControl>
              <MaskedInput
                {...field}
                placeholder="0000 0000 0000 0000"
                autoComplete="cc-number"
                mask={cardNumberPattern}
                inputMode="numeric"
              />
            </FormControl>
            <FormDescription>
              Processamos seus dados com segurança
            </FormDescription>
            <FormMessage role="alert" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="paymentMethod.card.holderName"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center">
              <FormLabel>Nome no Cartão</FormLabel>
              <TooltipInfo content="Digite o nome exatamente como aparece no cartão" />
            </div>
            <FormControl>
              <MaskedInput
                {...field}
                mask={/^[A-Za-z\s]*$/}
                prepare={(val: string) => val.toUpperCase()}
                placeholder="JOÃO DA SILVA"
              />
            </FormControl>
            <FormMessage role="alert" />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="paymentMethod.card.expirationDate"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Data de Validade</FormLabel>
                <TooltipInfo content="Digite a data de validade no formato MM/AA" />
              </div>
              <FormControl>
                <MaskedInput {...field} mask="00/00" placeholder="MM/AA" />
              </FormControl>
              <FormMessage role="alert" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="paymentMethod.card.cvv"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>CVV</FormLabel>
                <TooltipInfo content="3 ou 4 dígitos encontrados no verso do cartão" />
              </div>
              <FormControl>
                <MaskedInput
                  {...field}
                  mask="0000"
                  placeholder="123"
                  type="password"
                />
              </FormControl>
              <FormMessage role="alert" />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="paymentMethod.card.installments"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center">
              <FormLabel>Parcelas</FormLabel>
              <TooltipInfo content="Escolha em quantas vezes quer dividir sua compra" />
            </div>
            <Select
              onValueChange={(value) => field.onChange(Number(value))}
              value={field.value?.toString()}
              defaultValue={field.value?.toString()}
            >
              <FormControl>
                <SelectTrigger data-testid="installments-trigger">
                  <SelectValue placeholder="Selecione o número de parcelas" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((number) => (
                  <SelectItem
                    key={number}
                    value={number.toString()}
                    data-testid={`installment-option-${number}`}
                  >
                    {number}x {number === 1 ? "à vista" : "sem juros"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>Parcele em até 12x sem juros</FormDescription>
            <FormMessage role="alert" />
          </FormItem>
        )}
      />
    </div>
  );
}
