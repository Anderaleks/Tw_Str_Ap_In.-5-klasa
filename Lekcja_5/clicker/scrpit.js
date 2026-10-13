
let points = 0;
function clicker(){
    points++
    if(points === 1){
       document.getElementById("counter").textContent =  `You have got ${points} point`
    }else{
        document.getElementById("counter").textContent =  `You have got ${points} points`
    }
}

function double(){
    points += 10
    document.getElementById("counter").textContent =  `You have got ${points} points`
}