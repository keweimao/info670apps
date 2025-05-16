<?php
require_once 'config.php';

$dsn = "sqlite:$db";

try {
    $pdo = new PDO($dsn);
    echo 'Connected to the SQLite database successfully!';
    // $programs = get_programs($pdo);
    // var_dump($programs);
    $programs = $pdo->query('SELECT program_id, program_name FROM programs');

    foreach($programs as $program){
        echo $program["program_id"]; 
        echo $program["program_name"]; 
        echo "<br>"; 
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}