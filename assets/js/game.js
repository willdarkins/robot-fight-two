console.log(Math)

let playerName = window.prompt('What is your player\'s name?')

const playerInfo = {
    name: prompt('What is your robot\'s name?'),
    health: 100,
    attack: 10,
    money: 10
}

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]
enemyHealth = Math.floor(Math.random() * 21) + 40;
let enemyAttack = 12;

const fight = (enemyName) => {
    while (enemyHealth > 0 && playerHealth > 0) {
        let fightPrompt = window.prompt('Would you like to FIGHT or SKIP this battle? Enter \'FIGHT\' or \'SKIP\' to choose.')
        if (fightPrompt === 'FIGHT' || fightPrompt === 'fight') {
            enemyHealth = randomNumber(40, 60);
            window.alert(playerName + ' attacked! ' + enemyName + ' now has ' + enemyHealth + ' health points remaining.')
            playerHealth = Math.max(0, playerHealth - enemyAttack);
            window.alert(enemyName + ' attacked! ' + playerName + ' now has ' + playerHealth + ' health points remaining.')
            if (enemyHealth <= 0) {
                window.alert(enemyName + ' has died! BUUUUUMMER!')
                break;
            } else {
                window.alert(enemyName + ' still has ' + enemyHealth + ' health points remaining.')
            }
            if (playerHealth > 0) {
                window.alert(playerName + ' still has ' + playerHealth + ' health points remaining, and is still alive!')
            } else {
                window.alert(playerName + ' is dead as a fucking door nail! GAME OVER 💀')
                break;
            }
        } else if (fightPrompt === 'SKIP' || fightPrompt === 'skip') {
            let confirmSkip = window.confirm('You sure you want to bitch out?')
            if (confirmSkip) {
                playerMoney = Math.max(0, playerMoney - 10);
                window.alert(playerName + ' proved they are indeed a little bitch, and skipped this fight... pussy... 10 player moneies gone for you! ' + playerName + ' now has ' + playerMoney + ' player money remaining.')
                break;
            } else {
                fight();
            }
        } else {
            window.alert('Please pick a viable option')
            fight()
        }
    }

}

const startGame = () => {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 20;
    for (let i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert('Welcome to Robot Galdiators ' + playerName + '👋... You little bitch! Round ' + (i + 1))
            let pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName)
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                let storeConfirm = window.confirm('The fight is over! Would you like to visit the store before the next round?')
                if (storeConfirm)
                    shop();
            }
        }
        endGame();
    }
    startGame();
}

const endGame = () => {
    window.alert('This game has ended. Let\'s see how you did!')
    if (playerHealth > 0) {
        window.alert('Great job! You survived the game! You now have a score of ' + playerMoney + '.')
    } else {
        window.alert('You\'ve lost your robot in battle, pussy')
    }
    let playAgainConfirm = window.confirm('Would you like to play again?')
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert('Thanks for playing Robot Gladiators! Love You!')
    }
}

const shop = () => {
    let shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerHealth += 20;
                playerMoney += - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerAttack += 6;
                playerMoney += 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case 'leave':
        case 'LEAVE':
            window.alert('Leaving the store...')
            break;
        default:
            window.alert('You didn\'t pick a viable option. Try again.')
            shop();
            break;
    }

}

// function to generate a random numeric value
const randomNumber = (min, max) => {
    const value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

startGame()