let playerName = window.prompt('What is your player\'s name?')

let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 20;

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]
let enemyHealth = 50;
let enemyAttack = 12;

const fight = (enemyName) => {
    while (enemyHealth > 0 && playerHealth > 0) {
        let fightPrompt = window.prompt('Would you like to FIGHT or SKIP this battle? Enter \'FIGHT\' or \'SKIP\' to choose.')
        if (fightPrompt === 'FIGHT' || fightPrompt === 'fight') {
            enemyHealth -= playerAttack;
            window.alert(playerName + ' attacked! ' + enemyName + ' now has ' + enemyHealth + ' health points remaining.')
            playerHealth -= enemyAttack;
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
                playerMoney -= 10
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
    for (let i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0) {
            window.alert('Welcome to Robot Galdiators ' + playerName + '👋... You little bitch! Round ' + (i + 1))
            let pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName)
        }
    }
}
