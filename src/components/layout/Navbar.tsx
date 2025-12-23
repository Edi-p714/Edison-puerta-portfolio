import Link from "next/link";
import Container from "./Container";

const navItems = [
    {href: "/", label: "Home" },
    {href: "/projects", label: "Proyectos" },
    {href: "/qa", label: "QA & Metodología" },
    {href: "/about", label: "Sobre mí" },
    {href: "/cv", label: "CV" },
    {href: "/contact", label: "Contacto" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-z0 border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
            <Container className="flex h-16 items-center justify-between gap-6">
                <Link href="/" className="font-semibold tracking-tight">
                Edison Puerta 
                </Link>

                <nav aria-label="Navigacion principal" className="hidden md:block">
                    <ul className="flex items-center gap-5 text-sm">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="hover:underline underline-offset-4">
                                {item.label} 
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="md:hidden text-sm text-black/70">Menú</div>
            </Container>
        </header>
    );
}