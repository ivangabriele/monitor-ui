import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { MultiRadio, useFieldControl } from '../../src'

import type { MultiRadioProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: MultiRadioProps = {
  disabled: false,
  error: '',
  isErrorMessageHidden: false,
  isInline: false,
  isLabelHidden: false,
  isLight: false,
  label: 'Pick an option',
  name: 'myMultiRadio',
  options: [
    { label: 'First Option', value: 'FIRST_OPTION' },
    { label: 'Second Option', value: 'SECOND_OPTION', isDisabled: true },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ],
  value: undefined
}

const meta: Meta<MultiRadioProps> = {
  title: 'Fields/MultiRadio',
  component: MultiRadio,

  argTypes: {
    value: {
      control: 'inline-radio',
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'A_VERY_VERY_LONG_OPTION']
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}
export default meta

export function _MultiRadio(props: MultiRadioProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <div style={{ marginBottom: '32px' }}>
        <MultiRadio {...props} onChange={controlledOnChange} value={controlledValue} />

        {outputValue !== '∅' && <Output value={outputValue} />}
      </div>
      <MultiRadio
        {...props}
        isReadOnly
        label="Multiradio in readOnly mode"
        onChange={controlledOnChange}
        value="FIRST_OPTION"
      />
    </>
  )
}