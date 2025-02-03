import { TransactionService } from "../transaction-service";
import { TransactionRepository } from "@/domain/repositories/transaction-repository";
import {
  TransactionRequest,
  TransactionResponse,
} from "@/domain/entities/transaction";
import { PaymentType } from "@/domain/entities/common";

describe("TransactionService", () => {
  let repository: jest.Mocked<TransactionRepository>;
  let service: TransactionService;

  beforeEach(() => {
    repository = {
      create: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn(),
    };
    service = new TransactionService(repository);
  });

  const mockTransaction: TransactionRequest = {
    amount: 1000,
    customer: {
      firstName: "John",
      lastName: "Doe",
      document: {
        type: "cpf",
        number: "12345678900",
      },
      address: {
        city: "São Paulo",
        street: "Test",
        number: "123",
        country: "Brazil",
        state: "SP",
        neighborhood: "Test",
      },
    },
    items: [
      {
        name: "Product",
        quantity: 1,
        amount: 1000,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        number: "4532756279624064",
        holderName: "John Doe",
        cvv: "123",
        expirationDate: "12/2025",
        installments: 1,
      },
    },
  };

  describe("createTransaction", () => {
    it("should create a valid transaction", async () => {
      const mockResponse: TransactionResponse = {
        id: "1",
        status: "authorized",
        ...mockTransaction,
        paymentMethod: {
          type: "card",
          card: {
            firstDigits: "4532",
            lastDigits: "4064",
            holderName: "John Doe",
            expirationDate: "12/2025",
            installments: 1,
          },
        },
      };

      repository.create.mockResolvedValue(mockResponse);

      const result = await service.createTransaction(mockTransaction);
      expect(result).toEqual(mockResponse);
    });

    it("should throw error for invalid card", async () => {
      const invalidTransaction = {
        ...mockTransaction,
        paymentMethod: {
          type: "card" as PaymentType,
          card: {
            ...mockTransaction.paymentMethod.card,
            number: "1234",
          },
        },
      };

      await expect(
        service.createTransaction(invalidTransaction)
      ).rejects.toThrow("Invalid card information");
    });
  });
});
