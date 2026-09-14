# Neuro Child Guide

Crea una landing page de ventas (una sola página, scroll largo) en español, para vender un e-book digital en PDF llamado:

NEUROACTIVIDAD — Cómo encender la atención, la memoria y la calma en el cerebro de tu hijo

Es una guía práctica de neurociencia aplicada a la crianza, para madres y padres de niños de 3 a 12 años. Tono: científico pero cálido, cercano, sin jerga innecesaria, nunca alarmista ni culpabilizador. Trato de "tú". Es un producto premium (no un infoproducto barato): la página debe transmitir autoridad editorial, calidez y calidad de diseño, no urgencia agresiva de tipo "compra ya o te arrepentirás".

Stack y setup

React + Tailwind CSS.

Una sola página larga con secciones ancladas (id), sin router.

Totalmente responsive, mobile-first (la mayoría del tráfico vendrá de Instagram/TikTok en móvil).

Modo claro únicamente (no necesita dark mode).

Botón de compra fijo (sticky) en la parte inferior en móvil, que aparece al hacer scroll pasada la primera sección.

Sistema de diseño (usar exactamente estos tokens)

Colores (variables CSS o Tailwind config):

ink #101A33 (texto principal, fondos oscuros)

ink-2 #2C3A5C (texto secundario)

ink-3 #5B6786 (texto terciario/muted)

paper #FBF8F2 (fondo principal, cálido off-white)

paper-2 #F3ECE0 (fondo alterno de secciones)

rule #DED4C4 (líneas divisorias, bordes sutiles)

coral #E8543A (color de acento primario — CTAs, números, highlights)

coral-soft #FBE7E1 (fondos suaves de acento)

teal #0E8C7C (acento secundario — checks, "sí")

teal-soft #DFF0ED

violet #574BC2 (acento terciario — dato científico)

violet-soft #E7E4F8

amber #D08A08 (advertencias/atención)

amber-soft #FBEFD6

Tipografía (cargar desde Google Fonts):

Display/títulos: Fraunces (serif con personalidad, weight 600–900, usar variante itálica para subtítulos)

Cuerpo: Source Serif 4 (serif de lectura, weight 400)

UI/labels/botones/tablas: Inter (sans, weight 500–800)

Estética general: editorial premium, como una revista o libro de autor, NO como una landing de curso online genérico. Mucho aire en blanco, tipografía grande y elegante, ilustraciones lineales sutiles tipo constelación neuronal (puntos y líneas finas conectando nodos, en tonos coral/violeta sobre fondo oscuro), esquinas suavemente redondeadas, sombras muy sutiles. Nada de emojis en el diseño ni gradientes saturados tipo SaaS.

Estructura de la página (en este orden)

1. Hero

Fondo oscuro (ink #101A33) con una ilustración sutil de constelación neuronal (nodos conectados por líneas finas, algunos nodos en coral) de fondo, similar a un mapa cerebral abstracto.

Eyebrow pequeño en coral, mayúsculas, letter-spacing amplio: "NEUROCIENCIA APLICADA A LA CRIANZA"

Título enorme en Fraunces, blanco: "El método para despertar / NEUROACTIVIDAD" (la segunda línea mucho más grande que la primera)

Subtítulo: "Cómo encender la atención, la memoria y la calma en el cerebro de tu hijo con 6 interruptores respaldados por la ciencia — y un plan de 21 días que cabe en tu rutina real."

Badge/sello: "Plan de 21 días" en coral

Línea de contexto: "Guía práctica para madres y padres · Niños de 3 a 12 años"

CTA primario grande: "Quiero el método completo" (botón coral, texto blanco, hover sutil)

Debajo del CTA, precio tachado + precio final (usar placeholders: $XX $XX) y una línea de garantía corta ("Acceso inmediato en PDF · Garantía de 7 días")

Mockup de portada del libro flotando a la derecha (usar un rectángulo con proporción de libro 165:235 y el mismo diseño de portada oscura descrito arriba, como placeholder de imagen)

2. Barra de dolor/reconocimiento (fondo paper)

Tres o cuatro frases cortas, en primera persona del lector, tipo testimonio interno, con iconos lineales simples:

"Le pido tres cosas y hace ninguna."

"Cada noche es una batalla para que se siente a estudiar."

"Grito y después me siento fatal."

"No sé si el problema es él o soy yo." Cierre de la sección: una frase puente tipo "No es falta de voluntad. Es falta de condiciones. Y las condiciones se pueden diseñar."

3. La idea central (fondo paper)

Explicar en pocas líneas el concepto de "Neuroactividad" y la fórmula del libro: Energía biológica × Seguridad emocional × Estímulo adecuado − Ladrones = Neuroactividad Diseñar esto como un diagrama visual horizontal con 4 tarjetas conectadas por signos matemáticos (usar los colores violeta, teal, ámbar y coral para cada tarjeta respectivamente), similar a un diagrama editorial de libro de management. Texto de apoyo: "Los tres factores se multiplican, no se suman. Por eso un cero en cualquiera de ellos —una noche sin dormir, un miedo, una tarea imposible— apaga todo el resultado, por muy alto que esté el resto."

4. Qué vas a aprender — Los 6 Interruptores (fondo ink, texto claro)

Grid de 6 tarjetas (2x3 en desktop, 1 columna en móvil), cada una con número grande en Fraunces, ícono lineal simple y texto corto:

Movimiento — el fertilizante del cerebro

Sueño — donde se guarda lo aprendido

Nutrición — con qué se construye un cerebro

Vínculo — la calma se presta antes de aprenderse

Juego y aburrimiento — la fábrica de ideas

Lenguaje — el acelerador más barato que existe

5. El plan de 21 días (fondo paper-2)

Sección visual mostrando las 3 semanas como una línea de tiempo horizontal (o 3 tarjetas grandes apiladas en móvil):

Semana 1 (coral): "Los cimientos" — sueño y movimiento

Semana 2 (violeta): "Combustible y vínculo" — nutrición y regulación emocional

Semana 3 (teal): "Entorno y aprendizaje" — pantallas, juego y estudio Frase de apoyo: "Una acción por día. Ni más, ni distinta, ni improvisada."

6. Qué incluye el e-book (fondo paper)

Lista en 2 columnas con checkmarks (color teal) mostrando el contenido completo:

18 capítulos organizados en 4 partes

El Termómetro Neuroactivo (test de 30 preguntas con puntuación)

40 juegos neuroactivos clasificados por función cerebral

Menú neuroactivo de 7 días

50 frases que encienden el cerebro (y 20 que lo apagan)

Registro imprimible de 21 días

Glosario y +40 referencias científicas citadas

157 páginas, diseño editorial premium, PDF de alta calidad

Adaptado por edades: 3–5, 6–8 y 9–12 años

Capítulo dedicado a señales de alerta y cuándo buscar ayuda profesional

7. Por qué confiar (fondo ink)

Bloque de autoridad/honestidad científica (esto es un diferenciador real del producto): Título: "Ciencia real, sin exageraciones" Texto: "Este libro distingue lo que la evidencia sostiene con solidez, lo que es prometedor pero preliminar, y lo que es sentido común. Desmontamos los neuromitos más comunes en lugar de venderlos: que el azúcar vuelve hiperactivos a los niños, que existen "estilos de aprendizaje", que las pantallas destruyen el cerebro. Cada capítulo cita sus fuentes." Pequeño listado de instituciones/autores mencionados en el libro a modo de credibilidad (sin logos, solo texto): "Con referencias de Harvard Center on the Developing Child, Adele Diamond, investigación del MIT sobre desarrollo del lenguaje, la Academia Americana de Pediatría y más de 40 estudios citados."

8. Testimonios (fondo paper-2)

Placeholder para 3 testimonios en tarjetas con foto circular placeholder, nombre, y una frase corta. Dejar contenido de ejemplo realista pero marcado claramente como [TESTIMONIO PLACEHOLDER — reemplazar].

9. Para quién es / para quién no es (fondo paper)

Dos columnas comparativas (estilo "sí/no" como el usado en el libro):

Columna izquierda (fondo teal-soft, borde teal): "Es para ti si..." (padres que quieren entender el porqué, no solo el qué; buscan un plan concreto; quieren evidencia, no moda)

Columna derecha (fondo coral-soft, borde coral): "Ojo — no es para ti si..." (buscas una solución mágica de un día; tu hijo tiene un diagnóstico severo sin seguimiento profesional — esto complementa, no sustituye)

10. Precio y oferta (fondo ink, sección centrada, muy editorial)

Mockup del libro (portada) centrado

Precio con ancla de valor: listar qué incluiría comprado por separado (ebook + termómetro + bonus + plan) sumando a un valor mayor, luego mostrar el precio real tachado y el precio de oferta

CTA grande: "Quiero mi copia de NEUROACTIVIDAD"

3 iconos pequeños debajo: "Descarga inmediata", "Formato PDF (lee en cualquier dispositivo)", "Garantía de 7 días"

11. FAQ (fondo paper)

Acordeón con 6-8 preguntas típicas:

¿En qué formato recibo el libro?

¿Sirve si mi hijo tiene TDAH o autismo diagnosticado?

¿Cuánto tiempo toma aplicar el método?

¿Necesito comprar algo más (suplementos, materiales)?

¿Funciona para más de un hijo?

¿Qué pasa si no me gusta?

¿Tiene contenido para adolescentes?

¿Cómo accedo después de comprar?

12. CTA final (fondo ink, similar al cierre del libro)

Título grande en Fraunces: "No tienes que hacerlo todo bien" Texto breve inspirado en el cierre del libro sobre padres "suficientemente buenos" CTA final: "Empieza hoy" Footer simple: nombre del producto, año, enlace a política de privacidad y contacto (placeholders)

Detalles técnicos adicionales

Usa placeholders de imagen claros (/* IMAGEN: mockup de portada del libro */) donde corresponda una imagen real, ya que no tengo assets para subir todavía — usa ilustraciones CSS/SVG simples mientras tanto (constelaciones de puntos conectados, formas geométricas suaves) en vez de fotos de stock genéricas.

Todos los botones de compra deben apuntar a una constante CHECKOUT_URL fácil de encontrar y reemplazar en el código (dejar un comentario // TODO: reemplazar con URL real de checkout).

Animaciones sutiles al hacer scroll (fade-in + slight translate-y), nada exagerado.

Cuidar mucho el interlineado y el ancho de línea del texto largo (max-width tipo 65ch en párrafos) para que se sienta como lectura editorial, no como landing de marketing genérica.

Accesibilidad: buen contraste, tamaños de fuente legibles (mínimo 16px en body).

Genera el código completo, listo para ejecutar, con todos los componentes necesarios.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4d3289bc-efcd-4afd-85d8-a64f194cb7d7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitLab and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
