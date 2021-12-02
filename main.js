function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 200)
    canva = createCanvas(550, 550);
    canva.position(1000, 260);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#FFA500');
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
    }
}