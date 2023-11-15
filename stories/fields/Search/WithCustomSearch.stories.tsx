import { useRef, useState } from 'react'

import { Output } from '../../../.storybook/components/Output'
import { generateStoryDecorator } from '../../../.storybook/components/StoryDecorator'
import SPECIES from '../../../.storybook/data/species.json'
import { CustomSearch, Search, type SearchProps } from '../../../src'

type Specy = {
  code: string
  name: string
}

const args: SearchProps = {
  error: '',
  isLabelHidden: false,
  isLight: false,
  label: 'An autocompletable select',
  name: 'autoComplete',
  placeholder: 'Type what you want'
}

export default {
  title: 'Fields/Search',
  component: Search,

  argTypes: {},

  args,

  decorators: [
    generateStoryDecorator({
      hasDarkMode: true
    })
  ]
}

export function WithCustomSearch(props: SearchProps) {
  const [outputValue, setOutputValue] = useState<any | undefined | '∅'>('∅')

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
      { isStrict: false, shouldIgnoreLocation: true }
    )
  )

  return (
    <>
      <Search
        {...props}
        customSearch={customSearchRef.current}
        onChange={setOutputValue}
        options={optionsRef.current}
        optionValueKey="code"
      />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>
  )
}