const loginPage = require('../../support/pageObject/loginPage/login-page')
const penjualanPage = require('../../support/pageObject/penjualanPage/penjualan-Page')

describe('User dapat melihat detail setiap penjualan', () => {

    // selalu login setiap menjalankan test suit pelanggan
    beforeEach(() => {

        loginPage.goWebpage() 
        loginPage.fillEmail() 
        loginPage.fillPassword() 
        loginPage.clickLoginBtn() 
  })

  it('with valid data', () => {

    //1. Login pada halaman https://kasiraja.ajikamaludin.id
    //2. Pilih menu Penjualan pada dashboard
    //3. Klik tombol detail penjualan
    
    penjualanPage.klikTmblPenjualan()
    penjualanPage.klikTmblDetail()    
  
    })

  })