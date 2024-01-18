function obtenerPrecioVehiculo(vehiculo) {
    switch (vehiculo) {
      case "moto":
        return "$100";
      case "auto":
        return "$500";
      case "camiones":
        return "$2000";
      default:
        return "Vehículo no reconocido";
    }
  }
  
  function mostrarValorEnConsolaYAlert(vehiculo, valor) {
    console.log("Valor de " + vehiculo + ": " + valor);
    alert("Valor de " + vehiculo + ": " + valor);
  }
  
  let vehiculo = prompt("¿Qué vehículo deseas lavar?");
  let precio = obtenerPrecioVehiculo(vehiculo);
  
  if (precio !== "Vehículo no reconocido") {
    mostrarValorEnConsolaYAlert(vehiculo, precio);
  } else {
    console.log(precio);
    alert(precio);
  }
  