// ----------------------
// Part 1: Variables & Conditionals
// ----------------------
let userName = "John"; // Variable declaration
let hour = new Date().getHours();
if (hour < 12) {
    document.getElementById("greeting").textContent = `Good morning, ${userName}!`;
} else {
    document.getElementById("greeting").textContent = `Hello, ${userName}!`;
}

// ----------------------
// Part 2: Functions
// ----------------------
function sayHello() {
    alert("Hello there!");
}

function calculateSum() {
    let sum = 5 + 3;
    alert(`The sum is: ${sum}`);
}

// ----------------------
// Part 3: Loops
// ----------------------
function showNumbers() {
    let list = document.getElementById("numberList");
    list.innerHTML = "";
    
    // For loop
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = i;
        list.appendChild(li);
    }

    // While loop example
    let count = 0;
    while (count < 3) {
        console.log("Count is:", count);
        count++;
    }
}

// ----------------------
// Part 4: DOM Interactions
// ----------------------
function updateHeading() {
    let name = document.getElementById("nameInput").value;
    if (name.trim() !== "") {
        document.querySelector("h1").textContent = `Welcome, ${name}!`;
    }
}
