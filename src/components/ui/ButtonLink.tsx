import Link from "next/link";

// Botón basado en Link para navegación interna.
// Mantiene un estilo consistente para CTAs ("ver proyectos", "Contactar", etc.)
type Props = {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
};

export default function ButtonLink({ href, children, variant = "primary" }: Props) {
    const base = 
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition";
    const styles = 
        variant === "primary"
            ? "bg-black text-white hover:bg-black/90"
            : "border border-black/15 bg-white hover:bg-black/5";

    return (
        <Link href={href} className="{`${base} ${styles}`}">
            {children}
        </Link>
    );
}