const popUpCall = document.querySelector('.pop-up-call'),
      popUpClose = document.querySelectorAll('.close-pop-up'),
      modalCallBtns = document.querySelectorAll('.modal-call__btn')



window.addEventListener('click', (e)=> {
 if(e.target == popUpCall) {
    popUpCall.classList.add('d-none')
  }
});

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

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline="January 01 2018 00:00:00 GMT+0300"; 
  var deadline = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000); 
  initializeClock('countdown', deadline);





   
function init(elem, options){
	elem.addClass('countdownHolder');

	// Создаем разметку внутри контейнера
	$.each(['Days','Hours','Minutes','Seconds'],function(i){
		$('<span class="count'+this+'">').html(
			'<span class="position">\
				<span class="digit static">0</span>\
			</span>\
			<span class="position">\
				<span class="digit static">0</span>\
			</span>'
		).appendTo(elem);
		
		if(this!="Seconds"){
			elem.append('<span class="countDiv countDiv'+i+'"></span>');
		}
	});

}

// Создаем анимированный переход между двумя цифрами
function switchDigit(position,number){
	
	var digit = position.find('.digit')
	
	if(digit.is(':animated')){
		return false;
	}
	
	if(position.data('digit') == number){
		// Мы уже вывели данную цифру
		return false;
	}
	
	position.data('digit', number);
	
	var replacement = $('<span>',{
		'class':'digit',
		css:{
			top:'-2.1em',
			opacity:0
		},
		html:number
	});
	
	// Класс .static добавляется, когда завершается анимация.
	// Выполнение идет более плавно.
	
	digit
		.before(replacement)
		.removeClass('static')
		.animate({top:'2.5em',opacity:0},'fast',function(){
			digit.remove();
		})

	replacement
		.delay(100)
		.animate({top:0,opacity:1},'fast',function(){
			replacement.addClass('static');
		});
}


function checkMediaQuery() {
	if (window.innerWidth < 992) {
		const experts = new Swiper('.experts-swiper', {
			pagination: {
				el: '.experts-pagination',
			  },
		  
			  watchOverflow: true,
			  spaceBetween: 20,
			  loop: true,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
			}
		  });
	}
  }
  
  window.addEventListener('resize', checkMediaQuery);
