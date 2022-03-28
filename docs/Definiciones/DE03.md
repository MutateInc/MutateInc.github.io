# DE03-Definición de la Gestión de Requerimientos (REQM)

## Objetivos

Administrar los requerimientos de los productos del proyecto y sus componentes para asegurar que haya una alineación entre requerimientos, planes del proyecto y productos de trabajo.

Como parte de la correcta gestión de requerimientos, seguiremos metas y prácticas específicas, que incluyen:
- Entender requerimientos
- Comprometerse a los requerimientos
- Gestionar cambios a los requerimientos
- Mantener una trazabilidad bidireccional de requerimientos
- Asegurar una alineación entre trabajo del proyecto y requerimientos

## ¿Qué hace una Gestión de Requerimientos?

La gestión de requerimientos acompaña el ciclo de vida del producto, iniciando por requerimientos de cliente para que luego sean refinados en los requerimientos de productos y los requerimientos de componente de producto.

Una parte de la gestión de requerimientos es documentar los cambios a los requerimientos y su análisis razonado, y mantener la trazabilidad bidireccional entre los requerimientos fuente, todos los requerimientos de producto y de componente de producto, y otros productos de trabajo especificados.

Al referirnos a gestionar requerimientos, estamos hablando también de gestionar e identificar inconsistencias entre planes del proyecto y productos del trabajo. Se realizarán acciones correctivas en caso de encontrarse inconformidades e inconsistencias.

## Metas generales y Prácticas de la Gestión de Requerimientos
- Desarrollar los requisitos de cliente
    - Identificar las necesidades.
    - Transformar las necesidades en requisitos de cliente[^1].
- Desarrollar los requisitos de producto. 
    - Establecer los requisitos de producto y de componente de producto[^2]. 
    - Asignar los requisitos de componente de producto. 
    - Identificar los requisitos de interfaz. 
- Analizar y validar los requisitos. 
    - Establecer los conceptos y los escenarios de operación. 
    - Establecer una definición de la funcionalidad y de los atributos de calidad requeridos. 
    - Analizar los requisitos. 
    - Analizar los requisitos para conseguir un equilibrio. 
    - Validar los requisitos

El trabajo de la gestión de requerimientos deberá de poder cumplir con los siguientes puntos:

### Entender requerimientos
- Contar con listas de criterios para distinguir proveedores apropiados de requerimientos.
- Tener criterios de evaluación y aceptación de requerimientos
- Analizar los resultados de análisis contra criterios


Para poder entender de una forma eficiente los requerimientos que se soliciten, se debe conocer los siguientes elementos de cada requisito:
- ¿Quién está pidiendo el requerimiento?
    - ¿Lo solicitó el socio formador o es algo que decidió el equipo de trabajo?
- ¿Cuál es el usuario final de este requerimiento?
    - ¿Quién será la persona que utilizará este requerimiento?
- ¿Cúal es la necesidad detrás del requerimiento?
    - ¿Por qué es importante que cuente como uno?
    - ¿Qué tiene que resolver este requerimiento? 
- ¿Qué se espera que logre el requerimiento?
    - ¿Cuál es su papel dentro de la arquitectura del sistema?
    - ¿Cómo se planea que resuelva la necesidad que este requerimiento atiende?
- ¿Cuál es un estimado del alcance de este requerimiento?
    - ¿Qué tan extenso puede llegar a desarrollarse?
    - ¿Involucraría tecnologías externas a las ya establecidas?
    - ¿Puede dividirse en requerimientos más sencillos?



### Comprometerse a los requerimientos
- Realizar evaluaciones sobre el impacto de los requerimientos
- Documentar compromisos de los requerimientos y sus cambios (si aplican)

No todos los requerimientos requieren documentación completa (diagrama de flujo, diagrama de interfaz, diagrama de clase y descripción de caso de uso), se basa en una matriz que considera la prioridad y la complejidad del requerimiento para definir la extensión de documentación necesaria.
Una vez entendido el requerimiento, pasará a ser documentado y parametrizado dentro de una matriz de trazabilidad, la cual debe seguir los siguientes puntos:

- [ ] El requerimiento debe estar aprobado por el Socio Formador
    - El socio tiene conocimiento de lo que se trabajará.
    - En conjunto con el resto de requerimientos aprobados, se establece el alcance.
- [ ] El requerimiento cuenta con su matriz de identificación única.
    - La matriz incluye: clave, nombre, descripción 	
    - Esto facilitará su ubicación dentro de una matriz de trazabilidad.
- [ ] Tiene un estado definido  
Puede categorizarse como Completo / Por hacer / En desarrollo / Bloqueado
- [ ] Tiene una prioridad definida   
    - La prioridad seguirá los puntos establecidos en la documentación de “Sobre Prioridades”
- [ ] Tiene una complejidad definida  
    - Identificar los componentes de backend, frontend y externos con los que interactúa.

### Gestionar cambios a los requerimientos
- Hacer peticiones de cambio de requerimientos
- Realizar informes de impacto del cambio de requerimientos
- Reportar el estado de los requerimientos

En caso de que se requiera hacer cambios a uno o más requerimientos, se deberá completar la siguiente [plantilla](../Plantillas/SolicitudDecambio) para enviarla al cliente como evidencia del acuerdo establecido.  
Se deberá agregar una nueva entrada a la bitácora de cambio. Para más información, ver la sección de [Trazabilidad Bidireccional de Requerimientos](#mantener-una-trazabilidad-bidireccional-de-requerimientos).  
Una vez se completa la solicitud de cambio, se recomienda enviarla al socio formador pidiendo que se confirme de recibido y aceptado. De esta manera, queda constancia de que se levantó la solicitud y el socio aprobó el cambio.



### Mantener una trazabilidad bidireccional de requerimientos
- Utilizar una matriz de trazabilidad de requerimientos
- Seguir un sistema de seguimiento de requerimientos

Mantener una bitácora de los requerimientos y sus cambios.
Se recomienda que contenga la siguiente información:
- Identificación del caso de uso / US
- Fecha en la que se pidió el cambio (ej. Noviembre 15, 2022)
- Persona que solicitó el cambio 
- Razón de cambio (Descripción textual de la razón por la que se cambió).
- Tipo de cambio (front o back).
- Descripción detallada del cambio. (El nivel de detalle es a beneficio del equipo de desarrollo).


### Asegurar una alineación entre trabajo del proyecto y requerimientos
- Tomar acciones correctivas
- Documentar inconsistencias entre los requerimientos, planes del proyecto y los productos de trabajo, incluyendo sus respectivas fuentes y - condiciones

Esta sección habla acerca de la documentación que se debe de llevar para informar y comunicarse al respecto del estado de los requerimientos.

Se deben de reportar inconsistencias entre los requerimientos, si es que hubiera.
Planes y estado del proyecto y de los productos de trabajo
Se incluyen fuentes documentadas.

En caso de que se necesite solucionar problemas técnicos, tomar acciones correctivas y procurar documentar el porqué se hizo el problema, qué medidas se tomaron y como fue solucionado.




---



| Versión | Descripción                                  | Responsables     | Fecha      |
| ------- | -------------------------------------------- | ---------------- | ---------- |
| 1.0     | Creación de la Política                      | J. Olmos, R. Jimenez, M. Noboa | 07/03/2022 |
| 1.1     | Añadir contenido                        | J. Olmos, R. Jimenez, M. Noboa| 15/03/2022 |
 

[^1]: Las necesidades, expectativas, restricciones e interfaces de las partes interesadas se recopilan y traducen en requisitos de cliente.
[^2]: Los requisitos de cliente se analizan conjuntamente con el desarrollo
del concepto de operación para inferir conjuntos de requisitos más detallados y precisos llamados “requisitos de producto y de componente
de producto”.



