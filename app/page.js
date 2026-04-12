import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import RevealOpacity from "../components/RevealOpacity";
import LogoMarquee from "../components/LogoMarquee";
import { clientLogos } from "../content/siteData";

export const metadata = {
  title: {
    absolute: "ProAct Oman: Personalized Brand Strategies for Lasting Results",
  },
  description:
    "ProAct Oman goes beyond boutique agencies. We craft personalized brand strategies & experiences to connect with your audience and achieve real results. Leverage our Oman expertise & international network. Contact us today!",
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
  },
  {
    title: "Build what is missing",
    description:
      "We define how your brand should position, communicate, and show up so people understand you and choose you.",
  },
  {
    title: "Make it visible and working",
    description:
      "We activate across channels so your brand becomes consistent, recognizable, and effective.",
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
    title: "Results over reporting",
    description:
      "We focus on what changes in your business, not just what gets delivered.",
  },
  {
    title: "Deadline driven",
    description: "We move fast without losing clarity or direction.",
  },
];

const scoreItems = [
  {
    title: "Strategic positioning",
    description:
      "Know exactly how your business should compete and stand out in your market.",
  },
  {
    title: "Consistent communication",
    description:
      "Ensure everything you say aligns across teams, channels, and customer touchpoints.",
  },
  {
    title: "Optimized visibility",
    description:
      "Be seen by the right audience in the right way, with a clear and focused presence.",
  },
  {
    title: "Recognizable brand",
    description: "Build a brand people remember, trust, and choose.",
  },
  {
    title: "Established credibility",
    description:
      "Strengthen your reputation, leadership presence, and market confidence.",
  },
];

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
                is no middle. We fix what is not working in your brand,
                communication, and visibility so your business can grow with
                clarity and consistency.
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
                Years helping businesses grow in Oman
              </span>
            </div>
            <div className="hero__note">
              <span className="hero__stat-value">10+</span>
              <p>Markets served across GCC and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">The Problem</span>
            <h2>Where things usually go wrong</h2>
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
              This is where most organizations lose clarity, consistency, and
              opportunities for growth.
            </p>
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
              clarity problem. We fix it by aligning your brand, communication,
              and visibility so your business can grow.
            </p>
            <div className="feature-list">
              {solutionItems.map((item, index) => (
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
            <span className="eyebrow">Your Perfect Partner</span>
            <h2>Why Proact</h2>
            <p>
              We don&apos;t separate thinking from execution. Every decision we
              make connects your business objectives to how your brand shows up
              in the market.
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

      <section className="section section--contrast">
        <div className="container">
          <Reveal className="section-heading section-heading--center">
            <span className="eyebrow">The Score Model</span>
            <h2>Brand strategy that drives real business impact</h2>
            <p>
              We structure our work around five essential outcomes. Together,
              they form a system that supports sustainable growth. We call this
              the SCORE Model.
            </p>
          </Reveal>
          <div className="score-scroll">
            <div className="approach-grid score-grid">
              {scoreItems.map((item, index) => (
                <Reveal
                  key={item.title}
                  className="approach-card score-card"
                  delay={index * 80}
                >
                  <span className="approach-card__index">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="section-heading section-heading--center">
            <p>Without this, growth becomes inconsistent and harder to sustain.</p>
          </Reveal>
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
        </div>
      </section>

      <section className="section section--pt-0">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Start with clarity</h2>
              <p>
                If something in your brand or communication is not working, the
                first step is understanding why. Whether it&apos;s your
                positioning, visibility, or messaging, we help you identify
                what needs to change and how to move forward with confidence.
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
