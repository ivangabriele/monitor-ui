import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { TagPicker, type TagPickerProps } from 'rsuite'
import styled from 'styled-components'
import { useDebouncedCallback } from 'use-debounce'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useClickOutsideEffect } from '../hooks/useClickOutsideEffect'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { useKey } from '../hooks/useKey'
import { type CustomSearch } from '../libs/CustomSearch'
import { type Option, type OptionAsRsuiteItemDataType, type OptionValueType } from '../types'
import { getRsuiteDataFromOptions } from '../utils/getRsuiteDataFromOptions'
import { getRsuiteValueFromOptionValue } from '../utils/getRsuiteValueFromOptionValue'
import { normalizeString } from '../utils/normalizeString'

import type { Promisable } from 'type-fest'

export type MultiSelectProps<OptionValue extends OptionValueType = string> = Omit<
  TagPickerProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'open' | 'renderMenuItem' | 'value'
> & {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  customSearch?: CustomSearch<Option<OptionValue>> | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue[] | undefined) => Promisable<void>) | undefined
  optionValueKey?: keyof OptionValue | undefined
  options: Option<OptionValue>[]
  value?: OptionValue[] | undefined
}
export function MultiSelect<OptionValue extends OptionValueType = string>({
  baseContainer,
  customSearch,
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  options,
  optionValueKey,
  searchable = false,
  value,
  ...originalProps
}: MultiSelectProps<OptionValue>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)
  /** Instance of `CustomSearch` */
  const customSearchRef = useRef(customSearch)
  /** Current list of option labels found by `CustomSearch.find()` for the current select search query */
  const customSearchLabelMatchesRef = useRef<string[]>([])

  const [isOpen, setIsOpen] = useState(false)

  const controlledError = useMemo(() => normalizeString(error), [error])
  const data = useMemo(() => getRsuiteDataFromOptions(options, optionValueKey), [options, optionValueKey])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, originalProps.name, value])
  const searchBy = useMemo(
    () =>
      // Since this function is called by a `.filter()` in Rsuite,
      // we first prepare `CustomSearch` results in `handleSearch()` (called each time the search query changes),
      // and we use the `customSearchLabelMatchesRef` ref-stored results, in the form of option labels,
      // to check if the current option label is part of these results.
      // Note that options label are expected to be unique in order for this pattern to work.
      customSearchRef.current
        ? (query: string, _label: ReactNode, item: OptionAsRsuiteItemDataType<OptionValue>) =>
            query.trim().length > 0 ? customSearchLabelMatchesRef.current.includes(item.label) : true
        : undefined,
    []
  )
  const rsuiteValue = useMemo(
    () => (value || []).map(valueItem => getRsuiteValueFromOptionValue(valueItem, optionValueKey)),
    [optionValueKey, value]
  )

  const { forceUpdate } = useForceUpdate()

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleChange = useCallback(
    (nextOptionRsuiteValues: string[] | null) => {
      if (!onChange) {
        return
      }

      const nextValue = nextOptionRsuiteValues
        ? options
            .filter(option =>
              nextOptionRsuiteValues.includes(
                optionValueKey ? (option.value as any)[optionValueKey] : String(option.value)
              )
            )
            .map(option => option.value)
        : []
      const normalizedNextValue = !nextValue.length ? undefined : nextValue

      onChange(normalizedNextValue)
    },
    [onChange, options, optionValueKey]
  )

  const handleSearch = useDebouncedCallback((query: string) => {
    if (!customSearchRef.current) {
      return
    }

    customSearchLabelMatchesRef.current = customSearchRef.current.find(query).map(option => option.label)
  }, 500)

  const renderMenuItem = useCallback((node: ReactNode) => <span title={String(node)}>{String(node)}</span>, [])

  const toggle = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      let targetElement = event.target as HTMLElement

      if (targetElement.tagName === 'path') {
        if (targetElement.parentElement) {
          targetElement = targetElement.parentElement
        }
      }

      if (
        targetElement.classList.contains('rs-picker-toggle') ||
        targetElement.classList.contains('rs-picker-tag-wrapper') ||
        targetElement.classList.contains('rs-picker-toggle-caret')
      ) {
        setIsOpen(!isOpen)
      }
    },
    [isOpen]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  useClickOutsideEffect(boxRef, close, baseContainer)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field className="Field-MultiSelect">
      <Label disabled={disabled} hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <Box ref={boxRef} $hasError={hasError} $isActive={isOpen} $isLight={isLight} onClick={toggle}>
        {boxRef.current && (
          <TagPicker
            key={key}
            container={boxRef.current}
            data={data}
            disabled={disabled}
            id={originalProps.name}
            // Since we customized `ItemDataType` type by adding `optionValue`, we have an optional vs required conflict
            onChange={handleChange as any}
            onClick={toggle}
            onSearch={handleSearch}
            open={isOpen}
            renderMenuItem={renderMenuItem}
            searchable={searchable}
            searchBy={searchBy as any}
            value={rsuiteValue}
            {...originalProps}
          />
        )}
      </Box>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const Box = styled.div<{
  $hasError: boolean
  $isActive: boolean
  $isLight: boolean
}>`
  position: relative;
  width: 100%;

  > .rs-picker-input {
    background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
    border: solid 1px
      ${p => {
        if (p.$hasError) {
          return p.theme.color.maximumRed
        }
        if (p.$isActive) {
          return p.theme.color.blueGray[100]
        }

        return p.theme.color.gainsboro
      }} !important;
    cursor: pointer;
    width: 100%;

    :hover {
      border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueYonder[100])} !important;
    }

    :active,
    :focus {
      border: solid 1px ${p => p.theme.color.blueGray[100]} !important;
    }

    > .rs-picker-toggle {
      background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
      border: 0;
      bottom: 0;
      cursor: inherit;
      font-size: 13px;
      height: 30px;
      line-height: 1.3846;
      padding: 5px 40px 0 8px !important;
      top: 0;

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-toggle-placeholder {
            font-size: 13px;
            line-height: 1;
            vertical-align: 1px;
          }

          .rs-picker-toggle-caret {
            right: 10px;
          }
          .rs-picker-toggle-clean,
          .rs-picker-toggle-caret {
            padding: 0;
            top: 5px;
          }
        }
      }
    }

    > .rs-picker-tag-wrapper {
      min-height: 30px;
      padding: 0 !important;

      > .rs-tag {
        background-color: ${p => (p.$isLight ? p.theme.color.gainsboro : p.theme.color.white)};
        font-size: 11px;
        line-height: 1.3636; // = 15px

        > .rs-tag-icon-close {
          bottom: 0;
          padding: 3px 6px;

          > svg {
            height: 10px;
            width: 10px;
          }
        }
      }

      > .rs-picker-search {
        > .rs-picker-search-input {
          padding: 0 8px !important;

          > input {
            font-size: 13px;
            line-height: 1.3846;
          }
        }
      }
    }
  }

  > .rs-picker-menu {
    max-width: 100%;

    > .rs-picker-check-menu {
      margin: 0;

      > div[role='option'] {
        > .rs-check-item {
          > .rs-checkbox-checker {
            > label {
              font-size: 13px;
              line-height: 1.3846;
              overflow: hidden;
              padding: 8px 12px 8px 38px;
              text-overflow: ellipsis;
              white-space: nowrap;

              > .rs-checkbox-wrapper {
                left: 12px;
                top: 10px !important;
              }
            }
          }
        }
      }
    }
  }
`
