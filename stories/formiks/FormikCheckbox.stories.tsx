import { Formik } from 'formik'
import { noop } from 'lodash/fp'
import { useMemo, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikCheckbox } from '../../src'

import type { FormikCheckboxProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: FormikCheckboxProps = {
  disabled: false,
  isErrorMessageHidden: false,
  label: 'Check me',
  name: 'myCheckbox'
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikCheckboxProps> = {
  title: 'Formiks/FormikCheckbox',
  component: FormikCheckbox,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikCheckbox(props: FormikCheckboxProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myCheckbox?: boolean
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikCheckbox {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
