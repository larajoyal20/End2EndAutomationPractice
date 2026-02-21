const {LoginPage}=require("../pageObjectModel/cartPractice/loginPage")
const CartItem = require("../pageObjectModel/cartPractice/cartitem");
const PaymentMethod=require("../pageObjectModel/cartPractice/paymentMethod");
const Order=require("../pageObjectModel/cartPractice/confrimationOrder")
class ClassManager{


/**
 * @param {import('@playwright/test').Page} page
 * 
 */
constructor(page){
    this.page=page;
    this.loginpage=new LoginPage(page);
    this.cartitem= new CartItem(page);
    this.paymentmethod=new PaymentMethod(page);
    this.order= new Order(page)
}
signIN(){
    return this.loginpage;
}

addItem(){
    return this.cartitem;
}
payDetails(){
    return this.paymentmethod;
}
orders(){
    return this.order;
}
}
module.exports=ClassManager;