import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const photosMarkup = createPhotosMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", photosMarkup);

function createPhotosMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
    `;
    })
    .join("");
}

gallery.addEventListener("click", onLinkClick);

function onLinkClick(event) {
  event.preventDefault();

  if (event.target.classList.contains(".gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show(() => window.addEventListener("keydown", onKeyClose));

  function onKeyClose(event) {
    if (event.code === "Escape") {
      instance.close(() => window.removeEventListener("keydown", onKeyClose));
    }
  }
}
