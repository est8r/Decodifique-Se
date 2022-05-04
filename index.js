var select = document.querySelector("#select");
var method = document.querySelector(".method");

//CODIFICAR E DECODIFICAR ------------------

function cod() {
  var text = document.querySelector("#text");
  var answer = document.querySelector("#answer");
  var code = document.querySelector("#code");
  if (select.value == "1" && code.checked) {
    valor = text.value;
    answer.value = btoa(valor);
  } else if (code.checked && select.value == "2") {
    cesarCod();
  }
}

function decod() {
  var text = document.querySelector("#text");
  var answer = document.querySelector("#answer");
  var decode = document.querySelector("#decode");
  if (select.value == "1" && decode.checked) {
    valor = text.value;
    answer.value = atob(valor);
  } else if (decode.checked && select.value == "2") {
    cesarDecod();
  }
}

//cesar

function cesarCod() {
  var text = document.querySelector("#text").value;
  var keychain = document.querySelector("#keychain").value;
  var answer = document.querySelector("#answer");
  var result = "";

  for (var i = 0; i < text.length; i++) {
    var step = parseInt(keychain);
    var convert = text[i].charCodeAt();
    if (convert >= 97 && convert <= 122) {
      var calculation = convert + step;
      if (calculation > 122) {
        calculation = 96 + calculation - 122;
      }
      result += String.fromCharCode(calculation);
    } else {
      text[i];
    }
  }
  answer.value = result;
}

function cesarDecod() {
  var text = document.querySelector("#text").value;
  var keychain = document.querySelector("#keychain").value;
  var answer = document.querySelector("#answer");
  var result = "";

  for (var i = 0; i < text.length; i++) {
    var step = parseInt(keychain);
    var convert = text[i].charCodeAt();
    if (convert >= 97 && convert <= 122) {
      var calculation = convert - step;
      if (calculation < 97) {
        calculation = 122 + calculation - 96;
      }
      result += String.fromCharCode(calculation);
    } else {
      text[i];
    }
  }
  answer.value = result;
}

//INPUT DO INCREMENTO -------------------------------------

select.addEventListener("click", function () {
  var keychain = document.querySelector("#keychain");
  if (select.value === "2") {
    keychain.style.display = "flex";
  } else {
    keychain.style.display = "none";
  }
});

//SUBSTITUI BOTÃO------------------------------------------

method.addEventListener("click", function (e) {
  var decode = document.querySelector("#decode");
  var code = document.querySelector("#code");
  var show = document.querySelector("#show");
  if (code.checked) {
    show.innerHTML = `<input class="btnCode" id="btnCoder" type="button" value="Codificar" onclick="cod();creatCopy();">`;
    document.querySelector("#btnCoder").addEventListener("click", coder);
  } else if (decode.checked) {
    show.innerHTML = `<input class="btnCode" id="btnDecor" type="button" value="Decodificar" onclick="decod();creatCopy();">`;
    document.querySelector("#btnDecor").addEventListener("click", decoder);
  }
});

//BOTÃO COPIAR ------------------------------------------------
