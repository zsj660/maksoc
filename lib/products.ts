export type ProductCategory = "Hollandairs" | "Small Diamond" | "Grand Super" | "Super Wax";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  image: string;
  description: string;
  material: string;
  colors: string[];
  price: number;
};

export type Order = {
  id: string;
  customer: string;
  status: "Pending" | "Processing" | "Shipped";
  createdAt: string;
  itemCount: number;
  total: number;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "hollandairs-001",
    name: "Hollandairs 01",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL1.png",
    description: "Hollandairs 01 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "2",
    slug: "hollandairs-002",
    name: "Hollandairs 02",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL2.png",
    description: "Hollandairs 02 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "3",
    slug: "hollandairs-003",
    name: "Hollandairs 03",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL3.png",
    description: "Hollandairs 03 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "4",
    slug: "hollandairs-004",
    name: "Hollandairs 04",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL4.png",
    description: "Hollandairs 04 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "5",
    slug: "hollandairs-005",
    name: "Hollandairs 05",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL5.png",
    description: "Hollandairs 05 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "6",
    slug: "hollandairs-006",
    name: "Hollandairs 06",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL6.png",
    description: "Hollandairs 06 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "7",
    slug: "hollandairs-007",
    name: "Hollandairs 07",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL7.png",
    description: "Hollandairs 07 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "8",
    slug: "hollandairs-008",
    name: "Hollandairs 08",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL8.png",
    description: "Hollandairs 08 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "9",
    slug: "hollandairs-009",
    name: "Hollandairs 09",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL9.png",
    description: "Hollandairs 09 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "10",
    slug: "hollandairs-010",
    name: "Hollandairs 10",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL10.png",
    description: "Hollandairs 10 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "11",
    slug: "hollandairs-011",
    name: "Hollandairs 11",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL11.png",
    description: "Hollandairs 11 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "12",
    slug: "hollandairs-012",
    name: "Hollandairs 12",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL12.png",
    description: "Hollandairs 12 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "13",
    slug: "hollandairs-013",
    name: "Hollandairs 13",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL13.png",
    description: "Hollandairs 13 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "14",
    slug: "hollandairs-014",
    name: "Hollandairs 14",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL14.png",
    description: "Hollandairs 14 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "15",
    slug: "hollandairs-015",
    name: "Hollandairs 15",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL15.jpg",
    description: "Hollandairs 15 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "16",
    slug: "hollandairs-016",
    name: "Hollandairs 16",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL16.jpg",
    description: "Hollandairs 16 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "17",
    slug: "hollandairs-017",
    name: "Hollandairs 17",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL17.jpg",
    description: "Hollandairs 17 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "18",
    slug: "hollandairs-018",
    name: "Hollandairs 18",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL18.jpg",
    description: "Hollandairs 18 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "19",
    slug: "hollandairs-019",
    name: "Hollandairs 19",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL19.jpg",
    description: "Hollandairs 19 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "20",
    slug: "hollandairs-020",
    name: "Hollandairs 20",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL20.jpg",
    description: "Hollandairs 20 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "21",
    slug: "hollandairs-021",
    name: "Hollandairs 21",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL21.jpg",
    description: "Hollandairs 21 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "22",
    slug: "hollandairs-022",
    name: "Hollandairs 22",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL22.jpg",
    description: "Hollandairs 22 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "23",
    slug: "hollandairs-023",
    name: "Hollandairs 23",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL23.jpg",
    description: "Hollandairs 23 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "24",
    slug: "hollandairs-024",
    name: "Hollandairs 24",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL24.jpg",
    description: "Hollandairs 24 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "25",
    slug: "hollandairs-025",
    name: "Hollandairs 25",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL25.jpg",
    description: "Hollandairs 25 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "26",
    slug: "hollandairs-026",
    name: "Hollandairs 26",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL26.jpg",
    description: "Hollandairs 26 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "27",
    slug: "hollandairs-027",
    name: "Hollandairs 27",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL27.jpg",
    description: "Hollandairs 27 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "28",
    slug: "hollandairs-028",
    name: "Hollandairs 28",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL28.jpg",
    description: "Hollandairs 28 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "29",
    slug: "hollandairs-029",
    name: "Hollandairs 29",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL29.jpg",
    description: "Hollandairs 29 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "30",
    slug: "hollandairs-030",
    name: "Hollandairs 30",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL30.jpg",
    description: "Hollandairs 30 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "31",
    slug: "hollandairs-031",
    name: "Hollandairs 31",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL31.jpg",
    description: "Hollandairs 31 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "32",
    slug: "hollandairs-032",
    name: "Hollandairs 32",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL32.jpg",
    description: "Hollandairs 32 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "33",
    slug: "hollandairs-033",
    name: "Hollandairs 33",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL33.jpg",
    description: "Hollandairs 33 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "34",
    slug: "hollandairs-034",
    name: "Hollandairs 34",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL34.jpg",
    description: "Hollandairs 34 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "35",
    slug: "hollandairs-035",
    name: "Hollandairs 35",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL35.jpg",
    description: "Hollandairs 35 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "36",
    slug: "hollandairs-036",
    name: "Hollandairs 36",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL36.jpg",
    description: "Hollandairs 36 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "37",
    slug: "hollandairs-037",
    name: "Hollandairs 37",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL37.jpg",
    description: "Hollandairs 37 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "38",
    slug: "hollandairs-038",
    name: "Hollandairs 38",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL38.jpg",
    description: "Hollandairs 38 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "39",
    slug: "hollandairs-039",
    name: "Hollandairs 39",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL39.jpg",
    description: "Hollandairs 39 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "40",
    slug: "hollandairs-040",
    name: "Hollandairs 40",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL40.jpg",
    description: "Hollandairs 40 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "41",
    slug: "hollandairs-041",
    name: "Hollandairs 41",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL41.jpg",
    description: "Hollandairs 41 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "42",
    slug: "hollandairs-042",
    name: "Hollandairs 42",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL42.jpg",
    description: "Hollandairs 42 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "43",
    slug: "hollandairs-043",
    name: "Hollandairs 43",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL43.jpg",
    description: "Hollandairs 43 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "44",
    slug: "hollandairs-044",
    name: "Hollandairs 44",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL44.jpg",
    description: "Hollandairs 44 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "45",
    slug: "hollandairs-045",
    name: "Hollandairs 45",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL45.jpg",
    description: "Hollandairs 45 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "46",
    slug: "hollandairs-046",
    name: "Hollandairs 46",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL46.jpg",
    description: "Hollandairs 46 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "47",
    slug: "hollandairs-047",
    name: "Hollandairs 47",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL47.jpg",
    description: "Hollandairs 47 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "48",
    slug: "hollandairs-048",
    name: "Hollandairs 48",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL48.jpg",
    description: "Hollandairs 48 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "49",
    slug: "hollandairs-049",
    name: "Hollandairs 49",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL49.jpg",
    description: "Hollandairs 49 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "50",
    slug: "hollandairs-050",
    name: "Hollandairs 50",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL50.jpg",
    description: "Hollandairs 50 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "51",
    slug: "hollandairs-051",
    name: "Hollandairs 51",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL51.jpg",
    description: "Hollandairs 51 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "52",
    slug: "hollandairs-052",
    name: "Hollandairs 52",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL52.jpg",
    description: "Hollandairs 52 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "53",
    slug: "hollandairs-053",
    name: "Hollandairs 53",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL53.jpg",
    description: "Hollandairs 53 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "54",
    slug: "hollandairs-054",
    name: "Hollandairs 54",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL54.jpg",
    description: "Hollandairs 54 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "55",
    slug: "hollandairs-055",
    name: "Hollandairs 55",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL55.jpg",
    description: "Hollandairs 55 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "56",
    slug: "hollandairs-056",
    name: "Hollandairs 56",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL56.jpg",
    description: "Hollandairs 56 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "57",
    slug: "hollandairs-057",
    name: "Hollandairs 57",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL57.jpg",
    description: "Hollandairs 57 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "58",
    slug: "hollandairs-058",
    name: "Hollandairs 58",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL58.jpg",
    description: "Hollandairs 58 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "59",
    slug: "hollandairs-059",
    name: "Hollandairs 59",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL59.jpg",
    description: "Hollandairs 59 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "60",
    slug: "hollandairs-060",
    name: "Hollandairs 60",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL60.jpg",
    description: "Hollandairs 60 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "61",
    slug: "hollandairs-061",
    name: "Hollandairs 61",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL61.jpg",
    description: "Hollandairs 61 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "62",
    slug: "hollandairs-062",
    name: "Hollandairs 62",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL62.jpg",
    description: "Hollandairs 62 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "63",
    slug: "hollandairs-063",
    name: "Hollandairs 63",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL63.jpg",
    description: "Hollandairs 63 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "64",
    slug: "hollandairs-064",
    name: "Hollandairs 64",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL64.jpg",
    description: "Hollandairs 64 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "65",
    slug: "hollandairs-065",
    name: "Hollandairs 65",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL65.jpg",
    description: "Hollandairs 65 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "66",
    slug: "hollandairs-066",
    name: "Hollandairs 66",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL66.jpg",
    description: "Hollandairs 66 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "67",
    slug: "hollandairs-067",
    name: "Hollandairs 67",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL67.jpg",
    description: "Hollandairs 67 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "68",
    slug: "hollandairs-068",
    name: "Hollandairs 68",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL68.jpg",
    description: "Hollandairs 68 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "69",
    slug: "hollandairs-069",
    name: "Hollandairs 69",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL69.jpg",
    description: "Hollandairs 69 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "70",
    slug: "hollandairs-070",
    name: "Hollandairs 70",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL70.jpg",
    description: "Hollandairs 70 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "71",
    slug: "hollandairs-071",
    name: "Hollandairs 71",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL71.jpg",
    description: "Hollandairs 71 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "72",
    slug: "hollandairs-072",
    name: "Hollandairs 72",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL72.jpg",
    description: "Hollandairs 72 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "73",
    slug: "hollandairs-073",
    name: "Hollandairs 73",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL73.jpg",
    description: "Hollandairs 73 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "74",
    slug: "hollandairs-074",
    name: "Hollandairs 74",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL74.jpg",
    description: "Hollandairs 74 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "75",
    slug: "hollandairs-075",
    name: "Hollandairs 75",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL75.jpg",
    description: "Hollandairs 75 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "76",
    slug: "hollandairs-076",
    name: "Hollandairs 76",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL76.jpg",
    description: "Hollandairs 76 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "77",
    slug: "hollandairs-077",
    name: "Hollandairs 77",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL77.jpg",
    description: "Hollandairs 77 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "78",
    slug: "hollandairs-078",
    name: "Hollandairs 78",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL78.jpg",
    description: "Hollandairs 78 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "79",
    slug: "hollandairs-079",
    name: "Hollandairs 79",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL79.jpg",
    description: "Hollandairs 79 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "80",
    slug: "hollandairs-080",
    name: "Hollandairs 80",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL80.jpg",
    description: "Hollandairs 80 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "81",
    slug: "hollandairs-081",
    name: "Hollandairs 81",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL81.jpg",
    description: "Hollandairs 81 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "82",
    slug: "hollandairs-082",
    name: "Hollandairs 82",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL82.jpg",
    description: "Hollandairs 82 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "83",
    slug: "hollandairs-083",
    name: "Hollandairs 83",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL83.jpg",
    description: "Hollandairs 83 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "84",
    slug: "hollandairs-084",
    name: "Hollandairs 84",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL84.jpg",
    description: "Hollandairs 84 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "85",
    slug: "hollandairs-085",
    name: "Hollandairs 85",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL85.jpg",
    description: "Hollandairs 85 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "86",
    slug: "hollandairs-086",
    name: "Hollandairs 86",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL86.jpg",
    description: "Hollandairs 86 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "87",
    slug: "hollandairs-087",
    name: "Hollandairs 87",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL87.jpg",
    description: "Hollandairs 87 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "88",
    slug: "hollandairs-088",
    name: "Hollandairs 88",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL88.jpg",
    description: "Hollandairs 88 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "89",
    slug: "hollandairs-089",
    name: "Hollandairs 89",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL89.jpg",
    description: "Hollandairs 89 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "90",
    slug: "hollandairs-090",
    name: "Hollandairs 90",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL90.jpg",
    description: "Hollandairs 90 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "91",
    slug: "hollandairs-091",
    name: "Hollandairs 91",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL91.jpg",
    description: "Hollandairs 91 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "92",
    slug: "hollandairs-092",
    name: "Hollandairs 92",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL92.jpg",
    description: "Hollandairs 92 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "93",
    slug: "hollandairs-093",
    name: "Hollandairs 93",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL93.jpg",
    description: "Hollandairs 93 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "94",
    slug: "hollandairs-094",
    name: "Hollandairs 94",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL94.jpg",
    description: "Hollandairs 94 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "95",
    slug: "hollandairs-095",
    name: "Hollandairs 95",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL95.jpg",
    description: "Hollandairs 95 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "96",
    slug: "hollandairs-096",
    name: "Hollandairs 96",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL96.jpg",
    description: "Hollandairs 96 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "97",
    slug: "hollandairs-097",
    name: "Hollandairs 97",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL97.jpg",
    description: "Hollandairs 97 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "98",
    slug: "hollandairs-098",
    name: "Hollandairs 98",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL98.jpg",
    description: "Hollandairs 98 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "99",
    slug: "hollandairs-099",
    name: "Hollandairs 99",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL99.jpg",
    description: "Hollandairs 99 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "100",
    slug: "hollandairs-100",
    name: "Hollandairs 100",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL100.jpg",
    description: "Hollandairs 100 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "101",
    slug: "hollandairs-101",
    name: "Hollandairs 101",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL101.jpg",
    description: "Hollandairs 101 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "102",
    slug: "hollandairs-102",
    name: "Hollandairs 102",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL102.jpg",
    description: "Hollandairs 102 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "103",
    slug: "hollandairs-103",
    name: "Hollandairs 103",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL103.jpg",
    description: "Hollandairs 103 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "104",
    slug: "hollandairs-104",
    name: "Hollandairs 104",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL104.jpg",
    description: "Hollandairs 104 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "105",
    slug: "hollandairs-105",
    name: "Hollandairs 105",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL105.jpg",
    description: "Hollandairs 105 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "106",
    slug: "hollandairs-106",
    name: "Hollandairs 106",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL106.jpg",
    description: "Hollandairs 106 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "107",
    slug: "hollandairs-107",
    name: "Hollandairs 107",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL107.jpg",
    description: "Hollandairs 107 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "108",
    slug: "hollandairs-108",
    name: "Hollandairs 108",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL108.jpg",
    description: "Hollandairs 108 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "109",
    slug: "hollandairs-109",
    name: "Hollandairs 109",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL109.jpg",
    description: "Hollandairs 109 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "110",
    slug: "hollandairs-110",
    name: "Hollandairs 110",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL110.jpg",
    description: "Hollandairs 110 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "111",
    slug: "hollandairs-111",
    name: "Hollandairs 111",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL111.jpg",
    description: "Hollandairs 111 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "112",
    slug: "hollandairs-112",
    name: "Hollandairs 112",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL112.jpg",
    description: "Hollandairs 112 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "113",
    slug: "hollandairs-113",
    name: "Hollandairs 113",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL113.jpg",
    description: "Hollandairs 113 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "114",
    slug: "hollandairs-114",
    name: "Hollandairs 114",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL114.jpg",
    description: "Hollandairs 114 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "115",
    slug: "hollandairs-115",
    name: "Hollandairs 115",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL115.jpg",
    description: "Hollandairs 115 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "116",
    slug: "hollandairs-116",
    name: "Hollandairs 116",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL116.jpg",
    description: "Hollandairs 116 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "117",
    slug: "hollandairs-117",
    name: "Hollandairs 117",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL117.jpg",
    description: "Hollandairs 117 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "118",
    slug: "hollandairs-118",
    name: "Hollandairs 118",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL118.jpg",
    description: "Hollandairs 118 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "119",
    slug: "hollandairs-119",
    name: "Hollandairs 119",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL119.jpg",
    description: "Hollandairs 119 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "120",
    slug: "hollandairs-120",
    name: "Hollandairs 120",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL120.jpg",
    description: "Hollandairs 120 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "121",
    slug: "hollandairs-121",
    name: "Hollandairs 121",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL121.jpg",
    description: "Hollandairs 121 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "122",
    slug: "hollandairs-122",
    name: "Hollandairs 122",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL122.jpg",
    description: "Hollandairs 122 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "123",
    slug: "hollandairs-123",
    name: "Hollandairs 123",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL123.jpg",
    description: "Hollandairs 123 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "124",
    slug: "hollandairs-124",
    name: "Hollandairs 124",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL124.jpg",
    description: "Hollandairs 124 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "125",
    slug: "hollandairs-125",
    name: "Hollandairs 125",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL125.jpg",
    description: "Hollandairs 125 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "126",
    slug: "hollandairs-126",
    name: "Hollandairs 126",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL126.jpg",
    description: "Hollandairs 126 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "127",
    slug: "hollandairs-127",
    name: "Hollandairs 127",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL127.jpg",
    description: "Hollandairs 127 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "128",
    slug: "hollandairs-128",
    name: "Hollandairs 128",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL128.jpg",
    description: "Hollandairs 128 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "129",
    slug: "hollandairs-129",
    name: "Hollandairs 129",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL129.jpg",
    description: "Hollandairs 129 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "130",
    slug: "hollandairs-130",
    name: "Hollandairs 130",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL130.jpg",
    description: "Hollandairs 130 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "131",
    slug: "hollandairs-131",
    name: "Hollandairs 131",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL131.jpg",
    description: "Hollandairs 131 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "132",
    slug: "hollandairs-132",
    name: "Hollandairs 132",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL132.jpg",
    description: "Hollandairs 132 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "133",
    slug: "hollandairs-133",
    name: "Hollandairs 133",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL133.jpg",
    description: "Hollandairs 133 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "134",
    slug: "hollandairs-134",
    name: "Hollandairs 134",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL134.jpg",
    description: "Hollandairs 134 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "135",
    slug: "hollandairs-135",
    name: "Hollandairs 135",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL135.jpg",
    description: "Hollandairs 135 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "136",
    slug: "hollandairs-136",
    name: "Hollandairs 136",
    category: "Hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL136.jpg",
    description: "Hollandairs 136 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 10,
  },
  {
    id: "137",
    slug: "small-diamond-001",
    name: "Small Diamond 01",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond1.jpg",
    description: "Small Diamond 01 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "138",
    slug: "small-diamond-002",
    name: "Small Diamond 02",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond2.jpg",
    description: "Small Diamond 02 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "139",
    slug: "small-diamond-003",
    name: "Small Diamond 03",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond3.jpg",
    description: "Small Diamond 03 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "140",
    slug: "small-diamond-004",
    name: "Small Diamond 04",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond4.jpg",
    description: "Small Diamond 04 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "141",
    slug: "small-diamond-005",
    name: "Small Diamond 05",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond5.jpg",
    description: "Small Diamond 05 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "142",
    slug: "small-diamond-006",
    name: "Small Diamond 06",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond6.jpg",
    description: "Small Diamond 06 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "143",
    slug: "small-diamond-007",
    name: "Small Diamond 07",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond7.jpg",
    description: "Small Diamond 07 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "144",
    slug: "small-diamond-008",
    name: "Small Diamond 08",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond8.jpg",
    description: "Small Diamond 08 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "145",
    slug: "small-diamond-009",
    name: "Small Diamond 09",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond9.jpg",
    description: "Small Diamond 09 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "146",
    slug: "small-diamond-010",
    name: "Small Diamond 10",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond10.jpg",
    description: "Small Diamond 10 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "147",
    slug: "small-diamond-011",
    name: "Small Diamond 11",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond11.jpg",
    description: "Small Diamond 11 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "148",
    slug: "small-diamond-012",
    name: "Small Diamond 12",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond12.jpg",
    description: "Small Diamond 12 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "149",
    slug: "small-diamond-013",
    name: "Small Diamond 13",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond13.jpg",
    description: "Small Diamond 13 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "150",
    slug: "small-diamond-014",
    name: "Small Diamond 14",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond14.jpg",
    description: "Small Diamond 14 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "151",
    slug: "small-diamond-015",
    name: "Small Diamond 15",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond15.jpg",
    description: "Small Diamond 15 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "152",
    slug: "small-diamond-016",
    name: "Small Diamond 16",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond16.jpg",
    description: "Small Diamond 16 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "153",
    slug: "small-diamond-017",
    name: "Small Diamond 17",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond17.jpg",
    description: "Small Diamond 17 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "154",
    slug: "small-diamond-018",
    name: "Small Diamond 18",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond18.jpg",
    description: "Small Diamond 18 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "155",
    slug: "small-diamond-019",
    name: "Small Diamond 19",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond19.jpg",
    description: "Small Diamond 19 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "156",
    slug: "small-diamond-020",
    name: "Small Diamond 20",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond20.jpg",
    description: "Small Diamond 20 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "157",
    slug: "small-diamond-021",
    name: "Small Diamond 21",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond21.jpg",
    description: "Small Diamond 21 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "158",
    slug: "small-diamond-022",
    name: "Small Diamond 22",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond22.jpg",
    description: "Small Diamond 22 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "159",
    slug: "small-diamond-023",
    name: "Small Diamond 23",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond23.jpg",
    description: "Small Diamond 23 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "160",
    slug: "small-diamond-024",
    name: "Small Diamond 24",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond24.jpg",
    description: "Small Diamond 24 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "161",
    slug: "small-diamond-025",
    name: "Small Diamond 25",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond25.jpg",
    description: "Small Diamond 25 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "162",
    slug: "small-diamond-026",
    name: "Small Diamond 26",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond26.jpg",
    description: "Small Diamond 26 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "163",
    slug: "small-diamond-027",
    name: "Small Diamond 27",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond27.jpg",
    description: "Small Diamond 27 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "164",
    slug: "small-diamond-028",
    name: "Small Diamond 28",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond28.jpg",
    description: "Small Diamond 28 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "165",
    slug: "small-diamond-029",
    name: "Small Diamond 29",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond29.jpg",
    description: "Small Diamond 29 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "166",
    slug: "small-diamond-030",
    name: "Small Diamond 30",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond30.jpg",
    description: "Small Diamond 30 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "167",
    slug: "small-diamond-031",
    name: "Small Diamond 31",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond31.jpg",
    description: "Small Diamond 31 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "168",
    slug: "small-diamond-032",
    name: "Small Diamond 32",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond32.jpg",
    description: "Small Diamond 32 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "169",
    slug: "small-diamond-033",
    name: "Small Diamond 33",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond33.jpg",
    description: "Small Diamond 33 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "170",
    slug: "small-diamond-034",
    name: "Small Diamond 34",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond34.jpg",
    description: "Small Diamond 34 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "171",
    slug: "small-diamond-035",
    name: "Small Diamond 35",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond35.jpg",
    description: "Small Diamond 35 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "172",
    slug: "small-diamond-036",
    name: "Small Diamond 36",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond36.jpg",
    description: "Small Diamond 36 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "173",
    slug: "small-diamond-037",
    name: "Small Diamond 37",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond37.jpg",
    description: "Small Diamond 37 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "174",
    slug: "small-diamond-038",
    name: "Small Diamond 38",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond38.jpg",
    description: "Small Diamond 38 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "175",
    slug: "small-diamond-039",
    name: "Small Diamond 39",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond39.jpg",
    description: "Small Diamond 39 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "176",
    slug: "small-diamond-040",
    name: "Small Diamond 40",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond40.jpg",
    description: "Small Diamond 40 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "177",
    slug: "small-diamond-041",
    name: "Small Diamond 41",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond41.jpg",
    description: "Small Diamond 41 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "178",
    slug: "small-diamond-042",
    name: "Small Diamond 42",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond42.jpg",
    description: "Small Diamond 42 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "179",
    slug: "small-diamond-043",
    name: "Small Diamond 43",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond43.jpg",
    description: "Small Diamond 43 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "180",
    slug: "small-diamond-044",
    name: "Small Diamond 44",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond44.jpg",
    description: "Small Diamond 44 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "181",
    slug: "small-diamond-045",
    name: "Small Diamond 45",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond45.jpg",
    description: "Small Diamond 45 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "182",
    slug: "small-diamond-046",
    name: "Small Diamond 46",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond46.jpg",
    description: "Small Diamond 46 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "183",
    slug: "small-diamond-047",
    name: "Small Diamond 47",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond47.jpg",
    description: "Small Diamond 47 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "184",
    slug: "small-diamond-048",
    name: "Small Diamond 48",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond48.jpg",
    description: "Small Diamond 48 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "185",
    slug: "small-diamond-049",
    name: "Small Diamond 49",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond49.jpg",
    description: "Small Diamond 49 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "186",
    slug: "small-diamond-050",
    name: "Small Diamond 50",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond50.jpg",
    description: "Small Diamond 50 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "187",
    slug: "small-diamond-051",
    name: "Small Diamond 51",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond51.jpg",
    description: "Small Diamond 51 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "188",
    slug: "small-diamond-052",
    name: "Small Diamond 52",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond52.jpg",
    description: "Small Diamond 52 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "189",
    slug: "small-diamond-053",
    name: "Small Diamond 53",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond53.jpg",
    description: "Small Diamond 53 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "190",
    slug: "small-diamond-054",
    name: "Small Diamond 54",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond54.jpg",
    description: "Small Diamond 54 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "191",
    slug: "small-diamond-055",
    name: "Small Diamond 55",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond55.jpg",
    description: "Small Diamond 55 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "192",
    slug: "small-diamond-056",
    name: "Small Diamond 56",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond56.jpg",
    description: "Small Diamond 56 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "193",
    slug: "small-diamond-057",
    name: "Small Diamond 57",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond57.jpg",
    description: "Small Diamond 57 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "194",
    slug: "small-diamond-058",
    name: "Small Diamond 58",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond58.jpg",
    description: "Small Diamond 58 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "195",
    slug: "small-diamond-059",
    name: "Small Diamond 59",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond59.jpg",
    description: "Small Diamond 59 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "196",
    slug: "small-diamond-060",
    name: "Small Diamond 60",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond60.jpg",
    description: "Small Diamond 60 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "197",
    slug: "small-diamond-061",
    name: "Small Diamond 61",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond61.jpg",
    description: "Small Diamond 61 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "198",
    slug: "small-diamond-062",
    name: "Small Diamond 62",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond62.jpg",
    description: "Small Diamond 62 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "199",
    slug: "small-diamond-063",
    name: "Small Diamond 63",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond63.jpg",
    description: "Small Diamond 63 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "200",
    slug: "small-diamond-064",
    name: "Small Diamond 64",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond64.jpg",
    description: "Small Diamond 64 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "201",
    slug: "small-diamond-065",
    name: "Small Diamond 65",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond65.jpg",
    description: "Small Diamond 65 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "202",
    slug: "small-diamond-066",
    name: "Small Diamond 66",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond66.jpg",
    description: "Small Diamond 66 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "203",
    slug: "small-diamond-067",
    name: "Small Diamond 67",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond67.jpg",
    description: "Small Diamond 67 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "204",
    slug: "small-diamond-068",
    name: "Small Diamond 68",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond68.jpg",
    description: "Small Diamond 68 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "205",
    slug: "small-diamond-069",
    name: "Small Diamond 69",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond69.jpg",
    description: "Small Diamond 69 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "206",
    slug: "small-diamond-070",
    name: "Small Diamond 70",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond70.jpg",
    description: "Small Diamond 70 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "207",
    slug: "small-diamond-071",
    name: "Small Diamond 71",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond71.jpg",
    description: "Small Diamond 71 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "208",
    slug: "small-diamond-072",
    name: "Small Diamond 72",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond72.jpg",
    description: "Small Diamond 72 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "209",
    slug: "small-diamond-073",
    name: "Small Diamond 73",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond73.jpg",
    description: "Small Diamond 73 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "210",
    slug: "small-diamond-074",
    name: "Small Diamond 74",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond74.jpg",
    description: "Small Diamond 74 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "211",
    slug: "small-diamond-075",
    name: "Small Diamond 75",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond75.jpg",
    description: "Small Diamond 75 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "212",
    slug: "small-diamond-076",
    name: "Small Diamond 76",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond76.jpg",
    description: "Small Diamond 76 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "213",
    slug: "small-diamond-077",
    name: "Small Diamond 77",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond77.jpg",
    description: "Small Diamond 77 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "214",
    slug: "small-diamond-078",
    name: "Small Diamond 78",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond78.jpg",
    description: "Small Diamond 78 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "215",
    slug: "small-diamond-079",
    name: "Small Diamond 79",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond79.jpg",
    description: "Small Diamond 79 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "216",
    slug: "small-diamond-080",
    name: "Small Diamond 80",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond80.jpg",
    description: "Small Diamond 80 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "217",
    slug: "small-diamond-081",
    name: "Small Diamond 81",
    category: "Small Diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond81.jpg",
    description: "Small Diamond 81 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 15,
  },
  {
    id: "218",
    slug: "grand-super-001",
    name: "Grand Super 01",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 1.png",
    description: "Grand Super 01 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "219",
    slug: "grand-super-002",
    name: "Grand Super 02",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 2.png",
    description: "Grand Super 02 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "220",
    slug: "grand-super-003",
    name: "Grand Super 03",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 3.png",
    description: "Grand Super 03 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "221",
    slug: "grand-super-004",
    name: "Grand Super 04",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 4.png",
    description: "Grand Super 04 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "222",
    slug: "grand-super-005",
    name: "Grand Super 05",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 5.png",
    description: "Grand Super 05 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "223",
    slug: "grand-super-006",
    name: "Grand Super 06",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 6.png",
    description: "Grand Super 06 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "224",
    slug: "grand-super-007",
    name: "Grand Super 07",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 7.png",
    description: "Grand Super 07 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "225",
    slug: "grand-super-008",
    name: "Grand Super 08",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 8.png",
    description: "Grand Super 08 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "226",
    slug: "grand-super-009",
    name: "Grand Super 09",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 9.png",
    description: "Grand Super 09 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "227",
    slug: "grand-super-010",
    name: "Grand Super 10",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 10.png",
    description: "Grand Super 10 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "228",
    slug: "grand-super-011",
    name: "Grand Super 11",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 11.png",
    description: "Grand Super 11 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "229",
    slug: "grand-super-012",
    name: "Grand Super 12",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 12.png",
    description: "Grand Super 12 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "230",
    slug: "grand-super-013",
    name: "Grand Super 13",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 13.png",
    description: "Grand Super 13 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "231",
    slug: "grand-super-014",
    name: "Grand Super 14",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 14.png",
    description: "Grand Super 14 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "232",
    slug: "grand-super-015",
    name: "Grand Super 15",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 15.png",
    description: "Grand Super 15 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "233",
    slug: "grand-super-016",
    name: "Grand Super 16",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 16.png",
    description: "Grand Super 16 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "234",
    slug: "grand-super-017",
    name: "Grand Super 17",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 17.png",
    description: "Grand Super 17 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "235",
    slug: "grand-super-018",
    name: "Grand Super 18",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 18.png",
    description: "Grand Super 18 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "236",
    slug: "grand-super-019",
    name: "Grand Super 19",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 19.png",
    description: "Grand Super 19 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "237",
    slug: "grand-super-020",
    name: "Grand Super 20",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 20.png",
    description: "Grand Super 20 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "238",
    slug: "grand-super-021",
    name: "Grand Super 21",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 21.png",
    description: "Grand Super 21 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "239",
    slug: "grand-super-022",
    name: "Grand Super 22",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 22.png",
    description: "Grand Super 22 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "240",
    slug: "grand-super-023",
    name: "Grand Super 23",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 23.png",
    description: "Grand Super 23 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "241",
    slug: "grand-super-024",
    name: "Grand Super 24",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 24.png",
    description: "Grand Super 24 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "242",
    slug: "grand-super-025",
    name: "Grand Super 25",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 25.png",
    description: "Grand Super 25 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "243",
    slug: "grand-super-026",
    name: "Grand Super 26",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 26.png",
    description: "Grand Super 26 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "244",
    slug: "grand-super-027",
    name: "Grand Super 27",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 27.png",
    description: "Grand Super 27 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "245",
    slug: "grand-super-028",
    name: "Grand Super 28",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 28.png",
    description: "Grand Super 28 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "246",
    slug: "grand-super-029",
    name: "Grand Super 29",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 29.png",
    description: "Grand Super 29 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "247",
    slug: "grand-super-030",
    name: "Grand Super 30",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 30.png",
    description: "Grand Super 30 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "248",
    slug: "grand-super-031",
    name: "Grand Super 31",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 31.png",
    description: "Grand Super 31 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "249",
    slug: "grand-super-032",
    name: "Grand Super 32",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 32.png",
    description: "Grand Super 32 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "250",
    slug: "grand-super-033",
    name: "Grand Super 33",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 33.png",
    description: "Grand Super 33 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "251",
    slug: "grand-super-034",
    name: "Grand Super 34",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 34.png",
    description: "Grand Super 34 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "252",
    slug: "grand-super-035",
    name: "Grand Super 35",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 35.png",
    description: "Grand Super 35 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "253",
    slug: "grand-super-036",
    name: "Grand Super 36",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 36.png",
    description: "Grand Super 36 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "254",
    slug: "grand-super-037",
    name: "Grand Super 37",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 37.png",
    description: "Grand Super 37 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "255",
    slug: "grand-super-038",
    name: "Grand Super 38",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 38.png",
    description: "Grand Super 38 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "256",
    slug: "grand-super-039",
    name: "Grand Super 39",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 39.png",
    description: "Grand Super 39 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "257",
    slug: "grand-super-040",
    name: "Grand Super 40",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 40.png",
    description: "Grand Super 40 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "258",
    slug: "grand-super-041",
    name: "Grand Super 41",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 41.png",
    description: "Grand Super 41 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "259",
    slug: "grand-super-042",
    name: "Grand Super 42",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 42.png",
    description: "Grand Super 42 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "260",
    slug: "grand-super-043",
    name: "Grand Super 43",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 43.png",
    description: "Grand Super 43 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "261",
    slug: "grand-super-044",
    name: "Grand Super 44",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 44.png",
    description: "Grand Super 44 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "262",
    slug: "grand-super-045",
    name: "Grand Super 45",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 45.png",
    description: "Grand Super 45 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "263",
    slug: "grand-super-046",
    name: "Grand Super 46",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 46.png",
    description: "Grand Super 46 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "264",
    slug: "grand-super-047",
    name: "Grand Super 47",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 47.png",
    description: "Grand Super 47 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "265",
    slug: "grand-super-048",
    name: "Grand Super 48",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 48.png",
    description: "Grand Super 48 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "266",
    slug: "grand-super-049",
    name: "Grand Super 49",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 49.png",
    description: "Grand Super 49 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "267",
    slug: "grand-super-050",
    name: "Grand Super 50",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 50.png",
    description: "Grand Super 50 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "268",
    slug: "grand-super-051",
    name: "Grand Super 51",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 51.png",
    description: "Grand Super 51 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "269",
    slug: "grand-super-052",
    name: "Grand Super 52",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 52.png",
    description: "Grand Super 52 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "270",
    slug: "grand-super-053",
    name: "Grand Super 53",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 53.png",
    description: "Grand Super 53 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "271",
    slug: "grand-super-054",
    name: "Grand Super 54",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 54.png",
    description: "Grand Super 54 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "272",
    slug: "grand-super-055",
    name: "Grand Super 55",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 55.png",
    description: "Grand Super 55 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "273",
    slug: "grand-super-056",
    name: "Grand Super 56",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 56.png",
    description: "Grand Super 56 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "274",
    slug: "grand-super-057",
    name: "Grand Super 57",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 57.png",
    description: "Grand Super 57 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "275",
    slug: "grand-super-058",
    name: "Grand Super 58",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 58.png",
    description: "Grand Super 58 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "276",
    slug: "grand-super-059",
    name: "Grand Super 59",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 59.png",
    description: "Grand Super 59 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "277",
    slug: "grand-super-060",
    name: "Grand Super 60",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 60.png",
    description: "Grand Super 60 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "278",
    slug: "grand-super-061",
    name: "Grand Super 61",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 61.png",
    description: "Grand Super 61 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "279",
    slug: "grand-super-062",
    name: "Grand Super 62",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 62.png",
    description: "Grand Super 62 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "280",
    slug: "grand-super-063",
    name: "Grand Super 63",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 63.png",
    description: "Grand Super 63 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "281",
    slug: "grand-super-064",
    name: "Grand Super 64",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 64.png",
    description: "Grand Super 64 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "282",
    slug: "grand-super-065",
    name: "Grand Super 65",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 65.png",
    description: "Grand Super 65 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "283",
    slug: "grand-super-066",
    name: "Grand Super 66",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 66.png",
    description: "Grand Super 66 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "284",
    slug: "grand-super-067",
    name: "Grand Super 67",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 67.png",
    description: "Grand Super 67 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "285",
    slug: "grand-super-068",
    name: "Grand Super 68",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 68.png",
    description: "Grand Super 68 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "286",
    slug: "grand-super-069",
    name: "Grand Super 69",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 69.png",
    description: "Grand Super 69 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "287",
    slug: "grand-super-070",
    name: "Grand Super 70",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 70.png",
    description: "Grand Super 70 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "288",
    slug: "grand-super-071",
    name: "Grand Super 71",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 71.jpg",
    description: "Grand Super 71 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "289",
    slug: "grand-super-072",
    name: "Grand Super 72",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 72.jpg",
    description: "Grand Super 72 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "290",
    slug: "grand-super-073",
    name: "Grand Super 73",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 73.jpg",
    description: "Grand Super 73 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "291",
    slug: "grand-super-074",
    name: "Grand Super 74",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 74.jpg",
    description: "Grand Super 74 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "292",
    slug: "grand-super-075",
    name: "Grand Super 75",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 75.jpg",
    description: "Grand Super 75 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "293",
    slug: "grand-super-076",
    name: "Grand Super 76",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 76.jpg",
    description: "Grand Super 76 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "294",
    slug: "grand-super-077",
    name: "Grand Super 77",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 77.jpg",
    description: "Grand Super 77 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "295",
    slug: "grand-super-078",
    name: "Grand Super 78",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 78.jpg",
    description: "Grand Super 78 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "296",
    slug: "grand-super-079",
    name: "Grand Super 79",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 79.jpg",
    description: "Grand Super 79 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "297",
    slug: "grand-super-080",
    name: "Grand Super 80",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 80.jpg",
    description: "Grand Super 80 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "298",
    slug: "grand-super-081",
    name: "Grand Super 81",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 81.jpg",
    description: "Grand Super 81 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "299",
    slug: "grand-super-082",
    name: "Grand Super 82",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 82.jpg",
    description: "Grand Super 82 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "300",
    slug: "grand-super-083",
    name: "Grand Super 83",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 83.jpg",
    description: "Grand Super 83 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "301",
    slug: "grand-super-084",
    name: "Grand Super 84",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 84.jpg",
    description: "Grand Super 84 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "302",
    slug: "grand-super-085",
    name: "Grand Super 85",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 85.jpg",
    description: "Grand Super 85 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "303",
    slug: "grand-super-086",
    name: "Grand Super 86",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 86.jpg",
    description: "Grand Super 86 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "304",
    slug: "grand-super-087",
    name: "Grand Super 87",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 87.jpg",
    description: "Grand Super 87 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "305",
    slug: "grand-super-088",
    name: "Grand Super 88",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 88.jpg",
    description: "Grand Super 88 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "306",
    slug: "grand-super-089",
    name: "Grand Super 89",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 89.jpg",
    description: "Grand Super 89 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "307",
    slug: "grand-super-090",
    name: "Grand Super 90",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 90.jpg",
    description: "Grand Super 90 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "308",
    slug: "grand-super-091",
    name: "Grand Super 91",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 91.jpg",
    description: "Grand Super 91 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "309",
    slug: "grand-super-092",
    name: "Grand Super 92",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 92.jpg",
    description: "Grand Super 92 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "310",
    slug: "grand-super-093",
    name: "Grand Super 93",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 93.jpg",
    description: "Grand Super 93 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "311",
    slug: "grand-super-094",
    name: "Grand Super 94",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 94.jpg",
    description: "Grand Super 94 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "312",
    slug: "grand-super-095",
    name: "Grand Super 95",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 95.jpg",
    description: "Grand Super 95 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "313",
    slug: "grand-super-096",
    name: "Grand Super 96",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 96.jpg",
    description: "Grand Super 96 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "314",
    slug: "grand-super-097",
    name: "Grand Super 97",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 97.jpg",
    description: "Grand Super 97 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "315",
    slug: "grand-super-098",
    name: "Grand Super 98",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 98.jpg",
    description: "Grand Super 98 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "316",
    slug: "grand-super-099",
    name: "Grand Super 99",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 99.jpg",
    description: "Grand Super 99 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "317",
    slug: "grand-super-100",
    name: "Grand Super 100",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 100.jpg",
    description: "Grand Super 100 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "318",
    slug: "grand-super-101",
    name: "Grand Super 101",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 101.jpg",
    description: "Grand Super 101 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "319",
    slug: "grand-super-102",
    name: "Grand Super 102",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 102.jpg",
    description: "Grand Super 102 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "320",
    slug: "grand-super-103",
    name: "Grand Super 103",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 103.jpg",
    description: "Grand Super 103 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "321",
    slug: "grand-super-104",
    name: "Grand Super 104",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 104.jpg",
    description: "Grand Super 104 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "322",
    slug: "grand-super-105",
    name: "Grand Super 105",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 105.jpg",
    description: "Grand Super 105 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "323",
    slug: "grand-super-106",
    name: "Grand Super 106",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 106.jpg",
    description: "Grand Super 106 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "324",
    slug: "grand-super-107",
    name: "Grand Super 107",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 107.jpg",
    description: "Grand Super 107 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "325",
    slug: "grand-super-108",
    name: "Grand Super 108",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 108.jpg",
    description: "Grand Super 108 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "326",
    slug: "grand-super-109",
    name: "Grand Super 109",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 109.jpg",
    description: "Grand Super 109 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "327",
    slug: "grand-super-110",
    name: "Grand Super 110",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 110.jpg",
    description: "Grand Super 110 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "328",
    slug: "grand-super-111",
    name: "Grand Super 111",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 111.jpg",
    description: "Grand Super 111 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "329",
    slug: "grand-super-112",
    name: "Grand Super 112",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 112.jpg",
    description: "Grand Super 112 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "330",
    slug: "grand-super-113",
    name: "Grand Super 113",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 113.jpg",
    description: "Grand Super 113 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "331",
    slug: "grand-super-114",
    name: "Grand Super 114",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 114.jpg",
    description: "Grand Super 114 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "332",
    slug: "grand-super-115",
    name: "Grand Super 115",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 115.jpg",
    description: "Grand Super 115 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "333",
    slug: "grand-super-116",
    name: "Grand Super 116",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 116.jpg",
    description: "Grand Super 116 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "334",
    slug: "grand-super-117",
    name: "Grand Super 117",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 117.jpg",
    description: "Grand Super 117 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "335",
    slug: "grand-super-118",
    name: "Grand Super 118",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 118.jpg",
    description: "Grand Super 118 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "336",
    slug: "grand-super-119",
    name: "Grand Super 119",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 119.jpg",
    description: "Grand Super 119 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "337",
    slug: "grand-super-120",
    name: "Grand Super 120",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 120.jpg",
    description: "Grand Super 120 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "338",
    slug: "grand-super-121",
    name: "Grand Super 121",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 121.jpg",
    description: "Grand Super 121 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "339",
    slug: "grand-super-122",
    name: "Grand Super 122",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 122.jpg",
    description: "Grand Super 122 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "340",
    slug: "grand-super-123",
    name: "Grand Super 123",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 123.jpg",
    description: "Grand Super 123 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "341",
    slug: "grand-super-124",
    name: "Grand Super 124",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 124.jpg",
    description: "Grand Super 124 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "342",
    slug: "grand-super-125",
    name: "Grand Super 125",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 125.jpg",
    description: "Grand Super 125 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "343",
    slug: "grand-super-126",
    name: "Grand Super 126",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 126.jpg",
    description: "Grand Super 126 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "344",
    slug: "grand-super-127",
    name: "Grand Super 127",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 127.jpg",
    description: "Grand Super 127 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "345",
    slug: "grand-super-128",
    name: "Grand Super 128",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 128.jpg",
    description: "Grand Super 128 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "346",
    slug: "grand-super-129",
    name: "Grand Super 129",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 129.jpg",
    description: "Grand Super 129 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "347",
    slug: "grand-super-130",
    name: "Grand Super 130",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 130.jpg",
    description: "Grand Super 130 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "348",
    slug: "grand-super-131",
    name: "Grand Super 131",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 131.jpg",
    description: "Grand Super 131 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "349",
    slug: "grand-super-132",
    name: "Grand Super 132",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 132.jpg",
    description: "Grand Super 132 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "350",
    slug: "grand-super-133",
    name: "Grand Super 133",
    category: "Grand Super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 133.jpg",
    description: "Grand Super 133 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 13,
  },
  {
    id: "351",
    slug: "super-wax-001",
    name: "Super Wax 01",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP1.jpg",
    description: "Super Wax 01 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "352",
    slug: "super-wax-002",
    name: "Super Wax 02",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP2.jpg",
    description: "Super Wax 02 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "353",
    slug: "super-wax-003",
    name: "Super Wax 03",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP3.png",
    description: "Super Wax 03 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "354",
    slug: "super-wax-004",
    name: "Super Wax 04",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP4.png",
    description: "Super Wax 04 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "355",
    slug: "super-wax-005",
    name: "Super Wax 05",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP5.png",
    description: "Super Wax 05 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "356",
    slug: "super-wax-006",
    name: "Super Wax 06",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP6.png",
    description: "Super Wax 06 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "357",
    slug: "super-wax-007",
    name: "Super Wax 07",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP7.png",
    description: "Super Wax 07 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "358",
    slug: "super-wax-008",
    name: "Super Wax 08",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP8.png",
    description: "Super Wax 08 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "359",
    slug: "super-wax-009",
    name: "Super Wax 09",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP9.png",
    description: "Super Wax 09 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "360",
    slug: "super-wax-010",
    name: "Super Wax 10",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP10.png",
    description: "Super Wax 10 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "361",
    slug: "super-wax-011",
    name: "Super Wax 11",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP11.png",
    description: "Super Wax 11 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "362",
    slug: "super-wax-012",
    name: "Super Wax 12",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP12.png",
    description: "Super Wax 12 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "363",
    slug: "super-wax-013",
    name: "Super Wax 13",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP13.png",
    description: "Super Wax 13 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "364",
    slug: "super-wax-014",
    name: "Super Wax 14",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP14.png",
    description: "Super Wax 14 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "365",
    slug: "super-wax-015",
    name: "Super Wax 15",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP15.png",
    description: "Super Wax 15 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "366",
    slug: "super-wax-016",
    name: "Super Wax 16",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP16.png",
    description: "Super Wax 16 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "367",
    slug: "super-wax-017",
    name: "Super Wax 17",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP17.png",
    description: "Super Wax 17 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "368",
    slug: "super-wax-018",
    name: "Super Wax 18",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP18.png",
    description: "Super Wax 18 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "369",
    slug: "super-wax-019",
    name: "Super Wax 19",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP19.png",
    description: "Super Wax 19 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "370",
    slug: "super-wax-020",
    name: "Super Wax 20",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP20.png",
    description: "Super Wax 20 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "371",
    slug: "super-wax-021",
    name: "Super Wax 21",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP21.png",
    description: "Super Wax 21 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "372",
    slug: "super-wax-022",
    name: "Super Wax 22",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP22.png",
    description: "Super Wax 22 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "373",
    slug: "super-wax-023",
    name: "Super Wax 23",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP23.png",
    description: "Super Wax 23 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "374",
    slug: "super-wax-024",
    name: "Super Wax 24",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP24.jpg",
    description: "Super Wax 24 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "375",
    slug: "super-wax-025",
    name: "Super Wax 25",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP25.jpg",
    description: "Super Wax 25 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "376",
    slug: "super-wax-026",
    name: "Super Wax 26",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP26.jpg",
    description: "Super Wax 26 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "377",
    slug: "super-wax-027",
    name: "Super Wax 27",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP27.jpg",
    description: "Super Wax 27 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "378",
    slug: "super-wax-028",
    name: "Super Wax 28",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP28.jpg",
    description: "Super Wax 28 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "379",
    slug: "super-wax-029",
    name: "Super Wax 29",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP29.jpg",
    description: "Super Wax 29 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "380",
    slug: "super-wax-030",
    name: "Super Wax 30",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP30.jpg",
    description: "Super Wax 30 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "381",
    slug: "super-wax-031",
    name: "Super Wax 31",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP31.jpg",
    description: "Super Wax 31 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "382",
    slug: "super-wax-032",
    name: "Super Wax 32",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP32.jpg",
    description: "Super Wax 32 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "383",
    slug: "super-wax-033",
    name: "Super Wax 33",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP33.jpg",
    description: "Super Wax 33 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "384",
    slug: "super-wax-034",
    name: "Super Wax 34",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP34.jpg",
    description: "Super Wax 34 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "385",
    slug: "super-wax-035",
    name: "Super Wax 35",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP35.jpg",
    description: "Super Wax 35 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "386",
    slug: "super-wax-036",
    name: "Super Wax 36",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP36.jpg",
    description: "Super Wax 36 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "387",
    slug: "super-wax-037",
    name: "Super Wax 37",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP37.jpg",
    description: "Super Wax 37 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "388",
    slug: "super-wax-038",
    name: "Super Wax 38",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP38.jpg",
    description: "Super Wax 38 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "389",
    slug: "super-wax-039",
    name: "Super Wax 39",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP39.jpg",
    description: "Super Wax 39 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "390",
    slug: "super-wax-040",
    name: "Super Wax 40",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP40.jpg",
    description: "Super Wax 40 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "391",
    slug: "super-wax-041",
    name: "Super Wax 41",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP41.jpg",
    description: "Super Wax 41 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "392",
    slug: "super-wax-042",
    name: "Super Wax 42",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP42.jpg",
    description: "Super Wax 42 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "393",
    slug: "super-wax-043",
    name: "Super Wax 43",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP43.jpg",
    description: "Super Wax 43 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "394",
    slug: "super-wax-044",
    name: "Super Wax 44",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP44.jpg",
    description: "Super Wax 44 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "395",
    slug: "super-wax-045",
    name: "Super Wax 45",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP45.jpg",
    description: "Super Wax 45 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "396",
    slug: "super-wax-046",
    name: "Super Wax 46",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP46.jpg",
    description: "Super Wax 46 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "397",
    slug: "super-wax-047",
    name: "Super Wax 47",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP47.jpg",
    description: "Super Wax 47 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "398",
    slug: "super-wax-048",
    name: "Super Wax 48",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP48.jpg",
    description: "Super Wax 48 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "399",
    slug: "super-wax-049",
    name: "Super Wax 49",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP49.jpg",
    description: "Super Wax 49 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "400",
    slug: "super-wax-050",
    name: "Super Wax 50",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP50.jpg",
    description: "Super Wax 50 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "401",
    slug: "super-wax-051",
    name: "Super Wax 51",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP51.jpg",
    description: "Super Wax 51 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "402",
    slug: "super-wax-052",
    name: "Super Wax 52",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP52.jpg",
    description: "Super Wax 52 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "403",
    slug: "super-wax-053",
    name: "Super Wax 53",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP53.jpg",
    description: "Super Wax 53 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "404",
    slug: "super-wax-054",
    name: "Super Wax 54",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP54.jpg",
    description: "Super Wax 54 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "405",
    slug: "super-wax-055",
    name: "Super Wax 55",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP55.jpg",
    description: "Super Wax 55 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "406",
    slug: "super-wax-056",
    name: "Super Wax 56",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP56.jpg",
    description: "Super Wax 56 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "407",
    slug: "super-wax-057",
    name: "Super Wax 57",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP57.jpg",
    description: "Super Wax 57 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "408",
    slug: "super-wax-058",
    name: "Super Wax 58",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP58.jpg",
    description: "Super Wax 58 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "409",
    slug: "super-wax-059",
    name: "Super Wax 59",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP59.jpg",
    description: "Super Wax 59 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "410",
    slug: "super-wax-060",
    name: "Super Wax 60",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP60.jpg",
    description: "Super Wax 60 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "411",
    slug: "super-wax-061",
    name: "Super Wax 61",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP61.jpg",
    description: "Super Wax 61 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "412",
    slug: "super-wax-062",
    name: "Super Wax 62",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP62.jpg",
    description: "Super Wax 62 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "413",
    slug: "super-wax-063",
    name: "Super Wax 63",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP63.jpg",
    description: "Super Wax 63 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "414",
    slug: "super-wax-064",
    name: "Super Wax 64",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP64.jpg",
    description: "Super Wax 64 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "415",
    slug: "super-wax-065",
    name: "Super Wax 65",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP65.jpg",
    description: "Super Wax 65 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "416",
    slug: "super-wax-066",
    name: "Super Wax 66",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP66.jpg",
    description: "Super Wax 66 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "417",
    slug: "super-wax-067",
    name: "Super Wax 67",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP67.jpg",
    description: "Super Wax 67 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "418",
    slug: "super-wax-068",
    name: "Super Wax 68",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP68.jpg",
    description: "Super Wax 68 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "419",
    slug: "super-wax-069",
    name: "Super Wax 69",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP69.jpg",
    description: "Super Wax 69 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "420",
    slug: "super-wax-070",
    name: "Super Wax 70",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP70.jpg",
    description: "Super Wax 70 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "421",
    slug: "super-wax-071",
    name: "Super Wax 71",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP71.jpg",
    description: "Super Wax 71 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "422",
    slug: "super-wax-072",
    name: "Super Wax 72",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP72.jpg",
    description: "Super Wax 72 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "423",
    slug: "super-wax-073",
    name: "Super Wax 73",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP73.jpg",
    description: "Super Wax 73 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "424",
    slug: "super-wax-074",
    name: "Super Wax 74",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP74.jpg",
    description: "Super Wax 74 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "425",
    slug: "super-wax-075",
    name: "Super Wax 75",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP75.jpg",
    description: "Super Wax 75 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "426",
    slug: "super-wax-076",
    name: "Super Wax 76",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP76.jpg",
    description: "Super Wax 76 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "427",
    slug: "super-wax-077",
    name: "Super Wax 77",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP77.jpg",
    description: "Super Wax 77 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "428",
    slug: "super-wax-078",
    name: "Super Wax 78",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP78.jpg",
    description: "Super Wax 78 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "429",
    slug: "super-wax-079",
    name: "Super Wax 79",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP79.jpg",
    description: "Super Wax 79 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "430",
    slug: "super-wax-080",
    name: "Super Wax 80",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP80.jpg",
    description: "Super Wax 80 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "431",
    slug: "super-wax-081",
    name: "Super Wax 81",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP81.jpg",
    description: "Super Wax 81 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "432",
    slug: "super-wax-082",
    name: "Super Wax 82",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP82.jpg",
    description: "Super Wax 82 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "433",
    slug: "super-wax-083",
    name: "Super Wax 83",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP83.jpg",
    description: "Super Wax 83 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "434",
    slug: "super-wax-084",
    name: "Super Wax 84",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP84.jpg",
    description: "Super Wax 84 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "435",
    slug: "super-wax-085",
    name: "Super Wax 85",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP85.jpg",
    description: "Super Wax 85 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "436",
    slug: "super-wax-086",
    name: "Super Wax 86",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP86.jpg",
    description: "Super Wax 86 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "437",
    slug: "super-wax-087",
    name: "Super Wax 87",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP87.jpg",
    description: "Super Wax 87 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  },
  {
    id: "438",
    slug: "super-wax-088",
    name: "Super Wax 88",
    category: "Super Wax",
    image: "/catalog-import/super-wax/26-4/SUP88.jpg",
    description: "Super Wax 88 is an authentic African wax print textile curated for premium tailoring and statement silhouettes.",
    material: "100% Cotton",
    colors: [
      "Multi Color"
    ],
    price: 11,
  }
];

export const featuredProducts = products.slice(0, 8);

export const categories = [
  {
    name: "Hollandairs",
    slug: "hollandairs",
    image: "/catalog-import/hollandairs/26-4/HL1.png",
  },
  {
    name: "Small Diamond",
    slug: "small-diamond",
    image: "/catalog-import/small-diamond/26-4/Small Diamond1.jpg",
  },
  {
    name: "Grand Super",
    slug: "grand-super",
    image: "/catalog-import/grand-super/grand-super-13/Grand Super 1.png",
  },
  {
    name: "Super Wax",
    slug: "super-wax",
    image: "/catalog-import/super-wax/26-4/SUP1.jpg",
  }
] as const;

export const demoOrders: Order[] = [
  {
    id: "ORD-1008",
    customer: "Adwoa Mensah",
    status: "Processing",
    createdAt: "2026-05-09",
    itemCount: 3,
    total: 387,
  },
  {
    id: "ORD-1007",
    customer: "Kwame Boateng",
    status: "Pending",
    createdAt: "2026-05-08",
    itemCount: 2,
    total: 274,
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategorySlug(slug: string) {
  const category = getCategoryBySlug(slug);
  if (!category) return [];
  return products.filter((product) => product.category === category.name);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductGallery(slug: string, size = 4) {
  const product = getProductBySlug(slug);
  if (!product) return [];
  const sameCategory = products
    .filter((item) => item.category === product.category)
    .slice(0, Math.max(size, 1))
    .map((item) => item.image);
  const gallery = [product.image, ...sameCategory];
  return Array.from(new Set(gallery)).slice(0, Math.max(size, 1));
}
