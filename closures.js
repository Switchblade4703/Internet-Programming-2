
    var username = "Coolguy78";
    var health = 10;
    var moves = ["karatekick", "flyingchop", "highjumpkick"];


    var content = document.createTextNode(moves.item1);
    div = document.getElementById("moves");

    var text = "";
    var reborn = {
        health,
        username,

        moveset(){
            for (let x of moves) {
                text += x;
                
                div.appendChild(content);
              }
        }
    }

reborn.moveset();
console.log("hp: " + health);
console.log("username: " + username);