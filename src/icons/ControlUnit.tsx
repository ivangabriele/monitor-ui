import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function ControlUnit({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(80 205)">
          <g>
            <rect fill="currentColor" height="12" transform="translate(-64 -188) rotate(90)" width="2" />
            <path
              d="M-67.694-199l1.333,8h-7.277l1.336-8Zm0-2h-4.6a2,2,0,0,0-1.977,1.675L-76-189h12l-1.721-10.325A2,2,0,0,0-67.7-201Z"
              fill="currentColor"
            />
            <rect fill="currentColor" height="2.25" transform="translate(-70.75 -204.25)" width="1.5" />
            <rect fill="currentColor" height="2.25" transform="translate(-64.061 -203) rotate(45)" width="1.5" />
            <rect fill="currentColor" height="2.25" transform="translate(-77 -201.939) rotate(-45)" width="1.5" />
          </g>
          <rect fill="none" height="20" transform="translate(-80 -205)" width="20" />
          <path d="M-80-205h20v20H-80Z" fill="none" />
        </g>
      </svg>
    </IconBox>
  )
}
