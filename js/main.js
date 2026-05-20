//------------------------ Change copyright year ------------------------//
var date = new Date();
if (date.getFullYear() > 2024) {
  document.querySelector("#copyright-year").innerText =
    " - " + date.getFullYear();
}

// Initialize SimpleLightbox
var lightbox = new SimpleLightbox('a[data-lightbox="gallery"]');

//------------------------ i18n: EN / RU / ET ------------------------//
const translations = {
  en: {
    "nav.about": "About me",
    "nav.services": "Services",
    "nav.cameras": "Cameras",
    "nav.gallery": "Gallery",
    "nav.beforeAfter": "Before / After",
    "nav.reviews": "Reviews",
    "nav.contacts": "Contacts",
    "hero.welcome": "Welcome",
    "hero.tagline": "Car Photography & Videography in Estonia",
    "about.text":
      "Hey there! I'm <span class=\"annapurna-sil-bold text-primary\">Artjom</span>, enthusiast with a passion for photography. From snapping shots of sleek sports cars to creating captivating videos, I'm all about capturing the adrenaline-fueled world of automotive excitement. With my editing skills, I can transform your car into a miniature masterpiece, preserving its essence in a whole new way. Check out my work on the website and join me on this thrilling journey through the world of sports cars. Let's turn your automotive dreams into reality, one photo at a time!",
    "seo.tag1": "Car Photography Estonia",
    "seo.tag2": "Automotive Photographer Tallinn",
    "seo.tag3": "Car Videography Estonia",
    "seo.tag4": "BMW Photoshoot Tallinn",
    "seo.tag5": "Porsche Photography Estonia",
    "services.title": "Services",
    "services.subtitle": "What I offer",
    "services.photo.title": "Photo Shoot",
    "services.photo.desc":
      "Professional automotive photography that highlights every detail of your car.",
    "services.reel.title": "Reel Creation",
    "services.reel.desc":
      "Dynamic short-form videos and reels that bring your vehicle to life.",
    "services.social.title": "Social Media Content",
    "services.social.desc":
      "Eye-catching content tailored for Instagram, TikTok and more.",
    "services.priceLabel": "Price",
    "services.price": "By agreement",
    "cameras.title": "Photos Taken with GoPro 9 & Canon EOS 1000D",
    "cameras.text":
      "I use the GoPro Hero 9 and Canon EOS 1000D to take clear, detailed photos of your car. Whether it's moving shots or static views, my cameras help show your car at its best.",
    "cameras.tagline": "Quality images, made just for you",
    "gallery.title": "Gallery",
    "beforeAfter.title": "Before / After Editing",
    "beforeAfter.subtitle": "Drag the slider to see the editing transformation",
    "beforeAfter.before": "Before",
    "beforeAfter.after": "After",
    "reviews.title": "Google Reviews",
    "reviews.subtitle": "What clients say about Fotocar",
    "reviews.r1.text":
      '"Amazing photos of my BMW! Artjom really knows how to capture the soul of a car. Highly recommend."',
    "reviews.r1.author": "— Mark K.",
    "reviews.r2.text":
      '"Professional, fast and creative. The reels he made for our Porsche were incredible."',
    "reviews.r2.author": "— Anna R.",
    "reviews.r3.text":
      '"Best automotive photographer in Tallinn. The editing quality is on another level."',
    "reviews.r3.author": "— Dmitri S.",
    "reviews.cta": "Leave a Google Review",
    "contacts.title": "For inquiries, email me or reach out via social media.",
    "contacts.address": "Address:",
    "contacts.addressValue": "Estonia",
    "contacts.email": "Email:",
    "contacts.phone": "Phone:",
  },
  ru: {
    "nav.about": "Обо мне",
    "nav.services": "Услуги",
    "nav.cameras": "Камеры",
    "nav.gallery": "Галерея",
    "nav.beforeAfter": "До / После",
    "nav.reviews": "Отзывы",
    "nav.contacts": "Контакты",
    "hero.welcome": "Добро пожаловать",
    "hero.tagline": "Фото и видеосъёмка автомобилей в Эстонии",
    "about.text":
      'Привет! Меня зовут <span class="annapurna-sil-bold text-primary">Артём</span>, и я увлечён автомобильной фотографией. От динамичных кадров спорткаров до захватывающих видео — я снимаю мир автомобилей со страстью и вниманием к деталям. Благодаря качественной обработке я превращаю каждое фото в маленький шедевр, сохраняющий характер вашей машины. Загляните в галерею и присоединяйтесь к этому драйвовому путешествию по миру автомобилей. Давайте превратим ваши автомобильные мечты в реальность — кадр за кадром!',
    "seo.tag1": "Автофотосъёмка Эстония",
    "seo.tag2": "Автофотограф Таллинн",
    "seo.tag3": "Видеосъёмка авто Эстония",
    "seo.tag4": "Фотосессия BMW Таллинн",
    "seo.tag5": "Фотосъёмка Porsche Эстония",
    "services.title": "Услуги",
    "services.subtitle": "Что я предлагаю",
    "services.photo.title": "Фотосессия",
    "services.photo.desc":
      "Профессиональная автомобильная фотосъёмка, подчёркивающая каждую деталь вашего автомобиля.",
    "services.reel.title": "Создание Reels",
    "services.reel.desc":
      "Динамичные короткие видео и Reels, которые оживят ваш автомобиль.",
    "services.social.title": "Контент для соцсетей",
    "services.social.desc":
      "Яркий контент, созданный для Instagram, TikTok и других платформ.",
    "services.priceLabel": "Цена",
    "services.price": "По договорённости",
    "cameras.title": "Снято на GoPro 9 и Canon EOS 1000D",
    "cameras.text":
      "Я использую GoPro Hero 9 и Canon EOS 1000D для чётких и детальных снимков вашего автомобиля. Динамика или статика — мои камеры покажут машину с лучшей стороны.",
    "cameras.tagline": "Качественные снимки — лично для вас",
    "gallery.title": "Галерея",
    "beforeAfter.title": "До / После обработки",
    "beforeAfter.subtitle":
      "Перетащите ползунок, чтобы увидеть результат обработки",
    "beforeAfter.before": "До",
    "beforeAfter.after": "После",
    "reviews.title": "Отзывы Google",
    "reviews.subtitle": "Что клиенты говорят о Fotocar",
    "reviews.r1.text":
      "«Потрясающие фото моего BMW! Артём действительно умеет передать душу автомобиля. Рекомендую!»",
    "reviews.r1.author": "— Марк К.",
    "reviews.r2.text":
      "«Профессионально, быстро и креативно. Reels для нашего Porsche получились невероятные.»",
    "reviews.r2.author": "— Анна Р.",
    "reviews.r3.text":
      "«Лучший автофотограф в Таллинне. Качество обработки на высшем уровне.»",
    "reviews.r3.author": "— Дмитрий С.",
    "reviews.cta": "Оставить отзыв в Google",
    "contacts.title": "По вопросам пишите на email или в социальные сети.",
    "contacts.address": "Адрес:",
    "contacts.addressValue": "Эстония",
    "contacts.email": "Эл. почта:",
    "contacts.phone": "Телефон:",
  },
  et: {
    "nav.about": "Minust",
    "nav.services": "Teenused",
    "nav.cameras": "Kaamerad",
    "nav.gallery": "Galerii",
    "nav.beforeAfter": "Enne / Pärast",
    "nav.reviews": "Arvustused",
    "nav.contacts": "Kontakt",
    "hero.welcome": "Tere tulemast",
    "hero.tagline": "Autode foto- ja videograafia Eestis",
    "about.text":
      'Tere! Olen <span class="annapurna-sil-bold text-primary">Artjom</span>, autofotograafia entusiast. Sportautode dünaamilistest kaadritest haaravate videoteni — minu kirg on jäädvustada autode põnevat maailma. Tänu kvaliteetsele töötlusele muudan iga foto väikeseks meistriteoseks, mis säilitab sinu auto olemuse. Vaata minu töid ja liitu selle põneva teekonnaga autode maailmas. Muudame sinu autounistused üheskoos reaalsuseks — üks foto korraga!',
    "seo.tag1": "Autode pildistamine Eestis",
    "seo.tag2": "Autofotograaf Tallinnas",
    "seo.tag3": "Autode videograafia Eestis",
    "seo.tag4": "BMW fotosessioon Tallinnas",
    "seo.tag5": "Porsche pildistamine Eestis",
    "services.title": "Teenused",
    "services.subtitle": "Mida ma pakun",
    "services.photo.title": "Fotosessioon",
    "services.photo.desc":
      "Professionaalne autode pildistamine, mis toob esile iga detaili sinu autol.",
    "services.reel.title": "Reels'ide loomine",
    "services.reel.desc":
      "Dünaamilised lühivideod ja Reels'id, mis äratavad sinu auto ellu.",
    "services.social.title": "Sotsiaalmeedia sisu",
    "services.social.desc":
      "Pilkupüüdev sisu Instagrami, TikToki ja muude platvormide jaoks.",
    "services.priceLabel": "Hind",
    "services.price": "Kokkuleppel",
    "cameras.title": "Pildistatud GoPro 9 ja Canon EOS 1000D-ga",
    "cameras.text":
      "Kasutan GoPro Hero 9 ja Canon EOS 1000D kaameraid selgete ja detailirohkete fotode tegemiseks. Olgu liikuvad kaadrid või staatilised vaated — minu kaamerad näitavad sinu autot parimast küljest.",
    "cameras.tagline": "Kvaliteetsed pildid — just sinu jaoks",
    "gallery.title": "Galerii",
    "beforeAfter.title": "Enne / Pärast töötlust",
    "beforeAfter.subtitle": "Liiguta liugurit, et näha töötluse tulemust",
    "beforeAfter.before": "Enne",
    "beforeAfter.after": "Pärast",
    "reviews.title": "Google'i arvustused",
    "reviews.subtitle": "Mida kliendid Fotocarist räägivad",
    "reviews.r1.text":
      '„Hämmastavad fotod minu BMW-st! Artjom oskab tõeliselt tabada auto hinge. Soovitan soojalt."',
    "reviews.r1.author": "— Mark K.",
    "reviews.r2.text":
      "„Professionaalne, kiire ja loominguline. Meie Porsche jaoks tehtud Reels'id olid uskumatud.\"",
    "reviews.r2.author": "— Anna R.",
    "reviews.r3.text":
      '„Parim autofotograaf Tallinnas. Töötluse kvaliteet on järgmisel tasemel."',
    "reviews.r3.author": "— Dmitri S.",
    "reviews.cta": "Jäta Google'i arvustus",
    "contacts.title":
      "Küsimuste korral kirjuta e-postile või sotsiaalmeediasse.",
    "contacts.address": "Aadress:",
    "contacts.addressValue": "Eesti",
    "contacts.email": "E-post:",
    "contacts.phone": "Telefon:",
  },
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  try {
    localStorage.setItem("fotocar-lang", lang);
  } catch (_) {}
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.getAttribute("data-lang"));
  });
});

(function initLang() {
  let saved = null;
  try {
    saved = localStorage.getItem("fotocar-lang");
  } catch (_) {}
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  const initial =
    saved && translations[saved]
      ? saved
      : translations[browser]
        ? browser
        : "en";
  applyLanguage(initial);
})();

//------------------------ Before / After slider ------------------------//
document.querySelectorAll(".ba-slider").forEach((slider) => {
  const range = slider.querySelector(".ba-range");
  const beforeWrap = slider.querySelector(".ba-before-wrap");
  const beforeImg = slider.querySelector(".ba-before");
  const handle = slider.querySelector(".ba-handle");

  function setPos(value) {
    const pct = Math.max(0, Math.min(100, value));
    beforeWrap.style.width = pct + "%";
    if (beforeImg && pct > 0) {
      // Compensate for the clipped wrapper so the before image stays the same visual size
      beforeImg.style.width = (100 / pct) * 100 + "%";
    }
    handle.style.left = pct + "%";
  }

  if (range) {
    range.addEventListener("input", (e) => setPos(parseFloat(e.target.value)));
    setPos(parseFloat(range.value));
  }
});
