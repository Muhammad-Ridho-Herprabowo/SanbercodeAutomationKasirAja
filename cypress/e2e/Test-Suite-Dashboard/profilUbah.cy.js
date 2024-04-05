const dashboardPage = require ('../../support/pageObject/dashboardPage/dashboard-page')
const loginPage = require ('../../support/pageObject/loginPage/login-page')

describe('Pengguna dapat mengubah data akun pribadi melalui icon profil pada dashboard', () => {
    
    // selalu login setiap menjalankan test suit pelanggan
    beforeEach(() => {

        loginPage.goWebpage() 
        loginPage.fillEmail() 
        loginPage.fillPassword() 
        loginPage.clickLoginBtn() 
  })

    it('with valid data',() => {

        //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
        //2. menekan icon profil pada dashboard
        //3. memilih nama profil
        //4. memastikan berada pada halaman ubah data pengguna 

        dashboardPage.klikIconToko()
        dashboardPage.klikNamaProfil()
        dashboardPage.verifyOnpelangganUbah()

  })
})