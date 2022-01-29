<!--Formulaire-->
<h3>Mot de passe oublié ?</h3>
<p>Veuillez renseigner les informations suivantes pour en obtenir un nouveau.</p>
<form method="POST" action="" class="cc-form">
    <div class="div-input">
        <label for="login">
            Login : <span class="star">*</span>
        </label>
        <input type="text" class="text" id="mdplogin" data-number="0" minlength="2" maxlength="50"
            placeholder="Votre login" required>
        <img src="media/image/checky.jfif" alt="icone de validation" class="icone-verif">
        <span class="msg-alert">Choisissez un pseudo entre 3 et 30 caractères</span>
    </div>
    <div class="div-input">
        <label for="email">
            E-mail: <span class="star">*</span>
        </label>
        <input type="email" class="text" id="mdpemail" data-number="1" minlength="2" maxlength="50"
            placeholder="Votre e-mail" required>
        <img src="media/image/checky.jfif" alt="icone de validation" class="icone-verif">
        <span class="msg-alert">Renseigner un email valide</span>
    </div>
    <button type="submit" value="Envoyer" class="btns btn-sub">
        Envoyer
    </button>
</form>
