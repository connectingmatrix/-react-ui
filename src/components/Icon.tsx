import type { SVGAttributes } from 'react';
import { cn } from '../lib/cn';

export type UiIconName =
  | 'actions'
  | 'alert'
  | 'bars'
  | 'bell'
  | 'card'
  | 'chart'
  | 'check'
  | 'chevron-down'
  | 'chevron-right'
  | 'close'
  | 'coins'
  | 'discord'
  | 'dollar'
  | 'download'
  | 'exclamation'
  | 'eye'
  | 'filter'
  | 'folder'
  | 'grid'
  | 'info'
  | 'live'
  | 'maximize'
  | 'maximize-screen'
  | 'menu'
  | 'minimize'
  | 'minimize-screen'
  | 'minus'
  | 'moon'
  | 'panel'
  | 'panel-restore'
  | 'pause'
  | 'play'
  | 'plus'
  | 'refresh'
  | 'save'
  | 'search'
  | 'settings'
  | 'share'
  | 'sidebar-collapsed'
  | 'sidebar-open'
  | 'sparkle'
  | 'stop'
  | 'store'
  | 'support'
  | 'swap'
  | 'timer'
  | 'trash'
  | 'trenddown'
  | 'trendup'
  | 'user'
  | 'wallet';

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'name'> {
  name: UiIconName | (string & {});
  title?: string;
}

const iconStroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function Svg({ className, title, children, viewBox = '0 0 24 24', ...props }: Omit<IconProps, 'name'>) {
  return (
    <svg viewBox={viewBox} className={cn('h-5 w-5 shrink-0', className)} aria-hidden={title ? undefined : true} role={title ? 'img' : undefined} {...props}>
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function Icon({ name, ...props }: IconProps) {
  switch (name) {
    case 'actions':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M5 7h14M8 12h11M11 17h8" />
        </Svg>
      );
    case 'alert':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M12 4.7 20 18H4z" />
          <path {...iconStroke} d="M12 9v4M12 15.5h.01" />
        </Svg>
      );
    case 'bars':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M6 18V9M12 18V5M18 18v-7" />
        </Svg>
      );
    case 'bell':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M8 18h8M7 16h10l-1-2v-3.5A4 4 0 0 0 12 6a4 4 0 0 0-4 4.5V14Z" />
        </Svg>
      );
    case 'card':
      return (
        <Svg {...props}>
          <rect x="4" y="6.5" width="16" height="11" rx="2.5" {...iconStroke} />
          <path {...iconStroke} d="M4 10h16" />
        </Svg>
      );
    case 'chart':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M6 18V9M12 18V6M18 18v-8M4.5 19.5h15" />
        </Svg>
      );
    case 'check':
      return (
        <Svg {...props}>
          <rect x="4.5" y="4.5" width="15" height="15" rx="3" {...iconStroke} />
          <path {...iconStroke} d="m8.5 12 2.3 2.3 4.7-5.3" />
        </Svg>
      );
    case 'chevron-down':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="m6 9 6 6 6-6" />
        </Svg>
      );
    case 'chevron-right':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="m10 6 6 6-6 6" />
        </Svg>
      );
    case 'close':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="m6 6 12 12M18 6 6 18" />
        </Svg>
      );
    case 'coins':
      return (
        <Svg {...props}>
          <ellipse cx="12" cy="7" rx="5" ry="2.6" {...iconStroke} />
          <path {...iconStroke} d="M7 7v5c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6V7" />
          <path {...iconStroke} d="M7 12v5c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-5" />
        </Svg>
      );
    case 'discord':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M8 8c2.5-1.4 5.5-1.4 8 0" />
          <path {...iconStroke} d="M8 8c-1.2 1.9-1.8 4-2 6 2 .9 4 1.3 6 1.4 2-.1 4-.5 6-1.4-.2-2-1-4.1-2-6" />
          <circle cx="10" cy="12.4" r="1.1" fill="currentColor" />
          <circle cx="14" cy="12.4" r="1.1" fill="currentColor" />
          <path {...iconStroke} d="M10 15c1.2.7 2.8.7 4 0" />
        </Svg>
      );
    case 'dollar':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M12 4v16M15.5 7.5C14.8 6.5 13.5 6 12 6c-2 0-3.5 1-3.5 2.5S9.8 11 12 11s3.5 1 3.5 2.5S14 16 12 16c-1.5 0-2.8-.5-3.7-1.6" />
        </Svg>
      );
    case 'download':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M12 5v10M8 11l4 4 4-4M5 19h14" />
        </Svg>
      );
    case 'exclamation':
      return (
        <Svg {...props}>
          <circle cx="12" cy="12" r="8.1" {...iconStroke} />
          <path {...iconStroke} d="M12 7.8v6.1M12 16.7h.01" />
        </Svg>
      );
    case 'eye':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" />
          <circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </Svg>
      );
    case 'filter':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M5 6h14l-5.5 6.2v5.3l-3-1.6v-3.7Z" />
        </Svg>
      );
    case 'folder':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M3.5 7.5h6l1.5 2h9v7.5a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2Z" />
          <path {...iconStroke} d="M3.5 10.5h17" />
        </Svg>
      );
    case 'grid':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" />
        </Svg>
      );
    case 'info':
      return (
        <Svg {...props}>
          <circle cx="12" cy="12" r="8.4" {...iconStroke} />
          <path {...iconStroke} d="M12 10v5M12 8h.01" />
        </Svg>
      );
    case 'live':
      return (
        <Svg {...props}>
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <path {...iconStroke} d="M6.5 12a5.5 5.5 0 0 1 11 0M4 12a8 8 0 0 1 16 0" />
        </Svg>
      );
    case 'maximize':
    case 'maximize-screen':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M8 4H4v4M16 4h4v4M4 16v4h4M20 16v4h-4" />
        </Svg>
      );
    case 'menu':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M4 7h16M4 12h16M4 17h16" />
        </Svg>
      );
    case 'minimize':
    case 'minimize-screen':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M9 4H4v5M15 4h5v5M4 15v5h5M20 15v5h-5" />
        </Svg>
      );
    case 'minus':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M5 12h14" />
        </Svg>
      );
    case 'moon':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M19 14.5A7.5 7.5 0 1 1 9.5 5a6.3 6.3 0 0 0 9.5 9.5Z" />
        </Svg>
      );
    case 'panel':
    case 'panel-restore':
      return (
        <Svg {...props}>
          <rect x="6" y="6" width="12" height="12" rx="1.8" {...iconStroke} />
        </Svg>
      );
    case 'pause':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M8.5 6.5v11M15.5 6.5v11" />
        </Svg>
      );
    case 'play':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M8 6.5v11l8-5.5-8-5.5Z" />
        </Svg>
      );
    case 'plus':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M12 5v14M5 12h14" />
        </Svg>
      );
    case 'refresh':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M18 8V4l-3 3m3 0a6.5 6.5 0 1 0 1.2 7.5" />
        </Svg>
      );
    case 'save':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M5 5h11l3 3v11H5Z" />
          <path {...iconStroke} d="M8 5v5h8" />
          <path {...iconStroke} d="M9 18h6" />
        </Svg>
      );
    case 'search':
      return (
        <Svg {...props}>
          <circle cx="11" cy="11" r="6" {...iconStroke} />
          <path {...iconStroke} d="m16 16 4 4" />
        </Svg>
      );
    case 'settings':
      return (
        <Svg {...props}>
          <circle cx="12" cy="12" r="2.6" {...iconStroke} />
          <path {...iconStroke} d="M12 4.8v1.8M12 17.4v1.8M19.2 12h-1.8M6.6 12H4.8M17.1 6.9l-1.3 1.3M8.2 15.8l-1.3 1.3M17.1 17.1l-1.3-1.3M8.2 8.2 6.9 6.9" />
        </Svg>
      );
    case 'share':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M8 12a4 4 0 0 1 8 0M7 7l5 5-5 5M17 7l-5 5 5 5" />
        </Svg>
      );
    case 'sidebar-collapsed':
      return (
        <Svg {...props}>
          <rect x="4" y="5" width="16" height="14" rx="2" {...iconStroke} />
          <path {...iconStroke} d="M15 5v14" />
        </Svg>
      );
    case 'sidebar-open':
      return (
        <Svg {...props}>
          <rect x="4" y="5" width="16" height="14" rx="2" {...iconStroke} />
          <path {...iconStroke} d="M9 5v14" />
        </Svg>
      );
    case 'sparkle':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="m12 4 1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8Z" />
        </Svg>
      );
    case 'stop':
      return (
        <Svg {...props}>
          <rect x="7" y="7" width="10" height="10" rx="2" {...iconStroke} />
        </Svg>
      );
    case 'store':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M4 9h16l-1 3a3 3 0 0 1-3 2H8a3 3 0 0 1-3-2Z" />
          <path {...iconStroke} d="M6 14v5h12v-5" />
        </Svg>
      );
    case 'support':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M5 13v-1a7 7 0 0 1 14 0v1" />
          <path {...iconStroke} d="M5 12.5v3a2 2 0 0 0 2 2h2v-5H7a2 2 0 0 0-2 2ZM19 12.5v3a2 2 0 0 1-2 2h-2v-5h2a2 2 0 0 1 2 2Z" />
        </Svg>
      );
    case 'swap':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M7 8h10m0 0-3-3m3 3-3 3M17 16H7m0 0 3-3m-3 3 3 3" />
        </Svg>
      );
    case 'timer':
      return (
        <Svg {...props}>
          <circle cx="12" cy="13" r="6.5" {...iconStroke} />
          <path {...iconStroke} d="M12 9v4l2.5 2.5M9 4h6" />
        </Svg>
      );
    case 'trash':
      return (
        <Svg {...props}>
          <path
            {...iconStroke}
            d="M5.5 7.5h13M9.5 7.5V5.8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.7M8.5 10.5v6M12 10.5v6M15.5 10.5v6M7 7.5l.7 10.2a1.5 1.5 0 0 0 1.5 1.3h5.6a1.5 1.5 0 0 0 1.5-1.3L17 7.5"
          />
        </Svg>
      );
    case 'trenddown':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M5 8l6 6 3-3 5 5M19 16v-5h-5" />
        </Svg>
      );
    case 'trendup':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="m5 16 6-6 3 3 5-5M19 8v5h-5" />
        </Svg>
      );
    case 'user':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M12 12a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z" />
          <path {...iconStroke} d="M6 19c1.5-2.7 4-4 6-4s4.5 1.3 6 4" />
        </Svg>
      );
    case 'wallet':
      return (
        <Svg {...props}>
          <path {...iconStroke} d="M4.5 7h13a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 2 16.5V9.5A2.5 2.5 0 0 1 4.5 7Z" />
          <path {...iconStroke} d="M15 12h4" />
          <circle cx="15.8" cy="12" r="0.7" fill="currentColor" />
        </Svg>
      );
    default:
      return (
        <Svg {...props}>
          <circle cx="12" cy="12" r="7" {...iconStroke} />
        </Svg>
      );
  }
}
