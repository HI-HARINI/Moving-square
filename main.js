nosex=0
nosey=0
leftx=0
righty=0
difference=0

function setup(){
    video=createCapture(VIDEO)
    video.size(500,500)
    canvas=createCanvas(500,500)
    canvas.position(550,150)
    postNet=ml5.poseNet(video,modelLoaded);
    postNet.on('pose',gotposes)
    
}
function modelLoaded(){
    console.log("postnetisinitilized")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        console.log("x="+nosex+"y="+nosey)
        leftx=results[0].pose.leftWrist.x
        rightx=results[0].pose.rightWrist.x
        difference=floor(leftx-rightx)
        console.log("x="+leftx+"y="+rightx)

    }
}
function draw(){
    background('grey')
    document.getElementById("squareside").innerHTML="width and height of the square will be"+difference+"px"
    fill('pink')
    stroke('blue')
    square(nosex,nosey,difference)
}