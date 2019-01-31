// Get Money
function getAmount() {
  const amount = Number(document.getElementById("money").value).toFixed(2);
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
    case "very bad":
      return 0;
      break;
    default:
      throw new Error("You need to choose a quality of service");
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
  document.querySelector("#res-amount").innerHTML = amount;
  const tiprate = getRate();
  document.querySelector("#res-tiprate").innerHTML = `${100 * tiprate} %`;
  const tipvalue = calculateTip(amount, tiprate);
  document.querySelector("#res-tip").innerHTML = tipvalue;
  document.querySelector("#res-total").innerHTML = totalAmount(
    amount,
    tipvalue
  );
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
}
function resultStyles() {
  document.getElementById("form").style.display = "none";
  document.getElementById("result").style.display = "block";
}
function init() {
  LoadButtonEvents();
  firstStyles();
}
init();
