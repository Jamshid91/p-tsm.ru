  const openAllInfo = document.querySelectorAll('.openAllInfo');


  let count = 0;

  openAllInfo.forEach(open => {
    open.addEventListener('click', () => {
      if(count == 0) {
        open.parentElement.classList.add('showAllInfo');
        open.children[1].textContent = 'Скрывать'
        return count = 1;
      } else {
        open.parentElement.classList.remove('showAllInfo');
        open.children[1].textContent = 'Читать полностью'
        return count = 0;
      }
    })
  })
  
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
        1024: {
            slidesPerView: 4,
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
        1024: {
            slidesPerView: 4,
        },
    }
  });
  const allWork3 = new Swiper('.experts-swiper.filter3', {
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
        1024: {
            slidesPerView: 4,
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