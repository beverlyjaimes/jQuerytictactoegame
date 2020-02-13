let move = 1;
let play = true;
$('.square').click(function () {
    if( $(this).text()== "" && play){
        if((move %2) == 1){
            $(this).append("X");
            $(this).css('color', '#61892f');
        }else {
            $(this).append("O");
            $(this).css('color', '#e85a4f');
        }
        move++;
        if (getWinner() != -1 && getWinner()!= ""){
            if(getWinner()== "X"){
                $('body').append('<div class="winner"><span>Winner!</span>X</div>');
                $('body').append('<button onclick="location.reload()">Play Again!</button>');
                $('.winner').css('background-color', '#61892f');
                $('button').css('color', '#61892f');
            } else {
                $('body').append('<div class="winner"><span>Winner!</span>O</div>');
                $('body').append('<button onclick="location.reload()">Play Again!</button>');
                $('.winner').css('background-color', '#e85a4f');
                $('button').css('color', '#e85a4f');
            }
            play = false;
        }
    }

});

function getWinner(){
    space1 = $('.row:nth-child(1) .square:nth-child(1)').text();
    space2 = $('.row:nth-child(1) .square:nth-child(2)').text();
    space3 = $('.row:nth-child(1) .square:nth-child(3)').text();
    space4 = $('.row:nth-child(2) .square:nth-child(1)').text();
    space5 = $('.row:nth-child(2) .square:nth-child(2)').text();
    space6 = $('.row:nth-child(2) .square:nth-child(3)').text();
    space7 = $('.row:nth-child(3) .square:nth-child(1)').text();
    space8 = $('.row:nth-child(3) .square:nth-child(2)').text();
    space9 = $('.row:nth-child(3) .square:nth-child(3)').text();

    if ((space1 == space2) && (space2 == space3)){
        return space3;
    } else if ((space4 == space5) && (space5 == space6)){
        return space6;
    } else if ((space7 == space8) && (space8 == space9)){
        return space9;
    }
//    diagonal win
    else if ((space1 == space5) && (space5 == space9)){
        return space9;
    } else if ((space3 == space5) && (space5 == space7)){
        return space7;
    }
    return -1;
}
