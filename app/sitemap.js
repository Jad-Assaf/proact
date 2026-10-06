import { services } from "../content/siteData";
import { absoluteUrl } from "../lib/seo";

export default function sitemap() {
  return ["/", "/about", "/services", "/contacts", ...Object.values(services).map((service) => `/services/${service.slug}`)]
    .map((path) => ({ url: absoluteUrl(path) }));
}
