describe('Test task', () => {
  it('upload the file and check the field values', () => {
  cy.visit('https://js-55fbfg.stackblitz.io/');

  cy.get('[onclick="__runProject()"]').click();
  cy.get('.btn-primary').should('contain.text', 'Добавить').click();
  

  cy.get('[class="dropbox ng-isolate-scope"]')
  .selectFile('cypress/fixtures/idd_2019.cer',
   { 
    action: 'drag-drop' 
  });

  cy.get('[class="list-group-item list-group-item-action ng-binding ng-scope active"]')
  .should('contain.text', 'UA-43174711-2019')
  cy.get('tbody > :nth-child(1) > .ng-binding').should('contain.text', 'UA-43174711-2019')
  cy.get(':nth-child(2) > .ng-binding').should('contain.text', 'UA-00015622-2017')
  cy.get(':nth-child(3) > .ng-binding').should('contain.text', '2019-09-24 14:20:00 UTC')
  cy.get(':nth-child(4) > .ng-binding').should('contain.text', '2024-09-24 14:20:00 UTC')

  });
  });