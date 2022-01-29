<!--Formulaire connexion-->
<div id="box-connect" class="box-div">
    <label for="connect" class="box-choice">
        <h4>
            Connexion
        </h4>
    </label>
    <input type="radio" name="cc-radio" class="box-none" id="connect" checked>
    <form method="POST" action="" class="cocr-form">
        <div class="div-input">
            <label for="login">
                Login : <span class="star">*</span>
            </label>
            <input type="text" class="text" id="login" data-number="0" minlength="3" maxlength="30" placeholder="Login"
                required>
            <img src="media/image/checky.jfif" alt="icone de validation" class="icone-verif">
            <span class="msg-alert">Votre pseudo doit comprendre entre 3 et 30 caractères</span>
        </div>
        <div class="div-input">
            <label for="password">
                Mot de passe : <span class="star">*</span>
            </label>
            <input type="password" class="text" id="password" data-number="1" minlength="8" maxlength="30"
                placeholder="ex : eG*8FDg$75" required>
            <img src="media/image/checky.jfif" alt="icone de validation" class="icone-verif">
            <span class="msg-alert">Le mot de passe ne correspond pas</span>
        </div>
        <div>
            <button type="submit" value="connection" class="btns btn-sub">
                Connexion
                <!-- faire un popup de confirmation et re-bienvenue-->
            </button>
            <a href="index.php?p=mdp">Mot de passe oublié?</a>
        </div>
    </form>
</div>
<!--Formulaire création-->
<div id="box-create" class="box-div">
    <label for="create" class="box-choice">
        <h4>
            Créer un compte
        </h4>
    </label>
    <input type="radio" name="cc-radio" class="box-none" id="create">
    <form method="POST" id="form_creation_compte" action="" class="cocr-form">
        <div class="div-input">
            <label for="newlogin">
                Login : <span class="star">*</span>
            </label>
            <input type="text" class="text" id="newlogin" data-number="2" minlength="3" maxlength="30" placeholder="Login"
                required>
            <img src="media/image/checky.jfif" alt="icone de validation" class="icone-verif">
            <span class="msg-alert">Choisissez un pseudo entre 3 et 30 caractères</span>
        </div>
        <div class="div-input">
            <label for="newpassword">
                Mot de passe : <span class="star">*</span>
            </label>
            <input type="password" class="text" id="newpassword" data-number="3" minlength="8" maxlength="30"
                placeholder="ex : eG*8FDg$75" required>
            <img src="media/image/checky.jfif" alt="icone de validation" class="icone-verif">
            <span class="msg-alert">8 caractères minimum, dont un symbole, une lettre majuscule, une lettre minuscule, un chiffre</span>
        </div>
        <div class="div-input">
            <label for="newemail">
                Votre email : <span class="star">*</span>
            </label>
            <input type="email" class="text" id="newemail" data-number="4" minlength="3" maxlength="50"
                placeholder="Votre e-mail" required>
            <img src="media/image/checky.jfif" alt="icone de validation" class="icone-verif">
            <span class="msg-alert">Choisissez un email valide</span>
        </div>
        <div class="div-input">
            <label for="confirmwpassword">
                Confirmez le mot de passe : <span class="star">*</span>
            </label>
            <input type="password" class="text" id="confirmpassword" data-number="5" minlength="8" maxlength="30"
                placeholder="ex : eG*8FDg$75" required>
            <img src="media/image/checky.jfif" alt="icone de validation" class="icone-verif">
            <span class="msg-alert">Veuillez confirmez votre mot de passe</span>
        </div>
        <div>
            <button type="submit" value="creation" class="btns btn-sub">
                Créer
                <!-- faire un popup de confirmation et bienvenue-->
            </button>
        </div>
    </form>
</div>
