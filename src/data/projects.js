export const PROJECTS = [
  {
    title: "Budget Flow",
    kind: "Producto independiente",
    category: "Full Stack",
    date: "2026-04-12",
    description:
      "Una forma más clara de planificar el dinero, seguir objetivos y entender en qué se va el presupuesto.",
    technologies: ["React", "Laravel", "Charts"],
    accent: "cobalt",
    image: "/images/projects/budget-flow.svg",
  },
  {
    title: "MichiDoro",
    kind: "Aplicación de productividad",
    category: "Desarrollo móvil",
    date: "2026-09-08",
    description:
      "Una app Android para organizar tareas y rutinas alrededor de sesiones Pomodoro. Reúne el enfoque diario y la planificación semanal en un mismo lugar.",
    technologies: ["Flutter", "Clean Architecture", "SQL lite"],
    highlights: ["Pomodoro", "Tareas y rutinas", "Planificación"],
    accent: "teal",
    gallery: [
      { image: "/images/michidoro/002-image.png", label: "Inicio", alt: "Inicio de MichiDoro con nivel de energía y resumen de tareas" },
      { image: "/images/michidoro/004-image.png", label: "Tareas", alt: "Creación de una tarea con objetivo y duración" },
      { image: "/images/michidoro/005-image.png", label: "Rutinas", alt: "Lista de rutinas activas programadas" },
      { image: "/images/michidoro/007-image.png", label: "Enfoque", alt: "Temporizador Pomodoro de 25 minutos" },
      { image: "/images/michidoro/010-image.png", label: "Semana", alt: "Planificación semanal con actividades por horario" },
    ],
    url: "https://github.com/Chriss-12/Michidoro",
    esOpenSource: "true",
  },
  {
    title: "Vision Classifier",
    kind: "Exploración técnica",
    category: "Machine Learning",
    date: "2025-12-22",
    description:
      "Un experimento para recorrer el proceso completo de entrenar, medir y revisar un clasificador visual.",
    technologies: ["Python", "TensorFlow", "Pandas"],
    accent: "violet",
    image: "/images/projects/vision-classifier.svg",
  },
  {
    title: "Portfolio Studio",
    kind: "Identidad digital",
    category: "Frontend",
    date: "2025-09-18",
    description:
      "Este sitio: un espacio propio para ordenar mi trabajo, cuidar los detalles y seguir mejorando cómo lo cuento.",
    technologies: ["React", "Vite", "CSS"],
    accent: "teal",
    image: "/images/projects/portfolio-studio.svg",
  },
  {
    title: "Surface Audit",
    kind: "Seguridad aplicada",
    category: "Pentesting",
    date: "2025-07-14",
    description:
      "Una práctica de análisis defensivo para reconocer superficies expuestas y documentar hallazgos con claridad.",
    technologies: ["OWASP", "Linux", "Burp Suite"],
    accent: "coral",
    image: "/images/projects/surface-audit.svg",
  },
];
