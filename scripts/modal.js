document.getElementById('btn-modal').addEventListener('click', function() {
	document.getElementById('modal-window-overlay').classList.add('is-visible');
	document.getElementById('modal-window').classList.add('is-visible');
});

document.getElementById('close-btn').addEventListener('click', function() {
	document.getElementById('modal-window-overlay').classList.remove('is-visible');
	document.getElementById('modal-window').classList.remove('is-visible');
});

document.getElementById('modal-window-overlay').addEventListener('click', function() {
	document.getElementById('modal-window-overlay').classList.remove('is-visible');
	document.getElementById('modal-window').classList.remove('is-visible');
});
