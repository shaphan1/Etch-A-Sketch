let grid = document.querySelector(".container");
let reset = document.querySelector("#reset");
let box;
let gridSize = 16;
let command;

reset.addEventListener("click", function(){resetFunction()});

function resetFunction(command) {

    switch (command) {
        case "wrong range":
            gridSize = prompt("number must be between 10 and 50");
            break;
        case "invalid input":
            gridSize = prompt("invalid input, try again");
            break;
        default:
            gridSize = prompt("enter desired grid size from 10 to 50");
            break;
    }
    
    if ((gridSize < 10) || (gridSize > 50)) {
        resetFunction("wrong range");
    } if ((gridSize%1) != 0) {
        resetFunction("invalid input");
    }else {
        grid.innerHTML = "";
        populate(gridSize);
    }
};


function populate(gridSize) {
    for (let index = 0; index < Math.pow(gridSize, 2); index++) {
        box = document.createElement("div");
        box.className = "box";
        box.id = "box" + index;
        box.style.width = ("calc(700px / " + gridSize + ")");
        box.style.height = ("calc(700px / " + gridSize + ")");

        grid.append(box);

        let b = document.getElementById("box" + index);

        b.addEventListener("mouseenter", function() {
            b.style.backgroundColor = "black";
            console.log(b);
        })
    }
};

populate(gridSize);