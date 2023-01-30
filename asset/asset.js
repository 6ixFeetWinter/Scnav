
let winH = window.innerHeight;
const target = document.querySelector(".last");
let targetpos = target.getBoundingClientRect().top + window.pageYOffset;
window.addEventListener('resize',function(){
    winH = window.innerHeight;
    targetpos = target.getBoundingClientRect().top + window.pageYOffset;
});
window.addEventListener('scroll',function(){
    let scroll = window.scrollY;
    if(scroll > targetpos - (winH / 3)){
        window.localStorage.setItem(page,1);
    }
});