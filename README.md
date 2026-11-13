# ALTIVIA — Sitio web corporativo V2.2 (sin sección Expertos)

Sitio estático HTML/CSS/JS para GitHub Pages. Adaptado del brochure `Brochure_Altivia_Consultores_2026_v4_preview(1).pdf` (2026).

## Contenido

- `index.html`: portada corporativa, servicios, métricas y proyectos.
- `nosotros.html`: presentación, enfoque y valores.
- `servicios.html`: ingeniería de relaves, geotecnia, geofísica, hidráulica, gestión y permisos.
- `proyectos.html`: 7 proyectos documentados con fichas, filtros y buscador.
- `expertos.html`: redirección de compatibilidad al inicio; no publica nombres ni fichas del equipo.
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


## Identidad de marca — actualización V2.1

Se integraron archivos oficiales facilitados por ALTIVIA y se retiró el logotipo provisional en las zonas de navegación y pie de página.

- **Menú lateral de escritorio:** `assets/img/logo-horizontal-oficial.png` (original: LOGO HORIZONTAL PORTADA BLANCO.png).
- **Barra móvil:** mismo horizontal oficial para identidad consistente y legible.
- **Pie de página azul:** `assets/img/logo-pie-oficial.png` (original: LOGO HORIZONTAL BLANCO.png).
- **Favicon y acceso desde dispositivos móviles:** símbolo extraído del archivo oficial `LOGO VERTICAL PERFIL BLANCO.png`, colocado sobre fondo azul corporativo.
- **Archivos de reserva de identidad:** `logo-perfil-oficial.png` y `logo-impresion-oficial.png` disponibles para futuros usos.

Los logos originales se han recortado solo en el área transparente vacía y redimensionado proporcionalmente para uso web; no se han alterado sus trazos. No superponer los logos blancos sobre fondos blancos.

La integración es local y **no actualiza por sí sola el repositorio GitHub Pages**. Subir los archivos de este paquete para publicar la versión V2.1.

## Cambio V2.2 — Sección Expertos retirada

Se eliminó la sección de perfiles personales de Inicio y los enlaces a Expertos del menú y del pie de página. El antiguo `expertos.html` solo redirige al Inicio para que una URL antigua no muestre contenido desactualizado. Se retiraron del paquete las cinco fotografías de perfil. Actualiza el sitio en GitHub conservando esta redirección o elimina `expertos.html` desde el repositorio.


## Actualización V2.3
- Se incorporó una galería de imágenes en cada proyecto.
- Se añadieron 14 imágenes exportadas del brochure PPT en `assets/img/proyectos/`.
- Los modales de proyectos ahora muestran imágenes complementarias cuando el usuario abre cada ficha.
