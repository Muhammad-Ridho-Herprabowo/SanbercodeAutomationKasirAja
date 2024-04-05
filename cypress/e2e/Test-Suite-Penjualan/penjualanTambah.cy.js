const loginPage = require('../../support/pageObject/loginPage/login-page')
const penjualanPage = require('../../support/pageObject/penjualanPage/penjualan-Page')

describe('User dapat melakukan tambah Penjualan', () => {

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
    //3. Klik tombol tambah
    //4. Klik tombol produk
    //5. Klik nama produk yang akan ditambahkan
    //6. Masukkan jumlah produk yang akan ditambahkan
    //7. Masukkan jumlah bayar
    //8. Klik tombol bayar
    //9. Klik tombol tutup

    penjualanPage.klikTmblPenjualan()
    penjualanPage.klikTmblTambah()
    penjualanPage.klikTmblProduk()
    penjualanPage.klikNamaProduk()
    penjualanPage.isiJumlahProduk()
    penjualanPage.isiJumlahBayar()
    penjualanPage.klikTmblBayar()
    penjualanPage.klikTmblTutup()
  
    })

  })