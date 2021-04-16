var particleCanvas = document.getElementById("particles-js").style;
var mainTitle = document.getElementById("scroll-up-smaller").style;
var backgroundVideo = document.getElementById("bg-video");
var backgroundBlurrer = document.getElementById("background-blurrer");
var pageFooter = document.getElementById("page-footer");
var preloadVideo = document.getElementById("image-preload");
var titleSize = "100px";
var width;
var headerSize = "60px";
resizeFunction();
scrollFunction();
fadeOutFader();
window.onresize = function () { resizeFunction() };
window.onscroll = function () { scrollFunction() };
particlesJS.load("particles-js", "particle-cfg.json");
function scrollFunction() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop / document.body.clientHeight > 50 / 790
        || document.documentElement.scrollTop / document.body.clientHeight > 50 / 790) {
        mainTitle.padding = "0px 0px";
        mainTitle.backgroundColor = "var(--header-bg-color)";
        // mainTitle.backdropFilter = "blur(20px)";
        // mainTitle.webkitBackdropFilter = "blur(20px)";
        mainTitle.top = "-1%";
        // mainTitle.fontSize = "4vw";
        mainTitle.fontSize = headerSize;
        // mainTitle.borderBottom = "1px solid rgb(200,200,200)";
        mainTitle.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.199)";
        // particleCanvas.opacity = "0";
        mainTitle.color = "black";
        mainTitle.fontWeight = "var(--big-font-title-card-weight)";
        backgroundVideo.style.opacity = "0";
        backgroundBlurrer.style.opacity = "0";
        pageFooter.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        preloadVideo.style.opacity = "0";
    } else {
        mainTitle.padding = "20px 20px";
        mainTitle.backgroundColor = "transparent";
        // mainTitle.webkitBackdropFilter = "none";
        mainTitle.top = "40%";
        mainTitle.backdropFilter = "none";
        mainTitle.fontSize = titleSize;
        // mainTitle.fontSize = "7vw";
        particleCanvas.opacity = "1";
        mainTitle.borderBottom = "none";
        mainTitle.boxShadow = "none";
        mainTitle.color = "white";
        mainTitle.fontWeight = "var(--big-font-title-weight)";
        backgroundVideo.style.opacity = "1";
        backgroundBlurrer.style.opacity = "1";
        pageFooter.style.backgroundColor = "transparent";
        preloadVideo.style.opacity = "1";
    }
}

function resizeFunction(){
    width = document.body.clientWidth;
    if (width > 600) {
        headerSize = "60px";
    }
    else {
        headerSize = "40px";
    }
    if (width > 375) {
        titleSize = "100px";
    }
    else {
        titleSize = "80px";
    }
}

function fadeOutFader() {
    fader = document.getElementById("black");
    fader.style.opacity = "0";
    document.getElementById("scroll-up-smaller").style.opacity = "1";
}
