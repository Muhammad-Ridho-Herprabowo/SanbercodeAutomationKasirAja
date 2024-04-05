const loginPage = require ('../../support/pageObject/loginPage/login-page');
const userPage = require ('../../support/pageObject/userPage/user-page');

var randomUser = generateRandomUser ()

function generateRandomUser (){
    const time = new Date(). getTime()
    return time+'@email.com';
}

describe ('Pengguna dapat mengubah data user yang tersimpan', () => {

    // selalu login setiap menjalankan test suit pengguna
    beforeEach(() => {

        loginPage.goWebpage() 
        loginPage.fillEmail() 
        loginPage.fillPassword() 
        loginPage.clickLoginBtn() 
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. memilih menu pengguna
    //3. memilih fitur pengaturan pada data pengguna
    //4. memilih fitur ubah data pengguna
    //5. mengubah data pada nama 
    //6. mengubah data pada nomor handphone 
    //7. mengubah data pada alamat
    //8. mengubah data pada keterangan
    //9. menyimpan form ubah data pengguna
    //10. memastikan data pengguna berhasil diubah

    
    userPage.goPenggunaPage()
    userPage.setPengguna()
    userPage.editPengguna()
    userPage.editUserName()
    userPage.editEmail(randomUser)
    userPage.editPassword()
    userPage.clickSaveBtn()
    userPage.verifyEditDataSuccess()
    

  })

})