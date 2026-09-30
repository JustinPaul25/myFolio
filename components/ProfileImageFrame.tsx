"use client";

import Image from "next/image";

type ProfileImageFrameProps = {
  src: string;
  alt: string;
  /** Tailwind max-width class, e.g. max-w-sm */
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  grayscale?: boolean;
};

const WIDTH = 400;
const HEIGHT = 500;

/**
 * Fixed aspect-ratio frame for profile photos (avoids Next.js fill layout blowouts).
 */
export default function ProfileImageFrame({
  src,
  alt,
  className = "max-w-sm",
  imageClassName = "object-cover object-top",
  priority = false,
  grayscale = false,
}: ProfileImageFrameProps) {
  return (
    <div
      className={`relative mx-auto w-full overflow-hidden ${className}`}
      style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
    >
      <Image
        src={src}
        alt={alt}
        width={WIDTH}
        height={HEIGHT}
        sizes="(max-width: 640px) 280px, 400px"
        priority={priority}
        className={`h-full w-full ${grayscale ? "grayscale contrast-[1.05]" : ""} ${imageClassName}`}
      />
    </div>
  );
}
