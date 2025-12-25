import type { ReactNode } from "react";
import Container from "@/components/layout/Container";

// Componente de sección para mantener espacios y jerarquia visual consistentes.
// Esto evita repetir "pading/margins" en todas las paginas.
type Props = {
    title?: string;
    subtitle?: string;
    children: ReactNode;
};

export default function Section({ title, subtitle, children }: Props) {
    return (
        <section className="py-12 sm:py-16">
            <Container>
                {(title || subtitle) && (
                    <header className="mb-6 sm:mb-8">
                        {title && (
                            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="mt-2 text-black/70 max-w-2xl">
                                {subtitle}
                            </p>
                        )}
                    </header>
                )}
                {children}
            </Container>
        </section>
    );
}