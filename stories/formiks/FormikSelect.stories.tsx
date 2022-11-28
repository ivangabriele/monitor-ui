import { Formik } from 'formik'
import { useState } from 'react'

import { FormikEffect, FormikSelect } from '../../src'
import { Output } from '../_components/Output'
import { noop } from '../_utils/noop'

import type { FormikSelectProps } from '../../src'

const args: FormikSelectProps = {
  placeholder: 'Pick an option',
  name: 'mySelect',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ]
}

export default {
  title: 'Formiks/FormikSelect',
  component: FormikSelect,

  argTypes: {},

  args
}

export const _FormikSelect = (props: FormikSelectProps) => {
  const [outputValue, setOutputValue] = useState<
    | {
        mySelect?: string
      }
    | '∅'
  >('∅')

  return (
    <>
      <Formik initialValues={{}} onSubmit={noop}>
        <>
          <FormikEffect onChange={setOutputValue} />

          <FormikSelect {...props} />
        </>
      </Formik>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
