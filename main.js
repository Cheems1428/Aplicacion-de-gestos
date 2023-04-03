nariz_x = 0;
nariz_y = 0;
muñeca_izq_x = 0;
muñeca_der_x = 0;
diferencia = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    posenet = ml5.poseNet(video, modelocargado);
    posenet.on('pose', gotposes);
}

function modelocargado(){
    console.log("modelo iniciado");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        nariz_x = results[0].pose.nose.x;
        nariz_y = results[0].pose.nose.y;
        muñeca_izq_x = results[0].pose.leftWrist.x;
        muñeca_der_x = results[0].pose.rightWrist.x;
        diferencia = floor(muñeca_izq_x - muñeca_der_x);
    }
}

function draw(){
    background("#5DADE2");
    document.getElementById("square_side").innerHTML = 'el ancho y alto del cuadrado es' + diferencia + 'pixeles';
    fill("#27AE60");
    stroke("#27AE60");
    square(nariz_x, nariz_y, diferencia);
}