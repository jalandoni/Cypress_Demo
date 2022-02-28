///<reference types="cypress" />
import reservation from "./Page Object/booking"
import Login from "./Page Object/login"


describe('check GoRentals Login',()=>{
    const l = new Login()
    const r = new reservation()

    it('can launched to gorentals',() =>{
        cy.visit("https://portal-gorentals.dnaqa.net")
        cy.wait(6000)
        l.signIn()
        r.createContact()
    })
})