//SET SONG TO NULL SO IT DOESN'T PLAY AT THE SAME TIME AS OTHERS
var currentSong = null;
//CREATE MESSAGES FOR EACH COLOR CHOSEN
const welcomeBlurb = "Welcome to the Sound of Color! This webpage will allow you to click on a color and give you information associated with that color including emotions and music. Click on a color to get started!";
const blueBlurb = "Blue is a color that is favorable to the majority of people. It invokes feelings of calmness, sadness and peace. The song playing is No.6 In My Dreams by Esther Abrami. This song captures the essence of sadness and peace."
const redBlurb = "Red is associated with anger, power and love. After taking a survey from my colleagues, the dominant emotion many associate with red seems to be anger. The song playing is Manic. No Depression. by Jeremy Korpas. This song has an angry punk rock presence."
const yellowBlurb = "Yellow is associated with brightness, warmth and energy. This is why advertisers will often choose the color yellow to make their audience feel cheerful and positive towards a product. The song playing is Headphones by RKVC. This song invokes a feeling of warmth on a sunny day."
const orangeBlurb = "Orange is similar to yellow in the sense that it invokes feelings of warmth and energy but it also grabs your attention. Many people associate orange with a vacation to a tropical area. The song playing is Snake on the Beach by Nico Staf. This song reminds me of relaxing on a beach in Mexico."
const pinkBlurb = "Pink has a sensitivity to it that demonstrates empathy, kindness and hope. The song playing is Dulcinea by Steve Adams. This song is soft and comforting while giving a feeling of hope that everything will be ok. "
const purpBlurb = "Purple is associated with wealth, royalty and mystery. The reason for this is in the 15th century, creating purple clothing was costly as resources were hard to come by and royalty were the only to possess such clothing. The song playing is Tea Time by Ofshane. This song reminds me of being in fancy bar/restaurant and sipping on a $20 martini."
const greenBlurb = "Green is associated with being outdoors, safety and luck. Much of nature is green so for many it is an immediate connection to being outside. The song playing is Leaning On the Everlasting Arms by Zachariah Hickman. This song reminds me of camping and exploring British Columbia's forests."
const blackBlurb = "Although black is not considered a color, it is a shade we all know, see and use everyday. It is associated with unhappiness, boldness and power. The song playing is Argonne by Zachariah Hickman. I have chosen this song because it demonstrates a feeling of unhappiness associated with power for me. It reminds me of a horrific Game of Thrones episode where a significant character has been killed by someone in power."
const whiteBlurb = "White is a shade associated with feelings of innocence, peacefulness and cleanliness. This is why traditionally a bride's dress will be white, to symbolize purity and innocence. The song I have chosen is Divine Life Society by Jesse Gallagher. This song captures a sense of innocence and peacefulness."


window.onload = pageReady;

//ONLOAD FUNCTION
function pageReady(){

    //GRAB MY ID'S FOR THE RECTANGLES, THE DESCRIPTION PARAGRAPHS AND SONGS
    var blurb = document.getElementById("blurb");

    var blueRec = document.getElementById("bluerectangle");
    var redRec = document.getElementById("redrectangle");
    var yellowRec = document.getElementById("yellowrectangle");
    var orangeRec = document.getElementById("orangerectangle");
    var pinkRec = document.getElementById("pinkrectangle");
    var purpleRec = document.getElementById("purplerectangle");
    var greenRec = document.getElementById("greenrectangle");
    var blackRec = document.getElementById("blackrectangle");
    var whiteRec = document.getElementById("whiterectangle");

    var blueSong = document.getElementById("songforblue");
    var redSong = document.getElementById("songforred");
    var yellowSong = document.getElementById("songforyellow");
    var orangeSong = document.getElementById("songfororange");
    var pinkSong = document.getElementById("songforpink");
    var purpleSong = document.getElementById("songforpurple");
    var greenSong = document.getElementById("songforgreen");
    var blackSong = document.getElementById("songforblack");
    var whiteSong = document.getElementById("songforwhite");

    //BEGIN MY PLAY AND PAUSE FUNCTIONS FOR EACH COLOR
    blueRec.onclick = function (){
        if (blueSong.paused){
            blurb.innerHTML = blueBlurb;
            playAudio(blueSong);
        }
        else{
            pauseAudio(blueSong);
            blurb.innerHTML = welcomeBlurb;
        }
    };
    redRec.onclick = function (){
        if (redSong.paused){
            blurb.innerHTML = redBlurb;
            playAudio(redSong);
        }
        else{
            pauseAudio(redSong);
            blurb.innerHTML = welcomeBlurb;
        }
    };
    yellowRec.onclick = function (){
        if (yellowSong.paused){
            blurb.innerHTML = yellowBlurb;
            playAudio(yellowSong);
        }
        else{
            pauseAudio(yellowSong);
            blurb.innerHTML = welcomeBlurb;
        }
    };
    orangeRec.onclick = function (){
        if (orangeSong.paused){
            blurb.innerHTML = orangeBlurb;
            playAudio(orangeSong);
        }
        else{
            pauseAudio(orangeSong);
            blurb.innerHTML = welcomeBlurb;
        }
    };
    pinkRec.onclick = function (){
        if (pinkSong.paused){
            blurb.innerHTML = pinkBlurb;
            playAudio(pinkSong);
        }
        else{
            pauseAudio(pinkSong);
            blurb.innerHTML = welcomeBlurb;
        }
    };
    purpleRec.onclick = function (){
        if (purpleSong.paused){
            blurb.innerHTML = purpBlurb;
            playAudio(purpleSong);
        }
        else{
            pauseAudio(purpleSong);
            blurb.innerHTML = welcomeBlurb;
        }
    };
    greenRec.onclick = function (){
        if (greenSong.paused){
            blurb.innerHTML = greenBlurb;
            playAudio(greenSong);
        }
        else{
            pauseAudio(greenSong);
            blurb.innerHTML = welcomeBlurb;
        }
    };
    blackRec.onclick = function (){
        if (blackSong.paused){
            blurb.innerHTML = blackBlurb;
            playAudio(blackSong);
        }
        else{
            pauseAudio(blackSong);
            blurb.innerHTML = welcomeBlurb;
        }
    };
    whiteRec.onclick = function (){
        if (whiteSong.paused){
            blurb.innerHTML = whiteBlurb;
            playAudio(whiteSong);
        }
        else{
            pauseAudio(whiteSong);
            blurb.innerHTML = welcomeBlurb;
        }
    };
        
}
//MY FUNCTION THAT WILL ACTUALLY PLAY AND PAUSE IN MY ABOVE FUNCTIONS
function playAudio(element){

    if( currentSong && !currentSong.paused ) {
        pauseAudio( currentSong );
    }
    currentSong = element;
    element.play();
}
    function pauseAudio(element){
        element.pause();
    }