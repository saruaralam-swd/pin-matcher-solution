//get random number from this function
function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

// get random 4 digit fixed number from this function
function getPin() {
  const pin = generatePin();
  const pinString = pin + '';

  if (pinString.length === 4) {
    return pin;
  }
  else {
    // console.log('pin not 3 digit found', pin)
    return getPin();
  }
}

// generate button 
document.getElementById('generate-btn').addEventListener('click', function () {
  const pin = getPin();
  const displayPin = document.getElementById('generate-field');
  displayPin.value = pin;

  const correctPin = document.getElementById('correct-pin');
  const incorrectPin = document.getElementById('incorrect-pin');
  correctPin.style.display = 'none';
  incorrectPin.style.display = 'none';
});

// id: calculator calc-input-field
document.getElementById('calculator').addEventListener('click', function (event) {
  const clickBtn = event.target.innerText;
  const calcInputFieldElement = document.getElementById('calc-input-field');
  const preNum = calcInputFieldElement.value;

  if (isNaN(clickBtn)) {
    if (clickBtn === "C") {
      calcInputFieldElement.value = '';
    }
    else if (clickBtn === "<") {
      const holeNum = calcInputFieldElement.value;
      const removeLastNum = holeNum.slice(0, holeNum.length-1);
      calcInputFieldElement.value = removeLastNum;
    }
  }
  else {
    // const preNum = calcInputFieldElement.value;
    const newNum = preNum + clickBtn;
    calcInputFieldElement.value = newNum;
  }
});

// submit event handler 
document.getElementById('submit').addEventListener('click', function() {
  const generateFieldNumber = document.getElementById('generate-field').value;
  const calcInputFieldNumber = document.getElementById('calc-input-field').value;
  
  const correctPin = document.getElementById('correct-pin');
  const incorrectPin = document.getElementById('incorrect-pin');

  // incorrect-pin, correct-pin
  if (generateFieldNumber === calcInputFieldNumber) {
    correctPin.style.display = 'block'; // show
    incorrectPin.style.display = 'none'; // hide
  }
  else{
    incorrectPin.style.display = 'block' // show
    correctPin.style.display = 'none'; // hide
  }
});


// removed last number ways: 
// option 1
// let x = "Bang";
// console.log(x.slice(0, x.length-1));

// option 2
// const a = "ABC";
// const array = a.split('');
// array.pop();
// console.log(array.join(''));