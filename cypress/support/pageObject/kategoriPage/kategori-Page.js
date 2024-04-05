const locators = require('../../locators/Kategori-Loc')
class kategoriPage {

    //klik tombol menu Kategori pada dashboard
    async klikTmblKategori(){
        cy.get(locators.datatestid.kategori_button)
            .click()

    }

    // klik tombol tambah pada page kategori
    async klikTmblTambah(){
        cy.xpath(locators.datatestid.tambah_button)
    .click()

    }

    // mengisi nama kategori
    async namaKategori(){
        cy.xpath(locators.datatestid.namakategori_input)
            .type('alam')

    }

    // mengisi deskripsi kategori
    async deskripsiKategori(){
        cy.xpath(locators.datatestid.deskripsi_input)
            .type('liar')

    }

    // klik tombol simpan
    async simpanKategori(){
        cy.xpath(locators.datatestid.simpan_button)
            .click()

    }

    // verify new saved data
    async verifyNewDataSuccess() {
        //cy.xpath('//*[@id="1"]')
        cy.get(locators.datatestid.verifyNewdata)
            .should('contain', "item ditambahkan", {timeout: 2000})
    }

    

    // mengisi nama kategori yang ingin dicari
    async cariNama(){
        cy.xpath(locators.datatestid.carikategori_input)
            .type('Umum') 
    }

    // klik toogle di samping kanan kategori
    async klikToogleKat(){
        cy.get(locators.datatestid.setting_button)
            .click()

    }

    // klik tombol ubah
    async klikUbah(){
        cy.get(locators.datatestid.ubah_button)
        .click()

    }

    // masukkan nama kategori baru
    async klikNamaBaru(){
        cy.xpath(locators.datatestid.newkategori_input)
            .clear()
            .type('sungai')

    }

    // masukkan deskripsi kategori baru
    async klikDescBaru(){
        cy.xpath(locators.datatestid.newdeskripsi_input)
            .clear()
            .type('basah')

    }

    async klikSimpan(){
        cy.xpath(locators.datatestid.simpan_button)
            .click()
            
    }

    // verify saved edit data
    async verifyEditDataSuccess() {
        cy.get(locators.datatestid.verifyEditdata)
            .should('contain', "item diubah", {timeout: 2000})
    }


    // klik tombol hapus
    async klikHapus(){
        cy.get(locators.datatestid.hapus_button)
            .click()

    }

    // klik tombol delete pada pop up
    async klikDelete(){
        cy.xpath(locators.datatestid.deletepermanen_button)
            .click()
            
    }

    // verify deleted data
    async verifyDeleteDataSuccess() {
        cy.get(locators.datatestid.verifyDeleteddata)
            .should('contain', "item dihapus", {timeout: 2000})
    }


}

module.exports = new kategoriPage() 
