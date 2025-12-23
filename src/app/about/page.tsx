import Container  from "@/components/layout/Container";

export default function HomePage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Sobre mí
      </h1>
      <p className="mt-4 text-black/70">
      Especializado en validación funcional de productos web, con enfoque en calidad, claridad y mejora continua.
      </p>
    </Container>
  );
}