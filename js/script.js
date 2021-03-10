window.onload = function () {
	let modal = document.querySelector('.popup');
	let btnOpen = document.querySelector('.info-link');
	let btnClose = document.querySelector('.modal-close');

	if (modal) {
		btnOpen.addEventListener('click', function(event){
			event.preventDefault();
			modal.classList.add('popup-open');
		});

		btnClose.addEventListener('click', function(event){
			event.preventDefault();
			modal.classList.remove('popup-open');
		
	});
	
	
}

}
