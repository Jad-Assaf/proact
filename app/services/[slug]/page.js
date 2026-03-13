import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../../components/Reveal";
import PageHero from "../../../components/PageHero";
import { services } from "../../../content/siteData";

const serviceList = Object.values(services);

export function generateStaticParams() {
  return serviceList.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = services[params.slug];

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = services[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Service detail"
        title={service.title}
        description={service.summary}
        image="/assets/images/background/1.jpg"
        imageAlt={`${service.title} background`}
      />

      <section className="section">
        <div className="container split">
          <Reveal className="stack stack--lg">
            <span className="eyebrow">{service.kicker}</span>
            <h2>{service.title} built around measurable brand progress.</h2>
            <p className="lede">{service.intro}</p>
          </Reveal>
          <Reveal className="insight-card" delay={120}>
            <h3>Why invest in {service.title.toLowerCase()}?</h3>
            <ul className="check-list">
              {service.valuePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">How we do it</span>
            <h2>{service.methodsIntro}</h2>
          </Reveal>
          <div className="method-grid">
            {service.methods.map((method, index) => (
              <Reveal key={method.title} className="method-card" delay={index * 80}>
                <span className="method-card__index">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <span className="eyebrow">Next step</span>
              <h2>Need this service for your brand?</h2>
              <p>
                Let’s discuss the business context, the audience challenge, and
                the activation path that makes the most sense.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link className="button button--solid" href="/contacts">
                Talk to ProAct
              </Link>
              <Link className="button button--ghost" href="/services">
                Back to services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
