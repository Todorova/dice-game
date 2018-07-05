var game = GameObject();

document.addEventListener('DOMContentLoaded', function () {
    
    var clearDice = function () {
        if (document.getElementById('zarove').getElementsByTagName('img').length) {
            document.getElementById('zarove').getElementsByTagName('img').item(0).remove();
            document.getElementById('zarove').getElementsByTagName('img').item(0).remove();
        }
    }

    var setActive = function() {
        if (game.activePlayer == game.player1) {
            document.querySelector('#right > img').style.display = 'none';
            document.querySelector('#left > img').style.display = 'block';
            document.getElementById('left').style.backgroundColor = "whitesmoke";
            document.getElementById('right').style.backgroundColor = "white";
        } else {
            document.querySelector('#right > img').style.display = 'block';
            document.querySelector('#left > img').style.display = 'none';
            document.getElementById('left').style.backgroundColor = "white";
            document.getElementById('right').style.backgroundColor = "whitesmoke";
        }
    }
    document.getElementById('add').addEventListener('click', function (event) {
        var game = GameObject();
        document.getElementById('c1').innerHTML = game.player1.current;
        document.getElementById('c2').innerHTML = game.player1.current;
        
        clearDice();
        //    console.log()
    }, false);
    document.getElementById('refresh').addEventListener('click', function (event) {
        var zarcheta = game.rollDice();
        var zar1 = zarcheta[0]
        var zar2 = zarcheta[1]
        console.log(zarcheta)
        var img1 = document.createElement('img')
        var img2 = document.createElement('img')
        var atribut = ['assets/dice-1.png', 'assets/dice-2.png', 'assets/dice-3.png', 'assets/dice-4.png', 'assets/dice-5.png', 'assets/dice-6.png']
        for (var index = 1; index <= atribut.length; index++) {
            console.log(index)
            if (zar1 == index) {
                img1.setAttribute('src', atribut[index - 1])
            }
            if (zar2 == index) {
                img2.setAttribute('src', atribut[index - 1])
            }
        }

        img1.style.width = "80px";
        img2.style.width = "80px";
        img1.style.padding = '15px';
        img2.style.padding = '15px';
        clearDice();

        document.getElementById('zarove').appendChild(img1)
        document.getElementById('zarove').appendChild(img2)
       
        if (game.activePlayer == game.player1) {
            document.getElementById('c1').innerHTML = game.activePlayer.current;
            document.getElementById('c2').innerHTML = 0;
        } else {
            document.getElementById('c2').innerHTML = game.activePlayer.current;
            document.getElementById('c1').innerHTML = 0;
        }
        setActive();
    }, false);
    document.getElementById('hold').addEventListener('click', function (event) {
        game.hold()

        document.getElementById('result1').innerHTML = game.player1.result;
        document.getElementById('c1').innerHTML = 0;

        document.getElementById('result2').innerHTML = game.player2.result;
        document.getElementById('c2').innerHTML = 0;

        clearDice();
        setActive();
    }, false);

    setActive();
}, false);

