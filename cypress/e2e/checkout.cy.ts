describe("Checkout Flow", () => {
  beforeEach(() => {
    cy.visit("/checkout/e5bad3he-5eb6-402f-8b68-7baf4b0ce59c");
  });

  it("should display checkout form", () => {
    cy.get("form").should("exist");
    cy.contains("h2", "Dados do Cliente").should("be.visible");
    cy.contains("h2", "Dados do Pagamento").should("be.visible");
  });

  it("should validate required fields", () => {
    cy.get('button[type="submit"]').click();
    cy.get('[role="alert"]').should("exist");
    cy.contains("O primeiro nome é obrigatório").should("be.visible");
    cy.contains("O número do cartão é obrigatório").should("be.visible");
  });

  it("should validate invalid document", () => {
    cy.get('[data-testid="document-type-trigger"]').click();
    cy.get('[data-testid="cpf-option"]').click();
    cy.get('input[name="customer.document.number"]').type("11111111111");
    cy.get('button[type="submit"]').click();
    cy.contains("Documento inválido").should("be.visible");
  });

  it("should validate invalid credit card", () => {
    cy.get('input[name="paymentMethod.card.number"]').type("1111111111111111");
    cy.get('button[type="submit"]').click();
    cy.contains("Número do cartão inválido").should("be.visible");
  });

  it("should validate invalid CVV", () => {
    cy.get('input[name="paymentMethod.card.cvv"]').type("12");
    cy.get('button[type="submit"]').click();
    cy.contains("CVV inválido").should("be.visible");
  });

  it("should validate invalid expiration date", () => {
    cy.get('input[name="paymentMethod.card.expirationDate"]').type("12/20");
    cy.get('button[type="submit"]').click();
    cy.contains("Data de validade inválida").should("be.visible");
  });

  it("should complete checkout successfully", () => {
    cy.get('input[name="customer.firstName"]').type("João");
    cy.get('input[name="customer.lastName"]').type("Silva");
    cy.get('[data-testid="document-type-trigger"]').click();
    cy.get('[data-testid="cpf-option"]').click();
    cy.get('input[name="customer.document.number"]').type("83432616074");
    cy.get('input[name="customer.address.street"]').type("Avenida Paulista");
    cy.get('input[name="customer.address.number"]').type("1000");
    cy.get('input[name="customer.address.neighborhood"]').type("Bela Vista");
    cy.get('input[name="customer.address.city"]').type("São Paulo");
    cy.get('input[name="customer.address.state"]').type("SP");
    cy.get('input[name="customer.address.country"]').type("Brasil");
    cy.get('input[name="paymentMethod.card.number"]').type("4532756279624064");
    cy.get('input[name="paymentMethod.card.holderName"]').type("JOAO DA SILVA");
    cy.get('input[name="paymentMethod.card.cvv"]').type("123");
    cy.get('input[name="paymentMethod.card.expirationDate"]').type("12/25");
    cy.get('[data-testid="installments-trigger"]').click();
    cy.get('[data-testid="installment-option-1"]').click();
    cy.get('button[type="submit"]').click();
    cy.contains("Pagamento realizado com sucesso!").should("be.visible");
  });
});
