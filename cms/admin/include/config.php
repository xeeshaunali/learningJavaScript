<?php
define('DB_SERVER','sdb-w.hosting.stackcp.net');
define('DB_USER','contentms-323133d6d0');
define('DB_PASS' ,'SCarycat786**');
define('DB_NAME', 'contentms-323133d6d0');
$con = mysqli_connect(DB_SERVER,DB_USER,DB_PASS,DB_NAME);
// Check connection
if (mysqli_connect_errno())
{
 echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
?>