//document.getElementById('start').addEventListener('click', Move());

/*
function starting_position()
{
    document.getElementById('k1').style.top="150"
    document.getElementById('k1').style.top=""
}
function moveleft(){
   document.getElementById('k1').moveleft.Math.floor(Math.random()*4)+'px';
}*/

/*function Start() {
    let objeto = document.getElementById('k1');
    let posX = 0;
    let velocidad = 5;
    Move(objeto, posX, velocidad);
}*/     

$(function() {

    $("#start").click(function(){
        Move();
    });
    

    let posX = 0;
    function Move () {
        let objeto = $("#k1");
        console.log(objeto);
        let random = Math.random() * 300;
    
        posX = posX + random;
        posX = Math.round(posX);
        console.log(posX);
    
        objeto.css("left",posX);
    
    }

});


