import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 20, children, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      {children}
    </svg>
  );
}

const stroke = { stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const HeartIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      d="M12 20.5s-7.5-4.4-9.3-9.2C1.4 7.8 3.6 4.5 7 4.5c2 0 3.4 1.1 5 3 1.6-1.9 3-3 5-3 3.4 0 5.6 3.3 4.3 6.8-1.8 4.8-9.3 9.2-9.3 9.2z"
    />
  </Svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" {...stroke} />
  </Svg>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M15 6l-6 6 6 6" {...stroke} />
  </Svg>
);

export const ChevronRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 6l6 6-6 6" {...stroke} />
  </Svg>
);

export const SearchIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="6.5" {...stroke} />
    <path d="M20 20l-4-4" {...stroke} />
  </Svg>
);

export const PinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"
    />
  </Svg>
);

export const UsersIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="7" r="3" fill="currentColor" />
    <circle cx="5" cy="9" r="2.3" fill="currentColor" />
    <circle cx="19" cy="9" r="2.3" fill="currentColor" />
    <path fill="currentColor" d="M6.5 20v-3.5A4.5 4.5 0 0111 12h2a4.5 4.5 0 014.5 4.5V20z" />
    <path fill="currentColor" d="M1 19v-2.5A3.5 3.5 0 014.5 13H6a6 6 0 00-1.3 3.7V19zM23 19v-2.5a3.5 3.5 0 00-3.5-3.5H18a6 6 0 011.3 3.7V19z" />
  </Svg>
);

export const BowlIcon = (p: IconProps) => (
  <Svg {...p}>
    <path fill="currentColor" d="M2.5 11h19a9.5 9.5 0 01-19 0z" />
    <path d="M8 8c0-1.2 1-1.2 1-2.4S8 4.4 8 3.2M12 8c0-1.2 1-1.2 1-2.4s-1-1.2-1-2.4M16 8c0-1.2 1-1.2 1-2.4s-1-1.2-1-2.4" {...stroke} />
  </Svg>
);

export const CalendarIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" fill="currentColor" />
    <path d="M8 3v4M16 3v4" {...stroke} />
    <path d="M7 11h2M11 11h2M15 11h2M7 15h2M11 15h2M15 15h2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
  </Svg>
);

export const HandshakeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      d="M1 7l4-1 3 7-3 1.5zM23 7l-4-1-3 7 3 1.5zM8 8.5l3-1.5h3l3.5 1.8-2.3 5L12 10.5l-1.5 1.2a1.5 1.5 0 01-2-2.2z"
    />
    <path fill="currentColor" d="M7 13.5l2.5 2.5 1-1 1.5 1.5 1-1 1.3 1.2 1.5-1.4L12 12l-1.2 1a2.6 2.6 0 01-3.4.1z" />
  </Svg>
);

export const LeafDishIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 3v8a2 2 0 002 2v8M6 3v6M8 3v8a2 2 0 01-2 2" {...stroke} />
    <path d="M17 21v-8c-2.2 0-3.5-2-3.5-5S15 3 17 3s3.5 2 3.5 5-1.3 5-3.5 5" {...stroke} />
  </Svg>
);

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z"
    />
  </Svg>
);

export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" />
    <path d="M4 7l8 6 8-6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export const PotIcon = (p: IconProps) => (
  <Svg {...p}>
    <path fill="currentColor" d="M3 10h18v2h-1v5a4 4 0 01-4 4H8a4 4 0 01-4-4v-5H3z" />
    <path d="M1 12h2M21 12h2M9 7c0-1 1-1 1-2s-1-1-1-2M14 7c0-1 1-1 1-2s-1-1-1-2" {...stroke} />
  </Svg>
);

export const ServeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path fill="currentColor" d="M3 15a9 9 0 0118 0z" />
    <rect x="2" y="16" width="20" height="2" rx="1" fill="currentColor" />
    <circle cx="12" cy="5" r="1.5" fill="currentColor" />
  </Svg>
);

export const FacebookIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="11" fill="#1877F2" />
    <path fill="#fff" d="M13.2 19v-6h2l.3-2.4h-2.3V9.1c0-.7.2-1.1 1.2-1.1h1.2V5.9a16 16 0 00-1.8-.1c-1.8 0-3 1.1-3 3.1v1.7h-2V13h2v6z" />
  </Svg>
);

export const InstagramIcon = (p: IconProps) => (
  <Svg {...p}>
    <defs>
      <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#FEDA75" />
        <stop offset=".4" stopColor="#FA7E1E" />
        <stop offset=".7" stopColor="#D62976" />
        <stop offset="1" stopColor="#4F5BD5" />
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#ig)" />
    <rect x="6" y="6" width="12" height="12" rx="3.5" stroke="#fff" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="2.8" stroke="#fff" strokeWidth="1.6" />
    <circle cx="16" cy="8" r=".9" fill="#fff" />
  </Svg>
);

export const YoutubeIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="1" y="4" width="22" height="16" rx="5" fill="#FF0000" />
    <path fill="#fff" d="M10 8.5v7l6-3.5z" />
  </Svg>
);

export const LinkedinIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="1" y="1" width="22" height="22" rx="4" fill="#0A66C2" />
    <path fill="#fff" d="M5.5 9.5h2.6V18H5.5zM6.8 5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 9.5h2.5v1.2c.4-.7 1.3-1.4 2.6-1.4 2.7 0 3.2 1.8 3.2 4V18h-2.6v-4.1c0-1 0-2.2-1.4-2.2s-1.6 1-1.6 2.1V18H10z" />
  </Svg>
);

export const XIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="1" y="1" width="22" height="22" rx="5" fill="#111" />
    <path fill="#fff" d="M6 6h3.3l2.9 4 3.4-4h1.6l-4.3 5 4.9 7h-3.3l-3.1-4.4L7.6 18H6l4.5-5.3z" />
  </Svg>
);

export const ICONS = {
  bowl: BowlIcon,
  users: UsersIcon,
  pin: PinIcon,
  calendar: CalendarIcon,
  handshake: HandshakeIcon,
  pot: PotIcon,
  serve: ServeIcon,
  dish: LeafDishIcon,
  heart: HeartIcon,
};
export type IconName = keyof typeof ICONS;
