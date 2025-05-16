<?php
echo "hello";
$myfile = fopen("data/test.txt", "w");
fwrite($myfile, "data line here");

$db = new SQLite3("data/mydb.sqlite", SQLITE3_OPEN_CREATE | SQLITE3_OPEN_READWRITE); 
$db->enableExceptions(true); 


?>

there! 