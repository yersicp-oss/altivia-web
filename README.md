# ALTIVIA — Sitio web corporativo

Sitio estático diseñado para ALTIVIA con una línea gráfica editorial corporativa: tipografía Montserrat, navegación lateral fija, azul marino, acentos rojos, fotografías de campo y diseño adaptable a móviles.

## 1. Qué contiene

- `index.html` — Inicio, propuesta de valor, especialidades y galería destacada.
- `nosotros.html` — Firma, enfoque y valores de trabajo.
- `servicios.html` — Seis áreas de servicios y sus alcances orientativos.
- `proyectos.html` — Portafolio fotográfico con filtros por categoría, buscador y fichas interactivas.
- `contacto.html` — Formulario de consulta (prepara un correo en la aplicación del visitante).
- `assets/css/styles.css` — Diseño, colores, retícula y adaptación a móviles.
- `assets/js/main.js` — Menú móvil, búsqueda, filtros, fichas y formulario.
- `assets/js/config.js` — Datos configurables de contacto.
- `assets/img/` — Fotografías optimizadas en WebP y logotipo.
- `favicon.svg` — Icono del sitio.
- `robots.txt` — Indicación básica para buscadores.

No requiere instalación de Node.js, base de datos, WordPress ni un servidor de aplicaciones.

## 2. Cómo subir al hosting

### Hosting convencional (cPanel, Plesk u otro)

1. Descarga `ALTIVIA_WEB_HOSTING.zip` y descomprímelo.
2. Abre el **Administrador de archivos** del hosting.
3. Entra a `public_html/` (o a la carpeta raíz correspondiente al dominio).
4. Sube **el contenido de `ALTIVIA_WEB_HOSTING`**, no la carpeta contenedora completa. La ruta final debe ser `public_html/index.html`.
5. Verifica que `public_html/assets/css/styles.css` y `public_html/assets/img/` estén presentes.
6. Ingresa a tu dominio. El inicio deberá cargar mediante `index.html`.

### Hosting estático (Netlify, Cloudflare Pages, GitHub Pages)

Publica la carpeta `ALTIVIA_WEB_HOSTING/` como directorio raíz. No requiere comando de compilación. Si se usa una ruta secundaria, los enlaces relativos siguen funcionando siempre que se conserven las carpetas.

## 3. Configuraciones obligatorias antes de publicar

Abre `assets/js/config.js` y reemplaza:

```javascript
window.ALTIVIA_CONFIG = {
  email: 'tu-correo-corporativo@tu-dominio.com',
  linkedin: 'https://www.linkedin.com/company/TU-PAGINA/',
  telefono: ''
};
```

**Importante:** No se incluyeron correos, teléfonos, dominios ni enlaces que no hayan sido confirmados. Hasta configurar el correo, el formulario muestra un aviso en vez de intentar enviarlo.

### Sobre el formulario

Este sitio es totalmente estático. El formulario **no envía datos en segundo plano**: después de validar los campos abre el correo del visitante con el asunto y mensaje preparados, y el visitante debe presionar **Enviar** en su cliente de correo. Si necesitas una bandeja de solicitudes centralizada y envíos sin abrir un programa externo, conecta un servicio de formularios o un backend al hosting.

## 4. Personalización de la imagen corporativa

**Paleta y navegación:** editar variables al principio de `assets/css/styles.css`:

```css
:root {
  --navy: #072a45;
  --navy2: #0b3654;
  --navy3: #051d30;
  --red: #e32236;
  --sidebar: 252px;
}
```

**Tipografía:** Montserrat, cargada a través de Google Fonts; el sitio utiliza Arial como respaldo. No es necesario incluir archivos de fuentes.

**Logo:** `assets/img/altivia-logotipo-blanco.png`. Se extrajo como referencia de la imagen corporativa compartida; para máxima calidad futura conviene sustituirlo por el archivo oficial original (preferentemente SVG) y ajustar la ruta en el menú de las cinco páginas.

**Fotografías:** reemplaza las imágenes WebP dentro de `assets/img/` conservando los nombres de archivo, o cambia la ruta `src`/CSS de la página. Se han comprimido sin añadir elementos gráficos ajenos. La oscurecida azul de algunas imágenes se realiza mediante CSS y **no altera los archivos fotográficos originales**.

**Textos y fichas:** edita directamente los archivos `.html`. El portafolio se configura con elementos `article.project-card`; `data-category`, `data-title`, `data-description`, `data-tasks` (actividades separadas por `|`) y el bloque interno de imagen/título. Usa categorías `relaves`, `geotecnia`, `calidad` o `campo`, o añade tus propias categorías y filtros.

## 5. Validación editorial antes de salir en público

El portafolio actualmente muestra **experiencias fotográficas temáticas**, no fichas comerciales con nombres de clientes, presupuestos o entregables contractuales. Sustituye las descripciones generales por fichas formalmente aprobadas, confirma que ALTIVIA puede publicar cada fotografía e incorpora autorizaciones cuando corresponda. No se inventaron clientes, métricas, certificaciones ni resultados.

Se recomienda añadir, cuando estén confirmados:

- Dominio definitivo y enlaces oficiales.
- Correo y otros medios de contacto.
- Nombre y descripción exacta de proyectos autorizados.
- Identidad visual original en vector (logo).
- Política de privacidad y condiciones aplicables si se incorpora analítica, cookies o un backend que almacene consultas.

## 6. Pruebas sugeridas

- Abrir las cinco páginas en computadora y celular.
- Usar el menú lateral y el menú móvil.
- En Proyectos: seleccionar un filtro, escribir en el buscador, abrir y cerrar una ficha.
- En Contacto: configurar el correo, completar el formulario y verificar que se abra el programa de correo.
- Revisar las imágenes, derechos de publicación y los datos institucionales antes de publicarlos.

## 7. Referencia visual

La arquitectura de proyectos, el uso de filtros y la organización de servicios se inspiraron de forma general en https://anddes.com/proyectos/; el código, los textos y el tratamiento visual se desarrollaron para ALTIVIA, sin copiar contenido comercial ni imágenes de Anddes.

---
**Versión:** 1.0 / Sitio corporativo estático.
