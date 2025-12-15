import { useLanguage } from "../i18n/LanguageContext";

//css
import "./Hero.css"

export function Hero() {

  const { lang, setLang } = useLanguage();

  return (
    <div className="hero-container">

      {/* TOGGLE LANGUAGE */}
      <div className="hero-lang-toggle">
        <button
          className={lang === "it" ? "lang-btn lang-btn--active" : "lang-btn"}
          onClick={() => setLang("it")}
        >
          ITA
        </button>
        <button
          className={lang === "en" ? "lang-btn lang-btn--active" : "lang-btn"}
          onClick={() => setLang("en")}
        >
          ENG
        </button>
      </div>
      
      {/* TXT */}
      <h1 className="white-txt">{lang === "it" ? "Il mondo si muove." : "The world is moving."}</h1>
      <h1 className="orange-txt">{lang === "it" ? "Osserva i ritmi del mondo." : "Watch the world’s rhythms."}</h1>

      <h2 className="hero-subtitle">{lang === "it"
  ? "Una raccolta di fenomeni, stime e curiosità che scorrono senza sosta."
  : "A collection of phenomena, estimates and curiosities that never stop."}
</h2>
      
      <div className="hero-live-row">
        {/* live dot */}
        <span className="hero-live-dot" />
        <span className="hero-live-label">{lang === "it" ? "Aggiornamento continuo" : "Continuous update"}
</span>
      </div>

    </div>
  );
}
