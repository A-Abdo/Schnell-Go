
const translations = {
    en: "Fast delivery from restaurants and local shops in Leipzig — Order easily in your language.",
    de: "Schnelle Lieferung von Restaurants und lokalen Geschäften in Leipzig – Bestellen Sie einfach in Ihrer Sprache.",
    es: "Entrega rápida de restaurantes y tiendas locales en Leipzig: pide fácilmente en tu idioma.",
    ar: "توصيل سريع من المطاعم والمتاجر المحلية في لايبزيغ — اطلب بلغتك بسهولة."
};

function setLanguage(lang) {
    document.getElementById("description").innerText = translations[lang];
}

// Set default language
setLanguage('en');
