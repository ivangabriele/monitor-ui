import { clickButton } from './commands/clickButton'
import { clickLink } from './commands/clickLink'
import { clickOutside } from './commands/clickOutside'
import { fill } from './commands/fill'
import { forceClick } from './commands/forceClick'
import { getDataCy } from './commands/getDataCy'
import { getTableRowById } from './commands/getTableRowById'
import { getTableRowByText } from './commands/getTableRowByText'

export const registerMonitorUiCustomCommands = () => {
  Cypress.Commands.add('clickButton' as any, { prevSubject: 'optional' } as any, clickButton as any)
  Cypress.Commands.add('clickLink', clickLink)
  Cypress.Commands.add('clickOutside', clickOutside)
  Cypress.Commands.add('fill', fill)
  Cypress.Commands.add('forceClick', { prevSubject: true }, forceClick)
  Cypress.Commands.add('getDataCy', getDataCy)
  Cypress.Commands.add('getTableRowById', { prevSubject: 'optional' } as any, getTableRowById)
  Cypress.Commands.add('getTableRowByText', { prevSubject: 'optional' } as any, getTableRowByText)
}

registerMonitorUiCustomCommands()
