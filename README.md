# ProyectoFinal+Apellido - Simulador de Regalos

## Descripción
Este proyecto es un **simulador de regalos** estilo mini-ecommerce.  
Un usuario ingresa con su apodo, ve una lista de regalos (con descripción y precios en pesos), y puede elegir cuál comprar o si quiere aportar la mitad.  
Las elecciones quedan guardadas en `localStorage` y se pueden borrar.

## Funcionalidades
- Login con apodo usando SweetAlert2
- Render dinámico de productos desde un archivo JSON
- Cada producto muestra: nombre, descripción, precio y botón de acción
- Confirmación de elección: "Completo" o "Mitad"
- Lista de elecciones registradas en pantalla
- Persistencia con `localStorage`
- Opción de borrar elecciones

## Tecnologías
- HTML, CSS, JavaScript
- SweetAlert2 (para interacciones más limpias)
- JSON (para simular datos externos)

## Cómo probarlo
1. Clonar el repositorio
2. Abrir `index.html` en el navegador
3. Ingresar un apodo y comenzar a elegir regalos
