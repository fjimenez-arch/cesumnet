/* =========================================================
   CONFIGURACIÓN DEL SITIO  —  CESUM
   ---------------------------------------------------------
   Edita SOLO este archivo para actualizar los datos que se
   muestran en todo el sitio (nombre, contacto, redes, etc.).
   Lo que dice  "EDITAR:"  son datos pendientes de confirmar:
   reemplázalos por la información real de la institución.
   ========================================================= */

export const sitio = {
  nombre: "CESUM",
  nombreLargo: "Concentración Educativa del Sur de Montelíbano",
  lema: "Creatividad, saber y libertad",
  naturaleza: "Institución educativa pública",
  municipio: "Montelíbano, Córdoba",
  rector: "Yimmy Mercado Petro",
  dominio: "cesumnet.com",

  // ---- Contacto (EDITAR con datos reales) ----
  email: "contacto@cesumnet.com",
  telefono: "",                          // EDITAR: ej. "+57 4 7724000"
  whatsapp: "",                          // EDITAR (solo dígitos con indicativo país, ej. "573001234567")
  direccion: "Montelíbano, Córdoba, Colombia", // EDITAR con la dirección exacta
  // Pega aquí el "embed" de Google Maps de la ubicación real (EDITAR):
  mapaEmbed:
    "https://www.google.com/maps?q=Montel%C3%ADbano%2C%20C%C3%B3rdoba%2C%20Colombia&output=embed",

  horario: "Doble jornada (mañana y tarde)",

  // ---- Redes sociales (EDITAR / deja vacío "" para ocultar) ----
  redes: {
    facebook: "",
    instagram: "",
    youtube: "",
    tiktok: "",
  },

  // ---- Google Workspace (el dominio ya está en Workspace) ----
  // Estos enlaces abren las herramientas iniciando sesión con el
  // dominio de la institución (cuentas @cesumnet.com).
  workspace: {
    classroom: "https://classroom.google.com/?hd=cesumnet.com",
    correo: "https://mail.google.com/a/cesumnet.com",
    drive: "https://drive.google.com/a/cesumnet.com",
    calendario: "https://calendar.google.com/a/cesumnet.com",
    meet: "https://meet.google.com/",
    documentos: "https://docs.google.com/a/cesumnet.com",
  },
};

// Niveles educativos (sistema colombiano: preescolar a media)
export const niveles = [
  {
    titulo: "Preescolar",
    descripcion:
      "El primer paso escolar, con enfoque en el juego, la socialización y el desarrollo integral de los más pequeños.",
    puntos: ["Grado transición", "Aprendizaje lúdico", "Acompañamiento cercano"],
  },
  {
    titulo: "Básica Primaria",
    descripcion:
      "Bases sólidas en lectura, escritura, matemáticas y convivencia para el resto de la vida escolar.",
    puntos: ["Grados 1° a 5°", "Lecto-escritura y cálculo", "Formación en valores"],
  },
  {
    titulo: "Básica Secundaria",
    descripcion:
      "Profundización en todas las áreas del conocimiento y desarrollo del pensamiento crítico.",
    puntos: ["Grados 6° a 9°", "Áreas fundamentales", "Tecnología e inglés"],
  },
  {
    titulo: "Educación Media",
    descripcion:
      "Preparación para el grado bachiller, las pruebas Saber 11 y los proyectos de vida de cada estudiante.",
    puntos: ["Grados 10° y 11°", "Bachiller académico", "Orientación vocacional"],
  },
];
