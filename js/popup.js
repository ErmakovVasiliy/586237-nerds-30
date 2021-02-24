window.onload = function () {
	let modal = document.querySelector('.popup');
	let btnOpen = document.querySelector('.info-link');
	let btnClose = document.querySelector('.modal-close');

	

	btnOpen.onclick = function() {
		modal.style.display = "block";
	 }

	 btnClose.onclick = function() {
		modal.style.display = "none";
	 } 

	
}


