import React from 'react';

export type UiIconName =
  | 'actions'
  | 'bars'
  | 'check'
  | 'chevron-down'
  | 'chevron-right'
  | 'close'
  | 'filter'
  | 'grid'
  | 'info'
  | 'maximize'
  | 'minimize'
  | 'minus'
  | 'panel'
  | 'refresh'
  | 'search';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: UiIconName;
}

export function Icon({ name, ...props }: IconProps) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  };

  switch (name) {
    case 'actions':
      return (
        <svg {...common}>
          <circle cx="5" cy="6" r="1.2" />
          <circle cx="5" cy="12" r="1.2" />
          <circle cx="5" cy="18" r="1.2" />
          <circle cx="12" cy="6" r="1.2" />
          <circle cx="12" cy="12" r="1.2" />
          <circle cx="12" cy="18" r="1.2" />
        </svg>
      );
    case 'bars':
      return (
        <svg {...common}>
          <path d="M5 7h14" />
          <path d="M5 12h10" />
          <path d="M5 17h14" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <path d="m5 12 4.2 4.2L19 6.8" />
        </svg>
      );
    case 'chevron-down':
      return (
        <svg {...common}>
          <path d="m7 10 5 5 5-5" />
        </svg>
      );
    case 'chevron-right':
      return (
        <svg {...common}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    case 'close':
      return (
        <svg {...common}>
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        </svg>
      );
    case 'filter':
      return (
        <svg {...common}>
          <path d="M4 6h16" />
          <path d="M7 12h10" />
          <path d="M10 18h4" />
        </svg>
      );
    case 'grid':
      return (
        <svg {...common}>
          <path d="M4 4h7v7H4z" />
          <path d="M13 4h7v7h-7z" />
          <path d="M4 13h7v7H4z" />
          <path d="M13 13h7v7h-7z" />
        </svg>
      );
    case 'info':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5" />
          <path d="M12 8h.01" />
        </svg>
      );
    case 'maximize':
      return (
        <svg {...common}>
          <path d="M8 4H4v4" />
          <path d="M16 4h4v4" />
          <path d="M20 16v4h-4" />
          <path d="M4 16v4h4" />
        </svg>
      );
    case 'minimize':
      return (
        <svg {...common}>
          <path d="M8 4v4H4" />
          <path d="M16 4v4h4" />
          <path d="M20 16h-4v4" />
          <path d="M4 16h4v4" />
        </svg>
      );
    case 'minus':
      return (
        <svg {...common}>
          <path d="M6 12h12" />
        </svg>
      );
    case 'panel':
      return (
        <svg {...common}>
          <path d="M5 5h14v14H5z" />
          <path d="M5 9h14" />
        </svg>
      );
    case 'refresh':
      return (
        <svg {...common}>
          <path d="M20 7v5h-5" />
          <path d="M4 17v-5h5" />
          <path d="M18.4 9A7 7 0 0 0 6.2 6.8L4 12" />
          <path d="M5.6 15A7 7 0 0 0 17.8 17.2L20 12" />
        </svg>
      );
    case 'search':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6" />
          <path d="m16 16 4 4" />
        </svg>
      );
    default:
      return null;
  }
}
