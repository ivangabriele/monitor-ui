import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function PinFilled({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M10.94,2L9.528,3.412L10.234,4.119L6.7,7.65L3.876,7.65L2.464,9.063L5.982,12.583L1.997,16.583L3.413,18L7.398,14L10.938,17.542L12.351,16.13L12.351,13.3L15.882,9.769L16.588,10.475L18,9.064L10.94,2Z"
          fill="currentColor"
        />
      </svg>
    </IconBox>
  )
}
