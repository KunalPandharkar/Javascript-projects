
let numbers = []
var numbersequence = null
let isnotjolly = null

function jollyornot() {

    numbersequence = document.getElementById("sequence").value
    numbers = numbersequence.split(' ');
    for (let i = 0; i < numbers.length - 1; i++) {

        if (parseInt(numbers[i]) - parseInt(numbers[i + 1]) === 3 || parseInt(numbers[i]) - parseInt(numbers[i + 1]) === -3) {
            continue;
        }
        if (parseInt(numbers[i]) - parseInt(numbers[i + 1]) === 2 || parseInt(numbers[i]) - parseInt(numbers[i + 2]) === -2) {
            continue;
        }
        if (parseInt(numbers[i]) - parseInt(numbers[i + 1]) === 1 || parseInt(numbers[i]) - parseInt(numbers[i + 1]) === -1) {
            continue;
        }
        isnotjolly = 1
    }

    if (isnotjolly) {
        document.getElementById("output").value = "Above Sequence is not Jolly"
        isnotjolly=null
    }else{
        document.getElementById("output").value = "Above Sequence is Jolly"
    }

}