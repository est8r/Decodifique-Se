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

//CESAR CODIFICAR E DECODIFICAR ---------------------------------

//BOTÃO COPIAR ------------------------------------------------
