let bpm = 15;
let isInInterval = false;
let tolerance = 300; //in milliseconds
let score = 0;
let circleColor = "red";

const canvas = new fabric.Canvas("game");

    document.addEventListener("keyup", function(event) {
        if (event.key === "d") {
            keyDown();
        }
    });
function InIntervalTrue(){
    isInInterval = true;
    circleColor = "green";
    updateCircle();
    console.log("green");
}
function InIntervalFalse(){
    isInInterval = false;
    circleColor = "red";
    updateCircle();
    console.log("red")
}

function updateCircle(){
    const circle = new fabric.Circle({
        left: 100,
        top: 100,
        radius: 50,
        fill: circleColor,
        selectable: false // This makes the circle non-movable
    });
    var text = new fabric.Text(score.toString(), {
        fill: "green",
        selectable: false
    })
    canvas.clear();
    canvas.add(circle);
    canvas.add(text);
}

function BpmToMillis(val){
    return 6000/val;
}

function keyDown(){
    if(isInInterval){
        score++;
    }
    else{
        score--;
    }
}

function startSecondInterval(){
    setInterval(InIntervalFalse, BpmToMillis(bpm))
}

setInterval(InIntervalTrue, BpmToMillis(bpm));
setTimeout(startSecondInterval, tolerance);