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

    $("#apuesta").click(function () {
        realizarApuesta();
    });

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
        let random = 2;
        let intervalo = (Math.random() * 20) * 1;

        posXK1 += random;
        objeto.css("left", posXK1 + "px");

        if (posXK1 >= 1600) {
            victoria = true;
            winner = 1;
            evaluarResultado(apuesta, corredorElegido); // Evaluar el resultado
            return;
        }

        setTimeout(() => MoveK1(apuesta, corredorElegido), intervalo);
    }

    function MoveK2(apuesta, corredorElegido) {
        if (victoria) return;

        let objeto = $("#k2");
        let random = 2;
        let intervalo = (Math.random() * 20) * 1;

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
        let random = 2;
        let intervalo = (Math.random() * 20) * 1;

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
        let random = 2;
        let intervalo = (Math.random() * 20) * 1;

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
        let random = 2;
        let intervalo = (Math.random() * 20) * 1;

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
        let random = 2;
        let intervalo = (Math.random() * 20) * 1;

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

    function evaluarResultado(apuesta, corredorElegido) {
        if (corredorElegido == winner) {
            puntos += apuesta * 2; // El usuario gana el doble de su apuesta
            document.getElementById("resultado").innerText = `¡Ganaste! El corredor ${winner} ganó la carrera.`;
        } else {
            puntos -= apuesta; // El usuario pierde su apuesta
            document.getElementById("resultado").innerText = `Perdiste. El corredor ${winner} ganó la carrera.`;
        }
        document.getElementById("puntos").innerText = puntos; // Actualizar los puntos en el DOM
    }
});