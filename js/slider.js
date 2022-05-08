(function(){
    
    const sliders = [...document.querySelectorAll('.testimonios__body')];//raid
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    let value;
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });
    
    const changePosition= (add)=>{
        //console.log(add);
        const currentTestimonio= document.querySelector('.testimonios__body--show').dataset.id;
        value= Number(currentTestimonio);
        value+= add;
    
        sliders[Number(currentTestimonio)-1].classList.remove('testimonios__body--show');
        if(value === sliders.length+1 || value === 0){
                value = value === 0? sliders.length : 1;

        }
        sliders[value-1].classList.add('testimonios__body--show');
    }

})();