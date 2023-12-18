let lastTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
	let scrollTop = window.pageYOffset;
	if (scrollTop > lastTop) {
		header.classList.add('on');
	} else {
		header.classList.remove('on');
	}
});
