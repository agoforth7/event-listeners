var buttonParent = document.querySelector('.answer-box');
var navButton = document.createElement('button');

navButton.textContent = 'hide nav';
buttonParent.appendChild(navButton);

var nav = document.querySelector('.nav-menu');

navButton.addEventListener('click', function () {
	if (navButton.textContent === 'hide nav') {
		navButton.textContent = 'show nav';
	} else {
		navButton.textContent = 'hide nav';
	}
	nav.classList.toggle('nav-menu-hidden');
});


var list = document.querySelector('#add-guest ul.guest-list');
var input = document.querySelector('#entry');

input.addEventListener('keyup', function (e) {
	if (e.keyCode === 13) {
		var item = document.createElement('li');
		item.textContent = input.value;
		item.style.textAlign = 'left';
		item.className = 'guest';
		list.appendChild(item);
		input.value = '';
	}
});


var list2 = document.querySelector('#add-guest-bonus ul.guest-list');
var input2 = document.querySelector('#entry2');
// var xButton = document.querySelector('#add-guest-bonus button');

input2.addEventListener('keyup', function (e) {
	if (e.keyCode === 13) {
		var item = document.createElement('li');
		var xButton = document.createElement('button');
		xButton.textContent = 'x';
		item.textContent = input2.value;
		item.style.textAlign = 'left';
		item.className = 'guest';
		list2.appendChild(item);
		item.appendChild(xButton);
		input2.value = '';
		xButton.addEventListener('click', function () {
			item.parentElement.removeChild(item);
		})
	}
});