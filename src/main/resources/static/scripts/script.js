// SLIDE-IN ANIMATION

// set threshold to 0.45 to make animation only occur when target element is scrolled fully
// onto the screen (target element is half off of the right-hand side of the screen before
// animation, so when the element is 50% on screen, it is completely on the screen vertically)
// (0.45 instead of 0.5 since for some browsers the element isn't quite half on screen when scrolled fully)
let slideInOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.45,
};

let slideInObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let opacity = entry.target.getAttribute("data-opacity");
            if (opacity === "transparent") {
                entry.target.classList.add("start-slide-in-transparent");
            }
            else {
                entry.target.classList.add("start-slide-in-opaque");
            }
        }
    });
}, slideInOptions);

// get all elements to animate and get observer to observe them
// (to animate them once they are on screen)
let slideInElements = document.querySelectorAll(".slide-in-left, .slide-in-right");
slideInElements.forEach(element => slideInObserver.observe(element));



// FADE-IN ANIMATION

// set threshold to 0 to make animation occur as soon as target element is on screen
let fadeInOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
}

let fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("start-fade-in");
        }
    });
}, fadeInOptions);

// get all elements to animate and get observer to observe them
// (to animate them once they are on screen)
let fadeInElements = document.querySelectorAll(".fade-in");
fadeInElements.forEach(element => fadeInObserver.observe(element));
