var texto = document.querySelector("#texto");
var resposta = document.querySelector("#output");
var codificar = document.querySelector("#codificar");
var decodificar = document.querySelector("#decodificar");
var enviar = document.querySelector("#botao");
var chave = document.querySelector("#chave");
var select = document.querySelector("#select");
var opcoes = document.querySelector(".opcao");

opcoes.addEventListener("incremento", function () {
  if (opcao.value === "cesar") {
    chave.classList.remove("hidden");
  } else {
    chave.classList.add("hidden");
  }
});

codificar.addEventListener("click", function () {
  botao.value = "Codificar";
});

decodificar.addEventListener("click", function () {
  botao.value = "Decodificar";
});

function cript() {
  document.getElementById("output").innerHTML =
    '<textarea readonly id="texto">' + aaa + "</textarea>";
}

function descript() {
  document.getElementById("output").innerHTML =
    '<textarea readonly id="texto">' + aaa + "</textarea>";
}
