# Sitio web CESUM

Prototipo funcional del sitio web del colegio **CESUM** (Secundaria · Preparatoria),
construido con [Astro](https://astro.build). Dominio: `cesumnet.com`.

## 🚀 Cómo ejecutarlo

```bash
npm install        # solo la primera vez
npm run dev        # servidor local en http://localhost:4321
```

Para generar la versión final (lista para publicar):

```bash
npm run build      # genera la carpeta dist/
npm run preview    # previsualiza la versión final
```

## 📁 Estructura

```
src/
├── data/sitio.js          ← ⭐ EDITA AQUÍ los datos del colegio
├── layouts/BaseLayout.astro
├── components/            ← Header, Footer, Logo
├── styles/global.css      ← Colores y estilos (paleta azul institucional)
└── pages/
    ├── index.astro        ← Inicio + Nosotros + Oferta educativa
    ├── admisiones.astro    ← Proceso, requisitos, fechas, becas
    ├── classroom.astro     ← Aula virtual (Google Classroom y herramientas)
    └── contacto.astro      ← Formulario, datos, mapa
public/
└── favicon.svg
```

## ✏️ Qué editar primero

Casi todo el contenido editable vive en **`src/data/sitio.js`**:
nombre, teléfono, correo, dirección, redes sociales y enlaces de Google Workspace.
Busca los comentarios que dicen `EDITAR:` y reemplázalos por los datos reales.

- **Mapa:** en `sitio.js`, campo `mapaEmbed`, pega el enlace de "insertar mapa"
  desde Google Maps (Compartir → Insertar un mapa → copiar el `src` del iframe).
- **Textos de cada página:** edita el archivo `.astro` correspondiente en `src/pages/`.
- **Colores:** cambia las variables al inicio de `src/styles/global.css`.

## 📨 Formulario de contacto

Por defecto, el formulario abre la app de correo del visitante con el mensaje
prellenado (funciona sin servidor). Para **recibir los mensajes automáticamente**,
tienes dos opciones sencillas:

1. **Formspree** (gratis): crea un form en [formspree.io](https://formspree.io) y
   en `src/pages/contacto.astro` cambia el `<form>` a:
   ```html
   <form action="https://formspree.io/f/TU_ID" method="POST">
   ```
   (y elimina el `<script>` del final del archivo).
2. **Google Forms**: como el dominio ya usa Google Workspace, puedes crear un
   Formulario de Google y embeberlo con un `<iframe>`.

## 🌐 Publicar en cesumnet.com

El sitio es estático (carpeta `dist/`), así que se puede alojar gratis en:

- **Netlify** o **Vercel**: conecta el repositorio y apunta tu dominio `cesumnet.com`.
- **GitHub Pages**, **Cloudflare Pages**, o cualquier hosting que sirva archivos estáticos.

En todos los casos: sube el proyecto, configura el build (`npm run build`, carpeta
de salida `dist`) y agrega `cesumnet.com` como dominio personalizado siguiendo
las instrucciones del proveedor (apuntar los registros DNS).

---

> ⚠️ Las cifras, fechas, textos e imágenes son **contenido de ejemplo** para el
> prototipo. Reemplázalos por la información oficial del colegio antes de publicar.
