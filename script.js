// create fireworks
for (var i = 0; i < 10; i++) {
    var firework = document.createElement("div");
    firework.className = "firework firework--" + (i + 1);
    document.getElementById("fireworks").appendChild(firework);
    }