document.getElementById('dc-pfp').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    popup.style.display = 'block';
    overlay.style.display = 'block';

    setTimeout(() => {
        popup.classList.add('show');
        overlay.classList.add('show');
    }, 10);
});

function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    popup.classList.remove('show');
    overlay.classList.remove('show');

    setTimeout(() => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }, 300);
}

// document.addEventListener('mousemove', function(e) {
//     const popup = document.getElementById('popup');
//     const movementStrength = 10;

//     const windowWidth = window.innerWidth / 2;
//     const windowHeight = window.innerHeight / 2;

//     const mouseX = (windowWidth - e.pageX) / movementStrength;
//     const mouseY = (windowHeight - e.pageY) / movementStrength;

//     popup.style.transform = `translate(-50%, -50%) translate(${mouseX}px, ${mouseY}px)`;
// });