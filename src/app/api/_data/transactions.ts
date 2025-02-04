import { TransactionResponse } from "@/domain/entities/transaction";

export const transactions: TransactionResponse[] = [
  {
    id: "eace0041-723c-44b2-887d-631878171bbf",
    status: "authorized",
    amount: 1000,
    customer: {
      firstName: "João",
      lastName: "Silva",
      document: {
        type: "cpf",
        number: "12345678900",
      },
      address: {
        city: "São Paulo",
        street: "Av Paulista",
        number: "1000",
        country: "Brasil",
        state: "SP",
        neighborhood: "Bela Vista",
      },
    },
    items: [
      {
        name: "Smartphone Galaxy A54",
        quantity: 1,
        amount: 1999.99,
      },
      {
        name: "Fone de Ouvido Bluetooth",
        quantity: 1,
        amount: 299.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "1234",
        lastDigits: "4321",
        holderName: "João Silva",
        expirationDate: "12/2025",
        installments: 1,
      },
    },
  },
  {
    id: "7b8e5d2f-4a19-4b2c-9e38-6c2145a34c55",
    status: "failed",
    amount: 4599.99,
    customer: {
      firstName: "Maria",
      lastName: "Santos",
      document: {
        type: "cpf",
        number: "98765432100",
      },
      address: {
        city: "Rio de Janeiro",
        street: "Rua Copacabana",
        number: "500",
        country: "Brasil",
        state: "RJ",
        neighborhood: "Copacabana",
      },
    },
    items: [
      {
        name: "Smart TV 50 4K",
        quantity: 1,
        amount: 4599.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5123",
        lastDigits: "9876",
        holderName: "MARIA SANTOS",
        expirationDate: "08/2024",
        installments: 12,
      },
    },
  },
  {
    id: "9c1d8f3e-6b5a-4d2c-8e7f-1a2b3c4d5e6f",
    status: "authorized",
    amount: 3499.97,
    customer: {
      firstName: "Pedro",
      lastName: "Oliveira",
      document: {
        type: "cnpj",
        number: "12345678000190",
      },
      address: {
        city: "Curitiba",
        street: "Rua XV de Novembro",
        number: "100",
        country: "Brasil",
        state: "PR",
        neighborhood: "Centro",
      },
    },
    items: [
      {
        name: "Notebook Essentials",
        quantity: 1,
        amount: 2999.99,
      },
      {
        name: "Mouse sem Fio",
        quantity: 1,
        amount: 199.99,
      },
      {
        name: "Teclado Mecânico",
        quantity: 1,
        amount: 299.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4024",
        lastDigits: "1234",
        holderName: "PEDRO OLIVEIRA",
        expirationDate: "03/2026",
        installments: 6,
      },
    },
  },
  {
    id: "2e4a6c8b-9d1f-4e3a-8c7b-5a4d2e1b9c8d",
    status: "authorized",
    amount: 799.99,
    customer: {
      firstName: "Ana",
      lastName: "Ferreira",
      document: {
        type: "cpf",
        number: "45678912300",
      },
      address: {
        city: "Salvador",
        street: "Avenida Oceânica",
        number: "789",
        country: "Brasil",
        state: "BA",
        neighborhood: "Barra",
      },
    },
    items: [
      {
        name: "Smartwatch Pro",
        quantity: 1,
        amount: 799.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5522",
        lastDigits: "7890",
        holderName: "ANA FERREIRA",
        expirationDate: "09/2025",
        installments: 3,
      },
    },
  },
  {
    id: "1a3b5c7d-9e8f-4d2c-6b5a-3f2e1d4c8b9a",
    status: "failed",
    amount: 5999.99,
    customer: {
      firstName: "Carlos",
      lastName: "Mendes",
      document: {
        type: "cpf",
        number: "78912345600",
      },
      address: {
        city: "Belo Horizonte",
        street: "Rua da Bahia",
        number: "456",
        country: "Brasil",
        state: "MG",
        neighborhood: "Centro",
      },
    },
    items: [
      {
        name: "iPhone 13",
        quantity: 1,
        amount: 5999.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4111",
        lastDigits: "4321",
        holderName: "CARLOS MENDES",
        expirationDate: "11/2024",
        installments: 10,
      },
    },
  },
  {
    id: "5e7d9f2a-1b3c-4d5e-8f9a-2b4c6d8e0f1a",
    status: "authorized",
    amount: 2499.98,
    customer: {
      firstName: "Mariana",
      lastName: "Costa",
      document: {
        type: "cpf",
        number: "32165498700",
      },
      address: {
        city: "Recife",
        street: "Avenida Boa Viagem",
        number: "1234",
        country: "Brasil",
        state: "PE",
        neighborhood: "Boa Viagem",
      },
    },
    items: [
      {
        name: "Câmera Digital",
        quantity: 1,
        amount: 1999.99,
      },
      {
        name: "Cartão de Memória 128GB",
        quantity: 1,
        amount: 499.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5555",
        lastDigits: "8888",
        holderName: "MARIANA COSTA",
        expirationDate: "07/2025",
        installments: 5,
      },
    },
  },
  {
    id: "4f8e2d1a-7b9c-3e5d-6a4f-8c2b1d9e7a4f",
    status: "authorized",
    amount: 1899.97,
    customer: {
      firstName: "Rafael",
      lastName: "Almeida",
      document: {
        type: "cpf",
        number: "65432198700",
      },
      address: {
        city: "Florianópolis",
        street: "Avenida Beira Mar",
        number: "567",
        country: "Brasil",
        state: "SC",
        neighborhood: "Centro",
      },
    },
    items: [
      {
        name: "Tablet 10 polegadas",
        quantity: 1,
        amount: 1499.99,
      },
      {
        name: "Capa Protetora",
        quantity: 1,
        amount: 199.99,
      },
      {
        name: "Película de Vidro",
        quantity: 1,
        amount: 199.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4222",
        lastDigits: "5555",
        holderName: "RAFAEL ALMEIDA",
        expirationDate: "04/2025",
        installments: 4,
      },
    },
  },
  {
    id: "8a7b6c5d-4e3f-2d1c-9b8a-7f6e5d4c3b2a",
    status: "failed",
    amount: 3499.99,
    customer: {
      firstName: "Juliana",
      lastName: "Lima",
      document: {
        type: "cpf",
        number: "78945612300",
      },
      address: {
        city: "Porto Alegre",
        street: "Rua dos Andradas",
        number: "890",
        country: "Brasil",
        state: "RS",
        neighborhood: "Centro Histórico",
      },
    },
    items: [
      {
        name: "Console PlayStation 5",
        quantity: 1,
        amount: 3499.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5454",
        lastDigits: "9999",
        holderName: "JULIANA LIMA",
        expirationDate: "10/2024",
        installments: 12,
      },
    },
  },
  {
    id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7",
    status: "authorized",
    amount: 6999.99,
    customer: {
      firstName: "Fernando",
      lastName: "Santos",
      document: {
        type: "cnpj",
        number: "98765432000190",
      },
      address: {
        city: "Brasília",
        street: "SQN 309",
        number: "Bloco A",
        country: "Brasil",
        state: "DF",
        neighborhood: "Asa Norte",
      },
    },
    items: [
      {
        name: "MacBook Air",
        quantity: 1,
        amount: 6999.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4000",
        lastDigits: "1111",
        holderName: "FERNANDO SANTOS",
        expirationDate: "12/2025",
        installments: 10,
      },
    },
  },
  {
    id: "9i8h7g6f-5e4d-3c2b-1a0z-9y8x7w6v5u",
    status: "authorized",
    amount: 899.97,
    customer: {
      firstName: "Camila",
      lastName: "Rodrigues",
      document: {
        type: "cpf",
        number: "14725836900",
      },
      address: {
        city: "Manaus",
        street: "Avenida Eduardo Ribeiro",
        number: "123",
        country: "Brasil",
        state: "AM",
        neighborhood: "Centro",
      },
    },
    items: [
      {
        name: "Fone de Ouvido com Cancelamento de Ruído",
        quantity: 1,
        amount: 899.97,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5333",
        lastDigits: "7777",
        holderName: "CAMILA RODRIGUES",
        expirationDate: "06/2025",
        installments: 3,
      },
    },
  },
  {
    id: "7d6e5f4g-3h2i-1j0k-9l8m-7n6o5p4q3r",
    status: "authorized",
    amount: 2599.98,
    customer: {
      firstName: "Lucas",
      lastName: "Pereira",
      document: {
        type: "cpf",
        number: "96385274100",
      },
      address: {
        city: "Fortaleza",
        street: "Avenida Beira Mar",
        number: "2000",
        country: "Brasil",
        state: "CE",
        neighborhood: "Meireles",
      },
    },
    items: [
      {
        name: "Monitor 27 polegadas",
        quantity: 1,
        amount: 1999.99,
      },
      {
        name: "Suporte Ergonômico",
        quantity: 1,
        amount: 599.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4777",
        lastDigits: "8888",
        holderName: "LUCAS PEREIRA",
        expirationDate: "05/2025",
        installments: 6,
      },
    },
  },
  {
    id: "5q4w3e2r-1t6y-7u8i-9o0p-4l3k2j1h8g",
    status: "failed",
    amount: 7499.99,
    customer: {
      firstName: "Beatriz",
      lastName: "Carvalho",
      document: {
        type: "cpf",
        number: "74185296300",
      },
      address: {
        city: "Natal",
        street: "Rua Praia de Ponta Negra",
        number: "456",
        country: "Brasil",
        state: "RN",
        neighborhood: "Ponta Negra",
      },
    },
    items: [
      {
        name: "iPhone 14 Pro",
        quantity: 1,
        amount: 7499.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5888",
        lastDigits: "4444",
        holderName: "BEATRIZ CARVALHO",
        expirationDate: "08/2024",
        installments: 12,
      },
    },
  },
  {
    id: "3f2e1d4c-5b6a-7n8m-9k0j-1h2g3f4d5s",
    status: "authorized",
    amount: 4299.97,
    customer: {
      firstName: "Gustavo",
      lastName: "Martins",
      document: {
        type: "cnpj",
        number: "45678912000145",
      },
      address: {
        city: "Vitória",
        street: "Avenida Nossa Senhora da Penha",
        number: "789",
        country: "Brasil",
        state: "ES",
        neighborhood: "Praia do Canto",
      },
    },
    items: [
      {
        name: "Notebook Dell Inspiron",
        quantity: 1,
        amount: 3999.99,
      },
      {
        name: "Mochila para Notebook",
        quantity: 1,
        amount: 299.98,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4999",
        lastDigits: "3333",
        holderName: "GUSTAVO MARTINS",
        expirationDate: "03/2026",
        installments: 8,
      },
    },
  },
  {
    id: "2k3l4m5n-6o7p-8q9r-0s1t-2u3v4w5x6y",
    status: "authorized",
    amount: 1599.99,
    customer: {
      firstName: "Carolina",
      lastName: "Souza",
      document: {
        type: "cpf",
        number: "25836914700",
      },
      address: {
        city: "Goiânia",
        street: "Avenida 85",
        number: "1500",
        country: "Brasil",
        state: "GO",
        neighborhood: "Setor Bueno",
      },
    },
    items: [
      {
        name: "Air Fryer Digital",
        quantity: 1,
        amount: 799.99,
      },
      {
        name: "Liquidificador Multifuncional",
        quantity: 1,
        amount: 800.0,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5111",
        lastDigits: "6666",
        holderName: "CAROLINA SOUZA",
        expirationDate: "07/2025",
        installments: 5,
      },
    },
  },
  {
    id: "8x7w6v5u-4t3s-2r1q-0p9o-8n7m6l5k4j",
    status: "failed",
    amount: 5299.98,
    customer: {
      firstName: "Ricardo",
      lastName: "Gomes",
      document: {
        type: "cpf",
        number: "36914725800",
      },
      address: {
        city: "Belém",
        street: "Avenida Presidente Vargas",
        number: "2500",
        country: "Brasil",
        state: "PA",
        neighborhood: "Campina",
      },
    },
    items: [
      {
        name: "Smart TV 55 OLED",
        quantity: 1,
        amount: 4799.99,
      },
      {
        name: "Suporte TV Articulado",
        quantity: 1,
        amount: 499.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4123",
        lastDigits: "9876",
        holderName: "RICARDO GOMES",
        expirationDate: "09/2024",
        installments: 10,
      },
    },
  },
  {
    id: "1m2n3b4v-5c6x-7z8l-9k0m-1q2w3e4r5t",
    status: "authorized",
    amount: 3699.99,
    customer: {
      firstName: "Amanda",
      lastName: "Oliveira",
      document: {
        type: "cpf",
        number: "15935785200",
      },
      address: {
        city: "João Pessoa",
        street: "Avenida Epitácio Pessoa",
        number: "1234",
        country: "Brasil",
        state: "PB",
        neighborhood: "Tambaú",
      },
    },
    items: [
      {
        name: "iPad Pro 11",
        quantity: 1,
        amount: 3699.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5444",
        lastDigits: "2222",
        holderName: "AMANDA OLIVEIRA",
        expirationDate: "11/2025",
        installments: 8,
      },
    },
  },
  {
    id: "9p8o7i6u-5y4t-3r2e-1w2q-9z8x7c6v5b",
    status: "authorized",
    amount: 2899.97,
    customer: {
      firstName: "Thiago",
      lastName: "Barbosa",
      document: {
        type: "cnpj",
        number: "78912345000188",
      },
      address: {
        city: "Campo Grande",
        street: "Avenida Afonso Pena",
        number: "567",
        country: "Brasil",
        state: "MS",
        neighborhood: "Centro",
      },
    },
    items: [
      {
        name: "Câmera Mirrorless",
        quantity: 1,
        amount: 2499.99,
      },
      {
        name: "Lente 50mm",
        quantity: 1,
        amount: 399.98,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4789",
        lastDigits: "5555",
        holderName: "THIAGO BARBOSA",
        expirationDate: "02/2026",
        installments: 6,
      },
    },
  },
  {
    id: "4f5g6h7j-8k9l-0q1w-2e3r-4t5y6u7i8o",
    status: "authorized",
    amount: 1299.99,
    customer: {
      firstName: "Isabela",
      lastName: "Santos",
      document: {
        type: "cpf",
        number: "95175385200",
      },
      address: {
        city: "Teresina",
        street: "Avenida Frei Serafim",
        number: "789",
        country: "Brasil",
        state: "PI",
        neighborhood: "Centro",
      },
    },
    items: [
      {
        name: "Aspirador Robot",
        quantity: 1,
        amount: 1299.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5777",
        lastDigits: "1234",
        holderName: "ISABELA SANTOS",
        expirationDate: "04/2025",
        installments: 4,
      },
    },
  },
  {
    id: "2h3j4k5l-6m7n-8p9q-0r1s-2t3u4v5w6x",
    status: "authorized",
    amount: 8999.99,
    customer: {
      firstName: "Eduardo",
      lastName: "Fernandes",
      document: {
        type: "cnpj",
        number: "32165498000177",
      },
      address: {
        city: "São Luís",
        street: "Avenida Litorânea",
        number: "321",
        country: "Brasil",
        state: "MA",
        neighborhood: "Calhau",
      },
    },
    items: [
      {
        name: "MacBook Pro 14",
        quantity: 1,
        amount: 8999.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4567",
        lastDigits: "8901",
        holderName: "EDUARDO FERNANDES",
        expirationDate: "06/2026",
        installments: 12,
      },
    },
  },
  {
    id: "7y8u9i0o-1p2a-3s4d-5f6g-7h8j9k0l1",
    status: "failed",
    amount: 4599.98,
    customer: {
      firstName: "Larissa",
      lastName: "Castro",
      document: {
        type: "cpf",
        number: "78945612300",
      },
      address: {
        city: "Maceió",
        street: "Avenida da Paz",
        number: "987",
        country: "Brasil",
        state: "AL",
        neighborhood: "Pajuçara",
      },
    },
    items: [
      {
        name: "iPhone 13 Mini",
        quantity: 1,
        amount: 4299.99,
      },
      {
        name: "Carregador USB-C",
        quantity: 1,
        amount: 299.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5234",
        lastDigits: "7890",
        holderName: "LARISSA CASTRO",
        expirationDate: "08/2025",
        installments: 10,
      },
    },
  },
  {
    id: "3d4f5g6h-7j8k-9l0q-1w2e-3r4t5y6u7i",
    status: "authorized",
    amount: 6799.97,
    customer: {
      firstName: "Renato",
      lastName: "Peixoto",
      document: {
        type: "cpf",
        number: "45678912300",
      },
      address: {
        city: "Cuiabá",
        street: "Avenida do CPA",
        number: "456",
        country: "Brasil",
        state: "MT",
        neighborhood: "Centro Norte",
      },
    },
    items: [
      {
        name: "Notebook Gamer",
        quantity: 1,
        amount: 5999.99,
      },
      {
        name: "Mouse Gamer",
        quantity: 1,
        amount: 399.99,
      },
      {
        name: "Mousepad XL",
        quantity: 1,
        amount: 399.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4912",
        lastDigits: "3456",
        holderName: "RENATO PEIXOTO",
        expirationDate: "10/2025",
        installments: 10,
      },
    },
  },
  {
    id: "8n9m0p1q-2r3s-4t5u-6v7w-8x9y0z1a2",
    status: "authorized",
    amount: 1899.99,
    customer: {
      firstName: "Patricia",
      lastName: "Mendes",
      document: {
        type: "cpf",
        number: "12378945600",
      },
      address: {
        city: "Aracaju",
        street: "Avenida Beira Mar",
        number: "789",
        country: "Brasil",
        state: "SE",
        neighborhood: "13 de Julho",
      },
    },
    items: [
      {
        name: "Ar Condicionado Split",
        quantity: 1,
        amount: 1899.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5678",
        lastDigits: "4321",
        holderName: "PATRICIA MENDES",
        expirationDate: "03/2025",
        installments: 6,
      },
    },
  },
  {
    id: "5b6n7m8k-9l0p-1q2w-3e4r-5t6y7u8i9o",
    status: "authorized",
    amount: 2199.98,
    customer: {
      firstName: "Gabriel",
      lastName: "Monteiro",
      document: {
        type: "cpf",
        number: "65432198700",
      },
      address: {
        city: "Palmas",
        street: "Avenida JK",
        number: "234",
        country: "Brasil",
        state: "TO",
        neighborhood: "Plano Diretor Sul",
      },
    },
    items: [
      {
        name: "Console Xbox Series S",
        quantity: 1,
        amount: 1999.99,
      },
      {
        name: "Controle Extra",
        quantity: 1,
        amount: 199.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4444",
        lastDigits: "9999",
        holderName: "GABRIEL MONTEIRO",
        expirationDate: "01/2026",
        installments: 5,
      },
    },
  },
  {
    id: "1c2v3b4n-5m6k-7l8p-9o0i-1u2y3t4r5e",
    status: "failed",
    amount: 5499.99,
    customer: {
      firstName: "Débora",
      lastName: "Alves",
      document: {
        type: "cpf",
        number: "98765432100",
      },
      address: {
        city: "Macapá",
        street: "Avenida FAB",
        number: "567",
        country: "Brasil",
        state: "AP",
        neighborhood: "Central",
      },
    },
    items: [
      {
        name: "Samsung Galaxy S23",
        quantity: 1,
        amount: 5499.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5101",
        lastDigits: "8765",
        holderName: "DEBORA ALVES",
        expirationDate: "05/2025",
        installments: 12,
      },
    },
  },
  {
    id: "9x8c7v6b-5n4m-3k2j-1h0g-9f8d7s6a5",
    status: "authorized",
    amount: 3299.97,
    customer: {
      firstName: "Marcos",
      lastName: "Ribeiro",
      document: {
        type: "cnpj",
        number: "45612378000190",
      },
      address: {
        city: "Porto Velho",
        street: "Avenida Carlos Gomes",
        number: "890",
        country: "Brasil",
        state: "RO",
        neighborhood: "São Cristóvão",
      },
    },
    items: [
      {
        name: "Projetor 4K",
        quantity: 1,
        amount: 2799.99,
      },
      {
        name: "Tela de Projeção",
        quantity: 1,
        amount: 499.98,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4789",
        lastDigits: "3333",
        holderName: "MARCOS RIBEIRO",
        expirationDate: "07/2026",
        installments: 8,
      },
    },
  },
  {
    id: "4k5j6h7g-8f9d-0s1a-2p3o-4i5u6y7t8r",
    status: "authorized",
    amount: 999.99,
    customer: {
      firstName: "Vanessa",
      lastName: "Machado",
      document: {
        type: "cpf",
        number: "32165498700",
      },
      address: {
        city: "Rio Branco",
        street: "Rua Rui Barbosa",
        number: "123",
        country: "Brasil",
        state: "AC",
        neighborhood: "Centro",
      },
    },
    items: [
      {
        name: "Purificador de Água",
        quantity: 1,
        amount: 999.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5222",
        lastDigits: "4444",
        holderName: "VANESSA MACHADO",
        expirationDate: "12/2024",
        installments: 3,
      },
    },
  },
  {
    id: "7d8f9g0h-1j2k-3l4m-5n6p-7q8r9s0t1u",
    status: "authorized",
    amount: 4799.98,
    customer: {
      firstName: "Leonardo",
      lastName: "Moreira",
      document: {
        type: "cpf",
        number: "74185296300",
      },
      address: {
        city: "Boa Vista",
        street: "Avenida Ville Roy",
        number: "456",
        country: "Brasil",
        state: "RR",
        neighborhood: "Canarinho",
      },
    },
    items: [
      {
        name: "Geladeira Frost Free",
        quantity: 1,
        amount: 4299.99,
      },
      {
        name: "Filtro Extra",
        quantity: 1,
        amount: 499.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4159",
        lastDigits: "7531",
        holderName: "LEONARDO MOREIRA",
        expirationDate: "09/2025",
        installments: 10,
      },
    },
  },
  {
    id: "2w3e4r5t-6y7u-8i9o-0p1a-2s3d4f5g6h",
    status: "failed",
    amount: 1599.99,
    customer: {
      firstName: "Bianca",
      lastName: "Teixeira",
      document: {
        type: "cpf",
        number: "95175385200",
      },
      address: {
        city: "Santarém",
        street: "Avenida Tapajós",
        number: "789",
        country: "Brasil",
        state: "PA",
        neighborhood: "Centro",
      },
    },
    items: [
      {
        name: "Micro-ondas Digital",
        quantity: 1,
        amount: 1599.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5505",
        lastDigits: "8642",
        holderName: "BIANCA TEIXEIRA",
        expirationDate: "11/2024",
        installments: 4,
      },
    },
  },
  {
    id: "9k8j7h6g-5f4d-3s2a-1p0o-9i8u7y6t5r",
    status: "authorized",
    amount: 7899.97,
    customer: {
      firstName: "Henrique",
      lastName: "Campos",
      document: {
        type: "cnpj",
        number: "89012345000177",
      },
      address: {
        city: "Uberlândia",
        street: "Avenida Rondon Pacheco",
        number: "1234",
        country: "Brasil",
        state: "MG",
        neighborhood: "Santa Maria",
      },
    },
    items: [
      {
        name: "Smart TV 65 QLED",
        quantity: 1,
        amount: 6999.99,
      },
      {
        name: "Soundbar",
        quantity: 1,
        amount: 899.98,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "4321",
        lastDigits: "9876",
        holderName: "HENRIQUE CAMPOS",
        expirationDate: "02/2026",
        installments: 12,
      },
    },
  },
  {
    id: "4v5b6n7m-8k9l-0p1q-2w3e-4r5t6y7u8i",
    status: "authorized",
    amount: 3499.99,
    customer: {
      firstName: "Tatiana",
      lastName: "Nunes",
      document: {
        type: "cpf",
        number: "45612378900",
      },
      address: {
        city: "Imperatriz",
        street: "Avenida Bernardo Sayão",
        number: "567",
        country: "Brasil",
        state: "MA",
        neighborhood: "Nova Imperatriz",
      },
    },
    items: [
      {
        name: "iPhone 12",
        quantity: 1,
        amount: 3499.99,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "5707",
        lastDigits: "1357",
        holderName: "TATIANA NUNES",
        expirationDate: "04/2025",
        installments: 8,
      },
    },
  },
];
