document.addEventListener('DOMContentLoaded', () => {
    const cookieContainer = document.querySelector('.cookie'),
          acceptCookie = cookieContainer.querySelector('.to-accept'),
          cookeiData = localStorage.getItem('cookie');
    
    if (!cookeiData) {
        cookieContainer.classList.remove('d-none');
        acceptCookie.addEventListener('click', () => {
            localStorage.setItem('cookie', 1);
        })
    }else{
        cookieContainer.classList.add('d-none');
    }
})