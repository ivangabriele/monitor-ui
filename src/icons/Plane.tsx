import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Plane({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" id="Plane" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M18.5,13.6V11.8L11.342,7.3V2.35a1.342,1.342,0,1,0-2.684,0V7.3L1.5,11.8v1.8l7.158-2.25V16.3l-1.79,1.35V19L10,18.1l3.132.9V17.65l-1.79-1.35V11.35Z"
          data-name="Tracé 1465"
          fill="#707785"
          id="Tracé_1465"
        />
        <rect data-name="Rectangle 6301" fill="none" height="20" id="Rectangle_6301" width="20" />
      </svg>
    </IconBox>
  )
}
