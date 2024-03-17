<?php

include('connection.php');

// Add news to database
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['title']) && isset($_POST['content'])) {
    $title = $_POST['title'];
    $content = $_POST['content'];
    

    $sql = "INSERT INTO news (title, content) VALUES ('$title', '$content')";

    if ($mysqli->query($sql) === TRUE) {
        $response["status"]="News created successfully";

    } 
    else
    $response["status"]="News failed to create";
}
else $response["status"]="Please fill all form inputs";

$mysqli->close();
header('Content-Type: application/json');
echo json_encode($response);

?>
