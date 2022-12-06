//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav= header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }
    else {
        header.classList.remove('navbar-fixed');
    }
}

//Transfer button
const transfer = document.querySelector('#transfer');
const pay = document.querySelector('#pay');
const viewTrans = document.querySelector('#viewTrans');
const exit = document.querySelector('#exit');

transfer.addEventListener('click', function() {
    viewTrans.classList.toggle('hidden');
});

exit.addEventListener('click', function() {
    viewTrans.classList.toggle('hidden');
});


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const sideBar = document.querySelector('#sidebar');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

hamburger.addEventListener('click', function() {
    sideBar.classList.toggle('left-[-300px]');
});




//submit
document.getElementById("submit").onclick = function () {
    page.href = "#index.html";
};



// Carousel
currentSlideID = 1;
sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;
function next(){
    if(currentSlideID<totalSlides){
        currentSlideID++;
        showSlide();
        
    }
}

function prev(){
    if(currentSlideID>1){
        currentSlideID--;
        showSlide();
    }
}

function showSlide(){
    slides = document.getElementById('slider').getElementsByTagName('li')
    for(let index = 0; index < totalSlides; index++ ){
        const element = slides[index];
        if(currentSlideID===index+1){
            element.classList.remove('hidden')
        }else{
            element.classList.add('hidden')
        }
    }
}