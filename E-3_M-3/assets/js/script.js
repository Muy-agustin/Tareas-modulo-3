function calcularPropina(montoCuenta, porcentajePropina) {
  const propina = montoCuenta * (porcentajePropina / 100);
  return propina;
}

/* Captura de datos */
const montoIngresado = prompt("Ingrese el monto total de la cuenta:");
const porcentajeIngresado = prompt("Ingrese el porcentaje de propina (por ejemplo 10, 15, 20):");

/* Conversión a número */
const montoCuenta = parseFloat(montoIngresado);
const porcentajePropina = parseFloat(porcentajeIngresado);

 /* Validación */
if (Number.isNaN(montoCuenta) || Number.isNaN(porcentajePropina) || montoCuenta < 0 || porcentajePropina < 0) {
  console.log("Error: Debes ingresar números válidos (mayores o iguales a 0).");
} else {
  /* Almacenamiento */
  const montoPropina = calcularPropina(montoCuenta, porcentajePropina);

  /* Total a pagar */
  const totalPagar = montoCuenta + montoPropina;

  /* resultados */
  console.log("--- Resumen de la Cuenta ---");
  console.log(`Monto de la cuenta: $${montoCuenta.toFixed(2)}`);
  console.log(`Propina (${porcentajePropina}%): $${montoPropina.toFixed(2)}`);
  console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);
}
