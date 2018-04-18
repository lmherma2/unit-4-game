    var One = Math.floor(Math.random() * 10) +2;
    var Two = Math.floor(Math.random() * 20) + 2;
    var Three = Math.floor(Math.random() * 30)+ 2;
    var Four = Math.floor(Math.random() * 15)+2 ;
    var Total = Math.floor(Math.random() * 100) +100;
    var Guess = 0;

    $(document).ready(function() {
$('.button').on('click', function() {
    if ($(this).data("value") === 1){ 
        Guess = Guess + One;
    };
    if($(this).data("value")=== 2){
        Guess = Guess + Two;
    };
    if($(this).data("value")=== 3){
        Guess = Guess + Three;
    };
    if($(this).data("value")=== 4){
        Guess = Guess + Four;
    };
    $('#guess').html(Guess);
    console.log(Guess);
    console.log($(this).data("value"));
    if (Guess > Total){
        $('#result').html("You Lose")
        console.log("loss");
        reset();
    };
    if (Guess === Total){
        $('#result').html(" You Win")
        console.log("win");
        reset():
    };
    $('#guess').html(Guess);

});
    $('#result').html(Total);
    console.log($('#result'));
    $('#guess').html(Guess);
});
    var reset = function()}{
     One = Math.floor(Math.random() * 10) +2;
     Two = Math.floor(Math.random() * 20) + 2;
     Three = Math.floor(Math.random() * 30)+ 2;
     Four = Math.floor(Math.random() * 15)+2 ;
     Total = Math.floor(Math.random() * 100) +100;
     Guess = 0;
    };

