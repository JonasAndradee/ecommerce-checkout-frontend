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
import { TooltipInfo } from "@/presentation/components/ui/tooltip-info";
import { Input } from "@/presentation/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/presentation/components/ui/select";

export function CustomerForm() {
  const form = useFormContext();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="customer.firstName"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Nome</FormLabel>
                <TooltipInfo content="Digite seu nome" />
              </div>
              <FormControl>
                <Input {...field} placeholder="Ex: João" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="customer.lastName"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Sobrenome</FormLabel>
                <TooltipInfo content="Digite seu sobrenome completo" />
              </div>
              <FormControl>
                <Input {...field} placeholder="Ex: Silva" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="customer.document.type"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Tipo de Documento</FormLabel>
                <TooltipInfo content="Escolha CPF para pessoa física ou CNPJ para empresa" />
              </div>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de documento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="cpf">CPF</SelectItem>
                  <SelectItem value="cnpj">CNPJ</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="customer.document.number"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Número do Documento</FormLabel>
                <TooltipInfo
                  content={
                    form.watch("customer.document.type") === "cpf"
                      ? "Digite os 11 números do seu CPF"
                      : "Digite os 14 números do seu CNPJ"
                  }
                />
              </div>
              <FormControl>
                <MaskedInput
                  {...field}
                  mask={
                    form.watch("customer.document.type") === "cpf"
                      ? "000.000.000-00"
                      : "00.000.000/0000-00"
                  }
                  placeholder={
                    form.watch("customer.document.type") === "cpf"
                      ? "000.000.000-00"
                      : "00.000.000/0000-00"
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="customer.address.street"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-center">
              <FormLabel>Endereço</FormLabel>
              <TooltipInfo content="Digite o nome da rua, avenida, etc" />
            </div>
            <FormControl>
              <Input {...field} placeholder="Ex: Avenida Paulista" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-3 gap-4">
        <FormField
          control={form.control}
          name="customer.address.number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Ex: 1000" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="customer.address.neighborhood"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bairro</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Ex: Centro" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="customer.address.city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cidade</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Ex: São Paulo" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="customer.address.state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Ex: SP" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="customer.address.country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>País</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
