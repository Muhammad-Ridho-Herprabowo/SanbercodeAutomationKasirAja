const locators = require('../../locators/Pelanggan-Loc')
class customerPage {

    //masuk kedalam menu pelanggan 
    async goPelangganpage() {
        cy.get(locators.datatestid.pelanggan_button)
            .click ()
        cy.wait(1000)
    }

    //tambah pelanggan
    async addCustomer () {
        cy.xpath(locators.datatestid.tambah_button)
            .click ()
    }

    //mengisi kolom nama pelanggan 
    async fillPelangganName (randomUser) {
        cy.xpath (locators.datatestid.namapelanggan_input)
            .type(randomUser, {force: true})
            .should('have.value',randomUser) 
    }

    //mengisi kolom nomor 
    async fillNomorHp () {
        cy.xpath (locators.datatestid.nomorhp_input)
            .type('06123456789') 
    }

    //mengisi kolom alamat
    async fillAlamat () {
        cy.xpath(locators.datatestid.alamat_input)
            .type('Bandung')
    }

    //mengisi kolom keterangan
    async fillKeterangan () {
        cy.xpath(locators.datatestid.keterangan_input)
            .type('toko bangunan sinar ayu')
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


    // mencari pelanggan
    async findCustomer () {
        cy.xpath(locators.datatestid.caripelanggan_input)
            .type('Pelanggan Umum')
            .should('contain', "Pelanggan Umum")
    }

    
    // pengaturan profil pelanggan
    async setCustomer () {
        cy.get(locators.datatestid.setting_button)
            .click ()
    }

    // pilih ubah profil pelanggan
    async editCustomer () {
        cy.get(locators.datatestid.ubah_button)
            .click ()
    }

    //mengganti kolom nama pelanggan 
    async editPelangganName (randomUser) {
        cy.xpath (locators.datatestid.newnamapelanggan_input)
            .clear()
            .type(randomUser, {force: true})
    }

    //mengganti kolom nomor 
    async editNomorHp () {
        cy.xpath (locators.datatestid.newnomorhp_input)
            .clear()
            .type('081122334455') 
    }

    //mengganti kolom alamat
    async editAlamat () {
        cy.xpath(locators.datatestid.newalamat_input)
            .clear()
            .type('pontianak')
    }

    //mengganti kolom keterangan
    async editKeterangan () {
        cy.xpath(locators.datatestid.newketerangan_input)
            .clear()
            .type('pelanggan')
    }

    // verify saved edit data
    async verifyEditDataSuccess() {
        cy.get(locators.datatestid.success_popup)
            .should('contain', "item diubah", {timeout: 2000})
    }

    

    // pilih hapus profil pelanggan
    async setDeleteCustomer () {
        cy.get(locators.datatestid.settingdel_button)
            .click ()
    }

    // pilih hapus profil pelanggan
    async deleteCustomer () {
        cy.get(locators.datatestid.delete_button)
            .click ()
        cy.wait(500)
    }

    // verify deleted data
    async verifyDeleteDataSuccess() {
        cy.get(locators.datatestid.success_popup)
            .should('contain', "item dihapus", {timeout: 2000})
    }

}
module.exports = new customerPage() 