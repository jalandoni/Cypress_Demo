///<reference types="cypress" />

class Login{

    signIn(){
        var Email = 'admin@dnamicro.com'
        var Password = 'gr3atSystem64'

        cy.get('#email').type(Email)
        cy.get('#password').type(Password)
        cy.wait(2000)
        cy.get('[type="button"]').contains('Sign In').click()


    }


}export default Login