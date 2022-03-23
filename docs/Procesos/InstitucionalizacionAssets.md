# PR09-Proceso de institucionalización de assets

## Objetivo

- Institucionalizar la creación o mejora de un asset (guía, política, proceso) dentro del departamento.
- Asegurar la calidad y el valor departamental de los assets generados.

## Entradas

- Propuesta/borrador de asset para el departamento, siguiendo la [guía para definición de assets](https://mutateinc.github.io/docs/Guias/GuiaDefinicionAssets).

## Procedimiento

<table>
    <thead>
        <th>Fase</th>
        <th>Descripción</th>
        <th>Áreas CMMI</th>
    </thead>

<tbody>
    <tr>
      <td>Definición</td>
      <td>
        <ul>
            <li> Verificar y validar que el asset cumpla con los elementos del criterio Valor Departamental de la <a href="https://docs.google.com/spreadsheets/d/1FzfJd_yahKMj8yLV8VuqbcArkBtyAe5-AVvSRLDyzM8/edit#gid=0">auditoria de producto de trabajo</a>.</li>
        </ul>
      </td>
      <td>Equipo de validación</td>
      <td>
        <ul>
          <li>VAL 1.1</li>
          <li>OPD 1.1</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Creación</td>
      <td>
        <ul>
            <li>Agregar el asset a la <a href="https://docs.google.com/spreadsheets/d/1awFqd8cQzFsxhcmgXcGoYqBDR6PUpxq6_Wtdmw-Qg3Q/edit#gid=0">matriz de configuración </a> y asignándose uno mismo como owner (si dos o más personas están trabajando el asset elegir solo a uno).</li>
            <li>Desarrollar el contenido del asset siguiendo la plantilla correspondiente.</li>
            <li>Abrir la checklist de institucionalización (hacer una copia local si es necesario) y verificar que el asset cumple con todos y cada uno de los elementos definidos en la misma.</li>
            <li>Si un elemento no se cumple dentro del asset, hacer las correcciones necesarias.</li>
            <li>Subir el asset al repositorio siguiendo la <a href="https://mutateinc.github.io/docs/Politicas/PO03">politica de pull request</a>.</li>
            <li>Comunicar que el asset ha sido creado/modificado y está listo para su revisión.</li>
        </ul>
      </td>
      <td>Equipo de validación</td>
      <td>
        <ul>
          <li>CM 1.1</li>          
          <li>CM 2.2</li>          
          <li>CM 3.1</li>          
          <li>OPD 1.1</li>
          <li>OPD 1.6</li>
          <li>OPD 1.3</li>
          <li>VAL 1.2</li>
          <li>VAL 1.3</li>
        </ul>
      </td>
    </tr>
     <tr>
      <td>Verificación</td>
      <td>
        <ul>
          <li>Al menos un integrante del departamento (distinto al responsable del asset) deberá de hacer una verificación, para eso se seguirán los siguientes pasos:</li>
          <li>Duplicar la <a href="https://docs.google.com/spreadsheets/d/1FzfJd_yahKMj8yLV8VuqbcArkBtyAe5-AVvSRLDyzM8/edit#gid=0">auditoria de producto de trabajo</a> la copia de la checklist se quedará como una nueva pestaña dentro del mismo archivo) y nombrar el archivo, de la siguiente manera: [ID_PROCESO]-VER[n], donde n es el número de incrementos.</li>
          <li>Llenar los campos: ID, nombre del asset, versión y verificador.</li>
          <li>Verificar que el asset cumple con todos y cada uno de los elementos definidos en la <a href="https://docs.google.com/spreadsheets/d/1FzfJd_yahKMj8yLV8VuqbcArkBtyAe5-AVvSRLDyzM8/edit#gid=0">auditoria </a> .</li>
          <li>Llenar la columna "Ejecución" para que refleje los resultados de la verificación anterior.</li>
          <li>Si el asset no cumple con un elemento:</li>
          <ul>
            <li>Agregar comentarios para detallar las observaciones.</li>
            <li>Comunicar a los responsables del proceso de las observaciones realizadas.</li>
            <li>Actualizar la versión del asset dentro de la matriz de configuración, aumentando en una unidad el valor del número de la derecha.</li>
            <li>Los responsables deberán hacer las correcciones necesarias y volver a realizar los pasos desde el último paso de la fase de Creación.</li>
            <li>Dentro de la matriz de configuración, se debe actualizar la última fecha de modificación de dicho asset.</li>
          </ul>
          <li>Si el asset cumple con todos los elementos, continuar con la siguiente fase.</li>
        </ul>
      </td>
      <td>Equipo de validación</td>
      <td>
        <ul>
          <li>CM 1.2</li>
          <li>PPQA 2.1</li>
          <li>PPQA 2.2</li>
          <li>VER 1.1</li>
          <li>VER 1.2</li>
          <li>VER 1.3</li>
          <li>VER 3.1</li>
          <li>VAL 2.1</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Publicación</td>
      <td>
        <ul>
          <li>Completar el pull request siguiendo la <a href="https://mutateinc.github.io/docs/Politicas/PO03">politica de pull request</a>. mencionada anteriormente, para poder visualizar el asset ya verificado en la wiki de Mutate.</li>
          <li>Agregar la liga del asset en todas las prácticas correspondientes, dentro del tablero del CMMI.</li>
          <li>Dentro de la matriz de configuración:</li>
          <ul>
            <li>Agregar en la columna "Nombre" el enlace al asset publicado.</li>
            <li>Actualizar la versión del asset (aumentar una unidad al valor de la izquierda y poner como cero el valor de la derecha).</li>
          </ul>
        </ul>
      </td>
      <td>Equipo de validación</td>
      <td>
        <ul>
          <li>OPF 3.1</li>
          <li>OPF 3.2</li>
          <li>CM 1.2</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Difusión</td>
      <td>
        <ul>
            <li> Comunicar la creación exitosa del asset para empezar a implementarlo en la forma de trabajo</li>
        </ul>
      </td>
      <td>Equipo de validación</td>
      <td>
        <ul>
          <li>OPF 3.1</li>
          <li>OPF 3.4</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Seguimiento</td>
      <td>
        <ul>
            <li> Supervisar y monitorear el desempeño del asset tras la puesta en práctica del mismo para determinar si necesita una mejora</li>
        </ul>
      </td>
      <td>Equipo de validación</td>
      <td>
        <ul>
          <li>CM 3.2</li>
          <li>OPF 1.3</li>
          <li>OPF 3.3</li>
          <li>OPF 3.4</li>
          <li>OPD 1.5</li>
          <li>OPD 1.6</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Salidas

- Asset institucionalizado
- Asset en nivel estático listo para ser agregado a la línea base

## Versiones

| Versión | Descripción                | Responsables   | Fecha      |
| ------- | -------------------------- | -------------- | ---------- |
| 1.0     | Creación del proceso       | Alberto Matute | 23/03/2022 |
