/* Toma de datos */
const nombre = prompt("Ingresa tu nombre:");
const apellido = prompt("Ingresa tu apellido:");

/* Procesamientos de nombre */
/*  Inicial del nombre (primera letra) */
const inicialNombre = nombre.charAt(0).toLowerCase();

/* Primeras 3 letras del apellido */
const primerasTresApellido = apellido.slice(0, 3).toLowerCase();

 /* Generación de número aleatorio de 2 dígitos (10 a 99) */
const numeroAleatorio = Math.floor(Math.random() * 90) + 10;

 /* Ensamblaje del username */
const nombreUsuario = inicialNombre.concat(primerasTresApellido, numeroAleatorio);

/* Mostrar resultado */
console.log(`Tu nuevo nombre de usuario es: ${nombreUsuario}`);
