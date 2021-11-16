<?php

require_once 'connection.php';

var_dump($_POST);
$nome = $_POST['nome'];
$unidade = $_POST['unidade'];

$stmt = $connection->prepare("INSERT INTO produtos (nome, unidade) VALUES  (:nome, :unidade)");
$stmt->bindParam(':nome', $nome);
$stmt->bindParam(':unidade', $unidade);

$stmt->execute();

header('Location: alunosView.php');
exit();