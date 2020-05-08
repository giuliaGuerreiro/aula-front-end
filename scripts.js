const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');



for (let card of cards) {
    card.addEventListener("click", function() {
        const infoId = card.getAttribute('id');
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src=`https://rocketseat.com.br/${infoId}`;
    } )
}


modalOverlay.querySelector('.fullscreen-icons').addEventListener("click", function() {
    modal.classList.add('maximize');
})

modalOverlay.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src="";
    modal.classList.remove('maximize');
})