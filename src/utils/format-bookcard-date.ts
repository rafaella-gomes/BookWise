import dayjs from 'dayjs'

export function formatDate(creationDate: Date) {
  const targetDate = dayjs(creationDate)
  const currentDate = dayjs()

  const daysDifference = currentDate.diff(targetDate, 'day')
  const monthsDifference = currentDate.diff(targetDate, 'month')
  const yearsDifference = currentDate.diff(targetDate, 'year')

  if (yearsDifference > 0) {
    return `Há ${yearsDifference} ano${yearsDifference > 1 ? 's' : ''}`
  } else if (monthsDifference > 0) {
    return `Há ${monthsDifference} mês${monthsDifference > 1 ? 'es' : ''}`
  } else if (daysDifference > 0) {
    return `Há ${daysDifference} dia${daysDifference > 1 ? 's' : ''}`
  } else {
    return 'Hoje'
  }
}
