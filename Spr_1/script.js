let pizza = ["salami", "capri", "pieczarka", "4sery"];

let cena = [45,34,59,41];

let zamowienia =[];

let zamowienie = prompt("Wybierz pizzę:\n1. salami \n2. capri \n3. pieczarka \n4. 4sery \n lub wpisz QUIT aby wyjść"); 

zamowienia.push(zamowienie)

while(zamowienie != "QUIT"){
    zamowienie = prompt("Wybierz pizzę:\n1. salami \n2. capri \n3. pieczarka \n4. 4sery \n lub wpisz QUIT aby wyjść"); 
    if(zamowienie == "QUIT"){
        continue
    }
    zamowienia.push(zamowienie)
    alert(zamowienia)
}




let rabat = prompt("Wpisz kod rabtowy");

let sum = 0 

function koszyk(){
    for(let i=0; i<zamowienia.length; i++){
        if(zamowienia[i] === "salami"){
            sum += 45
        } else if(zamowienia[i] === "capri"){
            sum += 34
        } else if(zamowienia[i] === "pieczarka"){
            sum += 59
        } else if(zamowienia[i] === "4sery"){
            sum += 41
        } 
   } 

}



function suma(){
    if(rabat === "PizzaRabat26"){
        if (koszyk.length === 3){
            sum = sum * 0.8
        } 
    }
}


koszyk()
suma()
