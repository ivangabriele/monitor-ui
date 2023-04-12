import { useEffect, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { NumberInput } from '../../src'

import type { NumberInputProps } from '../../src'

const args: NumberInputProps = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  name: 'myNumberInput',
  label: 'A number input',
  value: undefined
}

export default {
  title: 'Fields/NumberInput',
  component: NumberInput,

  argTypes: {
    defaultValue: {
      control: 'number'
    },
    isMulti: {
      control: 'boolean'
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function _NumberInput(props: NumberInputProps) {
  const [outputValue, setOutputValue] = useState<number | undefined>(props.value)

  useEffect(() => {
    setOutputValue(props.value)
  }, [props.value])

  return (
    <>
      <NumberInput {...props} onChange={setOutputValue} value={outputValue} />

      <Output value={outputValue} />
    </>
  )
}
