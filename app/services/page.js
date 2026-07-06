import Link from "next/link";
import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";

const serviceStages = [
  {
    id: "audit",
    eyebrow: "STAGE 1: AUDIT",
    title: "Understand Where You Stand",
    intro:
      "Before you invest more in marketing, you need to know what is actually working and what is quietly holding you back. Most companies don't realize their brand has a clarity problem until growth slows. We help you see it before that happens.",
    services: [
      {
        title: "Brand Health Check",
        href: "/services/brand-health",
        description:
          "A structured, honest review of your brand as it exists today. We look at every layer from how customers perceive you to how your teams represent you to give you clear, prioritized recommendations you can act on immediately.",
        buildTitle: "What we review",
        buildItems: [
          "Your brand and communication: what it says and how it lands",
          "Your customers and how they actually perceive you",
          "Your competitors and how you compare in the market",
          "Your digital presence and online visibility",
          "Your leadership visibility and personal brand strength",
          "Your employees and how they live and represent the brand",
        ],
        outcomeTitle: "What you walk away with",
        outcome:
          "A clear picture of what is working, what is confusing, and what is missing with actionable recommendations ranked by priority and impact.",
      },
    ],
  },
  {
    id: "fix",
    eyebrow: "STAGE 2: FIX",
    title: "Build What Is Missing",
    intro:
      "Once you know where the gaps are, we fix them. This is where we build the strategic foundation and brand system your business needs to compete clearly, communicate consistently, and grow with confidence. This stage has two connected services: strategy comes first, development brings it to life.",
    services: [
      {
        title: "Brand Strategy",
        href: "/services/brand-strategy",
        description:
          "If your positioning feels unclear, your teams are not aligned on how to communicate, or your brand is not keeping pace with your growth, you need a stronger strategic foundation. We define how your business should compete, how you should be positioned, and how to communicate in a way that makes people understand you and choose you.",
        buildTitle: "What we build",
        buildItems: [
          "Brand foundation statements: your purpose, vision, mission, values, and pillars",
          "Positioning and messaging: how you compete and how you communicate it",
          "Audience definition and competitive differentiation",
          "A strategic direction your entire team can understand and apply",
        ],
        outcomeTitle: "What you walk away with",
        outcome:
          "A clear, usable brand strategy that aligns your leadership, guides your teams, and gives your brand a sharp, consistent direction in the market.",
      },
      {
        title: "Brand Development",
        href: "/services/brand-development",
        description:
          "Strategy without identity does not travel. Once the strategic direction is clear, we translate it into a brand your audience can see, feel, and recognize across every touchpoint, every channel, every interaction.",
        buildTitle: "What we build",
        buildItems: [
          "Brand foundation statements brought into visual and verbal form",
          "Positioning and messaging frameworks your team can use daily",
          "Logo and visual identity designed to hold together across all applications",
          "Brand guidelines that keep your brand consistent everywhere",
          "Website structure, content direction, and copywriting built around your strategy",
          "Personal brand positioning for leaders so your leadership reinforces your brand",
          "Crisis communication plans and messaging so you are prepared when it matters",
        ],
        outcomeTitle: "What you walk away with",
        outcome:
          "A complete brand system that looks, sounds, and feels like one coherent business internally and externally, online and offline.",
      },
    ],
  },
  {
    id: "elevate",
    eyebrow: "STAGE 3: ELEVATE",
    title: "Make It Visible and Working",
    intro:
      "Once you know where the gaps are, we fix them. This is where we build the str is solid, we activate your brand across the channels and moments that matter, so it builds awareness, earns trust, and drives results consistently. If people don't see you clearly, they will choose someone else.",
    services: [
      {
        title: "Brand Activation",
        href: "/services/brand-activation",
        description:
          "We take your brand from strategy and identity into the market through digital presence, event design, brand experiences, and activations that make your brand real to the people you want to reach.",
        buildTitle: "What we activate",
        buildItems: [
          "Event design and immersive brand experiences where your brand comes to life",
          "Website and digital presence designed to convert, not just exist",
          "Content direction and copywriting ensuring what your brand says is clear and consistent",
          "Personal branding and thought leadership building your leaders' visibility and credibility, notably on LinkedIn",
        ],
        outcomeTitle: "What you walk away with",
        outcome:
          "A brand that is consistently visible, recognizable, and effective generating awareness, building trust, and contributing directly to business growth.",
      },
    ],
  },
];

const stageTabs = [
  {
    href: "#audit",
    title: "Audit",
    description: "Understand where you stand",
  },
  {
    href: "#fix",
    title: "Fix",
    description: "Build what is missing",
  },
  {
    href: "#elevate",
    title: "Elevate",
    description: "Make it visible and working",
  },
];

export const metadata = {
  title: "Brand Strategy, Development & Activation Oman | ProAct Services",
  description:
    "ProAct offers brand strategy, brand development, and brand activation services in Oman. Senior-led work that helps businesses grow through clear positioning, consistent identity, and real brand experiences.",
  keywords: [
    "Branding services Oman",
    "Brand strategy Oman",
    "Brand development Oman",
    "Branding agency services Oman",
    "Brand health check Oman",
    "Brand activation Oman",
    "Brand positioning Oman",
    "Communication strategy Oman",
    "Digital brand visibility Oman",
    "Corporate branding services Oman",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Brand Health Check",
      provider: { "@type": "Organization", name: "ProAct" },
      areaServed: ["Oman", "GCC"],
      url: "https://proact.om/services/brand-health",
    },
    {
      "@type": "Service",
      serviceType: "Brand Strategy",
      provider: { "@type": "Organization", name: "ProAct" },
      areaServed: ["Oman", "GCC"],
      url: "https://proact.om/services/brand-strategy",
    },
    {
      "@type": "Service",
      serviceType: "Brand Development",
      provider: { "@type": "Organization", name: "ProAct" },
      areaServed: ["Oman", "GCC"],
      url: "https://proact.om/services/brand-development",
    },
    {
      "@type": "Service",
      serviceType: "Brand Activation",
      provider: { "@type": "Organization", name: "ProAct" },
      areaServed: ["Oman", "GCC"],
      url: "https://proact.om/services/brand-activation",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        eyebrow="OUR SERVICES"
        title="Brand Strategy, Development, and Activation Services in Oman"
        description="We don't start with deliverables. We start with clarity. Our services follow a simple, connected logic: Audit where you stand, fix what is holding you back, and elevate your brand so it drives consistent results. You can enter at any stage. We connect everything."
        image="/assets/images/page-titles/5.jpg"
        imageAlt="Service strategy background"
      />

      <section className="section">
        <div className="container split">
          <Reveal className="stack stack--lg">
            <span className="eyebrow">WHO WE WORK</span>
            <h2>How we make your brand work from diagnosis to activation.</h2>
          </Reveal>
          <Reveal className="stack" delay={120}>
            <p className="lede">
              Most organizations jump straight to activation before they have fixed the
              foundations. That is why results are inconsistent. Every service we offer
              connects to the same outcome: a brand that is clear, aligned, and working
              for your business.
            </p>
            <p>
              Most of our clients come to us knowing something is not working but not
              exactly what. A focused conversation is all it takes to identify where you
              stand, what is missing, and what the right first step is for your business.
            </p>
            <div>
              <Link className="button button--solid" href="/contacts">
                Start a Conversation
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="container">
          <Reveal className="stage-tabs" delay={180}>
            {stageTabs.map((tab) => (
              <a key={tab.href} className="stage-tab" href={tab.href}>
                <strong>{tab.title}</strong>
                <span>{tab.description}</span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {serviceStages.map((stage, stageIndex) => (
        <section
          key={stage.id}
          id={stage.id}
          className={`section services-stage${
            stageIndex % 2 === 0 ? " section--contrast" : ""
          }`}
        >
          <div className="container">
            <Reveal className="section-heading">
              <span className="eyebrow">{stage.eyebrow}</span>
              <h2>{stage.title}</h2>
              <p>{stage.intro}</p>
            </Reveal>
            <div className="services-stage__grid">
              {stage.services.map((service, index) => (
                <Reveal key={service.title} className="method-card" delay={index * 90}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="services-stage__list">
                    <h4>{service.buildTitle}</h4>
                    <ul className="check-list">
                      {service.buildItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="services-stage__outcome">
                    <h4>{service.outcomeTitle}</h4>
                    <p>{service.outcome}</p>
                  </div>
                  <Link className="button button--inline" href={service.href}>
                    Read more →
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal className="services-stage__cta" delay={180}>
              <Link className="button button--solid" href="/contacts">
                Start a conversation →
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section section--contrast">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <span className="eyebrow">LET'S TALK</span>
              <h2>Your brand should be working harder than it is</h2>
              <p>
                If your brand or communication is not delivering the results you expect,
                there is a reason. We help you find it and fix it starting with one
                focused conversation.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link className="button button--solid" href="/contacts">
                Start a conversation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
