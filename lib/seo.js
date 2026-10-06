import { company } from "../content/siteData";

export const siteUrl = "https://proact.om";
export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).href;
}

export function pageMetadata({ title, description, path, keywords }) {
  const url = absoluteUrl(path);
  const images = [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: "ProAct — Branding Agency in Oman" }];
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: "en_OM", siteName: company.name, title, description, url, images },
    twitter: { card: "summary_large_image", title, description, images: images.map((image) => image.url) },
  };
}

export const organizationSchema = {
  "@type": ["Organization", "LocalBusiness"],
  "@id": organizationId,
  name: company.name,
  url: absoluteUrl(),
  logo: absoluteUrl("/assets/images/logo/logo-dark.png"),
  image: absoluteUrl("/opengraph-image"),
  description: company.footerTagline,
  email: company.email,
  telephone: company.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.slice(0, 2).join(", "),
    addressLocality: "Muscat",
    addressCountry: "OM",
  },
  foundingDate: "2019",
  areaServed: ["Oman", "GCC"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Business enquiries",
    email: company.email,
    telephone: company.phoneHref.replace("tel:", ""),
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  name: company.name,
  url: absoluteUrl(),
  publisher: { "@id": organizationId },
};

export function webPageSchema({ path, name, description, type = "WebPage" }) {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(items.at(-1).href)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function serviceSchema(service) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.pageName,
    serviceType: service.pageName,
    url: absoluteUrl(`/services/${service.slug}`),
    description: service.metaDescription,
    provider: { "@id": organizationId },
    areaServed: ["Oman", "GCC"],
  };
}
