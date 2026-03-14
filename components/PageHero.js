import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  align = "left",
}) {
  return (
    <section className={`page-hero page-hero--${align}`}>
      {image ? (
        <div className="page-hero__backdrop">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="page-hero__image"
          />
        </div>
      ) : null}
      <div className="container">
        <div className="page-hero__content">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1>{title}</h1>
          {description ? <p>{description}</p> : null}
        </div>
      </div>
    </section>
  );
}
