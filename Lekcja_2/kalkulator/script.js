let a = parseInt(prompt("Podaj pierwszą liczbę:"))
let działanie = prompt("Wybierz działanie:\n1. Dodawanie (+)\n2. Odejmowanie (-)\n3. Mnożenie (*)\n4. Dzielenie (/)\n5. Modulo (%)");
let b = parseInt(prompt("Podaj drugą liczbę:"))
let wynik;

function dodaj(a, b) {
    return a + b;
}

function odejmuj(a, b) {
    return a - b;
}

function mnoz(a, b) {
    return a * b;
}

function dziel(a, b) {
    if (b === 0) {
        alert("Pamiętaj, cholero, nie dziel przez zero")
    } else {
        return a / b;
    }
}

function mod(a, b) {
    if (b === 0) {
        alert("Pamiętaj, cholero, nie dziel przez zero")
    } else {
        return a % b;
    }
}

switch (działanie) {
    case '+':
        wynik = dodaj(a, b);
        break;
    case '-':
        wynik = odejmuj(a, b);
        break;
    case '*':
        wynik = mnoz(a, b);
        break;
    case '/':
        wynik = dziel(a, b);
        break;
    case '%':
        wynik = mod(a, b);
        break;
    default:
        wynik = "ERROR";
}

alert(wynik)
