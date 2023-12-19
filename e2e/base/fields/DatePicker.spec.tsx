import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import Meta, { _DatePicker as DatePickerStory } from '../../../stories/fields/DatePicker.stories'
import { mountAndWait, outputShouldBe } from '../utils'

context('Base', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <DatePickerStory {...Meta.args} withTime={false} />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date', () => {
    cy.fill('A date', [2021, 12, 31])

    outputShouldBe('2021-12-31T00:00:00.000Z')

    cy.fill('A date', [2024, 3, 4])

    outputShouldBe('2024-03-04T00:00:00.000Z')

    cy.fill('A date', undefined)

    outputShouldBe(undefined)
  })

  it('Should automatically switch focus', () => {
    // First fill

    outputShouldBe(undefined)

    cy.get('input[aria-label="Jour"]').type('01')

    cy.get('input[aria-label="Mois"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Mois"]').type('02')

    cy.get('input[aria-label="Année"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Année"]').type('2023')

    cy.get('input[aria-label="Année"]').should('have.focus')
    outputShouldBe('2023-02-01T00:00:00.000Z')

    // Year change

    cy.clickOutside()
    cy.get('input[aria-label="Année"]').type('2024')

    cy.get('input[aria-label="Année"]').should('have.focus')
    outputShouldBe('2024-02-01T00:00:00.000Z')

    // Month change

    cy.get('input[aria-label="Mois"]').type('01')

    cy.get('input[aria-label="Année"]').should('have.focus')
    outputShouldBe('2024-01-01T00:00:00.000Z')

    // Day change

    cy.get('input[aria-label="Jour"]').type('24')

    cy.get('input[aria-label="Mois"]').should('have.focus')
    outputShouldBe('2024-01-24T00:00:00.000Z')

    // Month deletion followed by calendar pick

    cy.get('input[aria-label="Mois"]').type('{backspace}')

    cy.get('input[aria-label="Mois"]').should('have.focus')
    outputShouldBe('2024-01-24T00:00:00.000Z')

    cy.get('button[aria-label="Previous month"]').click()
    cy.get('div[role="button"][title="11/12/2023"]').click()

    cy.get('input[aria-label="Jour"]').should('have.value', '11')
    cy.get('input[aria-label="Mois"]').should('have.value', '12')
    cy.get('input[aria-label="Année"]').should('have.value', '2023')
    outputShouldBe('2023-12-11T00:00:00.000Z')
  })
})

context('Base (with time)', () => {
  beforeEach(() => {
    mountAndWait(
      <GlobalDecoratorWrapper>
        <DatePickerStory {...Meta.args} withTime />
      </GlobalDecoratorWrapper>
    )
  })

  it('Should fill, change and clear the date', () => {
    cy.fill('A date', [2021, 12, 31, 4, 56])

    outputShouldBe('2021-12-31T04:56:00.000Z')

    cy.fill('A date', [2024, 3, 4, 23, 18])

    outputShouldBe('2024-03-04T23:18:00.000Z')

    cy.fill('A date', undefined)

    outputShouldBe(undefined)
  })

  it('Should automatically switch focus', () => {
    // First fill

    outputShouldBe(undefined)

    cy.get('input[aria-label="Jour"]').type('01')

    cy.get('input[aria-label="Mois"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Mois"]').type('02')

    cy.get('input[aria-label="Année"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Année"]').type('2023')

    cy.get('input[aria-label="Heure"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Heure"]').type('12')

    cy.get('input[aria-label="Minute"]').should('have.focus')
    outputShouldBe(undefined)

    cy.get('input[aria-label="Minute"]').type('34')

    cy.get('input[aria-label="Minute"]').should('have.focus')
    outputShouldBe('2023-02-01T12:34:00.000Z')

    // Hour change

    cy.get('input[aria-label="Heure"]').type('23')

    cy.get('input[aria-label="Minute"]').should('have.focus')
    outputShouldBe('2023-02-01T23:34:00.000Z')

    // Year change

    cy.get('input[aria-label="Année"]').type('2024')

    cy.get('input[aria-label="Heure"]').should('have.focus')
    outputShouldBe('2024-02-01T23:34:00.000Z')

    // Month change

    cy.get('input[aria-label="Mois"]').type('01')

    cy.get('input[aria-label="Année"]').should('have.focus')
    outputShouldBe('2024-01-01T23:34:00.000Z')

    // Month deletion followed by calendar pick

    cy.get('input[aria-label="Mois"]').type('{backspace}')

    cy.get('input[aria-label="Mois"]').should('have.focus')
    outputShouldBe('2024-01-01T23:34:00.000Z')

    cy.get('button[aria-label="Previous month"]').click()
    cy.get('div[role="button"][title="11/12/2023"]').click()

    cy.get('input[aria-label="Heure"]').should('have.focus')
    cy.get('input[aria-label="Jour"]').should('have.value', '11')
    cy.get('input[aria-label="Mois"]').should('have.value', '12')
    cy.get('input[aria-label="Année"]').should('have.value', '2023')
    outputShouldBe('2023-12-11T23:34:00.000Z')
  })
})