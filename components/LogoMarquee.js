import Image from "next/image";

function LogoSet({ logos }) {
  return logos.map((logo) => (
    <div className="logo-pill" key={`${logo.name}-${logo.src}`}>
      <Image src={logo.src} alt={logo.name} width={96} height={96} />
      <span>{logo.name}</span>
    </div>
  ));
}

export default function LogoMarquee({ logos }) {
  return (
    <div className="logo-marquee" aria-label="Client logos">
      <div className="logo-marquee__track">
        <LogoSet logos={logos} />
        <LogoSet logos={logos} />
      </div>
    </div>
  );
}
