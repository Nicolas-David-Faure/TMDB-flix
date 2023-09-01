Para ejecutar la aplicación completa:
---->1-Crear base de datos psql llamada 'tmdbflix'
---->2-Para levantar el back-end ir a /api, istalar las dependencias "npm i" y npm start para leventar el sv
---->3-Para levantar el front-end ir a /src, istalar las dependencias "npm i" y npm run dev para levantar el sv

-Creado con vite

Api url: 'https://api.themoviedb.org/3/movie/76341?api_key=d2b252c13bc8a9ed431ab7234dc8c253'


const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'd2b252c13bc8a9ed431ab7234dc8c253'
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'



Requisitos

A-Prioridad Alta (Must Have)
  Día 1
  1-*Registrar usuarios.           //Completado
  2-*Loguear y desloguear usuarios. //Completado
  3-*Mantener sesión abierta ante un cierre del browser o refresh. //Completado
  
  Dia 2
  4-*Buscar y listar películas.      //Completado

  Dia 3
  5-*Ver los detalles de una película o programa de televisión. //Completado
  6-*Agregar/eliminar una película o programa a una lista de favoritos. //pending
  7-*Ver tu lista de favoritos. //pending
  
B-Prioridad Media (Nice To Have)
  8-*Diferenciar las rutas de front-end para películas y programas de televisión.
  9-*Buscar usuarios.
  10-*Ver el perfil de un usuario específico (con sus películas o programas favoritos).
  11-*Full responsive.
  12-*Loguear usuarios a través de su cuenta en Google.   