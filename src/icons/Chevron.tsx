import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Chevron({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color} size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Chevron" transform="translate(0 -82)">
          <g data-name="Tracé 1380" fill="none" id="Tracé_1380" strokeMiterlimit="10">
            <path
              d="M16.585,87.293,10,93.878,3.415,87.293,2,88.707l6.585,6.585L10,96.707l1.415-1.415L18,88.707Z"
              stroke="none"
            />
            <path
              d="M 3.414670944213867 87.29266357421875 L 10 93.87799072265625 L 16.58533096313477 87.29266357421875 L 18 88.70733642578125 L 10 96.70733642578125 L 2 88.70733642578125 L 3.414670944213867 87.29266357421875 Z"
              fill="currentColor"
              stroke="none"
            />
          </g>
          <rect
            data-name="Rectangle 6134"
            fill="none"
            height="20"
            id="Rectangle_6134"
            transform="translate(0 82)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
