/**
 * The time and date text input values are used as tuples (i.e.: `["2021", "12", "31"]`, `["23", "59"]`)
 * in order to avoid over-converting datetimes between UTC and local time zones.
 *
 * Once we receive a new tuple (because the user entered/picked a new value has been changed), we treat it as a UTC one,
 * whether it's a date or a time.
 *
 * In short, ALL INTERNAL DATETIME-RELATED VALUES ARE ALWAYS TREATED AS WE WERE RUNNING IN A UTC TIME ZONE.
 *
 * The only exception is the `<CalendarPicker />` which returns a local date which must be "utcized",
 * meaning that it must be treated as if the date was picked in a UTC timezone
 * despite the local time zone marker (i.e.: `+01:00`) as well as the DST (Daylight Saving Time).
 *
 * In this case, if the user picked December 31st, 2021 on the calendar,
 * it MUST BE interpreted as `2021-12-31T00:00:00.000Z` and NOT `2021-12-31T00:00:00.000±HH:MM`.
 */

import classnames from 'classnames'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'

import { CalendarPicker } from './CalendarPicker'
import { FieldError } from '../../elements/FieldError'
import { Fieldset } from '../../elements/Fieldset'
import { useClickOutsideEffect } from '../../hooks/useClickOutsideEffect'
import { useFieldUndefineEffect } from '../../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../../hooks/useForceUpdate'
import { usePrevious } from '../../hooks/usePrevious'
import { customDayjs } from '../../utils/customDayjs'
import { normalizeString } from '../../utils/normalizeString'
import { DateInput } from '../DateRangePicker/DateInput'
import { TimeInput } from '../DateRangePicker/TimeInput'
import { FocusControlProvider } from '../DateRangePicker/useFocusControl'
import {
  getDayjsFromUtcDateAndTimeTuple,
  getUtcDateFromDateAndTimeTuple,
  getUtcDateTupleFromDayjs,
  getUtcTimeTupleFromDayjs
} from '../DateRangePicker/utils'

import type { DateInputRef, DateTuple, TimeInputRef, TimeTuple } from '../DateRangePicker/types'
import type { HTMLAttributes } from 'react'
import type { Promisable } from 'type-fest'

/**
 * @description
 * This type should not be exposed in the distributed library. It's only exported to be reused in <FormikDatePicker />.
 *
 * @private
 */
export interface DatePickerProps
  extends Omit<HTMLAttributes<HTMLFieldSetElement>, 'defaultValue' | 'onChange' | 'placeholder'> {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  defaultValue?: Date | string | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isCompact?: boolean | undefined
  /** Set the default time to the end (instead of start) of the day when picking/entering a date. */
  isEndDate?: boolean | undefined
  isErrorMessageHidden?: boolean | undefined
  /** Only allow past dates until today. */
  isHistorical?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isStringDate?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  /**
   * Range of minutes used to generate the time picker list.
   *
   * @example
   * `15` would produce a list with `..., 10:45, 11:00, 11:15, ...`.
   */
  minutesRange?: number | undefined
  /**
   * Called each time the date range picker is changed to a new valid value.
   *
   * @param nextUtcDateRange - A utcized date to be used as is to interact with the API.
   */
  onChange?:
    | ((nextUtcDate: Date | undefined) => Promisable<void>)
    | ((nextUtcDate: string | undefined) => Promisable<void>)
    | undefined
  withTime?: boolean | undefined
}
export interface DatePickerWithDateDateProps extends DatePickerProps {
  isStringDate?: false | undefined
  onChange?: (nextUtcDate: Date | undefined) => Promisable<void> | undefined
}
export interface DatePickerWithStringDateProps extends DatePickerProps {
  isStringDate: true
  onChange?: (nextUtcDate: string | undefined) => Promisable<void> | undefined
}

// TODO We should make this component both form- & a11y-compliant with a `name` and proper (aria-)labels.
export function DatePicker(props: DatePickerWithDateDateProps): JSX.Element
export function DatePicker(props: DatePickerWithStringDateProps): JSX.Element
export function DatePicker({
  baseContainer,
  className,
  defaultValue,
  disabled = false,
  error,
  isCompact = false,
  isEndDate = false,
  isErrorMessageHidden = false,
  isHistorical = false,
  isLabelHidden = false,
  isLight = false,
  isStringDate = false,
  isUndefinedWhenDisabled = false,
  label,
  minutesRange = 15,
  onChange,
  style,
  withTime = false,
  ...nativeProps
}: DatePickerProps) {
  /* eslint-disable no-null/no-null */
  const boxRef = useRef<HTMLDivElement>(null)
  const dateInputRef = useRef<DateInputRef>(null)
  const timeInputRef = useRef<TimeInputRef>(null)
  /* eslint-enable no-null/no-null */

  const isCalendarPickerOpenRef = useRef(false)

  const hasMountedRef = useRef(false)
  const selectedUtcDateAsDayjsRef = useRef(defaultValue ? customDayjs(defaultValue) : undefined)
  const selectedUtcDateTupleRef = useRef(getUtcDateTupleFromDayjs(selectedUtcDateAsDayjsRef.current))
  const selectedUtcTimeTupleRef = useRef(getUtcTimeTupleFromDayjs(selectedUtcDateAsDayjsRef.current))

  const previousDefaultValue = usePrevious(defaultValue)

  const { forceUpdate } = useForceUpdate()

  const controlledClassName = useMemo(() => classnames('Field-DatePicker', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const defaultTimeTuple: TimeTuple = useMemo(() => (isEndDate ? ['23', '59'] : ['00', '00']), [isEndDate])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])

  const calendarPickerDefaultValue = useMemo(
    () =>
      selectedUtcDateTupleRef.current
        ? getUtcDateFromDateAndTimeTuple(selectedUtcDateTupleRef.current, defaultTimeTuple)
        : undefined,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedUtcDateTupleRef.current]
  )

  const submit = useCallback(() => {
    if (!onChange || !selectedUtcDateAsDayjsRef.current) {
      return
    }

    const nextDateAsDayjs = selectedUtcDateAsDayjsRef.current

    if (isStringDate) {
      ;(onChange as (nextUtcDate: string) => Promisable<void>)(nextDateAsDayjs.toISOString())
    } else {
      ;(onChange as (nextUtcDate: Date) => Promisable<void>)(nextDateAsDayjs.toDate())
    }
  }, [isStringDate, onChange])

  const closeCalendarPicker = useCallback(() => {
    isCalendarPickerOpenRef.current = false

    forceUpdate()
  }, [forceUpdate])

  const handleDateInputChange = useCallback(
    (nextUtcDateTuple: DateTuple) => {
      selectedUtcDateTupleRef.current = nextUtcDateTuple

      // If there is no time input or a time has already been selected,
      if (!withTime || selectedUtcTimeTupleRef.current) {
        // we must update the selected date and call onChange()
        const timeTuple =
          withTime && selectedUtcTimeTupleRef.current ? selectedUtcTimeTupleRef.current : defaultTimeTuple

        selectedUtcDateAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(nextUtcDateTuple, timeTuple, isEndDate)

        submit()
      }
    },
    [defaultTimeTuple, isEndDate, submit, withTime]
  )

  const handleCalendarPickerChange = useCallback(
    (nextUtcizedDateTuple: DateTuple) => {
      // If there is no time input,
      if (!withTime) {
        selectedUtcDateAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(
          nextUtcizedDateTuple,
          // we set the time to the start (or end) of the day
          defaultTimeTuple,
          isEndDate
        )
      }

      // If there is a time input and a time has been selected,
      else if (selectedUtcTimeTupleRef.current) {
        selectedUtcDateAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(
          nextUtcizedDateTuple,
          // we include the selected time if it exists, or set it to the start (or end) of the day if it doesn't
          selectedUtcTimeTupleRef.current,
          isEndDate
        )
      }

      selectedUtcDateTupleRef.current = nextUtcizedDateTuple
      selectedUtcTimeTupleRef.current = getUtcTimeTupleFromDayjs(selectedUtcDateAsDayjsRef.current)

      closeCalendarPicker()
      forceUpdate()

      submit()
    },
    [closeCalendarPicker, defaultTimeTuple, forceUpdate, isEndDate, submit, withTime]
  )

  const handleDisable = useCallback(() => {
    selectedUtcDateTupleRef.current = undefined
    selectedUtcTimeTupleRef.current = undefined

    forceUpdate()
  }, [forceUpdate])

  /**
   * @description
   * This function is used to detect a user clearing all the date/time-related inputs
   * in order to call `onChange(undefined)` when everything is cleared
   */
  const handleDateOrTimeInputInput = useCallback(() => {
    if (!dateInputRef.current || !onChange) {
      return
    }

    const [year, month, day] = dateInputRef.current.getValueAsPartialDateTuple()

    if (!withTime && !year && !month && !day) {
      onChange(undefined)

      return
    }

    if (!timeInputRef.current) {
      return
    }

    const [hour, minute] = timeInputRef.current.getValueAsPartialTimeTuple()
    if (!year && !month && !day && !hour && !minute) {
      onChange(undefined)
    }
  }, [onChange, withTime])

  const handleTimeInputFilled = useCallback(
    (nextTimeTuple: TimeTuple) => {
      // If a date has already been selected
      if (selectedUtcDateTupleRef.current) {
        // we must update the selected date accordingly and submit it
        const nextDateAsDayjs = getDayjsFromUtcDateAndTimeTuple(selectedUtcDateTupleRef.current, nextTimeTuple)

        selectedUtcDateAsDayjsRef.current = nextDateAsDayjs

        submit()
      }

      selectedUtcTimeTupleRef.current = nextTimeTuple

      submit()
    },
    [submit]
  )

  const openCalendarPicker = useCallback(() => {
    isCalendarPickerOpenRef.current = true

    forceUpdate()
  }, [forceUpdate])

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange, handleDisable)

  useClickOutsideEffect(boxRef, closeCalendarPicker, baseContainer)

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true

      return
    }

    if (
      (defaultValue instanceof Date &&
        previousDefaultValue instanceof Date &&
        defaultValue.toISOString() === previousDefaultValue.toISOString()) ||
      defaultValue === previousDefaultValue
    ) {
      return
    }

    selectedUtcDateAsDayjsRef.current = defaultValue ? customDayjs(defaultValue) : undefined
    selectedUtcDateTupleRef.current = getUtcDateTupleFromDayjs(selectedUtcDateAsDayjsRef.current)
    selectedUtcTimeTupleRef.current = getUtcTimeTupleFromDayjs(selectedUtcDateAsDayjsRef.current)

    forceUpdate()
  }, [defaultValue, forceUpdate, previousDefaultValue])

  return (
    <Fieldset
      className={controlledClassName}
      disabled={disabled}
      hasError={hasError}
      isLegendHidden={isLabelHidden}
      legend={label}
      style={style}
      {...nativeProps}
    >
      <FocusControlProvider>
        <Box ref={boxRef} $hasError={hasError} $isDisabled={disabled}>
          <Field>
            <DateInput
              ref={dateInputRef}
              disabled={disabled}
              isCompact={isCompact}
              isEndDate={isEndDate}
              isForcedFocused={isCalendarPickerOpenRef.current}
              isLight={isLight}
              onChange={handleDateInputChange}
              onClick={openCalendarPicker}
              onInput={handleDateOrTimeInputInput}
              value={selectedUtcDateTupleRef.current}
            />
          </Field>

          {withTime && (
            <Field $isTimeField>
              <TimeInput
                ref={timeInputRef}
                baseContainer={baseContainer || undefined}
                disabled={disabled}
                isCompact={isCompact}
                isLight={isLight}
                minutesRange={minutesRange}
                onChange={handleTimeInputFilled}
                onFocus={closeCalendarPicker}
                onInput={handleDateOrTimeInputInput}
                value={selectedUtcTimeTupleRef.current}
              />
            </Field>
          )}
        </Box>
      </FocusControlProvider>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}

      <CalendarPicker
        isHistorical={isHistorical}
        isOpen={isCalendarPickerOpenRef.current}
        onChange={handleCalendarPickerChange}
        value={calendarPickerDefaultValue}
      />
    </Fieldset>
  )
}

const Box = styled.div<{
  $hasError: boolean
  $isDisabled: boolean
}>`
  * {
    font-weight: 500;
    line-height: 1;
  }

  color: ${p => p.theme.color.gunMetal};
  display: inline-flex;
  font-size: 13px;
  outline: ${p => (p.$hasError ? `1px solid ${p.theme.color.maximumRed}` : 0)};
  position: relative;

  ${p =>
    p.$isDisabled &&
    css`
      * {
        background-color: ${p.theme.color.cultured} !important;
        color: ${p.theme.color.lightGray} !important;
        cursor: not-allowed;
      }
    `}
`

const Field = styled.span<{
  $isTimeField?: boolean
}>`
  font-size: inherit;
  margin-left: ${p => (p.$isTimeField ? '2px' : 0)};
`
