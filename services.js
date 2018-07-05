var GameObject = (function () {
    function Game(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.activePlayer = player1;

    }
    Game.prototype.switchPlayer = function () {
        if (this.activePlayer == this.player1) {
            this.activePlayer = this.player2
        } else {
            this.activePlayer = this.player1;
        }
    }
    Game.prototype.rollDice = function () {
        var zar = [1, 2, 3, 4, 5, 6];
        var zar1 = zar[Math.floor(Math.random() * zar.length)];
        var zar2 = zar[Math.floor(Math.random() * zar.length)];
        if (zar1 > 1 && zar2 > 1) {
            this.activePlayer.current += (zar1 + zar2)
        } else {
            this.activePlayer.current = 0;
            this.switchPlayer();
        }
        return [zar1, zar2]
    }
    Game.prototype.hold = function () {
        this.activePlayer.result += this.activePlayer.current;
        this.activePlayer.current = 0;
         this.switchPlayer();
    }
    function Player() {
        this.current = 0;
        this.result = 0;
    };
    return new Game(new Player(), new Player())
})

// var player1 = new Player()
// var player2 = new Player()
// player1.rollDice()
// player1.rollDice()
// player1.rollDice()
// console.log(player1)
// var game1 = new NewGame(player1, player2)

// roll dice
// hold
// new game
// current
// player 1 and 2 result



