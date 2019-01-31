// Get Money
function getAmount() {
  const amount = document.querySelector("#money").value;
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
const calculateTip = (money, rate) => (getAmount() * getRate()).toFixed(2);
