let cards = document.querySelectorAll(".card");
const btn = document.querySelector(".btn");

let saldo = 0;
let saldoHandler = document.querySelector(".cash");

const add100 = document.querySelector("#add100");
const add500 = document.querySelector("#add500");
const add1000 = document.querySelector("#add1000");

add100.addEventListener("click", () => { saldo += 100; saldoHandler.textContent = saldo; });
add500.addEventListener("click", () => { saldo += 500; saldoHandler.textContent = saldo; });
add1000.addEventListener("click", () => { saldo += 1000; saldoHandler.textContent = saldo; });

const emojiToNumber = { "🍒": "1", "🍋": "2", "🍊": "3", "🍇": "4", "🍉": "5", "🔔": "6", "💎": "7", "👑": "8", "🍀": "9", "7️⃣": "10" };
const emojis = Object.keys(emojiToNumber);

saldoHandler.textContent += saldo;

btn.addEventListener("click", () => {
    if (saldo >= 100) {
        saldo -= 100
        saldoHandler.textContent = saldo;
        cards.forEach(card => {
            card.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            card.style.backgroundColor = ""

        })
        for (let i = 0; i < cards.length; i++) {
            let counter = 0;
            for (let j = 0; j < cards.length; j++) {
                if (cards[i].textContent === cards[j].textContent) {
                    counter++
                }
            }
            if (counter >= 3) {
                switch (cards[i].textContent) {
                    case "🍒":
                        saldo += 100
                        saldoHandler.textContent = saldo;
                        break
                    case "🍋":
                        saldo += 200
                        saldoHandler.textContent = saldo;
                        break
                    case "🍊":
                        saldo += 300
                        saldoHandler.textContent = saldo;
                        break
                    case "🍇":
                        saldo += 400
                        saldoHandler.textContent = saldo;
                        break
                    case "🍉":
                        saldo += 500
                        saldoHandler.textContent = saldo;
                        break
                    case "🔔":
                        saldo += 600
                        saldoHandler.textContent = saldo;
                        break
                    case "💎":
                        saldo += 700
                        saldoHandler.textContent = saldo;
                        break
                    case "👑":
                        saldo += 800
                        saldoHandler.textContent = saldo;
                        break
                    case "🍀":
                        saldo += 900
                        saldoHandler.textContent = saldo;
                        break
                    case "7️⃣":
                        saldo += 1000
                        saldoHandler.textContent = saldo;
                        break
                }
                cards[i].style.backgroundColor = "goldenrod";
            }
        }
    } else {
        alert("Wpłać przynajmniej 100!")
    }

})

