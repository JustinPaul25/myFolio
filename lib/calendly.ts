const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

function loadStylesheet(href: string): Promise<void> {
  if (document.querySelector(`link[href="${href}"]`)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error("Failed to load Calendly styles"));
    document.head.appendChild(link);
  });
}

function waitForCalendly(timeoutMs = 10000): Promise<void> {
  if (window.Calendly) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const started = Date.now();
    const tick = () => {
      if (window.Calendly) {
        resolve();
        return;
      }
      if (Date.now() - started >= timeoutMs) {
        reject(new Error("Calendly script timed out"));
        return;
      }
      window.setTimeout(tick, 50);
    };
    tick();
  });
}

function loadScript(src: string): Promise<void> {
  if (window.Calendly) {
    return Promise.resolve();
  }

  const existing = document.querySelector(`script[src="${src}"]`);
  if (existing) {
    return waitForCalendly();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      void waitForCalendly().then(resolve).catch(reject);
    };
    script.onerror = () => reject(new Error("Failed to load Calendly script"));
    document.body.appendChild(script);
  });
}

/** Opens Calendly scheduling in a modal overlay. Falls back to a new tab. */
export async function openCalendlyPopup(url: string): Promise<void> {
  if (typeof window === "undefined") {
    return;
  }

  try {
    await loadStylesheet(CALENDLY_CSS);
    await loadScript(CALENDLY_JS);

    if (!window.Calendly?.initPopupWidget) {
      throw new Error("Calendly widget unavailable");
    }

    window.Calendly.initPopupWidget({ url });
  } catch {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
