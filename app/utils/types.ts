import { StaticImageData } from "next/image";
import { LngLatLike } from "mapbox-gl";

interface FaqItem {
  id: number;
  question: string;
  answer: {
    zimmer: number;
    flache: string;
    terrassen: string;
    wohnflache: string;
    runterladen: string;
    ausstattung: string[];

    besonderheiten: string[];
    badezimmer: string[];
    faqImage: StaticImageData;
  };
}

interface ColumnSectionData {
  displayImage: StaticImageData;
  title: string;
  description1: string;
  description2: string;
}

interface Project {
  id: string;
  projectName: StaticImageData;
  heroSlider: {
    displayImage: StaticImageData;
  }[];
  displayImage: StaticImageData;
  units: string;
  space: string;
  type: string;
  area: string;
  detailDisplay: StaticImageData;
  philosophie: string;
  philosophieHeader: string;
  philosophieButtonText?: string;
  unitMetrics: {
    wohnungen: number;
    penthouse: number;
    zuralster?: string;
    stellplätze?: number;
    gebäude?: number;
    zummühlenkamp?: string;
  };
  phaseImage: StaticImageData;
  sliderImages: StaticImageData[];
  projectPhases: {
    phaseName: string;
    phaseNumber: number;
  }[];
  currentPhase: number;
  architektur: ColumnSectionData;
  interior: ColumnSectionData;
  model?: StaticImageData;
  besonderheiten: ColumnSectionData;
  galleryImage: StaticImageData;
  faq: FaqItem[];
  feature_before?: StaticImageData;
  bildImages?: StaticImageData[];
  mapCenter: LngLatLike;
  dieLage: {
    title: string;
    description: string;
  };
}

export type { FaqItem, Project };
