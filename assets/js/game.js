let playerName = window.prompt('What is your player\'s name?')
let playerHealth = 100;
let playerAttack = 10;


let enemyName = 'Roborto';
let enemyHealth = 50;
let enemyAttack = 12;

const fight = () => {
    window.alert('Welcome to Robot Galdiators ' + playerName + '... You little bitch!')
    enemyHealth -= playerAttack;
    console.log(playerName + ' attacked! ' + enemyName + ' now has ' + enemyHealth + ' health points remaining.')
}

fight()