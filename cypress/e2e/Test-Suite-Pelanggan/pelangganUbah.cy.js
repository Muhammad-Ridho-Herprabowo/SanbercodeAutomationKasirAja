const customerPage = require('../../support/pageObject/customerPage/customer-page')
const loginPage = require('../../support/pageObject/loginPage/login-page')

var randomUser = generateRandomUser ();

function generateRandomUser (){
  const time = new Date().getTime()
  return time;
}

describe('Pengguna dapat mengubah data pelanggan', () => {

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
    //3. memilih fitur pengaturan pada data pelanggan
    //4. memilih fitur ubah data pelanggan
    //5. mengubah data pada nama 
    //6. mengubah data pada nomor handphone 
    //7. mengubah data pada alamat
    //8. mengubah data pada keterangan
    //9. menyimpan form ubah data pelanggan
    //10. memastikan data pelanggan berhasil diubah

    
    customerPage.goPelangganpage()
    customerPage.setCustomer()
    customerPage.editCustomer()
    customerPage.editPelangganName(randomUser)
    customerPage.editNomorHp()
    customerPage.editAlamat()
    customerPage.editKeterangan()
    customerPage.clickSaveBtn()
    customerPage.verifyEditDataSuccess()
  
  })

})
