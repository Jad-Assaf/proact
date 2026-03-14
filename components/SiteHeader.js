"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "../content/siteData";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    document.body.classList.toggle("nav-open", isMobileOpen);
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileOpen]);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="site-header__frame">
        <div className="site-header__inner">
          <Link className="brand-mark" href="/">
            <Image
              src="/assets/images/logo/logo-dark.png"
              alt="ProAct"
              width={124}
              height={43}
              priority
            />
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <div className="site-nav__group">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`site-nav__link${isActive(item.href) ? " is-active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="site-header__actions">
            <Link className="button button--small button--solid" href="/contacts">
              Start a project
            </Link>
            <button
              type="button"
              className={`mobile-nav__trigger${isMobileOpen ? " is-open" : ""}`}
              aria-label="Open menu"
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`mobile-sidebar-backdrop${isMobileOpen ? " is-open" : ""}`}
        onClick={() => setIsMobileOpen(false)}
      />
      <aside className={`mobile-sidebar${isMobileOpen ? " is-open" : ""}`} aria-label="Mobile navigation">
        <div className="mobile-sidebar__header">
          <Link className="brand-mark" href="/">
            <Image
              src="/assets/images/logo/logo-dark.png"
              alt="ProAct"
              width={112}
              height={39}
              priority
            />
          </Link>
          <button
            type="button"
            className="mobile-sidebar__close"
            aria-label="Close menu"
            onClick={() => setIsMobileOpen(false)}
          >
            <span />
            <span />
          </button>
        </div>
        <nav className="mobile-sidebar__nav" aria-label="Mobile primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "is-active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-sidebar__footer">
          <Link className="button button--small button--solid" href="/contacts">
            Start a project
          </Link>
        </div>
      </aside>
    </header>
  );
}
