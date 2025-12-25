import ButtonLink from "@/components/ui/ButtonLink";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import Container from "@/components/layout/Container";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      {/* HERO: primera impresión para RRHH (mensaje claro, directo y QA-first) */}
      <section className="py-16 sm:py-20">
        <Container>
          <h1 className="text-3xl sm:4xl font-semibold tracking-tight max-w-3xl">
            Tester QA - QA Manual con base en desarrollo web y automatización en formación
          </h1>

          <p className="mt-4 text-black/70 max-w-2xl">
          Especiaizado en validación funcional de productos web, con enfoque en calidad, claridad y mejora continua.
          </p>

          {/* Bullets de valor: "escaneables" para RRHH */}
          <ul className="mt-6 space-y-2 text-black/80">
            <li>• Testing funcional de aplicaciones web y APIs.</li>
            <li>• Documentación de calidad: casos de prueba, matrices y evidencias.</li>
            <li>• Enfoque en detección temprana de errores y mejora continua.</li>
          </ul>

          {/* CTA principal: el primer clic debe llevar a evidencia (Proyectos) */}
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects" variant="primary">Ver proyectos</ButtonLink>
            {/* CTA secundario: reduce fricción y salida rápida para contacto */}
            <ButtonLink href="/contact" variant="secondary">Contacto</ButtonLink>
          </div>
        </Container>
      </section>

      {/* Resumen profesional: corto, orientado a valor (sin saturar de tecnología) */}
      <Section 
        title="Resumen profesional"
        subtitle="Mi enfoque es asegurar la calidad de productos web con pruebas funcionales, documentación clara y comunicación efectiva con desarrollo.">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/10 p-5">
              <h3 className="font-semibold">Testing funcional</h3>
              <p className="mt-2 text-sm text-black/70">
                Validación de flujos criticos (formularios, autenticación, CRUD, reglas de negocio) y criterios de aceptación.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-5">
              <h3 className="font-semibold">APIs</h3>
              <p className="mt-2 text-sm text-black/70">
                Pruebas de endpoints, verificación de respuestas, manejo de errores y documentación de evidencias.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-5">
              <h3 className="font-semibold">Automatización</h3>
              <p className="mt-2 text-sm text-black/70">
                Enfoque progesivo: primero pruebas manuales solidas, luego automatización estable y mantenible.
              </p>
            </div>
          </div>
        </Section>

        {/* Proyectos destacados: evidencia rápida (2-3 tarjetas) */}
        <Section
          title="Proyectos destacados"
          subtitle="Una selección breve para mostrar evidencia práctica. Cada proyecto incluye enfoque, documentación y aprendizajes.">
            <div className="grid gap-4 md:grid-cols-3">
              {featuredProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>

            <div className="mt-8">
              <ButtonLink href="/projects" variant="secondary">Ver todos los proyectos</ButtonLink>
            </div>
          </Section>

          {/* QA & Metodología (preview): refuerza "cómo trabajo" sin abrumar a RRHH */}
          <Section
            title="QA & Metodología"
            subtitle="Cómo organizo pruebas, documento resultados y reporto bugs de manera clara">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/10 p-5">
                  <h3 className="font-semibold">Estrategia</h3>
                  <p className="mt-2 text-sm text-black/70">
                    Priorizo flujos criticos, smoke/regression y criterios de aceptación para maximizar cobertura con foco.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 p-5">
                  <h3 className="font-semibold">Documentación</h3>
                  <p className="mt-2 text-sm text-black/70">
                    Casos de prueba, matrices y evidencias (pasos reproducibles, resultados esperados vs. reales).
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 p-5">
                  <h3 className="font-semibold">Reporte de bugs</h3>
                  <p className="mt-2 text-sm text-black/70">
                    Reportes claros: pasos, entorno, severidad, evidencia (capturas) y contexto para facilitar el fix.
                  </p>
                </div>

                <div className="mt-8">
                  <ButtonLink href="/qa" variant="secondary">Ver metodología completa</ButtonLink>
                </div>
              </div>
            </Section>

            {/* CTA final: llamada a acción sin fricción */}
            <Section 
              title="¿Hablamos?"
              subtitle="Estoy disponible para oportunidades remotas en QA Manual. Puedes contactarme o descargar mi CV.">
                <div className="flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="primary">Contavtarme</ButtonLink>
                  <ButtonLink href="/cv" variant="secondary">Ver CV</ButtonLink>
                </div>
              </Section>
    </>
  );
}