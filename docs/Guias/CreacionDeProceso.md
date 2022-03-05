# Guía para creación de proceso

## Versión

1.0

## Objetivo

Asistir a los integrantes del departamento en la identificación de los elementos
de un proceso y la forma en que se deben redactar.

## ¿Qué es un proceso?

Los procesos son una secuencia de pasos con cierta lógica para lograr un
resultado específico. Pretenden ser una herramienta para mejorar la
productividad, establecer un orden y/o eliminar un tipo de problema.

## Proceso vs Política vs Guía

- **Procesos:** establecen las reglas de la organización.
- **Políticas:** establecen lo que se debe hacer.
- **Guías:** informan y ayudan a los integrantes para la ejecución de un
proceso.

## ¿Cuáles son los elementos fundamentales de un proceso?

### Título

Es el nombre que tiene el proceso. Se recomienda que sea concreto, pero que
represente la idea del proceso.

Ejemplos:

- **Proceso de creación de proceso**
- **Proceso de junta**
- **Proceso de planificación de iteración**

### Objetivo

Los procesos deben tener un objetivo donde sea evidente el valor del mismo. De
otra forma, el proceso puede ser un impedimento para la productividad del
departamento.

Por ejemplo, el objetivo de un proceso de cambios a requisitos
puede ser: *"Establecer el proceso que debe seguir el interesado en realizar un
cambio a los requisitos del proyecto con el fin de mantener la trazabilidad de
los cambios y la evidencia de la solicitud."*.

En el ejemplo mencionado, el valor del proceso es que se mantenga la
trazabilidad de los cambios para prevenir inconsistencias y que el equipo tenga
una evidencia de la solicitud del cambio para cualquier tipo de incidente.

### Entradas

Las entradas son elementos tangibles que disparan la ejecución del proceso. Lo
que iniciaría la ejecución de un proceso para cambios a requisitos podría ser
el llenado de una solicitud. En este caso, la solicitud es la entrada del
proceso.

### Proceso

Son los pasos con cierta secuencia lógica que deben seguirse para lograr cumplir
con el objetivo del proceso. En cada paso se debe mencionar a la persona que lo
ejecuta. Por ejemplo:

1. **Team Leader:** anota el riesgo identificado en la matriz de riesgos.
2. **Team Leader:** identifica el impacto del riesgo en una escala de 1 a 5.

**Nota:** si los pasos del proceso están enumerados es porque deben seguirse de
forma secuencial. De otra forma, los pasos del proceso únicamente indican lo que
se debe realizar sin que sea de forma secuencial necesariamente.

El proceso se puede definir en múltiples fases. Las fases deben contener el
nombre de la fase seguido por los involucrados en la fase. Las fases contienen
una seria de pasos con el formato mencionado en la parte de arriba. Por ejemplo:

```markdown
### Fase de análisis - Team Leader

1. **Team Leader:** anota el riesgo identificado en la matriz de riesgos.
2. **Team Leader:** identifica el impacto del riesgo en una escala de 1 a 5.
```

Para pasar de una fase a otra, se debe mencionar en un paso del proceso.
Esto permite ir a diferentes fases del proceso dependiendo del contexto.
Por ejemplo:

```markdown
### Fase de análisis - Líderes de CMMI

1. **Líderes de CMMI:** revisan la solicitud del proceso y evalúan si es
necesario crear un proceso departamental.
    * Si la solicitud es aceptada, continuar con el proceso.
    * Si la solicitud es rechazada, continuar a *fase de descarte*.
```

### Salidas

Es el resultado tangible del proceso. Por ejemplo, en un proceso de junta, la
salida del proceso puede ser la minuta con los acuerdos y los pendientes.

### Métricas

Son los indicadores que se deben medir para evaluar el proceso o una parte del
mismo. Por ejemplo, en un proceso de gestión de riesgos, se puede medir el
número de riegos mitigados.

### Autores

Son las personas que han participado en la creación del proceso y en la mejora
del mismo.

## Autores

- Pablo Valencia
