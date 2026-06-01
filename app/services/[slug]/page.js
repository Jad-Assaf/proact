import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../../components/Reveal";
import PageHero from "../../../components/PageHero";
import { services } from "../../../content/siteData";

const serviceList = Object.values(services);
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceList.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = services[params.slug];

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
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
        eyebrow={service.heroEyebrow}
        title={service.title}
        description={service.summary}
        image="/assets/images/background/1.jpg"
        imageAlt={`${service.title} background`}
      />

      <section className="section">
        <div className="container split">
          <Reveal className="stack stack--lg">
            <span className="eyebrow">{service.problem.eyebrow}</span>
            <h2>{service.problem.title}</h2>
            <p className="lede">{service.problem.body}</p>
          </Reveal>
          <Reveal className="insight-card" delay={120}>
            <ul className="check-list">
              {service.problem.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">{service.coverage.eyebrow}</span>
            <h2>{service.coverage.title}</h2>
            <p>{service.coverage.body}</p>
          </Reveal>
          <div className="method-grid">
            {service.coverage.items.map((item, index) => (
              <Reveal key={item.title} className="method-card" delay={index * 80}>
                <span className="method-card__index">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="stack stack--lg">
            <span className="eyebrow">{service.takeaway.eyebrow}</span>
            <h2>{service.takeaway.title}</h2>
            <p className="lede">{service.takeaway.body}</p>
          </Reveal>
          <Reveal className="insight-card" delay={120}>
            <ul className="check-list">
              {service.takeaway.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>The process</h2>
          </Reveal>
          <div className="method-grid">
            {service.process.map((step, index) => (
              <Reveal key={step.title} className="method-card" delay={index * 80}>
                <span className="method-card__index">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="case-study-card">
            <span className="eyebrow">{service.caseStudy.eyebrow}</span>
            <h2>{service.caseStudy.title}</h2>
            <div className="stack">
              {service.caseStudy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container split split--faq">
          <Reveal className="section-heading">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
          </Reveal>
          <div className="faq-list">
            {service.faqs.map((item, index) => (
              <Reveal as="details" className="faq-item" delay={index * 70} key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <span className="eyebrow">NEXT STEP</span>
              <h2>{service.nextStep.title}</h2>
              <p>{service.nextStep.body}</p>
            </div>
            <div className="cta-banner__actions">
              <Link className="button button--solid" href="/contacts">
                Start a conversation →
              </Link>
              <Link className="button button--ghost" href="/services">
                Back to services →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
