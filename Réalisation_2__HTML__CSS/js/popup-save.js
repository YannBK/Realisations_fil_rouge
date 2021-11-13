
// popup SAVE
const BTNS_Save = document.querySelectorAll(".save");
const BTN_CloseSave = document.querySelector(".close-save");
const BTN_ResetSave = document.querySelector(".reset-save");
const DIODES = document.querySelectorAll(".diode");
const BTN_CloseDiode = document.querySelector(".close-diode");
// const CASES = document.querySelectorAll(".cases");
// const BTN_CloseCase = document.querySelector(".close-case");


// open / close popup
function openPopup(str) {
	let formPop = document.querySelector(str);
	formPop.style.display = "block";
}

function closePopup(str) {
	let formPop = document.querySelector(str);
	formPop.style.display = "none";
}

// Event Listener popup Save
BTNS_Save.forEach(btnSave => btnSave.addEventListener("click", ()=>openPopup(".popup-save")));
BTN_CloseSave.addEventListener("click", ()=>closePopup(".popup-save"));
BTN_ResetSave.addEventListener("click", ()=>closePopup(".popup-save"));

// Event Listener popup Diodes
DIODES.forEach(diode => diode.addEventListener("click", ()=>openPopup(".popup-diode")));
BTN_CloseDiode.addEventListener("click", ()=>closePopup(".popup-diode"));
//!pourquoi si je rajoute les event ci-dessous, ça me casse l'event ci-dessus ?
// Event Listener popup Cases
// 	CASES.forEach(cas => cas.addEventListener("click", ()=>openPopup(".popup-case")));
// 	BTN_CloseCase.addEventListener("click", ()=>closePopup(".popup-case"));






