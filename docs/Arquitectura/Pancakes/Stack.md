# Decisión Stack

El stack que se usará en el proyecto es:

## Front End

React con [MUI](https://mui.com/) (Antes React-Material)

## Back End

NodeJS con [Nest](https://nestjs.com/) (Esta Librería que facilita y modulariza los endpoints, ademas tiene funcionalidades como push notifications y permite hacer modulos de codigo injectable)

## Base de Datos (Por definir)

MongoDB

- **Ventajas:** La informacion no es constantemente leida ni hay bulk reads, es mucho mas rapido al no tener que hacer joins y queries complejos, es muy facil de aprender
- **Desventajas:** Es mas caro y dificil de desplegar que una base de datos relacional

MySql

- **Ventajas:** Es facil de desplegar y ya todos tienen mucha experiencia con ella
- **Desventajas:** Para este caso de uso seria mas dificil de implementar ya que hay que hacer queries mas complejos o usar un ORM que agrega ovehead

## Otros

Docker para la BD
TDD con Jest
Una combinación de MVC con DDD para modularizar todo
Al ser el stack librerias de JavaScript vamos a usar TypeScript para evitar errores y mantener consistencia a traves de todo el proyecto
