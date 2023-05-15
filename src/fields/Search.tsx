import ky from 'ky'
import { propEq } from 'ramda'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AutoComplete as RsuiteAutoComplete } from 'rsuite'
import styled from 'styled-components'
import { useDebouncedCallback } from 'use-debounce'

import { Accent, Size } from '../constants'
import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { IconButton } from '../elements/IconButton'
import { Label } from '../elements/Label'
import { useClickOutsideEffect } from '../hooks/useClickOutsideEffect'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { useKey } from '../hooks/useKey'
import { Close, Search as SearchIcon } from '../icons'
import { THEME } from '../theme'
import { normalizeString } from '../utils/normalizeString'

import type { Option, OptionValueType } from '../types'
import type { AutoCompleteProps as RsuiteAutoCompleteProps } from 'rsuite'
import type { ItemDataType } from 'rsuite/esm/@types/common'
import type { Promisable } from 'type-fest'

export type SearchProps<OptionValue extends OptionValueType = string> = Omit<
  RsuiteAutoCompleteProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'open' | 'onSelect' | 'value'
> & {
  MenuItem?: React.ElementType | undefined
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  defaultValue?: OptionValue | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isSearchIconHidden?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: Option | undefined) => Promisable<void>) | undefined
  onQuery?: ((nextQuery: string | undefined) => Promisable<void>) | undefined
  options?: Option<OptionValue>[] | undefined
  queryMap?: ((record: Record<string, any>) => Option<OptionValue>) | undefined
  queryUrl?: string | undefined
  /** Duration in milliseconds */
  throttleDuration?: number
}
export function Search<OptionValue extends OptionValueType = string>({
  baseContainer,
  defaultValue,
  error,
  isErrorMessageHidden = false,
  isLabelHidden,
  isLight = false,
  isSearchIconHidden = false,
  label,
  MenuItem,
  onChange,
  onQuery,
  options,
  queryMap,
  queryUrl,
  throttleDuration = 200,
  ...originalProps
}: SearchProps<OptionValue>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)
  const queryRef = useRef<string | undefined>(undefined)
  const prevDefaultValuePropRef = useRef<OptionValue | undefined>(defaultValue)
  const [inputValue, setInputValue] = useState<string | undefined>(undefined)

  const [autoGeneratedOptions, setAutoGeneratedOptions] = useState<Option<OptionValue>[]>([])
  const [controlledDefaultValue, setDefaultControlledValue] = useState<OptionValue | undefined>(defaultValue)
  const [isOpen, setIsOpen] = useState(false)

  const { forceUpdate } = useForceUpdate()

  const controlledError = useMemo(() => normalizeString(error), [error])
  const controlledOptions = useMemo(() => options ?? autoGeneratedOptions, [autoGeneratedOptions, options])
  const controlledValueAsLabel = useMemo(() => {
    if (originalProps.disabled) {
      return undefined
    }

    const foundOption = controlledOptions.find(propEq('value', controlledDefaultValue))

    return foundOption ? foundOption.label : undefined
  }, [controlledDefaultValue, controlledOptions, originalProps.disabled])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([controlledDefaultValue, originalProps.disabled, originalProps.name])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const clean = useCallback(() => {
    setInputValue('')
    setIsOpen(false)
  }, [])

  const fetchQueryResponse = useDebouncedCallback(
    async (_searched: string, _queryUrl: string, _queryMap: (record: Record<string, any>) => Option<OptionValue>) => {
      const url = _queryUrl.replace('%s', _searched)
      const rawData: Record<string, any>[] = await ky.get(url).json()

      return rawData.map(_queryMap)
    },
    throttleDuration
  )

  const handleChange = useCallback(
    async (nextQuery: OptionValue, event) => {
      if (!(typeof nextQuery === 'string')) {
        return
      }
      queryRef.current = normalizeString(nextQuery)
      if (event.type === 'change') {
        setInputValue(nextQuery)
        setIsOpen(Boolean(queryRef.current))
      } else {
        setIsOpen(false)
      }

      if (queryUrl && queryMap && queryRef.current) {
        const nextData = (await fetchQueryResponse(queryRef.current, queryUrl, queryMap)) || []

        setAutoGeneratedOptions(nextData)
      }

      if (onChange && !queryRef.current) {
        onChange(undefined)
      }

      if (onQuery) {
        onQuery(queryRef.current)
      }
    },
    [onChange, onQuery, queryMap, queryUrl, fetchQueryResponse]
  )

  const handleSelect = useCallback(
    (_, item: Option) => {
      if (onChange) {
        onChange(item)
      }
      setInputValue(item.label)
      setDefaultControlledValue(item.value as OptionValue)
    },
    [onChange]
  )

  useEffect(() => {
    if (defaultValue === prevDefaultValuePropRef.current) {
      return
    }

    setDefaultControlledValue(defaultValue)
  }, [defaultValue])

  useFieldUndefineEffect(originalProps.disabled, onChange)

  useClickOutsideEffect(boxRef, close, baseContainer)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field className="Field-Search">
      <Label
        disabled={originalProps.disabled}
        hasError={hasError}
        htmlFor={originalProps.name}
        isHidden={isLabelHidden}
      >
        {label}
      </Label>

      <Box ref={boxRef} isLight={isLight}>
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
            renderMenuItem={(itemLabel, item: ItemDataType<OptionValue>) =>
              MenuItem ? <MenuItem item={item.value} /> : itemLabel
            }
            value={inputValue}
            {...originalProps}
          />
        )}
        {inputValue && (
          <>
            <StyledCloseButton
              accent={Accent.TERTIARY}
              color={THEME.color.slateGray}
              Icon={Close}
              isSearchIconHidden={isSearchIconHidden}
              onClick={clean}
              size={Size.SMALL}
            />
            {!isSearchIconHidden && <Separator>|</Separator>}
          </>
        )}
        {!isSearchIconHidden && <StyledIconSearch color={THEME.color.slateGray} size={20} />}
      </Box>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledCloseButton = styled(IconButton)<{
  isSearchIconHidden: boolean
}>`
  cursor: pointer;
  height: 30px;
  margin: 5px ${p => (p.isSearchIconHidden ? 5 : 0)}px 5px 5px;
  padding: 8px;
  width: 30px;
`

const StyledIconSearch = styled(SearchIcon)`
  margin: 10px 10px 10px 8px;
`

const Separator = styled.div`
  height: 40px;
  font-weight: 300;
  color: ${p => p.theme.color.lightGray};
  padding-top: 3px;
  font-size: 20.5px;
`

const StyledAutoComplete = styled(RsuiteAutoComplete)<{
  $isLight: boolean
}>`
  font-size: 13px;
  flex-grow: 1;

  > input {
    background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
    border-width: 0 0 1px;
    border-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};

    font-size: 13px;
    width: 100%;
    height: 40px;
    padding: 11px 16px;

    :focus {
      outline: unset;
      border-color: ${p => p.theme.color.blueGray['100']};
    }
  }
`

const Box = styled.div<{
  isLight: boolean
}>`
  background-color: ${p => (p.isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  position: relative;
  width: 100%;
  display: flex;

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
