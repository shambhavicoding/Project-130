MediaKeyStatusMap="";
song_1="";
song_2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
status_rightWrist=0;

function preload(){
    song_1="music.mp3";
    song_2="music2.mp3";
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture();
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is intialized');
}
function gotPoses(results){
    if(results.lenght>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = "+scoreLeftWrist);
        scoreRightWrist=results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = "+scoreRighttWrist);


        righttWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("righttWristX = "+rightWristX+"rightWristY = "+rightWristY);
    }
}
function draw(){
    image(video,0,0,600,500);
     fill("#FF0000");
     stroke("#FF0000");

     if(scoreLeftWrist>0.2){
     circle(leftWristX,leftWristY,20);
     InNumberleftWristY=Number(leftWristY);
     remove_decimals=floor(InNumberleftWristY);
     stop(song_2);

     if(staus=song_1){
         song.play(song_1);
         document.getElementById("song_name").innerHTML="Peter Pan theme song is playing";
     }
     }
    
     status_rightWrist=song_2;
     if(scoreRightWrist>0.2){
        circle(LeftWristX,RightWristY,20);
        InNumberRightWristY=Number(RghtWristY);
        remove_decimals=floor(InNumberRightWristY);
        stop(song_1);
   
        if(staus=song_2){
            song.play(song_2);
            document.getElementById("song_name").innerHTML="Harry Potter theme song is playing";
        }
    }
}

     


