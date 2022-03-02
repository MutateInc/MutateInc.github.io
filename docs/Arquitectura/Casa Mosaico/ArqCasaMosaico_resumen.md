# Arquitectura de Solución de Casa Mosaico

Para tomar las decisiones más acertadas para el proyecto y para el equipo en lo referente a la arquitectura, es necesario tener como prioridad la necesidad del cliente, por lo cual en este documento se describirá de nivel más alto a más bajo el proceso y decisiones.

## Necesidad

La necesidad(es) identificada de Casa Mosaico al momento de redactar este documento son las siguientes:

```
1. Agilizar el proceso de registrar una factura (tanto de proveedores como de clientes), actualizar inventario, y mantener integridad de dicha información en el transcurso de un pedido.

2 (TENTATIVO). Identificar clientes que aún no han pagado parte o  la totalidad de algún pedido sin necesidad de realizar búsquedas extensivas en estados de cuenta con facturas y sin tener que esperar a que el banco emita dicho estado de cuenta.
```

## Beneficio Objetivo

Al momento de redactar este documento se tienen las siguientes propuestas de beneficio en una solución para las necesidades del cliente descritas en muy alto nivel, ya que aún no están aprovadas por cliente (Casa Mosaico).

```
1. Registrar facturas (tanto de proveedores como de clientes) de tal manera que se evite uso extensivo de procesos intermedios para registrar dichos pedidos y mantener sincronía con el inventario en bodega, reduciendo así puntos de fallo en los cuales actualmente se pierde certeza de la información y que eventualmente lleva a retrabajo. Esto proporcionando un beneficio final en el cual al registrar una factura este proceso no debería tomar más de 5-10 minutos ya que consistiría de sólo llenar un formulario.

2 (TENTATIVO). Llevar un registro de los pedidos de los clientes con su respectivo monto, fecha, etc., habilitando una búsqueda por cualquiera de estos campos para que a la hora de que el cliente busque identificar a quién pertenece un pago se evite buscar dicho campo en las facturas manualmente.
```

## Diagramas de Proceso

Para entender y definir mejor el objetivo a lograr con la solución del cliente es necesario tener claridad con los procesos del cliente relacionados con las necesidades identificadas. Los cuales describiremos a continuación.

**Necesidad 1 (Registro/generación de facturas):**

```
    0. [REQUISITO] Se posee una factura que se quiere registrar.
```

TO BE CONTINUED...
