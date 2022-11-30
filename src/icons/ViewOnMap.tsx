import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function ViewOnMap({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color} size={size}>
      <svg height="20" id="View_on_map" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M18.5,1.523l-6,2.4-5-2-6,2.4V18.477l6-2.4,5,2,6-2.4ZM3.5,5.677l3-1.2v9.846l-3,1.2Zm5,8.646V4.477l3,1.2v9.846Zm8,0-3,1.2V5.677l3-1.2Z"
          data-name="Tracé 1423"
          fill="currentColor"
          id="Tracé_1423"
        />
        <rect
          data-name="Rectangle 6169"
          fill="none"
          height="20"
          id="Rectangle_6169"
          transform="translate(0)"
          width="20"
        />
      </svg>
    </IconBox>
  )
}
