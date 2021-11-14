
// popup SAVE
const BTNS_Save = document.querySelectorAll(".save");
const BTN_CloseSave = document.querySelector(".close-save");
const BTN_ResetSave = document.querySelector(".reset-save");
const DIODES = document.querySelectorAll(".diode");
const BTN_CloseDiode = document.querySelector(".close-diode");
const CASES = document.querySelectorAll(".cases");
const BTN_CloseCase = document.querySelector(".close-case");
const DIODES_H = document.querySelectorAll(".diodeH");
const BTN_CloseDiodeCustom = document.querySelectorAll(".close-custom");

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
if(BTNS_Save.length>0){
	BTNS_Save.forEach(btnSave => btnSave.addEventListener("click", ()=>openPopup(".popup-save")));
	BTN_CloseSave.addEventListener("click", ()=>closePopup(".popup-save"));
	BTN_ResetSave.addEventListener("click", ()=>closePopup(".popup-save"));
} else {
	false;
}
// Event Listener popup Diodes
if(DIODES.length>0){
	DIODES.forEach(diode => diode.addEventListener("click", ()=>openPopup(".popup-diode")));
	BTN_CloseDiode.addEventListener("click", ()=>closePopup(".popup-diode"));
} else {
	false;
}
// Event Listener popup Cases
if(CASES.length>0){
	CASES.forEach(cas => cas.addEventListener("click", ()=>openPopup(".popup-case")));
	BTN_CloseCase.addEventListener("click", ()=>closePopup(".popup-case"));
} else {
	false;
}
// event listener diodes custom
if(DIODES_H.length>0){
	DIODES_H.forEach(diode => diode.addEventListener("click", ()=>openPopup(".diode-custom")));
	BTN_CloseDiodeCustom.forEach(btn => btn.addEventListener("click", ()=>closePopup(".diode-custom")));
} else {
	false;
}





