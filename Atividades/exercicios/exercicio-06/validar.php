<?php

$nome = $_POST['nome'];
$sexo = $_POST['sexo'];
$numero = $_POST['numero'];
$rua = $_POST['rua'];
$bairro = $_POST['bairro'];
$cep = $_POST['cep'];

var_dump($_POST);

if (!isset($_POST)) {
    echo "Informe todos os campos";
    return ;
}

echo "$nome, seu cadastro foi realizado com sucesso!";
echo '<a href="index.php">Voltar</a>';



