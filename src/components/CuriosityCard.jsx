//css
import "./CuriosityCard.css"

export function CuriosityCard ({ item, lang }) {

   const {
    emoji,
    sectionEmoji,
    title,
    description,
    ratePerSecond,
    unit,
  } = item;

  // numeric format
  const locale = lang === "it" ? "it-IT" : "en-US";
  const formattedRate = ratePerSecond.toLocaleString(locale);

  return (
    <>
     {/* ------- CARD ------- */}
        <div className="curiosities-card-container">

        <div className="main-info">
            {/* ICON */}
            <div className="cc-icon">{emoji || sectionEmoji}</div>
            {/* TITLE */}
            <div className="box-title-and-descrp">
              <h5 className="cc-title">{title[lang]}</h5>
              <p className="cc-description">{description[lang]}</p>
            </div>
        </div>

          {/* DATA */}
          <p className="cc-total"><span className="txt-orange">{formattedRate}</span>{" "}{unit[lang]}</p>
          {/* RATE PER SECOND */}
          <p className="rate-per-second">{lang === "it"
            ? "Incremento stimato al secondo"
            : "Estimated increase per second"}</p>

          {/* GRAPH PLACEHOLDER  */}
          <div className="graph"></div>
         
        </div>
    </>
  );
}
