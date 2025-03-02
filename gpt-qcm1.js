document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
    
    forms.forEach(form => {
        form.addEventListener("change", (event) => {
            console.log(`Réponse sélectionnée : ${event.target.nextElementSibling.textContent}`);
        });
    });
});
