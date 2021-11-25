<?php

namespace src\Models;

interface ModelInterface {
    public function getAll();
    public function get($id);
}