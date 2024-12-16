const elModal = document.querySelector('.modal');
const elModalClose = document.querySelector('.js-modal-close');
// const elModalOpen = document.querySelector('.js-modal-open');

if (elModalClose) {
    // elModalOpen.addEventListener('click', function () {
    //     elModal.classList.add('modal-open')
    // })
    elModalClose.addEventListener('click', function () {
        elModal.classList.remove('modal-open')
    });
}

// 10s dan keyin ko'rsatish
setTimeout(function () {
    elModal.classList.add('modal-open');
}, 10000)