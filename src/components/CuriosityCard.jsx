//css
import "./CuriosityCard.css"

//compact number: 1.2K, 5.6M, 3.4B
function formatCompactNumber(value, lang) {
  const locale = lang === "it" ? "it-IT" : "en-US";
  return new Intl.NumberFormat(locale, {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
}

export function CuriosityCard ({ item, lang, secondsToday }) {

  const {
    emoji,
    sectionEmoji,
    title,
    description,
    ratePerSecond,
    unit,
  } = item;

  // numeric format
  // const locale = lang === "it" ? "it-IT" : "en-US";

  //estimated total “today”
  const totalToday = ratePerSecond * secondsToday;

  const mainValueCompact = formatCompactNumber(totalToday, lang);

  //split between number and letter (eg: "395.9Bln" → "395.9" + "Bln")
  let numberPart = mainValueCompact;
  let suffixPart = "";

  const match = mainValueCompact.match(/^([\d.,]+)\s*([A-Za-z]+)?$/);
  if (match) {
    numberPart = match[1];         // eg. "274.2"
    suffixPart = match[2] || "";   // eg. "T"
  }

  //unit for the total
  const rawUnit = lang === "it" ? unit.it : unit.en;
  const mainUnitLabel = rawUnit.includes("/sec")
    ? rawUnit.replace("/sec", "")
    : rawUnit;

  //per-second increment (in compact format)
  const rateCompact = formatCompactNumber(ratePerSecond, lang);

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
          <p className="cc-total">

            {/* orange number */}
            <span className="txt-orange cc-number">{numberPart}</span>
            <span className="cc-unit">
              {suffixPart && <span className="cc-total-suffix">{suffixPart}</span>}{" "}{mainUnitLabel}</span>
            
          </p>
          {/* RATE PER SECOND  +XX/sec */}
          <p className="rate-per-second">{lang === "it"
            ? `+${rateCompact} ${unit.it}`
            : `+${rateCompact} ${unit.en}`}</p>

          {/* GRAPH PLACEHOLDER  */}
          <div className="graph"></div>
         
        </div>
    </>
  );
}
