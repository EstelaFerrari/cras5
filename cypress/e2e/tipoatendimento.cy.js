describe("Tipo de atendimento", ()=>{
  beforeEach(()=>{
    cy.visit('https://front-cras.app.fslab.dev/')
    cy.get("#email").type("dev@gmail.com");
    cy.get("#senha").type("123");
    cy.get(".styles_button__dr0t2").click();
  })

  it("Deve cadastrar tipo de atendimento com todos os campos preenchidos", () => { 
    cy.get('.styles_buttonMenu__mmyUS > img').click(); 
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"] > .styles_containerLinkText__Rz0Qr').click();
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click()
    cy.get('#nome').type("testando")
    cy.get('[type="submit"]').click()
    
  })

  it("Deve retornar msg de campos obrigatórios", () => {
    cy.get('.styles_buttonMenu__mmyUS > img').click(); 
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"] > .styles_containerLinkText__Rz0Qr').click();
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get(':nth-child(3) > .styles_container__NSLBw > #buscar').click()
    cy.get('[type="submit"]').click()
    cy.get('.styles_errorMessage__IKSlh').contains('Nome é obrigatório')
  })

  it("Deve pesquisar um tipo de atendimento e alterar seu nome",() => {
    cy.get('.styles_buttonMenu__mmyUS > img').click(); 
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/tipo"] > .styles_containerLinkText__Rz0Qr').click();
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('#tipo').type("testando");
    cy.get(':nth-child(2) > .styles_container__NSLBw > #buscar').click();
    cy.get(':nth-child(1) > :nth-child(2) > .styles_container__NSLBw > [alt="Editar tipo de atendimento"]').click();
    cy.get('#nome').clear();
    cy.get('#nome').type("testesti");
    cy.get('[type="submit"]').click()

  })
})