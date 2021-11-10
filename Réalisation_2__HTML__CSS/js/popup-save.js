
// popup SAVE
const btnsSave = document.querySelectorAll(".save");
const btnCloseSave = document.querySelector(".close-save");
const btnResetSave = document.querySelector(".reset-save");

function openSave() {
	let formSave = document.querySelector(".popup-save");
	formSave.style.display = "block";
}

function closeSave() {
	let formSave = document.querySelector(".popup-save");
	formSave.style.display = "none";
}

btnsSave.forEach(btnSave => btnSave.addEventListener("click", openSave));
btnCloseSave.addEventListener("click", closeSave);
btnResetSave.addEventListener("click", closeSave);

// popup diode (non, ce n'est pas du copié/collé, m'enfin!)

const diodes = document.querySelectorAll(".diode");
const btnCloseDiode = document.querySelector(".close-diode");

function openDiode() {
	let formDiode = document.querySelector(".popup-diode");
	formDiode.style.display = "block";
}

function closeDiode() {
	let formDiode = document.querySelector(".popup-diode");
	formDiode.style.display = "none";
}

diodes.forEach(diode => diode.addEventListener("click", openDiode));
btnCloseDiode.addEventListener("click", closeDiode);




