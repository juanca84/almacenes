Manual de Instalación
=====================

Requisitos
----------

* node 14.15.3
* postgres 11.9

Sistema
-------

Clonación del código fuente desde el repositorio:

```consola
git clone git@github.com:juanca84/almacenes_backend.git
```

Ingresamos al carpeta
```console
cd almacenes_backend
```

Copiamos el archivo `.env.sample`:

```console
cp .env.sample .env
```

Confirgurar los parámetros correspondientes del archivo .env

Donde:

* `PORT` es el puerto donde se ejecutará el servidor.
* `DB_HOST` es la ip de la base datos.
* `DB_USERNAME` el nombre de usuario de la base datos.
* `DB_PASSWORD` el passwor de la base datos.


