let a = parseInt(prompt("Podaj pierwszą liczbę:"))
let b = parseInt(prompt("Podaj drugą liczbę:"))
let c = parseInt(prompt("Podaj trzecią liczbę:"))


function nazwana(a) {
    return a * a;
}

const anonimowa = function (b) {
    return b ** 2;
};

const strzalkowa = (c) => c ** 2;


function czyParzysta(a) {
    return a % 2 === 0;
}

const czyDodatnia = function (b) {
    return b > 0;
};

const czyWiekszaOd100 = (c) => c > 100;

let cel = parseInt(prompt("Podaj temeperature w °C :"))

function celsiusToFahrenheit() {
    cel * 9 / 5 + 32
}

let far = parseInt(prompt("Podaj temeperature w °F :"))

const fahrenheitToCelsius = function () {
    (far - 32) * 5 / 9
}

let k = parseInt(prompt("Podaj temeperature w °F :"))
const celsiusToKelvin = () => cel + 273.151

function ocena() {
    switch (punkty) {
        case punkty <= 39:
            alert("niedostateczny")
            break;
        case punkty <= 54:
            alert("dopuszczający")
            break;
        case punkty <= 69:
            alert("dostateczny")
            break;
        case punkty <= 84:
            alert("dobry")
            break;
        case punkty <= 94:
            alert(" bardzo dobry ")
            break;
        case punkty <= 100:
            alert(" celujący ")
            break;
        default:
            wynik = "ERROR";
    }
}