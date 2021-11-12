
// popup SAVE
const BTNS_Save = document.querySelectorAll(".save");
const BTN_CloseSave = document.querySelector(".close-save");
const BTN_ResetSave = document.querySelector(".reset-save");
const DIODES = document.querySelectorAll(".diode");
const BTN_CloseDiode = document.querySelector(".close-diode");


// open / close popup
function openPopup(str) {
	let formSave = document.querySelector(str);
	formSave.style.display = "block";
}

function closePopup(str) {
	let formSave = document.querySelector(str);
	formSave.style.display = "none";
}

// Event Listener popup Save
BTNS_Save.forEach(btnSave => btnSave.addEventListener("click", ()=>openPopup(".popup-save")));
BTN_CloseSave.addEventListener("click", ()=>closePopup(".popup-save"));
BTN_ResetSave.addEventListener("click", ()=>closePopup(".popup-save"));
// Event Listener popup Diodes
DIODES.forEach(diode => diode.addEventListener("click", ()=>openPopup(".popup-diode")));
BTN_CloseDiode.addEventListener("click", ()=>closePopup(".popup-diode"));


