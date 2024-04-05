const kategoriPage = require('../../support/pageObject/kategoriPage/kategori-Page')
const loginPage = require('../../support/pageObject/loginPage/login-page')

describe('Pengguna dapat mengubah data kategori', () => {

    // selalu login setiap menjalankan test suit pelanggan
    beforeEach(() => {

        loginPage.goWebpage() 
        loginPage.fillEmail() 
        loginPage.fillPassword() 
        loginPage.clickLoginBtn() 
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. memilih menu kategori
    //3. memilih fitur pengaturan pada data kategori
    //4. memilih fitur ubah data kategori
    //5. mengubah data pada nama kategori
    //6. mengubah data pada dekripsi kategori
    //7. menyimpan form ubah data pelanggan
    //8. memastikan data pelanggan berhasil diubah

    
    kategoriPage.klikTmblKategori()
    kategoriPage.klikToogleKat()
    kategoriPage.klikUbah()
    kategoriPage.klikNamaBaru()
    kategoriPage.klikDescBaru()
    kategoriPage.klikSimpan()
    kategoriPage.verifyEditDataSuccess()
  
  })

})
