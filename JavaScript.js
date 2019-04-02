var timerFunction = null;

function startAnimation() {
    if (timerFunction == null) {
        timerFunction = setInterval(animate, 20);
    }
}

function stopAnimation() {
    if (timerFunction != null) {
        clearInterval(timerFunction);
        timerFunction = null;
    }
}

//function animate() {
//    var ballon = document.getElementById("ballon1");
//    var y = ballon.getAttribute("cy");
//    var newY = 2 + parseInt(y);
//    if (newY > 500) {
//        newY = 20;
//    }
//    ballon.setAttribute("cy", newY);
//}

function animate() {
    var circle = document.getElementById("circle1");
    var x = circle.getAttribute("cx");
    var newX = 2 + parseInt(x);
    if (newX > 500) {
        newX = 20;
    }
    circle.setAttribute("cx", newX);
}