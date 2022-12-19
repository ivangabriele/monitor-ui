import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Vms({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M12.5,9A2.5,2.5,0,1,0,9,11.289V19h2V11.289A2.5,2.5,0,0,0,12.5,9Z" fill="currentColor" />
        <g>
          <path
            d="M12.558,12.049l1.3,1.546a5.994,5.994,0,0,0,0-9.19l-1.3,1.546a3.944,3.944,0,0,1,0,6.1Z"
            fill="currentColor"
            opacity="0.98"
          />
          <path
            d="M6.144,13.594l1.3-1.545a3.946,3.946,0,0,1,0-6.095l-1.3-1.543a5.993,5.993,0,0,0,.005,9.183Z"
            fill="currentColor"
            opacity="0.98"
          />
        </g>
        <g>
          <path
            d="M4.206,15.9,5.494,14.37A6.983,6.983,0,0,1,5.508,3.66L4.218,2.128A8.992,8.992,0,0,0,4.206,15.9Z"
            fill="currentColor"
            opacity="0.98"
          />
          <path
            d="M17,9.021a6.985,6.985,0,0,1-2.494,5.349L15.793,15.9A8.99,8.99,0,0,0,15.772,2.12L14.485,3.654A6.983,6.983,0,0,1,17,9.021Z"
            fill="currentColor"
            opacity="0.98"
          />
        </g>
        <path d="M0,0H20V20H0Z" fill="none" />
      </svg>
    </IconBox>
  )
}
