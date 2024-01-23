export function defineRussianWordEnding(choice) {
  switch (choice) {
    case choice % 20 === 1:
      return 1
    case choice % 20 <= 4:
      return 2
    default:
      return 3
  }
}

export function defineEnglishWordEnding(choice) {
  return choice === 1 ? 1 : 2
}
