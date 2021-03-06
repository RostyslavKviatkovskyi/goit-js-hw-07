import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const photosMarkup = createPhotosMarkup(galleryItems);

function createPhotosMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">  
    <a class="gallery__item" href="${original}">
      <img 
        class="gallery__image" 
        src="${preview}"
        alt="${description}" />
    </a>
    </li>
    `;
    })
    .join("");
}

galleryEl.insertAdjacentHTML("beforeend", photosMarkup);

const gallery = new SimpleLightbox(".gallery__item", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
