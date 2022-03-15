# Ejercicio 3

Crea un sistema de columnas cumpliendo los siguientes requisitos.

-   Uso de CSS Grid.
-   Dividir el espacio disponible en 12 columnas.
-   Crear nombres de clase por cada viewport.
    -   Viewport S: 320px
    -   Viewport M: 764px
    -   Viewport L: 1016px
    -   Viewport XL: 1436px

Ejemplo de uso:

```
<div class="nova-grid">

    <div class="nova-col-s-4 nova-col-m-2 nova-col-l-5 nova-col-xl-2"></div>
    <div class="nova-col-s-4 nova-col-m-8 nova-col-l-5 nova-col-xl-5"></div>
    <div class="nova-col-s-4 nova-col-m-2 nova-col-l-2 nova-col-xl-5"></div>

</div>
```

El comportamiento del ejemplo anterior se traduce en:

-   El contendor principal define la rejilla y reparte el espacio disponible.
-   El contenido se divide en tres columnas repartiendo el tamaño disponible en funcion del viewport
    -   Viewport S: Cada div ocupa 4 columnas
    -   Viewport M: El primer y tercer div ocupan 2 columnas y el del medio 8.
    -   Viewport L: Los dos primeros div's ocupan 5 columnas y el tercero 2.
    -   Viewport XL: El primer div ocupa 2 columnas y los dos restantes 5..
