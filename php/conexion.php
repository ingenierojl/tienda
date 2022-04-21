<?php

//recibir datos desde html

$nombre = $_POST [ 'boxname' ]; 
$apellido=  $_POST [ 'boxlastname' ];
$email=  $_POST [ 'boxlastname' ];
$celular=  $_POST [ 'boxnumerocel' ];

print "<p>el nombre es $nombre</p>\n";
print "<p>el apellido es $apellido</p>\n";
print "<p>el email es $email</p>\n";
print "<p>el celular es $celular</p>\n";

$servername = "localhost";
$database = "registros";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$sql = ("INSERT INTO `personas` (`nombre`, `apellido`, `email`, `celular`) VALUES ('$nombre', '$apellido', '$email', '$celular')");
//$my_Insert_Statement = $conn->prepare("INSERT INTO `personas` (`nombre`, `apellido`, `email`, `celular`) VALUES (:nombre, :apellido, :email, :numcelular)");

/*
$my_Insert_Statement->bindParam(:nombre, $nombre);
$my_Insert_Statement->bindParam(:apellido, $apellido);
$my_Insert_Statement->bindParam(:email, $email);
$my_Insert_Statement->bindParam(:numcelular, $celular);*/

if (mysqli_query($conn, $sql)) {
    echo "Exito en la insercion";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}




mysqli_close($conn);
?>