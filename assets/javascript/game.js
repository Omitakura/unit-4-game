var playerWins = 0;
var playerLosses = 0;
var goal = (Math.floor(Math.random() * 120 + 19));
var playerScore = 0;
var btn1 = (Math.floor(Math.random() * 11 + 1));
var btn2 = (Math.floor(Math.random() * 11 + 1));
var btn3 = (Math.floor(Math.random() * 11 + 1));
var btn4 = (Math.floor(Math.random() * 11 + 1));

var reset = function () {
    (Math.floor(Math.random() * 120 + 19))
    playerScore = 0;
    btn1 = (Math.floor(Math.random() * 11 + 1));
    btn2 = (Math.floor(Math.random() * 11 + 1));
    btn3 = (Math.floor(Math.random() * 11 + 1));
    btn4 = (Math.floor(Math.random() * 11 + 1));
};
var check = function () {
    if (playerScore === goal) {
        alert("You've won! Great job, grab your treasure!");
        playerWins++;
        $("#playerWins").text(playerWins)
        reset();
    }
    else if (playerScore > goal) {
        alert("You've lost your chance at the loot!  Try again");
        playerLosses++;
        $("#playerLosses").text(playerLosses);
        reset();
    }
};

$('#goal').text(goal);

$('#btn1').on('click', function () {
    playerScore += btn1;
    $('#playerScore').text(playerScore);
    check();
});
$('#btn2').on('click', function () {
    playerScore += btn2;
    $('#playerScore').text(playerScore);
    check();
});
$('#btn3').on('click', function () {
    playerScore += btn3;
    $('#playerScore').text(playerScore);
    check();
});
$('#btn4').on('click', function () {
    playerScore += btn4;
    $('#playerScore').text(playerScore);
    check();
});

