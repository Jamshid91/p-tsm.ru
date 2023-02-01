const popUp = document.querySelector('.pop-up-reg'),
      popUpCall = document.querySelector('.pop-up-call'),
      popUpClose = document.querySelectorAll('.close-pop-up'),
      modalBtns = document.querySelectorAll('.modal__btn'),
      modalCallBtns = document.querySelectorAll('.modal-call__btn')



window.addEventListener('click', (e)=> {
  if(e.target == popUp) {
    popUp.classList.add('d-none'),
    body.classList.remove('overflow-hidden')
  } else if(e.target == popUpCall) {
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


$(document).ready(function() {
    $('.mistakes-info__text').hide();
    $('.mistakes-info__text:first-child').show();
    $('.mistakes__lab').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.mistakes-info__text').hide();
      $('.' + pageInfo).show();
    });

    $('.offer-info__text').hide();
    $('.offer-info__text:first-child').show();
    $('.offer__lab').click(function() {
      let pageInfo = $(this).attr('data-radio');
      $('.offer-info__text').hide();
      $('.' + pageInfo).show();
    })
  });