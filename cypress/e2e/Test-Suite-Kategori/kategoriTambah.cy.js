const kategoriPage = require('../../support/pageObject/kategoriPage/kategori-Page')
const loginPage = require ('../../support/pageObject/loginPage/login-page');

describe('pengguna dapat menambahkan data kategori', () => {

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
    //3. memilih menu kategori
    //4. memilih fitur tambah kategori
    //5. mengisi kolom nama kategori
    //6. mangisi kolom deskripsi kategori 
    //7. menyimpan form tambah kategori
    //8. memastikan data telah tersimpan

    
    kategoriPage.klikTmblKategori()
    kategoriPage.klikTmblTambah()
    kategoriPage.namaKategori()
    kategoriPage.deskripsiKategori()
    kategoriPage.simpanKategori()
    kategoriPage.verifyNewDataSuccess()
  
  })
})