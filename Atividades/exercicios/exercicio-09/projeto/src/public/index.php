<?php

require '../../vendor/autoload.php';

use src\Models\Estados;

$estados = new Estados(1, 'Minas Gerais', 'MG');
var_dump($estados);