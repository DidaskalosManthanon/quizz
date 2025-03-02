// Script minimal pour gérer l'affichage MathJax (aucune interaction supplémentaire ici)
document.addEventListener("DOMContentLoaded", () => {
    console.log("QCM chargé avec succès. MathJax est en cours de rendu.");
    // Si vous souhaitez ajouter une validation des réponses, décommentez et adaptez le code suivant :
    /*
    const correctAnswers = {
        q1: "5√2", // Exemple de réponse correcte
        q2: "7×√3/2",
        // Ajouter les autres réponses correctes ici
    };

    document.querySelectorAll("input[type='radio'], input[type='checkbox']").forEach(input => {
        input.addEventListener("change", () => {
            const questionId = input.name;
            const userAnswer = input.value;
            console.log(`Réponse sélectionnée pour ${questionId} : ${userAnswer}`);
            // Logique de validation ici
        });
    });
    */
});