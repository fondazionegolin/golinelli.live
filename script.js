
//   // Funzione per evidenziare la voce di menu attiva
//   function highlightActiveMenuItem() {
//     const sections = document.querySelectorAll("section"); // Seleziona tutte le sezioni della pagina
//     const navLinks = document.querySelectorAll("nav a"); // Seleziona tutti i link del menu

//     // Rimuovi la classe "active" da tutti i link del menu
//     navLinks.forEach(link => link.classList.remove("active"));

//     // Cicla attraverso le sezioni e controlla quale sezione è attualmente visibile
//     sections.forEach(section => {
//       const bounding = section.getBoundingClientRect();
//       if (bounding.top <= 150 && bounding.bottom >= 150) {
//         const sectionId = section.getAttribute("id");
//         const correspondingLink = document.querySelector(`nav a[href="#${sectionId}"]`);
//         if (correspondingLink) {
//           correspondingLink.classList.add("active"); // Aggiungi la classe "active" al link del menu corrispondente
//         }
//       }
//     });
//   }

//   // Richiama la funzione quando la pagina viene caricata e quando viene effettuato uno scroll
//   window.addEventListener("load", highlightActiveMenuItem);
//   window.addEventListener("scroll", highlightActiveMenuItem);


//   document.addEventListener("DOMContentLoaded", function() {
//     // Funzione per mostrare il container quando si fa clic sul pulsante "Scopri di più"
//     function showHiddenContainer() {
//       const hiddenContainer = document.getElementById("hiddenContainer");
//       hiddenContainer.style.display = "block";
//       scrollToContent(); // Scroll automatico verso la sezione "scrollToContent"
//     }
  
//     // Funzione per lo scroll automatico verso la sezione "scrollToContent"
//     function scrollToContent() {
//       const scrollToContentSection = document.getElementById("scrollToContent");
//       scrollToContentSection.scrollIntoView({ behavior: "smooth" });
//     }
  
//     // Richiama la funzione quando si fa clic sul pulsante "Scopri di più"
//     const scopriButton = document.getElementById("scopriButton");
//     scopriButton.addEventListener("click", showHiddenContainer);
//   });
  
//   function showHiddenContainer() {
//     const hiddenContainer = document.getElementById("hiddenContainer");
//     hiddenContainer.style.display = "block";
  
//     // Scrolla verso il container appena mostrato
//     hiddenContainer.scrollIntoView({ behavior: "smooth" });
//   }

//   // Variabile di stato per tenere traccia della visibilità del container
// let isContainerVisible = false;

// // Funzione per mostrare o nascondere il container quando si fa clic sul pulsante "Scopri di più"
// function toggleHiddenContainer() {
//   const hiddenContainer = document.getElementById("hiddenContainer");
//   isContainerVisible = !isContainerVisible;

//   // Se il container è visibile, scorrere verso il basso
//   if (isContainerVisible) {
//     hiddenContainer.style.display = "block";
//     hiddenContainer.scrollIntoView({ behavior: "smooth" });
//   } else {
//     // Altrimenti, scorrere verso l'alto fino alla home page
//     hiddenContainer.style.display = "none";
//     document.getElementById("home").scrollIntoView({ behavior: "smooth" });
//   }
// }

// // // Richiama la funzione quando si fa clic sul pulsante "Scopri di più"
// const scopriButton = document.getElementById("scopriButton");
// scopriButton.addEventListener("click", toggleHiddenContainer);


    // Funzione per evidenziare la voce di menu attiva
    function highlightActiveMenuItem() {
      // Resto del codice per evidenziare il menu attivo come prima
    }

    // Richiama la funzione quando la pagina viene caricata e quando viene effettuato uno scroll
    window.addEventListener("load", highlightActiveMenuItem);
    window.addEventListener("scroll", highlightActiveMenuItem);

    document.addEventListener("DOMContentLoaded", function() {
      // Variabile di stato per tenere traccia della visibilità del container
      let isContainerVisible = false;

      // Funzione per mostrare o nascondere il container quando si fa clic sul pulsante "Scopri di più"
      function toggleHiddenContainer() {
        const hiddenContainer = document.getElementById("hiddenContainer");
        isContainerVisible = !isContainerVisible;

        const scrollOptions = {
          behavior: "smooth",
          block: "start",
          inline: "nearest",
          duration: 3000 // Puoi regolare questo valore per cambiare la velocità dell'animazione
        };
        // Se il container è visibile, scorrere verso il basso
        if (isContainerVisible) {
          hiddenContainer.style.display = "block";
          hiddenContainer.scrollIntoView(scrollOptions);
        } else {
          // Altrimenti, scorrere verso l'alto fino alla home page
          hiddenContainer.style.display = "none";
          document.getElementById("home").scrollIntoView(scrollOptions);
        }
      }

      // Richiama la funzione quando si fa clic sul pulsante "Scopri di più"
      const scopriButton = document.getElementById("scopriButton");
      scopriButton.addEventListener("click", toggleHiddenContainer);
    });
