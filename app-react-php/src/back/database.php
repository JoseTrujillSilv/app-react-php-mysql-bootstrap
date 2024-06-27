<?php


function bbdd(){
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $db = 'react';


    return new mysqli($host,$user,$password,$db);
}


function bbddConnection(){
    $host = 'localhost';
    $user = 'root';
    $password = '';

    return bbdd()->connect($host,$user,$password);
}