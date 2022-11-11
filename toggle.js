const chk = document.getElementById('checkbox');

chk.addEventListener('change', () => {
	if (this.chk) {
	document.body.classList.toggle('light');
	}
});