import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import RevealOpacity from "../components/RevealOpacity";
import LogoMarquee from "../components/LogoMarquee";
import { clientLogos } from "../content/siteData";

export const metadata = {
  title: {
    absolute: "Branding Agency Oman | Brand Strategy & Growth | Proact",
  },
  description:
    "Proact is a branding agency in Oman helping businesses grow through clear brand strategy, brand development, and brand activation. Senior-led. Built for the Omani market.",
  keywords: [
    "branding agency Oman",
    "brand strategy Oman",
    "brand development Oman",
    "brand activation Oman",
    "brand health check Oman",
    "brand positioning Oman",
    "corporate branding Oman",
  ],
};

const problemItems = [
  "Your marketing is active, but not delivering results.",
  "Your brand says one thing, but the experience is different.",
  "Your teams are not aligned on how to communicate.",
  "You are growing, but your brand is not keeping up.",
];

const solutionItems = [
  {
    title: "Understand where you stand",
    description:
      "We identify what is unclear, inconsistent, or not working in how your business is perceived.",
    href: "/services/brand-health",
    linkLabel: "Brand Health Check",
  },
  {
    title: "Build what is missing",
    description:
      "We define how your brand should position, communicate, and show up so people understand you and choose you.",
    href: "/services/brand-strategy",
    linkLabel: "Brand Strategy",
  },
  {
    title: "Make it visible and working",
    description:
      "We design brand experiences and activations so your brand becomes consistent, recognizable, and effective in the real world.",
    href: "/services/brand-activation",
    linkLabel: "Brand Activation",
  },
];

const partnerItems = [
  {
    title: "Brand builders at heart",
    description:
      "We build brands that hold together across every touchpoint.",
  },
  {
    title: "Senior attention throughout",
    description:
      "You work directly with experienced professionals on critical decisions.",
  },
  {
    title: "Focused on what changes",
    description:
      "We focus on what changes in your business, not just what gets delivered.",
  },
  {
    title: "Built for real conditions",
    description:
      "Our work is designed to perform in real markets, not just in presentations.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ProAct",
  url: "https://proact.om",
  description:
    "Brand strategy, brand development, brand activation, and brand health check services for businesses in Oman and the GCC.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Muscat",
    addressCountry: "OM",
  },
  foundingDate: "2019",
  areaServed: ["Oman", "GCC"],
  serviceType: [
    "Brand Strategy",
    "Brand Development",
    "Brand Activation",
    "Brand Health Check",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <section className="hero hero--home section">
        <div className="hero__backdrop">
          <Image
            src="/assets/images/sliders/9.jpg"
            alt="ProAct team and activation backdrop"
            fill
            priority
            sizes="(min-width: 1200px) 1200px, 100vw"
            className="hero__image"
          />
        </div>
        <div className="container hero__grid">
          <div className="stack stack--lg">
            <RevealOpacity className="stack stack--lg">
              <span className="eyebrow">Branding Agency in Oman</span>
              <h1 className="hero__title">
                Branding Agency in Oman for Businesses That Want to Grow
              </h1>
              <p className="hero__copy">
                Your brand is either driving growth or slowing it down. There
                is no middle. We align your brand, communication, and
                visibility so your business grows with clarity and consistency,
                led by senior strategists who have been doing this in Oman for
                over a decade.
              </p>
            </RevealOpacity>
            <div className="hero__actions">
              <Link className="button button--solid" href="/services">
                See how we work
              </Link>
              <Link className="button button--ghost" href="/contacts">
                Start a conversation
              </Link>
            </div>
          </div>
          <div className="hero__panel">
            <div className="hero__stat-card">
              <span className="hero__stat-value">75+</span>
              <span className="hero__stat-label">
                Years of combined strategic and execution experience
              </span>
            </div>
            <div className="hero__stat-card hero__stat-card--accent">
              <span className="hero__stat-value">10+</span>
              <span className="hero__stat-label">
                Years helping businesses in Oman grow
              </span>
            </div>
            <div className="hero__note">
              <span className="hero__stat-value">10+</span>
              <p>Markets served across the GCC and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">The Problem</span>
            <h2>Where growth starts to break down</h2>
          </Reveal>
          <Reveal className="stack stack--lg">
            <p className="lede section-copy-center">
              Your business is moving, but something is not working the way it
              should:
            </p>
            <div className="problem-grid">
              {problemItems.map((item, index) => (
                <Reveal
                  key={item}
                  className="value-card value-card--compact problem-card"
                  delay={index * 70}
                >
                  <span className="approach-card__index">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <p>{item}</p>
                </Reveal>
              ))}
            </div>
            <p className="section-copy-center">
              Most companies do not realize this until growth slows.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--pt-0">
        <div className="container">
          <Reveal className="cta-banner">
            <p className="lede">If this sounds familiar, the next step is clarity.</p>
            <Link className="button button--solid" href="/contacts">
              Start a conversation
            </Link>
          </Reveal>
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
            <span className="eyebrow">Our Solution</span>
            <h2>How we make your brand work</h2>
            <p className="lede">
              Most organizations do not have a marketing problem. They have a
              clarity problem. We fix it by aligning your brand strategy,
              communication, and visibility so your business grows faster and
              more consistently.
            </p>
            <div className="feature-list">
              {solutionItems.map((item, index) => (
                <div className="feature-list__item" key={item.title}>
                  <span>{`0${index + 1}`}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link className="button button--inline" href={item.href}>
                      {item.linkLabel}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p>
              This is where strategy stops being theory and starts driving
              performance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">Your Perfect Partner</span>
            <h2>Why Proact</h2>
            <p>
              A brand only works when it aligns how your business thinks,
              communicates, and shows up in the market. That is the standard we
              build for, and we build it with senior professionals who are
              directly involved from brief to delivery.
            </p>
          </Reveal>
          <div className="value-grid">
            {partnerItems.map((item, index) => (
              <Reveal
                key={item.title}
                className="value-card value-card--compact"
                delay={index * 80}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">Selected Clients</span>
            <h2>
              We work with organizations that want their brand to perform, not
              just exist
            </h2>
            <p>
              From growing companies to established institutions, we partner
              with teams that are ready to move forward with clarity and
              intent.
            </p>
          </Reveal>
          <LogoMarquee logos={clientLogos} />
          <Reveal className="section-copy-center client-reference">
            <p>
              Clients include SalamAir, Atyab Group, Oman Flour Mills, Tea &
              You, Luma Residences (Muscat Bay), Dhofar Global, Al Maskaan
              Village, Thyme Restaurant, Royal Opera House Muscat, Omantel, and
              others across Oman and the GCC.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--pt-0">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Let&apos;s identify what&apos;s not working</h2>
              <p>
                If your brand or communication is not delivering the results
                you expect, there is a reason. We help you understand where you
                stand, what is missing, and what needs to change. This starts
                with a focused fruitful conversation.
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
