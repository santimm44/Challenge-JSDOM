let boxNumber = document.getElementById("boxNumber");
let changeColor = document.getElementById("changeColor");
let changeColorBtn = document.getElementById("changeColorBtn");
let resetBtn = document.getElementById("resetBtn");

//all box IDs
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");

let color= "";
let number = 0;

changeColorBtn.addEventListener("click", function(){
    color = changeColor.value;
    color = color.toLowerCase();
    
    number = boxNumber.value; // innerText is a method to change/alter not read. Value will allow us to see the value
    // convert the value from string to int
    console.log(number);

    switch(number){
        case "1":
            box1.className = colorBG(color) + " col-3 text-center boxSize";
            break
        case "2":
            box2.className = colorBG(color) + " col-3 text-center boxSize";
            break
        case "3":
            box3.className = colorBG(color) + " col-3 text-center boxSize";
            break
        case "4":
            box4.className = colorBG(color) + " col-3 text-center boxSize";
            break
        case "5":
            box5.className = colorBG(color) + " col-3 text-center boxSize";
            break
        case "6":
            box6.className = colorBG(color) + " col-3 text-center boxSize";
            break
        case "7":
            box7.className = colorBG(color) + " col-3 text-center boxSize";
            break
        case "8":
            box8.className = colorBG(color) + " col-3 text-center boxSize";
            break

        default:
            alert("Please enter a number between 1 to 8");
            break
    }

})

function colorBG(color){
    switch(color){
        case "red":
            return "red-bg";
        case "blue":
            return "blue-bg";
        case "purple":
            return "purple-bg";
        case "brown":
            return "brown-bg";
        case "yellow":
            return "yellow-bg";
        default:
            return "white-bg";
    }
}


resetBtn.addEventListener("click", function(){
    
    box1.className = "col-3 text-center boxSize";
    box2.className = "col-3 text-center boxSize";
    box3.className = "col-3 text-center boxSize";
    box4.className = "col-3 text-center boxSize";
    box5.className = "col-3 text-center boxSize";
    box6.className = "col-3 text-center boxSize";
    box7.className = "col-3 text-center boxSize";
    box8.className = "col-3 text-center boxSize";
})
