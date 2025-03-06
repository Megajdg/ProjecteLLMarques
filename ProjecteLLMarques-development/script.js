$(function () {
    let victoria = false;
    let winner = 0;
    let posXK1 = 0;
    let posXK2 = 0;
    let posXK3 = 0;
    let posXK4 = 0;
    let posXK5 = 0;
    let posXK6 = 0;

    let puntos = 100;
    let multiplicador = 1;

    $("#apuesta").click(function () {
        realizarApuesta();
        
    });
    $("#reinicio").click(function(){
        posXK1 = 0;
        posXK2 = 0;
        posXK3 = 0;
        posXK4 = 0;
        posXK5 = 0;
        posXK6 = 0;
        victoria = false;
        $("#start").off("click"); 
    })

    function realizarApuesta() {
        let apuesta = parseInt(document.getElementById("apostar").value);
        let corredorElegido = parseInt(document.getElementById("corredor").value);

        if (apuesta > puntos || apuesta <= 0) {
            alert("Apuesta inválida");
            return;
        }

        $("#start").off("click").on("click", function () {
            if (victoria) return;
            MoveK1(apuesta, corredorElegido);
            MoveK2(apuesta, corredorElegido);
            MoveK3(apuesta, corredorElegido);
            MoveK4(apuesta, corredorElegido);
            MoveK5(apuesta, corredorElegido);
            MoveK6(apuesta, corredorElegido);

        });
    }

    function MoveK1(apuesta, corredorElegido) {
        if (victoria) return;

        let objeto = $("#k1");
        let random = 5;
        let intervalo = (Math.random() * 25) * 1;

        posXK1 += random;
        objeto.css("left", posXK1 + "px");

        if (posXK1 >= 1600) {
            victoria = true;
            winner = 1;
            evaluarResultado(apuesta, corredorElegido);
            return;
        }

        setTimeout(() => MoveK1(apuesta, corredorElegido), intervalo);
    }

    function MoveK2(apuesta, corredorElegido) {
        if (victoria) return;

        let objeto = $("#k2");
        let random = 5;
        let intervalo = (Math.random() * 25) * 1;

        posXK2 += random;
        objeto.css("left", posXK2 + "px");

        if (posXK2 >= 1600) {
            victoria = true;
            winner = 2;
            evaluarResultado(apuesta, corredorElegido);
            return;
        }

        setTimeout(() => MoveK2(apuesta, corredorElegido), intervalo);
    }

    function MoveK3(apuesta, corredorElegido) {
        if (victoria) return;

        let objeto = $("#k3");
        let random = 5;
        let intervalo = (Math.random() * 25) * 1;

        posXK3 += random;
        objeto.css("left", posXK3 + "px");

        if (posXK3 >= 1600) {
            victoria = true;
            winner = 3;
            evaluarResultado(apuesta, corredorElegido);
            return;
        }

        setTimeout(() => MoveK3(apuesta, corredorElegido), intervalo);
    }

    function MoveK4(apuesta, corredorElegido) {
        if (victoria) return;

        let objeto = $("#k4");
        let random = 5;
        let intervalo = (Math.random() * 25) * 1;

        posXK4 += random;
        objeto.css("left", posXK4 + "px");

        if (posXK4 >= 1600) {
            victoria = true;
            winner = 4;
            evaluarResultado(apuesta, corredorElegido);
            return;
        }

        setTimeout(() => MoveK4(apuesta, corredorElegido), intervalo);
    }

    function MoveK5(apuesta, corredorElegido) {
        if (victoria) return;

        let objeto = $("#k5");
        let random = 5;
        let intervalo = (Math.random() * 25) * 1;

        posXK5 += random;
        objeto.css("left", posXK5 + "px");

        if (posXK5 >= 1600) {
            victoria = true;
            winner = 5;
            evaluarResultado(apuesta, corredorElegido);
            return;
        }

        setTimeout(() => MoveK5(apuesta, corredorElegido), intervalo);
    }

    function MoveK6(apuesta, corredorElegido) {
        if (victoria) return;

        let objeto = $("#k6");
        let random = 5;
        let intervalo = (Math.random() * 25) * 1;

        posXK6 += random;
        objeto.css("left", posXK6 + "px");

        if (posXK6 >= 1600) {
            victoria = true;
            winner = 6;
            evaluarResultado(apuesta, corredorElegido);
            return;
        }

        setTimeout(() => MoveK6(apuesta, corredorElegido), intervalo);
    }

    function selectWinner(winner) {
        let ganador;
        if (winner == 1) {
            ganador = 'Mario'
        }
        else if (winner == 2) {
            ganador = 'Luigi'
        }
        else if (winner == 3) {
            ganador = 'Peach'
        }
        else if (winner == 4) {
            ganador = 'Bowser'
        }
        else if (winner == 5) {
            ganador = 'Koopa'
        }
        else if (winner == 6) {
            ganador = 'Toad'
        }
        return ganador;
    }

    function evaluarResultado(apuesta, corredorElegido) {
        let ganador = selectWinner(winner);
        if (corredorElegido == winner) {
            puntos += apuesta * (multiplicador); // El usuario gana por un valor aleatorio de su apuesta
            document.getElementById("resultado").innerText = `¡HAS GANADO! ¡El ganador es ${ganador}!`;
        } else {
            puntos -= apuesta; // El usuario pierde su apuesta
            document.getElementById("resultado").innerText = `Has perdido... El ganador es ${ganador} :(`;
        }
        document.getElementById("puntos").innerText = puntos; // Actualizar los puntos en el DOM
        multiplicador = Math.round((Math.random() * 3) + 1);
        document.getElementById("multiplicador").innerText = multiplicador; // Actualizar el multiplicador en el DOM
        $('#reinicio').prop('disable', false);
    }

});