// src/data/projects.ts
// Este archivo centraliza los datos de proyectos para que el portafolio sea mantenible.
// En vez de "hardcodear" en la UI, definimos datos aqui y la Home solo los renderiza.

export type Project = {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    // Links opcionales (más adelante los completare con demo y repo)
    repoUrl?: string;
    demoUrl?: string;
};

// NOTA: Por ahora son placeholders. En cuanto tenga proyectos reales, reemplazo esto.
// Mantener los slugs consistentes me permite crear páginas /projects/[slug] sin romper enlaces.

export const projects: Project[] = [
    {
        slug: "app-qa-lab",
        title: "App QA Lab (Sistema bajo prueba)",
        summary:
            "Aplicación web creada para practicar testing funcional (web + APIs) y automatizaciones en formación",
        tags: ["QA Manual", "web", "APIs", "Automatización"],
    },
    {
        slug: "api-testing-samples",
        title: "API Testing Samples",
        summary: 
            "Colección de casos de prueba y validaciones para endpoints (contratos, errores, status codes)",
        tags: ["APIs", "Testing", "Documentación"],
    },
    {
        slug: "automation-learning",
        title: "Automatización (en formación)",
        summary: 
            "Evidencias progresiva de automatización: criterios de selección, estabilidad, reportes y buenas prácticas.",
        tags: ["Automatización", "Aprendizaje"], 
    },
];

// En Home mostrare solo algunos proyectos como "destacados".
export const featuredProjects = projects.slice(0, 3);