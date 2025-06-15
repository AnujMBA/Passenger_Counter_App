let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment(){
    count++;
    countEl.textContent = count;    
}

function save(){
    let countStr = count+ " - "
    saveEl.textContent += countStr; 
    countEl.textContent = 0; // Reset count display
    count = 0; // Reset count variable
    
}
