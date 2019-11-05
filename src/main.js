const calculateMonthlyPayment = (principal, years, rate) => {
  let monthlyRate = 0
  if (rate) {
    monthlyRate = rate / 100 / 12
  }

  const monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)))
  return monthlyPayment.toFixed(2)
}

document.getElementById('calcBtn').addEventListener('click', function () {
  var principal = document.getElementById("principal").value
  var years = document.getElementById("years").value
  var rate = document.getElementById("rate").value
  var monthlyPayment = calculateMonthlyPayment(principal, years, rate)
  document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2)
})
