
//! _-_-_-_-_-_-_-_ Modales _-_-_-_-_-_-_-_
// Modal SAVE
const BTNS_Save = document.querySelectorAll(".save");
const BTN_CloseSave = document.querySelector(".close-save");
const BTN_ResetSave = document.querySelector(".reset-save");
const DIODES = document.querySelectorAll(".diode");
const BTN_CloseDiode = document.querySelector(".close-diode");
const CASES = document.querySelectorAll(".cases");
const BTN_CloseCase = document.querySelector(".close-case");
const DIODES_H = document.querySelectorAll(".diodeH");
const BTN_CloseDiodeCustom = document.querySelectorAll(".close-custom");

// open / close Modal
function openModal(str) {
	let formPop = document.querySelector(str);
	formPop.style.display = "block";
}

function closeModal(str) {
	let formPop = document.querySelector(str);
	formPop.style.display = "none";
}

// Event Listener modal Save
if(BTNS_Save.length>0){
	BTNS_Save.forEach(btnSave => btnSave.addEventListener("click", ()=>openModal(".modal-save")));
	BTN_CloseSave.addEventListener("click", ()=>closeModal(".modal-save"));
	BTN_ResetSave.addEventListener("click", ()=>closeModal(".modal-save"));
} else {
	false;
}
// Event Listener modal Diodes
if(DIODES.length>0){
	DIODES.forEach(diode => diode.addEventListener("click", ()=>openModal(".modal-diode")));
	BTN_CloseDiode.addEventListener("click", ()=>closeModal(".modal-diode"));
} else {
	false;
}
// Event Listener modal Cases
if(CASES.length>0){
	CASES.forEach(cas => cas.addEventListener("click", ()=>openModal(".modal-case")));
	BTN_CloseCase.addEventListener("click", ()=>closeModal(".modal-case"));
} else {
	false;
}
// event listener diodes custom
if(DIODES_H.length>0){
	DIODES_H.forEach(diode => diode.addEventListener("click", ()=>openModal(".diode-custom")));
	BTN_CloseDiodeCustom.forEach(btn => btn.addEventListener("click", ()=>closeModal(".diode-custom")));
	//ajouter display:none aux box-titoir à la fermeture
} else {
	false;
}

//! nav
//flèche retour page précédente
const btnBack = document.getElementById("back");
btnBack.addEventListener('click', ()=>{
    window.history.back();
})

//! _-_-_-_-_-_-_-_ Gestion diodes _-_-_-_-_-_-_-_
let inputNbDiode = document.getElementById('nb-bips');
let inputNbDiodeParTemps = document.getElementById('nb-tps');
const btnDiode = document.getElementById('ok_config');
const diodeAll = document.getElementsByClassName("diode");
let containerDiode = document.getElementById('show');

//eventlistener bouton => génération diodes
if(btnDiode){
    btnDiode.addEventListener('click',()=>{
        while (containerDiode.childElementCount > 0) {
            containerDiode.removeChild(containerDiode.lastChild);
        }
        afficherDiodes(inputNbDiode,inputNbDiodeParTemps);
    },false);
}

//récupération de la valeur de l'option sélectionnée d'un select
function selection(nb){
    let valeurSelected;
    for(let i = 0; i<nb.length; i++){
        if(nb[i].selected === true){
            valeurSelected = nb[i].value;
        }
    };
    nb.value = valeurSelected;
    return (valeurSelected);
};

//affichage des diodes selon la valeur des select
function afficherDiodes(sel,sel2) {
    let inp1Value = selection(sel);
    let inp2Value = selection(sel2);
    for(let i = 0; i<inp1Value; i++){
        if(i%inp2Value==0  && i!=0){
            let barre = document.createElement('div');
            barre.classList.add("barre_cont");
            barre.innerHTML = "&#160;&#160;|&#160;&#160;";
            containerDiode.appendChild(barre);
        }
        let divDiode = document.createElement('div');
        divDiode.classList.add("diode","diodeSon0");
        containerDiode.appendChild(divDiode);
    }
    switchDiode();
    return containerDiode;
}

//fonction qui...remplace une classe par une autre
function switchClass(elt,class1,class2){
        elt.classList.remove(class1);
        elt.classList.add(class2);
}

//changement de classe des diodes
function switchDiode() {
	let diodeAllLength = diodeAll.length;
	for (let i = 0; i < diodeAllLength; i++) {
		diodeAll[i].addEventListener('click', ()=>{
            if(diodeAll[i].classList.contains("diodeSon0")){
                switchClass(diodeAll[i],"diodeSon0","diodeSon1")
            }
            else if(diodeAll[i].classList.contains("diodeSon1")){
                switchClass(diodeAll[i],"diodeSon1","diodeSon2")
            }
            else if(diodeAll[i].classList.contains("diodeSon2")){
                switchClass(diodeAll[i],"diodeSon2","diodeSon3")
            }
            else if(diodeAll[i].classList.contains("diodeSon3")){
                switchClass(diodeAll[i],"diodeSon3","diodeSon0")
            }
        },false);
	}
};

//capture des diodes dans un tableau simple en fonction de leur classe
function structureDiodes() {
    let arrDiode = [];
    for (let i = 0; i < diodeAll.length; i) {
        if (diodeAll[i] == undefined) {
            break;
        }
        if (diodeAll[i].classList.contains("diodeSon0")) {
            arrDiode.push(0);
            i++;
        }
        else if (diodeAll[i].classList.contains("diodeSon1")) {
            arrDiode.push(1);
            i++;
        }
        else if (diodeAll[i].classList.contains("diodeSon2")) {
            arrDiode.push(2);
            i++;
        }
        else {
            arrDiode.push(3);
            i++;
        }
    }
    return arrDiode;
}

//! _-_-_-_-_-_-_-_ Gestion tempo _-_-_-_-_-_-_-_
const iTempo = document.getElementById('tempo')
const btnInc = document.querySelectorAll(".btninc");
const btnStop = document.getElementById('btn-stop');
let numNumbVal;

//incrémentation input nombre via boutons
btnInc.forEach(btninc => btninc.addEventListener('mousedown', () => {
    numNumbVal = Number(iTempo.value) + Number(btninc.value);
    iTempo.value = numNumbVal;
    stopPlay();
    return iTempo.value;
}, false));

btnInc.forEach(btninc => btninc.addEventListener('mouseup', () => {
    playGeneral(groupeSons1);
}, false));

//input number quand input utilisateur
if(iTempo){
    iTempo.addEventListener('input', (e) => {
        stopPlay();
    }, false);
    iTempo.addEventListener('blur', () => {
        playGeneral(groupeSons1);
    }, false);
}

//stop lecture
function stopPlay() {
    switchClass(ContainerFlash, "diodeflash", "shows");
    clearInterval(diode_timer);
    clearInterval(bip_timer);
    clearInterval(trans_timer);
    mesureJouee = 0;
}

if(btnStop){
    btnStop.addEventListener('click', stopPlay);
}

//! _-_-_-_-_-_-_-_ Gestion sons _-_-_-_-_-_-_-_
// class création des sons
class Sound {
    constructor(src) {
        let sound = document.createElement("audio");
        sound.src = src;
        sound.setAttribute("preload", "auto");
        sound.setAttribute("controls", "none");
        sound.style.display = "none";
        document.body.appendChild(sound);

        this.play = function () {
            sound.pause();
            sound.currentTime = 0;
            sound.play();
        };
        this.stop = function () {
            sound.stop();
        };
    }
}

// array de groupe de sons...
const groupeSons1 = [
    new Sound("../../fichiers/son/bip/bell1_+0.mp3"),
    new Sound("../../fichiers/son/bip/hihat1_+0.mp3"),
    new Sound("../../fichiers/son/bip/hihat3_+0.mp3"),
    new Sound("../../fichiers/son/bip/hihat2_+0.mp3")
];

//! _-_-_-_-_-_-_-_ Gestion flash _-_-_-_-_-_-_-_
const ContainerFlash = document.getElementById('show-flash');
const checkFlash = document.getElementById('box-flash');
const btnCheck = document.getElementById('btn_check');
let tempoJoue;

// animation flash
function animateFlash(elt, duration, delay, anim) {
    elt.style.animationDelay = `${delay}s`;//plus besoin
    elt.style.animationDuration = `${duration}s`;
    elt.classList.add(anim);
}

//activer/désactiver checkbox flash avec un bouton
if(btnCheck){
    btnCheck.addEventListener('click', () => {
        if (checkFlash.checked) {
            checkFlash.checked = false;
        }
        else {
            checkFlash.checked = true;
        }
    },false);
}

//flash activé / désactivé
function flashAuCheck() {//TODOtrouver le moyen de changer la durée des étapes de l'animation en fonction des tempos, pour que ce soit plus ou moins visible
    if (checkFlash.checked) {
        switchClass(ContainerFlash, "diodeflash", "shows");
        animateFlash(ContainerFlash, (tempoJoue / 950), 0, "diodeflash");//animation duration ++ vs tempo pour contrer interférences, pas très classe
    }
}

//! _-_-_-_-_-_-_-_ Gestion des structures _-_-_-_-_-_-_-_
//constructeur de mesure ( == 1 schéma rythmique)
class Mesures {
    constructor(tempo, divisionTemps, repet, structure) {
        this.tempo = tempo;
        this.divisionTemps = divisionTemps,
        this.repet = repet;
        this.structure = structure;
    }
}

//rassemblement des diff mesures
function structureAJouer() {//TODO pour l'exemple, à étendre lors des trans
    let structure = [];
    tempoJoue = 60 / selection(inputNbDiodeParTemps) / iTempo.value * 1000;
    structure.push(new Mesures(tempoJoue, 0, 0,structureDiodes()));
    return structure;
}

//! _-_-_-_-_-_-_-_ Gestion des métronomes _-_-_-_-_-_-_-_
let diode_timer;
let bip_timer;
let trans_timer;
const btnPlay = document.getElementById('btn-play');

//fonction play basique, suffisant pour tout ce qui reste régulier, normal
function playTempo(arr) {
    tempoJoue = (60 / (iTempo.value)) * 1000;
    bip_timer = setInterval(arr[0].play, tempoJoue);
    diode_timer = setInterval(() => {
        if (checkFlash.checked) {
            animateFlash(ContainerFlash, (tempoJoue / 1000), 0, "diodeflash");
        }
        else {
            switchClass(ContainerFlash, "diodeflash", "shows");
        }
    }, tempoJoue);
}

//fonction play mesure complexe seule
function playTempoDiode(arr1) {
    tempoJoue = 60 / selection(inputNbDiodeParTemps) / iTempo.value * 1000;
    let i = 0;
    trans_timer = setInterval(() => {
        const arrD = structureDiodes();//recalcule à chaque fois, mais changement des diodes pris en compte direct
        switchClass(ContainerFlash, "diodeflash", "shows");
        if (arrD[i] == 0) {
            console.log(checkFlash.checked);
        }
        else if (arrD[i] == 1) {
            flashAuCheck();
            arr1[0].play();
        }
        else if (arrD[i] == 2) {
            flashAuCheck();
            arr1[1].play();
        }
        else if (arrD[i] == 3) {
            flashAuCheck();
            arr1[2].play();
        }
        i = (i + 1) % arrD.length;
    }, tempoJoue);
}

//fonction play regroupant les autres
function playGeneral(arr1) {
    if (structureAJouer().length == 1) {
        if (structureAJouer()[0]["structure"].length == 0) {
            playTempo(arr1);
        }
        else {
            playTempoDiode(arr1);
        }
    }

    //TODO else if()=>trans
}
// lancement du métronome
if(btnPlay){
    btnPlay.addEventListener('click', () => {
        clearInterval(diode_timer);
        clearInterval(bip_timer);
        clearInterval(trans_timer);
    
        playGeneral(groupeSons1);
    },false);
}









//! _-_-_-_-_-_-_-_ Gestion des transitions _-_-_-_-_-_-_-_
const btnPlayTrans = document.getElementById('play-trans');
let mesureJouee = 0;
let trans1 = [
    { tempo:60,divisionTemps:4,repet:1,structure:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]},
    { tempo: 150, divisionTemps: 4, repet: 4, structure: [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0] },
    { tempo: 80, divisionTemps: 3, repet: 2, structure: [1,0,2,1,0,2,1,0,2,1,0,2,1,3,3] }
]

//TODO play Tempo Transitions 1 avec function IIFE sans 1er délai aux changements ... c'est ok, reste à régler le problème de précision de setInterval 
function playTempoComplexe(arrSon,obj) {
    tempoJoue = 60 / obj[mesureJouee]["divisionTemps"] / obj[mesureJouee]["tempo"] * 1000;
    let i = 0;
    let compteurDeRepetition = 0;
    
    trans_timer = setInterval(function goal() {
        if(compteurDeRepetition===obj[mesureJouee]["structure"].length*obj[mesureJouee]["repet"]){
            let dernierTempo = tempoJoue;
            clearInterval(trans_timer);
            compteurDeRepetition = 0;
            i = 0;
            mesureJouee++;
            if(mesureJouee==obj.length){
                mesureJouee=0;
                console.log("STOP");
                return false;
            }
            tempoJoue = 60 / obj[mesureJouee]["divisionTemps"] / obj[mesureJouee]["tempo"] * 1000;
            setTimeout(playTempoComplexe(arrSon,obj),dernierTempo);
        }
        else if(compteurDeRepetition!==obj[mesureJouee]["structure"].length*obj[mesureJouee]["repet"]){
            const arrD = obj[mesureJouee]["structure"];
            // switchClass(ContainerFlash, "diodeflash", "diodenull");
            if (arrD[i] == 0) {
                // console.log(checkFlash.checked);
            }
            else if (arrD[i] == 1) {
                // flashAuCheck();
                arrSon[0].play();
            }
            else if (arrD[i] == 2) {
                // flashAuCheck();
                arrSon[1].play();
            }
            else if (arrD[i] == 3) {
                // flashAuCheck();
                arrSon[2].play();
            }
            i = (i + 1) % arrD.length;
            compteurDeRepetition++;
            return goal;
        }
    }(), tempoJoue);
}

if(btnPlayTrans){
    btnPlayTrans.addEventListener('click', () => {
        playTempoComplexe(groupeSons1, trans1);
    },false);
}

// const btnTransValid = document.getElementById('btn-valid-trans');
