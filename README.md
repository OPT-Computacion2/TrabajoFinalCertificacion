# Tabla de elementos solicitados — Comité 51120

| # | Elemento solicitado | Archivo(s) donde se encuentra |
|---|---|---|
| 1 | Mínimo 4 páginas HTML | `index.html`, `20th-century-boys.html`, `v-for-vendetta.html`, `1984.html`, `contacto.html` (5 páginas activas + `plantilla-obra.html`) |
| 2 | Capas: encabezado / contenido (section, article, aside) / pie | Todas las páginas (`<header>`, `<main><section>` con `<article>`/`<aside>`, `<footer>`) |
| 3 | Menú de navegación ≥3 elementos, lista no numerada, en todas las páginas | Navegación `.side-menu` (`<ul>`) en el `<header>` de todas las páginas |
| 4 | Enlaces del menú cambian de color al pasar el mouse | Reglas `.side-menu a:hover` y `.btn:hover` en `css/styles.css` |
| 5.a | CSS — hoja de estilo externa | `css/styles.css`, `css/tema.css` y `css/obras.css`, enlazadas en todas las páginas |
| 5.b | CSS — incrustado por página | Etiquetas `<style>` en el `<head>` de `index.html` y `contacto.html` |
| 5.c | CSS — en línea para elementos específicos | Atributos `style="color:var(--gold)..."` en `index.html` |
| 6 | Imágenes en directorio `img` | Carpeta `img/` (portadas, íconos, banners, previsualizaciones) |
| 7 | Carrusel de imágenes | `index.html`, sección `#obras` (`.carousel`), interactividad en `js/script.js` |
| 8.1 | Hiperenlace a un lugar de la misma página | `index.html` (Guía PDF → `#lecturas`) |
| 8.2 | Hiperenlace a otra página del sitio | Menú de navegación y enlaces cruzados en todas las páginas (ej. `20th-century-boys.html` → `1984.html`) |
| 8.3 | Hiperenlace a sitio externo | `index.html` y `1984.html`, enlaces contextuales a Wikipedia |
| 8.4 | Hiperenlace a un documento | `index.html`, enlace de descarga a `docs/lecturas-recomendadas.pdf` |
| 9 | Enlace externo abre en nueva ventana | Atributos `target="_blank" rel="noopener noreferrer"` en los enlaces de `index.html` y `1984.html` |
| 10 | Tabla >3 columnas/renglones, con celda de imagen y celda con color distinto | `index.html`, tabla `.dossier-table` (6 columnas, 4 filas, imágenes miniatura y celda destacada en rojo) |
| 12.1 | Animación | `index.html`, efecto visual `.scanline` (animación `@keyframes` en `css/styles.css`) |
| 12.2 | Video ≤20 s | `v-for-vendetta.html`, reproductor `<video>` con `media/video-vigilancia.mp4` (10 s) |
| 12.3 | Dos audios (fondo en home, sin loop / incrustado, sin autoplay) | `index.html` (`media/ambiente-fondo.mp3`) y `v-for-vendetta.html` (`media/transmision.mp3`) |
| 13 | Contador de visitas en home + otro script en otra página | `index.html` (contador con `localStorage`); `contacto.html` (reloj en tiempo real y contador de caracteres) |
| 14 | Formulario | `contacto.html`, formulario interactivo `#contact-form` |
