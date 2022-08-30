<?php 
    define('DB_HOST','sdb-w.hosting.stackcp.net');
    define('DB_USER','leavedc-3231339236');
    define('DB_PASS','SCarycat786**');
    define('DB_NAME','leavedc-3231339236');
    
    try
    {
        $dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
    }
        catch (PDOException $e)
    {
        echo "Looks like you don't have any database/connection for this project. Please check your Database Connection and Try Again! </br>";
        exit("Error: " . $e->getMessage());
    }
?>