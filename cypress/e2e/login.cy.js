/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display Thread when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible')
    cy.get('input[placeholder="Password"]').should('be.visible')
    cy.get('button').contains(/^Login$/).should('be.visible')
  })

  it('should display alert when username is empty', () => {
    cy.get('button').contains(/^Login$/).click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty')
    })
  })

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Email"]').type('eren@gmail.com')

    cy.get('button').contains(/^Login$/).click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty')
    })
  })
  it('should display alert when username and password are wrong', () => {
    cy.get('input[placeholder="Email"]').type('eren@gmail.com')
    cy.get('input[placeholder="Password"]').type('wrong_password')

    cy.get('button').contains(/^Login$/).click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong')
    })
  })
  it('should display thread when username and password are correct', () => {
    cy.get('input[placeholder="Email"]').type('zeger@gmail.com')

    cy.get('input[placeholder="Password"]').type('12345678')

    cy.get('button').contains(/^Login$/).click()

    cy.get('nav').contains(/^Threads$/).should('be.visible')
    cy.get('button').contains('Logout').should('be.visible')
  })
})
