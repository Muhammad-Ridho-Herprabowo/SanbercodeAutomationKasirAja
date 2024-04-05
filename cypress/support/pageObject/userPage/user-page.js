const locators = require('../../locators/Pengguna-Loc')
class penggunaPage{

    //masuk kedalam menu pengguna 
    async goPenggunaPage() {
        cy.get(locators.datatestid.pengguna_button)            
            .click ()
        cy.wait(1000)
    }

    //tambah pengguna
    async addUser () {
        cy.xpath(locators.datatestid.tambah_button)
            .click ()
    }

    //mengisi kolom nama pengguna
    async fillUserName () {
        cy.xpath (locators.datatestid.username_input)
            .type('Coba')
    }

    //mengisi kolom email 
    async fillEmail (randomUser) {
        cy.xpath (locators.datatestid.email_input)
            //.type('randomUser')
            .type(randomUser, {force: true})
            .should('have.value', randomUser) 
    }

    //mengisi kolom password
    async fillPassword () {
        cy.xpath(locators.datatestid.password_input)
            .type('88888888')
    }

    //menyimpan form terisi
    async clickSaveBtn () {
        cy.xpath(locators.datatestid.simpan_button)
            .click() 
        cy.wait(500)
    }

    // verify new saved data
    async verifyNewDataSuccess() {
        cy.get(locators.datatestid.success_popup)
            .should('contain', "item ditambahkan", {timeout: 2000})
    }





    // mencari pengguna //
    async findUser () {
        cy.xpath(locators.datatestid.caripengguna_input)
            .type('Coba')
            //.should('contain', "example")
    }



    //masuk menu ubah data pengguna
    async setPengguna () {
        cy.get(locators.datatestid.setting_button)
            .click()
    }

    //memilih menu ubah data pengguna
    async editPengguna () {
        cy.get(locators.datatestid.ubah_button)            
            .click()
    }

    //mengganti kolom nama pengguna
    async editUserName () {
        cy.xpath (locators.datatestid.newusername_input)
            .clear()
            .type('Coba-coba') 
    }

    //mengganti kolom email 
    async editEmail (randomUser) {
        cy.xpath (locators.datatestid.newemail_input)
            .clear()
            .type(randomUser, {force: true})
    }

    //mengganti kolom password
    async editPassword () {
        cy.xpath(locators.datatestid.newpassword_input)
            .clear()
            .type('99999999')
    }

    //menyimpan form terisi
    async clickSaveBtn () {
        cy.xpath(locators.datatestid.simpan_button)
            .click() 
        cy.wait(500)
    }

    // verify new saved data
    async verifyEditDataSuccess() {
        cy.get(locators.datatestid.success_popup)
            .should('contain', "item diubah", {timeout: 2000})
    }



    // pilih hapus profil pelanggan
    async setDeleteUser () {
        cy.get(locators.datatestid.settingdelete_button)
            .click ()
    }

    // pilih hapus profil pelanggan
    async deleteUser () {
        cy.get(locators.datatestid.deletepermanen_button)
            .click ()
        cy.wait(500)
    }

    // verify deleted data
    async verifyDeleteDataSuccess() {
        cy.get(locators.datatestid.success_popup)
            .should('contain', "item dihapus", {timeout: 2000})
    }

}
module.exports = new penggunaPage() 