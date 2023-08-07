import { useRef, useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import SPECIES from '../../../.storybook/data/species.json'
import { CustomSearch, Select, useFieldControl, type SelectProps } from '../../../src'

type Specy = {
  code: string
  name: string
}

const args: SelectProps<Specy> = {
  disabled: false,
  error: '',
  isCleanable: true,
  isErrorMessageHidden: false,
  isLabelHidden: false,
  isLight: false,
  label: 'A select',
  name: 'mySelect',
  options: [],
  optionValueKey: 'code',
  placeholder: 'Pick an option',
  value: undefined,
  virtualized: true
}

export default {
  title: 'Fields/Select',
  component: Select,

  argTypes: {
    value: {
      control: 'inline-radio',
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'LOREM_IPSUM']
    }
  },

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function SelectWithCustomSearch(props: SelectProps<Specy>) {
  const optionsRef = useRef(
    (SPECIES as Specy[]).map(specy => ({
      label: `${specy.code} - ${specy.name}`,
      value: specy
    }))
  )
  const customSearchRef = useRef(
    new CustomSearch(
      optionsRef.current,
      [
        {
          name: 'value.code',
          weight: 0.9
        },
        {
          name: 'value.name',
          weight: 0.1
        }
      ],
      { isStrict: true }
    )
  )

  const [outputValue, setOutputValue] = useState<Specy | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  return (
    <>
      <Select
        {...props}
        customSearch={customSearchRef.current}
        onChange={controlledOnChange}
        options={optionsRef.current}
        value={controlledValue}
      />
      <div>
        <em>Loads a pre-shuffled list of {optionsRef.current.length} species in order to check performances.</em>
      </div>

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}