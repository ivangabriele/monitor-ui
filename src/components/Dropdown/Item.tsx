import { useMemo } from 'react'
import { Dropdown as RsuiteDropdown } from 'rsuite'
import styled from 'styled-components'

import type { IconProps } from '../../types'
import type { FunctionComponent } from 'react'
import type { DropdownMenuItemProps as RsuiteDropdownMenuItemProps } from 'rsuite'

export type DropdownItemProps = Omit<RsuiteDropdownMenuItemProps, 'as' | 'icon'> & {
  Icon?: FunctionComponent<IconProps>
}
export function Item({ Icon, ...originalProps }: DropdownItemProps) {
  const icon = useMemo(() => (Icon ? <Icon size={20} /> : undefined), [Icon])
  const hasIcon = useMemo(() => Boolean(Icon), [Icon])

  return <StyledDropdownItem $hasIcon={hasIcon} icon={icon} {...originalProps} />
}

// TODO We need to split that into multiple styled components as done in `<Button />`.
const StyledDropdownItem = styled(RsuiteDropdown.Item)<{
  $hasIcon: boolean
}>`
  align-items: center;
  display: flex;
  font-size: 13px;
  line-height: 1;
  padding: 12px;
  padding: ${p => (p.$hasIcon ? '7px' : '11px')} 12px ${p => (p.$hasIcon ? '9px' : '14px')};

  &:not(:last-child) {
    border-bottom: 1px solid var(--lightGray);
  }

  /* SVG Icon Components are wrapped within a <div /> */
  > div {
    margin-top: 1px;
  }
`
