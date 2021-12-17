
var probability_one_in = 20;
var troll = (0 == Math.floor(Math.random() * probability_one_in));

if(troll){
    try{
        let bean_num = Math.floor(Math.random() * 5) + 1;
        let bean_image_path = "media/bean_image/" + bean_num.toString() + ".jpeg";
        let image = chrome.extension.getURL(bean_image_path)
        init(image);
    }
    catch(error){
        console.log("WebTroll Error");
    }
}


function init(image_path){
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