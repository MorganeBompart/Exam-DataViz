// Récupérer l'élément du compteur
var counterElement = document.getElementById('counter');
// Variable pour stocker la valeur du compteur
var counterValue = 0;

// Récupérer les boutons
var incrementBtn = document.getElementById('incrementBtn');
var decrementBtn = document.getElementById('decrementBtn');
var resetBtn = document.getElementById('resetBtn');

// Ajouter les gestionnaires d'événements aux boutons
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

function increment() {
  // Incrémenter la valeur du compteur
  counterValue++;
  // Mettre à jour le texte de l'élément du compteur
  counterElement.textContent = counterValue;
}

function decrement() {
  // Décrémenter la valeur du compteur
  counterValue--;
  // Mettre à jour le texte de l'élément du compteur
  counterElement.textContent = counterValue;
}

function reset() {
  // Réinitialiser la valeur du compteur à 0
  counterValue = 0;
  // Mettre à jour le texte de l'élément du compteur
  counterElement.textContent = counterValue;
}
