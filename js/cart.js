function agregarAlCarrito(productoId, cantidad = 1) {
  const carrito = obtenerCarrito();
  const itemExistente = carrito.find(item => item.id === productoId);
  if (itemExistente) {
    itemExistente.cantidad += cantidad;
  } else {
    carrito.push({ id: productoId, cantidad });
  }
  guardarCarrito(carrito);
  actualizarContadorCarrito();
  return carrito;
}

function eliminarDelCarrito(productoId) {
  const carrito = obtenerCarrito().filter(item => item.id !== productoId);
  guardarCarrito(carrito);
  actualizarContadorCarrito();
  return carrito;
}

function actualizarCantidadCarrito(productoId, cantidad) {
  const carrito = obtenerCarrito();
  const item = carrito.find(i => i.id === productoId);
  if (item) {
    if (cantidad <= 0) {
      return eliminarDelCarrito(productoId);
    }
    item.cantidad = cantidad;
    guardarCarrito(carrito);
    actualizarContadorCarrito();
  }
  return carrito;
}

function vaciarCarrito() {
  guardarCarrito([]);
  actualizarContadorCarrito();
}

function obtenerResumenCarrito() {
  const carrito = obtenerCarrito();
  let subtotal = 0;
  const items = carrito.map(item => {
    const producto = obtenerProducto(item.id);
    if (!producto) return null;
    const subtotalItem = producto.precio * item.cantidad;
    subtotal += subtotalItem;
    return { ...producto, cantidad: item.cantidad, subtotalItem };
  }).filter(Boolean);
  return { items, subtotal, cantidadTotal: items.reduce((acc, i) => acc + i.cantidad, 0) };
}

function actualizarContadorCarrito() {
  const contadores = document.querySelectorAll('[data-cart-count]');
  const resumen = obtenerResumenCarrito();
  contadores.forEach(el => {
    el.textContent = resumen.cantidadTotal;
    el.classList.toggle('hidden', resumen.cantidadTotal === 0);
  });
}
