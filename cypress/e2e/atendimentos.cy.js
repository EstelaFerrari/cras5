describe("Atendimentos", ()=>{
  beforeEach(()=>{
    cy.visit('https://front-cras.app.fslab.dev/')
    cy.get("#email").type("dev@gmail.com");
    cy.get("#senha").type("123");
    cy.get(".styles_button__dr0t2").click();
  })

  it("Deve alterar os dados do atendimento cadastrado", () => { 
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"]').click();
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('select').select('testando').should('have.value', 'testando').click();
    cy.get('#buscar').click();


  })

  it("Deve realizar busca somente pelo tipo de atendimento", () => { 
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('.styles_containerMenuActive__rbsm9 > .styles_container__3i7hL > .styles_containerLinks__v9CCT > [href="/atendimentos/listar"]').click();
    cy.get('.styles_buttonMenu__mmyUS > img').click();
    cy.get('select').select('testando').should('have.value', 'testando').click();
    cy.get('#buscar').click();
  })
  
})