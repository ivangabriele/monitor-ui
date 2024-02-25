import { getSelectedOptionValueFromSelectedRsuiteDataItemValue } from '@utils/getSelectedOptionValueFromSelectedRsuiteDataItemValue'
import classnames from 'classnames'
import { eq } from 'lodash'
import { useCallback, useMemo, type CSSProperties, type ReactNode } from 'react'
import { RadioGroup as RsuiteRadioGroup } from 'rsuite'
import styled, { css } from 'styled-components'

import { Radio } from './Radio'
import { FieldError } from '../elements/FieldError'
import { Fieldset } from '../elements/Fieldset'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { getRsuiteDataItemsFromOptions } from '../utils/getRsuiteDataItemsFromOptions'
import { getRsuiteDataItemValueFromOptionValue } from '../utils/getRsuiteDataItemValueFromOptionValue'
import { normalizeString } from '../utils/normalizeString'

import type { Option, OptionValueType } from '../types/definitions'
import type { Promisable } from 'type-fest'

export type MultiRadioProps<OptionValue extends OptionValueType = string> = {
  className?: string | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isInline?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: (nextValue: OptionValue | undefined) => Promisable<void>
  optionValueKey?: keyof OptionValue
  options: Option<OptionValue>[]
  readOnly?: boolean | undefined
  renderMenuItem?: (label: string, value: OptionValue) => ReactNode
  style?: CSSProperties | undefined
  value?: OptionValue | undefined
}
export function MultiRadio<OptionValue extends OptionValueType = string>({
  className,
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isInline = false,
  isLabelHidden = false,
  isLight = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  name,
  onChange,
  options,
  optionValueKey,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readOnly = false,
  renderMenuItem,
  style,
  value
}: MultiRadioProps<OptionValue>) {
  const controlledClassName = useMemo(() => classnames('Field-MultiRadio', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, name])
  const selectedRsuiteValue = useMemo(
    // eslint-disable-next-line no-null/no-null
    () => (value ? getRsuiteDataItemValueFromOptionValue(value, optionValueKey) : null),
    [value, optionValueKey]
  )
  const rsuiteData = useMemo(() => getRsuiteDataItemsFromOptions(options, optionValueKey), [options, optionValueKey])

  const handleChange = useCallback(
    (nextRsuiteDataItemValue: string | null) => {
      if (!onChange || readOnly) {
        return
      }

      const nextOptionValue = getSelectedOptionValueFromSelectedRsuiteDataItemValue(rsuiteData, nextRsuiteDataItemValue)

      onChange(nextOptionValue)
    },
    [onChange, readOnly, rsuiteData]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled && !readOnly, onChange)

  return (
    <Fieldset
      className={controlledClassName}
      disabled={disabled}
      hasError={hasError}
      isLegendHidden={isLabelHidden}
      legend={label}
      style={style}
    >
      <StyledRsuiteRadioGroup
        key={key}
        $isInline={isInline}
        name={name}
        onChange={handleChange}
        value={selectedRsuiteValue}
      >
        {rsuiteData.map(rsuiteDataItem => (
          <Radio
            key={rsuiteDataItem.value}
            checked={!!value && eq(rsuiteDataItem.value, value)}
            disabled={!!rsuiteDataItem.isDisabled || disabled}
            hasError={hasError}
            isLight={isLight}
            isTransparent={isTransparent}
            name={name}
            readOnly={readOnly}
            value={rsuiteDataItem.value}
          >
            {renderMenuItem ? renderMenuItem(rsuiteDataItem.label, rsuiteDataItem.optionValue) : rsuiteDataItem.label}
          </Radio>
        ))}
      </StyledRsuiteRadioGroup>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Fieldset>
  )
}

const StyledRsuiteRadioGroup = styled(RsuiteRadioGroup)<{
  $isInline: boolean
}>`
  display: flex;
  flex-direction: ${p => (p.$isInline ? 'row' : 'column')};

  ${p =>
    !p.$isInline &&
    css`
      > .Field-Radio:not(:first-child) {
        margin: 8px 0 0 0;
      }
    `}
`
