const CATEGORIAS = [
  { id: 'tortas', nombre: 'Tortas', icono: '🎂', descripcion: 'Para tus celebraciones más especiales' },
  { id: 'cupcakes', nombre: 'Cupcakes', icono: '🧁', descripcion: 'Pequeñas delicias en cada bocado' },
  { id: 'pasteles', nombre: 'Pasteles Individuales', icono: '🥐', descripcion: 'Porciones perfectas para ti' },
  { id: 'panaderia', nombre: 'Panadería', icono: '🍞', descripcion: 'Recién horneados todos los días' },
  { id: 'bebidas', nombre: 'Bebidas', icono: '☕', descripcion: 'Acompañamiento ideal' }
];

const PRODUCTOS = [
  {
    id: 'p001',
    nombre: 'Torta de Chocolate Belga',
    categoria: 'tortas',
    precio: 35000,
    imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    descripcion: 'Exquisita torta de tres capas con chocolate belga premium, rellena de ganache y cubierta con frosting de chocolate amargo. Decorada con virutas de chocolate y fresas frescas.',
    ingredientes: 'Harina, mantequilla, huevos, chocolate belga 70%, azúcar, fresas',
    destacado: true,
    stock: 12
  },
  {
    id: 'p002',
    nombre: 'Torta Red Velvet',
    categoria: 'tortas',
    precio: 32000,
    imagen: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600&q=80',
    descripcion: 'Clásica torta Red Velvet con su característico color rojo intenso y sabor a cacao suave. Rellena y cubierta con crema de queso artesanal.',
    ingredientes: 'Harina, cacao, buttermilk, colorante natural, crema de queso, azúcar',
    destacado: true,
    stock: 8
  },
  {
    id: 'p003',
    nombre: 'Cupcakes Variados (x6)',
    categoria: 'cupcakes',
    precio: 18000,
    imagen: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&q=80',
    descripcion: 'Caja con seis cupcakes de sabores variados: vainilla, chocolate, fresa, limón, red velvet y zanahoria. Decorados con buttercream de colores pastel.',
    ingredientes: 'Harina, mantequilla, azúcar, huevos, sabores naturales, crema',
    destacado: true,
    stock: 20
  },
  {
    id: 'p004',
    nombre: 'Cupcakes de Fresa (x4)',
    categoria: 'cupcakes',
    precio: 14000,
    imagen: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80',
    descripcion: 'Cuatro tiernos cupcakes con bizcocho de vainilla y frosting de fresa natural. Decorados con una fresa fresca en la cima.',
    ingredientes: 'Harina, fresas naturales, vainilla, mantequilla, azúcar glas',
    destacado: false,
    stock: 25
  },
  {
    id: 'p005',
    nombre: 'Croissant de Almendra',
    categoria: 'pasteles',
    precio: 4500,
    imagen: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
    descripcion: 'Croissant hojaldrado relleno de crema de almendras y cubierto con almendras laminadas tostadas. Horneado al momento.',
    ingredientes: 'Mantequilla francesa, harina, almendras, azúcar, huevo',
    destacado: true,
    stock: 30
  },
  {
    id: 'p006',
    nombre: 'Eclair de Chocolate',
    categoria: 'pasteles',
    precio: 5000,
    imagen: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=600&q=80',
    descripcion: 'Masa choux rellena de crema pastelera de chocolate, cubierta con glaseado brillante de chocolate oscuro y decorado con hilos de chocolate blanco.',
    ingredientes: 'Masa choux, crema pastelera, chocolate oscuro, chocolate blanco',
    destacado: false,
    stock: 18
  },
  {
    id: 'p007',
    nombre: 'Macarons Surtidos (x12)',
    categoria: 'pasteles',
    precio: 22000,
    imagen: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600&q=80',
    descripcion: 'Caja de doce macarons franceses con sabores variados: pistacho, frambuesa, chocolate, vainilla, café y limón. Colores pastel delicados.',
    ingredientes: 'Almendra molida, azúcar glas, claras de huevo, sabores naturales',
    destacado: true,
    stock: 15
  },
  {
    id: 'p008',
    nombre: 'Pan de Masa Madre',
    categoria: 'panaderia',
    precio: 6500,
    imagen: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    descripcion: 'Pan artesanal de masa madre fermentada durante 24 horas. Corteza crujiente y miga esponjosa con sabor ligeramente ácido.',
    ingredientes: 'Harina orgánica, masa madre, agua, sal marina',
    destacado: false,
    stock: 22
  },
  {
    id: 'p009',
    nombre: 'Tarta de Manzana',
    categoria: 'panaderia',
    precio: 15000,
    imagen: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600&q=80',
    descripcion: 'Tarta rústica de manzana con masa quebrada casera, manzanas caramelizadas y un toque de canela. Servida tibia.',
    ingredientes: 'Manzanas, harina, mantequilla, azúcar morena, canela, limón',
    destacado: false,
    stock: 10
  },
  {
    id: 'p010',
    nombre: 'Café Latte',
    categoria: 'bebidas',
    precio: 3500,
    imagen: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600&q=80',
    descripcion: 'Café espresso con leche texturizada al vapor, servido en taza de cerámica. Acompañado con arte latte.',
    ingredientes: 'Café arábigo de altura, leche entera',
    destacado: false,
    stock: 50
  },
  {
    id: 'p011',
    nombre: 'Chocolate Caliente',
    categoria: 'bebidas',
    precio: 4000,
    imagen: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600&q=80',
    descripcion: 'Crema espesa de chocolate belga con leche caliente, coronada con malvaviscos y ralladura de chocolate.',
    ingredientes: 'Chocolate belga, leche entera, malvaviscos, nata',
    destacado: true,
    stock: 40
  },
  {
    id: 'p012',
    nombre: 'Torta de Zanahoria',
    categoria: 'tortas',
    precio: 30000,
    imagen: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80',
    descripcion: 'Húmeda torta de zanahoria con especias, nueces pecanas y cubierta con frosting de queso crema. Una delicia reconfortante.',
    ingredientes: 'Zanahoria, nueces pecanas, canela, harina, queso crema',
    destacado: false,
    stock: 9
  }
];

const EQUIPO = [
  {
    id: 'e001',
    nombre: 'María Rodríguez',
    rol: 'Fundadora y Chef Principal',
    foto: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80',
    descripcion: 'Con más de 15 años de experiencia en pastelería francesa, María es el corazón creativo de Dulce Tentación.'
  },
  {
    id: 'e002',
    nombre: 'Carlos Mendoza',
    rol: 'Maestro Pastelero',
    foto: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80',
    descripcion: 'Especialista en decoración artística y técnicas clásicas de pastelería europea.'
  },
  {
    id: 'e003',
    nombre: 'Ana Lucía Pérez',
    rol: 'Jefa de Panadería',
    foto: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=80',
    descripcion: 'Experta en panes artesanales y fermentaciones largas. Encargada de la sección de panadería.'
  },
  {
    id: 'e004',
    nombre: 'Diego Salazar',
    rol: 'Gerente de Atención al Cliente',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    descripcion: 'El encargado de que cada cliente tenga una experiencia dulce y memorable.'
  }
];

const TESTIMONIOS = [
  { nombre: 'Lucía Fernández', texto: 'Las tortas de Dulce Tentación son las mejores que he probado. Siempre fresco y delicioso.', rating: 5 },
  { nombre: 'Roberto Gómez', texto: 'El pan de masa madre es espectacular. Mi familia no quiere otro desde que lo probaron.', rating: 5 },
  { nombre: 'Carolina Vega', texto: 'Los cupcakes son perfectos para cualquier ocasión. Excelente presentación y sabor.', rating: 4 }
];

const RESENAS_INICIALES = [
  { id: 'r001', productoId: 'p001', usuario: 'Lucía Fernández', rating: 5, comentario: 'Increíble torta de chocolate, el mejor que he probado en mucho tiempo. La textura es perfecta y el sabor es intenso pero equilibrado.', fecha: '2024-09-15' },
  { id: 'r002', productoId: 'p001', usuario: 'Roberto Gómez', rating: 5, comentario: 'La pedí para un cumpleaños y fue un éxito total. Todos quedaron encantados con el sabor.', fecha: '2024-09-20' },
  { id: 'r003', productoId: 'p001', usuario: 'Carolina Vega', rating: 4, comentario: 'Muy buena torta, aunque un poco dulce para mi gusto. Pero la calidad es innegable.', fecha: '2024-09-25' },
  { id: 'r004', productoId: 'p003', usuario: 'Andrea Morales', rating: 5, comentario: 'Los cupcakes son una delicia, vienen muy bien presentados y los sabores son variados.', fecha: '2024-09-10' },
  { id: 'r005', productoId: 'p005', usuario: 'Pedro Ramírez', rating: 5, comentario: 'El croissant es crujiente por fuera y suave por dentro. La crema de almendras es exquisita.', fecha: '2024-09-18' },
  { id: 'r006', productoId: 'p002', usuario: 'Sofía Castro', rating: 5, comentario: 'La Red Velvet es perfecta, suave y con el frosting ideal. Repetiré sin dudar.', fecha: '2024-09-22' }
];

const PEDIDOS_INICIALES = [
  {
    id: 'ORD-20240915-001',
    usuarioEmail: 'maria@ejemplo.com',
    fecha: '2024-09-15',
    estado: 'Entregado',
    productos: [
      { id: 'p001', nombre: 'Torta de Chocolate Belga', precio: 35000, cantidad: 1, imagen: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80' },
      { id: 'p010', nombre: 'Café Latte', precio: 3500, cantidad: 2, imagen: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=200&q=80' }
    ],
    subtotal: 42000,
    envio: 5000,
    total: 47000,
    tipoEnvio: 'Estándar (3-5 días)',
    direccion: { nombre: 'María López', telefono: '+56 9 1234 5678', calle: 'Av. Principal 123', ciudad: 'Santiago', codigoPostal: '7500000' },
    metodoPago: 'Tarjeta de Crédito'
  },
  {
    id: 'ORD-20240920-002',
    usuarioEmail: 'maria@ejemplo.com',
    fecha: '2024-09-20',
    estado: 'En camino',
    productos: [
      { id: 'p003', nombre: 'Cupcakes Variados (x6)', precio: 18000, cantidad: 1, imagen: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=200&q=80' },
      { id: 'p007', nombre: 'Macarons Surtidos (x12)', precio: 22000, cantidad: 1, imagen: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=200&q=80' }
    ],
    subtotal: 40000,
    envio: 10000,
    total: 50000,
    tipoEnvio: 'Express (24-48 horas)',
    direccion: { nombre: 'María López', telefono: '+56 9 1234 5678', calle: 'Av. Principal 123', ciudad: 'Santiago', codigoPostal: '7500000' },
    metodoPago: 'PayPal'
  },
  {
    id: 'ORD-20240925-003',
    usuarioEmail: 'maria@ejemplo.com',
    fecha: '2024-09-25',
    estado: 'Procesando',
    productos: [
      { id: 'p002', nombre: 'Torta Red Velvet', precio: 32000, cantidad: 1, imagen: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=200&q=80' }
    ],
    subtotal: 32000,
    envio: 5000,
    total: 37000,
    tipoEnvio: 'Estándar (3-5 días)',
    direccion: { nombre: 'María López', telefono: '+56 9 1234 5678', calle: 'Av. Principal 123', ciudad: 'Santiago', codigoPostal: '7500000' },
    metodoPago: 'Transferencia Bancaria'
  }
];

const USUARIOS_INICIALES = [
  {
    id: 'u001',
    nombre: 'María López',
    email: 'maria@ejemplo.com',
    password: '123456',
    telefono: '+56 9 1234 5678',
    direccion: 'Av. Principal 123, Santiago, Chile',
    fechaRegistro: '2024-01-15'
  },
  {
    id: 'u002',
    nombre: 'Juan Pérez',
    email: 'juan@ejemplo.com',
    password: '123456',
    telefono: '+56 9 8765 4321',
    direccion: 'Calle Secundaria 456, Santiago, Chile',
    fechaRegistro: '2024-03-20'
  }
];

function formatearPrecio(precio) {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(Number(precio));
}

function formatearFecha(fecha) {
  const d = new Date(fecha);
  return d.toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' });
}

function generarIdPedido() {
  const fecha = new Date();
  const year = fecha.getFullYear();
  const month = String(fecha.getMonth() + 1).padStart(2, '0');
  const day = String(fecha.getDate()).padStart(2, '0');
  const random = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
  return `ORD-${year}${month}${day}-${random}`;
}

function obtenerProducto(id) {
  return PRODUCTOS.find(p => p.id === id);
}

function obtenerCategoria(id) {
  return CATEGORIAS.find(c => c.id === id);
}

function obtenerResenasProducto(productoId) {
  const resenasStorage = JSON.parse(localStorage.getItem('resenas') || '[]');
  const todas = [...RESENAS_INICIALES, ...resenasStorage];
  return todas.filter(r => r.productoId === productoId);
}

function promedioRating(productoId) {
  const resenas = obtenerResenasProducto(productoId);
  if (resenas.length === 0) return 0;
  const suma = resenas.reduce((acc, r) => acc + r.rating, 0);
  return (suma / resenas.length).toFixed(1);
}

function renderEstrellas(rating, size = 'sm') {
  const sizes = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6', xl: 'w-8 h-8' };
  const cls = sizes[size] || sizes.sm;
  const estrellas = [];
  const ratingNum = parseFloat(rating);
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.floor(ratingNum);
    const half = !filled && i - 0.5 <= ratingNum;
    const color = filled || half ? 'text-yellow-400' : 'text-gray-300';
    const path = filled
      ? 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118L10 13.347l-3.37 2.448c-.783.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.643 8.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.954z'
      : 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118L10 13.347l-3.37 2.448c-.783.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.643 8.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.954z';
    estrellas.push(`<svg class="${cls} ${color} inline" fill="currentColor" viewBox="0 0 20 20"><path d="${path}"/></svg>`);
  }
  return estrellas.join('');
}
