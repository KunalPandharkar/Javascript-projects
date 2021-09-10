let no1 = 0
let no2 = 0

const br = document.createElement("br")
const resultdiv = document.getElementById("prev-result")

function getvalues() {
    no1 = document.getElementById("number1").value
    no2 = document.getElementById("number2").value
}
function appendelement(pcontent){
    const pelement = document.createElement("p")
    pelement.appendChild(pcontent)
    resultdiv.appendChild(pelement)
}
function add() {
    getvalues()
    document.getElementById("result").value = parseInt(no1) + parseInt(no2)
    pcontent = document.createTextNode(`${no1}+${no2}=${parseInt(no1) + parseInt(no2)}`)
    appendelement(pcontent)
}
function minus() {
    getvalues()
    document.getElementById("result").value = parseInt(no1) - parseInt(no2)
    pcontent = document.createTextNode(`${no1}-${no2}=${parseInt(no1) - parseInt(no2)}`)
    appendelement(pcontent)
}
function multiply() {
    getvalues()
    document.getElementById("result").value = parseInt(no1) * parseInt(no2)
    pcontent = document.createTextNode(`${no1}x${no2}=${parseInt(no1) * parseInt(no2)}`)
    appendelement(pcontent)
}
function divide() {
    getvalues()
    document.getElementById("result").value = parseInt(no1) / parseInt(no2)
    pcontent = document.createTextNode(`${no1}/${no2}=${parseInt(no1) / parseInt(no2)}`)
    appendelement(pcontent)
}