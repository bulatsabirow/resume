export function defineRussianWordEnding(choice) {
  choice %= 100

  if (choice < 5) {
    return 2
  } else if (choice < 21) {
    return 3
  } else {
    const remainder = choice % 10

    switch (remainder) {
      case 0:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        return 3

      case 1:
        return 1

      default:
        return 2
    }
  }
}

export function defineEnglishWordEnding(choice) {
  return choice === 1 ? 1 : 2
}
