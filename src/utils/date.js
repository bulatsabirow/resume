import dayjs from 'dayjs'

export const computeAge = (birthDate) => {
  return dayjs().diff(birthDate, 'year')
}
