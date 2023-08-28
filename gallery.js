const galleryItems = document.querySelectorAll(".gallery-item");
const galleryIndicators = document.querySelectorAll(".gallery-indicator");
let currentSlide = 0;

// Funzione per mostrare l'elemento corrente della galleria
function showSlide(index) {
  galleryItems.forEach((item, i) => {
    item.style.transform = `translateX(-${index * 100}%)`; // Sposta l'elemento corrente al centro della galleria
    galleryIndicators[i].classList.toggle("active", i === index); // Imposta l'indicatore corrente come attivo
  });
}

// Aggiungi event listener per gli indicatori della galleria
galleryIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlide = index; // Imposta l'indice dell'elemento corrente
    showSlide(currentSlide);
  });
});

// Aggiungi event listener per le frecce della tastiera (keydown)
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    // Freccia sinistra - visualizza l'elemento precedente
    currentSlide = (currentSlide - 1 + galleryItems.length) % galleryItems.length;
    showSlide(currentSlide);
  } else if (event.key === "ArrowRight") {
    // Freccia destra - visualizza l'elemento successivo
    currentSlide = (currentSlide + 1) % galleryItems.length;
    showSlide(currentSlide);
  } else if (event.key === "Escape") {
    // Tasto Esc - chiudi il modale
    closeModal();
  }
});

// Mostra il primo elemento della galleria all'avvio
showSlide(currentSlide);
