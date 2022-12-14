import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Fishery({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(80 -41)">
          <g>
            <circle cx="1.5" cy="1.5" fill="currentColor" r="1.5" transform="translate(-67 49.5)" />
          </g>
          <path
            d="M-70.092,59a1.713,1.713,0,0,1-.533-.07c-.865-.292-.854-1.258-.846-1.964,0-.141,0-.344,0-.494a18.923,18.923,0,0,1-3.218-2.157l-2.7,2.621a1.682,1.682,0,0,1-2.146-.378,2.072,2.072,0,0,1-.34-2.007l1.225-3.545-1.228-3.555a2.06,2.06,0,0,1,.338-1.99,1.68,1.68,0,0,1,2.152-.384l.174.134L-74.69,47.7a19,19,0,0,1,3.214-2.171c.008-.149.006-.352,0-.492-.008-.706-.019-1.673.844-1.965,1.093-.37,4.183.766,5.6,1.454l.091.045c2.717,1.3,4.323,3.052,4.771,5.193A4.455,4.455,0,0,1-60,51h0a4.7,4.7,0,0,1-.184,1.3c-.433,2.078-2.039,3.825-4.757,5.129l-.09.045A14.905,14.905,0,0,1-70.092,59Zm-4.626-6.671a1.261,1.261,0,0,1,.885.359,17.173,17.173,0,0,0,3.482,2.355c.714.425.7,1.231.7,1.941,0,.064,0,.141,0,.22a16.9,16.9,0,0,0,3.812-1.322l.1-.048c.815-.392,3.295-1.583,3.792-3.953a3.177,3.177,0,0,0,.131-.88,2.962,2.962,0,0,0-.115-.816c-.513-2.434-2.993-3.625-3.808-4.016l-.1-.049a16.147,16.147,0,0,0-3.814-1.305c0,.073,0,.144,0,.2.007.713.016,1.521-.649,1.914a17.441,17.441,0,0,0-3.559,2.416,1.19,1.19,0,0,1-.8.335,1.264,1.264,0,0,1-.9-.32l-2.616-2.577a.3.3,0,0,0,.018.084l1.429,4.136-1.425,4.126a.34.34,0,0,0-.021.092l2.573-2.537A1.271,1.271,0,0,1-74.718,52.329Zm-.339-4.316a.543.543,0,0,0-.081.072Z"
            fill="currentColor"
          />
          <rect fill="none" height="20" transform="translate(-80 41)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
