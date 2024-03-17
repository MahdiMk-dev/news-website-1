<?php
include('connection.php');
// Get news from database
$sql = "SELECT * FROM news";
$result = $mysqli->query($sql);

$news = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $news[] = $row;
    }
}
header('Content-Type: application/json');
echo json_encode($news);
?>
