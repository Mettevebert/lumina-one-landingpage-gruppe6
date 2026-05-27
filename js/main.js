// ── Fix header offset dynamisk ──────────────────────────────
function fixHeaderOffset() {
    const topBar = document.querySelector('aside.top-bar');
    const header = document.querySelector('header');
    const hero   = document.querySelector('.hero');

    const topBarH = topBar.offsetHeight;
    const headerH = header.offsetHeight;

    header.style.top      = topBarH + 'px';
    hero.style.paddingTop = (topBarH + headerH) + 'px';
}

fixHeaderOffset();
window.addEventListener('resize', fixHeaderOffset);

// ── Features carousel ───────────────────────────────────────
function initCarousel() {
    const images = document.querySelectorAll('.feat-img');
    const dotsContainer = document.querySelector('figcaption.carousel-dots');
    let current = 0;

    // Byg dots dynamisk
    images.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('dot--active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    function goTo(index) {
        images[current].classList.remove('active');
        dotsContainer.children[current].classList.remove('dot--active');
        current = (index + images.length) % images.length;
        images[current].classList.add('active');
        dotsContainer.children[current].classList.add('dot--active');
    }

    document.querySelector('.carousel-btn--prev')
        .addEventListener('click', () => goTo(current - 1));
    document.querySelector('.carousel-btn--next')
        .addEventListener('click', () => goTo(current + 1));
}

initCarousel();