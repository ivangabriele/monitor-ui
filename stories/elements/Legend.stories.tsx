import { generateStoryDecorator } from '../../.storybook/components/StoryDecorator'
import { Legend } from '../../src'

import type { LegendProps } from '../../src'
import type { Meta } from '@storybook/react'

const args: LegendProps = {
  children: 'A form fieldset legend',
  disabled: false,
  isHidden: false
}

/* eslint-disable sort-keys-fix/sort-keys-fix */
const meta: Meta<LegendProps> = {
  title: 'Elements/Legend',
  component: Legend,

  argTypes: {},

  args,

  decorators: [generateStoryDecorator()]
}
/* eslint-enable sort-keys-fix/sort-keys-fix */

export default meta

export function _Legend(props: LegendProps) {
  return <Legend {...props} />
}
