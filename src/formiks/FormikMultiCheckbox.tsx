import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiCheckbox } from '../fields/MultiCheckbox'

import type { MultiCheckboxProps } from '../fields/MultiCheckbox'
import type { OptionValueType } from '../types'

export type FormikMultiCheckboxProps<OptionValue extends OptionValueType = string> = Omit<
  MultiCheckboxProps<OptionValue>,
  'defaultValue' | 'error' | 'onChange'
>
export function FormikMultiCheckbox<OptionValue extends OptionValueType = string>({
  name,
  ...originalProps
}: FormikMultiCheckboxProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue[] | undefined>(name)

  const error = meta.touched ? meta.error : undefined
  const handleChange = useMemo(
    () => value => {
      helpers.setTouched(true)
      helpers.setValue(value)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <MultiCheckbox error={error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
