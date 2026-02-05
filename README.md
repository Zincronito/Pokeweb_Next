PAGINA DE POKEMONES ESTILO POKEDEX 

este proyecto es una aplicacion web desarrollada con Next.JS que consume la PokeAPI para mostrar informacion dinamica sobre pokemones. el objetivo principal es demostrar el uso de rutas dinamicas, los server components y el diseño responsivo

A continuacion se mencionan las tecnologias usadas:

Next.JS: El framework prinicpal utilizando APP Router y server components para el consumo de los datos directamente en el servidor 

React: Usado para la biblioteca para construir la interfaz de usuario

Tailwind css: El framework de estilos que fueron utilizados para todo el dise;o y la responsividad

PokeAPI: la API publica que se utilizo para obtener los datos de los pokemones como la imagen del pokemon el nombre, el tipo, habilidad estadisticas etc.

Typescript: Para el tipado del codigo

A continuacion se mencionan las funcionalidades clave:

Rutas dinamicas: se implemento la ruta /pokes/[id] para generar las paginas de detalle para cada pokemon automaticamente 

Layout: se uso layout.tsx para mantener una barra de navegacion lateral que es fija mientras se navega entre los diferentes pokemones

Componentes reutilizables: creacion del componente PokeCardModernProps para mostrar la informacion detallada con un dise;o estilo "movie card" la plantilla o template fue tomada directamente de la pagina "creative tim" especificando el uso con tailwind css 

Responsividad: el dise;o se adapta a cualquier dispositivo, ya sea movil "sm" cambiando la disposicion del menu y las tarjetas y a pantallas de escritorio "lg"

ATENCION!!
para poder ejecutar este repositorio se debera...
1. clonar el repositorio
2. Ejecutar "npm install", esto para instalar las dependencias
3. Ejecutar "npm run dev", para iniciar el servidor local
4. El poryecto se encuentra desplegado en Vercel y se puede ver en vivo 
