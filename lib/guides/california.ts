/**
 * Orange County / California area guides for eugeneboyle.com
 * Primary: Corona del Mar. Parallel research snapshots dated 2026-08-15.
 * Fair Housing: amenities, commute, architecture, labeled prices — no school-quality / safety proxies.
 */

import type { AreaGuide } from "@/lib/guides/types";
import { agentInfo, officeInfo } from "@/lib/site-config";
import { cdmMarketNotes } from "@/lib/market/corona-del-mar";

const caLine = `${agentInfo.name} (${agentInfo.licenseLabel}). California office: ${officeInfo.address.full}.`;

function crumbs(name: string) {
  return [
    { label: "Home", href: "/" },
    { label: "California", href: "/california" },
    { label: name },
  ] as const;
}

export const californiaGuides: Record<string, AreaGuide> = {
  "corona-del-mar": {
    slug: "corona-del-mar",
    name: "Corona del Mar",
    title: "Corona del Mar Homes —",
    accent: "village, cliffs, and coastal comps",
    lede: `${cdmMarketNotes.answerFirst.home} ${caLine}`,
    breadcrumbs: [...crumbs("Corona del Mar")],
    statsTitle: "CdM market | August 2026 third-party snapshots",
    stats: cdmMarketNotes.stats.map((s) => ({
      value: s.value,
      label: s.label,
    })),
    highlightsTitle: "What buyers notice first in CdM",
    overviewTitle: "What is Corona del Mar like for buyers and sellers?",
    overview: [
      cdmMarketNotes.answerFirst.home,
      "Locals call it CdM. Visit Newport Beach describes a cliffside Newport Beach hamlet with vintage cottages and newer houses on flower-named streets, village dining on Pacific Coast Highway, and Big and Little Corona beaches at the harbor entrance. California State Parks notes Corona del Mar State Beach as a half-mile sandy stretch framed by cliffs and the rock jetty at the east entrance to Newport Harbor.",
      "Housing stock spans village cottages and modern rebuilds on narrow lots, terraced ocean-view product in Cameo Shores and Shore Cliffs, and larger-lot pockets such as Irvine Terrace. Use Corona del Mar solds — not Newport Beach city averages — when you price or offer. " +
        cdmMarketNotes.disclaimer,
    ],
    highlights: [
      {
        title: "Flower-street village",
        body: "Residential streets named alphabetically (Acacia through Poppy) sit a short walk from PCH shops, cafés, and beach ramps — a walkable village grid uncommon in much of Orange County.",
      },
      {
        title: "Big & Little Corona",
        body: "Big Corona is the main jetty-protected beach; Little Corona is the smaller cove with tide pools and snorkeling access. Street parking fills early on summer weekends.",
      },
      {
        title: "Retail & daily errands",
        body: "Village independents along PCH plus Corona del Mar Plaza (near Fashion Island) for specialty retail and groceries — confirm tenant mix before you rely on a specific store.",
      },
      {
        title: "Product range in 92625",
        body: "From village rebuilds to cliffside customs and harbor-adjacent estates — compare lot setting, view orientation, and outdoor living, not just list price.",
      },
    ],
    detailsTitle: "Pockets buyers ask about",
    details: [
      {
        title: "Often compared",
        items: [
          "CdM Village (flower streets)",
          "Irvine Terrace",
          "Cameo Shores / Cameo Highlands",
          "Shore Cliffs",
          "Harbor View Hills / Spyglass Hills",
        ],
      },
      {
        title: "Nearby amenities",
        items: [
          "Corona del Mar State Beach",
          "Little Corona tide pools",
          "Sherman Library & Gardens",
          "Corona del Mar Plaza",
          "Fashion Island (short drive)",
        ],
      },
      {
        title: "Filters that matter",
        items: [
          "Ocean or harbor view orientation",
          "Walkability to village / beach ramp",
          "Lot size vs rebuild potential",
          "HOA / gated vs open village",
        ],
      },
    ],
    commutes: [
      {
        destination: "John Wayne Airport (SNA)",
        distance: "~4–6 mi",
        drive: "10–15 min",
        rush: "20–35 min",
      },
      {
        destination: "Fashion Island / Newport Center",
        distance: "~2 mi",
        drive: "5–10 min",
        rush: "10–20 min",
      },
      {
        destination: "Irvine Spectrum",
        distance: "~12 mi",
        drive: "20–25 min",
        rush: "35–50 min",
      },
      {
        destination: "Downtown Los Angeles",
        distance: "~45–50 mi",
        drive: "55–70 min",
        rush: "90–120+ min",
      },
    ],
    faqs: [
      {
        question: "What is the current median home price in Corona del Mar?",
        answer:
          "August 2026 third-party snapshots cluster near ~$3.2–3.3M median (Homexa / Valia). Separate listing-side panels on public portals can read much higher — sold vs list are different series. Confirm live MLS before you price or offer.",
      },
      {
        question: "Is Corona del Mar part of Newport Beach?",
        answer:
          "Yes. CdM is a named coastal neighborhood inside the City of Newport Beach (ZIP 92625), with its own village grid, beaches, and buyer comps that often run above city-wide Newport Beach averages.",
      },
      {
        question: "Who helps with Corona del Mar tours?",
        answer: `${agentInfo.name} plans California-side buying and selling from ${officeInfo.address.full}. Call ${agentInfo.phoneFormatted}. Las Vegas partnership available when you are also moving to Nevada.`,
      },
    ],
    ctaTitle: "Tour Corona del Mar with a local plan",
    ctaBody: `Map village vs cliffside product, then book showings. Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title:
        "Corona del Mar Homes for Sale | Realtor Dr. Gene Boyle | 92625",
      description:
        "Corona del Mar real estate — village, cliffs, and coastal comps with Dr. Gene Boyle (CA DRE #02282581). Office: 3301 E. Coast Hwy, Corona del Mar, CA 92625. Call (702) 222-1964.",
      keywords: [
        "Corona del Mar homes for sale",
        "Corona del Mar realtor",
        "CdM real estate",
        "92625 homes",
        "Dr Gene Boyle Corona del Mar",
      ],
    },
    geo: {
      latitude: officeInfo.coordinates.lat,
      longitude: officeInfo.coordinates.lng,
      containedIn: "Newport Beach",
      description:
        "Coastal Newport Beach hamlet with flower-street village, Big and Little Corona beaches, and homes from cottages to custom view estates.",
    },
  },

  "newport-beach": {
    slug: "newport-beach",
    name: "Newport Beach",
    title: "Newport Beach Homes —",
    accent: "harbor, coast, and enclaves",
    lede: `Harbor, Fashion Island, Balboa, Newport Coast, and Corona del Mar — compare enclave, view, and product type. ${caLine}`,
    breadcrumbs: [...crumbs("Newport Beach")],
    statsTitle: "Newport Beach context | labeled snapshots",
    stats: [
      { value: "~$3.1M", label: "City median (Homexa CdM page)" },
      { value: "CdM+", label: "Often above city median" },
      { value: "SNA", label: "John Wayne nearby" },
      { value: "Harbor", label: "Balboa / Lido / Back Bay" },
    ],
    overviewTitle: "How should buyers compare Newport Beach areas?",
    overview: [
      "Newport Beach spans multiple named areas — Balboa Peninsula and Island, Lido, Fashion Island / Newport Center, Newport Coast, and Corona del Mar — each with different lot patterns, HOA structures, and view premiums.",
      "Public listing panels for the city can show multi-million medians with hundreds of actives; treat them as city-wide context, then pull enclave comps. Corona del Mar often prices above the Newport Beach city median in third-party snapshots.",
      "Filter by harbor vs ocean orientation, walkability to village retail, parking, and outdoor living — not a single city average.",
    ],
    highlights: [
      {
        title: "Harbor vs ocean",
        body: "Bay-front and peninsula product differ from cliffside ocean exposure — confirm flood, insurance, and dock/HOA rules for the parcel.",
      },
      {
        title: "Fashion Island hub",
        body: "Newport Center retail and offices sit a short drive from CdM and many inland Newport addresses.",
      },
      {
        title: "CdM as the coastal village",
        body: "When you want flower-street walkability and Big/Little Corona beaches, start with the Corona del Mar guide — then compare Newport Coast and harbor pockets.",
      },
      {
        title: "Airport access",
        body: "John Wayne (SNA) is typically a short drive from most Newport Beach addresses outside peak freeway windows.",
      },
    ],
    detailsTitle: "Named areas inside Newport Beach",
    details: [
      {
        title: "Often toured",
        items: [
          "Corona del Mar",
          "Newport Coast",
          "Balboa Peninsula / Island",
          "Lido Isle",
          "Fashion Island / Newport Center",
        ],
      },
      {
        title: "Product filters",
        items: [
          "Harbor-front vs inland",
          "Gated vs open street",
          "Condo / townhome vs SFR",
          "View corridor orientation",
        ],
      },
      {
        title: "Daily amenities",
        items: [
          "Fashion Island",
          "Harbor recreation",
          "PCH retail corridors",
          "Beach access points",
        ],
      },
    ],
    commutes: [
      {
        destination: "John Wayne Airport (SNA)",
        distance: "~5 mi",
        drive: "10–15 min",
        rush: "20–35 min",
      },
      {
        destination: "Irvine Spectrum",
        distance: "~12 mi",
        drive: "20–25 min",
        rush: "35–50 min",
      },
      {
        destination: "Corona del Mar Village",
        distance: "varies",
        drive: "5–15 min",
        rush: "10–25 min",
      },
    ],
    faqs: [
      {
        question: "Should I use Newport Beach city comps for Corona del Mar?",
        answer:
          "Usually no for pricing. CdM often trades above the city median in third-party snapshots — build the strategy from CdM solds, then cross-check neighboring Newport enclaves.",
      },
      {
        question: "Who helps buy or sell in Newport Beach?",
        answer: `${agentInfo.name} covers California-side representation from the Corona del Mar office. ${agentInfo.phoneFormatted}.`,
      },
    ],
    ctaTitle: "Compare Newport Beach enclaves",
    ctaBody: `Start with Corona del Mar or Newport Coast, then widen. Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Newport Beach Homes | Corona del Mar Realtor | Dr. Gene Boyle",
      description:
        "Newport Beach real estate with Dr. Gene Boyle — harbor, Fashion Island, Newport Coast, and Corona del Mar. Office in CdM. Call (702) 222-1964.",
      keywords: [
        "Newport Beach homes for sale",
        "Newport Beach realtor",
        "Corona del Mar Newport Beach",
        "Dr Gene Boyle",
      ],
    },
    geo: {
      latitude: 33.6189,
      longitude: -117.9289,
      containedIn: "Orange County",
      description:
        "Coastal Orange County city including harbor, Fashion Island, Newport Coast, and Corona del Mar.",
    },
  },

  irvine: {
    slug: "irvine",
    name: "Irvine",
    title: "Irvine Homes —",
    accent: "villages, floor plans, and labeled medians",
    lede: `Master-planned Orange County city — compare village, square footage, and HOA package. ${caLine}`,
    breadcrumbs: [...crumbs("Irvine")],
    statsTitle: "Irvine market | Q2 2026 PropertyShark snapshot",
    stats: [
      { value: "~$1.55M", label: "Median sale (Q2 2026)" },
      { value: "~$819", label: "Sale $/sq ft (Q2)" },
      { value: "529", label: "Q2 transactions" },
      { value: "~$1.21M", label: "OC median (same panel)" },
    ],
    overviewTitle: "What does Irvine cost right now?",
    overview: [
      "PropertyShark’s Q2 2026 panel lists an Irvine median sale near $1.55M (~$819/sq ft) with 529 transactions, while Orange County’s median on the same panel sits near $1.21M — labeled third-party figures; confirm on MLS before offers.",
      "Irvine is organized as named villages with master-plan amenities, parks, and retail centers. Buyers typically filter by village, attached vs detached, HOA dues, and commute to employment centers — not a single city slogan.",
      "Common sell-side market when coordinating a California-to-Nevada move; also a primary buy market for clients staying in Orange County.",
    ],
    highlights: [
      {
        title: "Village structure",
        body: "Named villages and association packages — compare amenity fees and rental rules before you fall in love with a floor plan.",
      },
      {
        title: "Employment & retail hubs",
        body: "Spectrum, business parks, and university-adjacent corridors shape commute buffers more than straight-line miles.",
      },
      {
        title: "Product breadth",
        body: "Condos and townhomes through large single-family tracts — useful when matching Orange County equity to a target payment.",
      },
      {
        title: "CdM / coast day trips",
        body: "Corona del Mar and Newport Beach beaches are typically a 20–40 minute drive depending on traffic — useful for weekend lifestyle planning.",
      },
    ],
    detailsTitle: "Filters relocators and local buyers use",
    details: [
      {
        title: "Compare",
        items: [
          "Village / association",
          "Attached vs detached",
          "HOA amenity tier",
          "Commute to SNA / Spectrum",
        ],
      },
      {
        title: "Nearby coastal",
        items: ["Corona del Mar", "Newport Beach", "Laguna Beach"],
      },
      {
        title: "Also on this site",
        items: [
          "Las Vegas partnership pages",
          "Sell Irvine → buy Nevada timeline",
        ],
      },
    ],
    commutes: [
      {
        destination: "John Wayne Airport (SNA)",
        distance: "~6–10 mi",
        drive: "15–20 min",
        rush: "25–40 min",
      },
      {
        destination: "Corona del Mar",
        distance: "~12 mi",
        drive: "20–25 min",
        rush: "35–50 min",
      },
      {
        destination: "Irvine Spectrum",
        distance: "varies",
        drive: "10–20 min",
        rush: "20–40 min",
      },
    ],
    faqs: [
      {
        question: "What is the current Irvine median home price?",
        answer:
          "PropertyShark Q2 2026 snapshot: about $1.55M median sale and ~$819/sq ft. Figures move — verify on MLS for your village and property type.",
      },
      {
        question: "Do you help sell in Irvine and buy in Las Vegas?",
        answer: `Yes. ${agentInfo.name} coordinates California timing; partner ${agentInfo.partnerAgent.name} covers Las Vegas tours. Call ${agentInfo.phoneFormatted}.`,
      },
    ],
    ctaTitle: "Plan an Irvine buy or sell",
    ctaBody: `Village shortlist + labeled comps. Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Irvine Homes for Sale | Orange County Realtor | Dr. Gene Boyle",
      description:
        "Irvine real estate with Dr. Gene Boyle — villages, HOA filters, and Q2 2026 labeled medians. Corona del Mar office. Call (702) 222-1964.",
      keywords: [
        "Irvine homes for sale",
        "Irvine realtor",
        "Orange County real estate",
        "Dr Gene Boyle Irvine",
      ],
    },
    geo: {
      latitude: 33.6846,
      longitude: -117.8265,
      containedIn: "Orange County",
      description:
        "Master-planned Orange County city with named villages, parks, and a wide range of attached and detached housing.",
    },
  },

  "laguna-beach": {
    slug: "laguna-beach",
    name: "Laguna Beach",
    title: "Laguna Beach Homes —",
    accent: "coves, hillsides, and art-coast living",
    lede: `Cove beaches and hillside view homes along Pacific Coast Highway. ${caLine}`,
    breadcrumbs: [...crumbs("Laguna Beach")],
    statsTitle: "Laguna Beach | planning filters",
    stats: [
      { value: "Coves", label: "Beach access varies" },
      { value: "Hills", label: "View & grade premiums" },
      { value: "PCH", label: "Coast highway corridor" },
      { value: "MLS", label: "Confirm live pricing" },
    ],
    overviewTitle: "What should buyers know about Laguna Beach?",
    overview: [
      "Laguna Beach mixes hillside custom homes, cove-adjacent product, and village-proximate cottages. Inventory is thinner than inland Orange County cities — expect property-specific comps.",
      "Access, parking, slope, view corridor, and outdoor living drive value as much as interior square footage. Confirm insurance and geologic disclosures early.",
      "Often compared with Corona del Mar and Newport Coast for coastal lifestyle — different architecture, topography, and buyer pools.",
    ],
    highlights: [
      {
        title: "Cove geography",
        body: "Beach access and parking differ cove by cove — tour at the time of day you will actually use the beach.",
      },
      {
        title: "Hillside product",
        body: "Stairs, retaining walls, and view orientation matter in inspections and future remodel cost.",
      },
      {
        title: "Village & galleries",
        body: "Downtown Laguna arts and dining corridor is a short drive from many hillside addresses — confirm walk vs drive for the parcel.",
      },
      {
        title: "Coastal peer set",
        body: "Shortlist often includes Corona del Mar, Newport Coast, and Monarch Beach when comparing ocean-oriented Orange County options.",
      },
    ],
    detailsTitle: "Comparison set",
    details: [
      {
        title: "Often compared",
        items: ["Corona del Mar", "Newport Coast", "Monarch Beach", "Dana Point"],
      },
      {
        title: "Buyer filters",
        items: ["Ocean view", "Village proximity", "Lot usability", "Parking"],
      },
      {
        title: "Verify early",
        items: ["Disclosures", "Insurance quotes", "HOA rules", "Remodel history"],
      },
    ],
    faqs: [
      {
        question: "How does Laguna Beach compare to Corona del Mar?",
        answer:
          "Both are coastal Orange County markets. CdM sits inside Newport Beach with a flower-street village grid; Laguna is its own city with cove and hillside character. Pull comps in the enclave you will actually buy — not a blended coastal average.",
      },
      {
        question: "Who represents buyers and sellers in Laguna Beach?",
        answer: `${agentInfo.name}, ${agentInfo.licenseLabel}. Call ${agentInfo.phoneFormatted}.`,
      },
    ],
    ctaTitle: "Shortlist Laguna Beach homes",
    ctaBody: `Map cove vs hillside, then tour. Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Laguna Beach Homes | Orange County Coast | Dr. Gene Boyle",
      description:
        "Laguna Beach real estate — coves, hillsides, and coastal comps with Dr. Gene Boyle. Corona del Mar office. Call (702) 222-1964.",
      keywords: [
        "Laguna Beach homes for sale",
        "Laguna Beach realtor",
        "Orange County coastal real estate",
      ],
    },
    geo: {
      latitude: 33.5427,
      longitude: -117.7854,
      containedIn: "Orange County",
      description:
        "Artist-coast Orange County city with cove beaches and hillside view homes along Pacific Coast Highway.",
    },
  },

  "laguna-niguel": {
    slug: "laguna-niguel",
    name: "Laguna Niguel",
    title: "Laguna Niguel Homes —",
    accent: "south Orange County space and hillsides",
    lede: `Between the coast and inland freeways — townhomes through hillside estates. ${caLine}`,
    breadcrumbs: [...crumbs("Laguna Niguel")],
    statsTitle: "Laguna Niguel | planning filters",
    stats: [
      { value: "South OC", label: "Coast-adjacent inland" },
      { value: "HOA", label: "Many planned tracts" },
      { value: "I-5", label: "Freeway access" },
      { value: "MLS", label: "Confirm live pricing" },
    ],
    overviewTitle: "Who looks at Laguna Niguel?",
    overview: [
      "Laguna Niguel offers more land and planned-community inventory than cliffside coastal enclaves, with a short drive to beaches in Dana Point, Laguna Beach, and Monarch Beach.",
      "Buyers typically compare HOA amenity packages, lot size, and commute to coastal employment versus paying a premium for Newport/CdM walkability.",
      "Useful mid-point when equity sits between Irvine medians and Corona del Mar cliffside product.",
    ],
    highlights: [
      {
        title: "Hillside tracts",
        body: "Many neighborhoods step up from arterials — confirm grade, outdoor usability, and view corridors on site.",
      },
      {
        title: "Coast day access",
        body: "Beaches are typically a short drive rather than a walk — plan parking and weekend buffers.",
      },
      {
        title: "Attached options",
        body: "Townhome and condo inventory helps when payment targets are tighter than SFR coastal medians.",
      },
      {
        title: "Peer cities",
        body: "Often compared with Mission Viejo, Aliso Viejo, and Dana Point / Monarch Beach.",
      },
    ],
    detailsTitle: "Buyer checklist",
    details: [
      {
        title: "Compare",
        items: ["Lot size", "HOA dues / amenities", "Attached vs SFR", "Commute"],
      },
      {
        title: "Nearby coast",
        items: ["Monarch Beach", "Dana Point Harbor", "Laguna Beach"],
      },
      {
        title: "Also review",
        items: ["Mission Viejo", "Irvine", "Corona del Mar (premium coast)"],
      },
    ],
    faqs: [
      {
        question: "Is Laguna Niguel a coastal city?",
        answer:
          "It is south Orange County with quick beach access by car, not a cliffside village like Corona del Mar. Lifestyle filters differ — we map both when your brief includes coast days and yard space.",
      },
    ],
    ctaTitle: "Compare Laguna Niguel inventory",
    ctaBody: `HOA, lot, and commute first. Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Laguna Niguel Homes | South OC Realtor | Dr. Gene Boyle",
      description:
        "Laguna Niguel real estate with Dr. Gene Boyle — hillside tracts, HOA filters, and coastal access. Call (702) 222-1964.",
      keywords: [
        "Laguna Niguel homes for sale",
        "Laguna Niguel realtor",
        "South Orange County real estate",
      ],
    },
    geo: {
      latitude: 33.5225,
      longitude: -117.7076,
      containedIn: "Orange County",
      description:
        "South Orange County community between the coast and inland freeways with townhomes through hillside estates.",
    },
  },

  "mission-viejo": {
    slug: "mission-viejo",
    name: "Mission Viejo",
    title: "Mission Viejo Homes —",
    accent: "lake community and planned living",
    lede: `Lake Mission Viejo–area master-planned living with a wide floor-plan range. ${caLine}`,
    breadcrumbs: [...crumbs("Mission Viejo")],
    statsTitle: "Mission Viejo | planning filters",
    stats: [
      { value: "Lake", label: "Association amenities" },
      { value: "SFR+", label: "Broad inventory" },
      { value: "I-5", label: "Corridor access" },
      { value: "MLS", label: "Confirm live pricing" },
    ],
    overviewTitle: "What defines Mission Viejo housing?",
    overview: [
      "Mission Viejo is a large master-planned south Orange County city with Lake Mission Viejo association amenities for eligible addresses, parks, and a wide range of attached and detached product.",
      "Buyers compare lake association eligibility, HOA tiers, remodel vintage, and commute — then decide whether coastal premiums (CdM / Newport) are worth the trade.",
      "Often paired with Laguna Niguel and Irvine on shortlists for Orange County equity deployment.",
    ],
    highlights: [
      {
        title: "Lake amenities",
        body: "Confirm whether the specific address includes Lake Mission Viejo association rights and fees.",
      },
      {
        title: "Inventory breadth",
        body: "More floor-plan variety than cliffside coastal enclaves — useful for payment matching.",
      },
      {
        title: "Retail corridors",
        body: "Multiple shopping centers keep daily errands local; verify the center you will actually use.",
      },
      {
        title: "Coast trade-off",
        body: "Beach days are typically a drive — map against Corona del Mar walkability if that is a must-have.",
      },
    ],
    detailsTitle: "Shortlist filters",
    details: [
      {
        title: "Check",
        items: [
          "Lake association eligibility",
          "HOA dues",
          "Attached vs SFR",
          "Update / remodel level",
        ],
      },
      {
        title: "Compare cities",
        items: ["Laguna Niguel", "Irvine", "Tustin", "Corona del Mar"],
      },
    ],
    faqs: [
      {
        question: "Do all Mission Viejo homes include lake access?",
        answer:
          "No. Lake Mission Viejo association rights depend on the address and association rules — we verify before you write an offer.",
      },
    ],
    ctaTitle: "Map Mission Viejo options",
    ctaBody: `Lake rights, HOA, and payment targets. Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Mission Viejo Homes | Orange County | Dr. Gene Boyle",
      description:
        "Mission Viejo real estate — lake community filters and planned-community inventory with Dr. Gene Boyle. Call (702) 222-1964.",
      keywords: [
        "Mission Viejo homes for sale",
        "Mission Viejo realtor",
        "Lake Mission Viejo homes",
      ],
    },
    geo: {
      latitude: 33.6001,
      longitude: -117.672,
      containedIn: "Orange County",
      description:
        "South Orange County master-planned city with Lake Mission Viejo amenities and a wide range of home types.",
    },
  },

  "monarch-beach": {
    slug: "monarch-beach",
    name: "Monarch Beach",
    title: "Monarch Beach Homes —",
    accent: "resort-adjacent Dana Point coast",
    lede: `Coastal Dana Point / Monarch Beach corridor — resort-adjacent and ocean-view product. ${caLine}`,
    breadcrumbs: [...crumbs("Monarch Beach")],
    statsTitle: "Monarch Beach | planning filters",
    stats: [
      { value: "Coast", label: "Dana Point corridor" },
      { value: "Resort", label: "Adjacent amenities" },
      { value: "Views", label: "Ocean premiums" },
      { value: "MLS", label: "Confirm live pricing" },
    ],
    overviewTitle: "What is Monarch Beach for buyers?",
    overview: [
      "Monarch Beach sits in the Dana Point coastal corridor with resort-adjacent living, ocean-view customs, and golf / spa proximity depending on the community.",
      "Inventory is thinner and more premium than inland south OC — comps are property-specific. Compare with Laguna Beach and Corona del Mar when ocean orientation is the primary filter.",
      "Confirm HOA, view corridor permanence, and insurance early in diligence.",
    ],
    highlights: [
      {
        title: "Resort adjacency",
        body: "Some addresses trade on proximity to resort and golf amenities — verify access rules and fees for residents vs guests.",
      },
      {
        title: "Ocean orientation",
        body: "View premiums vary by terrace and obstruction risk — tour at different times of day.",
      },
      {
        title: "Harbor nearby",
        body: "Dana Point Harbor recreation is a short drive for many Monarch Beach addresses.",
      },
      {
        title: "Peer set",
        body: "Often compared with Laguna Beach, Newport Coast, and Corona del Mar for coastal Orange County buys.",
      },
    ],
    detailsTitle: "Compare",
    details: [
      {
        title: "Coastal peers",
        items: ["Laguna Beach", "Corona del Mar", "Newport Coast", "Dana Point"],
      },
      {
        title: "Filters",
        items: ["Ocean view", "HOA", "Lot usability", "Insurance"],
      },
    ],
    faqs: [
      {
        question: "Is Monarch Beach the same as Dana Point?",
        answer:
          "Monarch Beach is a coastal community within / adjacent to the Dana Point area. Use community-level comps, not a blended city average, when pricing.",
      },
    ],
    ctaTitle: "Tour Monarch Beach inventory",
    ctaBody: `Ocean-view shortlist with labeled comps. Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Monarch Beach Homes | Dana Point Coast | Dr. Gene Boyle",
      description:
        "Monarch Beach real estate — resort-adjacent and ocean-view product with Dr. Gene Boyle. Call (702) 222-1964.",
      keywords: [
        "Monarch Beach homes for sale",
        "Monarch Beach realtor",
        "Dana Point coastal real estate",
      ],
    },
    geo: {
      latitude: 33.485,
      longitude: -117.716,
      containedIn: "Dana Point",
      description:
        "Coastal Dana Point / Monarch Beach corridor with resort-adjacent and ocean-view housing.",
    },
  },

  tustin: {
    slug: "tustin",
    name: "Tustin",
    title: "Tustin Homes —",
    accent: "central OC access and planned communities",
    lede: `Central Orange County — Legacy / Old Town and newer planned communities with freeway access. ${caLine}`,
    breadcrumbs: [...crumbs("Tustin")],
    statsTitle: "Tustin | planning filters",
    stats: [
      { value: "Central", label: "OC freeway access" },
      { value: "Mix", label: "Legacy + new" },
      { value: "SNA", label: "Airport proximity" },
      { value: "MLS", label: "Confirm live pricing" },
    ],
    overviewTitle: "Why buyers shortlist Tustin",
    overview: [
      "Tustin spans older tree-lined pockets and newer master-planned communities with a central Orange County location relative to Irvine, Costa Mesa, and the 5/55 corridors.",
      "Useful when you want Orange County employment access without paying coastal cliffside premiums — still confirm village-level comps.",
      "Often compared with Irvine for planned-community living and with coastal CdM when lifestyle vs payment is the trade.",
    ],
    highlights: [
      {
        title: "Freeway access",
        body: "Central placement helps multi-destination commutes — still budget rush-hour buffers.",
      },
      {
        title: "Product mix",
        body: "Legacy homes and newer tracts — remodel vintage and HOA rules differ sharply.",
      },
      {
        title: "Airport proximity",
        body: "John Wayne is typically a short drive depending on the neighborhood.",
      },
      {
        title: "Coast optionality",
        body: "Corona del Mar and Newport Beach remain weekend drives — map against a full coastal move if that is the goal.",
      },
    ],
    detailsTitle: "Filters",
    details: [
      {
        title: "Compare",
        items: ["Legacy vs new tract", "HOA", "Lot size", "Commute"],
      },
      {
        title: "Peer cities",
        items: ["Irvine", "Costa Mesa", "Mission Viejo", "Corona del Mar"],
      },
    ],
    faqs: [
      {
        question: "How does Tustin pricing compare to Irvine?",
        answer:
          "It depends on tract, vintage, and HOA. We pull side-by-side MLS comps for the floor plans you will actually tour rather than city averages alone.",
      },
    ],
    ctaTitle: "Compare Tustin communities",
    ctaBody: `Central OC shortlist with live comps. Call ${agentInfo.phoneFormatted}.`,
    meta: {
      title: "Tustin Homes for Sale | Orange County | Dr. Gene Boyle",
      description:
        "Tustin real estate — Legacy and planned communities with Dr. Gene Boyle. Corona del Mar office. Call (702) 222-1964.",
      keywords: [
        "Tustin homes for sale",
        "Tustin realtor",
        "Orange County real estate Tustin",
      ],
    },
    geo: {
      latitude: 33.7455,
      longitude: -117.8265,
      containedIn: "Orange County",
      description:
        "Central Orange County city with Legacy / Old Town areas and newer planned communities.",
    },
  },

  "orange-county": {
    slug: "orange-county",
    name: "Orange County",
    title: "Orange County Real Estate —",
    accent: "coastal and inland markets we serve",
    lede: `Primary hub: Corona del Mar. Also Newport Beach, Irvine, Laguna Beach, Laguna Niguel, Mission Viejo, Monarch Beach, and Tustin. ${caLine}`,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "California", href: "/california" },
      { label: "Orange County" },
    ],
    statsTitle: "OC context | labeled third-party panels",
    stats: [
      { value: "~$1.21M", label: "OC median (Q2 2026 PS)" },
      { value: "~$3.2M+", label: "CdM third-party cluster" },
      { value: "~$1.55M", label: "Irvine Q2 2026 median" },
      { value: "CdM", label: "Our CA office hub" },
    ],
    overviewTitle: "How we cover Orange County",
    overview: [
      "eugeneboyle.com is the California realtor site for Dr. Gene Boyle — distinct from the research site at drgeneboyle.com. The California planning office is at 3301 E. Coast Hwy, Corona del Mar, CA 92625.",
      "We help buyers and sellers across coastal and inland Orange County, with deepest hyperlocal focus on Corona del Mar and Newport Beach enclaves. Irvine remains a core sell/buy market; south OC cities round out the comparison set.",
      "Las Vegas partnership with Dr. Jan Duffy (BHHS Nevada Properties) is available when your plan includes Nevada — it is secondary to California hyperlocal service on this site.",
    ],
    highlights: [
      {
        title: "Start in Corona del Mar",
        body: "Office NAP, village character, and coastal comps — the primary hyperlocal guide on this site.",
      },
      {
        title: "Coast vs inland trade",
        body: "Cliffside premiums vs master-planned square footage — we map payment, commute, and lifestyle filters without protected-class proxies.",
      },
      {
        title: "Labeled market data",
        body: "Third-party snapshots are dated and source-labeled. Live MLS confirms anything used in an offer.",
      },
      {
        title: "Cross-state option",
        body: "If you are also moving to Las Vegas, we coordinate California timing with partner Dr. Jan Duffy on the Nevada side.",
      },
    ],
    detailsTitle: "Service areas",
    details: [
      {
        title: "Primary",
        items: ["Corona del Mar", "Newport Beach"],
      },
      {
        title: "Orange County",
        items: [
          "Irvine",
          "Laguna Beach",
          "Laguna Niguel",
          "Mission Viejo",
          "Monarch Beach",
          "Tustin",
        ],
      },
      {
        title: "Partnership",
        items: ["Las Vegas Valley (Dr. Jan Duffy)"],
      },
    ],
    faqs: [
      {
        question: "Where is your California office?",
        answer: `${officeInfo.address.full}. Phone ${agentInfo.phoneFormatted}.`,
      },
      {
        question: "Is this the same as drgeneboyle.com?",
        answer:
          "No. eugeneboyle.com is the California realtor / hyperlocal real estate site. drgeneboyle.com is the separate PhD / research site.",
      },
    ],
    ctaTitle: "Start with Corona del Mar or your OC city",
    ctaBody: `Pick a guide below or call ${agentInfo.phoneFormatted}.`,
    meta: {
      title:
        "Orange County Realtor | Corona del Mar Hub | Dr. Gene Boyle",
      description:
        "Orange County real estate with Dr. Gene Boyle — Corona del Mar office, Newport Beach, Irvine, and south OC cities. Call (702) 222-1964.",
      keywords: [
        "Orange County realtor",
        "Corona del Mar real estate",
        "OC homes for sale",
        "Dr Gene Boyle",
      ],
    },
    geo: {
      latitude: officeInfo.coordinates.lat,
      longitude: officeInfo.coordinates.lng,
      containedIn: "California",
      description:
        "Orange County coastal and inland real estate with primary focus on Corona del Mar.",
    },
  },
};

export const californiaGuideList = Object.values(californiaGuides);

export function getCaliforniaGuide(slug: string): AreaGuide | undefined {
  return californiaGuides[slug];
}
