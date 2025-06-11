<?php 
$server="localhost";
$user="root";
$pass="";

$conn=mysqli_connect($server,$user,$pass);

if(!$conn)
{
  die("connection failed:".mysqli_connect_error());
}

$sql="CREATE DATABASE userDB";

$sql="CREATE TABLE userTB(
firstname VARCHAR(30)NOT NULL,
lastname VARCHAR(30)NOT NULL,
email VARCHAR(50)NOT NULL,
pass INT(20)PRIMARY KEY,
cpass INT(20)NOT NULL,UNIQUE)";

$f=$_POST['first_name'];
$l=$_POST['last_name'];
$e=$_POST['email'];
$p=$_POST['password'];
$cp=$_POST['confirm_password'];
 
$sql="INSERT INTO userTB(firstname,lastname,email,pass,cpass)
VALUES('$f','$l','$e',$p,$cp)";

mysqli_close($conn);
?>