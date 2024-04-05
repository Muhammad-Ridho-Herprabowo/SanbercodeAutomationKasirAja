const kategoriPage = require('../../support/pageObject/kategoriPage/kategori-Page')
const loginPage = require('../../support/pageObject/loginPage/login-page')

describe('Pengguna dapat mencari nama kategori', () => {

    // selalu login setiap menjalankan test suit pelanggan
    beforeEach(() => {

        loginPage.goWebpage() 
        loginPage.fillEmail() 
        loginPage.fillPassword() 
        loginPage.clickLoginBtn() 
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. memilih menu pelanggan
    //3. menekan kolom pencarian nama pelanggan
    //4. memastikan terdapat nama pelanggan
    
    kategoriPage.klikTmblKategori()
    kategoriPage.cariNama()
  
  })

})