import Container from "./Container";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-black/10">
            <Container className="py-8 text-sm text-black/70">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p>© {year} Edison Puerta. Todos los derechos reservados.</p>
                <p className="text-black/60">QA Manual · Testing funcional · Automatización en formación</p>
                </div> 
            </Container>
        </footer>
    );
}