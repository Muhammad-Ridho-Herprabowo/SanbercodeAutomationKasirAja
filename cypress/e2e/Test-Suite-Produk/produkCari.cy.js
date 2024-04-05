const produkPage = require('../../support/pageObject/produkPage/produk-Page')
const loginPage = require('../../support/pageObject/loginPage/login-page')

describe('Pengguna dapat mencari produk', () => {

    // selalu login setiap menjalankan test suit pelanggan
    beforeEach(() => {

        loginPage.goWebpage() 
        loginPage.fillEmail() 
        loginPage.fillPassword() 
        loginPage.clickLoginBtn() 
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. memilih menu produk
    //3. menekan kolom pencarian produk
    //4. memastikan terdapat produk
    
    produkPage.klikTmblProduk()
    produkPage.cariNamaProduk()
  
  })

})