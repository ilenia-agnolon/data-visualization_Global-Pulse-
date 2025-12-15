// src/data/counters.js

export const dataCategories = [
  // 🧬 HUMAN HYPER PULSE
  {
    id: "human_hyper_pulse",
    emoji: "🧬",
    title: {
      it: "Pulsazione Umana",
      en: "Human Hyper Pulse",
    },
    subtitle: {
      it: "Ritmi e processi del corpo umano",
      en: "Rhythms and processes of the human body",
    },
    info: {
      source: "World Health Organization (WHO) + fisiologia umana (stima)",
      url: "https://www.who.int/",
      note_it:
        "Valori indicativi/stimati da medie fisiologiche e popolazione globale; non sono misure in tempo reale.",
      note_en:
        "Indicative/estimated values from physiological averages and global population; not real-time measurements.",
    },
    graphStyle: "data_rain",
    items: [
      {
        id: "heartbeats",
        emoji: "❤️",
        title: { it: "Battiti cardiaci globali", en: "Global heartbeats" },
        description: {
          it: "Cuori che battono nel mondo in questo istante.",
          en: "Hearts beating worldwide in this moment.",
        },
        ratePerSecond: 8300000000,
        unit: { it: "battiti/sec", en: "beats/sec" },
      },
      {
        id: "breaths",
        emoji: "😮‍💨",
        title: { it: "Respiri globali", en: "Global breaths" },
        description: {
          it: "Respiri effettuati dall'umanità ogni secondo.",
          en: "Breaths taken by humanity each second.",
        },
        ratePerSecond: 230000000,
        unit: { it: "respiri/sec", en: "breaths/sec" },
      },
      {
        id: "cells_regenerated",
        emoji: "🧫",
        title: { it: "Cellule rigenerate", en: "Cells regenerated" },
        description: {
          it: "Cellule che si rigenerano nel corpo umano.",
          en: "Cells regenerated in the human body.",
        },
        ratePerSecond: 25000000,
        unit: { it: "cellule/sec", en: "cells/sec" },
      },
      {
        id: "neural_firings",
        emoji: "⚡",
        title: { it: "Impulsi neurali", en: "Neural impulses" },
        description: {
          it: "Attività elettrica nel cervello umano.",
          en: "Electrical activity firing in the brain.",
        },
        ratePerSecond: 100000000000,
        unit: { it: "impulsi/sec", en: "impulses/sec" },
      },
      {
        id: "red_blood_cells",
        emoji: "🩸",
        title: {
          it: "Globuli rossi prodotti",
          en: "Red blood cells produced",
        },
        description: {
          it: "Globuli rossi creati dal midollo osseo.",
          en: "Red blood cells created by bone marrow.",
        },
        ratePerSecond: 240000000,
        unit: { it: "cellule/sec", en: "cells/sec" },
      },
      {
        id: "calories_burned",
        emoji: "🔥",
        title: { it: "Calorie bruciate", en: "Calories burned" },
        description: {
          it: "Calorie consumate dall'umanità.",
          en: "Calories burned by humanity.",
        },
        ratePerSecond: 3000000,
        unit: { it: "kcal/sec", en: "kcal/sec" },
      },
      {
        id: "chemical_reactions",
        emoji: "🧪",
        title: { it: "Reazioni chimiche", en: "Chemical reactions" },
        description: {
          it: "Reazioni all'interno del corpo umano.",
          en: "Chemical reactions inside the human body.",
        },
        ratePerSecond: 3600000000000000,
        unit: { it: "reazioni/sec", en: "reactions/sec" },
      },
      {
        id: "synapses",
        emoji: "🧠",
        title: { it: "Sinapsi attivate", en: "Synapses fired" },
        description: {
          it: "Connessioni cerebrali attive.",
          en: "Brain synapses firing.",
        },
        ratePerSecond: 100000000000000,
        unit: { it: "sinapsi/sec", en: "synapses/sec" },
      },
      {
        id: "falling_asleep",
        emoji: "😴",
        title: {
          it: "Persone che si addormentano",
          en: "People falling asleep",
        },
        description: {
          it: "Persone che entrano nel sonno in questo momento.",
          en: "People drifting into sleep right now.",
        },
        ratePerSecond: 90,
        unit: { it: "persone/sec", en: "people/sec" },
      },
      {
        id: "smiles",
        emoji: "😊",
        title: { it: "Sorrisi globali", en: "Global smiles" },
        description: {
          it: "Sorrisi condivisi nel mondo ogni secondo.",
          en: "Smiles shared across the world each second.",
        },
        ratePerSecond: 8000000,
        unit: { it: "sorrisi/sec", en: "smiles/sec" },
      },
    ],
  },

  // 🌍 PLANET TURBO FLOW
  {
    id: "planet_flow",
    emoji: "🌍",
    title: {
      it: "Flusso del Pianeta",
      en: "Planet Turbo Flow",
    },
    subtitle: {
      it: "Fenomeni naturali e planetari",
      en: "Natural and planetary phenomena",
    },
    info: {
      source: "NASA Earth Observatory / NOAA / USGS (stima)",
      url: "https://earthobservatory.nasa.gov/",
      note_it:
        "Valori indicativi/stimati basati su ordini di grandezza e medie geofisiche; non sono sensori live globali.",
      note_en:
        "Indicative/estimated values based on orders of magnitude and geophysical averages; not global live sensing.",
    },
    graphStyle: "data_rain",
    items: [
      {
        id: "rain_drops",
        emoji: "🌧",
        title: { it: "Gocce di pioggia", en: "Rain drops" },
        description: {
          it: "Gocce che cadono sulla Terra.",
          en: "Rain drops falling on Earth.",
        },
        ratePerSecond: 160000000000000000,
        unit: { it: "gocce/sec", en: "drops/sec" },
      },
      {
        id: "evaporation",
        emoji: "🌊",
        title: { it: "Evaporazione globale", en: "Global evaporation" },
        description: {
          it: "Acqua che ritorna in atmosfera.",
          en: "Water evaporating into the atmosphere.",
        },
        ratePerSecond: 580000000000,
        unit: { it: "litri/sec", en: "liters/sec" },
      },
      {
        id: "lightning",
        emoji: "⚡",
        title: { it: "Fulmini globali", en: "Global lightning" },
        description: {
          it: "Scariche elettriche sulla Terra.",
          en: "Lightning strikes around the planet.",
        },
        ratePerSecond: 44,
        unit: { it: "eventi/sec", en: "events/sec" },
      },
      {
        id: "micro_quakes",
        emoji: "🌪",
        title: { it: "Micro-terremoti", en: "Micro-earthquakes" },
        description: {
          it: "Piccole vibrazioni della crosta terrestre.",
          en: "Small seismic events worldwide.",
        },
        ratePerSecond: 2,
        unit: { it: "eventi/sec", en: "events/sec" },
      },
      {
        id: "plant_cells_growth",
        emoji: "🌱",
        title: {
          it: "Cellule vegetali in crescita",
          en: "Growing plant cells",
        },
        description: {
          it: "Crescita delle piante nel mondo.",
          en: "Plant cells growing globally.",
        },
        ratePerSecond: 90000000000,
        unit: { it: "cellule/sec", en: "cells/sec" },
      },
      {
        id: "water_molecules_air",
        emoji: "☁️",
        title: {
          it: "Molecole d'acqua nell'aria",
          en: "Water molecules rising",
        },
        description: {
          it: "Molecole che entrano nell'atmosfera.",
          en: "Water molecules entering the air.",
        },
        ratePerSecond: 1000000000000000000000,
        unit: { it: "molecole/sec", en: "molecules/sec" },
      },
      {
        id: "solar_energy_absorbed",
        emoji: "🔆",
        title: {
          it: "Energia solare assorbita",
          en: "Solar energy absorbed",
        },
        description: {
          it: "Energia che colpisce la superficie della Terra.",
          en: "Solar energy hitting Earth's surface.",
        },
        ratePerSecond: 174000000000000000000,
        unit: { it: "joule/sec", en: "joules/sec" },
      },
      {
        id: "grass_growth",
        emoji: "🌾",
        title: { it: "Erba che cresce", en: "Grass growing" },
        description: {
          it: "Crescita delle superfici erbose.",
          en: "Grass expanding worldwide.",
        },
        ratePerSecond: 13000000000,
        unit: { it: "cellule/sec", en: "cells/sec" },
      },
      {
        id: "bacteria_reproduction",
        emoji: "🦠",
        title: {
          it: "Batteri che si riproducono",
          en: "Reproducing bacteria",
        },
        description: {
          it: "Crescita batterica negli ecosistemi.",
          en: "Bacterial reproduction in ecosystems.",
        },
        ratePerSecond: 400000000000000,
        unit: { it: "divisioni/sec", en: "divisions/sec" },
      },
      {
        id: "air_currents",
        emoji: "💨",
        title: {
          it: "Correnti d'aria globali",
          en: "Global air currents",
        },
        description: {
          it: "Movimento dell'atmosfera terrestre.",
          en: "Movement of Earth's atmosphere.",
        },
        ratePerSecond: 100000000000000000,
        unit: { it: "unità/sec", en: "units/sec" },
      },
    ],
  },

  // 🌌 COSMIC SURGE
  {
    id: "cosmic_surge",
    emoji: "🌌",
    title: {
      it: "Ondata Cosmica",
      en: "Cosmic Surge",
    },
    subtitle: {
      it: "Fenomeni astrofisici e particelle invisibili",
      en: "Astrophysical phenomena and invisible particles",
    },
    info: {
      source: "NASA / ESA / fisica delle particelle (stima)",
      url: "https://science.nasa.gov/",
      note_it:
        "Valori indicativi/stimati da grandezze astrofisiche tipiche (raggi cosmici, fotoni, neutrini); non sono conteggi live.",
      note_en:
        "Indicative/estimated values from typical astrophysical magnitudes (cosmic rays, photons, neutrinos); not live counts.",
    },
    graphStyle: "data_rain",
    items: [
      {
        id: "cosmic_rays",
        emoji: "✨",
        title: { it: "Raggi cosmici", en: "Cosmic rays" },
        description: {
          it: "Particelle ad alta energia che colpiscono la Terra.",
          en: "High-energy particles striking Earth.",
        },
        ratePerSecond: 1000000000000,
        unit: { it: "particelle/sec", en: "particles/sec" },
      },
      {
        id: "solar_photons",
        emoji: "☀️",
        title: { it: "Fotoni solari", en: "Solar photons" },
        description: {
          it: "Luce del Sole che arriva sulla Terra.",
          en: "Sunlight photons arriving at Earth.",
        },
        ratePerSecond: 2000000000000000000,
        unit: { it: "fotoni/sec", en: "photons/sec" },
      },
      {
        id: "meteors",
        emoji: "🌠",
        title: { it: "Meteore atmosferiche", en: "Atmospheric meteors" },
        description: {
          it: "Meteoroidi che bruciano nell'atmosfera.",
          en: "Meteors burning in the atmosphere.",
        },
        ratePerSecond: 16,
        unit: { it: "eventi/sec", en: "events/sec" },
      },
      {
        id: "neutrinos",
        emoji: "💫",
        title: { it: "Neutrini", en: "Neutrinos" },
        description: {
          it: "Particelle che attraversano ogni corpo.",
          en: "Particles passing through everything.",
        },
        ratePerSecond: 6000000000000000000,
        unit: { it: "particelle/sec", en: "particles/sec" },
      },
      {
        id: "cosmic_expansion",
        emoji: "🌀",
        title: {
          it: "Espansione dell'universo",
          en: "Universe expansion",
        },
        description: {
          it: "Lo spazio stesso che si espande.",
          en: "Space itself expanding.",
        },
        ratePerSecond: 70,
        unit: { it: "km/sec/MPc", en: "km/sec/MPc" },
      },
      {
        id: "atoms_vibrating",
        emoji: "⚛️",
        title: { it: "Atomi che vibrano", en: "Vibrating atoms" },
        description: {
          it: "Movimento termico degli atomi.",
          en: "Thermal vibration of atoms.",
        },
        ratePerSecond: 100000000000000000000000,
        unit: { it: "vibrazioni/sec", en: "vibrations/sec" },
      },
      {
        id: "cmb_radiation",
        emoji: "🌑",
        title: {
          it: "Radiazione cosmica di fondo",
          en: "Cosmic background radiation",
        },
        description: {
          it: "Eco del Big Bang che permea l'universo.",
          en: "Echo of the Big Bang across the universe.",
        },
        ratePerSecond: 42000000000000000,
        unit: { it: "fotoni/sec", en: "photons/sec" },
      },
      {
        id: "stellar_photons",
        emoji: "⭐",
        title: { it: "Fotoni stellari", en: "Stellar photons" },
        description: {
          it: "Luce emessa dalle stelle vicine.",
          en: "Light emitted by nearby stars.",
        },
        ratePerSecond: 900000000000000000,
        unit: { it: "fotoni/sec", en: "photons/sec" },
      },
      {
        id: "stellar_events",
        emoji: "🔭",
        title: { it: "Eventi stellari", en: "Stellar events" },
        description: {
          it: "Micro-flare, eruzioni e attività stellare.",
          en: "Micro-flares and stellar activity.",
        },
        ratePerSecond: 1000000,
        unit: { it: "eventi/sec", en: "events/sec" },
      },
      {
        id: "interstellar_particles",
        emoji: "☄️",
        title: {
          it: "Particelle interstellari",
          en: "Interstellar particles",
        },
        description: {
          it: "Materiale che viaggia tra le stelle.",
          en: "Material drifting between stars.",
        },
        ratePerSecond: 800000000000,
        unit: { it: "particelle/sec", en: "particles/sec" },
      },
    ],
  },

  // 💻 DIGITAL FIREHOSE
  {
    id: "digital_firehose",
    emoji: "💻",
    title: {
      it: "Getto Digitale",
      en: "Digital Firehose",
    },
    subtitle: {
      it: "Flussi di dati e attività online",
      en: "Data streams and online activity",
    },
    info: {
      source: "ITU / report traffico Internet + stime piattaforme (stima)",
      url: "https://www.itu.int/",
      note_it:
        "Valori indicativi/stimati da report su traffico e utilizzo servizi; non sono conteggi live globali.",
      note_en:
        "Indicative/estimated values from traffic and service-usage reports; not global live counts.",
    },
    graphStyle: "data_rain",
    items: [
      {
        id: "internet_packets",
        emoji: "🌐",
        title: { it: "Pacchetti internet", en: "Internet packets" },
        description: {
          it: "Dati che scorrono nella rete globale.",
          en: "Data packets flowing worldwide.",
        },
        ratePerSecond: 300000000000,
        unit: { it: "pacchetti/sec", en: "packets/sec" },
      },
      {
        id: "emails_sent",
        emoji: "📧",
        title: { it: "Email inviate", en: "Emails sent" },
        description: {
          it: "Email spedite in tutto il mondo.",
          en: "Emails sent worldwide.",
        },
        ratePerSecond: 3500000,
        unit: { it: "email/sec", en: "emails/sec" },
      },
      {
        id: "social_scrolls",
        emoji: "📱",
        title: { it: "Scroll sui social", en: "Social scrolls" },
        description: {
          it: "Feed aggiornati dagli utenti.",
          en: "Feeds scrolled by users.",
        },
        ratePerSecond: 4500000,
        unit: { it: "scroll/sec", en: "scrolls/sec" },
      },
      {
        id: "music_streams",
        emoji: "🎵",
        title: { it: "Ascolti musicali", en: "Music streams" },
        description: {
          it: "Brani ascoltati sui servizi di streaming.",
          en: "Tracks played on streaming platforms.",
        },
        ratePerSecond: 800000,
        unit: { it: "ascolti/sec", en: "plays/sec" },
      },
      {
        id: "videos_uploaded",
        emoji: "📹",
        title: { it: "Video caricati", en: "Videos uploaded" },
        description: {
          it: "Secondi di video caricati online.",
          en: "Seconds of video uploaded online.",
        },
        ratePerSecond: 500,
        unit: { it: "sec_video/sec", en: "sec_video/sec" },
      },
      {
        id: "ai_tokens",
        emoji: "🤖",
        title: { it: "Token AI generati", en: "AI tokens generated" },
        description: {
          it: "Testo creato da modelli di intelligenza artificiale.",
          en: "Text generated by AI models.",
        },
        ratePerSecond: 220000000,
        unit: { it: "token/sec", en: "tokens/sec" },
      },
      {
        id: "downloads",
        emoji: "💾",
        title: { it: "Download globali", en: "Global downloads" },
        description: {
          it: "File scaricati in tutto il mondo.",
          en: "Files downloaded worldwide.",
        },
        ratePerSecond: 3200000,
        unit: { it: "download/sec", en: "downloads/sec" },
      },
      {
        id: "search_queries",
        emoji: "🔍",
        title: { it: "Ricerche online", en: "Search queries" },
        description: {
          it: "Ricerche effettuate dagli utenti.",
          en: "Searches performed by users.",
        },
        ratePerSecond: 100000,
        unit: { it: "ricerche/sec", en: "searches/sec" },
      },
      {
        id: "online_purchases",
        emoji: "🛒",
        title: { it: "Acquisti online", en: "Online purchases" },
        description: {
          it: "Prodotti acquistati su internet.",
          en: "Products purchased online.",
        },
        ratePerSecond: 100000,
        unit: { it: "acquisti/sec", en: "purchases/sec" },
      },
      {
        id: "photos_taken",
        emoji: "📸",
        title: { it: "Foto scattate", en: "Photos taken" },
        description: {
          it: "Foto scattate dagli smartphone.",
          en: "Photos taken around the world.",
        },
        ratePerSecond: 3000000,
        unit: { it: "foto/sec", en: "photos/sec" },
      },
    ],
  },

  // 🎮 GAMING FRENZY
  {
    id: "gaming_frenzy",
    emoji: "🎮",
    title: {
      it: "Frenesia Videoludica",
      en: "Gaming Frenzy",
    },
    subtitle: {
      it: "Numeri dal mondo dei videogiochi",
      en: "Numbers from the gaming world",
    },
    info: {
      source: "Newzoo / report industria gaming + stime utilizzo (stima)",
      url: "https://newzoo.com/",
      note_it:
        "Valori indicativi/stimati da report di settore e modelli di utilizzo; non sono misure live dei singoli giochi.",
      note_en:
        "Indicative/estimated values from industry reports and usage models; not per-game live measurements.",
    },
    graphStyle: "data_rain",
    items: [
      {
        id: "controller_inputs",
        emoji: "🎮",
        title: { it: "Input da controller", en: "Controller inputs" },
        description: {
          it: "Pulsanti premuti nei videogiochi.",
          en: "Buttons pressed in games.",
        },
        ratePerSecond: 500000000,
        unit: { it: "input/sec", en: "inputs/sec" },
      },
      {
        id: "mouse_clicks",
        emoji: "🖱",
        title: {
          it: "Click nei videogiochi",
          en: "Mouse clicks in games",
        },
        description: {
          it: "Click effettuati dai giocatori.",
          en: "Clicks made by players.",
        },
        ratePerSecond: 10000000000,
        unit: { it: "click/sec", en: "clicks/sec" },
      },
      {
        id: "active_players",
        emoji: "👥",
        title: { it: "Videogiocatori attivi", en: "Active gamers" },
        description: {
          it: "Persone che stanno giocando ora.",
          en: "People playing right now.",
        },
        ratePerSecond: 300000,
        unit: { it: "giocatori/sec", en: "players/sec" },
      },
      {
        id: "stream_hours",
        emoji: "🎧",
        title: {
          it: "Ore guardate in streaming",
          en: "Streaming hours watched",
        },
        description: {
          it: "Ore di Twitch/YouTube Gaming consumate.",
          en: "Hours watched across streaming platforms.",
        },
        ratePerSecond: 120000,
        unit: { it: "ore/sec", en: "hours/sec" },
      },
      {
        id: "play_hours",
        emoji: "🕹",
        title: {
          it: "Ore di gioco accumulate",
          en: "Playtime accumulated",
        },
        description: {
          it: "Ore giocate globalmente.",
          en: "Total playtime generated.",
        },
        ratePerSecond: 1000000,
        unit: { it: "ore/sec", en: "hours/sec" },
      },
      {
        id: "server_attacks",
        emoji: "⚙️",
        title: {
          it: "Server di gioco attaccati",
          en: "Game servers attacked",
        },
        description: {
          it: "Tentativi di attacco ai server online.",
          en: "Hack attempts against online game servers.",
        },
        ratePerSecond: 20,
        unit: { it: "attacchi/sec", en: "attacks/sec" },
      },
      {
        id: "games_produced",
        emoji: "📦",
        title: { it: "Videogiochi prodotti", en: "Video games produced" },
        description: {
          it: "Giochi creati dall'industria globale.",
          en: "Games produced globally.",
        },
        ratePerSecond: 4,
        unit: { it: "giochi/sec", en: "games/sec" },
      },
      {
        id: "minecraft_blocks",
        emoji: "🧱",
        title: {
          it: "Blocchi piazzati in Minecraft",
          en: "Blocks placed in Minecraft",
        },
        description: {
          it: "Blocchi piazzati dai giocatori.",
          en: "Blocks placed by players.",
        },
        ratePerSecond: 20000000,
        unit: { it: "blocchi/sec", en: "blocks/sec" },
      },
      {
        id: "esport_matches",
        emoji: "🏆",
        title: { it: "Partite eSport", en: "eSports matches" },
        description: {
          it: "Partite competitive giocate nel mondo.",
          en: "Competitive matches played globally.",
        },
        ratePerSecond: 300,
        unit: { it: "match/sec", en: "matches/sec" },
      },
      {
        id: "gaming_market_value",
        emoji: "💰",
        title: {
          it: "Valore del mercato videoludico",
          en: "Gaming market value",
        },
        description: {
          it: "Valore generato dall'industria del gaming.",
          en: "Value generated by the gaming market.",
        },
        ratePerSecond: 1500000,
        unit: { it: "USD/sec", en: "USD/sec" },
      },
    ],
  },
];
