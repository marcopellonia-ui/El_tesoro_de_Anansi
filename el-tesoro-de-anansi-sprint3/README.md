# El tesoro de Anansi — Sprint 3

Primera versión funcional de la aventura gráfica para navegador. Proyecto realizado con HTML, CSS y JavaScript sin dependencias externas.

## Cómo ejecutar
1. Descomprimir la carpeta.
2. Abrir `index.html` con Chrome, Edge o Firefox.
3. Presionar **Comenzar aventura**.
4. Leer la introducción y las reglas.
5. Elegir una estrategia A, B o C en cada sala, confirmar y resolver.

También se puede abrir la carpeta en Visual Studio Code y usar la extensión Live Server.

## Estructura
- `index.html`: estructura principal.
- `styles.css`: identidad visual y animaciones CSS.
- `game.js`: escenas, puertas, estrategias, variables, daño y finales.
- `docs/animacion_animate.md`: planificación de la animación obligatoria.
- `docs/registro_pruebas.md`: casos de prueba y registro para completar con capturas reales.

## Mecánicas implementadas
- Seis salas y dieciocho puertas.
- Tres estrategias excluyentes por sala.
- Salud individual inicial de 100 PS.
- Daño: victoria 10 PS, empate 15 PS, derrota 25 PS.
- Confianza inicial 0, con límite entre -6 y +6.
- Un personaje fallecido no vuelve a asignarse.
- Game Over inmediato si quedan menos de dos personajes.
- Siete desenlaces, evaluados según supervivientes y Confianza.

## Animaciones CSS
1. `fade-in` / `@keyframes appear`: aparición suave de las pantallas y paneles narrativos.
2. `pulse` / `@keyframes pulse`: resplandor del botón principal para indicar la acción de comenzar.
3. `button:hover` y `button:focus-visible`: respuesta visual al pasar el cursor o navegar con teclado.

## Importante
Este prototipo es una primera versión. Las ilustraciones finales, los archivos editables de Adobe Animate, las capturas reales, el repositorio GitHub y el tablero de gestión deben agregarse por el equipo. No se incluyen enlaces ficticios ni evidencias inventadas.

## Observación de consistencia
La tabla de rutas de prueba del Sprint 2 contiene resultados de salud que no coinciden con las reglas de daño y asignaciones de puertas. El archivo `docs/registro_pruebas.md` documenta la discrepancia y presenta rutas recalculadas usando las reglas principales del proyecto.
