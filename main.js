
var probability_one_in = 20;
var troll = (0 == Math.floor(Math.random() * probability_one_in));

if(troll){
    let bean_num = Math.floor(Math.random() * 5) + 1;
    let bean_image_path = "media/bean_image/" + bean_num.toString() + ".jpeg";
    let bean_audio_path = "media/bean_audio/" + bean_num.toString() + ".m4a";
    let image = chrome.extension.getURL(bean_image_path)
    let audio = "" //chrome.extension.getURL(bean_audio_path)
    init(image, audio);
}


function init(image_path, audio_path){
    let topimagesrc = document.querySelector("picture source");
    let topimage = document.querySelector("picture img");
    let originalsrc;

    if(topimagesrc){
        originalsrc = topimagesrc.srcset;
        topimagesrc.setAttribute("srcset", image_path);
    }
    if(topimage){
        originalsrc = topimage.src;
        topimage.setAttribute("src", image_path);
        topimage.height = topimage.width;
    }

    setTimeout(function(){
        if(topimage) topimage.src = originalsrc;
        if(topimagesrc) topimagesrc.srcset = originalsrc;
    }, 3000);

    if(topimage || topimagesrc) play_audio(audio_path);
}

function play_audio(audio_path){
    let audio = new Audio(audio_path);
    audio.play();
}


/* To change logo in search result in top left */
// let topleft = document.querySelector(".logo.doodle img");
// if(topleft){
//     topleft.setAttribute("src", image_replacement);
//     topleft.height = topleft.width;
//     topleft.style.position = "relative";
//     topleft.style.top = "-16px";
// }

/* Change all images */
// var images = document.querySelectorAll("img");
// for(let img of images){
//     img.setAttribute("src", replace_src);
// }