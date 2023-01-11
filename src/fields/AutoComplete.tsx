import ky from 'ky'
import { propEq } from 'ramda'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AutoComplete as RsuiteAutoComplete } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useClickOutside } from '../hooks/useClickOutside'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { normalizeString } from '../utils/normalizeString'

import type { Option } from '../types'
import type { AutoCompleteProps as RsuiteAutoCompleteProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type AutoCompleteProps = Omit<
  RsuiteAutoCompleteProps,
  'as' | 'container' | 'data' | 'id' | 'onChange' | 'open' | 'onSelect' | 'value'
> & {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null
  error?: string
  isLabelHidden?: boolean
  isLight?: boolean
  label: string
  name: string
  onChange?: (nextValue: string | undefined) => Promisable<void>
  onQuery?: (nextQuery: string | undefined) => Promisable<void>
  options?: Option[]
  queryMap?: (record: Record<string, any>) => Option
  queryUrl?: string
}
export function AutoComplete({
  baseContainer,
  defaultValue,
  error,
  isLabelHidden,
  isLight = false,
  label,
  onChange,
  onQuery,
  options,
  queryMap,
  queryUrl,
  ...originalProps
}: AutoCompleteProps) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)
  const queryRef = useRef<string | undefined>(undefined)
  const prevDefaultValuePropRef = useRef<string | undefined>(defaultValue)

  const [autoGeneratedOptions, setAutoGeneratedOptions] = useState<Option[]>([])
  const [controlledDefaultValue, setDefaultControlledValue] = useState<string | undefined>(defaultValue)
  const [isOpen, setIsOpen] = useState(false)

  const { forceUpdate } = useForceUpdate()

  const controlledError = useMemo(() => normalizeString(error), [error])
  const controlledOptions = useMemo(() => options ?? autoGeneratedOptions, [autoGeneratedOptions, options])
  const controlledValueAsLabel = useMemo(() => {
    const foundOption = controlledOptions.find(propEq('value', controlledDefaultValue))

    return foundOption ? foundOption.label : undefined
  }, [controlledDefaultValue, controlledOptions])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useMemo(
    () => `${originalProps.name}-${JSON.stringify(controlledDefaultValue)}`,
    [controlledDefaultValue, originalProps.name]
  )

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleChange = useCallback(
    async (nextQuery: string) => {
      queryRef.current = normalizeString(nextQuery)

      if (queryUrl && queryMap && queryRef.current) {
        const url = queryUrl.replace('%s', queryRef.current)
        const rawData: Record<string, any>[] = await ky.get(url).json()
        const nextData = rawData.map(queryMap)

        setAutoGeneratedOptions(nextData)
      }

      setIsOpen(Boolean(queryRef.current))

      if (onChange && !queryRef.current) {
        onChange(undefined)
      }

      if (onQuery) {
        onQuery(queryRef.current)
      }
    },
    [onChange, onQuery, queryMap, queryUrl]
  )

  const handleSelect = useCallback(
    (nextValue: string) => {
      if (onChange) {
        onChange(nextValue)
      }

      setDefaultControlledValue(nextValue)
    },
    [onChange]
  )

  const open = useCallback(() => {
    if (!queryRef.current) {
      return
    }

    setIsOpen(true)
  }, [])

  useEffect(() => {
    if (defaultValue === prevDefaultValuePropRef.current) {
      return
    }

    setDefaultControlledValue(defaultValue)
  }, [defaultValue])

  useClickOutside(boxRef, close, baseContainer)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field>
      <Label hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <Box ref={boxRef} onClick={open}>
        {boxRef.current && (
          <StyledAutoComplete
            key={key}
            $isLight={isLight}
            container={boxRef.current}
            data={controlledOptions}
            defaultValue={controlledValueAsLabel}
            id={originalProps.name}
            onChange={handleChange}
            onSelect={handleSelect}
            open={isOpen}
            {...originalProps}
          />
        )}
      </Box>

      {hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledAutoComplete = styled(RsuiteAutoComplete)<{
  $isLight: boolean
}>`
  font-size: 13px;

  > input {
    background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
    border: 0;
    font-size: 13px;
    width: 100%;
  }
`

const Box = styled.div`
  position: relative;

  > .rs-picker-select {
    > .rs-picker-toggle {
      font-size: 13px;

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-toggle-placeholder {
            font-size: 13px;
          }
        }
      }
    }
  }
`
