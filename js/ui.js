function toast(mensaje, tipo = 'info', duracion = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toastEl = document.createElement('div');
  toastEl.className = `toast ${tipo}`;
  toastEl.textContent = mensaje;
  container.appendChild(toastEl);
  setTimeout(() => {
    toastEl.style.opacity = '0';
    toastEl.style.transform = 'translateX(100%)';
    toastEl.style.transition = 'all 0.3s';
    setTimeout(() => toastEl.remove(), 300);
  }, duracion);
}

function renderHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  const sesion = obtenerSesion();
  const pathActual = window.location.pathname.split('/').pop() || 'index.html';
  const esActivo = (ruta) => pathActual === ruta ? 'text-pink-600 bg-pink-50' : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/60';

  header.innerHTML = `
    <header class="bg-white/85 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-pink-100/60">
      <div class="container-page">
        <div class="flex items-center justify-between h-20">
          <a href="index.html" class="flex items-center gap-2.5 group">
            <span class="text-3xl group-hover:rotate-12 transition-transform duration-300">🧁</span>
            <span class="font-display text-2xl font-bold gradient-text">Dulce Tentación</span>
          </a>
          <nav class="hidden md:flex items-center gap-1">
            <a href="index.html" class="px-4 py-2 font-medium rounded-full transition-all duration-200 ${esActivo('index.html')}">Inicio</a>
            <a href="nosotros.html" class="px-4 py-2 font-medium rounded-full transition-all duration-200 ${esActivo('nosotros.html')}">Nosotros</a>
            <a href="productos.html" class="px-4 py-2 font-medium rounded-full transition-all duration-200 ${esActivo('productos.html')}">Productos</a>
            <a href="contacto.html" class="px-4 py-2 font-medium rounded-full transition-all duration-200 ${esActivo('contacto.html')}">Contacto</a>
          </nav>
          <div class="flex items-center gap-2">
            <a href="carrito.html" class="relative p-2.5 text-gray-700 hover:text-pink-600 transition-all duration-200 hover:bg-pink-50 rounded-full group">
              <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              <span data-cart-count class="absolute -top-0.5 -right-0.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center hidden shadow-lg shadow-pink-500/30">0</span>
            </a>
            ${sesion ? `
              <a href="perfil.html" class="hidden sm:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-pink-600 font-medium rounded-full hover:bg-pink-50 transition-all duration-200">
                <div class="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  ${sesion.nombre.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                </div>
                <span class="hidden lg:inline">${sesion.nombre.split(' ')[0]}</span>
              </a>
            ` : `
              <a href="login.html" class="btn-primary py-2 px-5 text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
                <span class="hidden sm:inline">Ingresar</span>
              </a>
            `}
            <button data-mobile-toggle class="md:hidden p-2.5 text-gray-700 hover:bg-pink-50 rounded-full transition">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        <nav data-mobile-menu class="hidden md:hidden pb-4 flex flex-col gap-1 animate-fade-in">
          <a href="index.html" class="px-4 py-2.5 text-gray-700 hover:bg-pink-50 rounded-xl font-medium transition">Inicio</a>
          <a href="nosotros.html" class="px-4 py-2.5 text-gray-700 hover:bg-pink-50 rounded-xl font-medium transition">Nosotros</a>
          <a href="productos.html" class="px-4 py-2.5 text-gray-700 hover:bg-pink-50 rounded-xl font-medium transition">Productos</a>
          <a href="contacto.html" class="px-4 py-2.5 text-gray-700 hover:bg-pink-50 rounded-xl font-medium transition">Contacto</a>
          ${sesion ? `<a href="perfil.html" class="px-4 py-2.5 text-gray-700 hover:bg-pink-50 rounded-xl font-medium transition">Mi Perfil</a><button onclick="cerrarSesionYRedirigir()" class="text-left px-4 py-2.5 text-gray-700 hover:bg-pink-50 rounded-xl font-medium transition">Cerrar sesión</button>` : `<a href="login.html" class="px-4 py-2.5 text-gray-700 hover:bg-pink-50 rounded-xl font-medium transition">Ingresar</a>`}
        </nav>
      </div>
    </header>
  `;
  const toggle = header.querySelector('[data-mobile-toggle]');
  const menu = header.querySelector('[data-mobile-menu]');
  if (toggle) {
    toggle.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
  actualizarContadorCarrito();
}

function cerrarSesionYRedirigir() {
  cerrarSesion();
  window.location.href = 'index.html';
}

function renderFooter() {
  const footer = document.querySelector('[data-footer]');
  if (!footer) return;
  footer.innerHTML = `
    <footer class="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 mt-24 border-t border-pink-200/60">
      <div class="container-page py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <span class="text-3xl">🧁</span>
              <span class="font-display text-xl font-bold gradient-text">Dulce Tentación</span>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">Endulzando momentos especiales desde 2010. Pastelería artesanal hecha con amor y los mejores ingredientes.</p>
            <div class="flex gap-2">
              <a href="#" class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 class="font-display font-bold text-gray-900 mb-4">Navegación</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="index.html" class="text-gray-600 hover:text-pink-600 transition-colors inline-flex items-center gap-1 group"><span class="group-hover:translate-x-1 transition-transform">→</span> Inicio</a></li>
              <li><a href="nosotros.html" class="text-gray-600 hover:text-pink-600 transition-colors inline-flex items-center gap-1 group"><span class="group-hover:translate-x-1 transition-transform">→</span> Nosotros</a></li>
              <li><a href="productos.html" class="text-gray-600 hover:text-pink-600 transition-colors inline-flex items-center gap-1 group"><span class="group-hover:translate-x-1 transition-transform">→</span> Productos</a></li>
              <li><a href="contacto.html" class="text-gray-600 hover:text-pink-600 transition-colors inline-flex items-center gap-1 group"><span class="group-hover:translate-x-1 transition-transform">→</span> Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-display font-bold text-gray-900 mb-4">Mi Cuenta</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="login.html" class="text-gray-600 hover:text-pink-600 transition-colors inline-flex items-center gap-1 group"><span class="group-hover:translate-x-1 transition-transform">→</span> Iniciar sesión</a></li>
              <li><a href="registro.html" class="text-gray-600 hover:text-pink-600 transition-colors inline-flex items-center gap-1 group"><span class="group-hover:translate-x-1 transition-transform">→</span> Registrarse</a></li>
              <li><a href="perfil.html" class="text-gray-600 hover:text-pink-600 transition-colors inline-flex items-center gap-1 group"><span class="group-hover:translate-x-1 transition-transform">→</span> Mi perfil</a></li>
              <li><a href="carrito.html" class="text-gray-600 hover:text-pink-600 transition-colors inline-flex items-center gap-1 group"><span class="group-hover:translate-x-1 transition-transform">→</span> Mi carrito</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-display font-bold text-gray-900 mb-4">Información</h4>
            <ul class="space-y-2.5 text-sm">
              <li class="flex items-start gap-2 text-gray-600">
                <svg class="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Av. Principal 123, Centro, Ciudad</span>
              </li>
              <li class="flex items-start gap-2 text-gray-600">
                <svg class="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li class="flex items-start gap-2 text-gray-600">
                <svg class="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>info@dulcetentacion.com</span>
              </li>
            </ul>
            <div class="mt-5 pt-5 border-t border-pink-200">
              <a href="privacidad.html" class="block text-sm text-gray-600 hover:text-pink-600 transition mb-1">Políticas de privacidad</a>
              <a href="terminos.html" class="block text-sm text-gray-600 hover:text-pink-600 transition">Términos y condiciones</a>
            </div>
          </div>
        </div>
        <div class="border-t border-pink-200/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <p>© ${new Date().getFullYear()} Dulce Tentación. Todos los derechos reservados.</p>
          <p class="flex items-center gap-1.5">Hecho con <span class="text-pink-500 animate-pulse">💖</span> para endulzar tu día</p>
        </div>
      </div>
    </footer>
  `;
}

function renderProductoCard(producto) {
  const rating = promedioRating(producto.id);
  return `
    <div class="card card-hover group">
      <a href="producto.html?id=${producto.id}" class="block">
        <div class="aspect-square overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 img-zoom relative">
          <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-full object-cover" loading="lazy">
          ${producto.destacado ? '<span class="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">⭐ Destacado</span>' : ''}
        </div>
      </a>
      <div class="p-5">
        <span class="badge-category">${obtenerCategoria(producto.categoria).nombre}</span>
        <a href="producto.html?id=${producto.id}">
          <h3 class="font-display text-lg font-bold text-gray-900 mt-2.5 mb-1.5 group-hover:text-pink-600 transition line-clamp-1">${producto.nombre}</h3>
        </a>
        <div class="flex items-center gap-1 mb-3">
          ${rating > 0 ? `${renderEstrellas(rating, 'sm')} <span class="text-xs text-gray-500 ml-1">(${rating})</span>` : '<span class="text-xs text-gray-400">Sin reseñas aún</span>'}
        </div>
        <div class="flex items-center justify-between">
          <span class="font-display text-2xl font-bold gradient-text">${formatearPrecio(producto.precio)}</span>
          <button onclick="agregarAlCarritoUI('${producto.id}')" class="w-11 h-11 bg-gradient-to-br from-pink-100 to-rose-100 hover:from-pink-500 hover:to-rose-500 text-pink-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-500/30 hover:-translate-y-0.5 hover:rotate-90" title="Agregar al carrito">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

function agregarAlCarritoUI(productoId) {
  agregarAlCarrito(productoId, 1);
  const producto = obtenerProducto(productoId);
  toast(`${producto.nombre} agregado al carrito`, 'success');
}

function inicializarAnimacionesScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function inicializarPagina() {
  inicializarStorage();
  renderHeader();
  renderFooter();
  setTimeout(inicializarAnimacionesScroll, 50);
}
