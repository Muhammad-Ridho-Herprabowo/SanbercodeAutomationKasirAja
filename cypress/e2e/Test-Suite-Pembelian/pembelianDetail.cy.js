const loginPage = require ('../../support/pageObject/loginPage/login-page')
const pembelianPage = require ('../../support/pageObject/pembelianPage/pembelian-Page')



describe('User dapat menambahkan pembelian', () => {
    // selalu login setiap menjalankan test suit pelanggan
    beforeEach(() => {

        loginPage.goWebpage() 
        loginPage.fillEmail() 
        loginPage.fillPassword() 
        loginPage.clickLoginBtn() 
  })

  it('with valid data', () => {
    // 1. Masuk ke laman website
    // 2. Login dengan akun terdaftar
    // 3. Berhasil masuk ke dashboard
    // 4. Klik tombol pembelian
    // 5. klik tombol detail pada halaman pembelian

    pembelianPage.klikTmblPembelian()
    pembelianPage.klikDetailPembelian()

    })
  })