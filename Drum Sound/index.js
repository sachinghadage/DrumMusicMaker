var numberofdrumbutton = document.getElementsByClassName("drum").length;
for (i = 0; i < numberofdrumbutton; i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", handleclick)
};

function handleclick() {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonanimation(buttonInnerHTML);

};

document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonanimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:console.log(buttonInnerHTML);
            
    }
}


function buttonanimation(currentKey) {
    var activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function() {
    activebutton.classList.remove("pressed");    
    }, 100);
}