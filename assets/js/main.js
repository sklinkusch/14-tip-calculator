// Get Money
function getAmount() {
  const amount = document.getElementById("money").value;
  return amount;
}
// Get Rate
function getRate() {
  const quality = document.querySelector("#rate").value;
  switch (quality) {
    case "excellent":
      return 0.3;
      break;
    case "verygood":
      return 0.2;
      break;
    case "good":
      return 0.15;
      break;
    case "ok":
      return 0.1;
      break;
    case "bad":
      return 0.05;
      break;
    case "verybad":
      return 0;
      break;
    case "select-head":
      return -2;
      break;
  }
}
// Function to calculate the tip
const calculateTip = (amount, rate) => (amount * rate).toFixed(2);
// Function to calculate the totalAmount
const totalAmount = (amount, tipvalue) => {
  const totalAmount = (Number(amount) + Number(tipvalue)).toFixed(2);
  return totalAmount;
};
// Function assigned to the "Calculate" button
function showResult() {
  const amount = getAmount();
  if (!/^([0-9]+.?[0-9]*)$/.test(amount) || amount === "") {
    try {
      throw Error("Amount must be a number");
    } catch (e) {
      document.getElementById("err-money").innerHTML = e.message;
    }
  } else {
    document.querySelector("#res-amount").innerHTML = Number(amount).toFixed(2);
    document.getElementById("err-money").innerHTML = "";
    let tiprate = getRate();
    if (tiprate < 0) {
      try {
        throw new Error("You have to choose an option!");
      } catch (e) {
        document.getElementById("err-rate").innerHTML = e.message;
      }
    } else {
      document.getElementById("err-rate").innerHTML = "";
      document.querySelector("#res-tiprate").innerHTML = `${100 * tiprate} %`;
      const tipvalue = calculateTip(amount, tiprate);
      document.querySelector("#res-tip").innerHTML = tipvalue;
      document.querySelector("#res-total").innerHTML = totalAmount(
        amount,
        tipvalue
      );
    }
  }
}
// button events
function LoadButtonEvents() {
  document.querySelector("#calculate").addEventListener("click", () => {
    showResult();
    resultStyles();
  });
  document.querySelector("#new-tip").addEventListener("click", () => {
    firstStyles();
    clearValues();
  });
}
// First Styles
function firstStyles() {
  document.getElementById("form").style.display = "block";
  document.getElementById("result").style.display = "none";
}
function clearValues() {
  document.getElementById("money").value = "";
  document.getElementById("rate").value = "select-head";
  document.getElementById("err-money").innerHTML = "";
  document.getElementById("err-rate").innerHTML = "";
}
function resultStyles() {
  if (
    document.getElementById("err-money").innerHTML === "" &&
    document.getElementById("err-rate").innerHTML === ""
  ) {
    document.getElementById("form").style.display = "none";
    document.getElementById("result").style.display = "block";
  }
}
function init() {
  LoadButtonEvents();
  firstStyles();
}
init();
