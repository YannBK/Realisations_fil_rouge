//! _-_-_-_-_-_-_-_ Validations de formulaires _-_-_-_-_-_-_-_

const msgAlert = document.querySelectorAll('.msg-alert')
const iconeVerif = document.querySelectorAll('.icone-verif')

//fonction vérification login
function verifLogin(e) {
    let position = e.target.dataset.number;
    if (e.target.value.length >= 3) {
        iconeVerif[position].style.display = "inline";
        iconeVerif[position].src = "media/image/checky.jfif";
        msgAlert[position].style.display = "none";
    }
    else {
        iconeVerif[position].style.display = "inline";
        iconeVerif[position].src = "media/image/erreur.png";
        msgAlert[position].style.display = "inline";
    }
}

//fonction vérification email
function verifEmail(e) {
    let position = e.target.dataset.number;
    const regexEmail = /\S+@\S+\.\S+/;
    if (e.target.value.search(regexEmail) === 0) {
        iconeVerif[position].style.display = "inline";
        iconeVerif[position].src = "media/image/checky.jfif";
        msgAlert[position].style.display = "none";
    }
    else if (e.target.value.search(regexEmail) === -1) {
        iconeVerif[position].style.display = "inline";
        iconeVerif[position].src = "media/image/erreur.png";
        msgAlert[position].style.display = "inline";
    }
}

//fonction vérification mdp
function verifPassword(e){
    let valeur = e.target.value;
    let position = e.target.dataset.number;  
    let objetVal = {
        special : 0,
        lettreMin : 0,
        lettreMaj : 0,
        chiffre : 0,
        longueur : 0
    }
    //regex découpé
    const specialChar = /[^a-zA-Z0-9]/;
    const alphabetMin = /[a-z]/;
    const alphabetMaj = /[A-Z]/;
    const chiffres = /[0-9]/;
    //check si char existent
    if(valeur.search(specialChar) !== -1){
        objetVal.special = 1;
    }
    if(valeur.search(alphabetMin) !== -1){
        objetVal.lettreMin = 1;
    }
    if(valeur.search(alphabetMaj) !== -1){
        objetVal.lettreMaj = 1;
    }
    if(valeur.search(chiffres) !== -1){
        objetVal.chiffre = 1;
    }
    if(valeur.length >= 8){
        objetVal.longueur = 1;
    }
    //gérer le retour
    if(e.inputType = 'deleteContentBackward'){
        if(valeur.search(specialChar) === -1){
            objetVal.special = 0;
        }
        if(valeur.search(alphabetMin) === -1){
            objetVal.lettreMin = 0;
        }
        if(valeur.search(alphabetMaj) === -1){
            objetVal.lettreMaj = 0;
        }
        if(valeur.search(chiffres) === -1){
            objetVal.chiffre = 0;
        }
        if(valeur.length < 8){
            objetVal.longueur = 0;
        }
    }
    //valider l'ensemble des contraintes
    let testOk =0;
    for(let contrainte in objetVal){
        if(objetVal[contrainte] > 0){
            testOk++;
        }
    }
    if(testOk>=5){
        iconeVerif[position].style.display = "inline";
        iconeVerif[position].src = "media/image/checky.jfif";
        msgAlert[position].style.display = "none";
    }
    else{
        iconeVerif[position].style.display = "inline";
        iconeVerif[position].src = "media/image/erreur.png";
        msgAlert[position].style.display = "inline";
    }
}

//fonction confirmation mdp
function confirmPassword(e){
    let position = e.target.dataset.number;  
    let valeurMdp = inputNewPassword.value;
    if(e.target.value.length === 0){
        iconeVerif[position].style.display = "inline";
        iconeVerif[position].src = "media/image/erreur.png";
        msgAlert[position].style.display = "inline";
    }
    else if(e.target.value === valeurMdp){
        iconeVerif[position].style.display = "inline";
        iconeVerif[position].src = "media/image/checky.jfif";
        msgAlert[position].style.display = "none";
    }
    else{
        iconeVerif[position].style.display = "inline";
        iconeVerif[position].src = "media/image/erreur.png";
        msgAlert[position].style.display = "inline";
    }
}

//*Création
const inputNewLogin = document.getElementById('newlogin');
const inputNewPassword = document.getElementById('newpassword');
const inputNewEmail = document.getElementById('newemail');
const inputConfirmPassword = document.getElementById('confirmpassword');

//login création
if (inputNewLogin) {
    inputNewLogin.addEventListener('input', (e) => {
        verifLogin(e);
    },false);
}

//password creation
if (inputNewPassword != null) {
    inputNewPassword.addEventListener('input',(e)=>{
        verifPassword(e);
    },false);
}

//email création
if (inputNewEmail != null) {
    inputNewEmail.addEventListener('input', (e) => {
        verifEmail(e);
    },false);
}

//confirmation password création
if (inputConfirmPassword != null) {
    inputConfirmPassword.addEventListener('input', (e)=>{
        confirmPassword(e);
    },false)
}

//*Connexion
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

//login connexion
if (inputLogin != null) {
    inputLogin.addEventListener('input', (e) => {
        verifLogin(e);
    },false);
}

//password connexion
if (inputPassword != null) {
    inputPassword.addEventListener('input', (e)=>{
        verifPassword(e);
    },false)
}

//*Contact
const inputLoginContact = document.getElementById('name');
const inputEmailContact = document.getElementById('email');
const inputSubjectContact = document.getElementById('subject');

//login contact
if (inputLoginContact != null) {
    inputLoginContact.addEventListener('input', (e) => {
        verifLogin(e);
    },false);
}

//email contact
if (inputEmailContact != null) {
    inputEmailContact.addEventListener('input', (e) => {
        verifEmail(e);
    },false);
}

//sujet contact
if (inputSubjectContact != null) {
    inputSubjectContact.addEventListener('input', (e) => {
        verifLogin(e);
    },false);
}

//*Mot de passe oublié
const inputMdpLogin = document.getElementById('mdplogin');
const inputMdpEmail = document.getElementById('mdpemail');

//mdp oublié vérification login
if (inputMdpLogin != null) {
    inputMdpLogin.addEventListener('input', (e) => {
        verifLogin(e);
    },false);
}

//mdp oublié vérification email
if (inputMdpEmail != null) {
    inputMdpEmail.addEventListener('input', (e) => {
        verifEmail(e);
    },false);
}
