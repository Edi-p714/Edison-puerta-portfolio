import Link from "next/link";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

// Tarjeta de proyecto: titulo, resumen y tags.
// Importante: la tarjeta linkea al detalle (/projects/[slug]) para reforzar la narrativa QA.
type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
    return (
        <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold tracking-tight">
                <Link href={`/projects/${project.slug}`} className="hover:underline underline-offset-4">
                {project.title}
                </Link>
            </h3>

            <p className="mt-2 text-sm text-black/70">
                {project.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                    <Tag key={t} label={t} />
                ))}
            </div>
        </article>
    );
}