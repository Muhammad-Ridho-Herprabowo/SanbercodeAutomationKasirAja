const produkPage = require('../../support/pageObject/produkPage/produk-Page')
const loginPage = require ('../../support/pageObject/loginPage/login-page');



describe('pengguna dapat menambahkan data produk', () => {

  // selalu login setiap menjalankan test suit pelanggan
  beforeEach(() => {

      loginPage.goWebpage() 
      loginPage.fillEmail() 
      loginPage.fillPassword() 
      loginPage.clickLoginBtn() 
  })
  
  it('with valid data', () => {

    //1. masuk ke url web https://kasiraja.ajikamaludin.id
    //2. melakukan login  
    //3. memilih menu produk
    //4. memilih fitur tambah produk
    //5. mengisi kolom kode produk
    //6. mengisi kolom nama produk
    //7. mangisi kolom deskripsi produk
    //8. mengisi kolom harga beli produk
    //9. mengisi kolom harga jual produk
    //10. mengisi kolom stok produk
    //11. memilih kategori produk 
    //12. menyimpan form tambah produk
    //13. memastikan data telah tersimpan

    
    produkPage.klikTmblProduk()
    produkPage.klikTmblTambah()
    produkPage.IsiDataProduk()
    produkPage.klikTmblSimpan()
    produkPage.verifyNewDataSuccess()
  
  })
})