import { getSelectedOptionValuesFromSelectedRsuiteDataItemValues } from '@utils/getSelectedOptionValuesFromSelectedRsuiteDataItemValues'
import classnames from 'classnames'
import { StyledRsuitePickerBox } from 'fields/shared/StyledRsuitePickerBox'
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { TagPicker, type TagPickerProps } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { useKey } from '../hooks/useKey'
import { type CustomSearch } from '../libs/CustomSearch'
import { type Option, type OptionValueType } from '../types/definitions'
import { getRsuiteDataItemsFromOptions } from '../utils/getRsuiteDataItemsFromOptions'
import { getRsuiteDataItemValueFromOptionValue } from '../utils/getRsuiteDataItemValueFromOptionValue'
import { normalizeString } from '../utils/normalizeString'

import type { Promisable } from 'type-fest'

export type MultiSelectProps<OptionValue extends OptionValueType = string> = Omit<
  TagPickerProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'renderMenuItem' | 'value' | 'valueKey'
> & {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  customSearch?: CustomSearch<Option<OptionValue>> | undefined
  /** Minimum search query length required to trigger custom search filtering. */
  customSearchMinQueryLength?: number | undefined
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
  className,
  customSearch,
  customSearchMinQueryLength = 1,
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
  style,
  value,
  ...originalProps
}: MultiSelectProps<OptionValue>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)
  /** Instance of `CustomSearch` */
  const customSearchRef = useRef(customSearch)

  const controlledClassName = useMemo(() => classnames('Field-MultiSelect', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, originalProps.name])
  const selectedRsuiteDataItemValues = useMemo(
    () => (value ? value.map(valueItem => getRsuiteDataItemValueFromOptionValue(valueItem, optionValueKey)) : []),
    [optionValueKey, value]
  )
  const rsuiteData = useMemo(() => getRsuiteDataItemsFromOptions(options, optionValueKey), [options, optionValueKey])

  // Only used when `customSearch` prop is set
  const [controlledRsuiteData, setControlledRsuiteData] = useState(customSearch ? rsuiteData : undefined)

  const { forceUpdate } = useForceUpdate()

  const handleChange = useCallback(
    (nextOptionRsuiteValues: string[] | null) => {
      if (!onChange) {
        return
      }

      const nextValue = nextOptionRsuiteValues
        ? getSelectedOptionValuesFromSelectedRsuiteDataItemValues(rsuiteData, nextOptionRsuiteValues)
        : []
      const normalizedNextValue = nextValue.length > 0 ? nextValue : undefined

      onChange(normalizedNextValue)
    },
    [onChange, rsuiteData]
  )

  const handleSearch = useCallback(
    (nextQuery: string) => {
      if (!customSearchRef.current || nextQuery.trim().length < customSearchMinQueryLength) {
        setControlledRsuiteData(rsuiteData)

        return
      }

      const nextControlledRsuiteData =
        nextQuery.trim().length >= customSearchMinQueryLength
          ? getRsuiteDataItemsFromOptions(customSearchRef.current.find(nextQuery), optionValueKey)
          : rsuiteData

      setControlledRsuiteData(nextControlledRsuiteData)
    },
    [customSearchMinQueryLength, optionValueKey, rsuiteData]
  )

  const renderMenuItem = useCallback((node: ReactNode) => <span title={String(node)}>{String(node)}</span>, [])

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field className={controlledClassName} style={style}>
      <Label disabled={disabled} hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <Box ref={boxRef} $hasError={hasError} $isLight={isLight}>
        {boxRef.current && (
          <TagPicker
            key={key}
            container={boxRef.current}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // when we don't, we don't need to control that and just pass the non-internally-controlled `rsuiteData`
            data={controlledRsuiteData ?? rsuiteData}
            disabled={disabled}
            id={originalProps.name}
            onChange={handleChange}
            onSearch={handleSearch}
            renderMenuItem={renderMenuItem}
            searchable={!!customSearch || searchable}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // that's why we send this "always true" filter to disable Rsuite TagPicker internal search filtering
            searchBy={(customSearch ? () => true : undefined) as any}
            value={selectedRsuiteDataItemValues}
            {...originalProps}
          />
        )}
      </Box>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const Box = styled(StyledRsuitePickerBox)`
  /* StyledRsuitePickerBox Overrides */
  > .rs-picker-toggle-wrapper {
    > .rs-picker-toggle {
      padding: 4px 40px 0 8px !important;

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-caret-icon {
            cursor: pointer;
            top: 4.5px;
          }

          > .rs-picker-clean {
            top: 3.5px;
          }
        }
      }
    }
  }

  /* Custom Styles */
  > .rs-picker-toggle-wrapper {
    border: 0 !important;

    > [role='combobox'] {
      height: 100%;
      min-height: 30px;

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-toggle-textbox {
            background-color: transparent;
          }
        }
      }
    }

    &:hover {
      > [role='combobox']:not(.rs-picker-toggle-active) {
        border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueYonder)} !important;
      }
    }

    > .rs-picker-textbox {
      cursor: text;
      min-height: 30px;
      padding: 0 !important;

      /* Selected tags */
      > [role='listbox'] {
        > [role='option'] {
          background-color: ${p => (p.$isLight ? p.theme.color.gainsboro : p.theme.color.white)};
          font-size: 11px;
          line-height: 1.3636; // = 15px
          margin: 6px 0 0 6px;

          > .rs-tag-icon-close {
            bottom: 1px;
            padding: 3px 6px;

            > svg {
              height: 10px;
              width: 10px;
            }
          }
        }
      }

      /* Combobox search input (within) */
      > .rs-picker-search {
        > .rs-picker-search-input {
          margin: 3px 0 0;
          padding: 0 8px 5px 9px !important;

          > input {
            font-size: 13px;
            line-height: 1;
          }
        }
      }
    }
  }
`
