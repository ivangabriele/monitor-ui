import { Formik } from 'formik'
import { noop } from 'lodash/fp'
import { useMemo, useState } from 'react'
import * as Yup from 'yup'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { FormikEffect, FormikTextarea } from '../../src'

import type { FormikTextareaProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: FormikTextareaProps = {
  disabled: false,
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A textarea',
  name: 'myTextarea'
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<FormikTextareaProps> = {
  title: 'Formiks/FormikTextarea',
  component: FormikTextarea,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasLightMode: true
    })
  ]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _FormikTextarea(props: FormikTextareaProps) {
  const [outputValue, setOutputValue] = useState<
    | {
        myTextarea?: string
      }
    | '∅'
  >('∅')

  const key = useMemo(() => props.name, [props.name])
  const TextareaShema = useMemo(
    () =>
      Yup.object().shape({
        [props.name]: Yup.string().required()
      }),
    [props.name]
  )

  return (
    <>
      <Formik key={key} initialValues={{}} onSubmit={noop} validationSchema={TextareaShema}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikTextarea {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
