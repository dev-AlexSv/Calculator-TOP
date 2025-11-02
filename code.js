function add(num1, num2) {
    return num1 + num2;
}

function subract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator, string) {
    
}

const digits = document.querySelector(".digits");
const actions = document.querySelector(".actions");
const displayInput = document.querySelector(".display-input")

digits.addEventListener('click', (event) => {
  // Check if the clicked element is a direct child of the parent
  if (event.target.parentNode === digits) {
    console.log(`Clicked on a direct child: ${event.target.textContent}`);
    // Perform actions based on the specific child (e.g., using event.target.id or classList)
    switch (event.target.textContent) {
        case '0':
            
            break;
        case '1':
            alert("You entered one.");
            break;
        case '2':
            alert("You entered two.");
            break;
        case '3':
            alert("You entered three.");
            break;
        case '4':
            alert("You entered four.");
            break;
        case '5':
            alert("You entered five.");
            break;
        case '6':
            alert("You entered six.");
            break;
        case '7':
            alert("You entered seven.");
            break;
        case '8':
            alert("You entered eight.");
            break;
        case '9':
            alert("You entered nine.");
            break;
        default:
            alert("Not a valid digit character.");         
    }
  }
});

actions.addEventListener('click', (event) => {
  // Check if the clicked element is a direct child of the parent
  if (event.target.parentNode === actions) {
    console.log(`Clicked on a direct child: ${event.target.textContent}`);
    // Perform actions based on the specific child (e.g., using event.target.id or classList)
  }
});