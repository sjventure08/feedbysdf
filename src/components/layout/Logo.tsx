import Image from "next/image";
import Link from "next/link";

// Heart held by two leaves, with the "Feed bySDF" wordmark.
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path
        fill="var(--forest)"
        d="M6 22c0 11 8 19 18 21-6-4-11-10-12-18-.5-4-2.5-6-6-3zM42 22c0 11-8 19-18 21 6-4 11-10 12-18 .5-4 2.5-6 6-3z"
      />
      <path
        fill="var(--brand)"
        d="M24 36s-11-6.5-13-13.5C9.5 17 12.5 12 17.3 12c2.8 0 4.7 1.6 6.7 4.2 2-2.6 3.9-4.2 6.7-4.2 4.8 0 7.8 5 6.3 10.5C35 29.5 24 36 24 36z"
      />
      <path fill="#fff" d="M19 22c1-2.5 3-3.5 5-2" opacity=".55" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex shrink-0 items-center ${className}`} aria-label="Feed bySDF home">
      <Image
        src="/logo-feed-cropped.png"
        alt="Feed bySDF"
        width={1064}
        height={704}
        priority
        className="h-14 w-auto sm:h-16"
      />
    </Link>
  );
}
