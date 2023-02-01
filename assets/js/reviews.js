
    const  slideDoc = document.querySelectorAll('.slide-doc'),
            popUpImg = document.querySelector('.pop-up-img'),
            popUpImgClose = document.querySelector('.pop-up-img__close'),
            reviewsTexts = document.querySelectorAll('.reviews-text-all'),
            popUpPhoto = document.querySelector('.pop-up-photo'),
            popUpPhotoClose = document.querySelector('.close-pop-up'),
            popUpCall = document.querySelector('.pop-up-call'),
            popUpClose = document.querySelectorAll('.close-pop-up'),
            modalCallBtns = document.querySelectorAll('.modal-call__btn'),
            addFile = document.querySelector('.addReview #file'),
            fileName = document.querySelector('.file__name')
      
      


console.log(addFile)

addFile.addEventListener('change', (e) => {
  console.dir(fileName.textContent = e.target.files[0].name)
})
      
      popUpClose.forEach(close => {
        close.addEventListener('click', ()=> {
          close.parentElement.parentElement.classList.add('d-none'),
          body.classList.remove('overflow-hidden')
      });
      })
      
      modalCallBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          popUpCall.classList.remove('d-none')
        })
      })


            slideDoc.forEach(img => {
              img.addEventListener('click', () => {
                popUpImg.classList.remove('d-none');
                popUpImg.children[1].src = img.src
              })
            });
            
            popUpImgClose.addEventListener('click', (e)=> {
              popUpImg.classList.add('d-none')
            });
            
            window.addEventListener('click', (e)=> {
               if(e.target == popUpImg) {
                popUpImg.classList.add('d-none')
              } else if(e.target == popUpPhoto) {
                popUpPhoto.classList.add('d-none')
              } else  if(e.target == popUpCall) {
                popUpCall.classList.add('d-none')
              }
            });

reviewsTexts.forEach(text => {
  text.addEventListener('click', () => {
    try {
      popUpPhoto.classList.remove('d-none')
    } catch (error) {}
  })
});

popUpPhotoClose.addEventListener('click', () => {
  popUpPhoto.classList.add('d-none')
});

$('document').ready(function(){
  
  var $file = $('#file-input'),
      $label = $file.next('label'),
      $labelText = $label.find('span'),
      $labelRemove = $('i.remove'),
      labelDefault = $labelText.text();
  
  // on file change
  $file.on('change', function(event){
    var fileName = $file.val().split( '\\' ).pop();
		if( fileName ){
      console.log($file)
			$labelText.text(fileName);
      $labelRemove.show();
    }else{
			$labelText.text(labelDefault);
      $labelRemove.hide();
    }
  });
  
  // Remove file   
  $labelRemove.on('click', function(event){
    $file.val("");
    $labelText.text(labelDefault);
    $labelRemove.hide();
    console.log($file)
  });
})

$(document).ready(function() {
    $('.partner-info__text').hide();
    $('.partner-info__text:first-child').show();
    $('.partner__lab').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.partner-info__text').hide();
      $('.' + pageInfo).show();
    })
  });

  $(document).ready(function() {
    $('.reviews-info').hide();
    $('.reviews-info:first-child').show();
    $('.reviews-lab').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.reviews-info').hide();
      $('.' + pageInfo).show();
    })
  });

  const reviewsAll = new Swiper('.reviews-swiper-all', {
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
      },
  
      watchOverflow: true,
      spaceBetween: 10,
      roundLengths: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
  });

  const reviewsDoc = new Swiper('.reviews-swiper-doc', {
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
      },
  
      watchOverflow: true,
      spaceBetween: 10,
      roundLengths: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        },
    }
  });

  
  const reviewsText = new Swiper('.reviews-swiper-text', {
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
      },
  
      watchOverflow: true,
      spaceBetween: 10,
      roundLengths: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.5,
        },
        1024: {
            slidesPerView: 2.5,
        },
    }
  });

  const reviews = new Swiper('.reviews-swiper-video', {
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
      },
  
      watchOverflow: true,
      spaceBetween: 10,
      roundLengths: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.5,
        },
        1024: {
            slidesPerView: 2.5,
        },
    }
  });