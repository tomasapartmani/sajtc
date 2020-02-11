var backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if(window.pageYOffset > 400) {
        if(!backToTopButton.classList.contains("btnEnterance")){
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEnterance");
            backToTopButton.style.display = "block";
        }
    } else {
        if(backToTopButton.classList.contains("btnEnterance")){
            backToTopButton.classList.remove("btnEnterance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function() {
               backToTopButton.style.display = "none";
            }, 300);
        }
    }
};

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
    var targetPosition = 0;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 1200;
    var start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if(!start) start = timestamp;
        var progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if(progress < duration) window.requestAnimationFrame(step);
    };
};

function easeInOutCubic(t, b, c, d) {
    t /= d/2;
    if(t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
};
