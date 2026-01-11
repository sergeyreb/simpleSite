let topBtn = document.getElementById("topBtn");
const offsetY = document.documentElement.clientHeight; // высота viewport

window.onscroll = function() {
    if(document.body.scrollTop > offsetY || document.documentElement.scrollTop > offsetY) {
        topBtn.style.display = "block";        
    } else {
        topBtn.style.display = "none";    
    }
}

function goTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

//LightBox
function openLightBox(imageSrc) {
    document.getElementById('lightboxImg').src = imageSrc;
    document.getElementById('lightbox').style.display = 'flex';
}
function closeLightBox(){
    document.getElementById('lightbox').style.display = 'none';
}

//Burger-menu
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-icon');
    const menuList = document.querySelector('.menu-list');

    //Меню: открытие и закрытие

    if (menuToggle && menuList) {
        menuToggle.addEventListener('click', () => {
            menuList.classList.toggle('active');
        });
    }
});