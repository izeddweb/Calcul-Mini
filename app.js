
// Task

// set var
let inputOne = document.querySelector(".input1");
let inputTwo = document.querySelector(".input2");
const myBtnOne = document.querySelector(".btn1");
const myBtnTwo = document.querySelector(".btn2");
const mySpnOne = document.querySelector(".sp1");
const mySpnTwo = document.querySelector(".sp2");
const paragraphe = document.querySelector(".para")

let rslt = 0;
function multiply () {
    let valueOne = inputOne.value;
    let valueTwo = inputTwo.value;
    if ( Number.isInteger(+valueOne) && Number.isInteger(+valueTwo)) {
        rslt = valueOne * valueTwo
        paragraphe.innerHTML = rslt
        mySpnOne.style.backgroundColor= 'green'
    }else {
        rslt = 'not accepted'
        paragraphe.innerHTML = rslt
        mySpnOne.style.backgroundColor= 'red'
    }
}
function Divide () {
    let valueOne = inputOne.value;
    let valueTwo = inputTwo.value;
    if ( Number.isInteger(+valueOne) && Number.isInteger(+valueTwo)) {
        rslt = valueOne / valueTwo
        paragraphe.innerHTML = rslt
        mySpnTwo.style.backgroundColor= 'green'
    }else {
        rslt = 'not accepted'
        paragraphe.innerHTML = rslt
        mySpnTwo.style.backgroundColor= 'red'
    }
}

myBtnOne.addEventListener('click',multiply)
myBtnTwo.addEventListener('click',Divide)
