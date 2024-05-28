const convertButton = document.querySelector(".convert-button");

const currencySelect = document.querySelector(".currency-select");
console.log(currencySelect);

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  /*coloquei a classe no plache e quero pegar so o valor nesta class */

  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); //Valor em real
  const currencyValueConvert = document.querySelector(".currency-value"); //Outras moedas

  const dolarToday = 5.17;
  const euroToday = 5.62;
  const librToday = 6.61;
  const rubiaToday = 0.062;
  const bitcoinToday = 360726.20;


  if (currencySelect.value == "dolar") {
    currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencySelect.value == "euro") {
    currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  /*comecei aqui até... */

  if (currencySelect.value == "rubia") {
    currencyValueConvert.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "IND",
    }).format(inputCurrencyValue / rubiaToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / librToday);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConvert.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday);
  }


  /*ate aqui. */

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);


  /*currencyValueToConvert.innerHTML = inputCurrencyValue
    currencyValueConvert.innerHTML = converteValue*/
  /*ja estaria certo os calulos aqui*/
}
function changeCurrency() {
  const currencyName = document.getElementById("currency-name"); //Mapiei o elemento
  const currencyImg = document.querySelector(".currency-Img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImg.src = "./img/usa.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./img/euro.png";
  }

  if (currencySelect.value == "rubia") {
    currencyName.innerHTML = "Rubia-INR";
    currencyImg.src = "./img/rupia_INR.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImg.src = "./img/libra.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./img/bitcoin.png";
  }

  convertValues(); //chamo ela novamente para realizar
  // todo o calculo novamente deixando
  //atualizado
}

/*Aqui fica os ouvintes, monitorando os acontecimentos*/
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
/* a funcao convertValues reconhece quando o botão é clicado*/
