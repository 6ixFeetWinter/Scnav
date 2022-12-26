const tl = gsap.timeline();
const title = document.querySelector("hgroup");
const menu = document.querySelector("header");
const load = document.querySelector(".load");
const button = document.querySelector(".firstView-Button");

tl.from(load, {opacity: 1, duration: 1})
  .from(title, {opacity: 0, duration: 0.5 })
  .from(menu, {opacity: 0, duration: 0.5 })
  .from(button, {opacity: 0, duration: 0.5 });

const target = document.querySelector(".up");
const target1 = document.querySelector(".up1");
const target2 = document.querySelector(".up2");
let winH = window.innerHeight;
let targetpos = target.getBoundingClientRect().top + window.pageYOffset;
let targetpos1 = target1.getBoundingClientRect().top + window.pageYOffset;
let targetpos2 = target2.getBoundingClientRect().top + window.pageYOffset;
window.addEventListener('resize',function(){
    winH = window.innerHeight;
    targetpos = target.getBoundingClientRect().top + window.pageYOffset;
    targetpos1 = target1.getBoundingClientRect().top + window.pageYOffset;
    targetpos2 = target2.getBoundingClientRect().top + window.pageYOffset;
});
window.addEventListener('scroll',function(){
    let scroll = window.scrollY;
    if(scroll > (targetpos - (winH / 2))){
        target.classList.remove("mov");
    }
    else{
        target.classList.add("mov");
    }
    if(scroll > (targetpos1 - (winH / 2))){
        target1.classList.remove("mov");
    }
    else{
        target1.classList.add("mov");
    }
    if(scroll > (targetpos2 - (winH / 2))){
        target2.classList.remove("mov");
    }
    else{
        target2.classList.add("mov");
    }
});
