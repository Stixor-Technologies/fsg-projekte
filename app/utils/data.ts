import PetitPalais from "@/public/assets/aktuelle-projekte/petit/petit-palais.svg";
import PetitDisplay from "@/public/assets/aktuelle-projekte/petit/petit-display.png";
import PetitDetailDisplay from "@/public/assets/aktuelle-projekte/petit/petit-detail-display.png";
import PetitPhaseImage from "@/public/assets/aktuelle-projekte/petit/petit-phaseImage.png";
import PetitArchitektur from "@/public/assets/aktuelle-projekte/petit/petit-architektur.png";
import PetitSlider1 from "@/public/assets/aktuelle-projekte/petit/petit-slider-1.png";
import PetitInterior from "@/public/assets/aktuelle-projekte/petit/petit-interior.png";
import PetitModel from "@/public/assets/aktuelle-projekte/petit/petit-model.png";
import PetitBesonderheiten from "@/public/assets/aktuelle-projekte/petit/petit-besonderheiten.png";
import PetitGallery from "@/public/assets/aktuelle-projekte/petit/petit-gallery.png";
import Name_138 from "@/public/assets/aktuelle-projekte/138-name.svg";
import Display_138 from "@/public/assets/aktuelle-projekte/138-display.png";
import DetailDisplay_138 from "@/public/assets/aktuelle-projekte/138/138-detail-dsiplay.png";
import Feature_B_138 from "@/public/assets/aktuelle-projekte/138/138-feature-before.png";
import PhaseImage_138 from "@/public/assets/aktuelle-projekte/138/138-phaseImage.png";
import Bild_138_1 from "@/public/assets/aktuelle-projekte/138/138-bild-1.png";
import Bild_138_2 from "@/public/assets/aktuelle-projekte/138/138-bild-2.png";
import Gallery_138 from "@/public/assets/aktuelle-projekte/138/138-gallery.png";
import Interior_138 from "@/public/assets/aktuelle-projekte/138/138-interior.png";
import Architektur_138 from "@/public/assets/aktuelle-projekte/138/138-architektur.png";
import Slider_138_1 from "@/public/assets/aktuelle-projekte/138/138-slider-1.png";

import Faq1 from "@/public/assets/faq-1.png";

const aktuelleprojekte = [
  {
    id: "petit-palais",
    projectName: PetitPalais,
    displayImage: PetitDisplay,
    detailDisplay: PetitDetailDisplay,
    units: "11 verfügbare Einheiten",
    space: "Von 112 bis 235 m2",
    type: "Classic architecture Modernly interpreted",
    area: "Hamburg Uhlenhorst",
    philosophie: `Die Philosophie des Petit Palais erschließt sich | von ganz allein – durch die elegante Architektur, | die außergewöhnlich schöne Lage an der Alster und | den besonderen Lifestyle in diesem Quartier.`,
    unitMetrics: {
      wohnungen: 11,
      penthouse: 1,
      zuralster: "3 min",
      stellplätze: 11,
    },
    phaseImage: PetitPhaseImage,
    sliderImages: [PetitSlider1, PetitSlider1, PetitSlider1],
    projectPhases: [
      {
        phaseName: "planungsphase",
        phaseNumber: 1,
      },
      {
        phaseName: "BAUGENEHMIGUNG",
        phaseNumber: 2,
      },

      {
        phaseName: "BAUPHASE",
        phaseNumber: 3,
      },

      {
        phaseName: "BEZUGSFERTIG",
        phaseNumber: 4,
      },

      {
        phaseName: "FERTIGSTELLUNG",
        phaseNumber: 5,
      },
    ],
    currentPhase: 3,
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
    model: PetitModel,
    besonderheiten: {
      displayImage: PetitBesonderheiten,
      title: "Das Beste | Aus zwei Epochen",
      description1:
        "Historische Baukultur findet sich hier charmant zitiert – in Räumen, die ihren hanseatisch | traditionellen Vorbildern in nichts nachstehen und dabei ebenso repräsentativ wie | charakteristisch sind. Kombiniert mit morderner Haustechnik ergibt sich so ein Konzept, das | qualitativ Maßstäbe setzt und das Leben hier zu etwas Besonderem macht.",
      description2:
        "Wer die Schönheit klassischer Jugendstilarchitektur liebt und dabei | gerne viel Grün, Wasser und urbanen Lifestyle vor der eigenen Tür | weiß, der wird sich im Petit Palais mehr als zu Hause fühlen.",
    },

    galleryImage: PetitGallery,

    dieLage: {
      title: "Wohnen wo Wasser und Himmel sich treffen…",
      description:
        "Uhlenhorst ist die geografische Mitte Hamburgs und eine der schönsten und begehrtesten Lagen der Stadt. | Im Hofweg und seinen beiden Verlängerungen, dem Mühlenkamp und der Papenhuder Straße, schlägt der Puls des Viertels: | Die Flaniermeile wartet mit noblen Etagenwohnhäusern im Jugendstil und unzähligen einladenden Geschäften, Restaurants und Cafés auf. Hier trifft man sich zum Essen oder Einkaufen oder beobachtet bei schönem Wetter einfach das bunte Treiben. | Wer noch mehr Großstadtflair sucht, macht sich auf in die Hamburger City, die ebenfalls nur einen Spaziergang entfernt ist.  ",
    },
    faq: [
      {
        id: 1,
        question: "Wohnung 1",
        answer: {
          zimmer: 4,
          flache: "219, 98 m²",
          terrassen: "14,75 m²",
          wohnflache: "234,65 m²",
          runterladen: "Grundriss runterladen",
          ausstattung: [
            "Böden aus Eiche- Fischgrätparkett und Marmor in den Bädern",
            "Vier Schlafzimmer",
            "Bis zu 2,70 m Deckenhöhe",
            "Fußbodenheizung",
            "3-Fach isolierverglaste Holzfenster",
            "Hochwertige 2,23 m hohe Türen mit Bauhausbeschlägen,  profilierte und lackierte Sockelleisten",
            "Hauswirtschaftsraum",
            "Separater Kellerraum",
          ],

          besonderheiten: [
            "Großzügige Terrasse und Balkon mit Natursteinbelag",
            "Eigener, ruhig gelegener Garten mit Westausrichtung",
            "Große Fensterfront mit Schiebeelementen",
          ],
          badezimmer: [
            "Zwei Bäder sowie ein Gäaste-WC",
            "Armaturen von Dornbracht",
            "Sanitärobjekte von Villeroy & Boch und Kaldewei",
            "Natuerstein und eingelassene Deckenspots",
          ],
          faqImage: Faq1,
        },
      },

      {
        id: 2,
        question: "Wohnung 2",
        answer: {
          zimmer: 4,
          flache: "219, 98 m²",
          terrassen: "14,75 m²",
          wohnflache: "234,65 m²",
          runterladen: "Grundriss runterladen",
          ausstattung: [
            "Böden aus Eiche- Fischgrätparkett und Marmor in den Bädern",
            "Vier Schlafzimmer",
            "Bis zu 2,70 m Deckenhöhe",
            "Fußbodenheizung",
            "3-Fach isolierverglaste Holzfenster",
            "Hochwertige 2,23 m hohe Türen mit Bauhausbeschlägen,  profilierte und lackierte Sockelleisten",
            "Hauswirtschaftsraum",
            "Separater Kellerraum",
          ],

          besonderheiten: [
            "Großzügige Terrasse und Balkon mit Natursteinbelag",
            "Eigener, ruhig gelegener Garten mit Westausrichtung",
            "Große Fensterfront mit Schiebeelementen",
          ],
          badezimmer: [
            "Zwei Bäder sowie ein Gäaste-WC",
            "Armaturen von Dornbracht",
            "Sanitärobjekte von Villeroy & Boch und Kaldewei",
            "Natuerstein und eingelassene Deckenspots",
          ],
          faqImage: Faq1,
        },
      },

      {
        id: 3,
        question: "Wohnung 3",
        answer: {
          zimmer: 4,
          flache: "219, 98 m²",
          terrassen: "14,75 m²",
          wohnflache: "234,65 m²",
          runterladen: "Grundriss runterladen",
          ausstattung: [
            "Böden aus Eiche- Fischgrätparkett und Marmor in den Bädern",
            "Vier Schlafzimmer",
            "Bis zu 2,70 m Deckenhöhe",
            "Fußbodenheizung",
            "3-Fach isolierverglaste Holzfenster",
            "Hochwertige 2,23 m hohe Türen mit Bauhausbeschlägen,  profilierte und lackierte Sockelleisten",
            "Hauswirtschaftsraum",
            "Separater Kellerraum",
          ],

          besonderheiten: [
            "Großzügige Terrasse und Balkon mit Natursteinbelag",
            "Eigener, ruhig gelegener Garten mit Westausrichtung",
            "Große Fensterfront mit Schiebeelementen",
          ],
          badezimmer: [
            "Zwei Bäder sowie ein Gäaste-WC",
            "Armaturen von Dornbracht",
            "Sanitärobjekte von Villeroy & Boch und Kaldewei",
            "Natuerstein und eingelassene Deckenspots",
          ],
          faqImage: Faq1,
        },
      },

      {
        id: 4,
        question: "Wohnung 4",
        answer: {
          zimmer: 4,
          flache: "219, 98 m²",
          terrassen: "14,75 m²",
          wohnflache: "234,65 m²",
          runterladen: "Grundriss runterladen",
          ausstattung: [
            "Böden aus Eiche- Fischgrätparkett und Marmor in den Bädern",
            "Vier Schlafzimmer",
            "Bis zu 2,70 m Deckenhöhe",
            "Fußbodenheizung",
            "3-Fach isolierverglaste Holzfenster",
            "Hochwertige 2,23 m hohe Türen mit Bauhausbeschlägen,  profilierte und lackierte Sockelleisten",
            "Hauswirtschaftsraum",
            "Separater Kellerraum",
          ],

          besonderheiten: [
            "Großzügige Terrasse und Balkon mit Natursteinbelag",
            "Eigener, ruhig gelegener Garten mit Westausrichtung",
            "Große Fensterfront mit Schiebeelementen",
          ],
          badezimmer: [
            "Zwei Bäder sowie ein Gäaste-WC",
            "Armaturen von Dornbracht",
            "Sanitärobjekte von Villeroy & Boch und Kaldewei",
            "Natuerstein und eingelassene Deckenspots",
          ],
          faqImage: Faq1,
        },
      },

      {
        id: 5,
        question: "Wohnung 5",
        answer: {
          zimmer: 4,
          flache: "219, 98 m²",
          terrassen: "14,75 m²",
          wohnflache: "234,65 m²",
          runterladen: "Grundriss runterladen",
          ausstattung: [
            "Böden aus Eiche- Fischgrätparkett und Marmor in den Bädern",
            "Vier Schlafzimmer",
            "Bis zu 2,70 m Deckenhöhe",
            "Fußbodenheizung",
            "3-Fach isolierverglaste Holzfenster",
            "Hochwertige 2,23 m hohe Türen mit Bauhausbeschlägen,  profilierte und lackierte Sockelleisten",
            "Hauswirtschaftsraum",
            "Separater Kellerraum",
          ],

          besonderheiten: [
            "Großzügige Terrasse und Balkon mit Natursteinbelag",
            "Eigener, ruhig gelegener Garten mit Westausrichtung",
            "Große Fensterfront mit Schiebeelementen",
          ],
          badezimmer: [
            "Zwei Bäder sowie ein Gäaste-WC",
            "Armaturen von Dornbracht",
            "Sanitärobjekte von Villeroy & Boch und Kaldewei",
            "Natuerstein und eingelassene Deckenspots",
          ],
          faqImage: Faq1,
        },
      },
    ],

    mapCenter: { lon: 9.964900355553187, lat: 53.54959795426905 },
  },

  {
    id: "138",
    projectName: Name_138,
    displayImage: Display_138,
    detailDisplay: DetailDisplay_138,
    units: "24 Einheiten und 2 Penthäuser",
    space: "Con 28 bis 255 m2",
    type: "Nahe der Alster, mitten im Leben, umgeben von Schönem.",
    area: "Hamburg Harvestehude",
    philosophie: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. | Nullam hendrerit augue ante, et suscipit lacus blandit a. | Mauris efficitur leo id nulla porttitor pretium. | Maecenas in gravida lectus. Nulla arcu risus, dictum quis.`,
    unitMetrics: {
      wohnungen: 24,
      penthouse: 2,
      gebäude: 2,
      zummühlenkamp: "300 m",
    },
    phaseImage: PhaseImage_138,
    sliderImages: [Slider_138_1, Slider_138_1, Slider_138_1],
    projectPhases: [
      {
        phaseName: "planungsphase",
        phaseNumber: 1,
      },
      {
        phaseName: "BAUGENEHMIGUNG",
        phaseNumber: 2,
      },

      {
        phaseName: "BAUPHASE",
        phaseNumber: 3,
      },

      {
        phaseName: "BEZUGSFERTIG",
        phaseNumber: 4,
      },

      {
        phaseName: "FERTIGSTELLUNG",
        phaseNumber: 5,
      },
    ],
    currentPhase: 4,
    architektur: {
      displayImage: Architektur_138,
      title: "Die Schönheit klassischer Jugendstilarchitektur",
      description1:
        "Das elegante Petit Palais ist ein neu erbautes  Mehrfamilienhaus, das im schönsten | Teil des Uhlenhorster Hofwegs liegt. Mit seiner weißen Fassade, seinen dezenten | Erkern und seiner  klaren Linienführung fügt es sich perfekt in die Reihe der angrenzenden historischen Jugendstilbauten ein. Dabei zeigt es einen eigenen Charakter und ergänzt das Straßenbild um schöne Details.",
      description2:
        "In allen seinen acht Stockwerken treffen Charme und Weite traditioneller |  Altbauten auf den Komfort und die Funktionalität der heutigen Zeit. Freiheit bietet | auch der Ausblick aus  den Obergeschossen des Petit Palais. So präsentiert sich | ein schöner Blick ins Grüne und macht die Wechsel der Jahreszeiten unmittelbar  erlebbar. In den durch eine Fußbodenheizung gewärmten  Wohnräumen sorgt | ein hochwertiger Parkettboden für einen eleganten Charakter. Bäder aus | Naturstein erfüllen hohe Ansprüche. In einer Tiefgarage bieten 11 Stellplätze |  weiteren Komfort.",
    },
    interior: {
      displayImage: Interior_138,
      title: "KLASSISCHE BAUKULTUR | modern INTERPRETIERT",
      description1:
        "Dekorativer Naturstein, Kiesbeläge und moderne Bodenstrahler sorgen dafür, | dass das gute Wohngefühl bereits auf dem Grundstück beginnt.",
      description2:
        "Es sind die kleinen Dinge, die ein Bild einzigartig machen – so auch im | Petit Palais. Vom Naturstein im Treppenhaus bis zum Fischgrätparkett in allen | Wohnungen, von den Dornbracht-Armaturen in den Badezimmern bis zum | Bauhaus-Fenstergriff, von der eleganten Außenleuchte bis zur noblen | Aufzug-Ausstattung – jedes Detail hier ist mit viel Liebe ausgewählt und | Teil eines vollkommenen Ganzen.",
    },
    feature_before: Feature_B_138,
    besonderheiten: {
      displayImage: PetitBesonderheiten,
      title: "Das Beste | Aus zwei Epochen",
      description1:
        "Historische Baukultur findet sich hier charmant zitiert – in Räumen, die ihren hanseatisch | traditionellen Vorbildern in nichts nachstehen und dabei ebenso repräsentativ wie | charakteristisch sind. Kombiniert mit morderner Haustechnik ergibt sich so ein Konzept, das | qualitativ Maßstäbe setzt und das Leben hier zu etwas Besonderem macht.",
      description2:
        "Wer die Schönheit klassischer Jugendstilarchitektur liebt und dabei | gerne viel Grün, Wasser und urbanen Lifestyle vor der eigenen Tür | weiß, der wird sich im Petit Palais mehr als zu Hause fühlen.",
    },
    bildImages: [Bild_138_1, Bild_138_2],
    galleryImage: Gallery_138,
    dieLage: {
      title:
        "Exklusive Läden, Shops, Boutiquen, | dicht an dicht, wie die Perlen einer Kette.",
      description:
        "Die Straßen von Uhlenhorst sind mit unzähligen Cafés, Restaurants und Möglichkeiten gepflastert. | Von bodenständig bis mit Stern – hier findet sich alles. Allein für den täglichen Bedarf gibt es mehr als 20 Supermärkte, mehrere | Bio-Discounter sowie diverse Obst-, Gemüse- und Feinkostgeschäfte mit verführerischen Schaufenstern und Auslagen. | Im Mühlenkamp, im Hofweg, in der Gertigstrasse oder im Poelchaukamp gehören ausgefallene Mode- und Interiorläden zum | guten Umgangston. Am Goldbekufer findet drei-mal die Woche ein großer Wochenmarkt statt und in den Einkaufsstraßen | reihen sich Bäcker, Friseure und Blumengeschäfte dicht an dicht – wie die Perlen einer Kette. ",
    },
    faq: [
      {
        id: 1,
        question: "Wohnung 1",
        answer: {
          zimmer: 4,
          flache: "219, 98 m²",
          terrassen: "14,75 m²",
          wohnflache: "234,65 m²",
          runterladen: "Grundriss runterladen",
          ausstattung: [
            "Böden aus Eiche- Fischgrätparkett und Marmor in den Bädern",
            "Vier Schlafzimmer",
            "Bis zu 2,70 m Deckenhöhe",
            "Fußbodenheizung",
            "3-Fach isolierverglaste Holzfenster",
            "Hochwertige 2,23 m hohe Türen mit Bauhausbeschlägen,  profilierte und lackierte Sockelleisten",
            "Hauswirtschaftsraum",
            "Separater Kellerraum",
          ],

          besonderheiten: [
            "Großzügige Terrasse und Balkon mit Natursteinbelag",
            "Eigener, ruhig gelegener Garten mit Westausrichtung",
            "Große Fensterfront mit Schiebeelementen",
          ],
          badezimmer: [
            "Zwei Bäder sowie ein Gäaste-WC",
            "Armaturen von Dornbracht",
            "Sanitärobjekte von Villeroy & Boch und Kaldewei",
            "Natuerstein und eingelassene Deckenspots",
          ],
          faqImage: Faq1,
        },
      },

      {
        id: 2,
        question: "Wohnung 2",
        answer: {
          zimmer: 4,
          flache: "219, 98 m²",
          terrassen: "14,75 m²",
          wohnflache: "234,65 m²",
          runterladen: "Grundriss runterladen",
          ausstattung: [
            "Böden aus Eiche- Fischgrätparkett und Marmor in den Bädern",
            "Vier Schlafzimmer",
            "Bis zu 2,70 m Deckenhöhe",
            "Fußbodenheizung",
            "3-Fach isolierverglaste Holzfenster",
            "Hochwertige 2,23 m hohe Türen mit Bauhausbeschlägen,  profilierte und lackierte Sockelleisten",
            "Hauswirtschaftsraum",
            "Separater Kellerraum",
          ],

          besonderheiten: [
            "Großzügige Terrasse und Balkon mit Natursteinbelag",
            "Eigener, ruhig gelegener Garten mit Westausrichtung",
            "Große Fensterfront mit Schiebeelementen",
          ],
          badezimmer: [
            "Zwei Bäder sowie ein Gäaste-WC",
            "Armaturen von Dornbracht",
            "Sanitärobjekte von Villeroy & Boch und Kaldewei",
            "Natuerstein und eingelassene Deckenspots",
          ],
          faqImage: Faq1,
        },
      },

      {
        id: 3,
        question: "Wohnung 3",
        answer: {
          zimmer: 4,
          flache: "219, 98 m²",
          terrassen: "14,75 m²",
          wohnflache: "234,65 m²",
          runterladen: "Grundriss runterladen",
          ausstattung: [
            "Böden aus Eiche- Fischgrätparkett und Marmor in den Bädern",
            "Vier Schlafzimmer",
            "Bis zu 2,70 m Deckenhöhe",
            "Fußbodenheizung",
            "3-Fach isolierverglaste Holzfenster",
            "Hochwertige 2,23 m hohe Türen mit Bauhausbeschlägen,  profilierte und lackierte Sockelleisten",
            "Hauswirtschaftsraum",
            "Separater Kellerraum",
          ],

          besonderheiten: [
            "Großzügige Terrasse und Balkon mit Natursteinbelag",
            "Eigener, ruhig gelegener Garten mit Westausrichtung",
            "Große Fensterfront mit Schiebeelementen",
          ],
          badezimmer: [
            "Zwei Bäder sowie ein Gäaste-WC",
            "Armaturen von Dornbracht",
            "Sanitärobjekte von Villeroy & Boch und Kaldewei",
            "Natuerstein und eingelassene Deckenspots",
          ],
          faqImage: Faq1,
        },
      },

      {
        id: 4,
        question: "Wohnung 4",
        answer: {
          zimmer: 4,
          flache: "219, 98 m²",
          terrassen: "14,75 m²",
          wohnflache: "234,65 m²",
          runterladen: "Grundriss runterladen",
          ausstattung: [
            "Böden aus Eiche- Fischgrätparkett und Marmor in den Bädern",
            "Vier Schlafzimmer",
            "Bis zu 2,70 m Deckenhöhe",
            "Fußbodenheizung",
            "3-Fach isolierverglaste Holzfenster",
            "Hochwertige 2,23 m hohe Türen mit Bauhausbeschlägen,  profilierte und lackierte Sockelleisten",
            "Hauswirtschaftsraum",
            "Separater Kellerraum",
          ],

          besonderheiten: [
            "Großzügige Terrasse und Balkon mit Natursteinbelag",
            "Eigener, ruhig gelegener Garten mit Westausrichtung",
            "Große Fensterfront mit Schiebeelementen",
          ],
          badezimmer: [
            "Zwei Bäder sowie ein Gäaste-WC",
            "Armaturen von Dornbracht",
            "Sanitärobjekte von Villeroy & Boch und Kaldewei",
            "Natuerstein und eingelassene Deckenspots",
          ],
          faqImage: Faq1,
        },
      },
    ],
    mapCenter: { lon: 9.964900355553187, lat: 53.54959795426905 },
  },
];

const Ankaufsprofil = [
  {
    Transaktionsstruktur: "Assetdeal | Sharedeal",
    Volumen: "bis 60.000.000 €",
    GrundstückE:
      "Mit oder ohne Baurecht | Baurechtschaffung gehört zu unseren Expertisen | Erschlossene oder unerschlossene Grundstücke | Frei von Mietverhältnissen oder Walt < 15 Jahre",
    Bestandsobjekte:
      "Wohnhäuser | Wohn- Geschäftshäuser | Wohnanlagen | Gewerbehöfe | Objekte mit Nachverdichtungspotential",
    Regionen:
      "Metropolregion Hamburg | Lüneburg | Berlin, München | Norddeutschland insb. Insel Sylt",
    Ausschlußkriterien: "Erbpacht | Teileigentum | Forward- Deals",
  },

  // {
  //   name: "Bestandsimmobilien",
  //   "asset-klaseen": "Wohnen / Gewerbe / Ferienimmobilien / Logistik",
  //   standorte:
  //     "Hamburg & Umland / Bremen / Hannover / Lüneburg / Sylt sowie weitere Nord- & Ostseeregionen",
  //   mikrolagen: "Mittlere bis sehr gute Lagen sowie aufstrebende Lage",
  //   maßnahmen:
  //     "Abriss & Neubau / Sanierung / Revitalisierung / Baurechtschaffung",
  //   kriterien:
  //     "WALT < 10 Jahre / BGF > 1.000 qm / Grundstück > 500 qm / mit & ohne Planrecht",
  //   investitionsvolumen: "Bis 75 Mio. Euro",
  //   download: "/",
  // },
];

export { aktuelleprojekte, Ankaufsprofil };
