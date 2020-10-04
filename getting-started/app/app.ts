function startGame() {
    // starting new game
    let playerName: string = 'Alice';
    logPlayer(playerName);

    var messageElement = document.getElementById('messages');
    messageElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);