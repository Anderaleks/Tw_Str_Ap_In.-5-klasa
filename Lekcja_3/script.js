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
    return (a % 2 === 0) ? "Tak" : "Nie";
}

function czyPierwsza(a) {
    return (a % a === 0 && a % 1 === 0 && a > 1) ? "Tak" : "Nie";
}

const czyDodatnia = function (b) {
    return (b > 0) ? "Tak" : "Nie";
};


const czyWiekszaOd100 = (c) => (c > 100) ? "Tak" : "Nie";;

alert(
    "ZAD 1 KWADRATY LICZB:\n" +
    "Funkcja nazwana: " + nazwana(a) + "\n" +
    "Funkcja anonimowa: " + anonimowa(b) + "\n" +
    "Funkcja strzałkowa: " + strzalkowa(c)
);

alert(
    "ZAD 2 LICZBY:\n" +
    "Czy liczba " + a + " jest parzysta? " + czyParzysta(a) + "\n" +
    "Czy liczba " + a + " jest pierwsza? " + czyPierwsza(a) + "\n" +
    "Czy liczba " + b + " jest dodatnia? " + czyDodatnia(b) + "\n" +
    "Czy liczba " + c + " jest większa od 100? " + czyWiekszaOd100(c)

);


let cel = parseInt(prompt("Podaj temeperature w °C :"))
let far = parseInt(prompt("Podaj temeperature w °F :"))

function celsiusToFahrenheit() {
    return cel * 9 / 5 + 32
}

const fahrenheitToCelsius = function () {
    return (far - 32) * 5 / 9
}

const celsiusToKelvin = () => cel + 273.151

alert(
    "ZAD 3 PZELICZANIE TEMPERATUR:\n" +
    cel + "°C = " + celsiusToFahrenheit(cel) + "°F\n" +
    far + "°F = " + fahrenheitToCelsius(far) + "°C\n" +
    cel + "°C = " + celsiusToKelvin(cel) + " K"
);


let punkty = parseInt(prompt("Podaj liczbę punktów od 0 do 100:"));


function ocena(punkty) {
    switch (true) {
        case punkty <= 39:
            return "niedostateczny";
        case punkty <= 54:
            return "dopuszczający";
        case punkty <= 69:
            return "dostateczny";
        case punkty <= 84:
            return "dobry";
        case punkty <= 94:
            return "bardzo dobry";
        case punkty <= 100:
            return "celujący";
        default:
            wynik = "ERROR";
    }
}

const czyZdane = (punkty) => (punkty >= 40) ? "Tak" : "Nie";

alert(
    "ZAD 4 OCENA:\n" +
    "Liczba punktów: " + punkty + "\n" +
    "Ocena: " + ocena(punkty) + "\n" +
    "Czy zdane? " + czyZdane(punkty)
);