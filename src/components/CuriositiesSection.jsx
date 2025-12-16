import { useEffect, useState } from "react";

//components
import { CuriosityCard } from "./CuriosityCard";

//data
import { dataCategories } from "../data/counters";

//language
import { useLanguage } from "../i18n/LanguageContext";

//css
import "./CuriositiesSection.css"

export function CuriositiesSection({ activeCategoryId, onClearCategory }) {

   const { lang } = useLanguage();

   //list of all curiosities from all categories
    const allItems = dataCategories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      sectionId: category.id,
      sectionEmoji: category.emoji,
    }))
  );

  const activeCategory = dataCategories.find(
    (cat) => cat.id === activeCategoryId
  );

  const itemsToShow = activeCategory
    ? allItems.filter((item) => item.sectionId === activeCategoryId)
    : allItems;

  const title = activeCategory
    ? activeCategory.title[lang]
    : lang === "it"
    ? "Tutte le curiosità"
    : "All curiosities";

  const subtitle = activeCategory
    ? activeCategory.subtitle[lang]
    : lang === "it"
    ? `${allItems.length} curiosità in tempo reale`
    : `${allItems.length} curiosities in real time`;

  //seconds “spent today” (approximate)
  const [secondsToday, setSecondsToday] = useState(() => {
    const now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  });

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsToday((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="curiosities-container">
    
         <div className="curiosities-header">
      <div>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>

      {activeCategory && (
        <button
          type="button"
          className="show-all-button"
          onClick={onClearCategory}
        >
          {lang === "it" ? "Mostra tutte" : "Show all"}
        </button>
      )}
    </div>
    
          <div className="curiosities-row">
            {itemsToShow.map((item) => (
              <CuriosityCard key={item.id} item={item} lang={lang} secondsToday={secondsToday}/>
        ))}
      </div>
    
        </div>
  );
}
