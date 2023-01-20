export default function convertHourMin (hour: string) {
  const [hours, min] = hour.split(':').map(Number)

  const minAmount = hours * 60 + min
  return minAmount
}