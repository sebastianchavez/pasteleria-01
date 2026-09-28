# 🧁 Dulce Tentación — E-commerce de Pastelería

Plantilla de sitio web tipo e-commerce para una pastelería artesanal, construida con **HTML + JavaScript vanilla + Tailwind CSS**, sin dependencias de backend. Los datos están mockeados y la persistencia se realiza en `localStorage`.

## 🚀 Cómo usar

1. Abre el archivo `index.html` directamente en tu navegador, o
2. Sirve la carpeta con cualquier servidor estático (recomendado para evitar restricciones de CORS en algunos navegadores):

```bash
# Opción con Python
python -m http.server 8000

# Opción con Node.js (si tienes npx)
npx serve .

# Opción con VS Code: extensión "Live Server"
```

Luego visita `http://localhost:8000` en tu navegador.

## 👤 Cuenta de prueba

| Email | Contraseña |
|-------|-----------|
| `maria@ejemplo.com` | `123456` |
| `juan@ejemplo.com` | `123456` |

Esta cuenta ya tiene pedidos y productos comprados precargados para probar el flujo de reseñas.

## 📁 Estructura del proyecto

```
pasteleria-01/
├── index.html                    # Landing (Inicio)
├── nosotros.html                 # Sobre nosotros + equipo
├── productos.html                # Catálogo con filtros
├── producto.html?id=X            # Detalle de producto
├── contacto.html                 # Formulario + horario + mapa
├── carrito.html                  # Carrito de compras
├── checkout.html                 # Confirmación de pago
├── confirmacion.html?orden=X     # Confirmación de compra
├── perfil.html                   # Mi perfil + historial de pedidos
├── pedido.html?id=X              # Detalle de pedido
├── resena.html?producto=X        # Formulario de reseña con estrellas
├── privacidad.html               # Políticas de privacidad
├── terminos.html                 # Términos y condiciones
├── registro.html                 # Registro de usuario
├── login.html                    # Iniciar sesión
├── recuperar.html                # Recuperar contraseña
├── css/
│   └── styles.css                # Estilos custom
├── js/
│   ├── data.js                   # Datos mockeados (productos, usuarios, reseñas)
│   ├── storage.js                # Helpers de localStorage
│   ├── auth.js                   # Lógica de autenticación
│   ├── cart.js                   # Lógica del carrito
│   ├── ui.js                     # Header, footer, toasts, componentes UI
│   └── main.js                   # Inicialización global
└── README.md
```

## ✨ Funcionalidades

### Públicas
- ✅ Landing page con hero, categorías y productos destacados
- ✅ Catálogo de productos con filtros por categoría, búsqueda y ordenamiento
- ✅ Detalle de producto con galería, descripción, ingredientes y reseñas
- ✅ Página "Nosotros" con historia y equipo
- ✅ Página de contacto con formulario, horario y mapa
- ✅ Páginas legales (Privacidad, Términos)

### E-commerce
- ✅ Carrito persistente con agregar/quitar/cambiar cantidad
- ✅ Checkout con dirección, tipo de envío y método de pago
- ✅ Confirmación con número de orden y comprobante imprimible
- ✅ Cálculo automático de envío según tipo seleccionado

### Usuario
- ✅ Registro, login y recuperación de contraseña (simulado)
- ✅ Perfil con datos editables y resumen de compras
- ✅ Historial de pedidos con estado y seguimiento
- ✅ Detalle completo de cada pedido
- ✅ Sistema de reseñas con calificación de 1-5 estrellas (requiere compra previa)

### Persistencia
Toda la información se guarda en `localStorage`:
- `usuarios` — Cuentas registradas
- `sesionActual` — Sesión iniciada
- `carrito` — Productos en el carrito
- `pedidos` — Pedidos realizados
- `resenas` — Reseñas publicadas por usuarios

Para limpiar todos los datos, abre la consola del navegador y ejecuta:
```js
localStorage.clear(); location.reload();
```

## 🎨 Personalización

### Colores
Edita `js/ui.js` y la configuración de Tailwind en cada HTML para cambiar los colores. Los principales son:
- `pink-400` / `pink-500` — Color principal
- `pink-50` / `pink-100` — Fondos suaves
- `yellow-400` — Estrellas de reseñas

### Datos mockeados
Edita `js/data.js` para modificar:
- `CATEGORIAS` — Lista de categorías
- `PRODUCTOS` — Productos del catálogo
- `EQUIPO` — Miembros del equipo
- `USUARIOS_INICIALES` — Usuarios precargados
- `RESENAS_INICIALES` — Reseñas precargadas
- `PEDIDOS_INICIALES` — Pedidos de ejemplo

### Imágenes
Las imágenes usan URLs de Unsplash. Para cambiarlas, reemplaza la URL en el campo `imagen` de cada producto en `js/data.js`.

## 🧪 Flujo de prueba recomendado

1. Abre `index.html` y explora el landing
2. Ve a **Productos** y filtra por categoría
3. Entra al detalle de un producto y agrégalo al carrito
4. Ve al **Carrito** y procede al pago (necesitas iniciar sesión)
5. Completa el formulario de checkout
6. En la confirmación, usa **Imprimir comprobante** o **Ver historial de pedidos**
7. Ve a **Mi Perfil** y revisa tus pedidos
8. Entra al detalle de un pedido comprado y deja una **reseña**

## 📝 Notas

- El sitio es completamente funcional sin backend. La persistencia se hace en el navegador del usuario.
- Si abres el sitio en una pestaña de incógnito, los datos no persistirán entre pestañas.
- Las contraseñas se almacenan en texto plano en localStorage (solo con fines de demostración, no usar en producción).
