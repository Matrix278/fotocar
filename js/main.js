//------------------------ Change copyright year ------------------------//
(function setCopyrightYear() {
  const date = new Date();
  if (date.getFullYear() > 2024) {
    const el = document.querySelector("#copyright-year");
    if (el) el.innerText = " - " + date.getFullYear();
  }
})();

//------------------------ SimpleLightbox ------------------------//
// eslint-disable-next-line no-undef, no-unused-vars
const lightbox = new SimpleLightbox('a[data-lightbox="gallery"]');

//------------------------ i18n: EN / RU / ET (from /locales/*.json) ------------------------//
const SUPPORTED_LANGS = new Set(["en", "ru", "et"]);
const DEFAULT_LANG = "en";
const localeCache = {};

function updateSeoMetadata(dict) {
  if (dict["seo.title"]) {
    document.title = dict["seo.title"];
    const ogTitle = document.querySelector("#meta-og-title");
    const twTitle = document.querySelector("#meta-twitter-title");
    if (ogTitle) ogTitle.setAttribute("content", dict["seo.title"]);
    if (twTitle) twTitle.setAttribute("content", dict["seo.title"]);
  }
  if (dict["seo.description"]) {
    const metaDescription = document.querySelector("#meta-description");
    const ogDescription = document.querySelector("#meta-og-description");
    const twDescription = document.querySelector("#meta-twitter-description");
    if (metaDescription)
      metaDescription.setAttribute("content", dict["seo.description"]);
    if (ogDescription)
      ogDescription.setAttribute("content", dict["seo.description"]);
    if (twDescription)
      twDescription.setAttribute("content", dict["seo.description"]);
  }
}

function syncLangInUrl(lang) {
  const url = new URL(globalThis.location.href);
  if (lang === DEFAULT_LANG) {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", lang);
  }
  globalThis.history.replaceState({}, "", url.toString());
}

async function loadLocale(lang) {
  if (localeCache[lang]) return localeCache[lang];
  const res = await fetch(`locales/${lang}.json`, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Failed to load locale: ${lang}`);
  const dict = await res.json();
  localeCache[lang] = dict;
  return dict;
}

async function applyLanguage(lang) {
  if (!SUPPORTED_LANGS.has(lang)) lang = DEFAULT_LANG;
  let dict;
  try {
    dict = await loadLocale(lang);
  } catch (err) {
    console.error(err);
    if (lang !== DEFAULT_LANG) return applyLanguage(DEFAULT_LANG);
    return;
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  updateSeoMetadata(dict);
  syncLangInUrl(lang);

  try {
    localStorage.setItem("fotocar-lang", lang);
  } catch (err) {
    console.debug("Could not persist language:", err);
  }
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

(function initLang() {
  let saved = null;
  try {
    saved = localStorage.getItem("fotocar-lang");
  } catch (err) {
    console.debug("Could not read saved language:", err);
  }
  const browser = (navigator.language || DEFAULT_LANG)
    .slice(0, 2)
    .toLowerCase();
  const queryLang = new URLSearchParams(globalThis.location.search).get("lang");
  let initial = DEFAULT_LANG;
  if (queryLang && SUPPORTED_LANGS.has(queryLang)) {
    initial = queryLang;
  } else if (saved && SUPPORTED_LANGS.has(saved)) {
    initial = saved;
  } else if (SUPPORTED_LANGS.has(browser)) {
    initial = browser;
  }
  applyLanguage(initial);
})();

//------------------------ Before / After slider (pointer-driven) ------------------------//
document.querySelectorAll(".ba-slider").forEach((slider) => {
  const beforeWrap = slider.querySelector(".ba-before-wrap");
  const beforeImg = slider.querySelector(".ba-before");
  const handle = slider.querySelector(".ba-handle");
  if (!beforeWrap || !handle) return;

  let dragging = false;

  function setPos(pct) {
    const clamped = Math.max(0, Math.min(100, pct));
    beforeWrap.style.width = clamped + "%";
    handle.style.left = clamped + "%";
    if (beforeImg) {
      // Keep "before" image visually the same size as "after" by compensating
      // for the clipped wrapper width.
      if (clamped > 0) {
        beforeImg.style.width = (100 / clamped) * 100 + "%";
      } else {
        beforeImg.style.width = "10000%";
      }
    }
  }

  function pctFromEvent(evt) {
    const rect = slider.getBoundingClientRect();
    const x = (evt.touches ? evt.touches[0].clientX : evt.clientX) - rect.left;
    return (x / rect.width) * 100;
  }

  function onStart(evt) {
    dragging = true;
    slider.classList.add("ba-dragging");
    setPos(pctFromEvent(evt));
    evt.preventDefault();
  }

  function onMove(evt) {
    if (!dragging) return;
    setPos(pctFromEvent(evt));
  }

  function onEnd() {
    dragging = false;
    slider.classList.remove("ba-dragging");
  }

  slider.addEventListener("mousedown", onStart);
  slider.addEventListener("touchstart", onStart, { passive: false });
  globalThis.addEventListener("mousemove", onMove);
  globalThis.addEventListener("touchmove", onMove, { passive: false });
  globalThis.addEventListener("mouseup", onEnd);
  globalThis.addEventListener("touchend", onEnd);

  // Initial position
  setPos(50);
});
