const burger = document.querySelector('.menu-burger'),
      menu = document.querySelector('.header .menu'),
      menuClose = document.querySelector('.header .menu__close'),
      body = document.querySelector('body')


burger.addEventListener('click', () => {
    menu.classList.remove('d-none');
    body.classList.add('overflow-hidden')
});

menuClose.addEventListener('click', () => {
    menu.classList.add('d-none');
    body.classList.remove('overflow-hidden')
});

window.addEventListener('click', (e) => {
    if(e.target == menu) {
        menu.classList.add('d-none');
        body.classList.remove('overflow-hidden')
    }
});


wow = new WOW(
    {
    boxClass:     'wow',     
    animateClass: 'animated',
    offset:       0,         
    mobile:       true,      
    live:         true       
  }
  )
  wow.init();