// turn a string of 24hrs into words

const hour = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
const tens = ["oh","ten","twenty","thirty","fourty","fifty"]

const timeToWords = function(num){
    let hourWord = "", minuteWord = "", suffix = "";
    let [hours, minutes] = num.split(':').map((num) => parseInt(num));

    suffix = ["am","pm"][Math.trunc(hours / 12)];
    hours %= 12;
    minuteWord = "o'clock"

    if (!minutes){
        if(!hours) {
            return suffix == "am" ? "midnight" : "noon";
        }
    } else {
        if (minutes < 10 || minutes >= 20) {
            minuteWord = tens[Math.trunc(minutes / 10)];
            minutes %= 10;
            if (minutes){
                minuteWord += ' ' + hour[minutes - 1];
            }
        } else {
            minuteWord = hour[minutes - 1];
        }
    }
    hourWord = hour[hours - 1] || hour[11];
    return `${hourWord} ${minuteWord} ${suffix}`;
}

const testCases = [
    '00:00',
    '00:12',
    '01:00',
    '06:01',
    '06:18',
    '06:30',
    '10:34',
    '12:00',
    '12:09',
    '23:23'
];

testCases.forEach((testCase) => {
    console.log(`${testCase} = ${timeToWords(testCase)}`);
});