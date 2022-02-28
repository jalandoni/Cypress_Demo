///<reference types="cypress" />



class reservation {


    createContact(){
        cy.wait(5000)
        cy.contains('Booking').click()
        cy.contains('New').click()
    }


}export default reservation