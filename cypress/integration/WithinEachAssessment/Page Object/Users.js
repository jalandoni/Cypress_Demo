///<reference types="cypress" />

class User{
    
    createUser(){
        var email = "gleen.dave@gmail.com"
        var fname = "Gleen"
        var lname = "Dave"
        var pass = "DNAR0cks!!"
        var affliate = "GearProtek"
        cy.wait(5000)
        cy.contains('New').click()
        cy.wait(3000)
        cy.get('#email').type(email)
        cy.get('#first_name').type(fname)
        cy.get('#last_name').type(lname)
        cy.get('#role').click({force: true})
        cy.contains('Agent').click()
        cy.get('#password').type(pass)
        cy.contains('Save & Close').click()
        cy.wait(5000)  
    }


    updateUser(){
        var email = "gleen.dave@gmail.com"
        var fname = "Darrell"
        var lname = "Gleen"
        cy.wait(5000)
        cy.get('tbody>tr').each((element, index,) => {
            var uniqueEmail = element.text()
            cy.log(uniqueEmail)
            if(uniqueEmail.includes(email)){
                cy.contains(email).click({force: true})
                cy.wait(5000)
                cy.get('#first_name').clear().type(fname).should('have.value',fname)
                cy.get('#last_name').clear().type(lname).should('have.value',lname)
                cy.contains('Save').click()
                cy.get('#status-toggle > div.md-icon-separator.md-text-field.md-select-field--btn > span').then(($value) => {
                const accountStat = $value.text()

                cy.log('status ni',accountStat)
                if(accountStat === 'Active'){
                    cy.contains('Active').click({force: true})
                    cy.wait(5000)
                    cy.contains('Inactive').click({force: true})
                    cy.get('#status').should('have.value','Inactive')
                    cy.wait(5000)
                    cy.contains('Save').click()
                    
                }else if (accountStat === 'Inactive'){
                    cy.contains('Inactive').click({force: true})
                    cy.wait(5000)
                    cy.get('[data-value="Deleted"]').click({force: true})
                    cy.get('#status').should('have.value','Deleted')
                    cy.wait(5000)
                    cy.contains('Save').click()
                    
                } else if (accountStat === 'Deleted'){
                    cy.contains('Deleted').click({force: true})
                    cy.wait(5000)
                    cy.contains('Active').click({force: true})
                    cy.get('#status').should('have.value','Active')
                    cy.wait(5000)
                    cy.contains('Save & Close').click({force: true}) 

                }else{
                    cy.log('mismatch')
                   
                }

            }
            
            
            )}
            else{
                cy.log('mismatch')
            }
        })
    }

    deleteUser(){
        var email = "gleen.dave@gmail.com"
        cy.wait(5000)
        cy.get('tbody>tr').each((element, index,) => {
            var uniqueEmail = element.text()
            cy.log(uniqueEmail)
            if(uniqueEmail.includes(email)){
                cy.contains(email).click({force: true})
                cy.wait(1000)
                cy.get('#fullPage__dialog > div > div.treeViewer__grid > div.treeViewer__grid--content > div > div.md-paper.md-paper--1.md-card.md-background--card.md-cell.md-cell--12.pageTable__toolbar > header > button.md-btn.md-btn--raised.md-btn--text.md-pointer--hover.md-text.md-inline-block.button-bg--danger').click({force:true})
                cy.wait(2000)
                cy.contains('Yes').click()
                cy.wait(5000)
            }else{
                cy.log('mismatch')
            }
    })
}

    checkUserStat(){
        var email = "gleen.dave@gmail.com"
        cy.get('tbody>tr').each((element, index,) => {
            var uniqueEmail = element.text()
            cy.log(uniqueEmail)
            if(uniqueEmail.includes(email)){
                cy.contains(email).click({force: true})
                cy.wait(5000)
                cy.get('#status').should('have.value','Deleted')
                
            }else{
                cy.log('mismatch')
            }
        })
        cy.get('#main-content-demo > div.w_AdvancedFilter > div > div > div > div.md-paper.md-paper--1.md-card.md-background--card.md-cell.md-cell--12.pageTable__table > div.md-cell.md-cell--12 > div.pageTable_datatable > div > div.md-data-table--responsive.dna_datatable > table > tbody').within((list) => {
            cy.log(list)
            cy.contains(email).click({force: true})
            cy.wait(5000)
        })
        
    }

}export default User