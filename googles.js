googlesX=0;
googlesY=0;
var googles;


function preload(){
    googles=loadImage("https://i.postimg.cc/VvRtw6GR/223-2234605-life-cool-glasses-png-transparent-lentes-turn-down-for-what-png.png");
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
  image(googles,googlesX-65,googlesY-15,100,30);
   
   
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
   googlesX=results[0].pose.leftEye.x;
   googlesY=results[0].pose.leftEye.y;
   console.log("googles x ="+googlesX);
   console.log("googles y ="+googlesY);
}
}

function goback(){
    window.location="index.html"}


function lipstick(){
    window.location="lipstick.html"}