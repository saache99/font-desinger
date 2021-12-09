var name="";
var leftWristX=0;
var rightWristX=0;
var noseX=0;
var noseY=0;
var difference=0;
var coloro = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 300)
    canva = createCanvas(550, 550);
    canva.position(1000, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function change()
{
    name = document.getElementById('text').value;
    coloro = document.getElementById('color').value;
    console.log(name);
    console.log(color);
}

function modelLoaded()
{
    console.log('Model Loaded');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

function draw() {
background('#969A97');
  fill(coloro);
  textSize(difference);
  text(name,noseX,noseY);
}