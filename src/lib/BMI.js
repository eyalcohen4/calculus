export default function bmiCalculator(height, weight) {
  return parseInt(weight / (height ** 2), 10);
}

