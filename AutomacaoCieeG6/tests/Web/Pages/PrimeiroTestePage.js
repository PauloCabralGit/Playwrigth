const { chromium } = require("@playwright/test");

class PrimeiroTestePage {
  constructor(){
    this.Objects = {
      "EleLogin": '[xpath=//input[@placeholder="Digite seu email"]',
      "EleSenha": '[xpath=//input[@placeholder="Digite sua senha"]'
    }
  }
    
  async acessandoLogin(email, senha){
    const browser = await chromium.launch({headless: false})
    const page = await browser.goto(this.Objects.url)
    await page.locator(this.Objects.EleLogin);
    await page.locator(this.Objects.EleSenha);
  }
}

module.exports = { PrimeiroTestePage };