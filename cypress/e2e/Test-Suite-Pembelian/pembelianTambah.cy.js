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
    // 5. Klik tombol tambah
    // 6. Klik tombol produk
    // 7. Klik nama produk
    // 8. Isi jumlah produk
    // 9. Klik tombol simpan
      
    pembelianPage.klikTmblPembelian()
    pembelianPage.klikTmblTambah()
    pembelianPage.klikTmblProduk()
    pembelianPage.klikNamaProduk()
    pembelianPage.isiJmlhProduk()
    pembelianPage.klikTmblSimpan()
       
    })
  })