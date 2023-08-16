export function defineWordEnding(number) {
    switch (number) {
        case (number % 20) === 1:
            return "год";
        case (number % 20 <= 4):
            return "года";
        default:
            return "лет";
    }
}
