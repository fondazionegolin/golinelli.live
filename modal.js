const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.querySelector(".close-button");
const imageItems = document.querySelectorAll(".image-item img");

let currentImageIndex = 0;

// Funzione per mostrare il modale con l'immagine ingrandita
function showImageModal(url, index) {
  modal.style.display = "flex"; // Mostra il modale
  modalImage.src = url; // Imposta l'URL dell'immagine nel modale
  modalImage.alt = "Immagine " + index; // Imposta l'attributo alt dell'immagine
  currentImageIndex = parseInt(index) - 1; // Imposta l'indice corrente dell'immagine

  // Aggiungi event listener per le frecce della tastiera (keydown)
  document.addEventListener("keydown", handleKeyPress);
}

// Funzione per chiudere il modale
function closeModal() {
  modal.style.display = "none"; // Nascondi il modale

  // Rimuovi l'event listener per le frecce della tastiera (keydown)
  document.removeEventListener("keydown", handleKeyPress);
}

// Funzione per gestire i tasti delle frecce e il tasto Esc
function handleKeyPress(event) {
  if (event.key === "ArrowLeft") {
    // Freccia sinistra - visualizza l'immagine precedente
    showPreviousImage();
  } else if (event.key === "ArrowRight") {
    // Freccia destra - visualizza l'immagine successiva
    showNextImage();
  } else if (event.key === "Escape") {
    // Tasto Esc - chiudi il modale
    closeModal();
  }
}

// Funzione per mostrare l'immagine successiva
function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageItems.length;
  const nextImage = imageItems[currentImageIndex];
  const nextImageUrl = nextImage.src;
  const nextImageAlt = nextImage.getAttribute("alt");
  modalImage.src = nextImageUrl;
  modalImage.alt = nextImageAlt;
}

// Funzione per mostrare l'immagine precedente
function showPreviousImage() {
  currentImageIndex = (currentImageIndex - 1 + imageItems.length) % imageItems.length;
  const previousImage = imageItems[currentImageIndex];
  const previousImageUrl = previousImage.src;
  const previousImageAlt = previousImage.getAttribute("alt");
  modalImage.src = previousImageUrl;
  modalImage.alt = previousImageAlt;
}

// Aggiungi evento di click a tutte le immagini
imageItems.forEach(image => {
  image.addEventListener("click", () => {
    // Recupera l'URL dell'immagine cliccata
    const imageUrl = image.src;
    // Recupera l'indice dell'immagine cliccata dal data-index attributo
    const imageIndex = image.getAttribute("data-index");
    // Visualizza il modale con l'immagine ingrandita
    showImageModal(imageUrl, imageIndex);
  });
});

// Aggiungi evento di click al pulsante di chiusura del modale
closeButton.addEventListener("click", () => {
  closeModal();
});

// Chiudi il modale cliccando fuori da esso
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
