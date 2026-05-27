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