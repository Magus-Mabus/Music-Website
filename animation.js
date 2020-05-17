scrollFunction();
fadeOutFader();
window.onscroll = function () { scrollFunction() };
particlesJS.load("particles-js", "particle-cfg.json");
function scrollFunction() {
    var particleCanvas = document.getElementById("particles-js").style;
    var mainTitle = document.getElementById("scroll-up-smaller").style;
    if (document.body.scrollTop / document.body.clientHeight > 50 / 790
        || document.documentElement.scrollTop / document.body.clientHeight > 50 / 790) {
        mainTitle.padding = "0px 0px";
        mainTitle.backgroundColor = "rgba(248, 169, 244, 0.6)";
        mainTitle.top = "-1%";
        mainTitle.fontSize = "4vw";
        // mainTitle.fontSize = "60px";
        mainTitle.fontWeight = "100";
        // particleCanvas.opacity = "0";
    } else {
        mainTitle.padding = "20px 20px";
        mainTitle.backgroundColor = "rgba(255, 105, 180, 0)";
        mainTitle.top = "40%";
        // mainTitle.fontSize = "100px";
        mainTitle.fontSize = "7vw";
        particleCanvas.opacity = "1";
    }
}

function fadeOutFader() {
    fader = document.getElementById("black");
    fader.style.opacity = "0";
    document.getElementById("scroll-up-smaller").style.opacity = "1";
}
