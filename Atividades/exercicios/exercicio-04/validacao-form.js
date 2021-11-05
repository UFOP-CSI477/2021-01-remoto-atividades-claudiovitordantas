function validate() {
  let nome = document.getElementById("nome").value;
  let sexo = document.getElementById("sexo").value;
  let rua = document.getElementById("rua").value;
  let bairro = document.getElementById("bairro").value;
  let cep = document.getElementById("cep").value;

  if (!nome || !sexo || !rua || !bairro || !cep) {
    window.alert("informe todos os campos");
    return false;
  }

  if (cep.length < 8 || isNaN(parseInt(cep))) {
    window.alert("cep invalido");
    return false;
  }

  window.alert("cadastro realizado com sucesso!");
}
