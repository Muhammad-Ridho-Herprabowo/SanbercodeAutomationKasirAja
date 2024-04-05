const kategoriPage = require ('../../support/pageObject/kategoriPage/kategori-Page')
const loginPage = require ('../../support/pageObject/loginPage/login-page')

describe ('Pengguna dapat menghapus data kategori yang tersimpan', () => {

    // selalu login setiap menjalankan test suit 
    beforeEach(() => {

        loginPage.goWebpage() 
        loginPage.fillEmail() 
        loginPage.fillPassword() 
        loginPage.clickLoginBtn() 
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. memilih menu kategori
    //3. memilih kategori yang akan dihapus 
    //4. menekan tombol pengaturan pada kolom data kategori
    //5. menekan pilihan hapus
    //6. memberikan konfirmasi penghapusan
    
    kategoriPage.klikTmblKategori()
    kategoriPage.klikToogleKat()
    kategoriPage.klikHapus()
    kategoriPage.klikDelete()
    kategoriPage.verifyDeleteDataSuccess()
  
  })


})