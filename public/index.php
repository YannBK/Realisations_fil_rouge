<?php

if (isset($_GET['p'])) {
    $p = $_GET['p'];
} else {
    $p = 'home';
}

ob_start();

require '../app/controllers/'.$p.'.php';
$content = ob_get_clean();
$titre = ucwords($p);
require '../app/views/templates/template.php';
?>