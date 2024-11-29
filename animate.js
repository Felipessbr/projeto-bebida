let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("munu-mobile");
let overlay = document.getElementById('overley-menu');

btnMenu.addEventListener('click',() => {
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click',() => {
    menu.classList.remove('abrir-menu')
});

overlay.addEventListener('click',() => {
    menu.classList.remove('abrir-menu')
});


window.revelar = ScrollReveal({reset:false})

revelar.reveal('.efeito-top',{
    duration: 2000,
    distance: '90px',
});

//! TOPO SITE

revelar.reveal('.efeito-img',{
    duration: 2000,
    distance: '90px',
    origin: 'left',
    rotate: {x: 100, y: -50, z: 0}
});

//? MINHAS ESPECIALIDADES

revelar.reveal('.efeito-especialidades1',{
    duration: 2000,
    distance: '90px',
    delay: 100

});

revelar.reveal('.efeito-especialidades2',{
    duration: 2000,
    distance: '90px',
    delay: 300

});

revelar.reveal('.efeito-especialidades3',{
    duration: 2000,
    distance: '90px',
    delay: 600

});

revelar.reveal('.efeito-t',{
    duration: 2000,
    distance: '90px',
    delay: 100,
    origin: 'right'

});

revelar.reveal('.sobre-efeito',{
    duration: 3000,
    distance: '90px',
    delay: 100,
    origin: 'right',
    rotate:{y: 150}

});

revelar.reveal('.p-efeito',{
    duration: 3000,
    distance: '90px',
    delay: 100,
    origin: 'left',

});

revelar.reveal('.im1',{
    duration: 3000,
    distance: '90px',
    delay: 100,
    origin: 'left',
    rotate:{z: 150}

});

revelar.reveal('.im2',{
    duration: 3000,
    distance: '90px',
    delay: 100,
    origin: 'left',
    rotate:{z: 150}

});

revelar.reveal('.im3',{
    duration: 3000,
    distance: '90px',
    delay: 100,
    origin: 'left',
    rotate:{z: 150}

});

revelar.reveal('.titulo',{
    duration: 3000,
    distance: '90px',
    delay: 100,
    origin: 'right',
    rotate:{z: 150}

});

revelar.reveal('.a1',{
    duration: 3000,
    distance: '90px',
    delay: 100,

});
revelar.reveal('.a2',{
    duration: 3000,
    distance: '90px',
    delay: 200,

});

revelar.reveal('.a3',{
    duration: 3000,
    distance: '90px',
    delay: 300,

});

revelar.reveal('.a4',{
    duration: 3000,
    distance: '90px',
    delay: 400,

});

revelar.reveal('.a5',{
    duration: 3000,
    distance: '90px',
    delay: 500,

});











