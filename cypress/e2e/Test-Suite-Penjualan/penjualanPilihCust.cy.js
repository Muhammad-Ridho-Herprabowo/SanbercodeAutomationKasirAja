const loginPage = require('../../support/pageObject/loginPage/login-page')
const penjualanPage = require('../../support/pageObject/penjualanPage/penjualan-Page')

describe('User dapat memilih jenis Pelanggan yang terdaftar', () => {


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
    //3. Klik pada kolom pelanggan
    //4. Klik jenis pelanggan yang diinginkan

    penjualanPage.klikTmblPenjualan()
    penjualanPage.klikKolomPelanggan()
    penjualanPage.klikJenisPelanggan()
        
  
    })

  })