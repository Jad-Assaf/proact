import Link from "next/link";
import Image from "next/image";
import { company, navigation } from "../content/siteData";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="stack">
          <Image
            src="/assets/images/logo/logo-light.png"
            alt="ProAct"
            width={158}
            height={56}
          />
          <p>
            We craft personalized brand strategies and experiences that connect
            with the right audience and drive measurable growth.
          </p>
        </div>
        <div className="stack">
          <h3>Navigation</h3>
          <div className="footer-links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="stack">
          <h3>Contact</h3>
          <a href={company.emailHref}>{company.email}</a>
          <a href={company.phoneHref}>{company.phone}</a>
          <p>{company.address.join(", ")}</p>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© ProAct</span>
        <span>{company.tagline}</span>
      </div>
    </footer>
  );
}
