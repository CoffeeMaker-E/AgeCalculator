const diaInp = document.getElementById("dia");
const mesInp = document.getElementById("mes");
const anoInp = document.getElementById("ano");

const diaOtp = document.getElementById("DD");
const mesOtp = document.getElementById("MM");
const anoOtp = document.getElementById("AA");

const form = document.querySelector("form");

const date = new Date();
let dia = date.getDate();
let mes = 1 + date.getMonth();
let ano = date.getFullYear();

const meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validar() {
  const inputs = document.querySelectorAll("input");
  let validador = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "Campo requerido!";
      validador = false;
    } else if (mesInp.value > 12) {
        mesInp.style.borderColor = "red";
        mesInp.parentElement.querySelector("small").innerText = "Mês invalido!";
        validador = false;
    } else if (diaInp.value > 31) {
        diaInp.style.borderColor = "red";
        diaInp.parentElement.querySelector("small").innerText =
          "Dia invalido!";
        validador = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validador = true;
    }
  });
  return validador;
}

function handleSubmit(e) {
    e.preventDefault();
    if (validar()) {
      if (diaInp.value > dia) {
        dia = dia + meses[mes - 1];
        mes = mes - 1;
      }
      if (mesInp.value > mes) {
        mes = mes + 12;
        ano = ano - 1;
      }
  
      const d = dia - diaInp.value;
      const m = mes - mesInp.value;
      const a = ano - anoInp.value;
  
      diaOtp.innerHTML = d;
      mesOtp.innerHTML = m;
      anoOtp.innerHTML = a;
    }
  }

form.addEventListener("submit", handleSubmit);
