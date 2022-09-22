 noseX=0;
 noseY=0;
var clown_nose;

 function preload(){
    clown_nose=loadImage("https://i.postimg.cc/XYX4YdCG/NOSE.png");
 }

 function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX,noseY,20);
   image(clown_nose,noseX-15,noseY-10,30,30);
    
    
}

function take_snapshot(){
save("FileteredME.png");
}

function modelLoaded(){
    console.log("PoseNet is Intialized");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x ="+noseX);
    console.log("nose y ="+noseY);
}
}
function redirect(){
window.location="gogles.html"}