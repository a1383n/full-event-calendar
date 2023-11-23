/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })

  it('monthly check', () => {
    cy.get('[data-test-id-dropdown=1]').click().get('[data-test-id-drop=2]').click()
    cy.get('[data-test-id-month-row=0] [data-test-id-row-wrapper=0]').children().should('have.length', 2)
    cy.get('[data-test-id-month-row=0] [data-test-id-row-wrapper=1]').children().should('have.length', 2)
    cy.get('[data-test-id-month-row=0] [data-test-id-row-wrapper=2]').children().should('have.length', 1)
    cy.get('[data-test-id-month-row=0] [data-test-id-row-wrapper=3]').children().should('have.length', 2)

    cy.get('[data-test-id-month-row=1] [data-test-id-row-wrapper=0]').children().should('have.length', 1)
    cy.get('[data-test-id-month-row=1] [data-test-id-row-wrapper=1]').children().should('have.length', 5)
    cy.get('[data-test-id-month-row=1] [data-test-id-row-wrapper=2]').children().should('have.length', 1)
    cy.get('[data-test-id-month-row=1] [data-test-id-row-wrapper=3]').children().should('have.length', 3)

    cy.get('[data-test-id-month-row=2] [data-test-id-row-wrapper=0]').children().should('have.length', 1)
    cy.get('[data-test-id-month-row=2] [data-test-id-row-wrapper=1]').children().should('have.length', 1)
    cy.get('[data-test-id-month-row=2] [data-test-id-row-wrapper=2]').children().should('have.length', 2)

    cy.get('[data-test-id-month-row=2] [data-test-id-row-wrapper=0]').children().should('have.length', 1)
    cy.get('[data-test-id-month-row=2] [data-test-id-row-wrapper=1]').children().should('have.length', 1)
    cy.get('[data-test-id-month-row=2] [data-test-id-row-wrapper=2]').children().should('have.length', 2)

    cy.get('[data-test-id-month-row=3] [data-test-id-row-wrapper=0]').children().should('have.length', 1)
  })

  it('week drag-n drop event', () => {
    cy.get('[data-test-id-dropdown=1]').click().get('[data-test-id-drop=1]').click()
    cy.get('[data-test-event-id=6]').trigger('mouseover').trigger('mousedown')
    cy.get('[data-test-id-daily-grid=cl-2]')
      .children('.fec-daily-grid')
      .children('[data-test-time-range-id=2]')
      .trigger('mouseover')
      .trigger('mouseup')
    cy.get('[data-test-id-daily-grid=cl-2] [data-test-col-id=0]').children('[data-test-event-id=6]').should('exist')
  })

  it('week drag-n drop event', () => {
    cy.get('[data-test-id-dropdown=1]').click().get('[data-test-id-drop=1]').click()

    cy.get('[data-test-event-id=6]').trigger('mouseover').trigger('mousedown')

    cy.get('[data-test-id-daily-grid=cl-2]')
      .children('.fec-daily-grid')
      .children('[data-test-time-range-id=2]')
      .trigger('mouseover')
      .trigger('mouseup')
    cy.get('[data-test-id-daily-grid=cl-2] [data-test-col-id=0]').children('[data-test-event-id=6]').should('exist')
  })

  it('resize event', () => {
    cy.get('[data-test-event-id=8]')
      .children('.resizer')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 123, clientY: 123 })
      .trigger('mouseup', { force: true })
    // cy.get("[data-test-time-range-id=23]").trigger('mosueover').trigger('mousemove').trigger('mouseup')

    // cy.get("[data-test-time-range-id=3]").trigger('mouseover').trigger('mouseup')
    // cy.get("[data-test-col-id=0]").children("[data-test-event-id=6]").should('exist')
    // cy.get("[data-test-col-id=0]").children("[data-test-event-id=6]").should('have.text',' id : 6start :Thu Aug 10 2023 03:00:00 GMT+0330 (Iran Standard Time)end :Thu Aug 10 2023 05:04:04 GMT+0330 (Iran Standard Time)')
  })

  it('mous drop', () => {
    cy.get('[data-test-event-id=6]').trigger('mouseover').trigger('mousedown')

    cy.get('[data-test-time-range-id=3]').trigger('mouseover').trigger('mouseup')
    cy.get('[data-test-col-id=0]').children('[data-test-event-id=6]').should('exist')
    cy.get('[data-test-col-id=0]')
      .children('[data-test-event-id=6]')
      .should(
        'have.text',
        ' id : 6start :Thu Aug 10 2023 03:00:00 GMT+0330 (Iran Standard Time)end :Thu Aug 10 2023 05:04:04 GMT+0330 (Iran Standard Time)'
      )

    // cy.get("[data-test-event-id=8]").trigger('mouseover').trigger('mousedown')

    // cy.get("[data-test-time-range-id=17]").trigger('mouseover',{force:true}).trigger('mouseup',{force:true})
    // cy.get("[data-test-col-id=2]").children("[data-test-event-id=6]").should('exist')
    // cy.get("[data-test-col-id=2]").children("[data-test-event-id=6]").should('have.text',' id : 6start :Thu Aug 10 2023 03:00:00 GMT+0330 (Iran Standard Time)end :Thu Aug 10 2023 05:04:04 GMT+0330 (Iran Standard Time)')
  })

  it('all day header', () => {
    cy.get('.all-day-container').children().should('have.length', 5)

    cy.get('.all-day-container').children('[data-testid=114]').should('have.class', 'month-both-arrow')
    cy.get('.all-day-container').children('[data-testid=32]').should('have.class', 'month-both-arrow')
    cy.get('.all-day-container').children('[data-testid=30]').should('have.class', 'month-both-arrow')
    cy.get('.all-day-container').children('[data-testid=18]').should('have.class', 'month-no-arrow')
    cy.get('.all-day-container').children('[data-testid=19]').should('have.class', 'month-right-arrow')
  })

  it('grid col-1 tests', () => {
    cy.get('.holdcontainer').children('[data-test-col-id=0]').children().should('have.length', 4)
    cy.get('.holdcontainer').children('[data-test-col-id=0]').children('[data-test-event-id=6]').should('exist')
    cy.get('.holdcontainer').children('[data-test-col-id=0]').children('[data-test-event-id=7]').should('exist')
    cy.get('.holdcontainer').children('[data-test-col-id=0]').children('[data-test-event-id=14]').should('exist')
    cy.get('.holdcontainer').children('[data-test-col-id=0]').children('[data-test-event-id=170]').should('exist')
  })

  it('grid col-2 tests', () => {
    cy.get('.holdcontainer').children('[data-test-col-id=1]').children().should('have.length', 2)
    cy.get('.holdcontainer').children('[data-test-col-id=1]').children('[data-test-event-id=8]').should('exist')
    cy.get('.holdcontainer').children('[data-test-col-id=1]').children('[data-test-event-id=15]').should('exist')
  })

  it('grid col-3 tests', () => {
    cy.get('.holdcontainer').children('[data-test-col-id=2]').children().should('have.length', 3)
    cy.get('.holdcontainer').children('[data-test-col-id=2]').children('[data-test-event-id=9]').should('exist')
    cy.get('.holdcontainer').children('[data-test-col-id=2]').children('[data-test-event-id=11]').should('exist')
    cy.get('.holdcontainer').children('[data-test-col-id=2]').children('[data-test-event-id=16]').should('exist')
  })

  it('grid col-4 tests', () => {
    cy.get('.holdcontainer').children('[data-test-col-id=3]').children().should('have.length', 2)
    cy.get('.holdcontainer').children('[data-test-col-id=3]').children('[data-test-event-id=10]').should('exist')
    cy.get('.holdcontainer').children('[data-test-col-id=3]').children('[data-test-event-id=13]').should('exist')
  })

  it('grid col-5 tests', () => {
    cy.get('.holdcontainer').children('[data-test-col-id=4]').children().should('have.length', 1)
    cy.get('.holdcontainer').children('[data-test-col-id=4]').children('[data-test-event-id=12]').should('exist')
  })
})
