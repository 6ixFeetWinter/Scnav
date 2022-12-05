document.querySelector('.menuWapper').addEventListener('click',()=>{
    document.querySelector('.menuline').classList.toggle('active');
    document.querySelector('.pc').classList.toggle('menuActive');
    document.querySelector('.menuText').classList.toggle('ternColor');
});