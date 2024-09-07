module.exports = function toReadable(number) {

    let result = ''
    const numberToString = number.toString();

    const dataNumbersTexts = {
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
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }

    const dataTenthsNumbers = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }

    const dataHundredthsNumbers = {
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred'
    }


    const getNumbers = (value) => {
        for (key in dataNumbersTexts) {
            if (key === value) return dataNumbersTexts[key];
        }

        return getTwoNumbers(value);
    }

    const getTwoNumbers = (value) => {

        for (key in dataTenthsNumbers) {
            if (key === value) return dataTenthsNumbers[key];
        }

        return getTransformTwoNumbers(value);
    }


    const getTransformTwoNumbers = (value) => {
        if (value[0] === '0') {
            return getNumbers(value.slice(1));
        } else {
            return `${getTwoNumbers(`${value[0]}0`)} ${getNumbers(value.slice(1))}`;
        }
    }

    const getTransformThreeNumbers = (value) =>
        `${getThreeNumbers(`${value[0]}00`)} ${getNumbers(value.slice(1))}`;


    const getThreeNumbers = (value) => {

        for (key in dataHundredthsNumbers) {
            if (key === value) return dataHundredthsNumbers[key];
        }

        return getTransformThreeNumbers(value);
    }


    switch (numberToString.length) {
        case 1:
            result = getNumbers(numberToString);
            break;
        case 2:
            result = getNumbers(numberToString);
            break;
        case 3:
            result = getThreeNumbers(numberToString);
    }


    return result;
}