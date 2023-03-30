export function forceClick([subject]: Cypress.Chainable<Cypress.JQueryWithSelector>[]): Cypress.Chainable<
  JQuery<HTMLElement>
> {
  if (!subject) {
    throw new Error(`Could not find subject.`)
  }

  console.log(subject)

  try {
    return subject.click({ force: true })
  } catch (_) {
    return cy.wrap(subject as any).click({ force: true })
  }
}
