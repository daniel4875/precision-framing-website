// SET OPENING STATUS

let openingStatus = document.getElementById("opening-status");

if (openingStatus !== null) {
    let date = new Date();
    let hour = date.getHours();
    let day = date.getDay();
    let closedStatusTomorrow = "OPENS 10AM TOMORROW";
    let closedStatusToday = "OPENS 10AM"
    let closedWeekendStatus = "OPENS 10AM MONDAY"
    let openStatus = "WE ARE OPEN"
    let lastHourStatus = "CLOSING SOON AT "
    let status;
    //                 Su  Mo  Tu  We  Th  Fr  Sa
    let closingTimes = [0, 19, 17, 19, 17, 19, 0];

    // if day is Saturday, or is Friday and closed
    if (day === 6 || (day === 5 && hour >= closingTimes[5]))
        status = closedWeekendStatus;
    // if day is Sunday
    else if (day === 0)
        status = closedStatusTomorrow;
    // if after closed
    else if (hour >= closingTimes[day])
        status = closedStatusTomorrow;
    // if before open
    else if (hour < 10)
        status = closedStatusToday;
    // if hour before close
    else if (hour === closingTimes[day] - 1)
        status = lastHourStatus + (closingTimes[day]-12).toString() + "PM";
    // if open
    else
        status = openStatus;

    openingStatus.innerText = status;
}



// PARALLAX

// get banner image
let parallaxElement = document.querySelector(".banner img");

function parallax() {
    let parallaxSpeed = 0.4;
    let amountScrolled = window.scrollY;
    let newYPos = (amountScrolled * parallaxSpeed) + "px";
    // update image's y position to new position
    parallaxElement.style.top = newYPos;
}

let ticking = false;

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            parallax();
            ticking = false;
        });
    }
    ticking = true;
}

window.addEventListener("scroll", onScroll, false);



// TESTIMONIAL MODAL

let modal = document.querySelector("dialog");
let modalContainer = document.getElementById("modal-container");
let modalCloseBtn = document.getElementById("modal-close-btn");

function showTestimonialModal() {
    showModal();
}

// close modal when background clicked and not inside the modal container
modal.addEventListener("click", () => {
    closeModal();
});
modalContainer.addEventListener("click", (event) => {
    event.stopPropagation();
})

// close modal when close button clicked
modalCloseBtn.addEventListener("click", () => {
    closeModal();
})

function showModal() {
    modal.showModal();
    document.querySelector("html").style.overflow = "hidden";
}

function closeModal() {
    modal.close();
    document.querySelector("html").style.overflow = "unset";
}
