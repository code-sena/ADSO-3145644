// Lógica básica para gestión de clientes, categorías y tareas en memoria
// Simulación de base de datos local

let clientes = [];
let categorias = [];
let tareas = [];

// Utilidades
function generarUsuario(nombre, apellidos) {
  return (nombre[0] + apellidos).toLowerCase();
}
function generarContrasena() {
  return Math.random().toString(36).slice(-8);
}

// CLIENTES
const formCliente = document.getElementById('formCliente');
const tablaClientes = document.getElementById('tablaClientes').querySelector('tbody');
formCliente.addEventListener('submit', function(e) {
  e.preventDefault();
  const tipoDoc = document.getElementById('clienteTipoDoc').value.trim();
  const nombre = document.getElementById('clienteNombre').value.trim();
  const apellidos = document.getElementById('clienteApellidos').value.trim();
  const edad = document.getElementById('clienteEdad').value.trim();
  const correo = document.getElementById('clienteCorreo').value.trim();
  // Validar duplicados
  if (clientes.some(c => c.tipoDoc === tipoDoc && c.nombre === nombre && c.apellidos === apellidos)) {
    alert('Cliente duplicado.');
    return;
  }
  const usuario = generarUsuario(nombre, apellidos);
  const contrasena = generarContrasena();
  document.getElementById('clienteUsuario').value = usuario;
  document.getElementById('clienteContrasena').value = contrasena;
  clientes.push({ tipoDoc, nombre, apellidos, edad, correo, usuario, contrasena });
  mostrarClientes();
  formCliente.reset();
});
function mostrarClientes() {
  tablaClientes.innerHTML = '';
  clientes.forEach((c, i) => {
    tablaClientes.innerHTML += `<tr><td>${c.tipoDoc}</td><td>${c.nombre}</td><td>${c.apellidos}</td><td>${c.correo}</td><td><button class='btn btn-sm btn-danger' onclick='eliminarCliente(${i})'>X</button></td></tr>`;
  });
}
window.eliminarCliente = function(i) {
  clientes.splice(i, 1);
  mostrarClientes();
};

// CATEGORÍAS
const formCategoria = document.getElementById('formCategoria');
const tablaCategorias = document.getElementById('tablaCategorias').querySelector('tbody');
formCategoria.addEventListener('submit', function(e) {
  e.preventDefault();
  const codigo = document.getElementById('categoriaCodigo').value.trim();
  const nombre = document.getElementById('categoriaNombre').value.trim();
  const descripcion = document.getElementById('categoriaDescripcion').value.trim();
  const estado = document.getElementById('categoriaEstado').value;
  if (categorias.some(cat => cat.codigo === codigo)) {
    alert('Categoría duplicada.');
    return;
  }
  categorias.push({ codigo, nombre, descripcion, estado });
  mostrarCategorias();
  actualizarSelectCategorias();
  formCategoria.reset();
});
function mostrarCategorias() {
  tablaCategorias.innerHTML = '';
  categorias.forEach((cat, i) => {
    tablaCategorias.innerHTML += `<tr><td>${cat.codigo}</td><td>${cat.nombre}</td><td>${cat.estado}</td><td><button class='btn btn-sm btn-danger' onclick='eliminarCategoria(${i})'>X</button></td></tr>`;
  });
}
window.eliminarCategoria = function(i) {
  categorias.splice(i, 1);
  mostrarCategorias();
  actualizarSelectCategorias();
};
function actualizarSelectCategorias() {
  const select = document.getElementById('tareaCategoria');
  select.innerHTML = '';
  categorias.forEach(cat => {
    select.innerHTML += `<option value="${cat.nombre}">${cat.nombre}</option>`;
  });
}

// TAREAS
const formTarea = document.getElementById('formTarea');
const tablaTareas = document.getElementById('tablaTareas').querySelector('tbody');
formTarea.addEventListener('submit', function(e) {
  e.preventDefault();
  const codigo = document.getElementById('tareaCodigo').value.trim();
  const nombre = document.getElementById('tareaNombre').value.trim();
  const descripcion = document.getElementById('tareaDescripcion').value.trim();
  const estado = document.getElementById('tareaEstado').value;
  const fechaInicio = document.getElementById('tareaFechaInicio').value;
  const fechaFin = document.getElementById('tareaFechaFin').value;
  const categoria = document.getElementById('tareaCategoria').value;
  if (tareas.some(t => t.codigo === codigo)) {
    alert('Tarea duplicada.');
    return;
  }
  tareas.push({ codigo, nombre, descripcion, estado, fechaInicio, fechaFin, categoria });
  mostrarTareas();
  formTarea.reset();
});
function mostrarTareas() {
  tablaTareas.innerHTML = '';
  tareas.forEach((t, i) => {
    tablaTareas.innerHTML += `<tr><td>${t.codigo}</td><td>${t.nombre}</td><td>${t.estado}</td><td>${t.categoria}</td><td>${t.fechaInicio}</td><td>${t.fechaFin}</td><td><button class='btn btn-sm btn-danger' onclick='eliminarTarea(${i})'>X</button></td></tr>`;
  });
  mostrarMisTareas();
}
window.eliminarTarea = function(i) {
  tareas.splice(i, 1);
  mostrarTareas();
};

// MIS TAREAS (por usuario)
const usuarioFiltro = document.getElementById('usuarioFiltro');
const tablaMisTareas = document.getElementById('tablaMisTareas').querySelector('tbody');
usuarioFiltro.addEventListener('input', mostrarMisTareas);
function mostrarMisTareas() {
  const usuario = usuarioFiltro.value.trim().toLowerCase();
  tablaMisTareas.innerHTML = '';
  tareas.filter(t => !usuario || t.nombre.toLowerCase().includes(usuario)).forEach(t => {
    tablaMisTareas.innerHTML += `<tr><td>${t.codigo}</td><td>${t.nombre}</td><td>${t.estado}</td><td>${t.categoria}</td><td>${t.fechaInicio}</td><td>${t.fechaFin}</td></tr>`;
  });
}

// Inicialización
actualizarSelectCategorias();
mostrarClientes();
mostrarCategorias();
mostrarTareas();
mostrarMisTareas();
