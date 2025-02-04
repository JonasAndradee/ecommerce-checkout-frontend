# E-commerce Checkout

Aplicação de checkout desenvolvida com Next.js 14 para processar transações de e-commerce.

## 🚀 Tecnologias

- Next.js 14
- ReactJs 19
- TypeScript
- Tailwind CSS
- Shadcn/ui
- React Query
- Zustand
- Yup
- Cypress
- Jest
- React Testing Library
- React Hook Forms

## 🎯 Funcionalidades

### Página de Checkout
- Lista de itens do carrinho
- Coleta de informações do cliente
- Processamento de pagamento
- Validação de formulário em tempo real
- Auto-save de formulário
- Máscara de inputs
- Validação de CPF/CNPJ

### Listagem de Transações
- Visualização de todas as transações
- Paginação

### Detalhes da Transação
- Informações completas da transaçãos

## 🔧 Instalação

### Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

```bash
# Clone o repositório
git clone https://github.com/JonasAndradee/ecommerce-checkout-frontend.git

# Entre no diretório
cd ecommerce-checkout-frontend

# Instale as dependências
yarn install

# Inicie o servidor de desenvolvimento
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🛣️ Rotas da Aplicação

- **/** - Listagem de todas as transações - [https://www.lucralyze.com.br/](https://www.lucralyze.com.br/)
- **/checkout/{id}** - Página de checkout para realizar uma nova transação - [https://www.lucralyze.com.br/checkout/eace0041-723c-44b2-887d-631878171bbf](https://www.lucralyze.com.br/checkout/eace0041-723c-44b2-887d-631878171bbf)
- **/transactions/{id}** - Visualização detalhada de uma transação específica - [https://www.lucralyze.com.br/transactions/eace0041-723c-44b2-887d-631878171bbf](https://www.lucralyze.com.br/transactions/eace0041-723c-44b2-887d-631878171bbf)

## 📁 Estrutura do Projeto

```
src/
├── application/        # Serviços e lógica de negócio
│   └── services/
├── domain/            # Entidades e interfaces
│   ├── entities/
│   └── repositories/
├── infrastructure/    # Implementação de serviços externos
│   └── http/
└── presentation/     # Componentes e páginas
    ├── components/
    │   └── ui/
    ├── contexts/
    ├── hooks/
    └── app/
```

## 🏗️ Arquitetura

O projeto segue os princípios do Domain-Driven Design (DDD):

- **Camada de Domínio**: Contém as entidades e interfaces de repositório
- **Camada de Aplicação**: Implementa a lógica de negócio e casos de uso
- **Camada de Infraestrutura**: Lida com preocupações externas como comunicação com API
- **Camada de Apresentação**: Gerencia componentes e interação do usuário

## 🧪 Testes

```bash
# Executar testes unitários
yarn test

# Executar testes e2e
yarn cypress:run
```

## 📡 API Endpoints

### Criar Transação
- **POST** `/api/transactions`
- Cria uma nova transação

### Listar Transações
- **GET** `/api/transactions`
- Retorna lista de transações

### Buscar Transação
- **GET** `/api/transactions/{id}`
- Retorna detalhes de uma transação específica

