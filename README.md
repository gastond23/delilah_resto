# delilah_resto
API desarrollada para controlar pedidos de comida.

Instalaciones requeridas:

POSTMAN

Node.JS

Visual Studio Code

MySQL Workbench

Instalacion de dependencias:

Ejecutar el siguiente comando en el terminal, sobre la ubicacion del proyecto:

-npm install body-parser express jsonwebtoken mysql2 bcrypt dotenv sequelize

Si es necesario para realizar modificaciones en puede instalar en desarrollo la siguiente dependencia:

-npm install --save-dev nodemon

Configuracion variables de entorno:

Para realizar una rapida configuracion puede modificar las variables del archivo .env, como se detalla a continuación:

- APP_PORT=3000                   =>    (Puerto que utiliza el servidor)
- DB_PORT=3306                    =>    (Puerto configurado en el servidor de base de datos)
- DB_HOST='localhost'             =>    (Ruta de acceso de la aplicación)
- DB_USER='root'                  =>    (Usuario configurado en el servidor de base de datos)
- DB_PASS='betsabeXl23'           =>    (Contraseña del usuario del servidor de base de datos)
- DB_NAME='delilah_resto'         =>    (Nombre de la base de datos)
- DB_DIALECT='mysql'              =>    (Lenaguaje de la base de datos)
- JWT_KEY='yegua_marron_MARRON'   =>    (Secret Key para utilizar los token de validacion de login)

Una vez configurado e instalado las dependencias necesarias, ejecutar el inicio de la aplicación en terminal:

-npm start => (Este comando es valido si tenemos instalado nodemon en las dependecias de desarrollo)

si no instala nodemon ejecutar el siguiente comando

-node app.js

Una vez ejecutado para realizar las prubeas utilizar los siguientes endpoints en POSTMAN para realizar las operaciones CRUD necesarias.

Una vez registrado y logueado el usuario, se recibirá un token, este se incluye en el header - authorization type Bearer Token.

Rutas:

/login                  => POST para login de usuario ya registrado.

/usuario                => POST para la creación de usuarios.

/usuario                => GET endpoint solo para administradores, obitiene todos los datos de los usuarios, salvo los passwords que se encuentran encriptados.

/products               => GET obtiene el listado de todos los productos registrados.

/products:productId     => GET obtiene el detalle de un producto a traves del id.

/products               => POST endpoint para la creación de un producto, solo para administradores.

/products:productId     => PUT endpoint para la actualización de un producto a través de su id, solo para administradores.

/products:productId     => DELETE endpoint para la eliminación de un producto a través de su id, solo para administradores.

/pedido:podructId       => POST endpoint para agregar un producto a la orden, si ya hay una orden creada este producto se sumará.

/pedido:productId       => DELETE endpoint para eliminar un producto de la orden.

/pedido                 => GET endpoint para obtener todas las ordenes.

/pedido:pedidoId        => PUT endpoint para modificar el estado de las ordenes, solo para administradores.



