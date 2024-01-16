import { Formik } from 'formik'
import { noop } from 'lodash/fp'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikNumberInput } from '../../src'

import type { FormikNumberInputProps } from '../../src'

const args: FormikNumberInputProps = {
  disabled: false,
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  name: 'myNumberInput',
  label: 'A number input'
}

export default {
  title: 'Formiks/FormikNumberInput',
  component: FormikNumberInput,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _FormikNumberInput(props: FormikNumberInputProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myNumberInput?: number
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikNumberInput {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}