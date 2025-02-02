import { TransactionError } from "@/domain/errors/transaction-error";

interface FieldError {
  message: string;
  field?: string;
}

export function handleFormError(error: unknown): FieldError {
  if (error instanceof TransactionError) {
    return {
      message: error.message,
      field: error.field,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
    };
  }

  return {
    message: "An unexpected error occurred",
  };
}
