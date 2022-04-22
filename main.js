function mosesCharacter(){

    fetch("./bible.json")
        .then (function(resp){
        return resp.json();
    })
    .then(function (data){

        let mosesName = data.characters[1].name;
        document.querySelector("#name").innerHTML = mosesName;

        let mosesDes = data.characters[1].description;
        document.querySelector("#storyDes").innerHTML = mosesDes;

        document.getElementById("pic").src="assets/moses.png";

        let mosesQ = data.characters[1].god;
        document.querySelector("#bibleVerse").innerHTML = mosesQ;

        // console.log(godQ);

    });
}


function abrahamCharacter(){

    fetch("./bible.json")
        .then (function(resp){
        return resp.json();
    })
    .then(function (data){

        let abrahamName = data.characters[0].name;
        document.querySelector("#name").innerHTML = abrahamName;

        let abrahamDes = data.characters[0].description;
        document.querySelector("#storyDes").innerHTML = abrahamDes;
        
        document.getElementById("pic").src="assets/abraham.png";

        let abrahamQ = data.characters[0].god;
        document.querySelector("#bibleVerse").innerHTML = abrahamQ;

    });
}

//trying to use the text analyzer called text razor
// fetch("https://api.textrazor.com", {
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'X-TextRazor-Key': '8ffe70cfbf8843f31eec5fd8a4bd2ccd84841cc0540626da93f36ac3'
//     },
//     method: 'POST',
//     mode: 'no-cors',
//     url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
//     extractor: 'senses'
// })

// .then (function(resp){
//     return resp.json();
// })
// .then (function(data){
//     console.log(data);
// })


let inputArray = [];
let bibleArray = [];
let abrahamArray = [];
let mosesArray = [];
let abrahamCount;
let mosesCount;


document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("#start").addEventListener("click", generateWords);
    document.querySelector("#restart").addEventListener("click", refreshPage);



    // document.querySelector('input').addEventListener("keyup", function(){
    //     let val = this.value;
    //     let output = RiTa.rhymes(val);
    //     document.querySelector("#output").innerHTML = output;
    // })

})




function refreshPage(){
    document.location.reload(true);
}



function generateWords(abrahamCount, mosesCount){
    let input = document.querySelector('input').value;
    let tokens = RiTa.tokenize(input);

    let abrahamText = RiTa.tokenize(abraham);
    let mosesText = RiTa.tokenize(moses);
    
    for (i = 0; i < tokens.length; i++){
        let inputPos = RiTa.pos(tokens[i]);
        inputArray.push(inputPos);

        }
        

        for (b = 0; b < abrahamText.length; b++){
            let abrahamPosF = RiTa.pos(abrahamText[b]);
            abrahamArray.push(abrahamPosF);
        }

        for (i = 0; i < mosesText.length; i++){
            let mosesPos = RiTa.pos(mosesText[i]);
            mosesArray.push(mosesPos);
        }

        console.log("this is matching function result " + matching(inputArray, abrahamArray));

        abrahamCount = matching(inputArray, abrahamArray);
        mosesCount = matching(inputArray, mosesArray);

        compare(abrahamCount, mosesCount);
        document.querySelector("#counterNum").innerHTML = mosesCount;

}
    

    function matching(inputArray, bibleArray, counter){   
        counter = 0;
        if(inputArray.length < bibleArray.length){
            for( i = 0; i<inputArray.length; i++){
            for( b = 0; b<bibleArray.length; b++){
                if (inputArray[i][0] == bibleArray[b][0]){
                    counter++
                    // console.log(counter);
                };
            }
            }
        }else{
            console.log("user input is longer");
            for( i = 0; i<bibleArray.length; i++){
                for( b = 0; b<inputArray.length; b++){
                    if (inputArray[b][0] == bibleArray[i][0]){
                        counter--

                    };
                }
                }

        }
        console.log(bibleArray);
        return counter;
    }

    function compare(abrahamCount, mosesCount){

        if (abrahamCount > mosesCount){
            abrahamCharacter();
            console.log("abraham won!!");
        } else{
            mosesCharacter();
            console.log("moses won!");
        }
        console.log("moses count:" + mosesCount);
        console.log("abraham count:" + abrahamCount);

    }

    // function refresh (){
    //     abrahamCount = 0;
    //     mosesCount = 0;
    //     document.querySelector("#counterNum").innerHTML = mosesCount;
    //     // generateWords(counterReset, counterReset);


    // }

    //resetting//

    // function refresh (){
    //     let input = document.querySelector('input').value;
    //     let tokens = RiTa.tokenize(input);
    //     let abrahamText = RiTa.tokenize(abraham);
    //     let mosesText = RiTa.tokenize(moses);
    
    //     for (i = 0; i < tokens.length; i++){

    //         let inputPos = RiTa.pos(tokens[i]);
    //         inputArray.push(inputPos);
    //         }

    //         for (b = 0; b < abrahamText.length; b++){
        
    //             let abrahamPosF = RiTa.pos(abrahamText[b]);
        
    //             abrahamArray.push(abrahamPosF);
        
    //         }
            

    //         for (i = 0; i < mosesText.length; i++){
    //                 let mosesPos = RiTa.pos(mosesText[i]);
    //                 mosesArray.push(mosesPos);
    //         }



    //         // let abrahamCount = clearing(inputArray, abrahamArray);
    //         // let mosesCount = clearing(inputArray, mosesArray);

    //         let abrahamCount = 0;
    //         let mosesCount = 0;


    //         // console.log("this is clearing function result" + clearing(inputArray, abrahamArray));


    //         compare(abrahamCount, mosesCount);
    //         document.querySelector("#counterNum").innerHTML = mosesCount;
    // }
    
    
    // function clearing(inputArray, bibleArray){   
    //     let counter =0;  
    //         // for( i = 0; i<inputArray.length; i++){
    //         // for( b = 0; b<bibleArray.length; b++){
    //         //     if (inputArray[i] == bibleArray[b]){
    //         //         counter = 0;
    //         //         console.log("this is the counter " + counter);
    //         //     };
    //         // }
    //         // }
    // }





//canvas

// function canvasColor(){
//     var c = document.getElementById("canvas");
//     var ctx = c.getContext("2d");

//     c.setup();
//     c.draw();

//     // Create gradient
//     var grd = ctx.createRadialGradient(75,50,5,90,60,100);
//     grd.addColorStop(0,"red");
//     grd.addColorStop(1,"white");

//     // Fill with gradient
//     ctx.fillStyle = grd;
//     ctx.fillRect(10,10,150,80);
// }





//decision maker
var t;

function setup() {
  
  let canvas1=createCanvas(550,400);
  canvas1.parent('godCanvas');
  canvas1.style('border-radius', '18px');
  background(0);
  t = 0;
  time = 20;
  abrahamCount = 50;
  mosesCount = 3;
}

function draw() {
    background(0,-1);

    var x = width * noise(t);
    var y = height * noise(t+3);
    var r = 360 * noise(t+50);
    var g = 360 * noise(t+15);
    var b = 360 * noise(t+20);

    noStroke();
    
    abrahamCount = matching(inputArray, abrahamArray);
    mosesCount = matching(inputArray, mosesArray);

    fill(r, g, b);
    ellipse(x, y, mosesCount/8, abrahamCount/6);
    t = t + 0.01;
}