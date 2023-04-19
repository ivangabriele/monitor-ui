// eslint-disable-next-line import/no-extraneous-dependencies
import { DatePicker, DateRangePicker } from '@mtes-mct/monitor-ui'
import { useState } from 'react'

function App() {
  const [datePickerOutut, setDatePickerOutput] = useState<Date | undefined>()
  const [dateRangePickerOutut, setDateRangePickerOutput] = useState<[Date, Date] | undefined>()

  return (
    <>
      <h2>DatePicker</h2>
      <DatePicker
        data-cy="fields-datepicker"
        defaultValue={undefined}
        label="A date"
        onChange={setDatePickerOutput}
        withTime
      />
      <pre data-cy="fields-datepicker-output">{JSON.stringify(datePickerOutut)}</pre>

      <h2>DateRangePicker</h2>
      <DateRangePicker
        data-cy="fields-daterangepicker"
        defaultValue={undefined}
        label="A date range"
        onChange={setDateRangePickerOutput}
        withTime
      />
      <pre data-cy="fields-daterangepicker-output">{JSON.stringify(dateRangePickerOutut)}</pre>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
