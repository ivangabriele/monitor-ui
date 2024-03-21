import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Car({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-200 -164)">
          <path
            d="M205.238,174.247h-.006a1.515,1.515,0,0,0-1.515,1.516,1.4,1.4,0,0,0,.445,1.056v0a1.5,1.5,0,0,0,1.069.423h.039a1.455,1.455,0,0,0,1.44-1.472,1.5,1.5,0,0,0-.428-1.075A1.405,1.405,0,0,0,205.238,174.247Z"
            fill="currentColor"
          />
          <path
            d="M214.789,174.247a1.409,1.409,0,0,0-1.057.446,1.5,1.5,0,0,0-.421,1.07,1.424,1.424,0,0,0,.432,1.056v0a1.438,1.438,0,0,0,1.039.429,1.5,1.5,0,0,0,1.075-.427,1.407,1.407,0,0,0,.446-1.045,1.478,1.478,0,0,0-.442-1.08A1.46,1.46,0,0,0,214.789,174.247Z"
            fill="currentColor"
          />
          <path
            d="M219,179.862v-6.721l-2.1-6.307a1.222,1.222,0,0,0-.46-.611A1.265,1.265,0,0,0,215.7,166H204.295a1.262,1.262,0,0,0-.736.223,1.23,1.23,0,0,0-.461.614l-2.1,6.3v6.721h0V182h2.261v-2.061h13.477V182H219v-2.138Zm-14.342-12.1h10.685l1.25,3.782H203.406Zm-1.873,10.4v-4.859h14.429v4.859Z"
            fill="currentColor"
          />
        </g>
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
