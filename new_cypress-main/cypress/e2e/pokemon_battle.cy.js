describe('Вход и покупка аватара', function () {

    it('Вход в аккаунтВход и покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('#k_email').type('mamaha.trus@yandex.ru');
         cy.get('#k_password').type('Meow125');
         cy.get('.MuiButton-root').click();
         cy.get('.header_card_trainer').click();
         cy.get('[data-qa="shop"]').click();
         cy.get('.available .shop__button').first().click();
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4242 4242 4242 4242');
         cy.get(':nth-child(1) > .style_1_base_input').type('1234');
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('IVAN IVANOV');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.style_1_base_input').type('56456');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно');
     })
 }) 