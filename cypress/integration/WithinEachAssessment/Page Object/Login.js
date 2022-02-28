///<reference types="cypress" />

 class Login{

    login(){
        var email = 'qa@dnamicro.com'
        var password = 'DNAR0cks!!'
        cy.viewport(1920, 1080)
        cy.visit('https://gearprotek.dnaqa.net/login')
        cy.url().should('include','/login')
        cy.wait(5000)
        cy.get('#email').type(email).should('have.value',email)
        cy.get('#password').type(password).should('have.value',password)
        cy.get('[type="submit"]').contains('Login').click()
        cy.wait(5000)
        cy.contains("Users").click()
    }


 }export default Login