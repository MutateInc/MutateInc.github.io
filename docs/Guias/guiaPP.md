# Guía del area de Project Planning

## Objetivos

- Normalizar los procesos de planificación de los procesos

- Apoyar a los equipos de desarrollo para lograr sus objetivos en tiempo y forma basandonos en los estándares definidos por CCMI en su area de procesos de Project Planning

- Todos los integrantes de MUTATE logran sus competencias que engloban la planeación CCMI antes del final de la semana 15.

## ¿Qué es Project Planning?

Sacando la definición del manual de CMMI v1.3 (2010): "The purpose of Project planning is to establish and mantain plans that define project activities.".

## Prácticas a seguir

### Establecer Estimaciones

1. Para empezar a crear un plan, las estimaciones son fundamentales. El primer paso es determinar el acercamiento técnico _(Estrategia de alto nivel)_ del proyecto.:

   - Establecer qué tecnologías se van a utilizar en el proyecto.

   - _Ejemplos: Servidores, frameworks, lenguajes, etc._

2. Posteriormente hay que determinar que atributos de funcionalidad y calidad serán incluidos.

   - _Ejemplos: Seguridad, disponibilidad, etc._

3. Estimar tamaño y contenido de:

   - Entregables y todo tipo de documentos.
   - Software y hardware de apoyo.
   - _Ejemplos: Agile Points, casos de uso, epics, etc._

4. Definir las fases del ciclo de vida del proyecto.

   - Estas fases deben ser definidas dependiendo del enfoque de los requisitos, las estimaciones previamente hechas y la naturaleza del proyecto.

   - Se pueden crear subfases en la fase de desarrollo, tales como _análisis de requisitos, diseño, fabricación, integración y entrega_.

   - Fases sugeridas por CMMI: selección y refinamiento de uno o más modelos de desarrollo.

   - _Ejemplos: identificación de necesidades, diseño de propuesta, prueba de arquitectura, desarrollo, etc._

5. Estimar esfuerzo y costo.
   - Acumular modelos y datos anteriores o una combinación de ambos que puedan transformarse en horas laborales estimadas.
   - _Ejemplos: horas disponibles de cada miembro, cantidad de miembros, etc._

### Desarrollar un plan de proyecto

Un plan para proyecto es un documento formal y aprovado para administrar y controlar la ejecución del proyecto, basado en los requerimientos y las estimaciones del proyecto.

1. Establecer un presupuesto de los recursos disponibles y una agenda.

   - Estos dos recursos (presupuesto y agenda) deben estar basados en las estimaciones previamente establecidas para asegurar la complejidad de las tareas a asignar, a dónde se destinará el presupuesto y las dependencias de las tareas. Para crear estos dos recursos, se deben identificar:
     - Los hitos (milestones)
     - Propuestas para la agenda
     - Restricciones
     - Dependencias de las tareas
   - Una vez definidas todas estas cuestiones, lo unico que queda es establecer la planeación, apegarse a ella y crear criterios de acciones correctivas(replaneación, establecer acuerdos nuevos, etc.).
   - _Ejemplos: Horas de trabajo del equipo, fechas de avances, prioridad de tareas, etc._

2. Identificar los riesgos del proyecto.

   - Identificar posibles errores, amenazas, vulnerabilidades, etc.
   - Documentar estos riesgos como más convenga según el caso. (Recomendado _checklist_)
   - Priorizar los riesgos
   - _Ejemplos: El cliente usa una subscripción que no tiene API para integrar al proyecto, existen necesidades secundarias que pueden requerir un alcance mayor al disponible, etc._

3. Planificar la gestión de datos.

   - Establecer requerimientos y procedimientos
   - Establecer un mecanismo para guardar datos y accesar a esos mismos datos.
   - Determinar los datos que se van a recolectar, colectarlos y distribuirlos.
   - Determinar los requisitos para proporcionar acceso y distribución de datos a las partes interesadas.
   - Decidir que datos de proyectos requieren un control de versiones u otros niveles de configuracion de control, y establecer mecanismos para asegurar que los datos son controlador.
   - _Ejemplos: Repositorios, BDs, documentación, etc._

4. Recursos de proyectos.

   - Determinar los requerimientos de procesos.
   - Determinar los requerimientos de comunicacíon.
   - Determinar los requerimientos del staff.
   - Determinar los requisitos de instalaciones, equipos y componentes.
   - Determinar otros requisitos de recursos continuos.
   - _Ejemplos: Horarios de trabajo, horarios disponibles del socio, medios de comunicación, etc._

5. Planificar el conocimiento y habilidad necesarios.

   - Identificar el conocimiento y habilidades necesarias para desarrollar el proyecto.
   - Evaluar los conocimientos y habilidades disponibles
   - Seleccionar mecanismos para proporcionar los conocimientos y habilidades necasarios
   - Incorporar mecanismos seleccionados en el plan del proyecto.
   - _Ejemplos: Team knowledge, evaluación de frameworks, tutoriales, cursos, análisis de curva de aprendizaje, etc._

6. Plan para incolucrar a los interesados.

7. Establecer un plan de proyecto
   - Tener un plan general del proyecto.

### Obtener compromiso con el plan

Para ser efectivos los planes necesitan compromiso de quienes son responsables de implementar y dar soporte al plan.

1. Revisar planes que pueden afectar al proyecto

   - Registro de las revisiones de planes que afectan al proyecto

2. Conciliar los niveles de trabajo y los recursos.

3. Obtener compromiso con el plan.
   - Identificar las necesidades de apoyo y negociar compromisos con las partes interesadas pertinentes.
   - Documentar todos los compromisos organizativos, tanto completos como provisionales garantizar el nivel adecuado de signatarios.
   - Revisar los compromisos internos con la alta dirección según corresponda.
   - Resultados de traducción.
   - Revisar los compromisos externos con la alta dirección según corresponda.
   - Identificar compromisos con respecto a las interfaces entre los elementos del proyecto.y otros proyectos y unidades organizativas para que estos compromisos puede ser monitoreado.

## Autores

- Fernando Vargas
- Santiago Arellano
- José Eduardo Cadena

## Versiones

| Versión | Descripción                                | Responsable   | Fecha      |
| ------- | ------------------------------------------ | -------------- | ---------- |
| 1.0     | Creación de la guía                      | Area PP | 5/03/2022  |
| 1.1     | Agregar versiones y correción de redacción  | Fernando Vargas | 10/03/2022 |

## Referencias

- CMMI Product Team. (2010). _CMMI for Development, Version 1.3_.
