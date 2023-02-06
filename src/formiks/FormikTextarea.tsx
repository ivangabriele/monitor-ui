import { useField } from 'formik'
import { useEffect, useMemo } from 'react'

import { Textarea } from '../fields/Textarea'

import type { TextareaProps } from '../fields/Textarea'

export type FormikTextareaProps = Omit<TextareaProps, 'defaultValue' | 'onChange'>
export function FormikTextarea({ name, ...originalProps }: FormikTextareaProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])

  useEffect(
    () => () => {
      helpers.setValue(undefined)
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <Textarea defaultValue={defaultValue} name={name} onChange={helpers.setValue} {...originalProps} />
}
