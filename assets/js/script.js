let count = 0;
let disp = document.getElementById("counter-number");

const incrementFunction = () => {
    count++;
    disp.innerHTML = count;
    console.log(`increment logged!`)
}

const decrementFunction = () => {
    count--;
    disp.innerHTML = count;
    console.log(`decrement logged!`)
}