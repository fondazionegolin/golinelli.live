document.addEventListener("DOMContentLoaded", function() {
  // Ottieni le intestazioni "Free" ed "Edu"
  const freeHeader = document.querySelector('.toggle-header:nth-of-type(2)');
  const eduHeader = document.querySelector('.toggle-header:nth-of-type(3)');

  // Aggiungi gestore eventi al click sulle intestazioni
  freeHeader.addEventListener('click', function() {
    toggleContentVisibility('free');
  });

  eduHeader.addEventListener('click', function() {
    toggleContentVisibility('edu');
  });

  // Funzione per mostrare/nascondere i contenuti
  function toggleContentVisibility(plan) {
    const contentRows = document.querySelectorAll('.toggle-content');

    contentRows.forEach(row => {
      const toggleCell = row.querySelector('.toggle-cell:nth-of-type(' + (plan === 'free' ? 2 : 3) + ')');
      toggleCell.classList.toggle('hidden');
    });
  }
});
