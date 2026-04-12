"use client";

import { useEffect, useRef } from "react";
import { observeReveal } from "./revealObserver";

export default function RevealOpacity({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-visible");
      return undefined;
    }

    return observeReveal(node, () => {
      node.classList.add("is-visible");
    });
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--opacity ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
