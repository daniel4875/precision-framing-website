// SET OPENING STATUS AND NOTICE BANNER

let noticeBanner = document.getElementById("notice-banner");
let openingStatus = document.getElementById("opening-status");

// Notice banner hidden by default
noticeBanner.style.display = "none";

function showNoticeBanner(notice) {
    // Show notice banner
    noticeBanner.style.display = "";
    // Set notice message
    noticeBanner.getElementsByTagName("p")[0].innerText = notice;
}

function checkIfClosedForChristmas() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;

    // Return true if today is between 24th Dec and 5th Jan inclusive
    return (month === 12 && day >= 24) || (month === 1 && day <= 5);
}

async function checkForBankHoliday() {
    try {
        // Get list of bank holidays
        const response = await fetch("https://www.gov.uk/bank-holidays.json");
        const data = await response.json();
        const events = data["england-and-wales"].events;

        // Check if any bank holiday in list occurs today
        const date = new Date().toISOString().split("T")[0];
        return events.some(holiday => holiday.date === date);
    } catch (error) {
        console.error("Failed to check for bank holiday");
        return false;
    }
}

async function setOpenStatusAndNoticeBanner() {
    const date = new Date();
    const hour = date.getHours();
    const day = date.getDay();
    const closedStatusTomorrow = "OPENS 10AM TOMORROW";
    const closedStatusToday = "OPENS 10AM"
    const closedWeekendStatus = "OPENS 10AM MONDAY"
    const closedBankHolidayStatus = "CLOSED FOR BANK HOLIDAY";
    const closedChristmasStatus = "CLOSED FOR CHRISTMAS - BACK OPEN ON THE 6TH JANUARY";
    const openStatus = "WE ARE OPEN"
    const lastHourStatus = "CLOSING SOON AT "
    let status;
    //                   Su  Mo  Tu  We  Th  Fr  Sa
    const closingTimes = [0, 19, 17, 19, 17, 19, 0];

    const closedForChristmas = checkIfClosedForChristmas();
    const isBankHoliday = await checkForBankHoliday();

    if (closedForChristmas) {
        showNoticeBanner(closedChristmasStatus);
        openingStatus.style.display = "none"; // Hide open status
    } else if (isBankHoliday) {
        showNoticeBanner(closedBankHolidayStatus);
        openingStatus.style.display = "none"; // Hide open status
    // if day is Saturday, or is Friday and closed
    } else if (day === 6 || (day === 5 && hour >= closingTimes[5]))
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

setOpenStatusAndNoticeBanner();



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
});

// close modal when close button clicked
modalCloseBtn.addEventListener("click", () => {
    closeModal();
});

function showModal() {
    modal.showModal();
    document.querySelector("html").style.overflowY = "hidden";
}

function closeModal() {
    modal.close();
    document.querySelector("html").style.overflowY = "unset";
}
