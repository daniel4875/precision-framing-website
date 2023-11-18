// SLIDE-IN ANIMATION

// set threshold to 0.5 to make animation only occur when target element is scrolled fully
// onto the screen (target element is half off of the right-hand side of the screen before
// animation, so when the element is 50% on screen, it is completely on the screen vertically)
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

let slideInObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("start-slide-in");
        }
        else {
            // MAKE THE ANIMATION REPLAYABLE
            //entry.target.classList.remove("start-slide-in");
        }
    });
}, options);

// get all elements to animate and get observer to observe them
// (to animate them once they are on screen)
let hiddenElements = document.querySelectorAll(".slide-in-left, .slide-in-right");
hiddenElements.forEach(element => slideInObserver.observe(element));


// PARALLAX

let parallaxObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let target = entry.target;
        function eventListener(event) {
            // get amountScrolled since target appeared on screen
            let topOfPage = document.body.getBoundingClientRect().top;
            let topOfBanner = target.parentElement.getBoundingClientRect().top;
            let distToTargetFromPageTop = topOfBanner - topOfPage;
            let amountScrolled = window.scrollY - distToTargetFromPageTop;
            // make amountToMove the amountScrolled scaled down with a multiplier
            let amountToMove = amountScrolled * 0.5;
            // move target by the amountToMove so target ends up moving less than other elements
            // on screen (for parallax effect)
            target.style.transform = "translateY(" + amountToMove + "px)";
        }
        if (entry.isIntersecting) {
            window.addEventListener("scroll", eventListener);
        }
        else {
            window.removeEventListener("scroll", eventListener);
        }
    });
});

// get all banner images and get observer to observe them
// (to apply parallax effect once they are on screen)
let parallaxElements = document.querySelectorAll(".banner > img");
parallaxElements.forEach(element => parallaxObserver.observe(element));