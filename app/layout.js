import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const headingFont = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const siteName = "ProAct";
const description =
  "Strategic holistic activations for brands that need sharper positioning, stronger customer connection, and measurable growth.";

export const metadata = {
  title: {
    default: `${siteName} | Strategic Holistic Activations`,
    template: `%s | ${siteName}`,
  },
  description,
  icons: {
    icon: "/assets/images/favicon/favicon.png",
  },
  metadataBase: new URL("https://proact.om"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <div className="site-shell">
          <div className="site-shell__glow site-shell__glow--one" />
          <div className="site-shell__glow site-shell__glow--two" />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
