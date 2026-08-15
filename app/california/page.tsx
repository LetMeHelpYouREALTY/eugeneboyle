import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import EditorialVisualHero from "@/components/editorial/EditorialVisualHero";
import EditorialMediaBand from "@/components/editorial/EditorialMediaBand";
import EditorialSection from "@/components/editorial/EditorialSection";
import EditorialCta from "@/components/editorial/EditorialCta";
import EditorialFaq from "@/components/editorial/EditorialFaq";
import SchemaScript from "@/components/SchemaScript";
import { buildHubPageSchema } from "@/lib/seo/guide-schema";
import { californiaGuideList } from "@/lib/guides/california";
import { CALIFORNIA_AREAS, ORANGE_COUNTY_REGION } from "@/lib/california-areas";
import { cdmMarketNotes } from "@/lib/market/corona-del-mar";
import { getMarketingImage, getSectionImage } from "@/lib/guides/media";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

export const revalidate = 3600;

export const metadata: Metadata = buildPageMetadata({
  title:
    "California & Orange County Homes | Corona del Mar Realtor | Dr. Gene Boyle",
  description:
    "Hyperlocal Corona del Mar realtor services plus Orange County coverage — Newport Beach, Irvine, Laguna Beach, Laguna Niguel, Mission Viejo, Monarch Beach, Tustin. Office: 3301 E. Coast Hwy, Corona del Mar, CA 92625. Call (702) 222-1964.",
  path: "/california",
  keywords: [
    "Corona del Mar realtor",
    "Orange County real estate",
    "California homes for sale",
    "Dr Gene Boyle",
    "Newport Beach realtor",
  ],
});

const hubFaqs = [
  {
    question: "Where is Dr. Gene Boyle’s California office?",
    answer: `${officeInfo.address.full}. Client CTA: ${agentInfo.phoneFormatted}.`,
  },
  {
    question: "Which Orange County areas do you cover?",
    answer: cdmMarketNotes.answerFirst.areas,
  },
  {
    question: "Is eugeneboyle.com the same as drgeneboyle.com?",
    answer:
      "No. eugeneboyle.com is the California realtor / hyperlocal real estate site. drgeneboyle.com is the separate PhD / research site.",
  },
] as const;

const pageSchemas = buildHubPageSchema({
  path: "/california",
  name: "California & Orange County Real Estate | Dr. Gene Boyle",
  description: cdmMarketNotes.answerFirst.areas,
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "California", url: "/california" },
  ],
  faqs: [...hubFaqs],
  serviceName: "Orange County and Corona del Mar real estate services",
});

const primary = CALIFORNIA_AREAS.find((a) => a.primary)!;
const others = CALIFORNIA_AREAS.filter((a) => !a.primary);

export default function CaliforniaHubPage() {
  return (
    <>
      <SchemaScript schema={pageSchemas} id="california-hub-schema" />
      <Navbar />
      <main className="pb-16">
        <EditorialVisualHero
          image={getMarketingImage("california")}
          kicker={siteConfig.fullName}
          title="California Real Estate —"
          accent="Corona del Mar first, Orange County wide"
          lede={cdmMarketNotes.answerFirst.home}
          ctas={[
            {
              href: "/california/corona-del-mar",
              label: "Corona del Mar guide",
              variant: "primary",
            },
            {
              href: agentInfo.phoneTel,
              label: `Call ${agentInfo.phoneFormatted}`,
              variant: "secondary",
            },
          ]}
        />

        <EditorialSection
          index="01"
          label="Primary"
          title={`${primary.name} — our California hub`}
        >
          <p className="max-w-prose text-lg leading-relaxed mb-8">
            {primary.blurb} Office NAP: {officeInfo.address.full}.
          </p>
          <Link
            href={`/california/${primary.slug}`}
            className="inline-flex font-sans text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            Open the Corona del Mar guide →
          </Link>
        </EditorialSection>

        <EditorialMediaBand image={getSectionImage("areas")} />

        <EditorialSection
          index="02"
          label={ORANGE_COUNTY_REGION.name}
          title="Orange County service areas"
          tone="muted"
        >
          <p className="max-w-prose leading-relaxed mb-10">
            {ORANGE_COUNTY_REGION.blurb}
          </p>
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8 border-t border-[var(--line-soft)] pt-10">
            <li>
              <Link
                href="/california/orange-county"
                className="font-sans text-base font-semibold text-ink hover:text-accent"
              >
                {ORANGE_COUNTY_REGION.name}
              </Link>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {ORANGE_COUNTY_REGION.blurb}
              </p>
            </li>
            {others.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/california/${area.slug}`}
                  className="font-sans text-base font-semibold text-ink hover:text-accent"
                >
                  {area.name}
                </Link>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {area.blurb}
                </p>
              </li>
            ))}
          </ul>
        </EditorialSection>

        <EditorialSection
          index="03"
          label="Guides"
          title="All California area pages"
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-3 font-sans text-sm">
            {californiaGuideList.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/california/${g.slug}`}
                  className="text-ink-soft hover:text-accent underline-offset-4 hover:underline"
                >
                  {g.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink-muted max-w-prose">
            Also serving Las Vegas Valley buyers and sellers with partner{" "}
            {agentInfo.partnerAgent.name} — see{" "}
            <Link href="/neighborhoods" className="text-accent hover:underline">
              Las Vegas areas
            </Link>{" "}
            and{" "}
            <Link href="/relocation" className="text-accent hover:underline">
              relocation
            </Link>
            .
          </p>
        </EditorialSection>

        <EditorialFaq faqs={[...hubFaqs]} index="04" title="California questions" />

        <EditorialCta
          title="Talk Corona del Mar or your OC city"
          body={`Schedule a planning call or call ${agentInfo.phoneFormatted}.`}
          primaryHref="/contact#schedule"
          primaryLabel="Book a call"
        />
      </main>
      <Footer />
    </>
  );
}
