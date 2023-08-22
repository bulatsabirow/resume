export function defineRussianWordEnding(choice, choicesLength, orgRule) {
    switch (choice) {
        case (choice % 20) === 1:
            return 1;
        case (choice % 20 <= 4):
            return 2;
        default:
            return 3;
    }
}

export function defineEnglishWordEnding(choice, choicesLength, orgRule) {
    switch (choice) {
        case 1:
            return 1;
        default:
            return 2;
    }
}
