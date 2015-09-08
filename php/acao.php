<?php
require 'ServicePHP.php';

 $celsius = $_GET['celsius'];
 $valor = 0.0;
 
 if(is_numeric($celsius)){
     $valor = Service:: converte($celsius);
     
 }

echo $valor;

?>