
<!--Affichage-->
<div id="A0_show">
    <div class="shows show-flash">
        <p>
            &#9834; &#9835;&#9834;&#9835;&#9835;&#9833;&#9834;&#9836;&#9836;&#9834;&#9833;&#9835; &#9834;&#9834;&#9835;&#9834; &#9835;&#9835;&#9833;&#9834;&#9836;&#9836;&#9834;&#9833;&#9835;&#9834;&#9834; &#9835;&#9834;&#9835;&#9835; &#9833;&#9834;&#9836;&#9836;&#9834;&#9833;&#9835;&#9834;&#9834;&#9835;&#9834;&#9835;&#9835;&#9833;&#9834;&#9836;&#9836;&#9834; &#9833;&#9835;&#9834;&#9834;&#9835;&#9834;&#9835;&#9835;&#9833;&#9834;&#9836;&#9836; &#9834;&#9833;&#9835;&#9834; &#9834;&#9835;&#9834;&#9835;&#9835;&#9833;&#9834;&#9836;&#9836;&#9834;&#9833;&#9835;&#9834;</p>
    </div>
</div>
<!--Range <=> Gamme ?-->
<div id="A0_range">
    <input type="range" name="touch-range" min="1" max="400" value="120">
    <div>A remplir avec la/les gammes si affichage harmonique, à switcher avec range... ou alors input:range on enlève tout simplement</div>
</div>
<!--Gestion Bpm-->
<div id="A0_manage_bpm">
    <div>
        <button class="btns btn15 btninc" value="-5">
            -5
        </button>
        <button class="btns btn15 btninc" value="-1">
            -1
        </button>
    </div>
    <div class="shows">
        <input type="number" id="tempo" value="60" min="1">
        &nbsp;&#9834;
    </div>
    <div>
        <button class="btns btn15 btninc" value="1">
            +1
        </button>
        <button class="btns btn15 btninc" value="5">
            +5
        </button>
    </div>
</div>
<div id="A0_btn_down" class="btn_down">
    <button id="btn-stop" class="btns btn-sub btn-pause">
        Stop
    </button>
    <button id="btn-play" class="btn-play btns btn-sub">
        Play
    </button>
</div>
<!--Btn speed + flash-->
<div id="A0-speed-light">
    <a href="index.php?p=speed">
        <button class="btns btn-sub">
            Speed
        </button>
    </a>
    <label for="flash"><button value="checked" id="btn_check" class="btns btn-sub">
        Flash
    </button></label>
    <input type="checkbox" id="box-flash" class="box-flash">
</div>
<!--Signature rythmique-->
<div id="A0_signature">
    <form action="">
        <label for="nb-bips">Nombre de beat :</label>
            <div>
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
            </div>
            <label for="nb-tps">Diodes par battement :</label>
            <div>
                <select name="nb-tps" id="nb-tps" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3" >3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <button type="button" id="ok_config" class="btns btn-sub">ok diodes</button>
        </form>
</div>
<!--Gestion rythme-->
<div class="A0_rhythm">
    <div class="rhythm_diode">
        <a href="index.php?p=transitions">
            <button class="btns A0_big-btn">
                Avancé
            </button>
        </a>
        <div id="show" class="show-rhythm shows">
        </div>
        <div>
            <button class="btn-sl btns save">
                Save
            </button>
            <a href="index.php?p=load">
                <button class="btn-sl btns">
                    Load
                </button>
            </a>
        </div>
    </div>
</div>
<!--Modal save-->
<div class="modal modal-save">
    <form action="" method="post"> <span class="close close-save">&times;</span>
        <h3>Sauvegarder</h3>
        <label for="name-save"> Donnez un nom : <span class="star">*</span></label>
        <input type="text" class="text" placeholder="Ma sauvegarde" required>
        <div class="btn-div-save">
            <button type="reset" class="btns btn-sub reset-save">Annuler</button>
            <button type="submit" class="btns btn-sub">Confirmer</button>
        </div>
    </form>
</div>
