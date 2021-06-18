var participation = document.querySelector('.participation');
var participationBtn = document.querySelector('#participation-btn');

participationBtn.addEventListener('click', function() {
    participation.style.display = 'block';
});


var formCloseBtn = document.querySelector('#form-close-btn');
formCloseBtn.addEventListener('click', function() {
    participation.style.display = 'none';
});