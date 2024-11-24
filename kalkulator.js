function calculateDerivative() {
  const inputFunction = document.getElementById("inputFunction").value;
  let resultElement = document.getElementById("result");

  // Contoh turunan sederhana (basis x^n)
  try {
    const derivative = math.derivative(inputFunction, "x");
    resultElement.innerHTML = `Turunan: ${derivative.toString()}`;
  } catch (error) {
    resultElement.innerHTML = "Masukkan fungsi yang valid.";
  }
}