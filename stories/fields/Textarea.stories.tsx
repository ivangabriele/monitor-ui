import { useEffect, useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Textarea } from '../../src'

import type { TextareaProps } from '../../src'

const args: TextareaProps = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A textarea',
  name: 'myTextarea',
  placeholder: 'A textarea placeholder',
  rows: 2,
  value: undefined
}

export default {
  title: 'Fields/Textarea',
  component: Textarea,

  argTypes: {
    defaultValue: {
      control: 'text'
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

export function _Textarea(props: TextareaProps) {
  const [outputValue, setOutputValue] = useState(props.value)
  useEffect(() => {
    setOutputValue(props.value)
  }, [props.value])

  return (
    <>
      <Textarea {...props} onChange={setOutputValue} value={outputValue} />

      <Output value={outputValue} />
    </>
  )
}
