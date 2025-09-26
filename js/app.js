// --- Variables principales ---
let usuario = "";
let elecciones = [];

// Traer elecciones guardadas si existen
if (localStorage.getItem("elecciones")) {
  elecciones = JSON.parse(localStorage.getItem("elecciones"));
}

// --- Lista de productos ---
const productos = [
  {id:1, nombre:"Viaje a Disney", descripcion:"Un viaje completo a Disney con entrada y alojamiento", precio:500000},
  {id:2, nombre:"Heladera", descripcion:"Heladera con freezer y eficiencia energética", precio:150000},
  {id:3, nombre:"Microondas", descripcion:"Microondas con grill y varias funciones", precio:25000},
  {id:4, nombre:"Vajilla", descripcion:"Juego de vajilla de 12 piezas", precio:12000},
  {id:5, nombre:"Smart TV", descripcion:"Televisor 55\" 4K HDR", precio:200000},
  {id:6, nombre:"Auriculares", descripcion:"Auriculares inalámbricos con cancelación de ruido", precio:35000}
];

// --- Pedir apodo con SweetAlert2 ---
Swal.fire({
  title: "Bienvenido 🎉",
  text: "Ingresá tu apodo para continuar:",
  input: "text",
  inputPlaceholder: "Tu apodo",
  confirmButtonText: "Entrar"
}).then((result) => {
  if (result.value) {
    usuario = result.value;
    document.getElementById("usuario-logueado").textContent = `Hola, ${usuario}!`;

    // Mostrar secciones
    document.getElementById("usuario-section").classList.remove("hidden");
    document.getElementById("regalos-section").classList.remove("hidden");
    document.getElementById("historial-section").classList.remove("hidden");

    cargarProductos();
    mostrarElecciones();
  }
});

// --- Función: cargar productos ---
function cargarProductos() {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  productos.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
      <button onclick="elegirRegalo(${producto.id}, '${producto.nombre}')">Elegir regalo</button>
    `;

    contenedor.appendChild(card);
  });
}

// --- Función: elegir regalo ---
function elegirRegalo(id, nombre) {
  Swal.fire({
    title: `¿Cómo querés aportar para "${nombre}"?`,
    showDenyButton: true,
    confirmButtonText: "Completo",
    denyButtonText: "Mitad"
  }).then((result) => {
    let tipo = "";
    if (result.isConfirmed) tipo = "Completo";
    else if (result.isDenied) tipo = "Mitad";

    if (tipo) {
      const eleccion = { id, nombre, tipo, usuario };
      elecciones.push(eleccion);
      localStorage.setItem("elecciones", JSON.stringify(elecciones));
      mostrarElecciones();
    }
  });
}

// --- Función: mostrar elecciones ---
function mostrarElecciones() {
  const lista = document.getElementById("lista-elecciones");
  lista.innerHTML = "";

  elecciones.forEach((e,index) => {
    const li = document.createElement("li");
    li.textContent = `${e.usuario} eligió: ${e.nombre} (${e.tipo})`;

    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.classList.add("borrar");
    btn.onclick = () => borrarEleccion(index);

    li.appendChild(btn);
    lista.appendChild(li);
  });
}

// --- Función: borrar elección ---
function borrarEleccion(index) {
  elecciones.splice(index,1);
  localStorage.setItem("elecciones", JSON.stringify(elecciones));
  mostrarElecciones();
}
