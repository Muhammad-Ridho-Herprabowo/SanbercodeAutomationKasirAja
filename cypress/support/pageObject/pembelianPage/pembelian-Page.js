const locators = require('../../locators/Pembelian-Loc')
class pembelianPage {

    //klik tombol menu Pembelian
    async klikTmblPembelian(){
        cy.get(locators.datatestid.pembelian_button)
            .click()

    }


    //klik tombol tambah
    async klikTmblTambah(){
        cy.get(locators.datatestid.tambah_button)
            .click()

    }

    //klik tombol produk
    async klikTmblProduk(){
        cy.get(locators.datatestid.produk_button)
            .click()

    }

    //klik nama produk yang akan dibeli
    async klikNamaProduk(){
        cy.get(locators.datatestid.namaproduk_box)
            .click()

    }

    //mengisi jumlah produk yang akan dibeli
    async isiJmlhProduk(){
        cy.get(locators.datatestid.jumlahproduk_input)
            .type(2)

    }

    //klik tombol simpan
    async klikTmblSimpan(){
        cy.xpath(locators.datatestid.simpan_button)
            .click()
            
    }

    //mengisi nomor invoice yang akan dicari
    async isiInvoicePurchase(){
        cy.xpath(locators.datatestid.invoice_input)
    .type('INV/1/3/2024/1711978879')

    }

    //mengisi catatan pada pembelian
    async catatanPembelian(){
        cy.xpath(locators.datatestid.catatan_input)
            .type('lunas')  
    
        }
    
        //klik tombol detail pada halaman pembelian
        async klikDetailPembelian(){
            cy.get(locators.datatestid.detail_button)
                .click()
    
        }


}

module.exports = new pembelianPage()
