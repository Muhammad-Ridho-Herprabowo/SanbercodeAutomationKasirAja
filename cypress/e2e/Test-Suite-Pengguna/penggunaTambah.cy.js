const userPage = require('../../support/pageObject/userPage/user-page');
const loginPage = require ('../../support/pageObject/loginPage/login-page');

var randomUser = generateRandomUser ();

function generateRandomUser (){
  const time = new Date().getTime()
  return time+"@email.com";
}

describe('pengguna dapat menambahkan data user baru', () => {

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
    //3. memilih menu pengguna
    //4. memilih fitur tambah pengguna
    //5. mengisi kolom nama 
    //6. mangisi kolom email 
    //7. mengisi password
    //8. menyimpan form tambah pelanggan
    //9. memasikan data telah tersimpan

    
    userPage.goPenggunaPage()
    userPage.addUser()
    userPage.fillUserName()
    userPage.fillEmail(randomUser)
    userPage.fillPassword()
    userPage.clickSaveBtn()
    userPage.verifyNewDataSuccess()
  
  })
})