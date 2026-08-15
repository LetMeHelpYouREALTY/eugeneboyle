import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo/metadata";
import AreaGuidePage from "@/components/editorial/AreaGuidePage";
import {
  californiaGuides,
  getCaliforniaGuide,
} from "@/lib/guides/california";
import { buildNeighborhoodGuideSchema } from "@/lib/seo/guide-schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export function generateStaticParams() {
  return Object.keys(californiaGuides).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getCaliforniaGuide(slug);
  if (!guide) {
    return {};
  }
  return buildPageMetadata({
    title: guide.meta.title,
    description: guide.meta.description,
    path: `/california/${slug}`,
    keywords: guide.meta.keywords,
  });
}

export default async function CaliforniaAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getCaliforniaGuide(slug);
  if (!guide) {
    notFound();
  }

  const schema = buildNeighborhoodGuideSchema(
    guide,
    `/california/${slug}`
  );

  return <AreaGuidePage guide={guide} schema={schema} />;
}
