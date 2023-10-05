function somar(numero1, numero2) {
  if (typeof numero1 !== "number") {
    return "Erro";
  }

  if (typeof numero2 !== "number") {
    return "Erro";
  }
  return numero1 + numero2;
}

function dividir(numero1, numero2) {
  if (numero2 == 0) {
    return "Erro";
  }
  return numero1 / numero2;
}

exports.somar = somar;
exports.dividir = dividir;
