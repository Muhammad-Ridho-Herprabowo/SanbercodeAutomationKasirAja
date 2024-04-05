const locators = require('../../locators/Penjualan-Loc')
class penjualanPage {

    // klik tombol penjualan di dashboard
    async klikTmblPenjualan(){
        cy.get(locators.datatestid.penjualan_button)
        .click()

    }

     // klik tombol tambah penjualan
     async klikTmblTambah(){
        cy.get(locators.datatestid.tambah_button)
            .click()

    }

    // klik tombol produk penjualan
    async klikTmblProduk(){
        cy.get(locators.datatestid.produk_button)
            .click()

    }

    // klik nama produk yang dijual
    async klikNamaProduk(){
        cy.get(locators.datatestid.namaproduk_button)
            .click()

    }

    // isi data jumlah produk yang dijual
    async isiJumlahProduk(){
        cy.get(locators.datatestid.jumlahproduk_input)
            .type(5)

    }

    // isi jumlah pembayaran
    async isiJumlahBayar(){
        cy.get(locators.datatestid.jumlahbayar_input)
            .type(900000)
        //cy.wait(500)

    }

    // klik tombol bayar
    async klikTmblBayar(){
        cy.xpath(locators.datatestid.bayar_button)
            .click()

    }

    // klik tombol tutup
    async klikTmblTutup(){
        cy.xpath(locators.datatestid.tutup_button)
            .click()
    }

    // klik kolom pelanggan di page penjualan
    async klikKolomPelanggan(){
        cy.xpath(locators.datatestid.kolompelanggan_button)
            .click()

    }

    // klik jenis pelanggan yang telah terdaftar
    async klikJenisPelanggan(){
        cy.get(locators.datatestid.jenispelanggan_button)
            .click()
            
    }

    // mengisi harga diskon pada kolom diskon
    async isiDiskon(){
        cy.xpath(locators.datatestid.diskon_input)
            .type('5000')

    }

    // mencari invoice penjualan
    async klikKolomCari(){
        cy.xpath(locators.datatestid.carisales_input)
            .type('INV/31/2/2024/1711891560')

    }

    // mengisi catatan penjualan pada kolom catatan
    async catatanPenjualan(){
        cy.get(locators.datatestid.catatansales)
            .type('belum lunas')

    }

    // klik tombol detail penjualan
    async klikTmblDetail(){
        cy.get(locators.datatestid.detailsales_button)
            .click()
    }



}

module.exports = new penjualanPage()
