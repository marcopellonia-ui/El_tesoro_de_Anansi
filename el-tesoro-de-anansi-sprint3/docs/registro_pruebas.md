# Registro de pruebas — Sprint 3

## 1. Rutas de prueba calculadas con las reglas principales

Se simularon las seis decisiones usando las asignaciones y naturalezas secretas de las puertas documentadas en Sprint 1 y Sprint 2, el daño de victoria/empate/derrota (10/15/25 PS), la omisión de personajes fallecidos y las condiciones de los finales.

| Final a comprobar | Ruta | Salud final (Roco / Berto / Félix) | Confianza | Resultado esperado |
|---|---|---:|---:|---|
| Game Over | ABACCC | 30 / 0 / 0 | −1 | Game Over: queda un superviviente. |
| Final verdadero | AAAAAA | 25 / 35 / 20 | +6 | Los tres vivos y Confianza ≥ +4. |
| Discordia | AAAABC | 35 / 15 / 10 | +3 | Los tres vivos y Confianza < +4. |
| Traición de Félix | AACBCA | 0 / 35 / 10 | +1 | Muere Roco; Félix traiciona a Berto. |
| Traición de Berto | AAABCC | 25 / 25 / 0 | +1 | Muere Félix; Berto traiciona a Roco. |
| Traición de Roco | AAACBC | 30 / 0 / 10 | +1 | Muere Berto; Roco traiciona a Félix. |
| Alianza incompleta | AAAACC | 40 / 25 / 0 | +2 | Dos vivos y Confianza ≥ +2. |

**Importante — discrepancia detectada en Sprint 2:** la tabla de rutas de la página 11 presenta resultados de salud que no coinciden con las naturalezas de las puertas, las asignaciones A/B/C y el daño 10/15/25 definidos en Sprint 1 y repetidos en el pseudocódigo del Sprint 2. Por ejemplo, la ruta `AAAAAA` no produce `0 / 0 / 10` al aplicar esas reglas; produce `25 / 35 / 20`. Para esta primera versión se priorizaron las reglas principales y las asignaciones de las seis salas, porque son las que permiten calcular el daño de forma consistente. Conviene que el equipo docente/equipo revise y corrija la tabla antigua antes de usarla como evidencia.

## 2. Recorrido funcional
| Prueba | Decisiones / recorrido | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| P01 | Inicio → Introducción → Reglas → Sala 1 | Se puede comenzar y visualizar las instrucciones. | Pendiente de ejecutar en el navegador y adjuntar captura. |
| P02 | Elegir A en una sala | Se asignan puertas, se descuenta daño y Confianza aumenta +1. | La lógica está implementada; completar con captura real. |
| P03 | Elegir B en una sala | Confianza no cambia y se aplica daño según cada enfrentamiento. | La lógica está implementada; completar con captura real. |
| P04 | Elegir C en una sala | Confianza disminuye −1 y se aplica daño. | La lógica está implementada; completar con captura real. |
| P05 | Un personaje llega a 0 PS | Se muestra como fallecido y no participa en salas posteriores. | La lógica está implementada; completar con captura real. |
| P06 | Quedan 0 o 1 supervivientes | Se activa Game Over inmediatamente. | La lógica está implementada; completar con captura real. |
| P07 | Completar seis salas con 3 vivos y Confianza ≥ +4 | Final verdadero. | Condición implementada; ejecutar y adjuntar captura. |
| P08 | Completar seis salas con 3 vivos y Confianza < +4 | Final de discordia. | Condición implementada; ejecutar y adjuntar captura. |
| P09 | Llegar con 2 vivos y Confianza ≥ +2 | Alianza incompleta. | Condición implementada; ejecutar y adjuntar captura. |
| P10 | Llegar con 2 vivos y Confianza ≤ +1 | Traición según el personaje ausente. | Condición implementada; ejecutar y adjuntar captura. |

## 3. Controles técnicos
- [ ] Los botones de estrategia seleccionan una sola opción.
- [ ] No se puede confirmar sin seleccionar A, B o C.
- [ ] La pantalla de confirmación permite volver a elegir.
- [ ] La salud nunca baja de 0 ni supera 100.
- [ ] La Confianza se mantiene entre −6 y +6.
- [ ] La naturaleza secreta de las puertas no aparece antes de resolver.
- [ ] Los personajes fallecidos no reciben daño ni se reasignan.
- [ ] El diseño se adapta a pantallas angostas.
- [ ] Se comprueba el uso con teclado y foco visible.

## 4. Registro de errores y correcciones
| Error detectado | Corrección aplicada | Estado |
|---|---|---|
| No se permite confirmar si no hay una estrategia elegida. | El botón comienza deshabilitado y se habilita al seleccionar una tarjeta. | Implementado en el código. |
| Un personaje fallecido podría volver a asignarse. | La asignación y la resolución filtran personajes con salud mayor que 0. | Implementado en el código. |
| La salud podría quedar negativa. | Se limita el valor mínimo a 0 mediante `Math.max(0, ...)`. | Implementado en el código. |
| La Confianza podría superar su rango. | Se limita entre −6 y +6 mediante `clamp()`. | Implementado en el código. |
| La tabla de rutas del Sprint 2 no coincide con las reglas base. | Se recalcularon rutas de referencia con las asignaciones y el daño documentados. | Discrepancia documentada; requiere validación del equipo. |

## 5. Pendientes de evidencia real
1. Ejecutar los recorridos en un navegador y guardar capturas.
2. Repetir las siete rutas de prueba corregidas.
3. Adjuntar errores adicionales que aparezcan durante la ejecución y su corrección.
4. Incorporar el `.fla` y la exportación de Animate.
5. Pegar URL real del repositorio y del tablero.
