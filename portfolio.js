functiondraw() {
    imageMode (CENTER);



var catImage; 
var catPositionX =[];
var catPositionY = [];
var catCount = 10;

function preload (){
    catImage = laodImage('/images/cat.png');
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    for(var i=0; i<catCount; i++) {
        catPositionX[i]=random(width);
        catPositionY[i]= randome(height);

    }
}

function float () {
  for (var i =0, i<catCount; i++) {
      image(catImage,catPositionX[i], catPositionY[i], 80, 80); 
      lanternPositionY[i]-= 0.5;
  }
}
}