describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#messageHeader').should('be.visible');
         
     })
     it('Восстановление пароля', function () {
        cy.visit('login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').should('be.visible');
     })
     it('Неверный пароль', function () {
        cy.visit('login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('qa_one_love7');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#messageHeader').should('be.visible');
     })
     it('Неправильный логин', function () {
        cy.visit('login.qa.studio');
         cy.get('#mail').type('germaaaaaaan@dolnikov.ru');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#messageHeader').should('be.visible');
     })
     it('Валидация', function () {
        cy.visit('login.qa.studio');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#messageHeader').should('be.visible');
     })
     it('Строчные буквы', function () {
        cy.visit('login.qa.studio');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#messageHeader').should('be.visible');
     })
 })  