import { useState, type FunctionComponent } from 'react'

import { Output } from '../../.storybook/components/Output'
import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Icon as MonitorUiIcon, MultiRadio, useFieldControl } from '../../src'

import type { IconProps, MultiRadioProps, Option } from '../../src'
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
    { isDisabled: true, label: 'Second Option', value: 'SECOND_OPTION' },
    { label: 'Third Option', value: 'THIRD_OPTION' },
    { label: 'A Very Very Long Option', value: 'A_VERY_VERY_LONG_OPTION' }
  ],
  value: undefined
}

type InterestPointOptionValueType = {
  Icon: FunctionComponent<IconProps>
  value: string
}

const OPTIONS_WITH_ICONS: Array<Option<InterestPointOptionValueType>> = [
  {
    label: 'Moyen de contrôle',
    value: {
      Icon: MonitorUiIcon.ControlUnit,
      value: 'CONTROL_ENTITY'
    }
  },
  {
    label: 'Navire de pêche',
    value: {
      Icon: MonitorUiIcon.FleetSegment,
      value: 'FISHING_VESSEL'
    }
  },
  {
    label: 'Autre point',
    value: {
      Icon: MonitorUiIcon.Info,
      value: 'OTHER'
    }
  }
]
const meta: Meta<MultiRadioProps> = {
  args,
  argTypes: {
    value: {
      control: 'inline-radio',
      options: ['FIRST_OPTION', 'SECOND_OPTION', 'THIRD_OPTION', 'A_VERY_VERY_LONG_OPTION']
    }
  },

  component: MultiRadio,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ],

  title: 'Fields/MultiRadio'
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _MultiRadio(props: MultiRadioProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅')

  const { controlledOnChange, controlledValue } = useFieldControl(props.value, setOutputValue)

  const [outputValueWithIcon, setOutputValueWithIcons] = useState<InterestPointOptionValueType | undefined>(
    OPTIONS_WITH_ICONS[2]?.value
  )

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
      <div style={{ marginTop: '32px' }}>
        <MultiRadio
          {...props}
          label="Multiradio with icons"
          onChange={nextOptionValue => setOutputValueWithIcons(nextOptionValue)}
          options={OPTIONS_WITH_ICONS}
          optionValueKey="value"
          renderMenuItem={(label, value) => (
            <>
              <value.Icon />
              {label}
            </>
          )}
          value={outputValueWithIcon}
        />
      </div>
    </>
  )
}
