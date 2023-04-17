/* eslint-disable react/destructuring-assignment */

import { Formik } from 'formik'
import { noop } from 'lodash'
import { useState } from 'react'

import { GlobalDecoratorWrapper } from '../../../.storybook/components/GlobalDecorator'
import { Output } from '../../../.storybook/components/Output'
import { Button, FormikCheckbox, FormikEffect, CheckboxProps, FormikCheckboxProps } from '../../../src'
import { mountAndWait, outputShouldBe } from '../utils'

function Template({
  initialValue,
  updatedValue,
  ...props
}: FormikCheckboxProps & {
  initialValue?: boolean
  updatedValue: boolean
}) {
  const [isDisabled, setIsDisabled] = useState(false)
  const [outputValue, setOutputValue] = useState({})

  const onChange = nextValues => {
    setOutputValue(nextValues)
  }

  return (
    <GlobalDecoratorWrapper>
      <Formik
        initialValues={
          initialValue
            ? {
                [props.name]: initialValue
              }
            : {}
        }
        onSubmit={noop}
      >
        {({ setFieldValue }) => (
          <>
            <FormikEffect onChange={onChange} />

            <FormikCheckbox {...props} disabled={isDisabled} />

            <Button onClick={() => setIsDisabled(true)}>Disable</Button>
            <Button onClick={() => setFieldValue(props.name, updatedValue)}>Update</Button>
            <Button onClick={() => setFieldValue(props.name, undefined)}>Reset</Button>
          </>
        )}
      </Formik>

      <Output value={outputValue} />
    </GlobalDecoratorWrapper>
  )
}

context('Template', () => {
  const commonProps: CheckboxProps = {
    label: 'A text input',
    name: 'myCheckbox'
  }

  it('Should update and reset the text input value', () => {
    const updatedValue = true

    mountAndWait(<Template {...commonProps} updatedValue={updatedValue} />)

    outputShouldBe({
      myCheckbox: false
    })

    cy.clickButton('Update')

    outputShouldBe({
      myCheckbox: updatedValue
    })

    cy.clickButton('Reset')

    outputShouldBe({})
  })

  it('Should update and reset the text input value with initial values', () => {
    const initialValue = false
    const updatedValue = true

    mountAndWait(<Template {...commonProps} initialValue={initialValue} updatedValue={updatedValue} />)

    outputShouldBe({
      myCheckbox: initialValue
    })

    cy.clickButton('Update')

    outputShouldBe({
      myCheckbox: updatedValue
    })

    cy.clickButton('Reset')

    outputShouldBe({})
  })

  it('Should update and disable the text input value', () => {
    const updatedValue = true

    mountAndWait(<Template {...commonProps} updatedValue={updatedValue} />)

    outputShouldBe({
      myCheckbox: false
    })

    cy.clickButton('Update')

    outputShouldBe({
      myCheckbox: updatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({
      myCheckbox: updatedValue
    })
  })

  it('Should update and disable the text input value with `isUndefinedWhenDisabled`', () => {
    const updatedValue = true

    mountAndWait(<Template {...commonProps} isUndefinedWhenDisabled updatedValue={updatedValue} />)

    outputShouldBe({
      myCheckbox: false
    })

    cy.clickButton('Update')

    outputShouldBe({
      myCheckbox: updatedValue
    })

    cy.clickButton('Disable')

    outputShouldBe({})
  })
})
