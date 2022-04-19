export const validateCreditCardDate = (value: string) => {
  if (value.length !== 5) {
    return 'Invalid pattern, please MM/YY'
  }
  const [month, year] = value.split('/');
  if (Number(month) > 12) {
    return 'Invalid month'
  }
  if (Number(year) > 2022) {
    return 'Invalid year'
  }
  return true
}