import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import LogoMarquee from "../components/LogoMarquee";
import {
  approach,
  clientLogos,
  differentiators,
  services,
  testimonials,
} from "../content/siteData";

export const metadata = {
  title: "Strategic Holistic Activations",
};

const featuredServices = Object.values(services);

export default function HomePage() {
  return (
    <>
      <section className="hero hero--home section">
        <div className="hero__backdrop">
          <Image
            src="/assets/images/sliders/9.jpg"
            alt="ProAct team and activation backdrop"
            fill
            priority
            sizes="100vw"
            className="hero__image"
          />
        </div>
        <div className="container hero__grid">
          <Reveal className="stack stack--lg">
            <span className="eyebrow">Strategic Holistic Activations</span>
            <h1 className="hero__title">
              Brand systems that move people, not just metrics.
            </h1>
            <p className="hero__copy">
              ProAct helps ambitious brands in Oman and beyond sharpen their
              positioning, build memorable identities, and activate customer
              relationships with precision.
            </p>
            <div className="hero__actions">
              <Link className="button button--solid" href="/services">
                Explore services
              </Link>
              <Link className="button button--ghost" href="/contacts">
                Start a project
              </Link>
            </div>
          </Reveal>
          <Reveal className="hero__panel" delay={120}>
            <div className="hero__stat-card">
              <span className="hero__stat-value">40+</span>
              <span className="hero__stat-label">years of combined expertise</span>
            </div>
            <div className="hero__stat-card hero__stat-card--accent">
              <span className="hero__stat-value">4</span>
              <span className="hero__stat-label">core service pillars</span>
            </div>
            <div className="hero__note">
              <p>From brand health to activation, every move is designed to map back to business goals.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Capabilities</span>
            <h2>Four focused practices. One connected growth system.</h2>
          </Reveal>
          <div className="service-grid">
            {featuredServices.map((service, index) => (
              <Reveal
                key={service.slug}
                className={`service-card service-card--${service.theme}`}
                delay={index * 90}
              >
                <div className="service-card__number">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link className="text-link" href={`/services/${service.slug}`}>
                  View service
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container split split--featured">
          <Reveal className="media-card">
            <Image
              src="/assets/images/services/we-help.png"
              alt="Creative team illustration"
              width={960}
              height={880}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </Reveal>
          <Reveal className="stack stack--lg" delay={120}>
            <span className="eyebrow">What makes ProAct different</span>
            <h2>
              A boutique team with strategic discipline, creative range, and
              executional speed.
            </h2>
            <p className="lede">
              We build brands with a clear line from insight to activation, so
              communication, design, and delivery all point in the same direction.
            </p>
            <div className="feature-list">
              {differentiators.map((item, index) => (
                <div className="feature-list__item" key={item.title}>
                  <span>{`0${index + 1}`}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">Approach</span>
            <h2>How strategy becomes momentum</h2>
          </Reveal>
          <div className="approach-grid">
            {approach.map((step, index) => (
              <Reveal key={step.title} className="approach-card" delay={index * 80}>
                <span className="approach-card__index">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Selected clients</span>
            <h2>Trusted by brands that care about substance and impact.</h2>
          </Reveal>
          <LogoMarquee logos={clientLogos} />
        </div>
      </section>

      <section className="section section--accent">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">Testimonials</span>
            <h2>Clients stay because the work is strategic and the output lands.</h2>
          </Reveal>
          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <Reveal key={item.author} className="quote-card" delay={index * 110}>
                <p>{item.quote}</p>
                <div className="quote-card__meta">
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <span className="eyebrow">Global perspective, local understanding</span>
              <h2>Inspiration has no border.</h2>
              <p>
                ProAct brings Oman market fluency together with international
                strategic thinking to build brands that feel distinct and durable.
              </p>
            </div>
            <Link className="button button--solid" href="/contacts">
              Contact ProAct
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
