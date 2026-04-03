export interface Hotline {
  key: string;
  number: string;
  primary: boolean;
}

export const hotlines: Hotline[] = [
  { key: "police", number: "192", primary: true },
  { key: "sos-crisis", number: "15-315", primary: true },
  { key: "sos-mobile", number: "070 141 700", primary: true },
  { key: "sos-ozs", number: "15700", primary: true },
  { key: "ambulance", number: "194", primary: false },
  { key: "lastrada", number: "0800 11111", primary: false },
  { key: "helsinki-legal", number: "0800 44 222", primary: false },
  { key: "helsinki-safe", number: "0800 66 66 6", primary: false },
  { key: "ese-legal", number: "02 3298 295", primary: false },
  { key: "megjashi", number: "0800 1 2222", primary: false },
];
