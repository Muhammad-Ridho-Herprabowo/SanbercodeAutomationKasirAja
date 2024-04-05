const locators = require('../../locators/Register.Loc')
class registerPage {
    
    // get into login web page
    async goWebpage() {
        cy.visit('https://kasiraja.ajikamaludin.id') 
         
    }

    // get into register page
    async goRegisterpage() {
        cy.xpath(locators.datatestid.register_button) 
            .click()
    }

    //mengisi kolom nama
    async fillUsername () {
        cy.xpath(locators.datatestid.namatoko_input)
            .type('tokoRidho')


    }

    //mengisi kolom email
    async fillEmail (randomUser) {
        cy.xpath(locators.datatestid.email_input)
        //  .type('ridhoherprabowo@gmail.com')
            .type(randomUser, {force: true})
            .should('have.value', randomUser) 

    }

    //mengisi kolom password
    async fillPassword () {
        cy.xpath(locators.datatestid.password_input)
            .type('abcdefghijk')
    }

    //masuk ke halaman sign in
    async clickSignupBtn () {
        cy.xpath(locators.datatestid.daftar_button)
            .click()
        cy.wait(1000)

    }

    // verify already exist user in database
    async verifyNewUser() {
        cy.xpath(locators.datatestid.newuserverify)
            .should('contain', "Toko berhasil didaftarkan")
    }

    
}
module.exports = new registerPage()