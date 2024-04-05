const customerPage = require ('../../support/pageObject/customerPage/customer-page')
const loginPage = require ('../../support/pageObject/loginPage/login-page')

describe ('Pengguna dapat menghapus data pelanggan yang tersimpan', () => {

    // selalu login setiap menjalankan test suit 
    beforeEach(() => {

        loginPage.goWebpage() 
        loginPage.fillEmail() 
        loginPage.fillPassword() 
        loginPage.clickLoginBtn() 
  })

  it('with valid data', () => {

    //1. melakukan login pada halaman web https://kasiraja.ajikamaludin.id
    //2. memilih menu pelanggan
    //3. memilih pelanggan yang akan dihapus 
    //4. menekan tombol pengaturan pada kolom data pelanggan
    //5. menekan pilihan hapus
    //6. memberikan konfirmasi penghapusan
    
    customerPage.goPelangganpage()
    customerPage.setCustomer()
    customerPage.setDeleteCustomer()
    customerPage.deleteCustomer()
    customerPage.verifyDeleteDataSuccess()
  
  })


})