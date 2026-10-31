import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const EXTENSIONS = ["webp", "jpg", "jpeg", "png", "avif"];

// Finds public/<base>.<ext> for the first extension that exists.
function resolveImage(base: string): string | null {
  for (const ext of EXTENSIONS) {
    const file = `${base}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", file))) return file;
  }
  return null;
}

export function hasImage(base: string) {
  return resolveImage(base) !== null;
}

// Server-only image slot. Pass a path without extension ("/images/hero-main");
// shows a soft placeholder naming the expected file until it is added.
export function Photo({
  src,
  alt,
  sizes = "100vw",
  className = "",
  imgClassName = "object-cover",
  preload = false,
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  preload?: boolean;
}) {
  const file = resolveImage(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {file ? (
        <Image src={file} alt={alt} fill sizes={sizes} preload={preload} className={imgClassName} />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand-soft via-sand to-forest-soft p-3 text-center"
        >
          <span className="flex flex-col items-center gap-1.5 text-[11px] leading-tight text-muted/80">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 8h3l2-3h6l2 3h3v11H4z M12 17a4 4 0 100-8 4 4 0 000 8z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-mono">{src.replace(/^\//, "public/")}.jpg</span>
          </span>
        </div>
      )}
    </div>
  );
}
