const registerPage = require('../../support/pageObject/registerPage/register-page')

var randomUser = generateRandomUser ();

function generateRandomUser (){
  const time = new Date().getTime()
  return time+"@mail.com";
}

describe('pengguna dapat mendaftar pada aplikasi', () => {
  it('with valid data', () => {
    //1. masuk ke url web https://kasiraja.ajikamaludin.id
    //2. masuk ke halaman register profil
    //3. mengisi kolom nama toko 
    //4. mengisi kolom email 
    //5. mangisi kolom password 
    //6. menekan tombol daftar 
    //7. memastikan user telah terdaftar 

    registerPage.goWebpage() 
    registerPage.goRegisterpage() 
    registerPage.fillUsername() 
    registerPage.fillEmail(randomUser)
    registerPage.fillPassword()
    registerPage.clickSignupBtn() 
    registerPage.verifyNewUser() 
  })
})