
<!--Grille-->
<h4 class="hide-title"></h4>
<!--?la grille-->
<div id="container-grid" class="shows">
    <!-- <div class="cases">F</div> -->
</div>
<!--?la grille-->
<!--Paramètres-->
<div id="container-param">
    <button id="lancer" class="btns btn-sub">Lecture</button>
    <div id="param-grid"> 
        <form action="" method="post">
            <div>
                <div>
                    <label for="generation">
                        Génération des accords :
                        <select id="generation">
                            <option value="perso">Personnalisée</option>
                            <option value="gamme">Aléatoire avec gamme</option>
                            <option value="alea">Aléatoire total</option>
                            <option value="preprog">Préprogrammée</option>
                        </select>
                    </label>
                </div>
            </div>
            <div id="param">
                <!--Affichage conditionné par le choix précédent : "Personnalisée => rien d'affiché ; "Aléatoire avec gamme => scale + tone + alt ; "Aléatoire total" => rien d'affiché ; "Préprogrammée" => template + tone + alt-->
                <div>
                    <label for="scale">
                        Gamme :
                        <select id="scale">
                            <option value="">Majeure</option>
                            <option value="">Mineure nateurelle</option>
                            <option value="">Mineure harmonique</option>
                            <option value="">Blues mineur...</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label for="template">
                        Style :
                        <select id="template">
                            <option value="">Blues</option>
                            <option value="">Rock_1</option>
                            <option value="">Rock_2</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label for="tone">
                        Tonalité :
                        <select id="tone">
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                    </label>
                    <label for="alt">
                        Altération :
                        <select id="alt">
                            <option value="becarre"></option>
                            <option value="diese">&#9839;</option>
                            <option value="bemol">&#9837;</option>
                        </select>
                    </label>
                </div>
            </div>
            <div>
                <div>
                    <label for="grid-bar">
                        Nombre de mesure :
                        <input type="number" id="grid-bar" min="0" max="24" placeholder="12">
                    </label>
                    <!--le max est à régler selon ce que ça rend à l'écran-->
                </div>
                <div>
                    <label for="grid-bar-beats">
                        Nombre de beats par mesure :
                        <input type="number" id="grid-bar-beats" min="1" max="24" placeholder="8">
                    </label>
                </div>
            </div>
            <div>
                <div>
                    <label for="grid-repeat">
                        Répéter la grille :
                        <input type="number" id="grille-repeat" min="1" max="500" placeholder="4">
                    </label>
                </div>
                <div>
                    <label for="grid-bpm">
                        Bpm :
                        <input type="number" id="grid-bpm" min="1" max="400" placeholder="120">
                    </label>
                </div>
                <button id="generer" type="submit" class="btns btn-sub">
                    Générer
                </button>
            </div>
        </form>
        <div id="grid-sl">
            <button class="btns btn-sl save">
                Save
            </button>
            <a href="index.php?p=load">
                <button class="btns btn-sl">
                    Load
                </button>
            </a>
            <button class="btns btn-sub">
                Play
            </button>
        </div>
    </div>
    <div id="rhythm-case">
        <div>
            <button id="ok-mesure" class="btns btn-sub">Ok Mesure</button>
        </div>
        <div class="A0_rhythm">
            <div id="show" class="show-rhythm shows show-flash">
            </div>
        </div>
    </div>
    <div id="diode-custom">
        <form action="" method="POST" class="form-case">
            <fieldset id="nb-accord">
                <legend>Nombre d'accord de la mesure</legend>
                <label for="zeroaccord">
                    Aucun
                    <input type="radio" name="nbaccord" id="zeroaccord" checked>
                </label>
                <label for="unaccord">
                    Un
                    <input type="radio" name="nbaccord" id="unaccord" checked>
                </label>
                <label for="deuxaccord">
                    Deux
                    <input type="radio" name="nbaccord" id="deuxaccord">
                </label>
            </fieldset>
            <div id="un-accord" class="defaccord">
                <label for="un-harmo-note">
                    Note :
                </label>
                <select id="un-harmo-note">
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>
                <label for="un-harmo-alt">
                    Altération :
                </label>
                <select id="un-harmo-alt">
                    <option value=""></option>
                    <option value="&#9839;">&#9839;</option>
                    <option value="&#9837;">&#9837;</option>
                </select>
                <label for="un-quality">
                    Qualité d'accord :
                </label>
                <select id="un-quality">
                    <option value=""></option>
                    <option value="m">m</option>
                    <option value="-">-</option>
                    <option value="+">+</option>
                    <option value="Δ">Δ</option>
                    <option value="m7">m7</option>
                    <option value="Ø">Ø</option>
                    <option value="7">7</option>
                    <option value="mΔ">mΔ</option>
                    <option value="+Δ">+Δ</option>
                    <option value="-7">-7</option>
                    <option value="">autres...</option>
                </select>
                <!-- <label for="un-harmo-accbip">
                    Bip joué :
                </label>
                <select id="un-harmo-accbip">
                    <option value="diode-null">Null</option>
                    <option value="diode-1">Son 1</option>
                    <option value="diode-2">Son 2</option>
                    <option value="diode-3">Son 3</option>
                </select> -->
                <!-- <button id="un-ok-diode-accord" type="button" class="btns btn-sub close-custom">
                    Ok
                </button> -->
            </div>
            <div id="deux-accord" class="defaccord">
                <label for="deux-harmo-note">
                    Note :
                </label>
                <select id="deux-harmo-note">
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>
                <label for="deux-harmo-alt">
                    Altération :
                </label>
                <select id="deux-harmo-alt">
                    <option value=""></option>
                    <option value="&#9839;">&#9839;</option>
                    <option value="&#9837;">&#9837;</option>
                </select>
                <label for="deux-quality">
                    Qualité d'accord :
                </label>
                <select id="deux-quality">
                    <option value=""></option>
                    <option value="m">m</option>
                    <option value="-">-</option>
                    <option value="+">+</option>
                    <option value="Δ">Δ</option>
                    <option value="m7">m7</option>
                    <option value="Ø">Ø</option>
                    <option value="7">7</option>
                    <option value="mΔ">mΔ</option>
                    <option value="+Δ">+Δ</option>
                    <option value="-7">-7</option>
                    <option value="">autres...</option>
                </select>
                <!-- <label for="deux-harmo-accbip">
                    Bip joué :
                </label>
                <select id="deux-harmo-accbip">
                    <option value="diode-null">Null</option>
                    <option value="diode-1">Son 1</option>
                    <option value="diode-2">Son 2</option>
                    <option value="diode-3">Son 3</option>
                </select> -->
                <!-- <button id="deux-ok-diode-accord" type="button" class="btns btn-sub close-custom">
                    Ok
                </button> -->
            </div>
        </form>
    </div>
</div>
<!--Modal save-->
<div class="modal modal-save">
    <form action="" method="post"> <span class="close-save close">&times;</span>
        <h3>Sauvegarder</h3>
        <label for="name-save"> Donnez un nom : <span class="star">*</span></label>
        <input type="text" class="text" placeholder="Ma sauvegarde" required>
        <div class="btn-div-save">
            <button type="reset" class="btns btn-sub reset-save">Annuler</button>
            <button type="submit" class="btns btn-sub">Confirmer</button>
        </div>
    </form>
</div>
