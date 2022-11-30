import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function ShowErsMessages({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color} size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Show_ERS_messages" transform="translate(-40 -41)">
          <g data-name="Groupe 4186" id="Groupe_4186">
            <path
              d="M50,42.667a5,5,0,0,0-5,5,4.926,4.926,0,0,0,.047.647c.013.113.031.225.051.337l.01.047C45.8,52.493,50,56,50,56s4.2-3.507,4.892-7.3l.01-.047c.02-.112.038-.224.051-.337A4.926,4.926,0,0,0,55,47.667,5,5,0,0,0,50,42.667Zm0,7.5a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,50,50.167Z"
              data-name="Tracé 1411"
              fill="currentColor"
              id="Tracé_1411"
            />
            <g data-name="Tracé 1412" fill="#fff" id="Tracé_1412" strokeMiterlimit="10">
              <path
                d="M 50 57.97749710083008 C 49.69147872924805 57.97749710083008 49.38210678100586 57.94551086425781 49.07577133178711 57.88271331787109 C 49.38035202026367 57.93568420410156 49.6889762878418 57.96249771118164 50 57.96249771118164 C 50.3110237121582 57.96249771118164 50.61964797973633 57.93568420410156 50.92422866821289 57.88271331787109 C 50.61789321899414 57.94551086425781 50.30852127075195 57.97749710083008 50 57.97749710083008 Z"
                stroke="none"
              />
              <path
                d="M 46.79999923706055 55.67999649047852 C 48.75200271606445 57.38999557495117 51.24799728393555 57.38999557495117 53.20000076293945 55.67999649047852 C 54.17599868774414 56.52999877929688 55.28799819946289 56.99999618530273 56.40000152587891 56.99999618530273 L 58 56.99999618530273 L 58 58.99999618530273 L 56.40000152587891 58.99999618530273 C 55.29600143432617 58.99999618530273 54.20800018310547 58.65999603271484 53.20000076293945 58.0099983215332 C 51.18400192260742 59.29999923706055 48.81599807739258 59.29999923706055 46.79999923706055 58.0099983215332 C 45.79199981689453 58.64999771118164 44.70399856567383 58.99999618530273 43.59999847412109 58.99999618530273 L 42 58.99999618530273 L 42 56.99999618530273 L 43.59999847412109 56.99999618530273 C 44.71200180053711 56.99999618530273 45.82400131225586 56.52999877929688 46.79999923706055 55.67999649047852 Z"
                fill="currentColor"
                stroke="none"
              />
            </g>
          </g>
          <rect
            data-name="Rectangle 6161"
            fill="none"
            height="20"
            id="Rectangle_6161"
            transform="translate(40 41)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
