const dashboardPage = require("../../support/pageObject/dashboardPage/dashboard-page");
const loginPage = require("../../support/pageObject/loginPage/login-page");

describe('Pengguna dapat keluar dari aplikasi melalui icon profil pada dashboard', () => {

    // selalu login setiap menjalankan test suit pelanggan
    beforeEach(() => {

        loginPage.goWebpage() 
        loginPage.fillEmail() 
        loginPage.fillPassword() 
        loginPage.clickLoginBtn() 
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. menekan icon profil pada dashboard
    //3. memilih log out menu
    //4. memastikan berada pada halaman login 
    
    dashboardPage.klikIconToko()
    dashboardPage.klikTmbllLogout()
    dashboardPage.verifyLogout()
  
  })

})