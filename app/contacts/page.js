import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import { company } from "../../content/siteData";

export const metadata = {
  title: "Contact",
};

export default function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s work together."
        description="If you need a brand reset, a clearer strategic direction, or sharper activations, this is the right place to start."
        image="/assets/images/cta/1.jpg"
        imageAlt="Contact background"
      />

      <section className="section">
        <div className="container split split--contact">
          <Reveal className="stack stack--lg">
            <span className="eyebrow">Reach out</span>
            <h2>Tell us where the brand is stuck and where it needs to go.</h2>
            <p className="lede">
              ProAct works best when the brief is tied to a real business need:
              repositioning, growth, differentiation, launch planning, customer
              engagement, or brand consistency.
            </p>
          </Reveal>
          <div className="contact-grid">
            <Reveal className="contact-card" delay={60}>
              <h3>Email</h3>
              <a href={company.emailHref}>{company.email}</a>
            </Reveal>
            <Reveal className="contact-card" delay={120}>
              <h3>Phone</h3>
              <a href={company.phoneHref}>{company.phone}</a>
            </Reveal>
            <Reveal className="contact-card contact-card--wide" delay={180}>
              <h3>Address</h3>
              <p>{company.address.join(", ")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--contrast">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Good fit projects</span>
            <h2>Work we can move quickly and strategically.</h2>
          </Reveal>
          <div className="value-grid">
            {[
              "New brand launches",
              "Rebrands and brand refreshes",
              "Brand health audits",
              "Integrated activation programs",
              "Social and PR planning",
              "Audience-focused communication systems",
            ].map((item, index) => (
              <Reveal key={item} className="value-card value-card--compact" delay={index * 75}>
                <h3>{item}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
