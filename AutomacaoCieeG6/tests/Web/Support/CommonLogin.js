const {test, expect } = require('@playwright/test');
const {chromium, firefox} = require("@playwright/test");


let page

class CommonPageLogin {

    constructor() {
        this.Objects = {
     
        "url" : "https://front.serverest.dev/login",
        
       }
    }
  
  async navegatTo() {
    const browser = await chromium.launch({headless: false})
    //browser = await firefox.launch({headless: false})
    const page = await browser.newPage();
    await page.goto(this.Objects.url)

  }


};  
module.exports = { CommonPageLogin: CommonPageLogin }