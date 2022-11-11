const chk = document.getElementById('checkbox');

chk.addEventListener('change', () => {
	if (this.checked) {
	document.body.classList.toggle('dark');
	}
});