<?php
 session_start();
 		$n = $_SESSION['uid'];
		include('Database.php');
		$D =new DatabaseCon;
		$con = $D->connect();
		$D->selectDB('RCB',$con);
			
		$stmnt = "update user set status=0 where userid='{$n}'";
		$D->fireQuery($stmnt);
		$D->closeConnection($con);
		
	session_destroy();
	header('Location:login.php');
?>