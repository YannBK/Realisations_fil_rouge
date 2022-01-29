<!--Formulaire-->
<h3>Contactez le développeur</h3>
<form method="POST" action="" class="cc-form">
    <div class="div-input">
        <label for="name">
            Nom / Login : <span class="star">*</span>
        </label>
        <input type="text" class="text" id="name" data-number="0" minlength="3" maxlength="30" placeholder="Votre nom"
            required>
        <img src="../../fichiers/images/checky.jfif" alt="icone de validation" class="icone-verif">
        <span class="msg-alert">Dites-moi qui vous êtes</span>
    </div>
    <div class="div-input">
        <label for="firstname">
            Prénom:
        </label>
        <input type="text" class="text" id="firstname" minlength="3" maxlength="30"
            placeholder="Votre prénom">
    </div>
    <div class="div-input">
        <label for="email">
            E-mail: <span class="star">*</span>
        </label>
        <input type="email" class="text" id="email" data-number="1" minlength="3" maxlength="50" placeholder="Votre e-mail"
            required>
        <img src="../../fichiers/images/checky.jfif" alt="icone de validation" class="icone-verif">
        <span class="msg-alert">Renseigner un email valide</span>
    </div>
    <div class="div-input">
        <label for="subject">
            Sujet: <span class="star">*</span>
        </label>
        <input type="text" class="text" id="subject" data-number="2" minlength="3" maxlength="50"
            placeholder="Objet de votre prise de contact" required>
        <img src="../../fichiers/images/checky.jfif" alt="icone de validation" class="icone-verif">
        <span class="msg-alert">Renseigner le sujet de votre contact</span>
    </div>
    <div class="div-input">
        <label for="textarea">
            Exprimez-vous:
        </label>
        <textarea id="textarea" cols="70" rows="10"
            placeholder="N'hésitez pas à être honnête, dans un sens comme dans l'autre"></textarea>
    </div>
    <button type="submit" value="Envoyer" class="btns btn-sub">
        Envoyer
    </button>
</form>
