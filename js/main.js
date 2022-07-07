const burgerItem = document.querySelector('.burger');
const menuItem = document.querySelector('.menu');
const overlayItem = document.querySelector('.overlay');

burgerItem.addEventListener('click',()=>{
    menuItem.classList.toggle('active');
    burgerItem.classList.toggle('active');
    overlayItem.classList.toggle('active');
})