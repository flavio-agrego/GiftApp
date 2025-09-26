// --- Variables principales ---
let usuario = "";
let elecciones = [];

// Traer elecciones guardadas si existen
if (localStorage.getItem("elecciones")) {
  elecciones = JSON.parse(localStorage.getItem("elecciones"));
}

// --- Pedir apodo con SweetAlert2 ---
Swal.fire({
  title: "Bienvenido 🎉",
  text: "Ingresá tu apodo para continuar:",
  input: "text",
  inputPlaceholder: "Tu apodo",
  confirmButtonText: "Entrar",
  allowOutsideClick: false
}).then((result) => {
  if (result.value) {
    usuario = result.value;
    document.getElementById("usuario-logueado").textContent = `Hola, ${usuario}!`;

    // Mostrar secciones
    document.getElementById("usuario-section").classList.remove("hidden");
    document.getElementById("regalos-section").classList.remove("hidden");
    document.getElementById("historial-section").classList.remove("hidden");

    cargarProductos(); // Carga desde JSON
    mostrarElecciones();
  }
});

// --- Función: cargar productos desde JSON ---
function cargarProductos() {
  fetch("./js/regalos.json")
    .then(res => {
      if (!res.ok) throw new Error("No se pudo cargar JSON");
      return res.json();
    })
    .then(data => {
      const contenedor = document.getElementById("productos");
      contenedor.innerHTML = "";

      data.forEach(producto => {
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
    })
    .catch(err => {
      console.error("Error cargando regalos.json:", err);
      Swal.fire("Error", "No se pudieron cargar los regalos.", "error");
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

// Función: borrar elección ---
function borrarEleccion(index) {
  elecciones.splice(index,1);
  localStorage.setItem("elecciones", JSON.stringify(elecciones));
  mostrarElecciones();
}
