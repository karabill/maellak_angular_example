<?php
define('DB_HOST', getenv('OPENSHIFT_MYSQL_DB_HOST'));
define('DB_PORT',getenv('OPENSHIFT_MYSQL_DB_PORT')); 
define('DB_USER',getenv('OPENSHIFT_MYSQL_DB_USERNAME'));
define('DB_PASS',getenv('OPENSHIFT_MYSQL_DB_PASSWORD'));
define('DB_NAME',getenv('OPENSHIFT_GEAR_NAME'));

if(isset($_GET["msg"])) {
  $msg = $_GET["msg"];
  $dsn = 'mysql:dbname='.DB_NAME.';host='.DB_HOST.';port='.DB_PORT;
  $dbh = new PDO($dsn, DB_USER, DB_PASS);
  $stmt = $dbh->prepare("INSERT INTO messages (text) VALUES (:msg)");
  $stmt->bindParam(':msg', $msg);
  $stmt->execute();
  $dbh = null;
}
?>
