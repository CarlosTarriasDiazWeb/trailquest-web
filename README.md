# TRAIL-QUEST WEB

![Logo de Trail Quest](/public/assets/imgs/logo.png)

# Descripción del Proyecto

El objetivo principal de la aplicación es poder permitir la consulta de información y la gestión de los diferentes tesoros con los que se puede interactuar (descubrir) en la aplicación móvil.  
La versión web de Trail Quest ofrece dos modos de uso en función del tipo de usuario que la vaya a utilizar.  
Por un lado, si el usuario es un jugador, este puede consultar la lista de tesoros con los que ha ido interactuando. Además, puede consultar los detalles de los tesoros descubiertos y calificarlos mediante una reseña; además de poder consultar las reseñas de otros usuarios.  
Por otro, tenemos al usuario administrador que se encarga de gestionar los datos de los diferentes tesoros. En este rol podemos eliminar tesoros, añadir un nuevo tesoro y modificar un tesoro ya existente.

# Tecnologías asociadas

Para desarrollar la interficie de usuario de la versión web hemos utilizado el framework Vue (con Options API).
Además, a lo largo del desarrollo hemos añadido las siguientes dependencias/paquetes (mediante el gestor de paquetes npm)

- [**Bootstrap 5**](https://getbootstrap.com/docs/5.0/getting-started/introduction/) : librería con clases definidas para aplicar estilos.
- [**Leaflet Vue**](https://vue2-leaflet.netlify.app/quickstart/) : librería con componentes desarrollados con Vue para gestionar el mapa y los marcadores de localización.
- [**Font Awesome**](https://fontawesome.com/icons) : librería con íconos vectoriales.
- [**Axios**](https://axios-http.com/es/docs/api_intro) : librería para gestionar las peticiones asíncronas a la API.
- [**Vue Router**](https://router.vuejs.org/) : librería que nos permite asignar rutas de navegador a componentes de Vue y desarrollar una multiple page application.
- [**Vue Star Rating**](https://github.com/craigh411/vue-star-rating) : componente de Vue que permite hacer una valoración numérica mediante iconos de estrella.

# Estructura del proyecto

Las carpetas más destacables del proyecto son las siguientes:

- **public** : contiene los ficheros estáticos de la aplicación web.
  - **assets/imgs** : contiene imágenes de la portada, los formularios, y los diferentes logos de Trail Quest.
  - **resources** : contiene los estilos generales (siguiendo la guía de estilos) de la aplicación y funciones de gestión de cookie del navegador.
  - **index.html**: documento HTML que contiene la aplicación Vue.
- **src** : contiene los diferentes componentes de UI de la aplicación.
  - **components**: componentes hijos que se utilizan en las diferentes vistas de la aplicación.
  - **router/index.js**: contiene la asociación de rutas del navegador a los diferentes componentes, y la protección de rutas.
  - **views**: componentes principales de cada vista de la aplicación.
  - **main.js** : configuración del componentes App.
- **node_modules**: contiene los múltiples archivos de los paquetes que forman el proyecto.

# Instrucciones de instalación

### Clonar repositorio en local

```
git clone https://gitlab.com/trial-quest/web.git
```

### Descargar dependencias del proyecto

```
npm install
```

### Compilación y hot-reloads para desarrollo

```
npm run serve
```

### Compilación y minificación para lanzar a producción

```
npm run build
```

# Instrucciones de uso

### Inicio de sesión

Desde la portada, debemos ir al botón correspondiente; una vez hecho, se muestra el formulario de inicio de sesión. Debemos especificar nuestro nombre de usuario y contraseña. El sistema detectará internamente si nos hemos iniciado como usuario jugador o como usuario administrador y mostrará la vista que corresponda.

### Registro

Si no tenemos una cuenta en Trail Quest debemos proceder a registrarnos en el formulario correspondiente, podemos acceder desde la portada de la web o desde el formulario de inicio de sesión. Debemos especificar nuestro nuevo nombre de usuario (no correo) y la contraseña que usaremos para iniciar sesión.

## Funciones de jugador

### Consultar estadísticas

Desde el listado de tesoros, podemos acceder a nuestros datos de perfil y estadísticas pulsando en el enlace de la pate inferior de la página.  
Aquí podemos consultar los tesoros encontrados, el porcentaje de tesoros completados respecto al total, y nuestro nivel/categoría.

### Filtrado tesoros

Si observamos en la parte superior del mapa, podemos observar dos botones de filtro. Uno muestra sólo los tesoros ya descubiertos, y el otro muestra además los tesoros por descubrir.

### Consultar reseñas

Si seleccionamos un ítem de la lista de tesoros, se nos mostrará información y una lista de reseñas que han hecho los diferentes usuarios sobre ese tesoro. Si hemos descubierto ese tesoro, nos aparecerá un botón de añadir reseña que activará un cuadro de texto y unos íconos de estrella para poder valorar, además de poder seleccionar una foto. Una vez rellenados los datos, la nueva reseña aparecerá en la lista.

## Funciones de administrador

### Añadir Tesoro

Desde la vista del administrador, en la parte inferior, podemos acceder al formulario correspondiente para añadir un nuevo tesoro al sistema. Todos los campos son obligatorios y debemos especificar la posición en coordenadas (latitud, longitud) para poder ver en el mapa donde se ubica el nuevo tesoro.

### Eliminar Tesoro

Desde el listado de tesoros, si presionamos el botón del contenedor de cualquiera de los tesoros, se nos mostrará un cuadro de diálogo que nos pedirá confirmación para eliminar ese tesoro. Si le damos a 'Eliminar Tesoro' entonces el tesoro se eliminará del sistema.

### Actualizar tesoros

Desde el listado de tesoros, si presionamos el botón del cuaderno de cualquiera de los tesoros, accederemos a su correspondiente formulario de actualización: este formulario ya estará rellenado con los datos actuales del tesoro seleccionado. Si no especificamos una nueva imagen se mantendrá la imagen que existe actualmente.
