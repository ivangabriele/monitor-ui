import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Pinpoint({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Pinpoint" transform="translate(-160)">
          <path d="M164,8c0,5,6,10,6,10" data-name="Tracé 1358" fill="currentColor" id="Tracé_1358" />
          <path
            d="M170,2a5.961,5.961,0,0,0-5.944,6.777c.016.135.038.27.062.4l.011.055C164.964,13.792,170,18,170,18s5.036-4.208,5.871-8.763l.011-.055c.024-.135.046-.27.062-.4A5.961,5.961,0,0,0,170,2Zm0,9a3,3,0,1,1,3-3A3,3,0,0,1,170,11Z"
            data-name="Tracé 1359"
            fill="currentColor"
            id="Tracé_1359"
          />
          <rect
            data-name="Rectangle 6099"
            fill="none"
            height="20"
            id="Rectangle_6099"
            transform="translate(160)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
