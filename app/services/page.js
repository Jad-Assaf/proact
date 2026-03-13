import Link from "next/link";
import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import { services } from "../../content/siteData";

const serviceList = Object.values(services);

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Holistic and comprehensive strategies and executions."
        description="ProAct connects diagnostics, strategy, development, and activation so the brand can move as one system rather than as disconnected campaigns."
        image="/assets/images/page-titles/5.jpg"
        imageAlt="Service strategy background"
      />

      <section className="section">
        <div className="container split">
          <Reveal className="stack stack--lg">
            <span className="eyebrow">Strategic and creative services</span>
            <h2>Built to improve brand clarity, consistency, and traction.</h2>
          </Reveal>
          <Reveal className="stack" delay={120}>
            <p className="lede">
              ProAct prioritizes brand health because strong activation starts
              with accurate diagnosis. From there, the work extends into strategy,
              development, and activation programs that translate brand thinking
              into growth-oriented action.
            </p>
            <p>
              The service model is designed to help businesses differentiate,
              communicate with more precision, and sustain momentum in competitive
              market conditions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container">
          <div className="service-grid">
            {serviceList.map((service, index) => (
              <Reveal
                key={service.slug}
                className={`service-card service-card--${service.theme}`}
                delay={index * 90}
              >
                <div className="service-card__number">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <span className="service-card__eyebrow">{service.kicker}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link className="button button--inline" href={`/services/${service.slug}`}>
                  Read more
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">Extended support</span>
            <h2>Additional capabilities around the core service pillars.</h2>
          </Reveal>
          <div className="value-grid">
            {[
              "Marketing planning",
              "Communication strategy",
              "Digital campaign direction",
              "Public relations advisory",
              "Activation system design",
              "Brand governance support",
            ].map((title, index) => (
              <Reveal key={title} className="value-card value-card--compact" delay={index * 80}>
                <h3>{title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
