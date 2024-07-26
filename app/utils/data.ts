import PetitPalais from "@/public/assets/aktuelle-projekte/petit-palais.svg";
import PetitDisplay from "@/public/assets/aktuelle-projekte/petit-display.png";
import Name_138 from "@/public/assets/aktuelle-projekte/138-name.svg";
import Display_138 from "@/public/assets/aktuelle-projekte/138-display.png";
import PetitDetailDisplay from "@/public/assets/aktuelle-projekte/petit-detail-display.png";
import PetitPhaseImage from "@/public/assets/aktuelle-projekte/petit-phaseImage.png";
import PetitArchitektur from "@/public/assets/aktuelle-projekte/petit-architektur.png";
import PetitInterior from "@/public/assets/aktuelle-projekte/petit-interior.png";
import PetitBesonderheiten from "@/public/assets/aktuelle-projekte/petit-besonderheiten.png";

const aktuelleprojekte = [
  {
    id: "petit-palais",
    projectName: PetitPalais,
    displayImage: PetitDisplay,
    units: "11 verfügbare Einheiten",
    space: "Von 112 bis 235 m2",
    type: "Classic architecture Modernly interpreted",
    area: "Hamburg Uhlenhorst",
    detailDisplay: PetitDetailDisplay,
    philosophie: `Die Philosophie des Petit Palais erschließt sich von ganz allein – durch die elegante Architektur, die außergewöhnlich schöne Lage an der Alster und den besonderen Lifestyle in diesem Quartier.`,
    unitMetrics: {
      wohnungen: 11,
      penthouse: 1,
      "zur-alster": "3 min",
      stellplätze: 11,
    },
    phaseImage: PetitPhaseImage,
    architektur: {
      displayImage: PetitArchitektur,
      title: "Die Schönheit klassischer Jugendstilarchitektur",
      description1:
        "Das elegante Petit Palais ist ein neu erbautes  Mehrfamilienhaus, das im schönsten | Teil des Uhlenhorster Hofwegs liegt. Mit seiner weißen Fassade, seinen dezenten | Erkern und seiner  klaren Linienführung fügt es sich perfekt in die Reihe der angrenzenden historischen Jugendstilbauten ein. Dabei zeigt es einen eigenen Charakter und ergänzt das Straßenbild um schöne Details.",
      description2:
        "In allen seinen acht Stockwerken treffen Charme und Weite traditioneller |  Altbauten auf den Komfort und die Funktionalität der heutigen Zeit. Freiheit bietet | auch der Ausblick aus  den Obergeschossen des Petit Palais. So präsentiert sich | ein schöner Blick ins Grüne und macht die Wechsel der Jahreszeiten unmittelbar  erlebbar. In den durch eine Fußbodenheizung gewärmten  Wohnräumen sorgt | ein hochwertiger Parkettboden für einen eleganten Charakter. Bäder aus | Naturstein erfüllen hohe Ansprüche. In einer Tiefgarage bieten 11 Stellplätze |  weiteren Komfort.",
    },

    interior: {
      displayImage: PetitInterior,
      title: "KLASSISCHE BAUKULTUR | modern INTERPRETIERT",
      description1:
        "Dekorativer Naturstein, Kiesbeläge und moderne Bodenstrahler sorgen dafür, | dass das gute Wohngefühl bereits auf dem Grundstück beginnt.",
      description2:
        "Es sind die kleinen Dinge, die ein Bild einzigartig machen – so auch im | Petit Palais. Vom Naturstein im Treppenhaus bis zum Fischgrätparkett in allen | Wohnungen, von den Dornbracht-Armaturen in den Badezimmern bis zum | Bauhaus-Fenstergriff, von der eleganten Außenleuchte bis zur noblen | Aufzug-Ausstattung – jedes Detail hier ist mit viel Liebe ausgewählt und | Teil eines vollkommenen Ganzen.",
    },
    besonderheiten: {
      displayImage: PetitBesonderheiten,
      title: "Das Beste | Aus zwei Epochen",
      description1:
        "Historische Baukultur findet sich hier charmant zitiert – in Räumen, die ihren hanseatisch | traditionellen Vorbildern in nichts nachstehen und dabei ebenso repräsentativ wie | charakteristisch sind. Kombiniert mit morderner Haustechnik ergibt sich so ein Konzept, das | qualitativ Maßstäbe setzt und das Leben hier zu etwas Besonderem macht.",
      description2:
        "Wer die Schönheit klassischer Jugendstilarchitektur liebt und dabei | gerne viel Grün, Wasser und urbanen Lifestyle vor der eigenen Tür | weiß, der wird sich im Petit Palais mehr als zu Hause fühlen.",
    },
  },

  {
    id: "138",
    projectName: Name_138,
    displayImage: Display_138,
    units: "24 Einheiten und 2 Penthäuser",
    space: "Con 28 bis 255 m2",
    type: "Nahe der Alster, mitten im Leben, umgeben von Schönem.",
    area: "Hamburg Harvestehude",
  },
];

const Ankaufsprofil = [
  {
    name: "Projektentwicklung",
    "asset-klaseen": "Wohnen / Gewerbe / Ferienimmobilien / Logistik",
    standorte:
      "Hamburg & Umland / Bremen / Hannover / Lüneburg / Sylt sowie weitere Nord- & Ostseeregionen",
    mikrolagen: "Mittlere bis sehr gute Lagen sowie aufstrebende Lage",
    maßnahmen:
      "Abriss & Neubau / Sanierung / Revitalisierung / Baurechtschaffung",
    kriterien:
      "WALT < 10 Jahre / BGF > 1.000 qm / Grundstück > 500 qm / mit & ohne Planrecht",
    investitionsvolumen: "Bis 75 Mio. Euro",
    download: "/",
  },

  {
    name: "Bestandsimmobilien",
    "asset-klaseen": "Wohnen / Gewerbe / Ferienimmobilien / Logistik",
    standorte:
      "Hamburg & Umland / Bremen / Hannover / Lüneburg / Sylt sowie weitere Nord- & Ostseeregionen",
    mikrolagen: "Mittlere bis sehr gute Lagen sowie aufstrebende Lage",
    maßnahmen:
      "Abriss & Neubau / Sanierung / Revitalisierung / Baurechtschaffung",
    kriterien:
      "WALT < 10 Jahre / BGF > 1.000 qm / Grundstück > 500 qm / mit & ohne Planrecht",
    investitionsvolumen: "Bis 75 Mio. Euro",
    download: "/",
  },
];

export { aktuelleprojekte, Ankaufsprofil };
