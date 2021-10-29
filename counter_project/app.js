let currentCounter = document.getElementById("counter_value");
let currentCounterValue = Number(currentCounter.innerHTML);



function increment(){
    currentCounter.innerHTML = ++currentCounterValue;

    let currentColor = currentCounterValue < 0 ? "red" : currentCounterValue > 0 ? "green" : "black";
    console.log(currentColor);

    currentCounter.style.color = currentColor;
}

function decrement(){
    currentCounter.innerHTML = --currentCounterValue;

    let currentColor = currentCounterValue < 0 ? "red" : currentCounterValue > 0 ? "green" : "black";
    console.log(currentColor);

    currentCounter.style.color = currentColor;
}

