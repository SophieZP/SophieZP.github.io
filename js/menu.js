(function(){
    const opendButton= document.querySelector('.nav__menu');
    const menu= document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    opendButton.addEventListener('click',()=>{
        menu.classList.add('nav__link--show');

    });
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    //menu.classList,toggle si la tiene la quita si la quieta la tiene
})();