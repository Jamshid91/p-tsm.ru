document.addEventListener('DOMContentLoaded', () => {
    const textReviews = document.querySelectorAll('.reviews-text');

    textReviews.forEach((item, i) => {
        const revContainer = document.createElement('div'),
              revPerson = item.querySelector('.user__name').textContent,
              revAvatar = item.querySelector('.user__img').src,
              revText = item.querySelector('.reviews-text__info').textContent,
              openPopapBtn = item.querySelector('.reviews-text-all');

        revContainer.classList.add('pop-up-photo');
        revContainer.classList.add('d-none');

        revContainer.innerHTML = `
        <div class="pop-up-content position-relative">
            <button class="close-pop-up">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.36719 3.36719L19.6325 19.6325" stroke="#525D7D" stroke-width="2.1875" stroke-miterlimit="10"></path>
                    <path d="M3.36719 19.6325L19.6325 3.36719" stroke="#525D7D" stroke-width="2.1875" stroke-miterlimit="10"></path>
                </svg>
            </button>
            <div class="d-flex align-items-center">
                <img src="${revAvatar}" alt="" class="user__img me-3">
                <p class="user__name">${revPerson}</p>
            </div>
            <p class="reviews-text__info">${revText}</p>
        </div>
        `;

        document.body.append(revContainer);

        openPopapBtn.addEventListener('click', () => {
            revContainer.classList.remove('d-none');
        })        
        document.querySelectorAll('.pop-up-content .close-pop-up')[i].addEventListener('click', () => {
            revContainer.classList.add('d-none');
        })
        revContainer.addEventListener('click', (e) => {
            if (!document.querySelectorAll('.pop-up-content')[i].contains(e.target)) {
                revContainer.classList.add('d-none');
            }
        })
    })
})