// IMAGE MODAL

let galleryImages = document.querySelectorAll(".large-img-gallery > .img-container > img");
let modal = document.querySelector("dialog");
let modalImage = modal.querySelector("img");

// open modal and show corresponding image in modal when any image in gallery is clicked
galleryImages.forEach(image => {
    image.addEventListener("click", event => {
        modalImage.src = image.src;
        modal.showModal();
    });
});

// close modal when background clicked
modal.addEventListener("click", event => {
    modal.close();
});
