import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SelectPicker } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useClickOutsideEffect } from '../hooks/useClickOutsideEffect'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { useKey } from '../hooks/useKey'
import { normalizeString } from '../utils/normalizeString'

import type { Option } from '../types'
import type { MouseEvent, ReactNode } from 'react'
import type { SelectPickerProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type SelectProps<OptionValue = string> = Omit<
  SelectPickerProps<any>,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'open' | 'renderMenuItem' | 'value'
> & {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  defaultValue?: OptionValue | undefined
  error?: string | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue | undefined) => Promisable<void>) | undefined
  options: Option<OptionValue>[]
}
export function Select<OptionValue = string>({
  baseContainer,
  defaultValue,
  error,
  isLabelHidden = false,
  isLight = false,
  label,
  onChange,
  options,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  searchable = false,
  ...originalProps
}: SelectProps<OptionValue>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)

  const [isOpen, setIsOpen] = useState(false)

  const { forceUpdate } = useForceUpdate()

  const controlledDefaultValue = useMemo(
    () => (!originalProps.disabled ? defaultValue : undefined),
    [defaultValue, originalProps.disabled]
  )
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([controlledDefaultValue, originalProps.disabled, originalProps.name])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleChange = useCallback(
    (nextValue: OptionValue | null) => {
      close()

      if (onChange) {
        const normalizedNextValue = nextValue ?? undefined

        onChange(normalizedNextValue)
      }
    },
    [close, onChange]
  )

  const renderMenuItem = useCallback((_label: ReactNode): ReactNode => <span title={String(_label)}>{_label}</span>, [])

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
        targetElement.classList.contains('rs-picker-toggle-value') ||
        targetElement.classList.contains('rs-stack-item') ||
        targetElement.classList.contains('rs-picker-toggle-caret') ||
        targetElement.classList.contains('rs-picker-toggle-placeholder')
      ) {
        setIsOpen(!isOpen)
      }
    },
    [isOpen]
  )

  useFieldUndefineEffect(originalProps.disabled, onChange)

  useClickOutsideEffect(boxRef, close, baseContainer)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field>
      <Label
        disabled={originalProps.disabled}
        hasError={hasError}
        htmlFor={originalProps.name}
        isHidden={isLabelHidden}
      >
        {label}
      </Label>

      <Box ref={boxRef} onClick={toggle}>
        {boxRef.current && (
          <StyledSelectPicker
            key={key}
            $isLight={isLight}
            container={boxRef.current}
            data={options}
            defaultValue={controlledDefaultValue}
            id={originalProps.name}
            // The `unknown` type from Rsuite library is wrong. It should be inferred from `data` prop type.
            // `onChange: ((value: unknown, event: React.SyntheticEvent<Element, Event>) => void) | undefined`
            onChange={handleChange as any}
            open={isOpen}
            renderMenuItem={renderMenuItem}
            searchable={searchable}
            {...originalProps}
          />
        )}
      </Box>

      {hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledSelectPicker = styled(SelectPicker)<{
  $isLight: boolean
}>`
  > .rs-picker-toggle {
    background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
    border: 0;
  }
`

const Box = styled.div`
  position: relative;
  width: 100%;

  > .rs-picker-select {
    width: 100%;

    > .rs-picker-toggle {
      border: solid 1px ${p => p.theme.color.gainsboro} !important;
      font-size: 13px;
      line-height: 1.3846;
      padding: 4px 40px 6px 8px;

      :hover {
        border: solid 1px ${p => p.theme.color.blueYonder[100]} !important;
      }

      :active,
      :focus {
        border: solid 1px ${p => p.theme.color.blueGray[100]} !important;
      }

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-toggle-placeholder {
            font-size: 13px;
            line-height: 1.3846;
          }

          > .rs-picker-toggle-clean.rs-btn-close {
            top: 4px !important;
          }

          > svg {
            height: 18px;
            margin-top: -2px;
          }
        }
      }
    }
  }

  > .rs-picker-menu {
    max-width: 100%;

    > .rs-picker-search-bar {
      > .rs-picker-search-bar-input {
        background-color: ${p => p.theme.color.white};
        border: solid 1px ${p => p.theme.color.lightGray};
        border-radius: 0;
        font-size: 13px;
        padding: 4px 8px 6px 8px;
      }

      > svg {
        color: ${p => p.theme.color.lightGray};
        top: 11px;
      }
    }

    > .rs-picker-select-menu {
      > div[role='option'] {
        > .rs-picker-select-menu-item {
          font-size: 13px;
          line-height: 1.3846;
          overflow: hidden;
          padding: 6px 12px 10px 12px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
`
