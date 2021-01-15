describe('Example to demonstrate the handling of Shadow Dom in Cypress', () => {
  before(() => {
      cy.visit('https://books-pwakit.appspot.com/')
  })
  it('Input a text in the input box and after search validate the URL', () => {
      cy.get('book-app')
          .shadow()
          .find('app-header')
          .find('.toolbar-bottom')
          .find('book-input-decorator')
          .find('#input')
          .type('Science')
          .click()
          .url('contains', 'explore?q=Science')
  })
})