    // Mobile menu toggle
    const hamb = document.getElementById('hamb');
    const menu = document.getElementById('menu');
    hamb.addEventListener('click', () => menu.classList.toggle('open'));

    // Reveal on scroll
    const revealables = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('show'); } });
    }, { threshold: 0.12 });
    revealables.forEach(el => io.observe(el));