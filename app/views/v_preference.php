<!--Mode couleur-->
<div id="mode" class="box-div">
    <label for="mod" class="box-choice">
        <h4>
            Mode sombre / clair
        </h4>
    </label>
        <input type="radio" name="pref" class="box-none" id="mod">
    <form action="" method="POST" id="form-mode" class="pref-form">
        Sombre
        <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
        Clair
    </form>
</div>
<!--Choix famille sons-->
<div id="family" class="box-div">
    <label for="fam" class="box-choice">
        <h4>
            Sons prédéfinis
        </h4>
    </label>
        <input type="radio" name="pref" class="box-none" id="fam">
    <form action="" method="POST" id="form-fam" class="pref-form">
        Choix des bips :
        <label for="clave">
            <input type="radio" name="son" id="clave" value="clave" checked>Clave
        </label>
        <label for="hihat">
            <input type="radio" name="son" id="hihat" value="hihat">Hihat
        </label>
        <label for="bell">
            <input type="radio" name="son" id="bell" value="bell">Bell
        </label>
        <label for="snap">
            <input type="radio" name="son" id="snap" value="snap">Snap
        </label>
    </form>
</div>
<!--Notation-->
<div id="notation" class="box-div">
    <label for="nota" class="box-choice">
        <h4>
            Notation des accords
        </h4>
    </label>
        <input type="radio" name="pref" class="box-none" id="nota">
    <form action="" method="POST" id="form-nota" class="pref-form">
        Américaine
        <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
        Européenne
    </form>
</div>
<!--Max bpm-->
<div id="maxy" class="box-div">
    <label for="max" class="box-choice">
        <h4>
            Maximum Bpm
        </h4>
    </label>
        <input type="radio" name="pref" class="box-none" id="max">
    <form action="" method="POST" id="form-max" class="pref-form">
        <div>
            <label for="max-bpm">
                Max Bpm :
            </label>
                <input type="number" id="max-bpm" min="1" max="500" placeholder="400">
        </div>
        <button type="submit" class="btns btn-sub">
            Ok
        </button>
    </form>
</div>
<!--Statistiques-->
<div id="stats" class="box-div">
    <label for="stat" class="box-choice">
        <h4>
            Statistiques d'utilisation
        </h4>
    </label>
        <input type="radio" name="pref" class="box-none" id="stat">
    <form action="" method="POST" id="form-stat" class="pref-form">
        à voir
    </form>
</div>
