const { Given, When, Then} = require ("@cucumber/cucumber");
const { CommonPageLogin } = require("../Support/CommonLogin");
const { PrimeiroTestePage } = require("../Pages/PrimeiroTestePage");
const { test, expect } = require('@playwright/test');
const { beforeEach, afterEach } = require("node:test");


const Login = new CommonPageLogin();
const PrimeiroTesTestePage = new PrimeiroTestePage();


// let page

 afterEach('', async function () {
   
   await page.close();

 })

Given('que acesso o link {string}', async function (Url) {
  await Login.navegatTo();
});

When('digito email e senha {string} {string}', async (email, senha) => {
  await PrimeiroTesTestePage.acessandoLogin(Email, Senha);
});


Then('devo acessar o site {string} com sucesso', async (string) => {
//   await page.locator('xpath=//button[text()="Entrar"]').click()
});