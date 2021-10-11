describe('Test should pass', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })

  describe('Test should fail', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    })
  })

  describe('Navigation test', () => {
    it('Checks the weather.', () => {
      cy.visit('https://localhost:5001/fetch-data')
    })
  })

  describe('Test the increment', () => {
    it('Finds and increments the counter', () => {
  
      cy.contains('Counter').click()

      for(let i = 0; i < 15; i ++){
        cy.contains('Increment').click()
      }

    })
  })

  describe('Search the page', () => {
    it('Searches for user input', () => {
  
      let userInput = prompt('What are you looking for?')
      cy.contains(userInput).click()

    })
  })



  