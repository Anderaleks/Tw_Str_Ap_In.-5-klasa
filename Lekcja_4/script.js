let liczby = [2, 3, 24, 53, -6, 79, 81, -9, 10];
let suma = 0;
let ilosc = 0;

function sum(liczby) {
    for (let i = 0; i < liczby.length; i++) {
        suma += liczby[i]
    }
    console.log(suma + " - suma elementów")
}

function max(liczby) {
    console.log(Math.max(...liczby) + " - największy element")
}

function min(liczby) {
    console.log(Math.min(...liczby) + " - najmniejszy element")
}

function parzysta(liczby) {
    
    for (let i = 0; i < liczby.length; i++) {
        if (liczby[i] % 2 === 0) {
            for (let dzielnik = 1; dzielnik <= liczby[i]; dzielnik++) {
                if (liczby[i] % dzielnik === 0) {
                    console.log(liczby[i] + " - ta liczba jest parzysta, a jej dzielnik to " + dzielnik)
                }
                // Deithwen Addan yn Carn aep Morvudd
                // znasz tłumaczenie wyśli na noob@zsi.kielce.pl
            } 
        }
    }
}

function dodatnie(liczby) {
    for (let i =0; i<liczby.length; i++){
        if(liczby[i] >= 0){
            ilosc++
        }
    }
    console.log(ilosc + " - ilość liczb dodatnich")
}



sum(liczby)
max(liczby)
min(liczby)
parzysta(liczby)
dodatnie(liczby)