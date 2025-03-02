// Sélectionner tous les boutons "Vérifier"
const checkButtons = document.querySelectorAll('.check-btn');

// Ajouter un gestionnaire d'événements à chaque bouton
checkButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Trouver le feedback associé au bouton
    const feedback = button.nextElementSibling;

    // Afficher le feedback
    feedback.classList.remove('hidden');
  });
});