const cookieBtn = document.querySelectorAll('.cookie__btn'),
      popUp = document.querySelector('.pop-up-reg'),
      popUpCall = document.querySelector('.pop-up-call'),
      popUpClose = document.querySelectorAll('.close-pop-up'),
      modalBtns = document.querySelectorAll('.modal__btn'),
      modalCallBtns = document.querySelectorAll('.modal-call__btn'),
      recommendationsImg = document.querySelectorAll('.recommendations-item img'),
      popUpImg = document.querySelector('.pop-up-img'),
      popUpImgClose = document.querySelector('.pop-up-img__close')



recommendationsImg.forEach(img => {
  img.addEventListener('click', () => {
    popUpImg.classList.remove('d-none');
    popUpImg.children[1].src = img.src
  })
});

popUpImgClose.addEventListener('click', (e)=> {
  popUpImg.classList.add('d-none')
});

window.addEventListener('click', (e)=> {
  if(e.target == popUp) {
    popUp.classList.add('d-none'),
    body.classList.remove('overflow-hidden')
  } else if(e.target == popUpImg) {
    popUpImg.classList.add('d-none')
  }else if(e.target == popUpCall) {
    popUpCall.classList.add('d-none')
  }
});

popUpClose.forEach(close => {
  close.addEventListener('click', ()=> {
    close.parentElement.parentElement.classList.add('d-none'),
    body.classList.remove('overflow-hidden')
});
})

modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popUp.classList.remove('d-none')
  })
});

modalCallBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    popUpCall.classList.remove('d-none')
  })
})

cookieBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.parentElement.parentElement.parentElement.classList.add('d-none')
  })
})

$(document).ready(function() {
    $('.dev-info').hide();
    $('.dev-info:first-child').show();
    $('.dev-label').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.dev-info').hide();
      $('.' + pageInfo).show();
    })
  });
  

  $(document).ready(function() {
    $('.guarantees-info__text').hide();
    $('.guarantees-info__text:first-child').show();
    $('.guarantees__lab').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.guarantees-info__text').hide();
      $('.' + pageInfo).show();
    })
  });

  $(document).ready(function() {
    $('.keys-filter').hide();
    $('.keys-filter:first-child').show();
    $('.keys-lab').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.keys-filter').hide();
      $('.' + pageInfo).show();
    })
  });

  $('.keys-info').click(function() {
    $(this).siblings().removeClass('showKeys');
    $(this).addClass('showKeys');
  });

  // Популярное
const allWork1 = new Swiper('.experts-swiper.filter1', {
  navigation: {
      nextEl: '.experts-button-next',
      prevEl: '.experts-button-prev',
    },

    watchOverflow: true,
    spaceBetween: 20,
    loop: true,
  breakpoints: {
      320: {
          slidesPerView: 2,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 3,
      },
  }
});
const allWork2 = new Swiper('.experts-swiper.filter2', {
  navigation: {
      nextEl: '.experts-button-next2',
      prevEl: '.experts-button-prev2',
    },

    watchOverflow: true,
    spaceBetween: 20,
    loop: true,
  breakpoints: {
      320: {
          slidesPerView: 2,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 3,
      },
  }
});
const allWork = new Swiper('.experts-swiper.filter3', {
  navigation: {
      nextEl: '.experts-button-next3',
      prevEl: '.experts-button-prev3',
    },

    watchOverflow: true,
    spaceBetween: 20,
    loop: true,
  breakpoints: {
      320: {
          slidesPerView: 2,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 3,
      },
  }
});

$(document).ready(function() {
  $('.expert-info').hide();
  $('.expert-info:first-child').show();
  $('.experts-lab').click(function() {
    let pageInfo = $(this).attr('data-radio');
    $('.expert-info').hide();
    $('.' + pageInfo).show();
  })
});


  // Популярное
  const recommendations = new Swiper('.recommendations-swiper', {
    navigation: {
        nextEl: '.recommendations-button-next',
        prevEl: '.recommendations-button-prev',
      },
  
      watchOverflow: true,
      spaceBetween: 20,
      loop: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    }
  });
  