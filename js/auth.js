function registrarUsuario(nombre, email, password) {
  const usuarios = obtenerUsuarios();
  if (usuarios.find(u => u.email === email)) {
    return { exito: false, mensaje: 'Este correo ya está registrado.' };
  }
  if (password.length < 6) {
    return { exito: false, mensaje: 'La contraseña debe tener al menos 6 caracteres.' };
  }
  const nuevoUsuario = {
    id: 'u' + Date.now(),
    nombre,
    email,
    password,
    telefono: '',
    direccion: '',
    fechaRegistro: new Date().toISOString().split('T')[0]
  };
  usuarios.push(nuevoUsuario);
  guardarUsuarios(usuarios);
  guardarSesion({ id: nuevoUsuario.id, nombre: nuevoUsuario.nombre, email: nuevoUsuario.email });
  return { exito: true, mensaje: 'Registro exitoso. Bienvenido/a!' };
}

function iniciarSesion(email, password) {
  const usuarios = obtenerUsuarios();
  const usuario = usuarios.find(u => u.email === email && u.password === password);
  if (!usuario) {
    return { exito: false, mensaje: 'Correo o contraseña incorrectos.' };
  }
  guardarSesion({ id: usuario.id, nombre: usuario.nombre, email: usuario.email });
  return { exito: true, mensaje: `Bienvenido/a de nuevo, ${usuario.nombre}!` };
}

function recuperarContrasena(email) {
  const usuarios = obtenerUsuarios();
  const existe = usuarios.find(u => u.email === email);
  if (!existe) {
    return { exito: false, mensaje: 'No encontramos una cuenta con ese correo.' };
  }
  return { exito: true, mensaje: 'Te hemos enviado las instrucciones a tu correo.' };
}

function usuarioHaComprado(usuarioEmail, productoId) {
  const pedidos = obtenerPedidos();
  return pedidos.some(p =>
    p.usuarioEmail === usuarioEmail &&
    p.productos.some(prod => prod.id === productoId)
  );
}
