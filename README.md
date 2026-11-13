# ALTIVIA — Sitio web corporativo V2.0

Sitio estático HTML/CSS/JS para GitHub Pages. Adaptado del brochure `Brochure_Altivia_Consultores_2026_v4_preview(1).pdf` (2026).

## Contenido

- `index.html`: portada corporativa, servicios, métricas, proyectos y expertos.
- `nosotros.html`: presentación, enfoque y valores.
- `servicios.html`: ingeniería de relaves, geotecnia, geofísica, hidráulica, gestión y permisos.
- `proyectos.html`: 7 proyectos documentados con fichas, filtros y buscador.
- `expertos.html`: 5 perfiles técnicos documentados en el brochure.
- `contacto.html`: formulario web con FormSubmit a proyectos@altiviape.com.
- `gracias.html`: confirmación del formulario.
- `privacidad.html`: aviso informativo revisable por asesoría legal.

## Publicación en GitHub Pages

1. Descomprime el ZIP.
2. Abre el repositorio `yersicp-oss/altivia-web` en GitHub.
3. Sube **todo el contenido** del ZIP a la raíz de la rama `main` y **reemplaza** los archivos anteriores; no subas la carpeta contenedora.
4. En `Settings > Pages`: `Deploy from a branch > main > /(root)`.
5. Abre `https://yersicp-oss.github.io/altivia-web/`.

## Atención

- El sitio usa FormSubmit externo; el correo proyectos@altiviape.com debe **activar** FormSubmit siguiendo el primer correo de confirmación y realizar un segundo envío de prueba. No basta con publicar HTML para garantizar recepción.
- Revisa la publicación y autorizaciones del material técnico, las fotografías y los nombres de clientes y colaboradores antes de publicarlo.
- Algunas imágenes satelitales son de Google Earth según créditos del brochure; verificar licencias, atribuciones y permisos antes de difundirlas.
- Los años indicados corresponden a experiencia de los especialistas, **no a antigüedad corporativa**.
- Los proyectos son parte de un conjunto de experiencias desarrolladas o en desarrollo; no se afirma que todos estén concluidos.
- El aviso de privacidad es un borrador informativo y requiere revisión de responsables legales.
- El pie de página contiene el correo y teléfono consignados en el brochure: +51 970 742 042.
- Para los currículums que se reciban, establecer un aviso de tratamiento de datos antes de solicitar información sensible.

## Diseño

Estilo editorial corporativo minimalista: azul marino, blanco, acentos rojos, Montserrat y fotografías reales. Barra lateral fija en escritorio y menú móvil. Contenido responsive y accesible.

## Actualizar el contenido

- Proyectos: editar `proyectos.html` y sus tarjetas `article.project-card`.
- Expertos: editar `expertos.html`; añadir imágenes en `assets/img/`.
- Datos de contacto: `assets/js/config.js`, `contacto.html` y footer compartido en los HTML.
- Colores y diseño: `assets/css/styles.css`.
