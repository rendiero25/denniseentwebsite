function adjustHeight() {
    const container = document.getElementById('#container');
    container.style.height = window.innerHeight + 'px';
}

window.addEventListener('resize', adjustHeight);
window.addEventListener('load', adjustHeight);