# Knex
### S

Knex.ja es un constructor de **consultsa SQL** para Javascript, es una abstrccuib delgada en la parte superior del controlador. Se utiliza en las bases de datos relacionales(PG, MYSQL, SQL).

## Instalacion
Se puede instalar de dos maneras Knex cuando voy a utilizarlo en un proyecto:

1, Global: 
- Recordando que -g es un modificador 

## Scripts

Si optas por la opcion 2, todos los comandos que mencionaremos mas adelantese deberan agregar en un script dentro de nuesto package.json y la instalacion se hara despues de inicializar el proyecto.

## Iniciar el proyecto

1. Inicializamos el proyecto dentro de una carpeta destinada para el mismo.

npm init -y

2. Instalar los recursos necesarios:
    - express: biblioteca para creacion de API.
    - knex: Query Builder (constructor de consultas).
    - pg: Driver de PostgreSQL, puedes cambiarlo dependiendo de la base de datos que ocupes.

3. Crear mi gitignore

## Configuracion de Knex

1. Iniciar la configuracion de Knex para el CRUD de operaciones por medio de migrations de Knex.

knex init esto nos generara un archivo llamado knexfile.js
- Nota: Si tu hiciste una instalacion local para poder correr el comando, requieres agregarlo a un script en el package.json:
    - Vamos al package.json y agregamos
    "knex":"knex init"

```
Migraciones
Es un control de versiones de nuestra base de datos y nospermite crear tablas, establecer relaciones, modificarlas y eliminarlas,


2. Ejecutar en la terminal el comando knex init

3