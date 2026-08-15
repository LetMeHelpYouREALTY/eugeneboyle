import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { getHeroImage } from "@/lib/guides/media";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { agentInfo, officeInfo } from "@/lib/site-config";
import { cdmMarketNotes } from "@/lib/market/corona-del-mar";
import { CALIFORNIA_AREAS } from "@/lib/california-areas";
import { buildPageMetadata } from "@/lib/seo/metadata";
import SchemaScript from "@/components/SchemaScript";
import { generateFAQSchema } from "@/lib/schema";
import RealScoutOfficeWidget from "@/components/realscout/RealScoutOfficeWidget";

export const revalidate = 3600;

export const metadata: Metadata = buildPageMetadata({
  title:
    "Corona del Mar Realtor | Orange County Homes | Dr. Gene Boyle",
  description:
    "Hyperlocal Corona del Mar and Orange County real estate with Dr. Gene Boyle (CA DRE #02282581). Office: 3301 E. Coast Hwy, Corona del Mar, CA 92625. Call (702) 222-1964.",
  path: "/",
  keywords: [
    "Corona del Mar realtor",
    "Corona del Mar homes for sale",
    "Orange County real estate",
    "Dr Gene Boyle",
    "Newport Beach realtor",
  ],
});

/**
 * Homepage = brand hub for SEO / GEO / AEO.
 * Brand stays the H1; section H2s are question-style with answer-first blurbs.
 */
const sections = [
  {
    id: "cdm",
    h2: "What is buying or selling in Corona del Mar like?",
    body: cdmMarketNotes.answerFirst.home,
    href: "/california/corona-del-mar",
    cta: "Open Corona del Mar guide →",
  },
  {
    id: "buy",
    h2: "How should buyers compare CdM and Newport Beach?",
    body: cdmMarketNotes.answerFirst.buy,
    href: "/buyers",
    cta: "Buyer services →",
  },
  {
    id: "areas",
    h2: "Which Orange County areas do you cover?",
    body: cdmMarketNotes.answerFirst.areas,
    href: "/california",
    cta: "Compare California areas →",
  },
  {
    id: "next",
    h2: "What should you do next?",
    body: `Call ${agentInfo.phoneFormatted} or book a planning call. We map village vs cliffside product, OC peers, and — if needed — a Las Vegas timeline with partner ${agentInfo.partnerAgent.name}.`,
    href: "/contact#schedule",
    cta: "Book a planning call →",
  },
] as const;

const topicHub = [
  { href: "/california/corona-del-mar", label: "Corona del Mar" },
  { href: "/california", label: "Orange County" },
  { href: "/buyers", label: "Buyers" },
  { href: "/sellers", label: "Sellers" },
  { href: "/listings", label: "Homes" },
  { href: "/relocation", label: "Relocation" },
  { href: "/neighborhoods", label: "Las Vegas areas" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
] as const;

export default function Home() {
  const config = getPageDomainConfig();
  const homeHero = getHeroImage("home");

  const homeFaqSchema = generateFAQSchema(
    sections.map((s) => ({ question: s.h2, answer: s.body }))
  );

  return (
    <>
      <SchemaScript schema={homeFaqSchema} id="home-faq-schema" />
      <Navbar />
      <main>
        <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-ink text-paper">
          <Image
            src={homeHero.src}
            alt={homeHero.alt}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={70}
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"
            aria-hidden="true"
          />

          <div className="relative z-10 site-wrap pb-16 pt-32 md:pb-20 md:pt-40">
            <p className="kicker text-paper/70 animate-fade-in">
              Corona del Mar & Orange County real estate
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-tight text-paper animate-fade-up">
              Dr. Gene
              <br />
              <em className="not-italic text-accent-soft">Boyle</em>
            </h1>
            <p className="mt-6 max-w-xl font-serif text-lg md:text-xl text-paper/80 animate-fade-up reveal-delay-1">
              {config.heroSubheadline ||
                "Hyperlocal Corona del Mar realtor services — buy and sell across Orange County from the East Coast Highway office."}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center animate-fade-up reveal-delay-2">
              <Link
                href="/california/corona-del-mar"
                className="inline-flex justify-center bg-paper text-ink font-sans text-sm font-medium px-5 py-3 hover:bg-accent-faint transition-colors"
              >
                Corona del Mar guide
              </Link>
              <a
                href={agentInfo.phoneTel}
                className="inline-flex justify-center border border-paper/35 text-paper font-sans text-sm font-medium px-5 py-3 hover:bg-paper/10 transition-colors"
              >
                Call {agentInfo.phoneFormatted}
              </a>
            </div>
          </div>
        </section>

        <RealScoutOfficeWidget />

        <section className="py-12 md:py-14 border-b border-[var(--line-soft)]">
          <div className="site-wrap">
            <p className="index-tag mb-4">
              <b>{cdmMarketNotes.asOf}</b> — Corona del Mar
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {cdmMarketNotes.stats.slice(0, 4).map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl md:text-3xl text-ink">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-ink-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 font-sans text-xs text-ink-muted max-w-3xl">
              {cdmMarketNotes.disclaimer}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20" aria-labelledby="answers-heading">
          <div className="site-wrap">
            <h2 id="answers-heading" className="sr-only">
              Corona del Mar and Orange County real estate answers
            </h2>
            <div className="space-y-14 md:space-y-16 max-w-3xl">
              {sections.map((section) => (
                <article key={section.id} id={section.id}>
                  <h2 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                    {section.h2}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed">{section.body}</p>
                  <Link
                    href={section.href}
                    className="inline-flex mt-4 font-sans text-sm font-medium text-accent hover:underline underline-offset-4"
                  >
                    {section.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="pb-16 md:pb-20 border-t border-[var(--line-soft)] pt-16"
          aria-labelledby="oc-areas-heading"
        >
          <div className="site-wrap">
            <h2
              id="oc-areas-heading"
              className="font-display text-2xl md:text-3xl text-ink mb-6"
            >
              Orange County areas we serve
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CALIFORNIA_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/california/${area.slug}`}
                    className="block group"
                  >
                    <span className="font-sans text-sm font-semibold text-ink group-hover:text-accent">
                      {area.name}
                      {area.primary ? " · Primary" : ""}
                    </span>
                    <span className="mt-2 block text-sm text-ink-soft leading-relaxed">
                      {area.blurb}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pb-16 md:pb-20" aria-labelledby="topic-hub-heading">
          <div className="site-wrap">
            <h2
              id="topic-hub-heading"
              className="font-display text-2xl md:text-3xl text-ink mb-6"
            >
              Explore topic pages
            </h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 font-sans text-sm">
              {topicHub.map((topic) => (
                <li key={topic.href}>
                  <Link
                    href={topic.href}
                    className="text-ink-soft hover:text-accent underline-offset-4 hover:underline"
                  >
                    {topic.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-ink text-paper py-16 md:py-20">
          <div className="site-wrap max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              Book a Corona del Mar planning call
            </h2>
            <p className="text-lg text-paper/75 mb-8 max-w-prose">
              Schedule on Calendly or call {agentInfo.phoneFormatted}. We map
              CdM village vs cliffside product, Orange County peers, and any
              Nevada timeline with partner {agentInfo.partnerAgent.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/contact#schedule"
                className="inline-flex justify-center bg-paper text-ink font-sans text-sm font-medium px-5 py-3 hover:bg-accent-faint transition-colors"
              >
                Schedule on Calendly
              </Link>
              <Link
                href="/california/corona-del-mar"
                className="inline-flex justify-center border border-paper/30 text-paper font-sans text-sm font-medium px-5 py-3 hover:bg-paper/10 transition-colors"
              >
                Read the CdM guide
              </Link>
            </div>
            <p className="font-sans text-sm text-paper/60">
              {officeInfo.address.full}
            </p>
            <p className="mt-1 font-sans text-xs text-paper/45">
              {agentInfo.name} · {agentInfo.licenseLabel} · Partner{" "}
              {agentInfo.partnerAgent.name} ({agentInfo.partnerAgent.license})
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
