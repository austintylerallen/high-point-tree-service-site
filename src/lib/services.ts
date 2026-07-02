import {
  AlertTriangle,
  ClipboardCheck,
  ShieldCheck,
  TreePine,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type ServicePage = {
  title: string;
  shortTitle: string;
  slug: string;
  navLabel: string;
  eyebrow: string;
  metadataTitle: string;
  metadataDescription: string;
  heroTitle: string;
  intro: string;
  body: string;
  outcome: string;
  signs: string[];
  goodFitFor: string[];
  process: string[];
  relatedServices: string[];
  icon: LucideIcon;
};

export const servicePages: ServicePage[] = [
  {
    title: "Tree Removal",
    shortTitle: "Tree Removal",
    slug: "tree-removal",
    navLabel: "Tree Removal",
    eyebrow: "Hazardous, dead, leaning, or unwanted trees",
    metadataTitle:
      "Tree Removal in Southern New Mexico | High Point Tree Service LLC",
    metadataDescription:
      "High Point Tree Service LLC provides tree removal for dead, damaged, leaning, crowded, storm-affected, and unwanted trees across Las Cruces, Ruidoso, Roswell, Alamogordo, and nearby Southern New Mexico communities.",
    heroTitle:
      "Tree removal for hazardous, dead, leaning, or unwanted trees.",
    intro:
      "Tree removal is often the right choice when a tree is dead, damaged, unstable, crowding the property, or creating concerns near structures, driveways, fences, utilities, or outdoor areas.",
    body:
      "High Point Tree Service plans tree removal around the property as a whole, not just the tree itself. The goal is to remove the problem tree while being mindful of nearby homes, access points, landscaping, fencing, and cleanup needs.",
    outcome:
      "A safer and cleaner property with the problem tree removed and the surrounding area protected as much as possible.",
    signs: [
      "Dead or visibly declining tree",
      "Leaning trunk or splitting wood",
      "Large limbs hanging over structures",
      "Storm damage or visible instability",
    ],
    goodFitFor: [
      "Trees that appear unsafe or unstable",
      "Dead trees that need to be removed before they fall",
      "Trees crowding structures, driveways, fences, or access areas",
      "Property owners who need a professional opinion before deciding",
    ],
    process: [
      "Review the tree, property access, and nearby structures",
      "Discuss the safest removal approach for the situation",
      "Remove the tree in a controlled and practical way",
      "Clean up the work area based on the agreed scope",
    ],
    relatedServices: [
      "tree-trimming-pruning",
      "stump-grinding",
      "property-cleanup",
    ],
    icon: TreePine,
  },
  {
    title: "Tree Trimming & Pruning",
    shortTitle: "Trimming & Pruning",
    slug: "tree-trimming-pruning",
    navLabel: "Trimming & Pruning",
    eyebrow: "Clearance, overgrowth, shaping, and maintenance",
    metadataTitle:
      "Tree Trimming & Pruning in Southern New Mexico | High Point Tree Service LLC",
    metadataDescription:
      "High Point Tree Service LLC provides tree trimming and pruning for overgrown limbs, clearance issues, dead branches, shaping, and routine tree maintenance across Southern New Mexico.",
    heroTitle:
      "Tree trimming and pruning for cleaner, safer, better-shaped trees.",
    intro:
      "Tree trimming and pruning help control overgrowth, improve clearance, remove weak or dead branches, and make the property easier to use and maintain.",
    body:
      "This service is often a good fit when branches are growing too close to roofs, fences, driveways, walkways, utility areas, or high-use outdoor spaces. Trimming can also help improve the appearance of the tree and reduce nuisance branches.",
    outcome:
      "Cleaner growth, better clearance, fewer nuisance branches, and a more controlled-looking property.",
    signs: [
      "Branches touching or nearing the roof",
      "Limbs blocking visibility, walkways, or driveways",
      "Overgrown or uneven canopy",
      "Dead or weak branches visible overhead",
    ],
    goodFitFor: [
      "Routine tree maintenance",
      "Overgrown branches near homes, fences, or driveways",
      "Improving clearance around usable outdoor areas",
      "Removing weak, dead, or nuisance limbs",
    ],
    process: [
      "Review the tree and surrounding clearance concerns",
      "Identify limbs that should be trimmed or removed",
      "Complete the trimming or pruning work carefully",
      "Clean up limbs and debris based on the agreed scope",
    ],
    relatedServices: [
      "tree-removal",
      "tree-assessments",
      "property-cleanup",
    ],
    icon: ClipboardCheck,
  },
  {
    title: "Stump Grinding",
    shortTitle: "Stump Grinding",
    slug: "stump-grinding",
    navLabel: "Stump Grinding",
    eyebrow: "Old stumps, fresh removals, and usable yard space",
    metadataTitle:
      "Stump Grinding in Southern New Mexico | High Point Tree Service LLC",
    metadataDescription:
      "High Point Tree Service LLC provides stump grinding for old stumps, fresh removals, trip hazards, mowing obstacles, and cleaner yard space across Southern New Mexico.",
    heroTitle:
      "Stump grinding for cleaner, safer, more usable outdoor space.",
    intro:
      "Stump grinding helps remove old or freshly cut stumps so the yard is easier to mow, maintain, landscape, and use.",
    body:
      "A leftover stump can make a property feel unfinished and create practical problems in the yard. Grinding is often useful when a stump is in the way, difficult to mow around, visually distracting, or creating a trip hazard.",
    outcome:
      "A cleaner yard with fewer obstructions, fewer trip hazards, and more usable outdoor space.",
    signs: [
      "Old stump taking up space",
      "Fresh tree removal left a stump behind",
      "Trip hazard in a yard or walkway area",
      "Hard to mow, landscape, or maintain around the stump",
    ],
    goodFitFor: [
      "Old stumps that make the yard harder to use",
      "Fresh tree removals where the stump still needs attention",
      "Stumps near lawns, walkways, driveways, or landscaped areas",
      "Property owners preparing for cleanup or landscaping",
    ],
    process: [
      "Review the stump location and surrounding access",
      "Discuss the grinding scope and cleanup expectations",
      "Grind the stump down based on the agreed plan",
      "Clean up the area according to the job scope",
    ],
    relatedServices: [
      "tree-removal",
      "property-cleanup",
      "tree-trimming-pruning",
    ],
    icon: Wrench,
  },
  {
    title: "Storm Damage Cleanup",
    shortTitle: "Storm Cleanup",
    slug: "storm-damage-cleanup",
    navLabel: "Storm Cleanup",
    eyebrow: "Fallen limbs, broken branches, and urgent debris",
    metadataTitle:
      "Storm Damage Cleanup in Southern New Mexico | High Point Tree Service LLC",
    metadataDescription:
      "High Point Tree Service LLC provides storm damage cleanup for fallen limbs, broken branches, blocked access, and tree debris after wind and rough weather across Southern New Mexico.",
    heroTitle:
      "Storm damage cleanup for fallen limbs, broken branches, and tree debris.",
    intro:
      "Storm damage cleanup helps restore access and control after wind, storms, or rough New Mexico weather leaves fallen branches, broken limbs, or scattered debris around the property.",
    body:
      "After a storm, tree debris can block driveways, walkways, gates, yards, and high-use outdoor spaces. High Point Tree Service helps clear the mess and determine whether additional trimming, removal, or assessment is needed.",
    outcome:
      "Tree debris cleared, access restored, and the property brought back under control after wind or storm damage.",
    signs: [
      "Branches came down after wind",
      "Access is blocked by limbs or debris",
      "Tree debris scattered across the property",
      "Broken limbs still hanging or creating concern",
    ],
    goodFitFor: [
      "Post-storm limb and debris cleanup",
      "Blocked driveways, walkways, or yard access",
      "Broken branches that need to be addressed",
      "Properties that need cleanup before normal use resumes",
    ],
    process: [
      "Review the damaged areas and blocked access points",
      "Identify cleanup priorities and possible safety concerns",
      "Remove fallen limbs, branches, and tree debris",
      "Recommend next steps if trimming, removal, or assessment is needed",
    ],
    relatedServices: [
      "tree-removal",
      "tree-trimming-pruning",
      "tree-assessments",
    ],
    icon: AlertTriangle,
  },
  {
    title: "Tree Assessments",
    shortTitle: "Tree Assessments",
    slug: "tree-assessments",
    navLabel: "Tree Assessments",
    eyebrow: "Risk checks and practical next-step guidance",
    metadataTitle:
      "Tree Assessments in Southern New Mexico | High Point Tree Service LLC",
    metadataDescription:
      "High Point Tree Service LLC provides tree assessments to help property owners decide whether a tree needs removal, trimming, pruning, cleanup, or monitoring across Southern New Mexico.",
    heroTitle:
      "Tree assessments when you are not sure what the tree needs.",
    intro:
      "A tree assessment is useful when a tree looks questionable, damaged, unstable, overgrown, or difficult to evaluate without professional guidance.",
    body:
      "High Point Tree Service can review the tree and surrounding property concerns to help determine whether the next step should be trimming, removal, cleanup, stump grinding, or monitoring. This helps customers avoid guessing when the right service is not obvious.",
    outcome:
      "A clearer understanding of what the tree needs and what the next step should be.",
    signs: [
      "Not sure whether a tree is safe",
      "Dead limbs or weak branches",
      "Tree appears to be leaning",
      "Need help deciding between trimming and removal",
    ],
    goodFitFor: [
      "Questionable trees that need a closer look",
      "Property owners unsure which service to request",
      "Trees with dead limbs, leaning, cracks, or storm damage",
      "Planning tree work before problems become more serious",
    ],
    process: [
      "Review the tree and visible concerns",
      "Look at surrounding structures, access, and property use",
      "Explain the practical service options",
      "Recommend a next step based on the situation",
    ],
    relatedServices: [
      "tree-removal",
      "tree-trimming-pruning",
      "storm-damage-cleanup",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Property Cleanup",
    shortTitle: "Property Cleanup",
    slug: "property-cleanup",
    navLabel: "Property Cleanup",
    eyebrow: "Brush, limbs, debris, and cleaner outdoor spaces",
    metadataTitle:
      "Property Cleanup in Southern New Mexico | High Point Tree Service LLC",
    metadataDescription:
      "High Point Tree Service LLC provides property cleanup for brush, limbs, tree debris, storm mess, and cleanup after tree work across Southern New Mexico.",
    heroTitle:
      "Property cleanup for brush, limbs, tree debris, and outdoor mess.",
    intro:
      "Property cleanup helps remove brush, limbs, tree debris, and leftover mess from trimming, removals, storms, or neglected outdoor areas.",
    body:
      "This service is helpful when outdoor areas are hard to use, difficult to maintain, or cluttered with tree-related debris. Cleanup can also help finish the job after trimming, removal, stump grinding, or storm damage.",
    outcome:
      "A cleaner property with less debris, better access, and a more finished appearance.",
    signs: [
      "Brush piles or tree debris",
      "Storm mess left behind",
      "Final cleanup needed after tree work",
      "Outdoor areas are hard to access or maintain",
    ],
    goodFitFor: [
      "Tree debris and brush cleanup",
      "Cleanup after trimming or removal",
      "Storm debris that needs to be cleared",
      "Properties that need cleaner, easier-to-use outdoor space",
    ],
    process: [
      "Review the cleanup area and access points",
      "Confirm what debris needs to be removed",
      "Clear limbs, brush, and tree-related mess",
      "Leave the area cleaner and easier to maintain",
    ],
    relatedServices: [
      "tree-removal",
      "tree-trimming-pruning",
      "storm-damage-cleanup",
    ],
    icon: Truck,
  },
];

export const servicePageMap = new Map(
  servicePages.map((service) => [service.slug, service])
);

export function getServicePage(slug: string) {
  return servicePageMap.get(slug);
}
