/* Inicialización */
let listaDeTareas = [];

/* añadir tareas y do-while */
let continuar;
do {
  const entrada = prompt("Escribe una tarea:");

/* Si el usuario cancela, entrada será null */
  if (entrada !== null) {
    const tarea = entrada.trim();

    // Evita guardar tareas vacías
    if (tarea.length > 0) {
      listaDeTareas.push(tarea);
    } else {
      console.log("No se agregó: la tarea estaba vacía.");
    }
  }

  continuar = confirm("¿Deseas agregar otra tarea?");
} while (continuar);

/* lista final en consola ordenada (li) */
console.log("Lista final de tareas:");
listaDeTareas.forEach((tarea, i) => {
  console.log(`${i + 1}. ${tarea}`);
});
