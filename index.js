let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment(){
    count++;
    countEl.innerText = count;    
}

function save(){
    let countStr = count+ " - "
    saveEl.innerText += countStr; // Using textContent to avoid HTML parsing
   // console.log("Saved: " + count);
    
}
////////////////////////////////////////////////////////////////////////

// let welcomeEL= document.getElementById("welcome-el");

// let name = 'Anuj Kumar';
// let greeting = 'Welcome back ';

// welcomeEL.innerText = greeting + name;

// welcomeEL.innerText += "👋";