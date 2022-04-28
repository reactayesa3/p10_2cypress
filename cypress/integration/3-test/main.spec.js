describe('Crear cliente', () => { // Suite test

    const time = 1000;

    it('Navega al componente para crear cliente', () => { // Case test
        cy.visit('http://127.0.0.1:3000') 
        cy.wait(time);
        cy.get(':nth-child(1) > .col-100 > input').type('juan@gmail.com');
        cy.wait(time);
        cy.get(':nth-child(2) > .col-100 > input').type('1234');
        cy.wait(time);
        cy.get('button').click();
        cy.wait(4000);
        cy.get('[href="/ventas"]').click();
    })

})