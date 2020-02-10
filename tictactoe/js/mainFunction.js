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