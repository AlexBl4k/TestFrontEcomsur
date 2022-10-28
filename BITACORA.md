# Instalación y como correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navegar al directorio `front` y volver a correr el comando:
   `npm install`
3. Regresar al directorio root `cd ..` y ejecutar el comando `npm run dev`


# Dependencias utilizadas

*react-router-dom* Se utilizó esta dependencia para permitir la navegacion entre las paginas que componen esta aplicación.

*redux*: Se utilizó esta dependencia para permitir la creacion del store que permite tener el manejo del estado de la aplicación.

*react-Redux*: Se utilizó esta dependencia para permitir poder hacer uso de valores de manera global.

*redux-thunk*: Se utilizó esta dependencia para hacer uso del middleware thunk y permitir operaciones asincrónas.

# Components 

*products*: Carpeta que contiene tanto el script para poder listar los productos en la página inicial de la aplicación como el script para definir cada uno de los productos que componen la lista.

*Header.js*: Script que crea el header de la aplicación que permite la movilidad entre la página principal y la página de carrito.

*ItemCart.js*: Script que permite definir los item que podra contener el carrito una vez se encuentren agrupados y listados en la página de carrito.

*Stars.js*: Script que permite crear y manejar el componente necesario para mostrar el atributo de rating de cada producto en formato de estrella.

# Pages 

*CartPage.js*: Script que contiene el diseño para la pagina del carrito donde realiza el listado de los item asi como las funciones para permitir el agregar y eliminar productos, eliminar el producto completo y mostrar la cantidad de costo por todos los productos.

*InfoProductPage.js*: Script que contiene el diseño para la visualización de los detalles de cada producto que se seleccione teniendo la funcionalidad de poder agregarlo al carrito y manteniendo la información guardandola para evitar la perdida de ella al recargar.

*ProductsPage.js*: Script que contiene el diseño principal de la pagina la cual consiste en el listado de los productos que vienen del API y teniendo la funcionalidad de agregar productos al carrito.

# Reducers
Todos los reducer utilizados están guardados en la carpeta reducers 

# Products

*productsReducer.js*: Guarda en el store los productos provenientes de la API.

# Funciones

*getProducts()*: Ejecuta la petición al servidor por medio de un metodo fetch, se utiliza el ( return ) en la función porqué la petición es una acción asincona y se envia los valores por medio de un dispatch para el cambio del estado de los productos.

# Cart

*cartReducer.js*: Permite las acciones de agregar y eliminar productos en el estado de carrito.

# Funciones

*savedData(data)*: Permite realizar el guardado de los productos que se encuentran en el carrito en el estado del carrito por medio de la variable data que es recibida como prop.

*addProduct(product)*: Permite realizar la agregación del producto que recibe como prop permitiendo actualizar el estado del carrito. Es llevada acabo por medio de condiciones donde checa la existencia del producto en el estado actual del carrito con el fin de poder elegir que camino tomar: 
    1. En caso de existir solamente actualizar el valor correspondiente para la cantidad del producto en la carrito.
    2. En caso de no existir agregar dicho producto al estado del carrito. 
Por último, se guarda de manera local el nuevo estado del carrito para la retención de la información y actualizar el estado del carrito.

*deleteProduct({_id})*: Permite realizar la sustracción de los productos del estado del carrito llevandose a cabo por medio de una búsqueda del producto en el estado del carrito utilizando como objeto a buscar el prop _id recibido, una vez encontrado realiza una sustracción del valor que corresponde a la existencia del producto en el carrito y posteriormente llevando un filtrado de esos productos para eliminar aquellos donde el valor sea igual a 0. Por último, se guarda de manera local el nuevo estado del carrito para la retención de la información y actualizar el estado del carrito.

*deleteAllProduct({_id})*: Permite realizar la sustracción de los productos del estado del carrito llevandose a cabo por medio de una búsqueda del producto en el estado del carrito utilizando como objeto a buscar el prop _id recibido, una vez encontrado realiza una cambio en el valor que corresponde a la existencia del producto en el carrito poniendo 0 como nuevo valor y posteriormente llevando un filtrado de esos productos para eliminar aquellos donde el valor sea igual a 0, en este caso el producto mencionado. Por último, se guarda de manera local el nuevo estado del carrito para la retención de la información y actualizar el estado del carrito.

# Services 

*store.js*: Script que crea el stor principal, en el se convinan los reducers personalizados que serán utilizados en la aplicación y se agregan los middlewares adicionales en este caso el middleware thunk.

*server.js*: Script que contiene los valores estaticos del url donde se encuentra alojado el servidor y el API.

# App y AppRouter 

 *App.js*: Script que contiene la aplicación la cual se encuentra dentro de un componente padre, en este caso es el provider pasandole como prop el store creado y asi poder permitir el uso de los reducers por toda la aplicación.

  *AppRouter.js*: Script que contiene la navegación creada para cada una de las paginas por medio de un componente Router proveniente de la dependecia correspondiente como contenedor de cada una de las páginas que emplean el componente Route, asi como también la función para obtener la data guardada de manera local para actualizar el estado del carrito para evitar la desaparición de información.








