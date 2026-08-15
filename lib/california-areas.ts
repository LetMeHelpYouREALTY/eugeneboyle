/**
 * California / Orange County service areas for eugeneboyle.com
 * Primary hub: Corona del Mar (office NAP). Distinct from Las Vegas partnership pages.
 */

export type CaliforniaArea = {
  name: string;
  slug: string;
  region: "Orange County";
  primary?: boolean;
  blurb: string;
};

export const CALIFORNIA_AREAS: CaliforniaArea[] = [
  {
    name: "Corona del Mar",
    slug: "corona-del-mar",
    region: "Orange County",
    primary: true,
    blurb:
      "Coastal Newport Beach hamlet — village shops, cliffside homes, and Big & Little Corona beaches. Our California planning office is here.",
  },
  {
    name: "Newport Beach",
    slug: "newport-beach",
    region: "Orange County",
    blurb:
      "Harbor, Fashion Island, and coastal enclaves including Corona del Mar, Newport Coast, and Balboa.",
  },
  {
    name: "Irvine",
    slug: "irvine",
    region: "Orange County",
    blurb:
      "Master-planned Orange County city — common sell-side market when coordinating a California-to-Nevada move.",
  },
  {
    name: "Laguna Beach",
    slug: "laguna-beach",
    region: "Orange County",
    blurb:
      "Artist-coast community with cove beaches and hillside view homes along Pacific Coast Highway.",
  },
  {
    name: "Laguna Niguel",
    slug: "laguna-niguel",
    region: "Orange County",
    blurb:
      "South Orange County community between the coast and inland freeways — townhomes through hillside estates.",
  },
  {
    name: "Mission Viejo",
    slug: "mission-viejo",
    region: "Orange County",
    blurb:
      "Lake Mission Viejo–area master-planned living with a wide range of floor plans and HOA amenity levels.",
  },
  {
    name: "Monarch Beach",
    slug: "monarch-beach",
    region: "Orange County",
    blurb:
      "Coastal Dana Point / Monarch Beach corridor — resort-adjacent and ocean-view product.",
  },
  {
    name: "Tustin",
    slug: "tustin",
    region: "Orange County",
    blurb:
      "Central Orange County — Legacy / Old Town and newer planned communities with freeway access.",
  },
];

export const ORANGE_COUNTY_REGION = {
  name: "Orange County",
  slug: "orange-county",
  blurb:
    "We serve buyers and sellers across Orange County coastal and inland markets, with the California office in Corona del Mar.",
};

export function getCaliforniaArea(slug: string): CaliforniaArea | undefined {
  return CALIFORNIA_AREAS.find((a) => a.slug === slug);
}

export const primaryCaliforniaArea = CALIFORNIA_AREAS.find((a) => a.primary)!;
