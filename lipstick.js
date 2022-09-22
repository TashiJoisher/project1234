lipstickX=0;
lipstickY=0;
var clown_nose;

function preload(){
   clown_nose=loadImage("https://i.postimg.cc/ZnX51vp2/red-lips-png-red-lipstick-is-timeless-and-will-probably-lip-gloss-115632207295qxnqhlwra.png");
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
  image(clown_nose,lipstickX-20,lipstickY+10,50,40);
   
   
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
   lipstickX=results[0].pose.nose.x;
   lipstickY=results[0].pose.nose.y;
   console.log("nose x ="+lipstickX);
   console.log("nose y ="+lipstickY);
}
}
function redirect(){
window.location="gogles.html"}