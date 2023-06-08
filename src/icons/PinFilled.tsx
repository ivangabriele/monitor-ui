import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function PinFilled({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M 10.94 2 L 9.528 3.412 L 10.234 4.119 L 6.7 7.65 L 3.876 7.65 L 2.464 9.063 L 5.982 12.583 L 1.997 16.583 L 3.413 18 L 7.398 14 L 10.938 17.542 L 12.351 16.13 L 12.351 13.3 L 15.882 9.769 L 16.588 10.475 L 18 9.064 L 10.94 2 Z"
          fill="currentColor"
        />
      </svg>
    </IconBox>
  )
}
