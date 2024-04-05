const customerPage = require('../../support/pageObject/customerPage/customer-page')
const loginPage = require ('../../support/pageObject/loginPage/login-page');

var randomUser = generateRandomUser ();

function generateRandomUser (){
  const time = new Date().getTime()
  return time;
}


describe('pengguna dapat menambahkan data pelanggan', () => {

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
    //3. memilih menu pelanggan
    //4. memilih fitur tambah pelanggan
    //5. mengisi kolom nama 
    //6. mangisi kolom nomor handphone 
    //7. mengisi alamat
    //8. mengisi keterangan
    //9. menyimpan form tambah pelanggan
    //10. memasikan data telah tersimpan

    
    customerPage.goPelangganpage()
    customerPage.addCustomer()
    customerPage.fillPelangganName(randomUser)
    customerPage.fillNomorHp()
    customerPage.fillAlamat()
    customerPage.fillKeterangan()
    customerPage.clickSaveBtn()
    customerPage.verifyNewDataSuccess(randomUser)
  
  })
})