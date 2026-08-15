/**
 * Corona del Mar market notes — third-party snapshots, not MLS.
 * Always label source + that figures need verification before offers.
 * Parallel search run 2026-08-15.
 */

export const cdmMarketAsOf = "August 2026 — third-party snapshots (verify on MLS)";

export const cdmMarketNotes = {
  asOf: cdmMarketAsOf,
  disclaimer:
    "Figures below are third-party public snapshots pulled 2026-08-15. They are not MLS pulls and are not evergreen — confirm live inventory, solds, and $/sq ft before you price or offer.",
  stats: [
    {
      value: "~$3.28M",
      label: "CdM median (Homexa snapshot)",
      source: "Homexa Corona del Mar page",
      url: "https://homexa.com/neighborhoods/newport-beach-ca/corona-del-mar",
    },
    {
      value: "~$3.1M",
      label: "Newport Beach median (same source)",
      source: "Homexa — CdM ~6% above Newport Beach median",
      url: "https://homexa.com/neighborhoods/newport-beach-ca/corona-del-mar",
    },
    {
      value: "~$3.23M",
      label: "Recent sales price (Valia)",
      source: "Valia OC — small sample; also lists ~$1.54K sale $/sq ft and 58 DOM",
      url: "https://valiaoc.com/corona-del-mar",
    },
    {
      value: "~70",
      label: "Homes tracked (Homexa)",
      source: "Homexa neighborhood tracker — inventory turns; confirm live count",
      url: "https://homexa.com/neighborhoods/newport-beach-ca/corona-del-mar",
    },
  ],
  answerFirst: {
    home:
      "Corona del Mar is a Newport Beach coastal hamlet with village retail on flower-named streets, Big and Little Corona beaches, and product from cottages to custom view estates. Third-party medians recently cluster near $3.2–3.3M — verify on MLS before you act.",
    buy:
      "Compare view orientation, village walkability, lot setting, architecture, and outdoor living — not just list price. CdM often prices above the Newport Beach city median; use CdM comps, not city-wide averages.",
    sell:
      "Pricing against Newport Beach city averages is a common miss. We build the list strategy from recent Corona del Mar solds, then stage for coastal buyers and relocators.",
    areas:
      "Primary: Corona del Mar. Also Orange County: Newport Beach, Irvine, Laguna Beach, Laguna Niguel, Mission Viejo, Monarch Beach, and Tustin. Las Vegas partnership available when you are moving to Nevada.",
  },
} as const;
