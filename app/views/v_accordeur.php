<h3>
        Accordage d'oreille
</h3>
<form action="" method="post" class="accord-form">
    <fieldset>
        <legend>Quelle note voulez-vous entendre ? :</legend>
        <label for="harmo-note_or">
            Note :
        </label>
        <select id="harmo-note-or">
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="A">A</option>
            <option value="B">B</option>
        </select>
        <label for="harmo-alt">
            Altération :
        </label>
        <select id="harmo-alt">
            <option value="n"></option>
            <option id="b4d" value="d">&#9839;</option>
            <option id="c1b" value="b">&#9837;</option>
        </select>
    </fieldset>
    <div>
        <label for="octave">Octave : </label>
        <select id="octave">
            <option value="1">1</option>
            <option value="2" >2</option>
            <option value="3"selected>3</option>
            <option value="4">4</option>
        </select>
    </div>
    <button id="jouerAccordeur" class="btns btn-sub">Jouer</button>
</form>