<!--Tableau des transitions-->
<div id="trans-conteneur-1">
    <h4 class="hide-title"></h4>
    <div id="trans-table"></div>
    <div id="trans_total">
        <button class="btn-sub btns save">
            Save
        </button>
        <button id="btn-stop" class="btns btn-sub btn-pause">
            Stop
        </button>
        <button type="submit" class="btns btn-sub play-trans">
            Play
        </button>
        <label for="flash"><button value="checked" id="btn_check" class="btns btn-sub">
                Flash
            </button></label>
        <input type="checkbox" id="box-flash" class="box-flash">
    </div>
</div>
<!--Paramètres rythme-->
<div id="trans-rhythm">
    <div id="A2_inputs">
        <form action="">
            <div>
                <label for="nb-bips">Nombre de beat</label>
                <select name="nb-bips" id="nb-bips">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5" selected>5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                </select>
                <label for="nb-tps">Diodes par battement</label>
                <select name="nb-tps" id="nb-tps">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div>
                <label for="trans-repet">Répétitions</label>
                <input id="trans-repet" type="number" placeholder="répét">
                <label for="trans-tempo">Tempo</label>
                <input id="trans-tempo" type="number" placeholder="120">
                <button type="button" id="ok_config" class="btns btn-sub">ok diodes</button>
            </div>
        </form>
    </div>
    <!--Rythme-->
    <div class="A0_rhythm">
        <div id="show" class=" show-rhythm shows show-flash"></div>
        <button id="btn-valid-trans" class="btns A0_big-btn">Ajouter</button>
    </div>
</div>
</div>
<!--Modal save-->
<div class="modal modal-save">
    <form action="" method="post"> <span class="close close-save">&times;</span>
        <h3>Sauvegarder</h3>
        <label for="name-save">
            Donnez un nom : <span class="star">*</span>
        </label>
        <input type="text" class="text" placeholder="Ma sauvegarde" required>
        <div class="btn-div-save">
            <button type="reset" class="btns btn-sub reset-save">
                Annuler
            </button>
            <button type="submit" class="btns btn-sub">
                Confirmer
            </button>
        </div>
    </form>
</div>
