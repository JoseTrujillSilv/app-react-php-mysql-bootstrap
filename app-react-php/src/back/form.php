<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

require_once './database.php';

// Tu código para manejar la solicitud al recurso

$name = $_POST['name'];
$last_name = $_POST['last_name'];
$edad = $_POST['edad'];
$id = random_int(999,99999);

bbdd()->query("INSERT INTO personas VALUES ($id,'$name','$last_name',$edad)");
