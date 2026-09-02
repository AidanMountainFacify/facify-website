const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function EmailIcon({ size = 24, strokeWidth = 1, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 15.99" {...props}>
      <rect {...base} strokeWidth={strokeWidth} x="0.5" y="0.5" width="19" height="14.99" rx="1.25" ry="1.25" />
      <polyline {...base} strokeWidth={strokeWidth} points="0.87 1.63 10 8.93 19.13 1.63" />
    </svg>
  )
}

export function CardsIcon({ size = 24, strokeWidth = 1, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24.59 23.53" {...props}>
      <polyline
        {...base}
        strokeWidth={strokeWidth}
        points="13.33 4.76 16.4 .5 24.09 9.37 11.26 3.82 .5 18.83 13.97 23.03 24.01 9.48"
      />
    </svg>
  )
}

export function PromoItemsIcon({ size = 24, strokeWidth = 1, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20.81 23.19" {...props}>
      <rect {...base} strokeWidth={strokeWidth} x="0.5" y="5.65" width="19.81" height="4.72" />
      <rect {...base} strokeWidth={strokeWidth} x="1.79" y="10.41" width="17.16" height="12.28" />
      <line {...base} strokeWidth={strokeWidth} x1="10.33" y1="5.62" x2="10.33" y2="22.69" />
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M10.36,5.62s3.04-.04,4.48-.82c1.87-1.01,1.75-2.53,1.4-3.24s-1.44-1.29-2.53-.97c-2.99,.85-3.35,5.03-3.35,5.03Z"
      />
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M10.38,5.62s-3.04-.04-4.48-.82c-1.87-1.01-1.75-2.53-1.4-3.24s1.44-1.29,2.53-.97c2.99,.85,3.35,5.03,3.35,5.03Z"
      />
    </svg>
  )
}

export function LiteratureIcon({ size = 24, strokeWidth = 1, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20.41 23.2" {...props}>
      <polyline
        {...base}
        strokeWidth={strokeWidth}
        points="10.28 22.7 19.91 18.61 19.91 3.04 10.23 7.18 17.06 .5 17.11 4.14"
      />
      <polyline
        {...base}
        strokeWidth={strokeWidth}
        points="10.13 22.7 .5 18.61 .5 3.04 10.18 7.18 3.34 .5 3.29 4.14"
      />
      <line {...base} strokeWidth={strokeWidth} x1="10.18" y1="6.91" x2="10.18" y2="22.65" />
    </svg>
  )
}

export function FoodBeverageIcon({ size = 24, strokeWidth = 1, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18.1 21.2" {...props}>
      <line {...base} strokeWidth={strokeWidth} x1="14.1" y1="18.9" x2="1" y2="18.9" />
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M7.6,8.3h-6c0,0-0.6,3.6,1,6.3c1.4,2.3,3.1,2.7,5,2.7s3.6-0.4,5-2.7c1.6-2.7,1-6.3,1-6.3H7.6z"
      />
      <path
        {...base}
        strokeWidth={strokeWidth}
        d="M13.4,8.3H17l0,2.4c0,0.8-0.2,1.4-1.1,2c-1.1,0.7-2.5,0.4-2.5,0.4"
      />
      <path {...base} strokeWidth={strokeWidth} d="M5.1,6.5c0,0,0.7-0.5,0.7-1.3S4.7,4,4.7,3s0.6-1.3,0.6-1.3" />
      <path {...base} strokeWidth={strokeWidth} d="M9.9,6.5c0,0,0.7-0.5,0.7-1.3S9.5,4,9.5,3s0.6-1.3,0.6-1.3" />
      <path {...base} strokeWidth={strokeWidth} d="M7.5,6.5c0,0,0.7-0.5,0.7-1.3S7.1,4,7.1,3s0.6-1.3,0.6-1.3" />
    </svg>
  )
}
