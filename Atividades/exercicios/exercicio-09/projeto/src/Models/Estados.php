<?php

namespace src\Models;

class Estados implements ModelInterface{
    private $nome, $id, $sigla;

    public function __construct($id, $nome, $sigla){
        $this->id = $id;
        $this->nome = $nome;
        $this->sigla = $sigla;
    }

    public function getAll() {

    }

    public function get($id) {

    }
}