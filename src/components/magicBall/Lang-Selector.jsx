import { useTranslation } from "react-i18next";

import "../../styles/components/magicBall/Lang-Selector.scss";

const languages = [
  { code: "en", lang: "En" },
  { code: "ua", lang: "Ua" },
  { code: "deu", lang: "Deu" },
  { code: "fre", lang: "Fre" },
];

const LangSelector = () => {
  const { i18n } = useTranslation("global");
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="lang-selector">
      {languages.map((lng) => {
        return (
          <button
            key={`${lng.code}`}
            className={
              lng.code === i18n.language
                ? "lang-selector__btn selected"
                : "lang-selector__btn"
            }
            onClick={() => changeLang(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LangSelector;
