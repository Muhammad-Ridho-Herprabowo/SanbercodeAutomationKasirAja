const userPage = require ('../../support/pageObject/userPage/user-page')
const loginPage = require ('../../support/pageObject/loginPage/login-page')

describe ('Pengguna dapat menghapus data user yang tersimpan', () => {

    // selalu login setiap menjalankan test suit 
    beforeEach(() => {

        loginPage.goWebpage() 
        loginPage.fillEmail() 
        loginPage.fillPassword() 
        loginPage.clickLoginBtn() 
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. memilih menu pengguna
    //3. memilih pengguna yang akan dihapus 
    //4. menekan tombol pengaturan pada kolom data pengguna
    //5. menekan pilihan hapus
    //6. memberikan konfirmasi penghapusan
    
    userPage.goPenggunaPage()
    userPage.setPengguna()
    userPage.setDeleteUser()
    userPage.deleteUser()
    userPage.verifyDeleteDataSuccess()
  
  })


})