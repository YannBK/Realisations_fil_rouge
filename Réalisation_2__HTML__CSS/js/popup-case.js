
//! censé être provisoire tant que les event popup-diode et popup-case ne se supportent pas

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
// eventlistener cases
CASES.forEach(cas => cas.addEventListener("click", ()=>openPopup(".popup-case")));
BTN_CloseCase.addEventListener("click", ()=>closePopup(".popup-case"));
// event listener diodes custom
DIODES_H.forEach(diode => diode.addEventListener("click", ()=>openPopup(".diode-custom")));
BTN_CloseDiodeCustom.forEach(btn => btn.addEventListener("click", ()=>closePopup(".diode-custom")));