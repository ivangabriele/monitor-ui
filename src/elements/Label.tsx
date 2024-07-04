import classnames from 'classnames'
import styled from 'styled-components'

import type { LabelHTMLAttributes } from 'react'

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  $isHidden?: boolean | undefined
  $isRequired?: boolean | undefined
  disabled?: boolean | undefined
  hasError?: boolean | undefined
}
export const Label = styled.label.attrs<LabelProps, LabelProps>(props => ({
  className: classnames('Element-Label', props.className)
}))`
  color: ${p =>
    // eslint-disable-next-line no-nested-ternary
    p.disabled ? p.theme.color.lightGray : p.hasError ? p.theme.color.maximumRed : p.theme.color.slateGray};
  font-size: 13px;
  line-height: 1.3846;
  margin-bottom: 4px;
  ${p =>
    p.$isRequired &&
    `
    :after {
        content:" *";
        color: ${p.theme.color.maximumRed};
      }`}
  ${p =>
    p.$isHidden &&
    `
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
    `}
`
