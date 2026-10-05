let a = parseInt(prompt("Podaj pierwszą liczbę:"))
let b = parseInt(prompt("Podaj drugą liczbę:"))
let c = parseInt(prompt("Podaj trzecią liczbę:"))


function suma(a, b) {
    console.log("Suma " + (a + b));
}

function podstawy(a, b) {
    console.log("Różnica " + (a - b));
    console.log("Iloczyn " + a * b);
    if (b === 0) {
        alert("Pamiętaj, cholero, nie dziel przez zero")
    } else {
        console.log("Iloraz " + a / b);
    }
}

function max(a, b, c) {
    console.log("Największa liczba z podanych to: " + Math.max(a, b, c))
}

let height = parseInt(prompt("Podaj swój wzrost:"));
let weight = parseInt(prompt("Podaj swoją wagę:"));

function Wzrost(height) {
    if (height < 150) {
        console.log("Niski");
    } else if (height > 180) {
        console.log("Wysoki");
    } else {
        console.log("Średni");
    }
}

function BMI(weight, height) {
    let bmi = weight / ((height / 100) ** 2);

    if (bmi < 18.5) {
        console.log('Za mało');
    } else if (bmi > 25) {
        console.log('Za dużo');
    } else {
        console.log('OK!');
    }
}

let age1 = parseInt(prompt("Podaj 1. rok urodzenia:"));
let age2 = parseInt(prompt("Podaj 2. rok urodzenia:"));

function starszy(age1, age2) {
    if (age1 < age2) {
        console.log("Starsza jest osoba z " + age1 + " roku");
    } else if (age2 < age1) {
        console.log("Starsza jest osoba z " + age2+ " roku");
    }

}

let rok = parseInt(prompt("Podaj rok:"));

/*
Notatka dla samego siebie 
Rok musi być podzielny przez 4.
Jeśli jest podzielny przez 100, to nie jest przestępny 
Wyjątkiem od powyższego są lata podzielne przez 400
*/

function przestepny(rok) {
    if ((rok % 4 === 0 && rok % 100 !== 0) || rok % 400 === 0) {
        console.log(rok + " rok jest przestępny");
    } else {
        console.log(rok + " rok jest nieprzestępny");
    }
}

let haslo = prompt("Podaj hasło:");

function siła(haslo) {
    switch (true) {
        case haslo.length < 4:
            console.log("hasło słabe");
            break
        case haslo.length < 8:
            console.log("hasło średnie");
            break
        case haslo.length >= 8:
             console.log("hasło mocne");
             break
    }
    
}


function trojakt(a, b, c) {
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        console.log("Z liczb " + a + ", " + b + ", " + c + " da się utworzyć trójkąt");
    } else {
        console.log("Z liczb " + a + ", " + b + ", " + c + " nie da się utworzyć trójkąta");
    }
}
let tekst = prompt("Wpisz tekst do zaszyfrowania")

/* notatka dla samego siebie
// 'x' (23+2) % 26 = 25 -> 'z'
// 'y' (24+2) % 26 = 0  -> 'a'
// 'z' (25+2) % 26 = 1  -> 'b'
*/
function szyfr(tekst) {
    
    const alfabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let wynik = "";

    for (let litera of tekst) {
        for (let i = 0; i < 26; i++) {
            if (alfabet[i] === litera) {
                
                let nowaPozycja = (i + 2) % 26;
                wynik += alfabet[nowaPozycja];
                
            }
        }
    }

    console.log("Zaszyfrowany tekst: " + wynik);
}


suma(a, b)
podstawy(a, b)
max(a, b, c)
Wzrost(height)
BMI(weight, height)
starszy(age1, age2)
przestepny(rok)
siła(haslo)
trojakt(a, b, c)
szyfr(tekst)