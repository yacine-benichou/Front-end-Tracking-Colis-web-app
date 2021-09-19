const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li'); // All element descendants of node returned instead of just the first one

    burger.addEventListener('click', () => {
        // toggle Nav
        nav.classList.toggle('nav-active');

        // animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s` // it is called Template literals, use ` when you want to put variables/expression inside a string by using ${ var_name_or_expression }
            }
        });
        // Burger animation
        burger.classList.toggle('toggle');
    });
    
}

navSlide();