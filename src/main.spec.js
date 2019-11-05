const calculateMonthlyPayment = (principal, years, rate) => {
  let monthlyRate = 0
  if (rate) {
    monthlyRate = rate / 100 / 12
  }

  const monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)))
  return monthlyPayment.toFixed(2)
}

describe('CalculateMonthlyPayment', () => {
  test('test calculateMonthlyPayment', () => {
    expect(calculateMonthlyPayment(2000000, 30, 3)).toEqual('8432.08')
  })
})
