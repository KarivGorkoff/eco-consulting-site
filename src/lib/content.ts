/*
  All of the site's wording, contact details and project data live in this file.
  Edit here and every page that uses the item updates with it.
*/
import type { StaticImageData } from "next/image";
import mosaicPhoto from "../../public/Mosaic.jpeg";
import allanPhoto from "../../public/Allan.jpeg";
import coryPhoto from "../../public/Cory.jpeg";

// A non-breaking space keeps a number and its unit on the same line (600 V, 5 kV).
const nbsp = " ";

export const company = {
  name: "ECO Consulting Ltd.",
  shortName: "ECO Consulting",
  trade: "Electrical contractors",
  tagline: "Saskatchewan-based. Industry-trusted.",
  city: "Saskatoon",
  province: "Saskatchewan",
  provinceCode: "SK",
  description:
    "Saskatchewan-based electrical contractors serving industrial, mining, and power generation clients across Western Canada for 15+ years.",
};

export const contact = {
  name: "Charles Gorkoff",
  role: "Owner",
  phone: "306-280-0006",
  phoneHref: "tel:+13062800006",
  email: "charles.eco@sasktel.net",
  emailHref: "mailto:charles.eco@sasktel.net",
};

export const navigation = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export type ServiceSymbolName = "transformer" | "generator" | "antenna" | "plc" | "bell" | "pv";

export const services: { symbol: ServiceSymbolName; title: string; body: string }[] = [
  {
    symbol: "transformer",
    title: "Power distribution",
    body: "MV/LV switchgear, transformers, and bus duct. Supply and installation for industrial facilities.",
  },
  {
    symbol: "generator",
    title: "Emergency and standby power",
    body: "Standby generators, UPS, ATS, and critical power systems ensuring continuous operation in demanding environments.",
  },
  {
    symbol: "antenna",
    title: "Communication systems",
    body: "Fiber optic distribution, data networks, CCTV, card access, and integrated life safety communication.",
  },
  {
    symbol: "plc",
    title: "Process controls",
    body: "PLC/DCS integration, instrumentation, and control panel fabrication.",
  },
  {
    symbol: "bell",
    title: "Fire alarm systems",
    body: "Installation of VESDA, beam detector, Notifier, Chubb, and Siemens systems.",
  },
  {
    symbol: "pv",
    title: "Alternative energy",
    body: "Solar PV, battery storage, and hybrid power solutions for remote and grid-tied industrial applications.",
  },
];

export type FeaturedProject = {
  id: string;
  client: string;
  site: string;
  /** Client and site together, as engraved on the photo tag. */
  siteLabel: string;
  title: string;
  scope: string;
  photo: StaticImageData;
  alt: string;
  /** Which part of the photo to keep in view when it is cropped (CSS object-position). */
  focus: string;
  orientation: "landscape" | "portrait";
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "mosaic-belle-plaine",
    client: "Mosaic",
    site: "Belle Plaine",
    siteLabel: "Mosaic Belle Plaine",
    title: "Boiler replacement",
    scope: "Process controls, burner management, and power distribution",
    photo: mosaicPhoto,
    alt: "Boiler burner fronts with fuel gas piping and high-voltage junction boxes at Mosaic Belle Plaine.",
    focus: "32% 45%",
    orientation: "landscape",
  },
  {
    id: "nutrien-allan",
    client: "Nutrien",
    site: "Allan Mine",
    siteLabel: "Nutrien Allan Mine",
    title: `600${nbsp}V MCC and PLC replacement`,
    scope: "Control systems and instrumentation",
    photo: allanPhoto,
    alt: "Motor control centre line-up beside an open PLC cabinet with wired I/O modules at Nutrien Allan Mine.",
    focus: "50% 12%",
    orientation: "portrait",
  },
  {
    id: "nutrien-cory",
    client: "Nutrien",
    site: "Cory Mine",
    siteLabel: "Nutrien Cory Mine",
    title: "Fire alarm installation",
    scope: "Notifier FACP and life safety systems",
    photo: coryPhoto,
    alt: "Row of Notifier fire alarm control panels with battery cabinets at Nutrien Cory Mine.",
    focus: "50% 55%",
    orientation: "landscape",
  },
];

/** Shown under the home page hero. */
export const keyClients = [
  { client: "Nutrien", sites: "Allan, Cory, and Rocanville" },
  { client: "Mosaic", sites: "Belle Plaine" },
  { client: "Orano", sites: "McClean Lake" },
];

/** Past projects by client site. */
export const siteProjects: { client: string; site: string; scope: string[] }[] = [
  {
    client: "Nutrien",
    site: "Allan Mine",
    scope: [
      `600${nbsp}V MCC and PLC replacement`,
      "Red product storage building retrofit",
      "Various galleries",
      `600${nbsp}V to 5${nbsp}kV switchgear`,
      "Instrumentation",
      "Power distribution",
      "Process controls",
    ],
  },
  {
    client: "Nutrien",
    site: "Cory Mine",
    scope: ["Fire alarm installation and life safety systems"],
  },
  {
    client: "Nutrien",
    site: "Rocanville",
    scope: ["Fire alarm assessment"],
  },
  {
    client: "Mosaic",
    site: "Belle Plaine",
    scope: ["Boiler replacement", "Process controls, burner management, and power distribution"],
  },
  {
    client: "Orano",
    site: "McClean Lake",
    scope: ["Secondary unloading lime supply", "Electrical and controls"],
  },
];

/** Past work that spans several sites or clients. */
export const multiSiteWork = [
  {
    title: `600${nbsp}V to 5${nbsp}kV switchgear`,
    body: "Multiple site switchgear replacement projects across Saskatchewan",
  },
  {
    title: "Communication systems",
    body: "Fiber optic distribution, CCTV, and card access for various industrial clients",
  },
  {
    title: "Emergency and standby power",
    body: "Standby generator and ATS installations for critical industrial infrastructure",
  },
];

export const companyFacts = [
  { label: "Years of service", value: "15+" },
  { label: "Licensing", value: "Licensed electrical contractors" },
  { label: "Ownership", value: "Saskatchewan-based and owner-operated" },
  { label: "Location", value: "Saskatoon, Saskatchewan" },
  { label: "Sectors", value: "Industrial, mining, and power generation" },
  { label: "Service area", value: "Western Canada" },
];

export const credentials = [
  "15+ years of service",
  "Licensed electrical contractors",
  "Saskatchewan-based and owner-operated",
];
