const {test,expect}=require("@playwright/test");
// const {LoginPage}=require("../pageObjectModel/cartPractice/loginPage")
// const CartItem = require("../pageObjectModel/cartPractice/cartitem");
// const PaymentMethod=require("../pageObjectModel/cartPractice/paymentMethod");
// const Order=require("../pageObjectModel/cartPractice/confrimationOrder")
const ClassManager= require("../pageObjectModel/POManager");
// const dataset=JSON.parse(JSON.stringify(require("../dataSet/e2edataSet.json")))
const dataset=[...require("../dataSet/e2edataSet.json")]
for (const data of dataset){
test(`end2End POM Test ${data.productName}`, async({page})=>{
    
    // const loginpage=new LoginPage(page);
    // const cartitem= new CartItem(page);
    // const paymentmethod=new PaymentMethod(page);
    // const order= new Order(page)
    const poManager=new ClassManager(page)
    await poManager.signIN().goto();
    await poManager.signIN().validLogin(data.email,data.password)
    await poManager.addItem().addToCart(data.productName);
    await poManager.addItem().buyProduct();
    await poManager.payDetails().paymentDetails(data.cardUserName,data.ccvCode,data.creditCardNo,data.expiryMonth,data.expiryYear,data.country)
    let orderId=await poManager.payDetails().orderConfrimation()
    let orderConfrim=await poManager.orders().confrimation(orderId);
    console.log(orderConfrim)
    await page.pause();



})}
