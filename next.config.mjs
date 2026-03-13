/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/index-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/contacts.html",
        destination: "/contacts",
        permanent: true,
      },
      {
        source: "/casestudies",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/casestudies.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services-brand-health",
        destination: "/services/brand-health",
        permanent: true,
      },
      {
        source: "/services-brand-health.html",
        destination: "/services/brand-health",
        permanent: true,
      },
      {
        source: "/services-brand-strategy",
        destination: "/services/brand-strategy",
        permanent: true,
      },
      {
        source: "/services-brand-strategy.html",
        destination: "/services/brand-strategy",
        permanent: true,
      },
      {
        source: "/services-brand-development",
        destination: "/services/brand-development",
        permanent: true,
      },
      {
        source: "/services-brand-development.html",
        destination: "/services/brand-development",
        permanent: true,
      },
      {
        source: "/services-brand-activations",
        destination: "/services/brand-activations",
        permanent: true,
      },
      {
        source: "/services-brand-activations.html",
        destination: "/services/brand-activations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
