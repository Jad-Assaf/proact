import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import { beliefs, faqs } from "../../content/siteData";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ProAct"
        title="From vision to action."
        description="ProAct was built to close the gap between brand activity and business impact, bringing sharper communication and stronger strategic discipline to ambitious brands."
        image="/assets/images/page-titles/6.jpg"
        imageAlt="Abstract brand presentation backdrop"
      />

      <section className="section">
        <div className="container split">
          <Reveal className="stack stack--lg">
            <span className="eyebrow">Our story</span>
            <h2>We saw strong ideas getting lost in weak execution.</h2>
            <p className="lede">
              ProAct started in 2019 after identifying a recurring problem in the
              Omani market: promising initiatives were not being connected to
              clear business goals, relevant channels, or measurable outcomes.
            </p>
            <p>
              That gap created waste, diluted differentiation, and made it harder
              for brands to build durable customer relationships. ProAct was
              created to fix that through better strategy, stronger communication,
              and more intentional activations.
            </p>
            <p>
              Today, the team continues to blend local market fluency with a
              broader strategic lens, helping brands grow with clearer systems and
              more useful creative thinking.
            </p>
          </Reveal>
          <Reveal className="belief-panel" delay={120}>
            {beliefs.map((item, index) => (
              <article className="belief-card" key={item.title}>
                <span>{`0${index + 1}`}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">What clients get</span>
            <h2>Exactly what fast-moving brands need.</h2>
          </Reveal>
          <div className="value-grid">
            {[
              {
                title: "Brand builders at heart",
                description:
                  "We create cohesive visual and verbal systems that stay consistent as the business grows.",
              },
              {
                title: "Seasoned strategic depth",
                description:
                  "Senior input stays close to the work, which keeps strategy practical and execution aligned.",
              },
              {
                title: "Measured ambition",
                description:
                  "Research and data keep ideas accountable so the brand can grow without drifting off message.",
              },
              {
                title: "Responsive execution",
                description:
                  "Deadlines matter, and the work is built to adapt quickly when priorities shift.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} className="value-card" delay={index * 90}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--faq">
          <Reveal className="stack stack--lg">
            <span className="eyebrow">FAQ</span>
            <h2>Useful context before we start working together.</h2>
            <p className="lede">
              A few of the questions brands usually ask before engaging the team.
            </p>
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
    </>
  );
}
