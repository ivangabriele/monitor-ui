import { useState } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { MultiZoneEditor } from '../../src'

import type { MultiZoneEditorProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: MultiZoneEditorProps = {
  addButtonLabel: 'Add a zone',
  defaultValue: undefined,
  disabled: false,
  error: '',
  initialZone: {
    name: 'Polygone dessiné'
  },
  isLabelHidden: false,
  isLight: false,
  label: 'Some zones',
  labelPropName: 'name'
}

const meta: Meta<MultiZoneEditorProps> = {
  title: 'Fields/MultiZoneEditor',
  component: MultiZoneEditor,

  argTypes: {
    defaultValue: {
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

export function _MultiZoneEditor(props: MultiZoneEditorProps) {
  const [outputValue, setOutputValue] = useState<Record<string, any>[] | undefined | '∅'>('∅')

  return (
    <>
      <MultiZoneEditor {...props} onAdd={setOutputValue} onChange={setOutputValue} onDelete={setOutputValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}
