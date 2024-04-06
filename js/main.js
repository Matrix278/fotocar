//------------------------Change copyright year------------------------//
var date = new Date();
if (date.getFullYear() > 2024) {
  document.querySelector("#copyright-year").innerText =
    " - " + date.getFullYear();
}

// Initialize SimpleLightbox
var lightbox = new SimpleLightbox('a[data-lightbox="gallery"]');
