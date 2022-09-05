


let en = require("./translations/en/en.json");
let es = require("./translations/es/es.json");
let sw = require("./translations/sw/sw.json");

const i18n = {
  translations: {
    en,
    es,
    sw,
  },
  defaultLang: "en",
  useBrowserDefault: true,
};

module.exports = i18n;

