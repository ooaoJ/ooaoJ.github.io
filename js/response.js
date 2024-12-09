const menuNav = document.getElementById('menu');
const menuIcon = document.getElementById('menu-hamburguer');



function openMenu(){
    if (menuNav.style.display == 'none'){
        menuNav.style.display = 'flex';
    }else{
        menuNav.style.display = 'none';
    }
}
