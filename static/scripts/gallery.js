// SHUFFLE IMAGES

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// get list of all gallery image paths
let images = []
let numImages = 33
for (let i = 1; i <= numImages; i++) {
    let imageNum = i > 9 ? "" + i : "0" + i;
    images[i-1] = "/images/gallery/gallery" + imageNum + ".jpg";
}

// shuffle gallery image paths
shuffle(images);

// insert images into page
let gallery = document.querySelector(".large-img-gallery");
for (let i = 0; i < numImages; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    div.classList.add("img-container")
    img.src = images[i];
    div.appendChild(img);
    gallery.appendChild(div);
}



// IMAGE MODAL

let galleryImages = document.querySelectorAll(".large-img-gallery > .img-container > img");
let modal = document.querySelector("dialog");
let modalImage = modal.querySelector("img");

// open modal and show corresponding image in modal when any image in gallery is clicked
galleryImages.forEach(image => {
    image.addEventListener("click", (event) => {
        modalImage.src = image.src;
        modal.showModal();
    });
});

// close modal when background clicked
modal.addEventListener("click", (event) => {
    modal.close();
});
