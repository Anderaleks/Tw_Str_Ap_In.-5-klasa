let a = parseInt(prompt("Podaj pierwszą liczbę:"))
let b = parseInt(prompt("Podaj drugą liczbę:"))
let c = parseInt(prompt("Podaj trzecią liczbę:"))


function suma(a,b) {
    console.log( a + b);
}

function podstawy(a, b) {
    console.log( a - b); 
    console.log( a * b); 
    if (b === 0) {
        alert("Pamiętaj, cholero, nie dziel przez zero")
    } else {
        console.log( a / b); 
    }
}

function max(a,b,c){
    console.log(Math.max(a,b,c))
}

let height = parseInt(prompt("Podaj swój wzrost:"));
let weight = parseInt(prompt("Podaj swoją wagę:"));

function Wzrost() {
    if (height < 150) {
        console.log("niski");
    } else if (height > 180) {
        console.log("wysoki");
    } else {
        console.log("średni");
    }
}

function BMI(weight, height) {
    const bmi = weight / (height ** 2);
    
    if (bmi < 18.5) {
        console.log('za mało');
    } else if (bmi > 25) {
        console.log('za dużo');
    } else {
        console.log('OK!');
    }
}
suma(a,b)
podstawy(a,b)
max(a,b,c)
Wzrost()
BMI()