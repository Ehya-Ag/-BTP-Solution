document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.getElementById('menu-toggle');
        const nav = document.getElementById('nav');

        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('nav-ouvert');
            menuToggle.classList.toggle('ouvert');
        });


    // const form = document.getElementById('contact-form');
    // form.addEventListener('submit', function(event) {
    //     let isValid = true;
    //     const inputs = form.querySelectorAll('input[required], textarea[required]');
    //     inputs.forEach(input => {
    //         if (!input.value.trim()) {
    //             isValid = false;
    //             input.classList.add('invalid');
    //         } else {
    //             input.classList.remove('invalid');
    //         }
    //     });

    //     if (!isValid) {
    //         event.preventDefault();
    //         alert('Veuillez remplir tous les champs obligatoires.');
    //     }
    // });



});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// Lorsque l'utilisateur clique sur le bouton, remonter en haut de la page
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}
/*Pour la validation du formulaire */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formulaire');

    form.addEventListener('submit', function(event) {
        // Validation du champ Nom
        const nomField = form.querySelector('#nom');
        const nomValue = nomField.value.trim();
        const nomRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/;

        if (!nomRegex.test(nomValue)) {
            alert('Le champ Nom ne peut contenir que des lettres et des espaces.');
            event.preventDefault();
            return;
        }

        // Validation du champ Email (exclusion de Gmail)
        const emailField = form.querySelector('#mail');
        const emailValue = emailField.value.trim();
        const gmailRegex = /@gmail\.com$/;

        if (gmailRegex.test(emailValue)) {
            alert('Les adresses Gmail ne sont pas acceptées utilise une adresse professionnelle.');
            event.preventDefault();
            return;
        }

        // Validation du champ Message (caractères spéciaux et longueur minimale)
        const messageField = form.querySelector('#message');
        const messageValue = messageField.value.trim();
        const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;

        if (specialCharsRegex.test(messageValue)) {
            alert('Le champ Message ne doit pas contenir de caractères spéciaux.');
            event.preventDefault();
            return;
        }

        if (messageValue.length < 300) {
            alert('Le champ Message doit contenir au moins 300 caractères.');
            event.preventDefault();
            return;
        }

        // Si toutes les validations sont passées, le formulaire peut être soumis
        alert('Formulaire soumis avec succès !');
    });
});
