import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/lib/data";
import ServiceDetail from "@/components/ServiceDetail";

interface PageProps {
  params: { id: string };
}

export function generateStaticParams(): { id: string }[] {
  return SERVICES.map((s) => ({ id: s.id }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getService(params.id);
  if (!service) return {};
  return {
    title: `${service.name} — Mileshub Windows`,
    description: service.blurb,
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = getService(params.id);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
