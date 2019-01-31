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
const calculateTip = () => (getAmount() * getRate()).toFixed(2);
// Function to calculate the totalAmount
const totalAmount = () =>
  (Number(getAmount()) + Number(calculateTip())).toFixed(2);
// Function assigned to the "Calculate" button
function showResult() {
  document.querySelector("#res-amount").innerHTML = getAmount();
  document.querySelector("#res-tiprate").innerHTML = `${100 * getRate()} %`;
  document.querySelector("#res-tip").innerHTML = calculateTip();
  document.querySelector("#res-total").innerHTML = totalAmount();
}
// button events
function LoadButtonEvents() {
  document.querySelector("#calculate").addEventListener("click", onclick => {
    showResult();
  });
}
function init() {
  LoadButtonEvents();
}
init();
