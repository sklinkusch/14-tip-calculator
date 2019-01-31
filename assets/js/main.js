// Get Money
function getAmount() {
  let amount = document.querySelector("#money").value;
  return amount;
}
// Function to calculate the tip
const calculateTip = (money, rate) => (money * rate).toFixed(2);
