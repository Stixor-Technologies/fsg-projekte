import PetitPalais from "@/public/assets/aktuelle-projekte/petit-palais.svg";
import PetitDisplay from "@/public/assets/aktuelle-projekte/petit-display.png";
import Name_138 from "@/public/assets/aktuelle-projekte/138-name.svg";
import Display_138 from "@/public/assets/aktuelle-projekte/138-display.png";

const aktuelleprojekte = [
  {
    id: 1,
    projectName: PetitPalais,
    displayImage: PetitDisplay,
    units: "11 verfügbare Einheiten",
    space: "Von 112 bis 235 m2",
    type: "Classic architecture Modernly interpreted",
    area: "Hamburg Uhlenhorst",
  },

  {
    id: 2,
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
