const bpm = 60;
const tolerance = 500; //in milliseconds
const keys = ["w", "s", "a", "d", "w", "w", "s", "a", "d", "w", "w", "s", "a", "d", "w", "w", "s", "a", "d", "w", "w", "s", "a", "d", "w","w", "s", "a", "d", "w", "w", "s", "a", "d", "w", "w", "s", "a", "d", "w", "w", "s", "a", "d", "w", "w", "s", "a", "d", "w","w", "s", "a", "d", "w", "w", "s", "a", "d", "w", "w", "s", "a", "d", "w", "w", "s", "a", "d", "w", "w", "s", "a", "d", "w"];
const canvas = new fabric.Canvas("game");

let isInInterval = false;
let wasPressed = true;
let score = 0;
let circleColor = "red";
let expKey = "w";
let keysIndex = 0;


function IntervalStart(){
    if(isInInterval)
    {
        InIntervalFalse();
    }
    else
    {
        InIntervalTrue();
    }
}

function InIntervalTrue(){
    isInInterval = true;
    expKey = keys[keysIndex];
    keysIndex++;
    circleColor = "green";
    updateCanvas();
}
function InIntervalFalse(){
    circleColor = "red";
    isInInterval = false;
    score -= (!wasPressed) ? 1 : 0;
    wasPressed = false;
    updateCanvas();
}

function updateCanvas(){
    var text = new fabric.Text(score.toString(), {
        fill: "green",
        selectable: false
    });

    canvas.clear();
    canvas.add(text);
    var arrowType =(!isInInterval) ? 'circle.png' : (expKey == "w") ? 'arrowUp.png' : (expKey == "d") ? 'arrowRight.png' : (expKey == "s") ? 'arrowDown.png' : 'arrowLeft.png';
    fabric.Image.fromURL('https://raw.githubusercontent.com/Slopsk123/Slap_Hero-v0.01/refs/heads/master/img/' + arrowType, function(arrow) {
        arrow.set({ 
            left: 50,
            top: 100,
            selectable: false
        });
        arrow.scaleToWidth(200)
        canvas.add(arrow);
       });
}

function BpmToMillis(){
    let result = Math.round(60000/bpm)
    console.log(result);
    return result;
}

function startBPM() {
    const interval = (60 / bpm) * 1000;
    return setInterval(() => {
        IntervalStart();
    }, interval);
}


startBPM();
setTimeout(startBPM, tolerance);

const indian_song = new Audio('Indian_song.mp3');
indian_song.play();

document.addEventListener("keydown", function(event) {
    if (event.key === expKey) {
        score += (isInInterval) ? 1 : -1;
    }
    else{
        score--;
    }
    wasPressed = true;
});