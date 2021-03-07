module.exports = function toReadable(number) {
    let arrZeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

    if (number >= 0 && number < 20) {
        return arrZeroToNineteen[number];
    }

    if (number > 19 && number < 91 && number % 10 == 0) {
        return arrTens[number / 10];
    }

    if (number > 99 && number < 999 && number % 100 == 0) {
        number = number / 100;
        return arrZeroToNineteen[number] + ' ' + arrTens[10];
    }
    else {

        let string = String(number);

        if (string.length == 2) {
            return arrTens[string[0]] + ' ' + arrZeroToNineteen[string[1]];
        }

        if (string[1] == 1) {
            return arrZeroToNineteen[string[0]] + ' ' + arrTens[10] + ' ' + arrZeroToNineteen[string[1] + string[2]];

        } else {
            return arrZeroToNineteen[string[0]] + ' ' + arrTens[10] + ((string[1] == 0) ? '' : ' ' + arrTens[string[1]]) + ((string[2] == 0) ? '' : ' ' + arrZeroToNineteen[string[2]]);
        }
    }
}


