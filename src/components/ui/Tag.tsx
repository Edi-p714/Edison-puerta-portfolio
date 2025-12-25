// Pequeña etiqueta visual para mostrar tecnologias/enfoques.
// En QA ayuda a "escanear" rápidamente el tipo de proyecto.
type Props = { label: string };

export default function Tag({ label}: Props) {
    return (
        <span className="inline-flex items-center rounded-full border border-black/10 px-2.5 py-1 text-xs text-black/70">
            {label}
        </span>
    );
}