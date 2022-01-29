<!DOCTYPE html>
<html>

<head>
    <!--titre-->
    <title>Métronome</title>
    <!--meta données-->
    <meta charset=utf-8>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Language" CONTENT="fr" />
    
    <script type="text/javascript" src="js/modal-save.js" defer></script>
    <script type="text/javascript" src="js/formulaire.js" defer></script>
    <!--CSS-->
    <link rel="stylesheet" href="css/stylesreset.css">
    <link rel="stylesheet" href="css/commun_flex.css">
    <link rel="stylesheet" href="css/metronome.css">
    <link rel="stylesheet" href="css/ecrans.css">
    <link rel="stylesheet" href="css/modales.css">
    <link rel="stylesheet" href="css/media.css">
</head>

<body>
    <header>
        <h1>ZE METRONOME</h1>
    </header>
    <main>
        <div class="device">
<!--Navigation-->
            <nav id="hamnav">
                <label for="hamburger">&#9776;</label>
                <input type="checkbox" id="hamburger" />
                <a id="back" href="#"><!--&#9750;-->&larr;</a>
                <h2>
                    <!--METRONOME-->
                    <?= $titre ?>
                </h2>
                <div id="hamitems">
                    <a href="index.php?p=metronome">Métronome</a>
                    <a href="index.php?p=transition">Rythme avancé</a>
                    <a href="index.php?p=speed">Speed training</a>
                    <a href="index.php?p=harmonie">Grille harmonique</a>
                    <a href="index.php?p=accordeur">Accordeur</a>
                    <a href="index.php?p=preference">Préférences</a>
                    <a href="index.php?p=connexion">Connexion / Création</a>
                    <a href="index.php?p=compte">Compte utilisateur</a>
                    <!--ne s'affiche que si connecté-->
                    <a href="index.php?p=evaluation">&#201;valuez-moi!</a>
                    <a href="index.php?p=contact">Contact</a>
                    <a href="index.php?p=mentions">Mentions légales</a>
                </div>
                <a href="index.php?p=connexion">
                    <button id="connexion" value="connection" class="btns btn-sub">
                        Connexion
                    </button>
                </a>
                <!--switch en connexion-->
                <section>
                    <span class="login">
                        Login
                    </span>
                    <span class="checked-ok">
                        &#10004;
                    </span>
                    <span class="checked-none">
                        <span class="infobulle" aria-label="Déconnexion">
                            &times;
                        </span>
                    </span>
                </section>
            </nav>

<?= $content; ?>

<!--Pubs-->
        <div class="ads">
            PUB PUB PUB PUB PUB PUB PUB
        </div>
    </main>
    <footer>

    </footer>
<!-- 
    <script type="text/javascript" src="js/modal-save.js"></script>
    <script type="text/javascript" src="js/formulaire.js"></script> -->
</body>

</html>