<?php

require_once './connection.php';

// controller -> Model
$alunos = $connection->query("SELECT * FROM alunos");
// var_dump($alunos->fetchAll());

// views
require_once "./alunosView.php";