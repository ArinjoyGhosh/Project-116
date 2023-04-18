uLipX=0;
uLipY=0;
function preload() {
    mustache = loadImage('https://i.postimg.cc/4xWrCXH5/pngtree-black-moustache-png-image-8743808.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, uLipX-35, uLipY-20, 75, 50);
}
function takeSnapshot() {
    save('myFilterImage.png');
}
function modelLoaded() {
    console.log('PoseNet is Initialized');
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        uLipX = Number(results[0].pose.nose.x);
        uLipY = Number(results[0].pose.nose.y) + 12;
        console.log("Lips X = " + uLipX);
        console.log("Lips y = " + uLipY);
    }
}