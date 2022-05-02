var codificar = document.querySelector("#codificar");
var decodificar = document.querySelector("#decodificar");
var chave = document.querySelector("#chave");
var select = document.querySelector("#select");
var opcoes = document.querySelector(".opcao");
var enviar = document.querySelector("#botao");
var metodo = document.querySelector(".metodo");
var aparecer = document.querySelector("#aparecer");

//INPUT DO INCREMENTO -------------------------------------

select.addEventListener("click", function () {
  if (select.value === "2") {
    chave.style.display = "flex";
  } else {
    chave.style.display = "none";
  }
});

//SUBSTITUI BOTÃO------------------------------------------

metodo.addEventListener("click", function (e) {
  if (codificar.checked) {
    aparecer.innerHTML = `<input class="btnCode" id="btnCoder" type="button" value="Codificar" onclick="cod()">`;
    document.querySelector("#btnCoder").addEventListener("click", coder);
  } else if (decodificar.checked) {
    aparecer.innerHTML = `<input class="btnCode" id="btnDecor" type="button" value="Decodificar" onclick="decod()">`;
    document.querySelector("#btnDecor").addEventListener("click", decoder);
  }
});

//BASE64 CODIFICAR E DECODIFICAR ------------------
var texto = document.querySelector("#texto");
var resposta = document.querySelector("#resposta");

function cod() {
  if (select.value == "1" && codificar.checked) {
    valor = texto.value;
    resposta.value = btoa(valor);
  } else if (codificar.checked && select.value == "2") {
    cesarCod();
  }
}

function decod() {
  if (select.value == "1" && decodificar.checked) {
    valor = texto.value;
    resposta.value = atob(valor);
  } else if (decodificar.checked && select.value == "2") {
    cesarDecod();
  }
}
//CESAR CODIFICAR E DECODIFICAR ---------------------------------

//BOTÃO COPIAR ------------------------------------------------
