/* eslint-disable cypress/no-assigning-return-values */

import { isEmpty } from 'ramda'

import { checkCheckbox } from './checkCheckbox'
import { checkMultiCheckboxOptions } from './checkMultiCheckboxOptions'
import { checkMultiRadioOption } from './checkMultiRadioOption'
import { fillDatePicker } from './fillDatePicker'
import { fillDateRangePicker } from './fillDateRangePicker'
import { fillTextarea } from './fillTextarea'
import { fillTextInput } from './fillTextInput'
import { pickCheckPickerOptions } from './pickCheckPickerOptions'
import { pickMultiSelectOptions } from './pickMultiSelectOptions'
import { pickSelectOption } from './pickSelectOption'
import { findElementBySelector } from '../../utils/findElementBySelector'
import { findElementBytext } from '../../utils/findElementBytext'
import { waitFor } from '../../utils/waitFor'

const RETRIES = 5

export function fill(
  label: string | undefined,
  value:
    | boolean
    | number
    | string
    | string[]
    | (Cypress.DateTuple | Cypress.DateWithTimeTuple)
    | ([Cypress.DateTuple, Cypress.DateTuple] | [Cypress.DateWithTimeTuple, Cypress.DateWithTimeTuple])
    | undefined,
  leftRetries: number = RETRIES
): void {
  try {
    // -------------------------------------------------------------------------
    // If this is a `<label />` element

    const labelElement = findElementBytext('label', label as string) as HTMLLabelElement | undefined
    if (labelElement) {
      // -------------------------------------------------------------------------
      // If the label has a `for` attribute

      if (!isEmpty(labelElement.htmlFor)) {
        const htmlforElement = findElementBySelector(`[id="${labelElement.htmlFor}"]`)
        if (!htmlforElement) {
          throw new Error(
            `Could not find the element with [id="${labelElement.htmlFor}"] targetted by label "${label}" (via its \`for\` attribute).`
          )
        }

        const cypressHtmlforElement = cy.get(`[id="${labelElement.htmlFor}"]`)
        cypressHtmlforElement.then((() => {
          if (htmlforElement.classList.contains('rs-picker-toggle-textbox')) {
            const rsuitePickerElement =
              htmlforElement.parentElement &&
              htmlforElement.parentElement.parentElement &&
              htmlforElement.parentElement.parentElement.parentElement
                ? htmlforElement.parentElement.parentElement.parentElement.parentElement
                : undefined
            if (!rsuitePickerElement) {
              throw new Error('This should never happen.')
            }

            switch (true) {
              // Select
              case rsuitePickerElement.classList.contains('rs-picker-select'):
                pickSelectOption(cypressHtmlforElement, value !== undefined ? String(value) : value)
                break

              // Multi Select
              case rsuitePickerElement.classList.contains('rs-picker-tag'):
                pickMultiSelectOptions(
                  cypressHtmlforElement,
                  Array.isArray(value) && value.length > 0 ? (value as string[]) : undefined
                )
                break

              // Check Picker
              case rsuitePickerElement.classList.contains('rs-picker-check'):
                pickCheckPickerOptions(
                  cypressHtmlforElement,
                  Array.isArray(value) && value.length > 0 ? (value as string[]) : undefined
                )
                break

              default:
                throw new Error(
                  `\`cy.fill()\` can't handle Rsuite picker with class "${rsuitePickerElement.className}" elements.`
                )
            }

            return
          }

          switch (htmlforElement.tagName) {
            // Text/Number Input
            case 'INPUT':
              fillTextInput(htmlforElement as HTMLInputElement, value !== undefined ? String(value) : value)
              break

            // Textarea
            case 'TEXTAREA':
              fillTextarea(htmlforElement as HTMLTextAreaElement, value !== undefined ? String(value) : value)
              break

            default:
              throw new Error(`\`cy.fill()\` doesn't handle "${htmlforElement.tagName}" elements.`)
          }
        }) as any)

        return
      }

      // -------------------------------------------------------------------------
      // If the label doesn't have a `for` attribute

      // Checkbox Input
      const checkboxInputElement = labelElement.querySelector('input[type="checkbox"]') as HTMLInputElement | null
      if (checkboxInputElement) {
        checkCheckbox(checkboxInputElement, Boolean(value))

        return
      }

      // Text Input
      const textInputElement = labelElement.querySelector('input[type="text"]') as HTMLInputElement | null
      if (textInputElement) {
        fillTextInput(textInputElement, String(value))

        return
      }

      // Textarea
      const textareaElement = labelElement.querySelector('textarea')
      if (textareaElement) {
        fillTextarea(textareaElement, String(value))

        return
      }

      throw new Error(`Could find neither a checkbox, an input nor a textarea with the label "${label}".`)
    }

    // -------------------------------------------------------------------------
    // If this is a `<legend />` element

    const legendElement = findElementBytext('legend', label as string) as HTMLLegendElement | undefined

    if (legendElement) {
      const cypressLegendElement = cy.get('legend').contains(label as string)
      cypressLegendElement.then(async () => {
        await waitFor(500)

        const fieldsetElement = legendElement.parentElement
        if (!fieldsetElement || fieldsetElement.tagName !== 'FIELDSET') {
          throw new Error(`Could not find parent fieldset of legend element with text "${label}".`)
        }

        if (fieldsetElement.classList.contains('Field-DatePicker')) {
          if (
            (!Array.isArray(value) || (value.length !== 3 && value.length !== 5) || typeof value[0] !== 'number') &&
            value !== undefined
          ) {
            throw new Error(
              '`value` should be of type `[number, number, number]`, `[number, number, number, number, number]` or `undefined`.'
            )
          }

          fillDatePicker(fieldsetElement, value as Cypress.DateTuple | Cypress.DateWithTimeTuple | undefined)

          return
        }

        if (fieldsetElement.classList.contains('Field-DateRangePicker')) {
          if (
            (!Array.isArray(value) ||
              value.length !== 2 ||
              !Array.isArray(value[0]) ||
              (value[0].length !== 3 && value[0].length !== 5) ||
              (value[1].length !== 3 && value[1].length !== 5)) &&
            value !== undefined
          ) {
            throw new Error(
              '`value` should be of type `[[number, number, number], [number, number, number]]` or ``[[number, number, number, number, number], [number, number, number, number, number]]`` or `undefined`.'
            )
          }

          fillDateRangePicker(
            fieldsetElement,
            value as
              | [Cypress.DateTuple, Cypress.DateTuple]
              | [Cypress.DateWithTimeTuple, Cypress.DateWithTimeTuple]
              | undefined
          )

          return
        }

        const isMultiCheckbox = Boolean(fieldsetElement.querySelector('input[type="checkbox"]'))
        const isMultiRadio = Boolean(fieldsetElement.querySelector('input[type="radio"]'))

        if (isMultiCheckbox) {
          checkMultiCheckboxOptions(
            fieldsetElement,
            Array.isArray(value) && value.length > 0 ? (value as string[]) : undefined
          )

          return
        }

        if (isMultiRadio) {
          checkMultiRadioOption(fieldsetElement, String(value))

          return
        }

        throw new Error(`\`cy.fill()\` can't handle the field with legend "${label}".`)
      })

      return
    }

    throw new Error(`Could not find label or legend element with text "${label}".`)
  } catch (err) {
    if (leftRetries > 0) {
      cy.wait(250).then(() => {
        cy.log(`Retrying (${RETRIES - leftRetries + 1} / ${RETRIES})...`)

        fill(label, value, leftRetries - 1)
      })

      return
    }

    throw new Error(`Could not find label or legend element with text "${label}" after ${RETRIES} attempts.`)
  }
}
