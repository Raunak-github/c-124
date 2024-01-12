function setup()
{
    video = createCapture(VIDEO);
    video.size(550 ,500);

    canvas = createCanvas(550, 400);
    canvas.position(560,125);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' ,getPoses);
}

function modelLoaded()
{
    console.log("model has be successfully loaded");
}

function getPoses(results)
{
    if (results.length > 0) 
    {
        console.log(results);
    }
}