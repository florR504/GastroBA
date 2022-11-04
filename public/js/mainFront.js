window.addEventListener('load', function(){
 let $menuList = document.querySelector('#menuOpen');
 let $showcase = document.querySelector('.showcase');
 let $toggle = document.querySelector('.toggle');

 
 function openLateralMenu(){
    $showcase.classList.add('active')
    $toggle.classList.add('active')
 }

 $menuList.addEventListener('click', openLateralMenu)

})