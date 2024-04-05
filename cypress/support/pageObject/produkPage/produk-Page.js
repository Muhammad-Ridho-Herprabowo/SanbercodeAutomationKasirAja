const locators = require('../../locators/Produk-Loc')
class produkPage {

    // klik tombol produk pada dashboard
    async klikTmblProduk(){
        cy.get(locators.datatestid.produk_button)
            .click()

    }

    // klik tombol tambah pada page produk
    async klikTmblTambah(){
        cy.get(locators.datatestid.tambah_button)
            .click()

    }

    // mengisi data produk sesuai kolom
    async IsiDataProduk(){
        cy.xpath(locators.datatestid.namaproduk_input)
            .type('kertas')
        cy.xpath(locators.datatestid.deskripsi_input)
            .type('ATK')
        cy.xpath(locators.datatestid.hargabeli_input)
            .type('6000')
        cy.xpath(locators.datatestid.hargajual_input)
            .type('10000')
        cy.xpath(locators.datatestid.stok_input)
            .type('100')
        cy.xpath(locators.datatestid.kategori_button)
            .click()
            cy.get(locators.datatestid.jeniskategori_button)
            .click()

    }

    // klik tombol simpan
    async klikTmblSimpan(){
        cy.xpath(locators.datatestid.simpan_button)
            .click()

    }

    // verify new saved data
    async verifyNewDataSuccess() {
        //cy.xpath('//*[@id="1"]')
        cy.get(locators.datatestid.verifyNewdata)
            .should('contain', "item ditambahkan", {timeout: 2000})
    }



    // mengisi nama produk yang akan dicari
    async cariNamaProduk(){
        cy.xpath(locators.datatestid.cariproduk_input)
            .type('kertas')

    }

    // klik toogle di samping kanan produk
    async klikTglProduk(){
        cy.get(locators.datatestid.setting_button)
            .click()

    }

    // klik tombol menu ubah
    async klikTmblUbah(){
        cy.get(locators.datatestid.ubah_button)
            .click()

    }

    // isi data sesuai dengan yang ingin diubah
    async ubahProduk(){
        cy.xpath(locators.datatestid.namaproduk_input)
            .clear()
            .type('batu')
        cy.xpath(locators.datatestid.deskripsi_input)
            .clear()
            .type('keras')
        cy.xpath(locators.datatestid.hargabeli_input)
            .type('1000')
        cy.xpath(locators.datatestid.hargajual_input)
            .type('20000')
        cy.xpath(locators.datatestid.stok_input)
            .type('100')
        cy.xpath(locators.datatestid.kategori_button)
            .click()
        cy.get(locators.datatestid.jeniskategori_button)
            .click()

    }

    // klik tombol simpan
    async klikTmblSimpan(){
        cy.xpath(locators.datatestid.simpan_button)
            .click()

    }

    // verify saved edit data
    async verifyEditDataSuccess() {
        cy.get(locators.datatestid.verifyEditdata)
            .should('contain', "item diubah", {timeout: 2000})
    }



    // klik tombol setting menu hapus
    async klikTmblHapus(){
        cy.get(locators.datatestid.hapus_button)
            .click()

    }


    // klik tombol delete
    async klikTmblDelete(){
        cy.xpath(locators.datatestid.deletepermanen_button)
            .click()

    }

    // verify deleted data
    async verifyDeleteDataSuccess() {
        cy.get(locators.datatestid.verifyDeleteddata)
            .should('contain', "item dihapus", {timeout: 2000})
    }

    

}

module.exports = new produkPage() 
