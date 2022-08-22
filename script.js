let incrementEl = document.getElementById("increment");
let decrementEl = document.getElementById("decrement");
let increment2El = document.getElementById("increment2");
let decrement2El = document.getElementById("decrement2");
let counter = document.getElementById('counter')
let counter2 = document.getElementById('counter2')

let count = parseInt(counter.innerText);

incrementEl.addEventListener('click', ()=>{

    count++;

  counter.innerText = count;

});

decrementEl.addEventListener('click', ()=>{
    count--;
    counter.innerText = count;
})