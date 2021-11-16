<?php

// config
$servername = "localhost";
$username = "root";
$password = "";
$db = "school";

try{
  $dsn = "mysql:host=$servername;dbname=$db";
  $connection = new PDO($dsn, $username, $password);

} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}