import Link from "next/link";
import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import { beliefs, company, faqs } from "../../content/siteData";

export const metadata = {
  title: {
    absolute: "About ProAct | Branding Agency in Oman | Brand Strategy & Activation",
  },
  description:
    "ProAct is a branding agency in Oman with 75+ years of combined experience in brand strategy, brand development, and brand activation. We help businesses grow through clear positioning and consistent execution.",
  keywords: [
    "branding agency Oman",
    "brand strategy Oman",
    "brand development Oman",
    "brand activation Oman",
    "brand consultancy Muscat",
    "corporate branding Oman",
    "brand positioning Oman",
  ],
};

const journeyCards = [
  {
    title: "01 Understand where you stand",
    body:
      "Brand Health Check - We audit your brand, communication, perception, and competitive position to identify what is working, what is unclear, and what needs to change.",
    href: "/services/brand-health",
  },
  {
    title: "02 Build what is missing",
    body:
      "Brand Strategy & Brand Development - We define how your brand should position, communicate, and look. We build the foundation and the tools your team can actually use.",
    href: "/services/brand-strategy",
  },
  {
    title: "03 Make it visible and working",
    body:
      "Brand Activation - We design and deliver brand experiences, events, and activations that bring your brand to life in the real world.",
    href: "/services/brand-activation",
  },
];

const differentiators = [
  {
    title: "Senior attention throughout",
    body:
      "You work directly with experienced professionals on every decision that shapes your brand. Not junior teams. Not account managers relaying messages.",
  },
  {
    title: "Strategy your team can use",
    body:
      "We do not deliver strategy decks that live in a drawer. We build brand tools that are simple enough for your team to apply every day in meetings, in communications, and in the market.",
  },
  {
    title: "Built for real markets",
    body:
      "Our work is designed to perform in real conditions in the Omani market, with real budgets, real teams, and real timelines. We measure success by what changes in your business, not what gets delivered.",
  },
  {
    title: "Deep local knowledge",
    body:
      "More than a decade working in the Omani market means we understand the culture, the competitive landscape, and the communication context. Our work is rooted in local fluency, not imported templates.",
  },
];

const team = [
  {
    name: "Antoine G. Aoun",
    title: "Founder & CEO - ProAct Oman",
  },
  {
    name: "Rouba Taouk",
    title: "Corporate & Personal Branding Strategist",
  },
];

const ecosystem = [
  {
    title: "Mangusteen LLC",
    label: "Qatar | Oman | KSA | UAE | Syria",
    body:
      "Events, experiences, exhibitions, and activations across the GCC. Eventex Gold Award Winner 2025. Member of ICCA, UFI, and IAAE.",
  },
  {
    title: "ProPulse",
    label: "Oman Riyada Registered SME (1741314)",
    body:
      "Brand activations, corporate events, and ground-level execution in Oman. Built to support local growth and creative industries.",
  },
  {
    title: "Oman Night Markets (Bazaar)",
    label: "Oman",
    body:
      "Community market and cultural experience platform active across Muscat venues including Mall of Oman, Crowne Plaza, and MQ. 20,000+ visitors per cycle.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "ProAct",
      url: "https://proact.om",
      foundingDate: "2019",
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.slice(0, 2).join(", "),
        addressLocality: "Muscat",
        addressCountry: "OM",
      },
    },
    {
      "@type": "AboutPage",
      name: "About ProAct",
      url: "https://proact.om/about",
      description: metadata.description,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <PageHero
        eyebrow="ABOUT PROACT"
        title="The Branding Agency in Oman That Makes Strategy Work"
        description="We help businesses in Oman and across the GCC grow through clear brand strategy, consistent communication, and brand experiences that perform in the real market."
        image="/assets/images/page-titles/6.jpg"
        imageAlt="Abstract brand presentation backdrop"
      />

      <section className="section section--pt-0">
        <div className="container hero__panel about-proof-strip">
          <div className="hero__stat-card">
            <span className="hero__stat-value">75+</span>
            <span className="hero__stat-label">
              Years of combined strategic and execution experience
            </span>
          </div>
          <div className="hero__stat-card hero__stat-card--accent">
            <span className="hero__stat-value">10+</span>
            <span className="hero__stat-label">
              Years helping businesses grow in Oman
            </span>
          </div>
          <div className="hero__note">
            <span className="hero__stat-value">10+</span>
            <p>Markets served across GCC and beyond</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="stack stack--lg">
            <span className="eyebrow">OUR STORY</span>
            <h2>
              We started with one observation: most brands in Oman were not
              failing from lack of effort. They were failing from lack of
              alignment.
            </h2>
          </Reveal>
          <Reveal className="stack" delay={120}>
            <p>
              ProAct was built to close that gap. Over more than a decade
              working with businesses in Oman and across the GCC, we kept seeing
              the same pattern: strong businesses with unclear brands,
              misaligned communication, and execution that did not match their
              ambitions.
            </p>
            <p>
              So we built a practice around fixing exactly that. Not just
              producing brand assets, but making sure the strategy holds
              together across every touchpoint from how a company positions
              itself in the market, to how its people communicate, to how its
              brand shows up in the real world.
            </p>
            <p>
              Today, ProAct works across the full brand lifecycle: from brand
              health diagnostics to strategy, identity, and live brand
              experiences. Our work has served businesses across sectors
              including aviation, food and beverage, real estate, hospitality,
              healthcare, and education.
            </p>
            <p>
              Clients include SalamAir, Atyab Group / Oman Flour Mills, Tea &
              You, Luma Residences (Muscat Bay), Dhofar Global, Al Maskaan
              Village, Thyme Restaurant, Royal Opera House Muscat, Omantel,
              Averda, and others across Oman and the GCC.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">WHAT WE BELIEVE</span>
            <h2>Purpose, vision, mission, and values that shape the work.</h2>
          </Reveal>
          <div className="value-grid value-grid--three">
            {beliefs.map((item, index) => (
              <Reveal key={item.title} className="value-card" delay={index * 80}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">HOW WE WORK</span>
            <h2>We work across the full brand journey from audit to activation.</h2>
            <p>
              Our work is structured across three connected stages. You can
              engage us at any point, and we connect the work across all three.
            </p>
          </Reveal>
          <div className="method-grid">
            {journeyCards.map((item, index) => (
              <Reveal key={item.title} className="method-card" delay={index * 90}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className="button button--inline" href={item.href}>
                  Read more
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="services-stage__cta" delay={180}>
            <Link className="button button--solid" href="/services">
              See our services
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">WHY PROACT</span>
            <h2>What makes us different is how we work.</h2>
          </Reveal>
          <div className="value-grid">
            {differentiators.map((item, index) => (
              <Reveal key={item.title} className="value-card" delay={index * 90}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="stack stack--lg">
            <span className="eyebrow">THE PEOPLE BEHIND THE WORK</span>
            <h2>Senior-led. Multi-disciplinary. Built for Oman.</h2>
            <p className="lede">
              Every ProAct engagement is led by senior professionals with direct
              involvement from brief to delivery. You work with people who think
              strategically and execute with precision.
            </p>
          </Reveal>
          <div className="contact-grid">
            {team.map((person, index) => (
              <Reveal key={person.name} className="contact-card" delay={index * 90}>
                <h3>{person.name}</h3>
                <p>{person.title}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">OUR ECOSYSTEM</span>
            <h2>One strategic partner. Full-spectrum capability.</h2>
            <p>
              ProAct works within a curated network of specialist partners to
              extend capability across the full brand and experience spectrum.
            </p>
          </Reveal>
          <div className="method-grid">
            {ecosystem.map((item, index) => (
              <Reveal key={item.title} className="method-card" delay={index * 90}>
                <h3>{item.title}</h3>
                <strong>{item.label}</strong>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--faq">
          <Reveal className="stack stack--lg">
            <span className="eyebrow">COMMON QUESTIONS</span>
            <h2>What you should know before we start working together.</h2>
          </Reveal>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <Reveal as="details" className="faq-item" delay={index * 70} key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--pt-0">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <span className="eyebrow">LET'S TALK</span>
              <h2>
                If your brand is not performing the way your business deserves,
                let&apos;s fix that.
              </h2>
              <p>
                Every engagement starts with a focused conversation. We listen
                to where you are, identify what is not working, and tell you
                exactly what needs to change.
              </p>
            </div>
            <Link className="button button--solid" href="/contacts">
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
