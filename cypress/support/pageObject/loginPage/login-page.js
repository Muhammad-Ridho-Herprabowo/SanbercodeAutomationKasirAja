const locators = require('../../locators/Login-Loc')

class loginPage {

    // get into login web page
    async goWebpage() {
        cy.visit('https://kasiraja.ajikamaludin.id')
        
    }

    //masukkan email terdaftar
    async fillEmail () {
        cy.xpath(locators.datatestid.email_input)
            .type('ridhoherprabowo@gmail.com')

    }

    //masukkan password terdaftar
    async fillPassword () {
        cy.xpath(locators.datatestid.password_input)
            .type('ridhoherprabowo')

    }

    //menekan tombol login
    async clickLoginBtn () {
        cy.xpath(locators.datatestid.login_button)
            .click()
        cy.wait(2000)
        
    }

    // verify user in dashboard
    async verifyUserTokoExist() {
        cy.get(locators.datatestid.verifylogin)
            .should('contain', "r")
    }
}

module.exports = new loginPage()
