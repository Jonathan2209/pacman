document.addEventListener("DOMContentLoaded", function() {
    // Debut de mon code javascript
    var pac = document.getElementById("pacman");
    var posX = pac.offsetLeft;
    var posY = pac.offsetTop;
    var audio = new Audio('0477.wav');

    function pacman() {

        console.log("variable posX : " + posX);
        document.addEventListener("keydown", function(event) {

            switch (event.keyCode) {
                case 68:
                    if (posX >= 900) {
                        audio.play();
                    } else {
                        posX += 20;
                        pac.style.left = posX + "px";
                    }
                    break;
                case 81:
                    if (posX == 0) {
                        audio.play();
                    } else {
                        posX -= 20;
                        pac.style.left = posX + "px";
                    }
                    break;
                case 90:
                    if (posY == 0) {
                        audio.play();
                    } else {
                        posY -= 20;
                        pac.style.top = posY + "px";
                    }
                    break;
                case 83:
                    if (posY >= 400) {
                        audio.play();
                    } else {
                        posY += 20;
                        pac.style.top = posY + "px";
                    }
                    break;
                default:
                    break;
            }
        })
    }
    pacman();
    


    // fin de mon code javascript
});