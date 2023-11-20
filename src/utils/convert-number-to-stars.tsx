import { Star, StarHalf } from 'phosphor-react'

export function convertNumberToStars(rate: number) {
  const stars = []
  // rate = 3
  // C
  // C
  // C
  // V
  // V
  for (let i = 0; i < 5; i++) {
    if (rate >= i + 1) {
      stars.push(<Star key={i} weight="fill" />)
    } else if (rate > i) {
      stars.push(<StarHalf key={i} weight="fill" />)
    } else {
      stars.push(<Star key={i} weight="thin" />)
    }
  }
  return stars
}
