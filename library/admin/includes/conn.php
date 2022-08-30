<?php
	$conn = new mysqli('sdb-x.hosting.stackcp.net', 'library-323134d6a5', 'SCarycat786**', 'library-323134d6a5');

	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}
	
?>