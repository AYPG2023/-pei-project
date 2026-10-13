# Proyecto Ético Individual

Presentación web académica del Proyecto Ético Individual del curso de Ética. El sitio organiza el contenido en secciones visuales para facilitar su exposición en clase y su exportación a PDF.

## Contenido

- Ficha académica del estudiante.
- Primera y segunda evaluación PEI con ocho principios y cinco ámbitos.
- Comparación del avance del ámbito familiar de 65 a 68 puntos.
- Preguntas y respuestas de reflexión para cada evaluación.
- Principios del curso de Ética, con énfasis en el perdón.
- Portafolio de *Los 7 votos del éxito* y capítulo 6.1 sobre planificación efectiva.
- Código de ética para Ingeniería en Sistemas de Información.
- Conclusión y recomendaciones finales.

## Funcionalidades

- Navegación activa entre las secciones.
- Indicador de progreso de lectura.
- Diseño adaptable para computadora, tableta y celular.
- Tablas con desplazamiento horizontal en pantallas pequeñas.
- Animaciones mediante `IntersectionObserver` al entrar y salir del área visible.
- Compatibilidad con `prefers-reduced-motion`.
- Campos editables en la ficha académica guardados en `localStorage`.
- Impresión y exportación a PDF sin menú ni animaciones.
- Accesibilidad mediante teclado y enlace para saltar al contenido.

## Estructura principal

- `index.html`: estructura y contenido de la presentación.
- `assets/css/styles.css`: diseño, colores, adaptabilidad, animaciones e impresión.
- `assets/js/app.js`: navegación, progreso, animaciones y persistencia de campos editables.
- `Proyecto_Etico_Individual_PEI.docx`: documento utilizado como fuente académica.

## Cómo abrir la página

No requiere compilación ni instalación de dependencias.

Desde PowerShell, ejecuta:

```powershell
cd C:\laragon\www\proyecto-pei
python -m http.server 8000
```

Después abre en el navegador:

```text
http://localhost:8000
```

También es posible abrir `index.html` directamente, aunque se recomienda utilizar el servidor local.

## Edición de datos

Los campos punteados de la ficha académica pueden modificarse directamente en la página. Los cambios se almacenan únicamente en el navegador actual mediante `localStorage`.

Para recuperar los valores iniciales, elimina la clave `pei-presentation-fields-v1` del almacenamiento local del navegador y vuelve a cargar la página.

## Impresión o PDF

Usa el botón **Imprimir / PDF**. La hoja de impresión oculta la navegación y las animaciones, conserva las matrices completas y evita cortes dentro de los bloques principales.
