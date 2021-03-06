const fight = (enemy) => {
    while (enemy.health > 0 && playerInfo.health > 0) {
        let fightPrompt = window.prompt('Would you like to FIGHT or SKIP this battle? Enter \'FIGHT\' or \'SKIP\' to choose.')
        if (fightPrompt === 'FIGHT' || fightPrompt === 'fight') {
            enemy.health = randomNumber(40, 60);
            window.alert(playerInfo.name + ' attacked! ' + enemy.name + ' now has ' + enemy.health + ' health points remaining.')
            playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
            window.alert(enemy.name + ' attacked! ' + playerInfo.name + ' now has ' + playerInfo.health + ' health points remaining.')
            if (enemy.health <= 0) {
                window.alert(enemy.name + ' has died! BUUUUUMMER!')
                break;
            } else {
                window.alert(enemy.name + ' still has ' + enemy.health + ' health points remaining.')
            }
            if (playerInfo.health > 0) {
                window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health points remaining, and is still alive!')
            } else {
                window.alert(playerInfo.name + ' is dead as a fucking door nail! GAME OVER 💀')
                break;
            }
        } else if (fightPrompt === 'SKIP' || fightPrompt === 'skip') {
            let confirmSkip = window.confirm('You sure you want to bitch out?')
            if (confirmSkip) {
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                window.alert(playerInfo.name + ' proved they are indeed a little bitch, and skipped this fight... pussy... 10 player moneies gone for you! ' + playerInfo.name + ' now has ' + playerMoney + ' player money remaining.')
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
    playerInfo.reset();
    for (let i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert('Welcome to Robot Galdiators ' + playerInfo.name + '👋... You little bitch! Round ' + (i + 1))
            let pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert('Great job! You survived the game! You now have a score of ' + playerInfo.money + '.')
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
        case "REFILL":
            case "refill":
              playerInfo.refillHealth();
              break;
            case "UPGRADE":
            case "upgrade":
              playerInfo.upgradeAttack();
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

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      },
      upgradeAttack: function() {
        if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.attack += 6;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

startGame()