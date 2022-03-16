# Puntos de solución del backend

Un factor importante a considerar a la hora de elegir que solución de backend se usará para el proyecto, son las necesidades que soluciona, o simplifica dicha herramienta. Por lo tanto consideraremos los siguientes valores en una tabla comparativa:

```
100%    -> La herramienta provee una solución directa a dicha necesidad.
 75%    -> La herramienta provee una solución a dicha necesidad de manera no tan directa.
 50%    -> La herramienta provee una simplificación a dicha necesidad.
  0%    -> La herramienta no provee apoyo a dicha necesidad y será necesario elaborarla completamente.
```

A continuación se presenta el desgloce de las soluciones, y las necesidades que apoyan.

|                                             Necesidad / Solución                                             | Firebase |  AWS | Azure | Vanilla |
|:------------------------------------------------------------------------------------------------------------:|:--------:|:----:|:-----:|:-------:|
| Manejo de cuenta (inicio de sesión, recuperar contraseña, inicio con servicio, etc.)                         |   100%   |  75% |  75%  |    0%   |
| Almacenamiento de datos                                                                                      |   100%   | 100% |  100% |    0%   |
| Almacenamiento de archivos (imgs, pdfs, etc.)                                                                |   100%   | 100% |  100% |    0%   |
| Reglas de acceso (permisos de escritura, lectura, etc.)                                                      |   100%   | 100% |  100% |    0%   |
| Creación de API para funciones en el servidor. (generar facturas por API externa al generar una orden, etc.) |   100%   |  75% |  50%  |    0%   |
| Hosting                                                                                                      |   100%   | 100% |  100% |   50%   |
|                                                                                                              |          |      |       |         |
|                                                                                                   _PROMEDIO_ |   100%   |  92% |  88%  |    8%   |