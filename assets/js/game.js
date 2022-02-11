let playerName = window.prompt('What is your player\'s name?')
let playerHealth = 100;
let playerAttack = 10;


let enemyName = 'Roborto';
let enemyHealth = 50;
let enemyAttack = 12;

const fight = () => {
    window.alert('Welcome to Robot Galdiators ' + playerName + '👋... You little bitch!')
    enemyHealth -= playerAttack;
    window.alert(playerName + ' attacked! ' + enemyName + ' now has ' + enemyHealth + ' health points remaining.')
    playerHealth -= enemyAttack;
    window.alert(enemyName + ' attacked! ' + playerName + ' now has ' + playerHealth + ' health points remaining.')
    if(enemyName <= 0){
        window.alert(enemyName + ' has died! BUUUUUMMER!')
    } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health points remaining.')
    }
    if(playerHealth > 0){
        window.alert(playerName + ' still has ' + playerHealth + ' health points remaining, and is still alive!')
    } else {
        window.alert(playerName + ' is dead as fucking door nail 💀')
    }

}

fight()