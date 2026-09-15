let tasks = [];

let task = prompt("Podaj zadanie lub wpisz QUIT aby wyjść")
tasks.push(task)

while(task != "QUIT"){
    task = prompt("Podaj zadanie lub wpisz QUIT aby wyjść")
    if(task == "QUIT"){
        continue
    }
    tasks.push(task)
    alert(tasks)
}

console.log(tasks)

let showMyTasks = ''

for(let i=0; i<tasks.length; i++){
     showMyTasks += (i+1) + "." + tasks[i]+"\n"
}

alert("Moje zadania:+\n" + showMyTasks)