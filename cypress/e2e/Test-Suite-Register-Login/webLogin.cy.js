const loginPage = require('../../support/pageObject/loginPage/login-page')

describe('Pengguna dapat masuk kedalam aplikasi', () => {

    it('with valid data', () => {
    
    //1. masuk ke url web https://kasiraja.ajikamaludin.id
    //2. pada form login, mengisi kolom email terdaftar
    //3. mengisi kolom password terdaftar
    //4. menekan tombol login
    //5. memastikan pengguna berada didalam dashboard

    loginPage.goWebpage() 
    loginPage.fillEmail() 
    loginPage.fillPassword() 
    loginPage.clickLoginBtn() 
    
    loginPage.verifyUserTokoExist() 


  })
})