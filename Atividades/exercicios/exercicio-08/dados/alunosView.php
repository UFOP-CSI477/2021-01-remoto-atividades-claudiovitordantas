<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alunos</title>
</head>
<body>

    <ol>
        <?php
        while($aluno = $alunos->fetch()){
            echo "<li>Nome: " .$aluno['nome'] . " - Matricula: " .$aluno['matricula'] . "</li>";
        }
        ?>
    </ol>

</body>
</html>