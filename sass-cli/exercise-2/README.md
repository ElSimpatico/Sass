# Ejercicio 2

Crear un mixin llamado `cut-lines` que tenga como objetivo cortar las lineas de un texto en base a los sigueinte parametros.

-   Numero de lineas: Parametro opcional, por defecto 1.
-   Tamaño de linea. Parametro opcional.

La solucion debe ser soportada por la mayoria de los navegadores.

Ejemplo de uso:

```
@include cut-lines;
@include cut-lines(2);
@include cut-lines(2, 20px);

```
