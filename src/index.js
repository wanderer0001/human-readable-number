module.exports = function toReadable(number) {
    function getEndWords(number) {

        if (number >= 13 && number <= 19) {
            if (number == 13) return 'thir' + 'teen';
            if (number == 15) return 'fif' + 'teen';
            if (number == 18) return 'eigh' + 'teen';
            return Numbers[numberToArray[2]] + 'teen';
        }

        // Add ty
        if (number >= 20 && number <= 99) {
            if (number == 20) return 'twenty';
            if (number == 30) return 'thirty';
            if (number == 40) return 'forty';
            if (number == 50) return 'fifty';
            if (number == 60) return 'sixty';
            if (number == 70) return 'seventy';
            if (number == 80) return 'eighty';
            if (number == 90) return 'ninety';
            if (number > 20 && number < 30) return 'twen' + 'ty '
            if (number >= 30 && number < 40) return 'thir' + 'ty '
            if (number >= 40 && number < 50) return 'for' + 'ty '
            if (number >= 50 && number < 60) return 'fif' + 'ty '
            if (number >= 80 && number < 90) return 'eigh' + 'ty '

            return Numbers[numberToArray[1]] + 'ty '
        }

        return Numbers[number];
    }

    const Numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
    }

    // For check sum numbers
    const numberToArray = String(number).split('');

    // Add teen
    if (number >= 13 && number <= 19) {
        if (number == 13) return 'thir' + 'teen';
        if (number == 15) return 'fif' + 'teen';
        if (number == 18) return 'eigh' + 'teen';
        return Numbers[numberToArray[1]] + 'teen';
    }

    // Add ty
    if (number >= 20 && number <= 99) {
        if (number == 20) return 'twenty';
        if (number == 30) return 'thirty';
        if (number == 40) return 'forty';
        if (number == 50) return 'fifty';
        if (number == 80) return 'eighty';
        if (number > 20 && number < 30) return 'twen' + 'ty ' + Numbers[numberToArray[1]];
        if (number >= 30 && number < 40) return 'thir' + 'ty ' + Numbers[numberToArray[1]];
        if (number >= 40 && number < 50) return 'for' + 'ty ' + Numbers[numberToArray[1]];
        if (number >= 50 && number < 60) return 'fif' + 'ty ' + Numbers[numberToArray[1]];
        if (number >= 80 && number < 90) return 'eigh' + 'ty ' + Numbers[numberToArray[1]];
        if (numberToArray[1] == '0') {
            return Numbers[numberToArray[0]] + 'ty'
        }
        return Numbers[numberToArray[0]] + 'ty ' + Numbers[numberToArray[1]]

    }

    // Add hundred
    if (numberToArray.length > 2) {
        if (numberToArray[1] == '0' && numberToArray[2] == '0') {
            return Numbers[numberToArray[0]] + ' hundred'
        }

        if (numberToArray.slice(1).join('') >= 1 && numberToArray.slice(1).join('') <= 9) return Numbers[numberToArray[0]] + ' hundred ' + getEndWords(numberToArray.slice(2).join(''));
        if (numberToArray.slice(1).join('') <= 13 && numberToArray.slice(1).join('') < 19) return Numbers[numberToArray[0]] + ' hundred ' + getEndWords(numberToArray.slice(1).join(''));
        if (numberToArray.slice(1).join('') <= 19) return Numbers[numberToArray[0]] + ' hundred ' + getEndWords(numberToArray.slice(1).join(''));

        return Numbers[numberToArray[2]] == 'zero' ? Numbers[numberToArray[0]] + ' hundred ' + getEndWords(numberToArray.slice(1).join('')) : Numbers[numberToArray[0]] + ' hundred ' + getEndWords(numberToArray.slice(1).join('')) + Numbers[numberToArray[2]];
    }

    return Numbers[number];

}

console.log(module.exports(900));

