/* =========================================================
   CONFIGURACIÓN DEL SITIO  —  CESUM
   ---------------------------------------------------------
   Edita SOLO este archivo para actualizar los datos que se
   muestran en todo el sitio (nombre, contacto, redes, etc.).
   Lo que dice  "EDITAR:"  son datos de ejemplo: reemplázalos
   por la información real del colegio.
   ========================================================= */

export const sitio = {
  nombre: "CESUM",
  nombreLargo: "Centro de Estudios CESUM",
  lema: "Formando líderes con valores para el mundo de hoy",
  dominio: "cesumnet.com",

  // ---- Contacto (EDITAR con datos reales) ----
  email: "contacto@cesumnet.com",
  emailAdmisiones: "admisiones@cesumnet.com",
  telefono: "+52 555 123 4567",        // EDITAR
  whatsapp: "525551234567",            // EDITAR (solo dígitos, con lada país)
  direccion: "Av. de la Educación 100, Col. Centro, Ciudad, CP 00000", // EDITAR
  // Pega aquí el "embed" de Google Maps de la ubicación real (EDITAR):
  mapaEmbed:
    "https://www.google.com/maps?q=Mexico%20City&output=embed",

  horario: "Lunes a viernes, 7:00 a 15:00 h",

  // ---- Redes sociales (EDITAR / deja vacío "" para ocultar) ----
  redes: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "",
    tiktok: "",
  },

  // ---- Google Workspace (el dominio ya está en Workspace) ----
  // Estos enlaces abren las herramientas iniciando sesión con el
  // dominio del colegio. El parámetro authuser/hd ayuda a que entren
  // directo con su cuenta @cesumnet.com.
  workspace: {
    classroom: "https://classroom.google.com/?hd=cesumnet.com",
    correo: "https://mail.google.com/a/cesumnet.com",
    drive: "https://drive.google.com/a/cesumnet.com",
    calendario: "https://calendar.google.com/a/cesumnet.com",
    meet: "https://meet.google.com/",
    documentos: "https://docs.google.com/a/cesumnet.com",
  },
};

// Niveles educativos (Secundaria / Preparatoria)
export const niveles = [
  {
    titulo: "Secundaria",
    descripcion:
      "Tres grados con un modelo académico sólido, acompañamiento personalizado y formación en valores.",
    puntos: ["1°, 2° y 3° grado", "Inglés intensivo", "Tutorías y orientación"],
  },
  {
    titulo: "Preparatoria",
    descripcion:
      "Bachillerato con incorporación oficial, orientación vocacional y preparación para la universidad.",
    puntos: ["Bachillerato general", "Áreas propedéuticas", "Preparación universitaria"],
  },
];
