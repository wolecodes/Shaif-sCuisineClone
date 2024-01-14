const navIconEL = document.querySelector(".nav__icon");
const navCloseIcon = document.querySelector(".nav__close");
const navBgOverlay = document.querySelector(".nav__bgOverlay");
const navList = document.querySelector(".nav__list");

const navOpen = () =>{
    navList.classList.add('show');
    navBgOverlay.classList.add("active")
    document.body.style= 'visibility: visible; height: 100vh; width:100vm; overflow: hidden';
}

//function for close navclose icon

const navClose = () => {
    navList.classList.remove("show");
    document.style ='visibility: visible; height: 100vh width 100vm; overflow: hidden';

}





navIconEL.addEventListener('click', navOpen())
navCloseIcon.addEventListener('click', navClose());