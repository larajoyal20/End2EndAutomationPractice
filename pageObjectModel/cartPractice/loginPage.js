const  {test,expect}=require("@playwright/test")
class LoginPage{
    constructor(page){
        this.page=page;
        this.emailId=page.getByPlaceholder("email@example.com");
        this.password=page.getByPlaceholder("enter your passsword");
        this.signInButton=page.getByRole("button",{name:"login"});
        this.homebtn=page.getByRole("button",{name:"Home"})
    }
    async goto(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    }
    async validLogin(email,password){
        await this.emailId.fill(email)
        await this.password.fill(password)
        await this.signInButton.click()
        await expect(this.homebtn).toBeVisible();
        await this.page.screenshot({path:"ScreenPom.png"})
    }

}
module.exports={LoginPage}