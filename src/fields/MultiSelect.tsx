import { MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { TagPicker } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useClickOutside } from '../hooks/useClickOutside'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { normalizeString } from '../utils/normalizeString'

import type { Option } from '../types'
import type { TagPickerProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type MultiSelectProps = Omit<
  TagPickerProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'value'
> & {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  defaultValue?: string[] | undefined
  error?: string | undefined
  /** Width in pixels */
  fixedWidth?: number | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: string[] | undefined) => Promisable<void>) | undefined
  options: Option[]
}
export function MultiSelect({
  baseContainer,
  error,
  fixedWidth,
  isLabelHidden = false,
  isLight = false,
  label,
  onChange,
  options,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  searchable = false,
  ...originalProps
}: MultiSelectProps) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)

  const [isOpen, setIsOpen] = useState(true)

  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useMemo(
    () => `${originalProps.name}-${JSON.stringify(originalProps.defaultValue)}`,
    [originalProps.defaultValue, originalProps.name]
  )

  const { forceUpdate } = useForceUpdate()

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleChange = useCallback(
    (nextValue: string[] | null) => {
      if (!onChange) {
        return
      }

      const normalizedNextValue = !nextValue || !nextValue.length ? undefined : nextValue

      onChange(normalizedNextValue)
    },
    [onChange]
  )

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

  useClickOutside(boxRef, close, baseContainer)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field>
      <Label hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <Box ref={boxRef} $isActive={isOpen} $isLight={isLight} onClick={toggle}>
        {boxRef.current && (
          <TagPicker
            key={key}
            container={boxRef.current}
            data={options}
            id={originalProps.name}
            onChange={handleChange}
            onClick={toggle}
            open={isOpen}
            searchable={searchable}
            {...originalProps}
          />
        )}
      </Box>

      {hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const Box = styled.div<{
  $isActive: boolean
  $isLight: boolean
}>`
  position: relative;
  width: 100%;

  > .rs-picker-input {
    border: solid 1px ${p => (p.$isActive ? p.theme.color.blueGray[100] : p.theme.color.gainsboro)} !important;
    cursor: pointer;
    width: 100%;

    :hover {
      border: solid 1px ${p => p.theme.color.blueYonder[100]} !important;
    }

    :active,
    :focus {
      border: solid 1px ${p => p.theme.color.blueGray[100]} !important;
    }

    > .rs-picker-toggle {
      background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
      border: 0;
      cursor: inherit;
      font-size: 13px;
      line-height: 1.3846;
      padding: 5px 40px 5px 8px !important;

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-toggle-placeholder {
            font-size: 13px;
            line-height: 1.3846;
          }

          > svg {
            height: 18px;
            /* margin-top: -2px; */
          }
        }
      }
    }

    > .rs-picker-tag-wrapper {
      .rs-picker-search {
        .rs-picker-search-input {
          padding: 0 8px !important;

          input {
            font-size: 13px;
            line-height: 1.3846;
          }
        }
      }
    }
  }
`
