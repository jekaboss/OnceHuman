// Строгий режим
"use strict"

function search() {
	alert('Функція пошуку поки не реалізована.');
}

function openLogin() {
	document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
	document.getElementById("loginModal").style.display = "none";
}

function openRegister() {
	document.getElementById("registerModal").style.display = "block";
}

function closeRegister() {
	document.getElementById("registerModal").style.display = "none";
}

// Закрити модальне вікно при кліку поза ним
window.onclick = function (event) {
	let loginModal = document.getElementById("loginModal");
	let registerModal = document.getElementById("registerModal");

	if (event.target === loginModal) {
		loginModal.style.display = "none";
	}

	if (event.target === registerModal) {
		registerModal.style.display = "none";
	}
}
