let sharedObserver = null;
const revealCallbacks = new WeakMap();

function getSharedObserver() {
  if (typeof window === "undefined") {
    return null;
  }

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const callback = revealCallbacks.get(entry.target);
          if (callback) {
            callback();
          }

          revealCallbacks.delete(entry.target);
          sharedObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.18 },
    );
  }

  return sharedObserver;
}

export function observeReveal(node, onReveal) {
  const observer = getSharedObserver();

  if (!observer || !node) {
    return () => {};
  }

  revealCallbacks.set(node, onReveal);
  observer.observe(node);

  return () => {
    revealCallbacks.delete(node);
    observer.unobserve(node);
  };
}
