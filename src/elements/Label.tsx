import styled from 'styled-components'

import type { LabelHTMLAttributes } from 'react'

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  hasError?: boolean | undefined
  isDisabled?: boolean | undefined
  isHidden?: boolean | undefined
}
export const Label = styled.label<{
  hasError?: boolean | undefined
  isDisabled?: boolean | undefined
  isHidden?: boolean | undefined
}>`
  color: ${p =>
    // eslint-disable-next-line no-nested-ternary
    p.isDisabled ? p.theme.color.lightGray : p.hasError ? p.theme.color.maximumRed : p.theme.color.slateGray};
  display: ${p => (p.isHidden ? 'none' : 'block')};
  font-size: 13px;
  line-height: 1.3846;
  margin-bottom: 4px;
`
