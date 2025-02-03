import * as yup from "yup";
import { PaymentValidation } from "@/application/services/validation/payment-validation";
import { DocumentValidation } from "@/application/services/validation/document-validation";

export const checkoutFormSchema = yup.object({
  customer: yup.object({
    firstName: yup.string().required("O primeiro nome é obrigatório"),
    lastName: yup.string().required("O sobrenome é obrigatório"),
    document: yup.object({
      type: yup
        .string()
        .oneOf(["cpf", "cnpj"])
        .required("Tipo de documento é obrigatório"),
      number: yup
        .string()
        .required("Número do documento é obrigatório")
        .test("valid-document", "Documento inválido", function (value) {
          if (!value) return false;
          const documentType = this.parent.type;
          return DocumentValidation.validate(value, documentType);
        }),
    }),
    address: yup.object({
      city: yup.string().required("A cidade é obrigatória"),
      street: yup.string().required("A rua é obrigatória"),
      number: yup.string().required("O número é obrigatório"),
      country: yup.string().required("O país é obrigatório"),
      state: yup.string().required("O estado é obrigatório"),
      neighborhood: yup.string().required("O bairro é obrigatório"),
    }),
  }),
  paymentMethod: yup.object({
    type: yup
      .string()
      .oneOf(["card"])
      .required("O tipo de pagamento é obrigatório"),
    card: yup.object({
      number: yup
        .string()
        .required("O número do cartão é obrigatório")
        .test("card-number", "Número do cartão inválido", (value) =>
          value ? PaymentValidation.validateCardNumber(value) : false
        ),
      holderName: yup
        .string()
        .required("O nome do titular do cartão é obrigatório"),
      cvv: yup
        .string()
        .required("O CVV é obrigatório")
        .test("cvv", "CVV inválido", (value) =>
          value ? PaymentValidation.validateCVV(value) : false
        ),
      expirationDate: yup
        .string()
        .required("A data de validade é obrigatória")
        .test("expiration-date", "Data de validade inválida", (value) =>
          value ? PaymentValidation.validateExpirationDate(value) : false
        ),
      installments: yup
        .number()
        .required("O número de parcelas é obrigatório")
        .min(1, "O número mínimo de parcelas é 1")
        .max(12, "O número máximo de parcelas é 12"),
    }),
  }),
});

export type CheckoutFormData = yup.InferType<typeof checkoutFormSchema>;
