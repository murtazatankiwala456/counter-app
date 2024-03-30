const h1 = document.querySelector("h1");
const increment = document.querySelector("#increment"); //grab all the required dom object in variable
const decrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");
const counterInput = document.querySelector("#counter-input");

let counter = 0; //grab value in counter var and set it to zero

increment.addEventListener("click", increase); //add eventListener to increase,decrease and reser button
decrement.addEventListener("click", decrease);
reset.addEventListener("click", resetCounter);

function increase() {
  const counterInputValue = parseInt(counterInput.value); // grab the value of input and change it to number
  counter += counterInputValue; //increase value od counter according to input value
  h1.textContent = counter; //render updated value in h1
}

function decrease() {
  const counterInputValue = parseInt(counterInput.value); // grab the value of input and change it to number
  counter -= counterInputValue; //decrease value od counter according to input value
  h1.textContent = counter; //render updated value in h1
}

function resetCounter() {
  counter = 0; // set counter value again to zero
  h1.textContent = counter; //render updated value in h1
  counterInput.value = 1; // reser input value to 1
}
