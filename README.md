# Proyecto Final + Martinez, Elio Flavio - Curso de JavaScript - CoderHouse

GiftApp - Coordinador de Regalos para Fiestas o Eventos

## Descripción
Este proyecto es un **coordinador de regalos** estilo mini-ecommerce, útil para que quien organice un evento pueda pasarle a sus invitados para que coordinen sus regalos acorde a una Wishlist.
Un usuario ingresa con su apodo, ve una lista de regalos (con descripción y precios en pesos), y puede elegir cuál comprar o si quiere aportar la mitad. Las elecciones quedan guardadas en `localStorage` y se pueden borrar.
En el próximo curso de React lo voy a completar con otras características, por ejemplo:
- Que te pase el link directamente para comprar y que se setee la dirección de envío automáticamente.
- Que se pueda loguear como Agasajado o como Invitado al evento.
- Que el Agasajado pueda cargar su Wishlist y gestionar como van los regalos.

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
