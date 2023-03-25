window.onscroll = function () {
	const header = document.querySelector('.header');
	const burger = document.querySelector('.burger');
	let scroll = window.pageYOffset;
	if (scroll >= 1000) {
		header.classList.add('header-white');
		burger.classList.add('burger-black');
	} else {
		header.classList.remove('header-white');
		burger.classList.remove('burger-black');
	}
	console.log('Позиция скрола: ' + scrolled);
};


const burger = document.querySelector('.burger');
const modal = document.querySelector('.modal-body');
const close = document.querySelector('.btn-close');
burger.addEventListener('click', () => {
	modal.classList.toggle('block')
});
close.addEventListener('click', () => {
	console.log('Yes');
	modal.classList.remove('block')
})
