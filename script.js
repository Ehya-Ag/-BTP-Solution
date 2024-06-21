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