let game = true;
while (game) {
    if (confirm(`Do you want to play a game?`)) {
        let first = 100;
        let second = 50;
        let third = 25;
        let loose = 0;
        let winner = 0;
        let range = 9;
        let rand;
        let level = 1;
        let numberPocket, currentAttempht;
        while (game) {
            rand = parseInt(Math.random() * range);
            for (let i = 3; i >= 0; i--) {
                if (i === 3) {
                    currentAttempht = first;
                } 
                if (i === 2) {
                    currentAttempht = second;
                } 
                if (i === 1) {
                    currentAttempht = third;
                } 
                let strAttemphtLeft = `Attempts left: ${i}`;
                let strTotalPrice = `Total price: ${winner}$`;
                let strPossiblePrice = `Possible price on current attempth: ${currentAttempht * level}$`;
                numberPocket = +prompt(`Choose a roulette pocket number from 0 to ${range - 1}
${strAttemphtLeft}
${strTotalPrice}
${strPossiblePrice}`);
                if (numberPocket === rand) {
                    if (confirm(`Congratulation, you won! Your prize is: ${winner += currentAttempht * level}$. Do you want to continue?`)) {
                        range += 4;
                        level++;
                        game = true;
                        break;
                    } else {
                        alert(`Thank you for your participation. Your prize is: ${winner}$`);
                        game = false;
                        break;
                    }
                } else if (i === 1) {
                    alert(`Thank you for your participation. Your prize is ${loose}$`);
                    if (confirm('You wants to play again?')) {
                        level = 1;
                        range = 9;
                        winner = 0;
                        break;
                    } else {
                        game = false;
                        break;
                    }
                }
            }
        }
    } else {
        alert(`You did not become a billionaire, but can.`);
        game = false;
        break;
    }
}
