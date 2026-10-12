import Image, { type StaticImageData } from "next/image";

type TaggedPhotoProps = {
  photo: StaticImageData;
  alt: string;
  /** First line of the tag, for example "Mosaic Belle Plaine". */
  site: string;
  /** Optional second line, for example "Boiler replacement". */
  detail?: string;
  /** Tells the browser how wide the photo is shown so it downloads the right size. */
  sizes: string;
  /** CSS object-position: which part of the photo stays in view when cropped. */
  focus?: string;
  /** Set on the first photo of a page so it loads immediately. */
  priority?: boolean;
  /** Size and shape of the frame (aspect ratio, grid span, height). */
  className?: string;
};

/*
  A job photo with an equipment-style nameplate in the corner saying where it
  was taken. The frame is sized by className and the photo is cropped to fill it.
*/
export default function TaggedPhoto({
  photo,
  alt,
  site,
  detail,
  sizes,
  focus = "50% 50%",
  priority = false,
  className = "",
}: TaggedPhotoProps) {
  return (
    <figure className={`relative overflow-hidden bg-mist ${className}`}>
      <Image
        src={photo}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className="object-cover"
        style={{ objectPosition: focus }}
      />
      <figcaption className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-[3px] bg-ink px-3.5 py-2.5 text-white sm:bottom-5 sm:left-5">
        <span className="block font-condensed text-[0.9375rem] leading-tight font-semibold tracking-[0.07em] uppercase">
          {site}
        </span>
        {detail ? (
          <span className="mt-1 block font-condensed text-[0.9375rem] leading-tight font-medium text-white/80">
            {detail}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
