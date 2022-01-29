
//! _-_-_-_-_-_-_-_ Modales _-_-_-_-_-_-_-_
// Modal SAVE
const BTNS_Save = document.querySelectorAll(".save");
const BTN_CloseSave = document.querySelector(".close-save");
const BTN_ResetSave = document.querySelector(".reset-save");

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
if (BTNS_Save.length > 0) {
    BTNS_Save.forEach(btnSave => btnSave.addEventListener("click", () => openModal(".modal-save")));
    BTN_CloseSave.addEventListener("click", () => closeModal(".modal-save"));
    BTN_ResetSave.addEventListener("click", () => closeModal(".modal-save"));
}


//! _-_-_-_-_-_-_-_ Nav _-_-_-_-_-_-_-_
//flèche retour page précédente
const btnBack = document.getElementById("back");
btnBack.addEventListener('click', () => {
    window.history.back();
})

//! _-_-_-_-_-_-_-_ Gestion diodes _-_-_-_-_-_-_-_
let inputNbDiode = document.getElementById('nb-bips');
let inputNbDiodeParTemps = document.getElementById('nb-tps');
const btnDiode = document.getElementById('ok_config');
let diodeAll = document.getElementsByClassName("diode");
let containerDiode = document.getElementById('show');

//eventlistener bouton => génération diodes
if (btnDiode) {
    btnDiode.addEventListener('click', (e) => {
        e.preventDefault();
        effacerDiodes();
        // afficherDiodes(inputNbDiode, inputNbDiodeParTemps, "diodetemps");
        afficherDiodes(inputNbDiode, inputNbDiodeParTemps);
    });
}

//comme son nom l'indique
function effacerDiodes() {
    while (containerDiode.childElementCount > 0) {
        containerDiode.removeChild(containerDiode.lastChild);
    }
}

//récupération de la valeur de l'option sélectionnée d'un select
//!vraiment utile?
function selection(nb) {
    let valeurSelected;
    for (let i = 0; i < nb.length; i++) {
        if (nb[i].selected === true) {
            valeurSelected = nb[i].value;
        }
    };
    nb.value = valeurSelected;
    return (valeurSelected);
};

//affichage des diodes selon la valeur des select
// function afficherDiodes(sel1, sel2, classdiode) {
function afficherDiodes(sel1, sel2) {
    let inp1Value = 0;
    let inp2Value = 0;

    //gérer le typage reçu en argument
    if (typeof (sel1) == "number") {
        inp1Value = sel1;
    }
    else {
        inp1Value = sel1.value;
    }
    if (typeof (sel2) == "number") {
        inp2Value = sel2;
    }
    else {
        inp2Value = sel2.value;
    }

    //création des diodes
    for (let i = 0; i < inp1Value; i++) {

        //création barre séparant les temps
        if (i % inp2Value == 0 && i != 0) {
            let barre = document.createElement('div');
            barre.classList.add("barre_cont");
            barre.innerHTML = "&#160;&#160;|&#160;&#160;";
            containerDiode.appendChild(barre);
        }

        //création des diodes en elle-même
        let divDiode = document.createElement('div');
        // divDiode.classList.add("diode", classdiode, "diodeSon0");
        divDiode.classList.add("diode", "diodeSon0");
        divDiode.setAttribute('data-number', `${i}`);
        containerDiode.appendChild(divDiode);
    }

    //écouteur de diodes pour switcher la classe
    switchDiode();
    return containerDiode;
}

//fonction qui...remplace une classe par une autre
function switchClass(elt, class1, class2) {
    elt.classList.remove(class1);
    elt.classList.add(class2);
}

//changement de classe des diodes
function switchDiode() {
    //toutes les diodes html
    let diodeAllLength = diodeAll.length;

    for (let i = 0; i < diodeAllLength; i++) {
        diodeAll[i].addEventListener('click', (e) => {
            e.preventDefault();

            if (diodeAll[i].classList.contains("diodeSon0")) {
                switchClass(diodeAll[i], "diodeSon0", "diodeSon1");
            }
            else if (diodeAll[i].classList.contains("diodeSon1")) {
                switchClass(diodeAll[i], "diodeSon1", "diodeSon2");
            }
            else if (diodeAll[i].classList.contains("diodeSon2")) {
                switchClass(diodeAll[i], "diodeSon2", "diodeSon3");
            }
            else if (diodeAll[i].classList.contains("diodeSon3")) {
                switchClass(diodeAll[i], "diodeSon3", "diodeSon0");
            }
        });
    }
};

//capture des diodes dans un tableau simple en fonction de leur classe
function structureDiode() {
    let arrDiode = [];
    for (let i = 0; i < diodeAll.length; i) {
        if (diodeAll[i] == undefined) {
            break;
        }
        if (diodeAll[i].classList.contains("diodeSon0")) {
            arrDiode.push(0);
            i++;//TODO pourquoi j'ai rentré manuellement i++ ...?
        }
        else if (diodeAll[i].classList.contains("diodeSon1")) {
            arrDiode.push(1);
            i++;
        }
        else if (diodeAll[i].classList.contains("diodeSon2")) {
            arrDiode.push(2);
            i++;
        }
        else if (diodeAll[i].classList.contains("diodeSon3")) {
            arrDiode.push(3);
            i++;
        }
        else if (diodeAll[i].classList.contains("diodeAccord")) {
            arrDiode.push(5);//TODO à changer, récupérer la valeur de l'accord parametré dans la section harmo...700 lignes plus bas
            i++;
        }
    }
    return arrDiode;
}


//! _-_-_-_-_-_-_-_ Gestion tempo via input_-_-_-_-_-_-_-_
const iTempo = document.getElementById('tempo')
const btnInc = document.querySelectorAll(".btninc");
const btnStop = document.getElementById('btn-stop');
let numNumbVal;

//quand on appui sur le bouton de la souris
btnInc.forEach(btninc => btninc.addEventListener('mousedown', (e) => {
    e.preventDefault();
    //sauvegarder si play==true
    let temp = play;
    //on assigne la nouvelle valeur
    numNumbVal = Number(iTempo.value) + Number(btninc.value);
    iTempo.value = numNumbVal;
    //car play=false ici
    stopPlay();
    //reprendre la sauvegarde de play
    play = temp;
    return iTempo.value;
}));

//quand on relache le bouton de la souris
btnInc.forEach(btninc => btninc.addEventListener('mouseup', (e) => {
    e.preventDefault();
    if (play != false) {
        playGeneral(groupeSons1);
    }
}));

//input number quand input utilisateur
if (iTempo) {
    iTempo.addEventListener('input', (e) => {
        let temp = play;
        stopPlay();
        play = temp;
    });
    iTempo.addEventListener('blur', () => {
        if (play != false) {
            playGeneral(groupeSons1);
        }
    });
}

//stop lecture
function stopPlay() {
    switchClass(ContainerFlash, "diodeflash", "shows");
    clearInterval(diode_timer);
    clearInterval(bip_timer);
    clearInterval(trans_timer);
    mesureJouee = 0;
    play = false;
}

if (btnStop) {
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
    new Sound("media/son/bip/bell1_+0.mp3"),
    new Sound("media/son/bip/hihat1_+0.mp3"),
    new Sound("media/son/bip/hihat3_+0.mp3"),
    new Sound("media/son/bip/hihat2_+0.mp3")
];
document.getElementById('connexion').addEventListener('click', function (e) {
    e.preventDefault();
    groupeSons1[0].play();
})

//! _-_-_-_-_-_-_-_ Gestion flash _-_-_-_-_-_-_-_
// const ContainerFlash = document.getElementById('show-flash');
const ContainerFlash = document.querySelector('.show-flash');
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
if (btnCheck) {
    btnCheck.addEventListener('click', (e) => {
        e.preventDefault();
        if (checkFlash.checked) {
            checkFlash.checked = false;
            btnCheck.classList.remove('btn-flash-ok');
        }
        else {
            checkFlash.checked = true;
            btnCheck.classList.add('btn-flash-ok');
        }
    });
}

//flash activé / désactivé
function flashAuCheck(precision, delai) {//TODOtrouver le moyen de changer la durée des étapes de l'animation en fonction des tempos, pour que ce soit plus ou moins visible
    if (checkFlash.checked) {
        switchClass(ContainerFlash, "diodeflash", "shows");
        animateFlash(ContainerFlash, (tempoJoue / precision), delai, "diodeflash");//animation duration ++ vs tempo pour contrer interférences, pas très classe
    }
}

//! _-_-_-_-_-_-_-_ Gestion des structures _-_-_-_-_-_-_-_
//constructeur de mesure ( == 1 schéma rythmique)
class Mesures {
    constructor(data, tempo, divisionTemps, repet, structure, nbDiode) {
        this.dataNumber = data;
        this.tempo = tempo;
        this.divisionTemps = divisionTemps,
            this.repet = repet;
        this.structure = structure;
        this.nbDiode = nbDiode;
    }
}

//rassemblement des diff mesures
function structureAJouer() {//TODO pour l'exemple, à étendre lors des trans
    let structure = [];
    tempoJoue = 60 / selection(inputNbDiodeParTemps) / iTempo.value * 1000;
    structure.push(new Mesures(0, tempoJoue, inputNbDiodeParTemps.value, 0, structureDiode(), inputNbDiode));
    return structure;
}

//! _-_-_-_-_-_-_-_ Gestion des métronomes _-_-_-_-_-_-_-_
let diode_timer;
let bip_timer;
let trans_timer;
const btnPlay = document.getElementById('btn-play');

//fonction play basique, suffisant pour tout ce qui reste régulier, normal
function playTempo(arr) {
    play = true;
    tempoJoue = (60 / (iTempo.value)) * 1000;
    bip_timer = setInterval(arr[0].play, tempoJoue);
    flashAuCheck(1000, tempoJoue / 1000);
}

//fonction play mesure complexe seule
function playTempoDiode(arr1) {
    play = true;
    tempoJoue = 60 / selection(inputNbDiodeParTemps) / iTempo.value * 1000;
    let i = 0;
    trans_timer = setInterval(() => {
        const arrD = structureDiode();//recalcule à chaque fois, mais changement des diodes pris en compte direct
        switchClass(ContainerFlash, "diodeflash", "shows");
        if (arrD[i] == 1) {
            flashAuCheck(950, 0);
            arr1[0].play();
        }
        else if (arrD[i] == 2) {
            flashAuCheck(950, 0);
            arr1[1].play();
        }
        else if (arrD[i] == 3) {
            flashAuCheck(950, 0);
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
}

// lancement du métronome
if (btnPlay) {
    btnPlay.addEventListener('click', (e) => {
        if (play != false) {
            return;
        }
        e.preventDefault();
        clearInterval(diode_timer);
        clearInterval(bip_timer);
        clearInterval(trans_timer);

        playGeneral(groupeSons1);
    });
}

//! _-_-_-_-_-_-_-_ Gestion des transitions _-_-_-_-_-_-_-_
let mesureJouee = 0;
let play = false;

// play Tempo Transitions 1 avec function IIFE sans 1er délai aux changements
//TODO ... c'est ok, reste à régler le problème de précision de setInterval 
function playTempoComplexe(arrSon, obj) {
    play = true;
    tempoJoue = 60 / obj[mesureJouee]["divisionTemps"] / obj[mesureJouee]["tempo"] * 1000;
    let i = 0;
    let compteurDeRepetition = 0;

    trans_timer = setInterval(function goal() {
        if (compteurDeRepetition === obj[mesureJouee]["structure"].length * obj[mesureJouee]["repet"]) {
            let dernierTempo = tempoJoue;
            clearInterval(trans_timer);
            switchClass(containerDiode, "diodeflash", "shows");
            compteurDeRepetition = 0;
            i = 0;
            mesureJouee++;
            if (mesureJouee == obj.length) {
                stopPlay();
                return;
            }
            tempoJoue = 60 / obj[mesureJouee]["divisionTemps"] / obj[mesureJouee]["tempo"] * 1000;
            setTimeout(playTempoComplexe(arrSon, obj), dernierTempo);//évitons la précipitation
            //TODO le flash ne gère pas bien certaines transitions
        }
        else if (compteurDeRepetition !== obj[mesureJouee]["structure"].length * obj[mesureJouee]["repet"]) {
            const arrD = obj[mesureJouee]["structure"];
            switchClass(containerDiode, "diodeflash", "shows");
            if (arrD[i] == 1) {
                flashAuCheck(950, 0);
                arrSon[0].play();
            }
            else if (arrD[i] == 2) {
                flashAuCheck(950, 0);
                arrSon[1].play();
            }
            else if (arrD[i] == 3) {
                flashAuCheck();
                arrSon[2].play(950, 0);
            }
            i = (i + 1) % arrD.length;
            compteurDeRepetition++;
            return goal;
        }
    }(), tempoJoue);
}

// btn play transition
function jouerComplexe() {
    let btnsPlayTrans = document.querySelectorAll('.play-trans');
    if (btnsPlayTrans) {
        btnsPlayTrans.forEach(btn => btn.addEventListener('click', (e) => {
            if (play != false) {
                return;
            }
            e.preventDefault();
            let data = e.target.dataset.number;
            if (data == undefined) {
                playTempoComplexe(groupeSons1, acces_transition);
            }
            else {
                for (let i = 0; i < acces_transition.length; i++) {
                    if (acces_transition[i].dataNumber == data) {
                        mesureJouee = i;
                        playTempoComplexe(groupeSons1, acces_transition);
                    }
                }
            }
        }));
    }
}

//variables
const btnTransValid = document.getElementById('btn-valid-trans');
const transTable = document.getElementById("trans-table");
let nbRepet = document.getElementById('trans-repet');
let transTempo = document.getElementById('trans-tempo');

//ajout graphique des transitions
function ajoutRow(objarr) {
    transTable.innerHTML = "";
    for (let i = 0; i < objarr.length; i++) {
        let data = `${objarr[i].dataNumber}`;
        let row = document.createElement('div');
        row.classList.add('trans-rows');
        row.setAttribute('data-number', data);
        //btn modifier
        let btnmodif = document.createElement('button');
        btnmodif.classList.add('btns', 'btn-modif');
        btnmodif.setAttribute('data-number', data);
        btnmodif.textContent = "Modifier";
        //btn play
        let btnplay = document.createElement('button');
        btnplay.classList.add('btns', 'btn-sub', 'play-trans');
        btnplay.setAttribute('data-number', data);
        btnplay.textContent = "Lancer";
        //btn load => sûrement voué à changer
        let lien = document.createElement('a');
        lien.setAttribute('href', 'index.php?p=load');
        let btnload = document.createElement('button');
        btnload.classList.add('btnload', 'btns', 'trans-sl');
        btnload.setAttribute('data-number', data);
        btnload.textContent = " Load";
        //div signature
        let sign = document.createElement('div');
        sign.classList.add('sign');
        sign.setAttribute('data-number', data);
        sign.textContent = `${objarr[i].nbDiode}/${objarr[i].divisionTemps}`;
        //input répétition
        let inprep = document.createElement('div');
        inprep.classList.add('sign');
        // inprep.setAttribute('type', 'number');
        inprep.setAttribute('data-number', data);
        inprep.textContent = `${objarr[i].repet}`;
        //input tempo
        let inptemp = document.createElement('div');
        inptemp.classList.add('sign');
        // inptemp.setAttribute('type', 'number');
        inptemp.setAttribute('data-number', data);
        inptemp.textContent = `${objarr[i].tempo}`;
        //button supprimer
        let btnsup = document.createElement('button');
        btnsup.classList.add('btnsup', 'btns', 'btntrans');
        btnsup.setAttribute('data-number', data);
        btnsup.textContent = "-";
        //btn changer de place
        let btnhaut = document.createElement('button');
        btnhaut.classList.add('btnhaut', 'btns', 'btntrans', 'btnmvt');
        btnhaut.setAttribute('data-number', data);
        btnhaut.innerHTML = "&#8593;";
        if (i == 0) {
            btnhaut.style.visibility = "hidden";
        }
        let btnbas = document.createElement('button');
        btnbas.classList.add('btnbas', 'btns', 'btntrans', 'btnmvt');
        btnbas.setAttribute('data-number', data);
        btnbas.innerHTML = "&#8595;";
        if (i == objarr.length - 1) {
            btnbas.style.visibility = "hidden";
        }
        row.appendChild(btnmodif);
        row.appendChild(btnplay);
        lien.appendChild(btnload);
        row.appendChild(lien);
        row.appendChild(sign);
        row.appendChild(inprep);
        row.appendChild(inptemp);
        row.appendChild(btnsup);
        row.appendChild(btnhaut);
        row.appendChild(btnbas);
        transTable.appendChild(row);
    }
    supprimer('.btnsup');
    jouerComplexe();
    changePlace('.btnmvt');
    modifier();
}

//!session storage
//variables
const transAJouer____1 = JSON.parse(sessionStorage.getItem('transition')) || [];
const inde = JSON.parse(sessionStorage.getItem('index')) || [];

let transAJouer_json = JSON.stringify(transAJouer____1);
let acces_transition = JSON.parse(transAJouer_json);
let index_json = JSON.stringify(inde);
let acces_index = JSON.parse(index_json);

//raccourcis localStorage
function stocker() {
    transAJouer_json = JSON.stringify(acces_transition);
    sessionStorage.setItem('transition', transAJouer_json);
    index_json = JSON.stringify(acces_index);
    sessionStorage.setItem('index', index_json);
}

let ind = 0;

if (transTable) {
    ajoutRow(acces_transition);//lancement au chargement
}

//création de l'id unique des mesures
function exist() {
    if (acces_index.length > 0) {
        ind = (acces_index[0]) + 1;
    }
    else {
        ind++;
    }
    return ind;
}

//ajout d'une mesure
function ajoutMesure(ind) {
    let newMesure = new Mesures(ind, transTempo.value, inputNbDiodeParTemps.value, nbRepet.value, structureDiode(), inputNbDiode.value);
    acces_transition.push(newMesure);
    acces_index.unshift(ind);
    stocker();
}

//btn Valider => ajout mesure + ajout ligne
function ajout() {
    ind = exist();
    let index = ind;
    ajoutMesure(index);
    ajoutRow(acces_transition);
    effacerDiodes();
}

if (btnTransValid) {
    btnTransValid.addEventListener('click', (e) => {
        e.preventDefault();
        ajout();
    });
}

// supprimer des mesures
function supprimer(boutons) {
    let btnDelete = document.querySelectorAll(boutons);
    btnDelete.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        let place = btn.dataset.number;
        for (let i = 0; i < acces_transition.length; i++) {
            if (acces_transition[i].dataNumber == place) {
                acces_transition.splice(i, 1);
            }
        }
        let rows = document.querySelectorAll('.trans-rows');
        rows.forEach(row => () => {
            if (row.dataset.number == place) {
                row.innerHTML = "";
            }
        })
        stocker();
        ajoutRow(acces_transition);
    }));
}

// modifier des mesures
function modifier() {
    let btnModif = document.querySelectorAll('.btn-modif');
    let index = 0;

    btnModif.forEach(btn => btn.addEventListener('click', function (e) {
        e.preventDefault();
        //changement de bouton
        btnTransValid.style.display = "none";
        let divRythm = document.querySelector('.A0_rhythm');

        let ifBtnUp = document.getElementById('btnup');
        if (ifBtnUp) {
            divRythm.removeChild(divRythm.lastChild);
        }

        let btnUp = document.createElement('button');
        btnUp.setAttribute('id', 'btnup');
        btnUp.classList.add('btns', 'A0_big-btn');
        btnUp.textContent = "Update";
        divRythm.appendChild(btnUp);

        let place = btn.dataset.number;

        for (let i = 0; i < acces_transition.length; i++) {
            if (acces_transition[i].dataNumber == place) {
                index = i;
                effacerDiodes();
                nbRepet.value = acces_transition[i].repet;
                transTempo.value = acces_transition[i].tempo;
                inputNbDiode.value = acces_transition[i].nbDiode;
                inputNbDiodeParTemps.value = acces_transition[i].divisionTemps;

                if (acces_transition[i].structure.length == 0) {
                    // afficherDiodes(inputNbDiode, inputNbDiodeParTemps, "diodetemps");
                    afficherDiodes(inputNbDiode, inputNbDiodeParTemps);
                }
                else {
                    for (let j = 0; j < acces_transition[i].structure.length; j++) {
                        if (j % acces_transition[i].divisionTemps == 0 && j != 0) {
                            let barre = document.createElement('div');
                            barre.classList.add("barre_cont");
                            barre.innerHTML = "&#160;&#160;|&#160;&#160;";
                            containerDiode.appendChild(barre);
                        }
                        let divDiode = document.createElement('div');
                        if (acces_transition[i].structure[j] == 0) {
                            // divDiode.classList.add("diode", "diodetemps", "diodeSon0");
                            divDiode.classList.add("diode", "diodeSon0");
                            containerDiode.appendChild(divDiode);
                        }
                        else if (acces_transition[i].structure[j] == 1) {
                            // divDiode.classList.add("diode", "diodetemps", "diodeSon1");
                            divDiode.classList.add("diode", "diodeSon1");
                            containerDiode.appendChild(divDiode);
                        }
                        else if (acces_transition[i].structure[j] == 2) {
                            // divDiode.classList.add("diode", "diodetemps", "diodeSon2");
                            divDiode.classList.add("diode", "diodeSon2");
                            containerDiode.appendChild(divDiode);
                        }
                        else if (acces_transition[i].structure[j] == 3) {
                            // divDiode.classList.add("diode", "diodetemps", "diodeSon3");
                            divDiode.classList.add("diode", "diodeSon3");
                            containerDiode.appendChild(divDiode);
                        }
                    }
                    switchDiode();
                }
            }
        }
        btnUp.addEventListener('click', function update(e) {
            e.preventDefault();
            acces_transition[index].repet = nbRepet.value;
            acces_transition[index].tempo = transTempo.value;
            acces_transition[index].nbDiode = inputNbDiode.value;
            acces_transition[index].divisionTemps = inputNbDiodeParTemps.value;
            acces_transition[index].structure = structureDiode();
            stocker();
            ajoutRow(acces_transition);
            console.log(acces_transition);
            effacerDiodes();
            btnTransValid.style.display = "block";
            divRythm.removeChild(divRythm.lastChild);
        });
    }));
}

//changer l'ordre des mesures

function changePlace(btnmvt) {
    let btnMvt = document.querySelectorAll(btnmvt);
    if (btnMvt) {
        btnMvt.forEach(btn => btn.addEventListener('click', function (e) {
            e.preventDefault();
            let place = btn.dataset.number;
            for (let i = 0; i < acces_transition.length; i++) {
                if (btn.classList.contains('btnhaut')) {
                    if (acces_transition[i].dataNumber == place) {
                        [acces_transition[i - 1], acces_transition[i]] = [acces_transition[i], acces_transition[i - 1]];
                        stocker();
                        ajoutRow(acces_transition);
                    }
                }
                else if (btn.classList.contains('btnbas')) {
                    if (acces_transition[i].dataNumber == place) {
                        [acces_transition[i], acces_transition[i + 1]] = [acces_transition[i + 1], acces_transition[i]];
                        console.log(acces_transition);
                        stocker();
                        ajoutRow(acces_transition);
                        return;
                    }
                }
            }
        }));
    }
}

//! _-_-_-_-_-_-_-_ Gestion des grilles _-_-_-_-_-_-_-_

let choixGeneration = document.getElementById('generation');
let paramGeneration = document.getElementById('param');

// affichage des choix selon la génération souhaitée
if (choixGeneration) {
    choixGeneration.addEventListener('change', function (e) {
        e.preventDefault();
        let templ = document.querySelector('#param div:nth-child(2)');
        let scale = document.querySelector('#param div:nth-child(1)');
        if (this.value == "perso" || this.value == "alea") {
            paramGeneration.style.display = "none";
        }
        else if (this.value == "gamme") {
            paramGeneration.style.display = "flex";
            templ.style.display = "none";
            scale.style.display = "block";
        }
        else if (this.value == "preprog") {
            paramGeneration.style.display = "flex";
            scale.style.display = "none";
            templ.style.display = "block";
        }
    });
}

const btnGenerer = document.getElementById('generer');
const contGrid = document.getElementById('container-grid');
let nbMesureGeneration = document.getElementById('grid-bar');
let containerParam = document.getElementById('container-param');
let containerBaseParam = document.getElementById('param-grid');
let paramMesure = document.getElementById('rhythm-case');
let paramMesureDiode = document.getElementById('diode-custom');
// const btnDiodeH = document.getElementById('ok_configH');
const btnDiodeAccord = document.getElementById('ok-diode-accord');
const btnMesureOk = document.getElementById('ok-mesure');
// let diodeAllHarmo = document.getElementsByClassName("diodeharmo");
//TODO pkoi en avis-je besoin pour remplacer "diodetemps"? => pour avoir les diodes en style accords => plus besoin, ni de '.diodetemps'
let numeroMesure;
let firstHarmo;

// => quand finalisé à sauver dians firstHarmo puis via sessionStorage, ou dans bdd via save
class objHarmo {
    constructor() {
        this.tempo;
        this.repet;
        this.nbTemps;
        this.structure;
        // this.play = function(){

        // }
    }
}

// => remplit [] de objHarmo.structure
class MesuresH {
    constructor(id, structure, nbAccord, accords) {
        this.id = id,
            this.structure = structure;
        this.nbAccord = nbAccord;
        this.accords = accords;
    }
}

//afficher la grille vierge selon les paramètres rentrés
if (btnGenerer) {
    btnGenerer.addEventListener('click', (e) => {
        e.preventDefault();

        //éléments html + tableau des mesures (vide)
        let gridTempo = document.getElementById('grid-bpm');
        let gridRepet = document.getElementById('grille-repeat');
        let nbTempsMesure = document.getElementById('grid-bar-beats');
        let tableDiodeH = [];
        //TODO réinitialisation de la zone (pkoi que le dernier???)
        contGrid.removeChild(contGrid.lastChild);

        //création div grille
        let grille = document.createElement('div');
        grille.classList.add('grille');

        //taille de la div grille
        let nb = nbMesureGeneration.value;
        if (nb <= 16) {
            grille.style.width = "209px";
        }
        else {
            grille.style.width = "314px";
        }

        //création des cases et des mesures
        for (let i = 0; i < nb; i++) {
            let mes = document.createElement('div');
            mes.classList.add('cases');
            mes.setAttribute('id', `${i}`);
            mes.textContent = "%";
            grille.appendChild(mes);

            let newM = new MesuresH(i, []);
            tableDiodeH.push(newM);
        }
        contGrid.appendChild(grille);
        containerBaseParam.style.display = "none";
        //création objet
        firstHarmo = new objHarmo;
        firstHarmo.structure = tableDiodeH;
        firstHarmo.tempo = gridTempo.value;
        firstHarmo.repet = gridRepet.value;
        firstHarmo.nbTemps = Number(nbTempsMesure.value);

        //écouteur sur les cases
        ecouter();
        btnLancer();
        return firstHarmo;
    });
}

//générer le boutonde lancement de lecture de la grille
function btnLancer() {
    let btnLancer = document.getElementById('lancer');
    if (btnLancer.style.display == "block") {
        btnLancer.style.display = "none";
    }
    else {
        btnLancer.style.display = "block";
    }
}

//écouteur des radio => choix d'un ou deux accords par mesure
function nombreAccord() {
    //éléments html
    let checkAccAll = document.getElementsByName('nbaccord');
    let divAcc1 = document.getElementById('un-accord');
    let divAcc2 = document.getElementById('deux-accord');
    //écouteur des radio
    checkAccAll.forEach(function (e) {
        e.addEventListener('click', function () {
            if (e.id == "unaccord") {
                divAcc1.style.display = 'flex';
                divAcc2.style.display = 'none';
            }
            else if (e.id == "zeroaccord") {
                divAcc1.style.display = 'none';
                divAcc2.style.display = 'none';
            }
            else {
                divAcc1.style.display = 'flex';
                divAcc2.style.display = 'flex';
            }
        });
        if (e.id == "unaccord") {
            divAcc1.style.display = 'flex';
            divAcc2.style.display = 'none';
        }
    });
}

let checkAcc1 = document.getElementById('unaccord');
// cliquer sur 1 mesure
function ecouter() {
    let mesuresH = document.querySelectorAll('.cases');
    mesuresH.forEach(mes => mes.addEventListener('click', function (e) {
        e.preventDefault();
        btnLancer();

        // containerBaseParam.style.display = "none";
        paramMesure.style.display = "flex";
        paramMesureDiode.style.display = "flex";
        checkAcc1.checked = true;
        btnMesureOk.setAttribute("data-number", mes.id);
        numeroMesure = this.id;
        effacerDiodes();
        // afficherDiodes(firstHarmo.nbTemps, 1, "diodeharmo");
        afficherDiodes(firstHarmo.nbTemps, 1);
        nombreAccord();

        //TODO+ récupérer nbAccord sauvegardé + accords sauvegardés et afficher en conséquence

    }));
}

//enregistrement des paramètres d'une mesure
if (btnMesureOk) {
    btnMesureOk.addEventListener('click', function () {
        btnLancer();
        let dataNumber = this.dataset.number;
        for (let i = 0; i < firstHarmo.structure.length; i++) {
            if (firstHarmo.structure[i].id == dataNumber) {

                //récupérer les accords paramétrés
                let saveAccord = [];

                function paramAccord(str) {
                    if (str == "zero") {
                        saveAccord.push("%");
                    }
                    else {
                        let note = document.getElementById(`${str}-harmo-note`).value;
                        let alt = document.getElementById(`${str}-harmo-alt`).value;
                        let quality = document.getElementById(`${str}-quality`).value;
                        let save = `${note}${alt}${quality}`;
                        saveAccord.push(save);
                    }
                }

                let checkAccAll = document.getElementsByName('nbaccord');

                checkAccAll.forEach(function (e) {
                    if (e.checked == true) {
                        if (e.id == "unaccord") {
                            paramAccord("un");
                        }
                        else if (e.id == "deuxaccord") {
                            paramAccord("un");
                            paramAccord("deux");
                        }
                        else {
                            paramAccord("zero");
                        }
                    }
                });

                firstHarmo.structure[i].accords = saveAccord;
                firstHarmo.structure[i].nbAccord = saveAccord.length;
                //récupération structure diodes
                firstHarmo.structure[i].structure = structureDiode();
            }
        }

        //mise à jour de l'affichage dans la grille
        let mesCases = document.getElementsByClassName('cases');
        for (let i = 0; i < mesCases.length; i++) {
            for (let j = 0; j < firstHarmo.structure.length; j++) {
                if (mesCases[i].id == dataNumber && firstHarmo.structure[j].id == dataNumber) {
                    if (firstHarmo.structure[j].accords.length === 1) {
                        mesCases[i].textContent = firstHarmo.structure[j].accords[0];
                    }
                    else {
                        mesCases[i].textContent = `${firstHarmo.structure[j].accords[0]} / ${firstHarmo.structure[j].accords[1]}`;
                    }
                }
            }
        }

        //réinitialisation de la zone pour une prochaine mesure
        checkAcc1.checked = true;
        paramMesure.style.display = "none";
        paramMesureDiode.style.display = "none";
        console.log(firstHarmo)
    })
}

//TODO ne reste plus que le clic sur btnLancer qui déclenche l'affichage du bandeau, dynamiquement en fonction des tempos, et si possible avec une petite fenêtre en haut à droite qui indique ce que contient la prochaine mesure...mais oui 





//! Accordeur

function jouerPiano(){
    let note = document.getElementById('harmo-note-or').value;
    let octave = document.getElementById('octave').value;
    let alt = document.getElementById('harmo-alt');

    //empêcher les deux extrêmes
    if((note=="B" && octave == "4" && alt.value == "d") || (note == "C" && octave == "1" && alt.value == "b")){
        alt.value = "n";
    }

    //créer le son à jouer
    let son = new Sound(`media/son/piano/${note+octave+alt.value}.mp3`);

    //jouer le son
    son.play();
}

if(document.getElementById('jouerAccordeur')){
    document.getElementById('jouerAccordeur').addEventListener('click',function(e){
        e.preventDefault();
        jouerPiano();
    })
}


