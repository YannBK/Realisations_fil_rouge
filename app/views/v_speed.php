<!--Décompte-->
<div id="speed_count" class="box-div">
    <label for="count" class="box-choice">
        <h4>
            Décompte
        </h4>
    </label>
    <input type="radio" name="speed" class="box-none" id="count">
    <form action="" method="POST" id="decompte" class="speed-form">
        <div>
            <label for="nb-count">
                Nombre de mesures de lancement :
            </label>
            <input type="number" id="nb-count" min="0" placeholder="1">
        </div>
        <button type="submit" class="btns btn-sub">
            Go
        </button>
    </form>
</div>
<!--Accélération-->
<div id="increase" class="box-div">
    <label for="acc" class="box-choice">
        <h4>
            Accélération
        </h4>
    </label>
    <input type="radio" name="speed" class="box-none" id="acc">
    <form action="" method="POST" id="acceleration" class="speed-form">
        <div>
            <label for="inc-start">
                Tempo de départ :
            </label>
            <input type="number" id="inc-start" min="0" placeholder="120">
        </div>
        <div>
            <label for="inc-step">
                Incrémentation de :
            </label>
            <input type="number" id="inc-step" min="0" placeholder="5">
            <p>Bpm par</p>
        </div>
        <fieldset>
            <div>
                <input type="radio" name="inc" id="inc-bar" value="inc-bar" checked>
                <label for="inc-bar">
                    nb de mesure
                </label>
                <label for="choice-bar">
                    :
                </label>
                <input type="number" id="choice-bar" min="0" placeholder="4">
            </div>
            <div>
                <input type="radio" name="inc" id="inc-sec" value="inc-sec">
                <label for="inc-sec">
                    nb de secondes
                </label>
                <label for="choice-sec">
                    :
                </label>
                <input type="number" id="choice-sec" min="0" placeholder="30">
            </div>
        </fieldset>
        <div>
            <label for="inc-max">
                Tempo d'arrivée :
            </label>
            <input type="number" id="inc-max" min="0" placeholder="300">
        </div>
        <button type="submit" class="btns btn-sub">
            Go
        </button>
    </form>
</div>
<!--Décélération-->
<div id="decrease" class="box-div">
    <label for="dec" class="box-choice">
        <h4>
            Décélération
        </h4>
    </label>
    <input type="radio" name="speed" class="box-none" id="dec">
    <form action="" method="POST" id="deceleration" class="speed-form">
        <div>
            <label for="dec-start">
                Tempo de départ
            </label>
            <input type="number" id="dec-start" min="0" placeholder="300">
        </div>
        <div>
            <label for="dec-step">
                Décrémentation de
            </label>
            <input type="number" id="dec-step" min="0" placeholder="5">
            <p>Bpm par</p>
        </div>
        <fieldset>
            <div>
                <input type="radio" name="dec" id="dec-bar" value="dec-bar" checked>
                <label for="dec">
                    nb de mesure
                </label>
                <label for="choice-bar">
                    :
                </label>
                <input type="number" id="choice-bar" min="0" placeholder="4">
            </div>
            <div>
                <input type="radio" name="dec" id="dec-sec" value="dec-sec">
                <label for="dec-sec">
                    nb de secondes
                </label>
                <label for="choice-sec">
                    :
                </label>
                <input type="number" id="choice-sec" min="0" placeholder="30">
            </div>
        </fieldset>
        <div>
            <label for="dec-max">
                Tempo d'arrivée
            </label>
            <input type="number" id="dec-max" min="0" placeholder="100">
        </div>
        <button type="submit" class="btns btn-sub">
            Go
        </button>
    </form>
</div>
<!--Mute-->
<div id="mute" class="box-div">
    <label for="mut" class="box-choice">
        <h4>
            Mesures silencieuses
        </h4>
    </label>
    <input type="radio" name="speed" class="box-none" id="mut">
    <form action="" method="POST" id="silence" class="speed-form">
        <div>
            <label for="choice-mute">
                Régulier
            </label>
            <input type="radio" name="choice-mute" id="mute-reg" value="mute-reg" checked>
        </div>
        <div>
            <label for="mes-plays">Nb de mesures jouées :
            </label>
            <input type="number" id="mes-plays" min="0" placeholder="4">
        </div>
        <div>
            <label for="mes-mute">
                Nb de mesures mute :
            </label>
            <input type="number" id="mes-mute" min="0" placeholder="4">
        </div>
        <div>
            <label for="mute-random">
                Random
            </label>
            <input type="radio" name="choice-mute" id="mute-random" value="mute-random">
        </div>
        <div>
            <label for="freq-mute">
                Fréquence de mute :
            </label>
            <input type="number" id="freq-mute" min="0" max="100" placeholder="15%">
        </div>
        <button type="submit" class="btns btn-sub">
            Go
        </button>
    </form>
</div>
