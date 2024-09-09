document.getElementById('dc-pfp').addEventListener('click', function() {
    document.getElementById('popup').classList.add('show');
    document.getElementById('overlay').classList.add('show');
});

function closePopup() {
    document.getElementById('popup').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}