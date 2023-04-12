function verificarCodigo() {
    var codigoIngresado = document.getElementById("codigo").value;
    if (codigoIngresado === "12-04-03") {
      window.location.href = "home.html";
    } else {
      alert("Código incorrecto, por favor ingresa el código correcto");
    }
  }
  