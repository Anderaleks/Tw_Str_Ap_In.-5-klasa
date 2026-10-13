document.getElementById('first').style.background = 'lightblue'

document.getElementById('second').style.background = 'pink'

document.getElementById('third').style.background = 'lightsalmon'

document.getElementById('forth').style.background = 'gray'

let cards = document.querySelectorAll('.kontener > div');

for(let i = 0; i<cards.length; i++){
    cards[i].textContent = `To jest karta numer ${i+1}`;
}
let liczba = 0;
function clicker(){
    liczba++
    console.log("To jest " + liczba  +  ". kliknięcie")
}