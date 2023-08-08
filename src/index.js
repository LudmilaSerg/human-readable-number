module.exports = function toReadable (number) {
  const arrOnes = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arrTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) return 'zero';

    const thousands = Math.floor(number / 1000);
    number %= 1000;

    const hundreds = Math.floor(number / 100);
    number %= 100;


    let resultPart = "";

    if (thousands > 0) resultPart += arrOnes[thousands] + " thousand ";
    if (hundreds > 0) resultPart += arrOnes[hundreds] + " hundred ";
    if (number < 20) {
        resultPart += arrOnes[number];
      } else {
        resultPart += arrTens[Math.floor(number / 10)];

        if (number % 10 > 0) {

            resultPart += " " + arrOnes[number % 10];
        }
      }

    return resultPart.trim();



}
