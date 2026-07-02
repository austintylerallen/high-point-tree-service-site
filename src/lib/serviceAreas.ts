export type ServiceAreaPage = {
  city: string;
  slug: string;
  region: string;
  label: string;
  metadataTitle: string;
  metadataDescription: string;
  heroTitle: string;
  intro: string;
  overview: string;
  propertyConcerns: string[];
  nearbyAreas: string[];
};

export const serviceAreaPages: ServiceAreaPage[] = [
  {
    city: "Las Cruces",
    slug: "las-cruces",
    region: "NM",
    label: "Las Cruces, NM",
    metadataTitle:
      "Tree Service in Las Cruces, NM | High Point Tree Service LLC",
    metadataDescription:
      "High Point Tree Service LLC provides tree removal, tree trimming, pruning, stump grinding, storm damage cleanup, tree assessments, and property cleanup in Las Cruces, NM.",
    heroTitle: "Tree service in Las Cruces, NM.",
    intro:
      "High Point Tree Service reviews Las Cruces tree concerns and helps customers choose the right next step, from trimming and cleanup to removal, stump grinding, or an assessment.",
    overview:
      "Las Cruces properties often need tree work because of overgrowth, wind damage, dead limbs, dry conditions, tight access, and trees growing too close to homes, walls, driveways, fences, or outdoor living areas.",
    propertyConcerns: [
      "Overgrown limbs near roofs, walls, driveways, and walkways",
      "Dead or damaged trees that may need removal",
      "Tree debris and branches after wind or rough weather",
      "Stumps, brush, and cleanup needs around the property",
    ],
    nearbyAreas: [
      "Mesilla",
      "Doña Ana",
      "Organ",
      "Fairacres",
      "University Park",
      "Nearby Las Cruces communities",
    ],
  },
  {
    city: "Ruidoso",
    slug: "ruidoso",
    region: "NM",
    label: "Ruidoso, NM",
    metadataTitle:
      "Tree Service in Ruidoso, NM | High Point Tree Service LLC",
    metadataDescription:
      "High Point Tree Service LLC provides tree removal, trimming, pruning, storm damage cleanup, tree assessments, stump grinding, and property cleanup in Ruidoso, NM.",
    heroTitle: "Tree service in Ruidoso, NM.",
    intro:
      "High Point Tree Service reviews Ruidoso tree concerns with mountain access, weather damage, dense growth, and cleanup needs in mind.",
    overview:
      "Ruidoso properties can face tree concerns related to mountain weather, wind, dense growth, damaged limbs, access issues, and trees near cabins, homes, driveways, and outdoor spaces.",
    propertyConcerns: [
      "Tree limbs near cabins, homes, roofs, and access roads",
      "Storm-damaged branches and debris after rough weather",
      "Tree assessments for damaged, leaning, or questionable trees",
      "Cleanup for brush, limbs, and tree-related debris",
    ],
    nearbyAreas: [
      "Alto",
      "Ruidoso Downs",
      "Hollywood",
      "Capitan",
      "Lincoln County",
      "Nearby Ruidoso communities",
    ],
  },
  {
    city: "Roswell",
    slug: "roswell",
    region: "NM",
    label: "Roswell, NM",
    metadataTitle:
      "Tree Service in Roswell, NM | High Point Tree Service LLC",
    metadataDescription:
      "High Point Tree Service LLC provides tree removal, tree trimming, pruning, stump grinding, storm damage cleanup, tree assessments, and property cleanup in Roswell, NM.",
    heroTitle: "Tree service in Roswell, NM.",
    intro:
      "High Point Tree Service reviews Roswell tree concerns and helps customers decide whether the property needs trimming, removal, cleanup, stump grinding, or an assessment.",
    overview:
      "Roswell properties may need tree service for overgrown trees, dead branches, wind damage, stumps, cleanup needs, and trees growing near homes, businesses, fences, driveways, or access areas.",
    propertyConcerns: [
      "Dead, damaged, or unwanted trees",
      "Branches growing too close to structures or access areas",
      "Storm debris, fallen limbs, and property cleanup",
      "Stumps and tree debris that make the property harder to maintain",
    ],
    nearbyAreas: [
      "Midway",
      "Dexter",
      "Hagerman",
      "Chaves County",
      "Nearby Roswell communities",
    ],
  },
  {
    city: "Alamogordo",
    slug: "alamogordo",
    region: "NM",
    label: "Alamogordo, NM",
    metadataTitle:
      "Tree Service in Alamogordo, NM | High Point Tree Service LLC",
    metadataDescription:
      "High Point Tree Service LLC provides tree removal, trimming, pruning, stump grinding, storm damage cleanup, tree assessments, and property cleanup in Alamogordo, NM.",
    heroTitle: "Tree service in Alamogordo, NM.",
    intro:
      "High Point Tree Service reviews Alamogordo tree concerns with wind, dry conditions, access, debris, and nearby structures in mind.",
    overview:
      "Alamogordo properties can need tree work because of wind, dry conditions, overgrowth, damaged branches, stumps, debris, and trees growing too close to homes, fences, driveways, or usable outdoor areas.",
    propertyConcerns: [
      "Overgrown branches near roofs, fences, and driveways",
      "Damaged or declining trees that need professional review",
      "Storm debris and fallen limbs after wind or rough weather",
      "Brush, stump, and tree debris cleanup",
    ],
    nearbyAreas: [
      "La Luz",
      "Tularosa",
      "High Rolls",
      "Boles Acres",
      "Otero County",
      "Nearby Alamogordo communities",
    ],
  },
];

export const serviceAreaPageMap = new Map(
  serviceAreaPages.map((area) => [area.slug, area])
);

export function getServiceAreaPage(slug: string) {
  return serviceAreaPageMap.get(slug);
}
