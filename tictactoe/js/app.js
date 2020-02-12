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
    }

});

function winner(){
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
    }
}
