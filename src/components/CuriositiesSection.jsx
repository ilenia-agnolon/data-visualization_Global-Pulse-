//components
import { CuriosityCard } from "./CuriosityCard";

//data
import { dataCategories } from "../data/counters";

//language
import { useLanguage } from "../i18n/LanguageContext";

//css
import "./CuriositiesSection.css"

export function CuriositiesSection() {

   const { lang } = useLanguage();

   //list of all curiosities from all categories
    const allItems = dataCategories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      sectionId: category.id,
      sectionEmoji: category.emoji,
    }))
  );

  return (
    <div className="curiosities-container">
    
          <h3>{lang === "it" ? "Tutte le curiosità" : "All curiosities"}</h3>
          <h4>{lang === "it"
          ? `${allItems.length} curiosità in tempo reale`
          : `${allItems.length} curiosities in real time`}</h4>
    
          <div className="curiosities-row">
            {allItems.map((item) => (
              <CuriosityCard key={item.id} item={item} lang={lang} />
        ))}
      </div>
    
        </div>
  );
}
