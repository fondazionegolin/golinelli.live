let colors = ['#FF5C5C', '#FFAC5C', '#FFDD5C', '#795548', '#9C27B0', '#000000', '#E91E63', '#FF5722'];
let maxRadius = 400;
let minRadius = 150;

function setup() {
  createCanvas(800, 600);
  noStroke();
  textSize(16);
}

function draw() {
  // Non fare nulla qui, in modo che le macchie rimangano sullo schermo
}

function drawRandomShape(x, y, radius) {
 beginShape();
  for (let angle = 0; angle < TWO_PI; angle += 0.03) {
    let nx = x + cos(angle) * radius;
    let ny = y + sin(angle) * radius;
    let noiseFactorX = noise(nx * 0.01, frameCount * 0.01) * 20; // Regola il valore 50 per controllare la quantità di rumore lungo l'asse x
    let noiseFactorY = noise(ny * 0.01, frameCount * 0.01) * 20; // Regola il valore 50 per controllare la quantità di rumore lungo l'asse y
    vertex(nx + noiseFactorX*random(0,5), ny + noiseFactorY*random(0,10));
  }
  endShape(CLOSE);
}
function mouseClicked() {
  // Ottieni la frase inserita dall'utente
  let inputText = prompt("Inserisci una frase per creare le macchie:");

  if (inputText) {
    let words = inputText.split(' '); // Divide la frase in parole utilizzando lo spazio come separatore

    let yPos = 100; // Posizione verticale iniziale
    for (let word of words) {
      let randomColor = random(colors);
      let randomX = random(width);
      let randomRadius = random(minRadius, maxRadius);

      fill(color(randomColor + '80')); // Il '40' indica il livello di trasparenza (da 00 a FF in esadecimale)
      drawRandomShape(randomX, yPos, randomRadius);
      fill(0);
     // textAlign(CENTER, CENTER);
   //   text(word, randomX, yPos);

      yPos += 50; // Incrementa la posizione verticale per la prossima parola
    }
  }
}