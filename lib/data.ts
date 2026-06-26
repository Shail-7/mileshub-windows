// ---- Domain types ----
export interface Feature {
  title: string;
  body: string;
}

export interface ServiceOption {
  label: string;
  value: string;
}

export interface Service {
  id: string;
  name: string;
  shortName: string;
  kicker: string;
  img: string;
  tag: string;
  blurb: string;
  features: Feature[];
  options: ServiceOption[];
}

export interface Step {
  num: string;
  title: string;
  body: string;
}

export interface Review {
  title: string;
  quote: string;
  name: string;
  initial: string;
  place: string;
  date: string;
}

export type ArtKey =
  | "upvc"
  | "aluminium"
  | "sash"
  | "bifold"
  | "composite"
  | "conservatories"
  | "house"
  | "hHome"
  | "hLiving"
  | "hStreet"
  | "contact";

export interface GalleryItem {
  label: string;
  art: ArtKey;
}

// ---- Brand / contact constants ----
export const PHONE = "+44 7514 506192";
export const PHONE_HREF = "tel:" + PHONE.replace(/[^\d+]/g, "");
export const EMAIL = "Sales@Mileshubwindows.co.uk";

// ---- Product imagery (real photography, served from the Unsplash CDN) ----
const U = (id: string, w?: number): string =>
  "https://images.unsplash.com/photo-" + id + "?auto=format&fit=crop&w=" + (w ?? 1200) + "&q=80";

export const ART: Record<ArtKey, string> = {
  upvc: U("1570129477492-45c003edd2be"),
  aluminium: U("1600585154340-be6161a56a0c"),
  sash: U("1583608205776-bfd35f0d9f83"),
  bifold: U("1502005097973-6a7082348e28"),
  composite: U("1605276374104-dee2a0ed3cd6"),
  conservatories: U("1600566753086-00f18fb6b3ea"),
  house: U("1600596542815-ffad4c1539a9"),
  hHome: U("1568605114967-8130f3a36994", 1800),
  hLiving: U("1518780664697-55e3ad937233", 1800),
  hStreet: U("1564013799919-ab600027ffc6", 1800),
  contact: U("1556745757-8d76bdb6984b", 1400),
};

export const HERO_SLIDES: string[] = [ART.hHome, ART.hLiving, ART.hStreet];

// ---- Services ----
export const SERVICES: Service[] = [
  {
    id: "upvc", name: "uPVC Windows", shortName: "uPVC windows", kicker: "Windows", img: ART.upvc,
    tag: "Energy-efficient, low-maintenance windows in a huge choice of styles and colours.",
    blurb: "Our most popular choice — warm, secure and virtually maintenance-free. Multi-chambered frames and high-performance glass keep heat in and noise out, with finishes from classic white to woodgrain foils.",
    features: [
      { title: "A+ energy rated", body: "Multi-chambered profiles and warm-edge spacers cut heat loss and lower your bills." },
      { title: "Built-in security", body: "Multi-point locking and internally beaded frames as standard on every window." },
      { title: "Colours & woodgrains", body: "White, grey, black, cream and realistic woodgrain foils, inside and out." },
      { title: "Virtually maintenance-free", body: "No painting, no rot — a quick wipe keeps them looking new for years." },
    ],
    options: [
      { label: "Styles", value: "Casement · Tilt-turn · Flush · Bay" },
      { label: "Colours", value: "12 standard, 30+ on request" },
      { label: "Glazing", value: "Double or triple" },
      { label: "Guarantee", value: "10 years" },
    ],
  },
  {
    id: "aluminium", name: "Aluminium Windows", shortName: "aluminium windows", kicker: "Windows", img: ART.aluminium,
    tag: "Slim, strong sightlines and a sleek contemporary finish for modern homes.",
    blurb: "Ultra-slim frames maximise glass and daylight while delivering exceptional strength and durability. Powder-coated in any RAL colour, aluminium is the premium choice for a clean, architectural look.",
    features: [
      { title: "Slimmer sightlines", body: "More glass, less frame — for uninterrupted views and abundant light." },
      { title: "Exceptionally strong", body: "Large panes and tall openings made possible by aluminium’s rigidity." },
      { title: "Any RAL colour", body: "Durable powder-coated finishes, including dual-colour inside and out." },
      { title: "Thermally broken", body: "Insulated cores keep modern frames as warm as they are slim." },
    ],
    options: [
      { label: "Styles", value: "Casement · Fixed · Corner" },
      { label: "Finish", value: "Matt, satin or gloss" },
      { label: "Colours", value: "Any RAL" },
      { label: "Guarantee", value: "10 years" },
    ],
  },
  {
    id: "sash", name: "Sash Windows", shortName: "sash windows", kicker: "Windows", img: ART.sash,
    tag: "Period charm with modern performance — perfect for traditional properties.",
    blurb: "Recreate the elegance of a classic sliding sash with the warmth, security and ease of a modern window. Authentic detailing like deep bottom rails and run-through horns, with none of the draughts.",
    features: [
      { title: "Authentic detailing", body: "Run-through horns, deep bottom rails and slim glazing bars true to period." },
      { title: "Smooth, balanced glide", body: "Modern spring balances replace cords and weights for effortless operation." },
      { title: "Draught-proofed", body: "Integral brush seals end the rattles and draughts of original sashes." },
      { title: "Conservation-friendly", body: "Suitable for many listed and conservation-area properties." },
    ],
    options: [
      { label: "Material", value: "uPVC or timber" },
      { label: "Bars", value: "Astragal or Georgian" },
      { label: "Colours", value: "Heritage range" },
      { label: "Guarantee", value: "10 years" },
    ],
  },
  {
    id: "bifold", name: "Bi-fold & Sliding Doors", shortName: "bi-fold & sliding doors", kicker: "Doors", img: ART.bifold,
    tag: "Open up your home and bring the garden in with expansive glazed doors.",
    blurb: "Transform the back of your home with doors that fold or slide away to blur the line between inside and out. Slim aluminium frames carry large panes on smooth running gear for a seamless transition.",
    features: [
      { title: "Open up fully", body: "Fold the whole wall away or glide panels effortlessly to one side." },
      { title: "Big glass, slim frames", body: "Maximum daylight and uninterrupted garden views all year round." },
      { title: "Weather-sealed", body: "Low thresholds and multi-point locks keep weather and intruders out." },
      { title: "Configured to you", body: "2 to 7 panels, opening left, right or both — to suit your space." },
    ],
    options: [
      { label: "Type", value: "Bi-fold · Sliding · French" },
      { label: "Panels", value: "2–7" },
      { label: "Threshold", value: "Standard or low" },
      { label: "Guarantee", value: "10 years" },
    ],
  },
  {
    id: "composite", name: "Composite & Front Doors", shortName: "front doors", kicker: "Doors", img: ART.composite,
    tag: "A striking, secure first impression that’s built to keep the weather out.",
    blurb: "Your front door sets the tone for the whole house. Our composite doors combine a solid, insulating core with a tough skin and high-security locking — in a wide palette of colours and styles.",
    features: [
      { title: "Secure by design", body: "High-security multi-point locks and reinforced frames for peace of mind." },
      { title: "Warm & weatherproof", body: "Insulating cores keep hallways warm and seal out wind and rain." },
      { title: "Colours & glass", body: "Dozens of colours, glazing designs and hardware finishes to choose from." },
      { title: "Tough finish", body: "Won’t warp, crack or fade — just wipe clean to keep it looking sharp." },
    ],
    options: [
      { label: "Range", value: "Composite · uPVC · Aluminium" },
      { label: "Colours", value: "25+ shades" },
      { label: "Glass", value: "Decorative options" },
      { label: "Guarantee", value: "10 years" },
    ],
  },
  {
    id: "conservatories", name: "Conservatories", shortName: "conservatories", kicker: "Living spaces", img: ART.conservatories,
    tag: "Extra living space, beautifully glazed and made to be used all year.",
    blurb: "From classic Victorian to lean-to and gable styles, a modern conservatory gives you the extra room you need. Advanced glazing and insulated roof options keep it comfortable through summer and winter.",
    features: [
      { title: "Choice of styles", body: "Victorian, Edwardian, lean-to, gable and bespoke designs." },
      { title: "All-season roofs", body: "Glass, tiled or hybrid roofs to control heat, light and noise." },
      { title: "Efficient glazing", body: "Solar-control glass keeps you cool in summer, warm in winter." },
      { title: "Quick to build", body: "A cost-effective way to add space with minimal disruption." },
    ],
    options: [
      { label: "Styles", value: "Victorian · Edwardian · Lean-to" },
      { label: "Roof", value: "Glass · Tiled · Hybrid" },
      { label: "Base", value: "Brick or full-height" },
      { label: "Guarantee", value: "10 years" },
    ],
  },
];

export const STEPS: Step[] = [
  { num: "01", title: "Free consultation", body: "We talk through your goals and recommend the right product and budget — at home or over a call." },
  { num: "02", title: "Precise survey", body: "A technical survey captures exact measurements so every frame is made for your opening — not adjusted on site." },
  { num: "03", title: "Made to measure", body: "Your windows and doors are manufactured to spec with the finishes, glass and hardware you chose." },
  { num: "04", title: "Clean installation", body: "Our own fitters install, finish and tidy up — leaving you with a guarantee and nothing to chase." },
];

export const REVIEWS: Review[] = [
  { title: "Replace exterior door & fitting, 1930s terraced house", quote: "Shikhar and the team did an outstanding job of installing our uPVC door. Really reasonable price, excellent finish and communication was really good throughout. Would definitely use again.", name: "Mike", initial: "MB", place: "Buckhurst Hill", date: "Jun 2026" },
  { title: "6x replacement glass units + window handle", quote: "Genuinely really pleased with the work. There was a slight issue with 2 of the units — they simply reordered and replaced them with zero fuss. An absolute pleasure to deal with and highly recommended!", name: "Verified customer", initial: "MH", place: "Essex", date: "May 2026" },
  { title: "2x windows and 1x door", quote: "Shikhar and the team have done all the windows for my house and the outbuilding. Fantastic job, very good final finish. Very happy and will use them on my next project.", name: "LJ", initial: "LJ", place: "Harlow", date: "Jun 2026" },
  { title: "Replacement windows, 4 in number", quote: "Kept up to date when the work was being carried out. Very clean and tidy, very pleased with the job and would definitely recommend this company. Job well done, thank you.", name: "Keith Willis", initial: "KW", place: "Dagenham", date: "Apr 2026" },
  { title: "2x bay double glazed windows", quote: "Did a good job — happy with the windows.", name: "Paul", initial: "PS", place: "Shepperton", date: "Jun 2026" },
];

export const GALLERY: GalleryItem[] = [
  { label: "Full home, aluminium throughout", art: "house" },
  { label: "Anthracite aluminium bi-fold doors", art: "bifold" },
  { label: "Light-filled conservatory", art: "conservatories" },
  { label: "Minimal uPVC casement windows", art: "upvc" },
  { label: "Heritage sash restoration", art: "sash" },
];

export function getService(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}
